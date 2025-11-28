import { Flame, Palette, Droplets, Heart } from 'lucide-react';

export function Sauna() {
  const benefits = [
    { icon: Flame, title: 'Deep Heat Therapy', description: 'Penetrating infrared for circulation and pain relief' },
    { icon: Palette, title: 'Chromotherapy', description: 'Healing colored light to balance energy and mood' },
    { icon: Droplets, title: 'Detoxification', description: 'Deep sweating to eliminate toxins' },
    { icon: Heart, title: 'Stress Relief', description: 'Promotes deep relaxation and mental clarity' }
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
      style={{
        background: 'linear-gradient(135deg, #fcd5ce 0%, #f9bbb3 50%, #f8ad9d 100%)',
        padding: '60px 20px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div
          className="sauna-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '50px',
            alignItems: 'center',
          }}
        >
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
                backgroundColor: '#fffbf7',
                color: '#e8714f',
                marginBottom: '16px',
              }}
            >
              Infrared Sauna
            </span>

            <h2
              style={{
                fontSize: '36px',
                fontWeight: '600',
                color: '#4d4049',
                marginBottom: '16px',
                lineHeight: '1.2',
              }}
            >
              Experience <span style={{ color: '#e8714f' }}>Chromotherapy</span> Healing
            </h2>

            {/* Mobile image - shows only on mobile, right after title */}
            <div
              className="sauna-image-mobile"
              style={{
                display: 'none',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
                marginBottom: '24px',
              }}
            >
              <img
                src="/images/infrared-sauna.webp"
                alt="Infrared chromotherapy sauna"
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            <p
              style={{
                fontSize: '15px',
                lineHeight: '1.7',
                color: '#5d5259',
                marginBottom: '24px',
              }}
            >
              Our infrared sauna combines deep-penetrating heat with chromotherapy (color light therapy) for a transformative wellness experience. Unlike traditional saunas, infrared heat warms your body directly at a comfortable temperature.
            </p>

            {/* Benefits grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginBottom: '24px',
              }}
            >
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  style={{
                    padding: '16px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 251, 247, 0.8)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                  }}
                >
                  <benefit.icon
                    size={22}
                    style={{ color: '#e8714f', marginBottom: '8px' }}
                  />
                  <h3
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#4d4049',
                      marginBottom: '4px',
                    }}
                  >
                    {benefit.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '12px',
                      lineHeight: '1.4',
                      color: '#7a6f75',
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToBooking}
              style={{
                padding: '14px 28px',
                backgroundColor: '#e8714f',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                fontSize: '15px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease, transform 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d4623f';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#e8714f';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Book Sauna Session
            </button>
          </div>

          {/* Desktop image - hidden on mobile */}
          <div
            className="sauna-image-desktop"
            style={{
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
            }}
          >
            <img
              src="/images/infrared-sauna.webp"
              alt="Infrared chromotherapy sauna"
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .sauna-grid {
            grid-template-columns: 1fr !important;
            gap: 30px !important;
          }
          .sauna-image-mobile {
            display: block !important;
          }
          .sauna-image-desktop {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}