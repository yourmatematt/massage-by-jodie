import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      className="py-16 md:py-20"
      style={{ backgroundColor: 'hsl(var(--color-plum))' }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img
                src="/images/jodie-logo-nav-footer.png"
                alt="Massage By Jodie"
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
            <p 
              className="text-base leading-relaxed mb-6 max-w-md opacity-80"
              style={{ color: 'hsl(var(--color-warm-white))' }}
            >
              Mallacoota based remedial massage and infrared chromotherapy sauna experiences that restore balance to body and mind.
            </p>
            
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: '#', label: 'Facebook' },
                { icon: Instagram, href: '#', label: 'Instagram' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 focus-coral"
                  style={{ backgroundColor: 'hsl(var(--color-plum-medium))' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(var(--color-coral))';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'hsl(var(--color-plum-medium))';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <social.icon 
                    className="w-5 h-5"
                    style={{ color: 'hsl(var(--color-warm-white))' }}
                  />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 
              className="text-lg font-semibold mb-4"
              style={{ color: 'hsl(var(--color-warm-white))' }}
            >
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {['Services', 'About', 'Testimonials', 'FAQ', 'Booking'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-left text-base transition-colors focus-coral py-1"
                  style={{ color: 'hsl(var(--color-warm-white) / 0.8)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'hsl(var(--color-coral))';
                    e.currentTarget.style.paddingLeft = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'hsl(var(--color-warm-white) / 0.8)';
                    e.currentTarget.style.paddingLeft = '0';
                  }}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h3 
              className="text-lg font-semibold mb-4"
              style={{ color: 'hsl(var(--color-warm-white))' }}
            >
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:0438096808"
                className="flex items-start gap-3 text-base transition-colors focus-coral group"
                style={{ color: 'hsl(var(--color-warm-white) / 0.8)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'hsl(var(--color-coral))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'hsl(var(--color-warm-white) / 0.8)';
                }}
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>0438 096 808</span>
              </a>
              
              <a
                href="mailto:jodie@massagebyjodie.com.au"
                className="flex items-start gap-3 text-base transition-colors focus-coral group"
                style={{ color: 'hsl(var(--color-warm-white) / 0.8)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'hsl(var(--color-coral))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'hsl(var(--color-warm-white) / 0.8)';
                }}
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>jodie@massagebyjodie.com.au</span>
              </a>
              
              <div
                className="flex items-start gap-3 text-base"
                style={{ color: 'hsl(var(--color-warm-white) / 0.8)' }}
              >
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Mallacoota, Victoria 3892</span>
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Bottom bar */}
        <div 
          className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'hsl(var(--color-plum-medium))' }}
        >
          <p 
            className="text-sm text-center sm:text-left"
            style={{ color: 'hsl(var(--color-warm-white) / 0.7)' }}
          >
            © {new Date().getFullYear()} Massage By Jodie. All rights reserved.
          </p>
          <div className="flex gap-6">
            <button
              className="text-sm transition-colors focus-coral"
              style={{ color: 'hsl(var(--color-warm-white) / 0.7)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'hsl(var(--color-coral))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'hsl(var(--color-warm-white) / 0.7)';
              }}
            >
              Privacy Policy
            </button>
            <button
              className="text-sm transition-colors focus-coral"
              style={{ color: 'hsl(var(--color-warm-white) / 0.7)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'hsl(var(--color-coral))';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'hsl(var(--color-warm-white) / 0.7)';
              }}
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
