import { SquareWidget } from './SquareWidget';

export function Booking() {
  return (
    <section
      id="booking"
      style={{
        background: 'linear-gradient(180deg, #fdf6ed 0%, #fffbf7 100%)',
        padding: '60px 20px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#4d4049',
              marginBottom: '12px',
              lineHeight: '1.2',
            }}
          >
            Ready to Restore <span style={{ color: '#e8714f' }}>Balance</span>?
          </h2>
          <p
            style={{
              fontSize: '15px',
              lineHeight: '1.6',
              color: '#5d5259',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            Book your session online — choose your time, choose your healing.
          </p>
        </div>

        {/* Widget */}
        <div
          style={{
            maxWidth: '700px',
            margin: '0 auto',
            backgroundColor: '#fff',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
            overflow: 'hidden',
          }}
        >
          <SquareWidget height="500px" />
        </div>
      </div>
    </section>
  );
}