import { Award, Heart, MapPin } from 'lucide-react';

export function About() {
  const credentials = [
    { icon: Award, title: 'Qualified', description: 'Diploma in Remedial Massage' },
    { icon: MapPin, title: 'Local', description: 'Proudly serving Mallacoota' },
    { icon: Heart, title: 'Experienced', description: '15+ years in practice' }
  ];

  return (
    <section
      id="about"
      style={{
        backgroundColor: '#ffffff',
        padding: '60px 20px',
      }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '50px',
            alignItems: 'center',
          }}
        >
          {/* Image */}
          <div
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=800&fit=crop"
              alt="Relaxing spa massage therapy"
              style={{
                width: '100%',
                height: '420px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Content */}
          <div>
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
              About Jodie
            </span>

            <h2
              style={{
                fontSize: '36px',
                fontWeight: '600',
                color: '#4d4049',
                marginBottom: '20px',
                lineHeight: '1.2',
              }}
            >
              Healing Hands, <span style={{ color: '#e8714f' }}>Caring Heart</span>
            </h2>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#5d5259',
                marginBottom: '12px',
              }}
            >
              With over 15 years of experience in remedial and sports massage, I'm passionate about helping people live pain-free, active lives. My approach combines clinical expertise with genuine care for each person's wellbeing.
            </p>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#5d5259',
                marginBottom: '28px',
              }}
            >
              Whether you're recovering from injury, managing chronic pain, or simply need to unwind, I create personalized treatments that address your body's unique needs.
            </p>

            {/* Credentials - horizontal badges */}
            <div
              style={{
                display: 'flex',
                gap: '24px',
                flexWrap: 'wrap',
              }}
            >
              {credentials.map((item) => (
                <div
                  key={item.title}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '50%',
                      backgroundColor: '#fde8e4',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <item.icon size={20} style={{ color: '#e8714f' }} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: '600',
                        color: '#4d4049',
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: '12px',
                        color: '#7a6f75',
                      }}
                    >
                      {item.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}