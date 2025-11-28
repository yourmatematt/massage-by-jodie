import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ChevronDown, Send, Phone, MapPin, Clock } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function FAQContact() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<ContactFormData>({ mode: 'onChange' });

  const faqs = [
    {
      question: 'What should I expect during my first session?',
      answer: "We'll start with a consultation to discuss your health history and goals. Sessions are conducted in a private, professional treatment room with appropriate draping for your comfort."
    },
    {
      question: 'Will the massage hurt?',
      answer: "Remedial massage involves deeper pressure, but it should never be painful. I'll check in regularly and adjust to your comfort level. Some soreness 24-48 hours after is normal."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Please provide at least 24 hours notice to cancel or reschedule. Late cancellations may incur a fee. Emergencies happen - just call as soon as you can."
    },
    {
      question: 'Do you offer health fund rebates?',
      answer: "Yes, I'm a registered massage therapist. You can claim through private health insurance if you have remedial massage cover. I provide compliant receipts."
    },
    {
      question: 'What are the benefits of infrared sauna?',
      answer: "Infrared sauna promotes detoxification, pain relief, improved circulation, and deep relaxation. The chromotherapy adds additional healing benefits for stress and arthritis."
    },
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to send');
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="faq"
      style={{
        backgroundColor: '#fef9f3',
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
            Questions & <span style={{ color: '#e8714f' }}>Contact</span>
          </h2>
          <p
            style={{
              fontSize: '15px',
              color: '#7a6f75',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            Find answers to common questions or send us a message
          </p>
        </div>

        {/* Contact Info Bar */}
        <div
          className="contact-info-bar"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
              <Phone size={20} style={{ color: '#e8714f' }} />
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#4d4049' }}>Call or Text</div>
              <a href="tel:0438096808" style={{ fontSize: '14px', color: '#e8714f', textDecoration: 'none' }}>
                0438 096 808
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
              <MapPin size={20} style={{ color: '#e8714f' }} />
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#4d4049' }}>Location</div>
              <div style={{ fontSize: '14px', color: '#7a6f75' }}>52 Maurice Ave, Mallacoota VIC</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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
              <Clock size={20} style={{ color: '#e8714f' }} />
            </div>
            <div>
              <div style={{ fontSize: '13px', fontWeight: '600', color: '#4d4049' }}>Hours</div>
              <div style={{ fontSize: '14px', color: '#7a6f75' }}>Mon–Sat by appointment</div>
            </div>
          </div>
        </div>

        <div
          className="faq-contact-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'start',
          }}
        >
          {/* Contact Form */}
          <div
            style={{
              backgroundColor: '#fde8e4',
              borderRadius: '16px',
              padding: '28px',
              order: 1,
            }}
          >
            {submitStatus === 'success' ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    margin: '0 auto 16px',
                    borderRadius: '50%',
                    backgroundColor: '#27ae60',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Send size={22} color="#fff" />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#4d4049', marginBottom: '8px' }}>
                  Message Sent!
                </h3>
                <p style={{ fontSize: '14px', color: '#7a6f75' }}>
                  We'll respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#4d4049', marginBottom: '6px' }}>
                    Name *
                  </label>
                  <input
                    {...register('name', { required: true, minLength: 2 })}
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: errors.name ? '2px solid #e74c3c' : '1px solid #ddd',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onFocus={(e) => { if (!errors.name) { e.target.style.borderColor = '#e8714f'; e.target.style.boxShadow = '0 2px 6px rgba(232,113,79,0.15)'; } }}
                    onBlur={(e) => { if (!errors.name) { e.target.style.borderColor = '#ddd'; e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; } }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#4d4049', marginBottom: '6px' }}>
                    Email *
                  </label>
                  <input
                    {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: errors.email ? '2px solid #e74c3c' : '1px solid #ddd',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onFocus={(e) => { if (!errors.email) { e.target.style.borderColor = '#e8714f'; e.target.style.boxShadow = '0 2px 6px rgba(232,113,79,0.15)'; } }}
                    onBlur={(e) => { if (!errors.email) { e.target.style.borderColor = '#ddd'; e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; } }}
                  />
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: '#4d4049', marginBottom: '6px' }}>
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: true, minLength: 10 })}
                    rows={4}
                    placeholder="How can we help?"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      border: errors.message ? '2px solid #e74c3c' : '1px solid #ddd',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onFocus={(e) => { if (!errors.message) { e.target.style.borderColor = '#e8714f'; e.target.style.boxShadow = '0 2px 6px rgba(232,113,79,0.15)'; } }}
                    onBlur={(e) => { if (!errors.message) { e.target.style.borderColor = '#ddd'; e.target.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)'; } }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    backgroundColor: isSubmitting || !isValid ? '#bbb' : '#e8714f',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: isSubmitting || !isValid ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting && isValid) e.currentTarget.style.backgroundColor = '#d4623f';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting && isValid) e.currentTarget.style.backgroundColor = '#e8714f';
                  }}
                >
                  {isSubmitting ? 'Sending...' : <><Send size={16} /> Send Message</>}
                </button>

                {submitStatus === 'error' && (
                  <p style={{ marginTop: '12px', fontSize: '13px', color: '#e74c3c', textAlign: 'center' }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* FAQ Accordion */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
              overflow: 'hidden',
              order: 2,
            }}
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                style={{
                  borderBottom: index < faqs.length - 1 ? '1px solid #f0ebe8' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#fef9f3';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#4d4049',
                      paddingRight: '16px',
                    }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: '#e8714f',
                      flexShrink: 0,
                      transition: 'transform 0.3s ease',
                      transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0)',
                    }}
                  />
                </button>
                <div
                  style={{
                    maxHeight: openIndex === index ? '200px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease, opacity 0.3s ease',
                    opacity: openIndex === index ? 1 : 0,
                  }}
                >
                  <p
                    style={{
                      padding: '0 20px 18px 20px',
                      fontSize: '13px',
                      lineHeight: '1.6',
                      color: '#7a6f75',
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .faq-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .contact-info-bar {
            flex-direction: column !important;
            align-items: center !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}