import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Sun, Moon, Menu, X, ArrowRight } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Trainers", href: "trainers" },
    { name: "Pricing", href: "pricing" },
  ];

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    scrollTo(sectionId);
  };

  const handleJoinNow = () => {
    const phone = "+923001234567";
    const message = "Hi FITX! I want to join the gym.";
    const url = `https://wa.me/${phone.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-[#E50914]" />

      <nav className="fixed top-1 left-0 right-0 z-40">
        <div className="bg-background/95 backdrop-blur-xl border-b-2 border-border">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">

              {/* Logo */}
              <button onClick={() => scrollTo("home")} className="flex items-center gap-2 shrink-0">
                <div className="w-10 h-10 bg-[#E50914] rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-black text-text-primary">
                  FIT<span className="text-[#E50914]">X</span>
                </span>
              </button>

              {/* Desktop Links */}
              <div className="hidden lg:flex items-center gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className="text-sm font-semibold uppercase tracking-wider text-text-secondary 
                      hover:text-[#E50914] transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-3">
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="w-14 h-7 rounded-full bg-bg-secondary border-2 border-border relative overflow-hidden"
                >
                  <motion.div
                    className="absolute top-0.5 w-5 h-5 rounded-full bg-[#E50914] flex items-center justify-center"
                    animate={{ left: isDark ? "2px" : "calc(100% - 22px)" }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  >
                    {isDark ? <Moon size={12} className="text-white" /> : <Sun size={12} className="text-white" />}
                  </motion.div>
                </button>

                {/* Join Now - Desktop */}
                <button
                  onClick={handleJoinNow}
                  className="hidden lg:flex items-center gap-2 bg-[#E50914] hover:bg-[#FF1E2D] text-white 
                    px-5 py-2 rounded-lg font-bold uppercase text-sm tracking-wider transition-all"
                >
                  Join Now
                  <ArrowRight size={16} />
                </button>

                {/* Hamburger */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="lg:hidden w-10 h-10 rounded-lg bg-bg-secondary border-2 border-border 
                    flex flex-col items-center justify-center gap-1.5"
                >
                  <span className={`w-5 h-0.5 bg-text-primary transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <span className={`w-5 h-0.5 bg-text-primary transition-all ${isOpen ? 'opacity-0' : ''}`} />
                  <span className={`w-5 h-0.5 bg-text-primary transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </button>
              </div>

            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 bg-bg-secondary border-l-2 border-border z-50 lg:hidden"
            >
              <div className="p-6">
                <button onClick={() => setIsOpen(false)} className="mb-8">
                  <X size={24} className="text-text-primary" />
                </button>

                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className="block w-full text-left px-4 py-3 text-lg font-semibold text-text-primary
                        hover:bg-background rounded-xl transition-all"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-background rounded-xl border border-border">
                  <p className="text-text-secondary text-sm mb-3">Ready to transform?</p>
                  <button
                    onClick={() => { setIsOpen(false); handleJoinNow(); }}
                    className="w-full bg-[#E50914] hover:bg-[#FF1E2D] text-white py-3 rounded-xl font-bold uppercase"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;