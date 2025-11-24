import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        className={`fixed top-0 left-0 right-0 z-[var(--z-fixed)] transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-15">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <button
              onClick={() => scrollToSection('hero')}
              className="flex flex-col leading-tight focus-coral"
              aria-label="Massage By Jodie - Home"
            >
              <span className="text-[11px] md:text-xs uppercase tracking-wider font-medium" style={{ color: 'hsl(var(--color-plum-light))' }}>
                
              </span>
              <span className="text-lg md:text-xl font-semibold" style={{ color: 'hsl(var(--color-plum))' }}>
                Massage By Jodie
              </span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
              {['Services', 'About', 'Sauna', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-5 py-2.5 text-base font-medium rounded-xl transition-all duration-200 focus-coral"
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
              <button
                onClick={() => scrollToSection('booking')}
                className="ml-2 px-8 py-3 text-base font-semibold text-white rounded-xl shadow-md transition-all duration-200 min-h-[48px] focus-coral"
                style={{ backgroundColor: 'hsl(var(--color-coral))' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral-hover))';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px hsl(var(--color-coral) / 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral))';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px hsl(var(--color-coral) / 0.25)';
                }}
              >
                Book Now
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-xl transition-colors focus-coral"
              style={{ color: 'hsl(var(--color-plum))' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--color-cream))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            {['Services', 'About', 'Sauna', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
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
          </nav>

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
