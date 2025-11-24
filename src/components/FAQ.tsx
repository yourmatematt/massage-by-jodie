import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="border-b last:border-b-0 transition-colors"
      style={{ borderColor: 'hsl(var(--color-border))' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 px-4 flex items-center justify-between text-left transition-colors focus-coral"
        aria-expanded={isOpen}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'hsl(var(--color-cream) / 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        <span 
          className="text-lg md:text-xl font-semibold pr-4"
          style={{ color: 'hsl(var(--color-plum))' }}
        >
          {question}
        </span>
        <ChevronDown 
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
          style={{ color: 'hsl(var(--color-coral))' }}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div 
          className="px-4 pb-6 text-base md:text-lg leading-relaxed"
          style={{ color: 'hsl(var(--color-plum-light))' }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const faqs = [
    {
      question: 'What should I expect during my first massage session?',
      answer: "Your first session begins with a consultation to discuss your health history, areas of concern, and treatment goals. I'll explain the techniques I plan to use and ensure you're comfortable throughout. Sessions are conducted in a private, professional treatment room with appropriate draping for your comfort and privacy."
    },
    {
      question: 'How should I prepare for my appointment?',
      answer: "Arrive a few minutes early to complete any paperwork. Wear comfortable, loose clothing. Avoid eating a heavy meal immediately before your session. If using the sauna, bring a towel and water bottle (though these are also provided)."
    },
    {
      question: 'Will the massage hurt?',
      answer: "Remedial massage involves deeper pressure than relaxation massage, so you may experience some discomfort in areas of tension or injury. However, it should never be painful. I'll regularly check in with you and adjust pressure to your comfort level. Some muscle soreness 24-48 hours after treatment is normal and indicates the therapy is working."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Please provide at least 24 hours notice if you need to cancel or reschedule. This allows me to offer the appointment to someone else. Late cancellations or no-shows may incur a cancellation fee. I understand emergencies happen - just call as soon as you can."
    },
    {
      question: 'Do you have health fund rebates?',
      answer: "Yes, I'm a qualified and registered massage therapist. You can claim your treatment through your private health insurance if you have remedial massage cover. I provide receipts that meet all health fund requirements. Check with your fund about your level of cover and annual limits."
    },
    {
      question: 'How often should I have massage therapy?',
      answer: "This depends on your individual needs and goals. For acute injuries or chronic pain, weekly sessions may be beneficial initially. For maintenance and prevention, fortnightly or monthly sessions work well. I'll discuss a treatment plan tailored to your situation and budget."
    },
    {
      question: 'What are the benefits of the infrared sauna?',
      answer: "Infrared sauna therapy offers deep tissue warming, promoting detoxification through sweating, pain relief, improved circulation, and relaxation. The chromotherapy (color light therapy) adds additional healing benefits. Many clients find it particularly helpful for arthritis, muscle recovery, and stress relief."
    },
    {
      question: 'Where are you located?',
      answer: "I'm located in Mallacoota, Victoria. The clinic is easily accessible with parking available. I'll provide exact address details when you book your appointment."
    }
  ];

  return (
    <section 
      id="faq" 
      className="py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: 'hsl(var(--color-cream))' }}
    >
      <div className="max-w-4xl mx-auto px-5 md:px-10 lg:px-15">
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
            FAQ
          </span>
          
          <h2 
            className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold mb-4"
            style={{ color: 'hsl(var(--color-plum))' }}
          >
            Common Questions
          </h2>
          
          <p 
            className="text-[17px] md:text-[19px] leading-[1.7]"
            style={{ color: 'hsl(var(--color-plum-light))' }}
          >
            Everything you need to know about your visit
          </p>
        </div>

        {/* FAQ items */}
        <div 
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
          style={{ boxShadow: '0 4px 16px hsl(var(--shadow-color) / 0.08)' }}
        >
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>

        {/* Still have questions */}
      </div>
    </section>
  );
}
