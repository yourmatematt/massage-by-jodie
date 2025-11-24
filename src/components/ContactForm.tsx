import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid }
  } = useForm<ContactFormData>({
    mode: 'onChange'
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // For now, simulate form submission
      // In production, this would POST to your API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <section id="contact" className="py-16 md:py-24 lg:py-32" style={{ backgroundColor: 'hsl(var(--color-warm-white))' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div
              className="p-6 md:p-12 rounded-3xl shadow-lg text-center"
              style={{ backgroundColor: 'hsl(330 100% 95%)' }}
            >
              <div
                className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'hsl(140, 55%, 45%)' }}
              >
                <Send className="w-8 h-8 text-white" />
              </div>
              <h3
                className="text-2xl md:text-3xl font-semibold mb-4"
                style={{ color: 'hsl(var(--color-plum))' }}
              >
                Message Sent Successfully!
              </h3>
              <p
                className="text-lg leading-relaxed"
                style={{ color: 'hsl(var(--color-plum-light))' }}
              >
                Thanks for reaching out! We'll respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32" style={{ backgroundColor: 'hsl(var(--color-warm-white))' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold mb-4"
              style={{ color: 'hsl(var(--color-plum))' }}
            >
              Get In Touch
            </h2>
            <p
              className="text-[17px] md:text-[19px] leading-[1.7] max-w-[600px] mx-auto"
              style={{ color: 'hsl(var(--color-plum-light))' }}
            >
              Have a question about our services? Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <div
            className="p-6 md:p-12 rounded-3xl shadow-lg"
            style={{ backgroundColor: 'hsl(330 100% 95%)' }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-semibold mb-2"
                  style={{ color: 'hsl(330 16% 36%)' }}
                >
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', {
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                  className="w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none text-base md:text-sm"
                  style={{
                    borderColor: errors.name ? 'hsl(0, 70%, 60%)' : 'hsl(330 16% 80%)',
                    backgroundColor: 'white'
                  }}
                  onFocus={(e) => {
                    if (!errors.name) {
                      e.target.style.borderColor = 'hsl(13 100% 70%)';
                    }
                  }}
                  onBlur={(e) => {
                    if (!errors.name) {
                      e.target.style.borderColor = 'hsl(330 16% 80%)';
                    }
                  }}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-2 text-sm" style={{ color: 'hsl(0, 70%, 60%)' }}>
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-semibold mb-2"
                  style={{ color: 'hsl(330 16% 36%)' }}
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  className="w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none text-base md:text-sm"
                  style={{
                    borderColor: errors.email ? 'hsl(0, 70%, 60%)' : 'hsl(330 16% 80%)',
                    backgroundColor: 'white'
                  }}
                  onFocus={(e) => {
                    if (!errors.email) {
                      e.target.style.borderColor = 'hsl(13 100% 70%)';
                    }
                  }}
                  onBlur={(e) => {
                    if (!errors.email) {
                      e.target.style.borderColor = 'hsl(330 16% 80%)';
                    }
                  }}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm" style={{ color: 'hsl(0, 70%, 60%)' }}>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-base font-semibold mb-2"
                  style={{ color: 'hsl(330 16% 36%)' }}
                >
                  Phone Number <span style={{ color: 'hsl(var(--color-plum-light))' }}>(optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none text-base md:text-sm"
                  style={{
                    borderColor: 'hsl(330 16% 80%)',
                    backgroundColor: 'white'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'hsl(13 100% 70%)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'hsl(330 16% 80%)';
                  }}
                  placeholder="0400 123 456"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-semibold mb-2"
                  style={{ color: 'hsl(330 16% 36%)' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', {
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  className="w-full px-4 py-3 rounded-xl border-2 transition-colors focus:outline-none resize-vertical text-base md:text-sm"
                  style={{
                    borderColor: errors.message ? 'hsl(0, 70%, 60%)' : 'hsl(330 16% 80%)',
                    backgroundColor: 'white'
                  }}
                  onFocus={(e) => {
                    if (!errors.message) {
                      e.target.style.borderColor = 'hsl(13 100% 70%)';
                    }
                  }}
                  onBlur={(e) => {
                    if (!errors.message) {
                      e.target.style.borderColor = 'hsl(330 16% 80%)';
                    }
                  }}
                  placeholder="Tell us about your needs, preferred appointment times, or any questions you have..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm" style={{ color: 'hsl(0, 70%, 60%)' }}>
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="w-full px-8 py-4 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-200 min-h-[56px] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed focus-coral"
                  style={{
                    backgroundColor: isSubmitting || !isValid ? 'hsl(330 16% 60%)' : 'hsl(13 100% 70%)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting && isValid) {
                      e.currentTarget.style.backgroundColor = 'hsl(13 100% 60%)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting && isValid) {
                      e.currentTarget.style.backgroundColor = 'hsl(13 100% 70%)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'error' && (
                  <p className="mt-4 text-center text-base" style={{ color: 'hsl(0, 70%, 60%)' }}>
                    Oops! Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}