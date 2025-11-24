import { Award, Heart, MapPin } from 'lucide-react';

export function About() {
  return (
    <section 
      id="about" 
      className="py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: 'hsl(var(--color-cream))' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-10 lg:px-15">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center">
          
          {/* Image */}
          <div className="order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=700&fit=crop"
              alt="Jodie, qualified remedial massage therapist in Mallacoota"
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <span 
              className="inline-block px-4 py-1.5 text-sm font-semibold uppercase tracking-wider rounded-full mb-4"
              style={{
                backgroundColor: 'hsl(var(--color-coral-lighter))',
                color: 'hsl(var(--color-coral))',
                letterSpacing: '0.1em'
              }}
            >
              About Jodie
            </span>
            
            <h2 
              className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold mb-6"
              style={{ color: 'hsl(var(--color-plum))' }}
            >
              Healing Hands,{' '}
              <span style={{ color: 'hsl(var(--color-coral))' }}>
                Caring Heart
              </span>
            </h2>
            
            <div className="space-y-4 mb-8">
              <p 
                className="text-[17px] md:text-[18px] leading-[1.7]"
                style={{ color: 'hsl(var(--color-plum-light))' }}
              >
                With over 15 years of experience in remedial and sports massage, I'm passionate about helping people live pain-free, active lives. My approach combines clinical expertise with genuine care for each person's wellbeing.
              </p>
              
              <p 
                className="text-[17px] md:text-[18px] leading-[1.7]"
                style={{ color: 'hsl(var(--color-plum-light))' }}
              >
                Whether you're recovering from injury, managing chronic pain, or simply need to unwind, I create personalized treatments that address your body's unique needs.
              </p>
            </div>
            
            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  icon: Award,
                  title: 'Qualified',
                  description: 'Diploma in Remedial Massage'
                },
                {
                  icon: MapPin,
                  title: 'Local',
                  description: 'Proudly serving Mallacoota'
                },
                {
                  icon: Heart,
                  title: 'Experienced',
                  description: '15+ years in practice'
                }
              ].map((item) => (
                <div 
                  key={item.title}
                  className="flex flex-col items-start p-5 rounded-xl border-2"
                  style={{ 
                    borderColor: 'hsl(var(--color-border))',
                    backgroundColor: 'white'
                  }}
                >
                  <item.icon 
                    className="w-8 h-8 mb-3"
                    style={{ color: 'hsl(var(--color-coral))' }}
                  />
                  <div 
                    className="text-base font-semibold mb-1"
                    style={{ color: 'hsl(var(--color-plum))' }}
                  >
                    {item.title}
                  </div>
                  <div 
                    className="text-sm"
                    style={{ color: 'hsl(var(--color-plum-light))' }}
                  >
                    {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
