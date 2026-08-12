import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Zap, Dumbbell, X } from 'lucide-react';
import { scrollTo } from '../Utils/scrollTo';

function Hero() {
  const heroRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  
  // Parallax scroll effect
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.9]);
  const bgScale = useTransform(scrollY, [0, 600], [1, 1.2]);
  const textY = useTransform(scrollY, [0, 400], [0, -50]);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center overflow-hidden">
      
      {/* Background with parallax */}
      <motion.div 
        style={{ scale: bgScale }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30 z-10" />
        
        {/* Radial gradient background */}
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        
        {/* 🔥 ANIMATED GRID LINES 🔥 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#E50914 1px, transparent 1px), linear-gradient(90deg, #E50914 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>
      </motion.div>

      {/* 🔥 FLOATING ELEMENTS 🔥 */}
      {/* Floating Dumbbell - Top Right */}
      <div className="absolute top-20 right-20 z-10 hidden lg:block">
        <div className="animate-float">
          <div className="w-20 h-20 rounded-2xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center rotate-12">
            <Dumbbell className="w-10 h-10 text-primary" />
          </div>
        </div>
      </div>
      
      {/* Floating Zap - Bottom Left */}
      <div className="absolute bottom-40 left-20 z-10 hidden lg:block animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center">
          <Zap className="w-8 h-8 text-primary" />
        </div>
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 mt-20"
      >
        <div className="max-w-4xl">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-xl border border-primary/30 
              rounded-full px-4 py-2 mb-8 animate-pulse-glow"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-sm">#1 Gym in the City</span>
          </motion.div>

          {/* Main Heading - with parallax text */}
          <motion.h1 
            style={{ y: textY }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-text-primary leading-none mb-6"
          >
            <span className="text-primary">TRANSFORM</span>
            <br />
            YOUR BODY
          </motion.h1>

          {/* Description - with parallax */}
          <motion.p
            style={{ y: textY }}
            className="text-lg sm:text-xl text-text-secondary max-w-2xl mb-10"
          >
            Join the most intense workout experience. State-of-the-art equipment, 
            expert trainers, and a community that pushes you beyond your limits.
          </motion.p>

          {/* ✅ BUTTONS - With onClick + Parallax */}
          <motion.div
            style={{ y: textY }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => scrollTo('pricing')}
              className="group flex items-center gap-3 bg-primary hover:bg-primary-hover text-white 
                px-8 py-4 rounded-xl font-bold text-lg cursor-pointer
                shadow-[0_0_30px_rgba(229,9,20,0.3)] hover:shadow-[0_0_50px_rgba(229,9,20,0.5)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </motion.button>

            <motion.button
              onClick={() => setShowVideo(true)}
              className="flex items-center gap-3 bg-bg-secondary border-2 border-border hover:border-primary
                text-text-primary px-8 py-4 rounded-xl font-bold text-lg cursor-pointer transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Play size={18} className="text-primary" />
              </div>
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Stats Counter */}
          <motion.div
            style={{ y: textY }}
            className="flex flex-wrap gap-8 sm:gap-12 mt-16 pt-8 border-t border-border"
          >
            {[
              { number: '15K+', label: 'Members' },
              { number: '50+', label: 'Classes' },
              { number: '4.9', label: 'Rating' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-black text-primary">{stat.number}</div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* 🔥 SCROLL INDICATOR 🔥 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-text-secondary/30 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-3 bg-primary rounded-full" />
        </motion.div>
      </motion.div>

      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-3xl bg-bg-secondary rounded-3xl overflow-hidden border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="text-lg font-bold text-text-primary">Gym Tour Video</h3>
              <button
                onClick={() => setShowVideo(false)}
                className="w-8 h-8 rounded-lg bg-background border border-border flex items-center justify-center hover:border-primary"
              >
                <X size={16} className="text-text-primary" />
              </button>
            </div>
            <div className="aspect-video bg-black flex items-center justify-center flex-col gap-4">
              <Play size={64} className="text-primary opacity-50" />
              <p className="text-text-secondary">🎥 Video Coming Soon!</p>
            </div>
          </motion.div>
        </motion.div>
      )}

    </section>
  );
}

export default Hero;