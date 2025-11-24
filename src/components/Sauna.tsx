import { Flame, Palette, Droplets, Heart } from 'lucide-react';

export function Sauna() {
  const benefits = [
    {
      icon: Flame,
      title: 'Deep Heat Therapy',
      description: 'Infrared rays penetrate deep into tissues, promoting circulation and pain relief'
    },
    {
      icon: Palette,
      title: 'Chromotherapy',
      description: 'Healing colored light therapy to balance energy and enhance mood'
    },
    {
      icon: Droplets,
      title: 'Detoxification',
      description: 'Deep sweating helps eliminate toxins and supports immune function'
    },
    {
      icon: Heart,
      title: 'Stress Relief',
      description: 'Calming environment promotes deep relaxation and mental clarity'
    }
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="sauna" 
      className="py-16 md:py-24 lg:py-32 gradient-reverse relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-15">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <div>
            <span 
              className="inline-block px-4 py-1.5 text-sm font-semibold uppercase tracking-wider rounded-full mb-4"
              style={{
                backgroundColor: 'hsl(var(--color-warm-white))',
                color: 'hsl(var(--color-coral))',
                letterSpacing: '0.1em'
              }}
            >
              Infrared Sauna
            </span>
            
            <h2 
              className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold mb-6"
              style={{ color: 'hsl(var(--color-plum))' }}
            >
              Experience{' '}
              <span style={{ color: 'hsl(var(--color-coral))' }}>
                Chromotherapy
              </span>
              {' '}Healing
            </h2>
            
            <p 
              className="text-[17px] md:text-[18px] leading-[1.7] mb-8"
              style={{ color: 'hsl(var(--color-plum-light))' }}
            >
              Our state-of-the-art infrared sauna combines deep-penetrating heat therapy with chromotherapy (color light therapy) for a truly transformative wellness experience. Unlike traditional saunas, infrared heat warms your body directly, providing therapeutic benefits at a comfortable temperature.
            </p>
            
            {/* Benefits grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.title}
                  className="p-5 rounded-xl backdrop-blur-sm"
                  style={{ 
                    backgroundColor: 'hsl(var(--color-warm-white) / 0.7)',
                  }}
                >
                  <benefit.icon 
                    className="w-7 h-7 mb-3"
                    style={{ color: 'hsl(var(--color-coral))' }}
                  />
                  <h3 
                    className="text-base font-semibold mb-2"
                    style={{ color: 'hsl(var(--color-plum))' }}
                  >
                    {benefit.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: 'hsl(var(--color-plum-light))' }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <button
              onClick={scrollToBooking}
              className="px-8 py-3.5 text-base font-semibold text-white rounded-xl shadow-lg transition-all duration-200 min-h-[48px] focus-coral"
              style={{ backgroundColor: 'hsl(var(--color-coral))' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral-hover))';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral))';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Book Sauna Session
            </button>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1583416750470-965b2707b355?w=700&h=700&fit=crop"
              alt="Infrared chromotherapy sauna interior with colored lights"
              className="w-full aspect-square object-cover rounded-3xl shadow-2xl"
              loading="lazy"
            />
            <div 
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, hsl(var(--color-plum) / 0.05) 100%)'
              }}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}
