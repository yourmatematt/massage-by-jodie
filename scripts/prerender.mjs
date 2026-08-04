// Build-time pre-render (postbuild step).
//
// This is a Vite SPA: build/index.html ships an empty <div id="root"></div> and
// every word of the page is injected client-side by React. Crawlers that don't
// run JavaScript (Bing, AI crawlers, social scrapers, audit tools) therefore
// see a blank page. This step loads each route in a real browser, waits for
// React to render, and writes the fully-rendered HTML back over the built file
// so crawlers receive real markup.
//
// The client JS still boots normally on top: src/main.tsx uses createRoot()
// .render() (not hydrateRoot), so React clears #root and re-renders the same
// tree on load. Nothing to guard against — the snapshot is inert markup that
// exists purely for non-JS consumers.
//
// Runs after `vite build` via the package.json "postbuild" hook. Serving uses
// `vite preview` so routes resolve the same way production does. Windows dev
// uses the installed Chrome; CI/Linux (Vercel) falls back to a bundled
// Chromium build.
//
// Ported from ../yma-v2/scripts/prerender.mjs.
import { chromium } from 'playwright-core';
import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createServer } from 'node:net';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// vite.config.ts sets build.outDir to 'build', not the vite default 'dist'.
const OUT_DIR = path.join(ROOT, 'build');
// Local Windows Chrome handles 4 parallel pages fine; the CI browser build
// (software-rendered, shared build machine) is happier with 2.
const CONCURRENCY = process.platform === 'win32' ? 4 : 2;
const RENDER_TIMEOUT_MS = 10_000;
// Floor for the "did this actually render?" assertion below. The real page is
// several thousand characters of copy; anything under this means React failed
// to render and we're about to ship a blank page again.
const MIN_TEXT_CHARS = 500;

// Routes to snapshot. src/App.tsx composes one page out of sections and there
// is no router in the project at all (no react-router dependency), so "/" is
// the only route. public/sitemap.xml lists the same single URL.
const ROUTES = ['/'];

// Windows dev machine uses the installed Chrome. Linux CI (Vercel) uses
// @sparticuz/chromium: a Chromium build with all shared libraries bundled,
// because Vercel's build image lacks Chrome's system deps (libnspr4 etc.)
// and Playwright's downloaded browsers can't run on it.
const CHROME_WIN = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
let executablePath = process.platform === 'win32' ? CHROME_WIN : undefined;
let launchArgs = [];
if (process.platform !== 'win32') {
  const { default: serverlessChromium } = await import('@sparticuz/chromium');
  executablePath = await serverlessChromium.executablePath();
  // sparticuz's default args are tuned for AWS Lambda; --single-process and
  // --no-zygote crash Chromium under Playwright with multiple pages, and
  // Playwright supplies its own --headless. Filter those, keep the rest
  // (they configure the bundled libs the build image is missing).
  launchArgs = serverlessChromium.args.filter(
    (a) =>
      a !== '--single-process' &&
      a !== '--no-zygote' &&
      !a.startsWith('--headless')
  );
  console.log(`prerender: using @sparticuz/chromium at ${executablePath}`);
}

/** Map a route to the built file it should be written to. */
function fileForRoute(route) {
  if (route === '/') return path.join(OUT_DIR, 'index.html');
  return path.join(OUT_DIR, route.replace(/^\//, ''), 'index.html');
}

/** Visible body text, used only for the did-it-render assertion. */
function visibleBodyText(html) {
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? '';
  return body
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<svg[\s\S]*?<\/svg>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** An OS-assigned free port, so we never collide with another dev server. */
function findFreePort() {
  return new Promise((resolve, reject) => {
    const srv = createServer();
    srv.on('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });
}

/** The hashed entry script vite just emitted — our build's fingerprint. */
function expectedEntryScript() {
  const html = readFileSync(path.join(OUT_DIR, 'index.html'), 'utf8');
  const src = html.match(/<script[^>]+src="([^"]+\.js)"/)?.[1];
  if (!src) {
    throw new Error('prerender: no entry script in build/index.html — did the build run?');
  }
  return src;
}

/**
 * Wait until the preview server answers AND is serving *our* build.
 *
 * The identity check is not paranoia: on a fixed port, an unrelated dev server
 * already holding it gets snapshotted into the build output instead. We use a
 * free port, and verify the origin serves the entry script this build emitted.
 */
async function waitForServer(url, entryScript, isDead, timeoutMs = 30_000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    if (isDead()) {
      throw new Error('prerender: vite preview exited before serving anything');
    }
    try {
      const html = await fetch(url, { redirect: 'manual' }).then((r) => r.text());
      if (html.includes(entryScript)) return;
      if (html.length > 0) {
        throw new Error(
          `prerender: ${url} is serving something other than this build ` +
            `(expected entry script ${entryScript}) — another server may hold the port`
        );
      }
    } catch (err) {
      if (err instanceof Error && err.message.startsWith('prerender:')) throw err;
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`prerender: preview server did not start at ${url}`);
}

/** Snapshot one route, writing the rendered HTML back over its built file. */
async function snapshot(browser, origin, route) {
  const absFile = fileForRoute(route);
  const before = visibleBodyText(readFileSync(absFile, 'utf8')).length;
  const page = await browser.newPage();
  try {
    // Deliberately NOT waitUntil:'networkidle'. The page pulls three images
    // from images.unsplash.com, and those requests hang in Vercel's build
    // sandbox, so the network never goes idle and goto times out (this failed
    // a real deploy). Third-party requests are irrelevant here anyway: the
    // snapshot only needs the markup React produces, and remote <img> tags are
    // captured by their src attribute whether or not the bytes ever arrive.
    await page.goto(`${origin}${route}`, {
      waitUntil: 'domcontentloaded',
      timeout: 30_000,
    });
    // This is the real readiness gate. Waiting on rendered text rather than a
    // selector is route-agnostic and immune to the first child being an empty,
    // invisible portal container.
    await page.waitForFunction(
      (min) => (document.getElementById('root')?.innerText ?? '').trim().length >= min,
      MIN_TEXT_CHARS,
      { timeout: RENDER_TIMEOUT_MS }
    );

    const html =
      '<!doctype html>\n' +
      (await page.evaluate(() => document.documentElement.outerHTML));

    const after = visibleBodyText(html).length;
    if (after < MIN_TEXT_CHARS) {
      throw new Error(
        `prerender: ${route} rendered only ${after} characters of body text ` +
          `(expected at least ${MIN_TEXT_CHARS}) — refusing to ship a blank page`
      );
    }

    mkdirSync(path.dirname(absFile), { recursive: true });
    writeFileSync(absFile, html, 'utf8');
    return { route, before, after };
  } finally {
    await page.close();
  }
}

/** Run `items` through `worker` with a bounded number in flight at once. */
async function runPool(items, worker, limit) {
  const results = [];
  let next = 0;
  async function pull() {
    while (next < items.length) {
      const i = next++;
      results[i] = await worker(items[i]);
    }
  }
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, pull)
  );
  return results;
}

async function main() {
  const entryScript = expectedEntryScript();
  const port = await findFreePort();
  const origin = `http://localhost:${port}`;

  // Serve the build with vite preview. Run vite's bin via the current node so
  // we avoid npx (which is a .cmd shim on Windows and can't be spawned with
  // shell:false → EINVAL). --strictPort so vite never silently drifts to a
  // different port than the one we probed for.
  const viteBin = path.join(ROOT, 'node_modules', 'vite', 'bin', 'vite.js');
  const preview = spawn(
    process.execPath,
    [viteBin, 'preview', '--port', String(port), '--strictPort'],
    { cwd: ROOT, stdio: 'ignore', shell: false }
  );
  let previewDead = false;
  preview.on('exit', () => {
    previewDead = true;
  });

  let browser;
  try {
    await waitForServer(origin, entryScript, () => previewDead);
    browser = await chromium.launch({
      executablePath,
      args: launchArgs,
      headless: true,
    });

    const results = await runPool(
      ROUTES,
      (route) => snapshot(browser, origin, route),
      CONCURRENCY
    );

    console.log(`prerender: snapshotted ${results.length} route(s).`);
    for (const { route, before, after } of results) {
      console.log(`  ${route} — body text ${before} → ${after} chars`);
    }
  } finally {
    if (browser) await browser.close().catch(() => {});
    preview.kill();
  }
}

main().catch((err) => {
  // Failing the build loudly is better than silently shipping empty-body
  // pages.
  console.error('prerender: FAILED —', err);
  process.exit(1);
});
