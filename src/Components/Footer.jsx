import { motion } from "framer-motion";
import { Dumbbell, ArrowRight, Heart } from "lucide-react";

function Footer() {
  
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleWhatsApp = () => {
    const phone = "+923001234567"; // Apna number
    const message = "Hi FITX! I want to join the gym.";
    const url = `https://wa.me/${phone.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const quickLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Trainers", href: "trainers" },
    { name: "Pricing", href: "pricing" },
    { name: "FAQ", href: "faq" },
    { name: "Contact", href: "contact" },
  ];

  return (
    <footer className="relative bg-bg-secondary border-t-2 border-[#E50914]">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-[#E50914] rounded-lg flex items-center justify-center rotate-3">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-text-primary">
                FIT<span className="text-[#E50914]">X</span>
              </span>
            </a>

            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Unleash your inner beast. Join the most intense fitness community 
              and transform your body and mind.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg bg-background border border-border 
                  flex items-center justify-center hover:bg-[#E50914] hover:border-[#E50914] transition-all group"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg bg-background border border-border 
                  flex items-center justify-center hover:bg-[#E50914] hover:border-[#E50914] transition-all group"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg bg-background border border-border 
                  flex items-center justify-center hover:bg-[#E50914] hover:border-[#E50914] transition-all group"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-text-primary mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-text-secondary text-sm hover:text-[#E50914] transition-colors flex items-center gap-1 group"
                  >
                    <span className="w-0 h-0.5 bg-[#E50914] group-hover:w-2 transition-all" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-text-primary mb-5">
              Contact Info
            </h4>
            <ul className="space-y-3 text-text-secondary text-sm">
              <li>📍 123 Fitness Street, Gym City</li>
              <li>
                <a href="tel:+923001234567" className="hover:text-[#E50914] transition-colors">
                  📞 +92 300 1234567
                </a>
              </li>
              <li>
                <a href="mailto:info@fitxgym.com" className="hover:text-[#E50914] transition-colors">
                  ✉️ info@fitxgym.com
                </a>
              </li>
              <li>🕐 Open 24/7</li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-text-primary mb-5">
              Start Today
            </h4>
            <p className="text-text-secondary text-sm mb-5">
              Ready to transform? Join now and get your first week free!
            </p>
            
            <motion.button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 bg-[#E50914] hover:bg-[#FF1E2D] 
                text-white py-3 rounded-xl font-bold uppercase tracking-wider text-sm
                shadow-lg shadow-[#E50914]/25 transition-all group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-text-secondary text-xs flex items-center gap-1">
            © {new Date().getFullYear()} FITX Gym. All rights reserved. Made with 
            <Heart size={12} className="text-[#E50914] fill-[#E50914]" /> 
            by FITX Team
          </p>
          
          <div className="flex items-center gap-5">
            <a href="#" className="text-text-secondary text-xs hover:text-[#E50914] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-text-secondary text-xs hover:text-[#E50914] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;