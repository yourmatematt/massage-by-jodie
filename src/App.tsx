import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Sauna } from './components/Sauna';
import { Testimonials } from './components/Testimonials';
import { Booking } from './components/Booking';
import { FAQContact } from './components/FAQContact';
import { Footer } from './components/Footer';
import { StickyMobileCTA } from './components/StickyMobileCTA';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Sauna />
        <Testimonials />
        <Booking />
        <FAQContact />
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
