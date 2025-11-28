import { ArrowRight } from 'lucide-react';

export function Services() {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      title: 'Remedial Massage',
      price: '120',
      duration: '60-90 min',
      description: 'Targeted relief for chronic pain and muscle tension',
      image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=300&fit=crop',
      color: '#e8714f'
    },
    {
      title: 'Infrared Sauna',
      price: '25',
      duration: '15-30 min',
      description: 'Detoxifying heat therapy for deep relaxation',
      image: '/images/services-sauna.jpg',
      color: '#9b59b6'
    },
    {
      title: 'Relaxation Massage',
      price: '110',
      duration: '60 min',
      description: 'Gentle Swedish massage for stress relief',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop',
      color: '#e8714f'
    },
    {
      title: 'Detox & Restore',
      price: '100',
      duration: '60 min',
      description: '45-min massage + 15-min sauna for complete recovery',
      image: '/images/services-ultimate-detox.png',
      color: '#27ae60'
    }
  ];

  return (
    <section
      id="services"
      style={{
        backgroundColor: '#fffbf7',
        padding: '60px 20px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#4d4049',
              marginBottom: '12px',
            }}
          >
            Popular Services
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: '#7a6f75',
              maxWidth: '400px',
              margin: '0 auto',
            }}
          >
            Tailored treatments for your body's unique needs
          </p>
        </div>

        {/* Services Grid */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
          }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                borderTop: `4px solid ${service.color}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
              }}
            >
              {/* Image */}
              <div style={{ height: '160px', overflow: 'hidden' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLImageElement).style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLImageElement).style.transform = 'scale(1)';
                  }}
                />
              </div>

              {/* Content */}
              <div style={{ padding: '20px' }}>
                <h3
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#4d4049',
                    marginBottom: '6px',
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: '13px',
                    color: '#7a6f75',
                    marginBottom: '16px',
                    lineHeight: '1.4',
                  }}
                >
                  {service.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '12px', color: '#e8714f' }}>From </span>
                    <span
                      style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        color: '#e8714f',
                      }}
                    >
                      ${service.price}
                    </span>
                  </div>
                  <span style={{ fontSize: '13px', color: '#7a6f75' }}>
                    {service.duration}
                  </span>
                </div>

                <button
                  onClick={scrollToBooking}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    backgroundColor: '#e8714f',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#d4623f';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#e8714f';
                  }}
                >
                  Book Now
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}