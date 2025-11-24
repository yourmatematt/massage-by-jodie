import { ServiceCard } from './ServiceCard';

export function Services() {
  const services = [
    {
      title: 'Remedial Massage Therapy',
      description: 'Targeted relief for sports injuries, chronic pain, and muscle tension. Techniques include deep tissue, myofascial release, and trigger point therapy.',
      price: '90',
      duration: '60-90 minutes',
      modalities: ['Sports & Deep Tissue', 'Hot Rocks', 'Swedish Relaxation'],
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&h=450&fit=crop',
      popular: true,
      category: 'massage' as const
    },
    {
      title: 'Infrared Chromotherapy Sauna',
      description: 'Detoxifying infrared heat combined with healing color light therapy. Promotes deep relaxation, pain relief, and cellular rejuvenation.',
      price: '45',
      duration: '30-45 minutes',
      modalities: ['Infrared Heat', 'Color Light Therapy', 'Detoxification'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=450&fit=crop',
      category: 'sauna' as const
    },
    {
      title: 'Relaxation & Stress Relief',
      description: 'Gentle Swedish massage focused on relaxation and stress reduction. Perfect for those new to massage or seeking pure therapeutic relaxation.',
      price: '85',
      duration: '60 minutes',
      modalities: ['Swedish Massage', 'Aromatherapy', 'Gentle Pressure'],
      image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&h=450&fit=crop',
      category: 'massage' as const
    },
    {
      title: 'Ultimate Wellness Package',
      description: 'Combine remedial massage with infrared sauna for the complete healing experience. Save 15% when booked together.',
      price: '125',
      duration: '90-120 minutes',
      modalities: ['Massage + Sauna', 'Full Body Treatment', 'Maximum Benefits'],
      image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=450&fit=crop',
      category: 'package' as const
    }
  ];

  return (
    <section 
      id="services" 
      className="py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: 'hsl(var(--color-warm-white))' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-15">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <span 
            className="inline-block px-4 py-1.5 text-sm font-semibold uppercase tracking-wider rounded-full mb-4"
            style={{
              backgroundColor: 'hsl(var(--color-coral-lighter))',
              color: 'hsl(var(--color-coral))',
              letterSpacing: '0.1em'
            }}
          >
            Our Services
          </span>
          <h2 
            className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold mb-4"
            style={{ color: 'hsl(var(--color-plum))' }}
          >
            Healing Experiences
          </h2>
          <p 
            className="text-[17px] md:text-[19px] leading-[1.7] max-w-[700px] mx-auto"
            style={{ color: 'hsl(var(--color-plum-light))' }}
          >
            From targeted pain relief to deep relaxation, each service is tailored to your body's unique needs
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Additional info */}
      </div>
    </section>
  );
}
