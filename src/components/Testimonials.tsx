import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      text: "Jodie's massage therapy has been life-changing for my chronic back pain. After just three sessions, I'm sleeping better and moving more freely than I have in years.",
      name: 'Sarah M.',
      location: 'Mallacoota Local',
    },
    {
      text: "As a fisherman, my body takes a beating. Jodie knows exactly where the tension is and how to release it. The infrared sauna is the perfect complement to her massage work.",
      name: 'David T.',
      location: 'Mallacoota Local',
    },
    {
      text: "We discovered Massage By Jodie while holidaying in Mallacoota. The relaxation massage was exceptional - professional, caring, and exactly what we needed.",
      name: 'Margaret K.',
      location: 'Melbourne Visitor',
    },
  ];

  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: '#fffbf7',
        padding: '60px 20px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '6px 14px',
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              borderRadius: '20px',
              backgroundColor: '#fde8e4',
              color: '#e8714f',
              marginBottom: '16px',
            }}
          >
            Testimonials
          </span>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#4d4049',
              marginBottom: '8px',
            }}
          >
            What Our Clients Say
          </h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              color: '#7a6f75',
              fontSize: '14px',
            }}
          >
            <div style={{ display: 'flex', gap: '2px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#f4b942" color="#f4b942" />
              ))}
            </div>
            <span>5.0 from 150+ reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div
          className="testimonials-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="#f4b942" color="#f4b942" />
                ))}
              </div>

              {/* Quote */}
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.6',
                  color: '#5d5259',
                  marginBottom: '20px',
                }}
              >
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderTop: '1px solid #f0ebe8',
                  paddingTop: '16px',
                }}
              >
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#e8714f',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#4d4049',
                    }}
                  >
                    {testimonial.name}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#7a6f75',
                    }}
                  >
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}