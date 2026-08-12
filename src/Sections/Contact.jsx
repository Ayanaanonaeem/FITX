import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  Send,
 Globe,        // Instagram ki jagah (ya custom SVG)
  MessageCircle, // Facebook ki jagah
  Play           // YouTube ki jagah/
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phone = "+923001234567";
    const message = `Hi FITX!%0A%0A*New Inquiry*%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    const url = `https://wa.me/${phone.replace(/\+/g, '')}?text=${message}`;
    
    window.open(url, '_blank');
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Fitness Street, Gym City", "Near Central Park, 456001"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+92 300 1234567", "+92 321 7654321"],
      action: true,
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@fitxgym.com", "support@fitxgym.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sun: 24/7 Open", "Staff: 6 AM - 10 PM"],
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background px-6 py-24 text-text-primary"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-[#E50914]/5 blur-[150px]" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-72 w-72 rounded-full bg-[#E50914]/5 blur-[120px]" />

      {/* Heading */}
      <div className="relative mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-[#E50914]">
          Get In Touch
        </p>
        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
          Contact <span className="text-[#E50914]">Us</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-text-secondary">
          Ready to start your journey? Reach out and we'll reply faster than your PR!
        </p>
      </div>

      <div className="relative mx-auto max-w-6xl grid lg:grid-cols-5 gap-10">
        
        {/* LEFT - Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-bg-secondary border border-border 
                  hover:border-[#E50914]/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E50914]/10 flex items-center justify-center shrink-0
                    group-hover:bg-[#E50914] group-hover:scale-110 transition-all">
                    <Icon size={22} className="text-[#E50914] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary mb-2">{item.title}</h4>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-text-secondary text-sm">{detail}</p>
                    ))}
                    {item.action && (
                      <a
                        href="tel:+923001234567"
                        className="inline-flex items-center gap-1 text-[#E50914] text-sm font-semibold mt-2 hover:underline"
                      >
                        Call Now <ArrowRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* ✅ SOCIAL ICONS - Custom SVG */}
          <div className="flex items-center gap-3 pt-2">
            
            {/* Instagram */}
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl bg-bg-secondary border border-border 
                flex items-center justify-center hover:bg-[#E50914] hover:border-[#E50914] transition-all group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </motion.a>

            {/* Facebook */}
            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl bg-bg-secondary border border-border 
                flex items-center justify-center hover:bg-[#E50914] hover:border-[#E50914] transition-all group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </motion.a>

            {/* YouTube */}
            <motion.a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-xl bg-bg-secondary border border-border 
                flex items-center justify-center hover:bg-[#E50914] hover:border-[#E50914] transition-all group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-text-secondary group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </motion.a>

          </div>
        </div>

        {/* RIGHT - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 p-8 rounded-2xl bg-bg-secondary border border-border"
        >
          <h3 className="text-2xl font-black uppercase mb-2">
            Send Us a <span className="text-[#E50914]">Message</span>
          </h3>
          <p className="text-text-secondary text-sm mb-8">
            Drop us a message and we'll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-bold text-text-primary mb-2 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border 
                    text-text-primary placeholder-text-secondary 
                    focus:border-[#E50914] focus:outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-text-primary mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border 
                    text-text-primary placeholder-text-secondary 
                    focus:border-[#E50914] focus:outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-text-primary mb-2 uppercase tracking-wider">
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell us what you're looking for..."
                className="w-full px-4 py-3 rounded-xl bg-background border border-border 
                  text-text-primary placeholder-text-secondary 
                  focus:border-[#E50914] focus:outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#E50914] hover:bg-[#FF1E2D] 
                text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm
                shadow-lg shadow-[#E50914]/25 transition-all"
            >
              Send Message
              <Send size={16} />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-bg-secondary px-4 text-text-secondary">Or</span>
            </div>
          </div>

          {/* Quick WhatsApp */}
          <button
            onClick={() => {
              const phone = "+923001234567";
              const message = "Hi FITX! I want to know more about your gym.";
              const url = `https://wa.me/${phone.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
              window.open(url, '_blank');
            }}
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 
              text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Quick Chat on WhatsApp
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;

