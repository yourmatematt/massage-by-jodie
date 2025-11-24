import { CheckCircle2, Shield, Clock } from 'lucide-react';
import { CalendlyWidget } from './CalendlyWidget';

export function Booking() {
  // TODO: Replace placeholder URL with actual Calendly username
  const calendlyUrl = "https://calendly.com/jodie-massagebyjodie";

  return (
    <section 
      id="booking" 
      className="py-16 md:py-24 lg:py-32"
      style={{
        background: 'linear-gradient(180deg, hsl(45, 67%, 97%) 0%, hsl(var(--color-warm-white)) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-15">
        
        {/* Section header with trust signals */}
        <div className="text-center mb-12">
          <h2
            className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold mb-4"
            style={{ color: 'hsl(var(--color-plum))' }}
          >
            Ready to Restore Balance?
          </h2>
          <p
            className="text-[17px] md:text-[19px] leading-[1.7] max-w-[600px] mx-auto mb-8"
            style={{ color: 'hsl(var(--color-plum-light))' }}
          >
            Book your session online—choose your time, choose your healing.
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              {
                icon: Shield,
                text: 'Secure Booking',
                color: 'hsl(140, 55%, 45%)'
              },
              {
                icon: Clock,
                text: 'Free Cancellation (24h notice)',
                color: 'hsl(140, 55%, 45%)'
              },
              {
                icon: CheckCircle2,
                text: '150+ Five-Star Reviews',
                color: 'hsl(var(--color-coral))'
              }
            ].map((badge) => (
              <div 
                key={badge.text}
                className="flex items-center gap-2"
                style={{ color: 'hsl(var(--color-plum-light))' }}
              >
                <badge.icon 
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: badge.color }}
                />
                <span className="text-[15px] font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Calendly booking widget */}
        <div className="max-w-4xl mx-auto p-4 md:p-8">
          <CalendlyWidget
            url={calendlyUrl}
            hideEventTypeDetails={false}
            hideGdprBanner={true}
            backgroundColor="fffbf7"
            textColor="4d4049"
            primaryColor="e8714f"
            height="700px"
          />
        </div>
        
        
      </div>
    </section>
  );
}
