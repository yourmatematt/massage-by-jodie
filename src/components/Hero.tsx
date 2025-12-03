import { ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="gradient-hero"
      style={{
        position: 'relative',
        overflow: 'hidden',
        height: '100vh',
        minHeight: '700px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Centered Content Container */}
      <div
        className="px-4 md:px-6"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          marginTop: '-40px',
        }}
      >
        {/* Stacked logo for mobile */}
        <img
          src="/images/hero-logo-text-mobile.png"
          alt="Massage By Jodie"
          className="logo-mobile"
          style={{ 
            width: '80%', 
            maxWidth: '350px',
            display: 'block'
          }}
        />

        {/* Horizontal logo for desktop */}
        <img
          src="/images/hero-logo-text.png"
          alt="Massage By Jodie"
          className="logo-desktop"
          style={{ 
            width: '90%', 
            maxWidth: '1300px',
            display: 'none'
          }}
        />

        {/* Text Content Block */}
        <div
          className="mt-6 md:mt-8 w-full"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Headline */}
          <h1 
            className="font-semibold lg:whitespace-nowrap"
            style={{
              fontSize: 'clamp(1.875rem, 4vw, 3rem)',
              lineHeight: '1.2',
            }}
          >
            <span style={{ color: 'hsl(var(--color-plum))' }}>
              From everyday wellness to{' '}
            </span>
            <span style={{ color: 'hsl(var(--color-coral))' }}>
              extraordinary
            </span>
            <span style={{ color: 'hsl(var(--color-plum))' }}>
              {' '}healing
            </span>
          </h1>

          {/* Subtext */}
          <p
            style={{ 
              color: 'hsl(var(--color-plum-light))',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              lineHeight: '1.6',
              marginTop: '16px',
              maxWidth: '600px',
            }}
          >
            Mallacoota remedial massage and infrared chromotherapy sauna
            experiences that restore balance to body and mind
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
            style={{ marginTop: '32px' }}
          >
            <button
              onClick={() => scrollToSection('booking')}
              className="px-8 py-3.5 text-base font-semibold rounded-full shadow-md transition-all duration-200 flex items-center justify-center gap-2 focus-coral min-h-[48px] whitespace-nowrap"
              style={{ backgroundColor: 'hsl(var(--color-coral))', color: 'hsl(var(--color-plum))' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral-hover))';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral))';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>Book Your Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollToSection('services')}
              className="px-8 py-3.5 text-base font-semibold rounded-full transition-all duration-200 flex items-center justify-center focus-coral min-h-[48px] whitespace-nowrap"
              style={{
                backgroundColor: 'hsl(var(--color-coral))',
                color: 'hsl(var(--color-plum))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral-hover))';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral))';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}