import { useState, useEffect, useRef } from 'react';
import { Calendar } from 'lucide-react';

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);
  const isInBookingSection = useRef(false);

  useEffect(() => {
    const bookingSection = document.getElementById('booking');
    if (!bookingSection) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const bookingTop = bookingSection.offsetTop;
      const scrollingUp = currentScrollY < lastScrollY.current;

      const pastHero = currentScrollY > 600;
      const reachedBooking = currentScrollY + window.innerHeight > bookingTop + 100;

      if (reachedBooking) {
        isInBookingSection.current = true;
        setIsVisible(false);
      } else if (scrollingUp && isInBookingSection.current && !reachedBooking) {
        isInBookingSection.current = false;
        setIsVisible(pastHero);
      } else if (!isInBookingSection.current) {
        setIsVisible(pastHero);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[var(--z-fixed)] md:hidden transition-transform duration-400 p-4 bg-white border-t-2 shadow-2xl ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{
        borderTopColor: 'hsl(var(--color-coral))',
        transitionTimingFunction: 'var(--ease-in-out-circ)',
      }}
    >
      <button
        onClick={scrollToBooking}
        className="w-full px-6 py-4 text-lg font-semibold text-white rounded-xl shadow-lg transition-all duration-200 min-h-[56px] flex items-center justify-center gap-2 focus-coral"
        style={{ backgroundColor: 'hsl(var(--color-coral))' }}
        onTouchStart={(e) => {
          e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral-hover))';
        }}
        onTouchEnd={(e) => {
          e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral))';
        }}
      >
        <Calendar className="w-5 h-5" />
        <span>Book Your Session</span>
      </button>
      <p 
        className="text-center text-[13px] mt-2"
        style={{ color: 'hsl(var(--color-plum-light))' }}
      >
        Free cancellation • Instant confirmation
      </p>
    </div>
  );
}
