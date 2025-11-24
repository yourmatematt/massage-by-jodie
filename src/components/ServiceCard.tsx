import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  duration: string;
  modalities: string[];
  image: string;
  popular?: boolean;
  category?: 'massage' | 'sauna' | 'package';
}

export function ServiceCard({
  title,
  description,
  price,
  duration,
  modalities,
  image,
  popular = false,
  category = 'massage'
}: ServiceCardProps) {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categoryColors = {
    massage: 'hsl(var(--color-coral))',
    sauna: 'hsl(280, 85%, 60%)',
    package: 'hsl(140, 55%, 50%)'
  };

  return (
    <div 
      className="relative bg-white rounded-3xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 border-t-4"
      style={{
        borderTopColor: categoryColors[category],
        boxShadow: '0 4px 12px hsl(var(--shadow-color) / 0.08)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 16px 48px hsl(var(--shadow-color) / 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px hsl(var(--shadow-color) / 0.08)';
      }}
    >
      {/* Popular badge */}
      {popular && (
        <div 
          className="absolute top-4 right-4 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white rounded-lg shadow-md z-10"
          style={{ 
            backgroundColor: 'hsl(var(--color-coral))',
            letterSpacing: '0.08em'
          }}
        >
          Most Popular
        </div>
      )}
      
      {/* Image */}
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full aspect-[4/3] object-cover transition-transform duration-500"
          loading="lazy"
          onMouseEnter={(e) => {
            (e.target as HTMLImageElement).style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLImageElement).style.transform = 'scale(1)';
          }}
        />
      </div>
      
      {/* Content */}
      <div className="p-8 md:p-10">
        {/* Title */}
        <h3 
          className="text-[24px] md:text-[28px] font-semibold mb-4"
          style={{ color: 'hsl(var(--color-plum))' }}
        >
          {title}
        </h3>
        
        {/* Pricing - Most prominent */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span 
              className="text-[20px] font-medium"
              style={{ color: 'hsl(var(--color-coral))' }}
            >
              From
            </span>
            <span 
              className="text-[40px] font-bold"
              style={{ color: 'hsl(var(--color-coral))' }}
            >
              ${price}
            </span>
          </div>
          <span 
            className="text-[15px] block"
            style={{ color: 'hsl(var(--color-plum-light))' }}
          >
            {duration}
          </span>
        </div>
        
        {/* Description */}
        <p 
          className="text-[16px] leading-[1.7] mb-5"
          style={{ color: 'hsl(var(--color-plum-light))' }}
        >
          {description}
        </p>
        
        {/* Modalities - Scannable pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {modalities.map((modality) => (
            <span
              key={modality}
              className="px-3 py-1.5 text-[14px] font-medium rounded-lg"
              style={{
                backgroundColor: 'hsl(var(--color-coral-lighter))',
                color: 'hsl(var(--color-coral))',
              }}
            >
              {modality}
            </span>
          ))}
        </div>
        
        {/* CTA */}
        <button
          onClick={scrollToBooking}
          className="w-full px-6 py-3.5 text-base font-semibold text-white rounded-xl transition-all duration-200 flex items-center justify-center gap-2 focus-coral"
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
          <span>Book Now</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
