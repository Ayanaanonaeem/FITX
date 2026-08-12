import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Trophy,
  Target,
  ArrowUpRight,
  MessageCircle
} from 'lucide-react';

function Testimonials() {
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const titleX = useTransform(scrollYProgress, [0, 0.5], [100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      role: 'Software Engineer',
      transformation: 'Lost 25kg in 6 months',
      rating: 5,
      image: '/images/trainer-1.jpg',
      color: '#E50914',
      gradient: 'from-red-500/20 to-red-600/20',
      text: "Joining FITX was the best decision of my life! The trainers pushed me beyond my limits. I never thought I could achieve this transformation. The energy here is UNREAL! 🔥",
      stats: { before: '95kg', after: '70kg', duration: '6 months' }
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'College Student',
      transformation: 'Gained muscle & confidence',
      rating: 5,
      image: '/images/trainer-2.jpg',
      color: '#8B5CF6',
      gradient: 'from-purple-500/20 to-purple-600/20',
      text: "As a girl, I was scared to join a gym. But FITX made me feel so comfortable! The group classes are AMAZING and I've made so many friends. Best vibe ever! 💪✨",
      stats: { before: 'Underweight', after: 'Fit & Strong', duration: '4 months' }
    },
    {
      id: 3,
      name: 'Amit Verma',
      role: 'Business Owner',
      transformation: 'Got shredded at 40',
      rating: 5,
      image: '/images/trainer-3.jpg',
      color: '#3B82F6',
      gradient: 'from-blue-500/20 to-blue-600/20',
      text: "At 40, I thought it was too late. FITX proved me wrong! The personal training sessions are worth every penny. My wife couldn't believe the transformation! Age is just a number here. 🎯",
      stats: { before: 'Obese', after: 'Athletic', duration: '8 months' }
    },
    {
      id: 4,
      name: 'Neha Gupta',
      role: 'Yoga Instructor',
      transformation: 'Found my true strength',
      rating: 5,
      image: '/images/trainer-1.jpg',
      color: '#10B981',
      gradient: 'from-green-500/20 to-green-600/20',
      text: "The mind-body classes here are NEXT LEVEL! I came for yoga but discovered so much more. The community is incredibly supportive. This place changed my life perspective! 🧘‍♀️🌟",
      stats: { before: 'Stressed', after: 'Energized', duration: '3 months' }
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Slide animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? -15 : 15,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      rotateY: direction > 0 ? 15 : -15,
    }),
  };

  return (
    <section 
      ref={sectionRef}
      id="testimonials" 
      className="relative py-24 lg:py-32 bg-bg-secondary overflow-hidden"
    >
      
      {/* BACKGROUND EFFECTS */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
        
        {/* Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
        
        {/* Animated circles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-64 h-64 border border-primary/10 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 left-20 w-48 h-48 border border-purple-500/10 rounded-full"
        />
      </motion.div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER - Right aligned with parallax */}
        <motion.div 
          style={{ x: titleX, opacity: titleOpacity }}
          className="max-w-3xl ml-auto text-right mb-16 lg:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 
              bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full px-5 py-2 mb-6"
          >
            <MessageCircle size={16} className="text-primary" />
            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Success Stories</span>
            <Trophy size={14} className="text-primary" />
          </motion.div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-text-primary leading-tight mb-6">
            REAL
            <br />
            <span className="text-primary relative">
              TRANSFORMATIONS
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </span>
          </h2>
          
          <p className="text-lg text-text-secondary max-w-xl ml-auto">
            Don't just take our word for it. Hear from real members who transformed 
            their lives at FITX.
          </p>
        </motion.div>

        {/* TESTIMONIAL CAROUSEL */}
        <div className="max-w-5xl mx-auto">
          
          {/* Main Card */}
          <div className="relative bg-background rounded-3xl border border-border overflow-hidden
            shadow-2xl shadow-black/30">
            
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${currentTestimonial.gradient} opacity-50`} />
            
            <div className="relative grid lg:grid-cols-5 min-h-[500px]">
              
              {/* LEFT - Image & Stats */}
              <div className="lg:col-span-2 relative bg-bg-secondary overflow-hidden">
                {/* Image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
                <div className="w-full h-full min-h-[300px] lg:min-h-full bg-gradient-to-br from-gray-800 to-gray-900" />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                    >
                      <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">
                        {currentTestimonial.name}
                      </h3>
                      <p className="text-white/70 mb-4">{currentTestimonial.role}</p>
                      
                      {/* Stars */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                          <p className="text-white/60 text-xs mb-1">Before</p>
                          <p className="text-white font-bold text-sm">{currentTestimonial.stats.before}</p>
                        </div>
                        <div className="bg-primary rounded-xl p-3 text-center">
                          <p className="text-white/80 text-xs mb-1">Duration</p>
                          <p className="text-white font-bold text-sm">{currentTestimonial.stats.duration}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                          <p className="text-white/60 text-xs mb-1">After</p>
                          <p className="text-white font-bold text-sm">{currentTestimonial.stats.after}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* RIGHT - Quote & Content */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
                    className="space-y-6"
                  >
                    {/* Quote icon */}
                    <div className="flex items-start gap-3">
                      <Quote size={40} className="text-primary shrink-0" />
                      <div>
                        <p className="text-primary font-bold text-lg">
                          {currentTestimonial.transformation}
                        </p>
                      </div>
                    </div>

                    {/* Testimonial text */}
                    <p className="text-lg lg:text-xl text-text-primary leading-relaxed italic">
                      "{currentTestimonial.text}"
                    </p>

                    {/* CTA */}
                    <motion.button
                      className="inline-flex items-center gap-2 text-primary font-semibold
                        group hover:gap-3 transition-all"
                      whileHover={{ x: 5 }}
                    >
                      Read Full Story
                      <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                    </motion.button>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center gap-4 mt-10 pt-8 border-t border-border">
                  <motion.button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-xl bg-bg-secondary border border-border
                      flex items-center justify-center hover:border-primary transition-all
                      hover:bg-primary/10"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft size={20} className="text-text-primary" />
                  </motion.button>

                  {/* Dots */}
                  <div className="flex gap-2 flex-1 justify-center">
                    {testimonials.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentIndex ? 1 : -1);
                          setCurrentIndex(index);
                        }}
                        className={`h-2 rounded-full transition-all ${
                          index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-border'
                        }`}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>

                  <motion.button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-xl bg-primary border border-primary
                      flex items-center justify-center hover:bg-primary-hover transition-all"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight size={20} className="text-white" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Testimonials;