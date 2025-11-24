import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden gradient-hero min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-32 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-center">

          {/* Text Content */}
          <div className="w-full">
            <div
              className="bg-white/80 p-6 md:p-12 rounded-3xl shadow-lg max-w-[520px] mx-auto md:mx-0"
              style={{
                backgroundColor: 'hsl(330 100% 95%)'
              }}
            >
              <span 
                className="block text-sm md:text-base tracking-wide uppercase mb-3 font-medium"
                style={{ color: 'hsl(var(--color-plum-medium))' }}
              >
                
              </span>
              
              <h1 className="text-[36px] md:text-[56px] lg:text-[72px] leading-[1.2] md:leading-[1.15] lg:leading-[1.1] tracking-tight mb-4">
                <span style={{ color: 'hsl(var(--color-plum))' }}>
                  From everyday wellness to{' '}
                </span>
                <span 
                  className="font-semibold"
                  style={{ color: 'hsl(var(--color-coral))' }}
                >
                  extraordinary
                </span>
                <span style={{ color: 'hsl(var(--color-plum))' }}>
                  {' '}healing
                </span>
              </h1>
              
              <p
                className="text-[17px] md:text-[19px] leading-[1.7] mt-4 mb-8"
                style={{ color: 'hsl(var(--color-plum-light))' }}
              >
                Remedial massage and infrared chromotherapy sauna experiences that restore balance to body and mind
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  'Qualified Remedial Therapist',
                  
                  'Mallacoota Based'
                ].map((item) => (
                  <div 
                    key={item}
                    className="flex items-center gap-2 text-sm md:text-base"
                    style={{ color: 'hsl(var(--color-plum-light))' }}
                  >
                    <CheckCircle2 
                      className="w-5 h-5 flex-shrink-0" 
                      style={{ color: 'hsl(var(--color-success))' }}
                    />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => scrollToSection('booking')}
                  className="px-10 py-4 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-200 min-h-[56px] flex items-center justify-center gap-2 focus-coral"
                  style={{ backgroundColor: 'hsl(var(--color-coral))' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral-hover))';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 28px hsl(var(--color-coral) / 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral))';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px hsl(var(--color-coral) / 0.25)';
                  }}
                >
                  <span>Book Your Session</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                
                <button
                  onClick={() => scrollToSection('services')}
                  className="px-8 py-[14px] text-base font-semibold rounded-xl border-2 transition-all duration-200 min-h-[56px] flex items-center justify-center focus-coral"
                  style={{
                    borderColor: 'hsl(var(--color-coral))',
                    color: 'hsl(var(--color-coral))',
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral) / 0.08)';
                    e.currentTarget.style.borderColor = 'hsl(var(--color-coral-hover))';
                    e.currentTarget.style.color = 'hsl(var(--color-coral-hover))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'hsl(var(--color-coral))';
                    e.currentTarget.style.color = 'hsl(var(--color-coral))';
                  }}
                >
                  Explore Services
                </button>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=900&fit=crop"
                alt="Relaxing massage therapy session at Massage By Jodie"
                className="w-full h-auto aspect-[4/3] md:aspect-[3/4] object-cover"
                loading="eager"
              />
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, transparent 0%, hsl(var(--color-plum) / 0.08) 100%)'
                }}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
