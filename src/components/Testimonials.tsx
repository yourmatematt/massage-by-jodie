import { TestimonialCard } from './TestimonialCard';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Jodie's massage therapy has been life-changing for my chronic back pain. After just three sessions, I'm sleeping better and moving more freely than I have in years. Highly recommend!",
      name: 'Sarah M.',
      location: 'Mallacoota Local',
      rating: 5,
      initials: 'SM'
    },
    {
      quote: "As a fisherman, my body takes a beating. Jodie knows exactly where the tension is and how to release it. The infrared sauna is the perfect complement to her massage work.",
      name: 'David T.',
      location: 'Mallacoota Local',
      rating: 5,
      initials: 'DT'
    },
    {
      quote: "We discovered Massage By Jodie while holidaying in Mallacoota. The relaxation massage was exceptional - professional, caring, and exactly what we needed after weeks of travel stress.",
      name: 'Margaret & John K.',
      location: 'Melbourne Visitors',
      rating: 5,
      initials: 'MJ'
    },
    {
      quote: "After a workplace injury, I was struggling with shoulder pain. Jodie's remedial massage and stretching guidance have made such a difference. She genuinely cares about your recovery.",
      name: 'James R.',
      location: 'Mallacoota Local',
      rating: 5,
      initials: 'JR'
    },
    {
      quote: "The chromotherapy sauna is amazing! I feel lighter, more energized, and my arthritis pain has reduced significantly. Jodie creates such a welcoming, healing space.",
      name: 'Patricia W.',
      location: 'Mallacoota Local',
      rating: 5,
      initials: 'PW'
    },
    {
      quote: "Jodie is professional, knowledgeable, and has magic hands. I've tried many massage therapists over the years, and she's hands-down the best. Worth every dollar.",
      name: 'Michael D.',
      location: 'Genoa Area',
      rating: 5,
      initials: 'MD'
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: 'hsl(var(--color-warm-white))' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-15">
        {/* Section header */}
        <div className="text-center mb-12">
          <span 
            className="inline-block px-4 py-1.5 text-sm font-semibold uppercase tracking-wider rounded-full mb-4"
            style={{
              backgroundColor: 'hsl(var(--color-coral-lighter))',
              color: 'hsl(var(--color-coral))',
              letterSpacing: '0.1em'
            }}
          >
            Testimonials
          </span>
          
          <h2 
            className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold mb-3"
            style={{ color: 'hsl(var(--color-plum))' }}
          >
            What Our Clients Say
          </h2>
          
          {/* Social proof */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i}
                  className="w-5 h-5" 
                  fill="hsl(45, 100%, 50%)"
                  style={{ color: 'hsl(45, 100%, 50%)' }}
                />
              ))}
            </div>
            <span 
              className="text-base md:text-lg font-semibold"
              style={{ color: 'hsl(var(--color-plum-light))' }}
            >
              5.0 from 150+ reviews
            </span>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
