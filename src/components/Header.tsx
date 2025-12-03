import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, Clock } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPastHero(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '-80px 0px 0px 0px',
        threshold: 0,
      }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-[var(--z-fixed)] transition-all duration-300 ease-out ${
          isPastHero
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
        style={{ willChange: 'background-color, box-shadow' }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-15">
          <div
            className={`relative flex items-center h-20 md:h-24 transition-all duration-300 ease-out ${
              isPastHero ? 'justify-between' : 'justify-center'
            }`}
          >
            {/* Logo - fades/slides in when scrolled past hero */}
            <div
              className={`transition-all duration-300 ease-out ${
                isPastHero
                  ? 'opacity-100 translate-x-0 w-auto'
                  : 'opacity-0 -translate-x-4 pointer-events-none w-0 overflow-hidden'
              }`}
              style={{ willChange: 'opacity, transform, width' }}
            >
              <button
                onClick={() => scrollToSection('hero')}
                className="focus-coral"
                aria-label="Massage By Jodie - Home"
                tabIndex={isPastHero ? 0 : -1}
              >
                <img
                  src="/images/jodie-logo-nav.png"
                  alt="Massage By Jodie"
                  className="h-10 md:h-12 w-auto"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2" role="navigation" aria-label="Main navigation">
              {['Services', 'About', 'Sauna', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-4 py-2 text-base font-medium rounded-lg transition-all duration-200 focus-coral"
                  style={{
                    color: 'hsl(var(--color-plum))',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral-lighter))';
                    e.currentTarget.style.color = 'hsl(var(--color-coral))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'hsl(var(--color-plum))';
                  }}
                >
                  {item}
                </button>
              ))}
              {/* Book Now button - only shows after scrolling past hero */}
              <button
                onClick={() => scrollToSection('booking')}
                className={`ml-2 px-6 py-2.5 text-base font-semibold text-white rounded-full shadow-md transition-all duration-300 focus-coral ${
                  isPastHero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none w-0 overflow-hidden ml-0 px-0'
                }`}
                style={{ backgroundColor: 'hsl(var(--color-coral))' }}
                tabIndex={isPastHero ? 0 : -1}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral-hover))';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral))';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Book Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden absolute right-0 w-12 h-12 flex items-center justify-center rounded-xl transition-colors focus-coral"
              style={{ color: 'hsl(var(--color-plum))' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--color-cream))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] md:hidden bg-white transition-transform duration-400 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transitionTimingFunction: 'var(--ease-in-out-circ)' }}
      >
        <div className="flex flex-col h-full pt-24 pb-10 px-6 overflow-y-auto">
          {/* Close button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center rounded-full focus-coral"
            style={{ color: 'hsl(var(--color-plum))' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'hsl(var(--color-cream))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <nav className="flex flex-col gap-1" role="navigation">
            {['Services', 'About', 'Sauna', 'Testimonials'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="px-5 py-4 text-xl font-medium text-left rounded-xl transition-colors min-h-[56px] flex items-center focus-coral"
                style={{ color: 'hsl(var(--color-plum))' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral-lighter))';
                  e.currentTarget.style.color = 'hsl(var(--color-coral))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'hsl(var(--color-plum))';
                }}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('faq')}
              className="px-5 py-4 text-xl font-medium text-left rounded-xl transition-colors min-h-[56px] flex items-center focus-coral"
              style={{ color: 'hsl(var(--color-plum))' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral-lighter))';
                e.currentTarget.style.color = 'hsl(var(--color-coral))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'hsl(var(--color-plum))';
              }}
            >
              Contact & FAQ
            </button>
          </nav>

          <div className="mt-8 pt-8 border-t" style={{ borderColor: 'hsl(var(--color-border))' }}>
            <div className="flex flex-col gap-3 px-2">
              <a
                href="tel:0438096808"
                className="flex items-center gap-3 text-base transition-colors focus-coral rounded-lg py-2"
                style={{ color: 'hsl(var(--color-plum-light))' }}
              >
                <Phone className="w-4 h-4" style={{ color: 'hsl(var(--color-coral))' }} />
                0438 096 808
              </a>
              <a
                href="mailto:jodie@massagebyjodie.com.au"
                className="flex items-center gap-3 text-base transition-colors focus-coral rounded-lg py-2"
                style={{ color: 'hsl(var(--color-plum-light))' }}
              >
                <Mail className="w-4 h-4" style={{ color: 'hsl(var(--color-coral))' }} />
                jodie@massagebyjodie.com.au
              </a>
              <div
                className="flex items-start gap-3 text-sm py-2"
                style={{ color: 'hsl(var(--color-plum-light))' }}
              >
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'hsl(var(--color-coral))' }} />
                <div className="flex flex-col">
                  <span>Mon-Fri 9am-5pm</span>
                  <span>Thu till 7pm</span>
                  <span>Sat 9am-1pm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t" style={{ borderColor: 'hsl(var(--color-border))' }}>
            <button
              onClick={() => scrollToSection('booking')}
              className="w-full px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-200 min-h-[56px] focus-coral"
              style={{ backgroundColor: 'hsl(var(--color-coral))' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral-hover))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral))';
              }}
            >
              Book Your Session
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
