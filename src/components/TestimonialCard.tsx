import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  rating?: number;
  initials?: string;
}

export function TestimonialCard({
  quote,
  name,
  location,
  rating = 5,
  initials
}: TestimonialCardProps) {
  return (
    <div 
      className="bg-white rounded-2xl p-7 shadow-lg border transition-all duration-300 hover:-translate-y-1 relative"
      style={{
        borderColor: 'hsl(var(--color-border))',
        boxShadow: '0 2px 12px hsl(var(--shadow-color) / 0.08)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 6px 24px hsl(var(--shadow-color) / 0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 12px hsl(var(--shadow-color) / 0.08)';
      }}
    >
      {/* Subtle quote mark */}
      <div 
        className="absolute top-4 left-5 text-[80px] leading-none opacity-40 pointer-events-none font-serif select-none"
        style={{ color: 'hsl(var(--color-coral-light))' }}
      >
        "
      </div>
      
      {/* Star rating */}
      <div className="flex gap-1 mb-3 relative z-10">
        {Array.from({ length: rating }).map((_, i) => (
          <Star 
            key={i}
            className="w-[18px] h-[18px]" 
            fill="hsl(45, 100%, 50%)"
            style={{ color: 'hsl(45, 100%, 50%)' }}
          />
        ))}
      </div>
      
      {/* Quote text */}
      <p 
        className="text-base leading-[1.7] mb-5 relative z-10 pl-2"
        style={{ color: 'hsl(var(--color-plum))' }}
      >
        {quote}
      </p>
      
      {/* Attribution */}
      <div 
        className="flex items-center gap-3 pt-4 border-t"
        style={{ borderColor: 'hsl(var(--color-border))' }}
      >
        {/* Profile initials */}
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
          style={{
            backgroundColor: 'hsl(var(--color-coral-lighter))',
            color: 'hsl(var(--color-coral))',
          }}
        >
          {initials || name.split(' ').map(n => n[0]).join('')}
        </div>
        
        {/* Name & location */}
        <div>
          <div 
            className="text-[15px] font-semibold leading-tight"
            style={{ color: 'hsl(var(--color-plum))' }}
          >
            {name}
          </div>
          <div 
            className="text-[14px] leading-tight"
            style={{ color: 'hsl(var(--color-plum-light))' }}
          >
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}
