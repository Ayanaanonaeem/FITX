import { useRef, useState } from 'react';  // ✅ useState add karo
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Dumbbell, 
  Users, 
  Award, 
  Clock, 
  Target, 
  Shield,
  Sparkles,
  ArrowRight,
  Star,
  X,           // ✅ X icon add karo
  Check,
  Quote
} from 'lucide-react';

function About() {
  const sectionRef = useRef(null);
  const [showMore, setShowMore] = useState(false);  // ✅ Modal state
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 0.8]);
  const textX = useTransform(scrollYProgress, [0, 0.5], [60, 0]);

  const features = [
    { icon: Dumbbell, title: 'Premium Equipment', desc: 'Latest machines & free weights' },
    { icon: Users, title: 'Expert Trainers', desc: 'Certified fitness professionals' },
    { icon: Clock, title: '24/7 Access', desc: 'Workout anytime, any day' },
    { icon: Shield, title: 'Safe & Clean', desc: 'Hygienic environment guaranteed' },
  ];

  const stats = [
    { icon: Award, number: '10+', label: 'Years Experience', suffix: 'yrs' },
    { icon: Target, number: '99%', label: 'Client Satisfaction', suffix: '%' },
    { icon: Star, number: '500+', label: 'Success Stories', suffix: '+' },
  ];

  return (
    <>
      <section 
        ref={sectionRef}
        id="about" 
        className="relative py-24 lg:py-32 overflow-hidden bg-background"
      >
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 skew-x-12 transform origin-top-right" />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* LEFT SIDE - Image */}
            <div className="relative">
              <motion.div
                style={{ scale: imageScale }}
                className="relative z-10 rounded-3xl overflow-hidden border-2 border-border
                  shadow-2xl shadow-black/50 aspect-[4/5]"
              >
                <div className="w-full h-full bg-gradient-to-br from-bg-secondary via-primary/20 to-bg-secondary
                  flex items-center justify-center">
                  <div className="text-center p-8">
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ repeat: Infinity, duration: 3 }}
                      className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6
                        shadow-[0_0_50px_rgba(229,9,20,0.3)]"
                    >
                      <Dumbbell className="w-16 h-16 text-white" />
                    </motion.div>
                    
                    <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-xl rounded-xl p-4 border border-border">
                      <p className="text-3xl font-black text-primary">10+</p>
                      <p className="text-xs text-text-secondary">Years</p>
                    </div>
                    
                    <div className="absolute bottom-6 left-6 bg-primary rounded-xl px-6 py-3">
                      <p className="text-white font-bold">#1 Rated Gym</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
                className="absolute -top-6 -left-6 w-32 h-32 bg-bg-secondary rounded-2xl border border-border 
                  flex items-center justify-center shadow-xl z-0"
              >
                <Sparkles className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                className="absolute -bottom-6 -right-6 w-28 h-28 bg-primary rounded-2xl 
                  flex items-center justify-center shadow-xl shadow-primary/30 z-20"
              >
                <Award className="w-10 h-10 text-white" />
              </motion.div>
            </div>

            {/* RIGHT SIDE - Content */}
            <motion.div style={{ x: textX }}>
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 
                  bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary text-sm font-semibold uppercase tracking-wider">About Us</span>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary leading-tight">
                  WHY <span className="text-primary">CHOOSE</span>
                  <br />
                  FIT<span className="text-primary">X</span>?
                </h2>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-10"
              >
                <p className="text-lg text-text-secondary leading-relaxed">
                  We're not just a gym – we're a <span className="text-primary font-semibold">movement</span>. 
                  With cutting-edge equipment, certified trainers, and an electrifying atmosphere, 
                  we make sure every rep counts towards your transformation.
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="grid grid-cols-2 gap-4 mb-10"
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, y: -2 }}
                      className="group p-4 rounded-xl bg-bg-secondary border border-border hover:border-primary/50 transition-all cursor-default"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3
                        group-hover:bg-primary group-hover:scale-110 transition-all">
                        <Icon size={18} className="text-primary group-hover:text-white transition-colors" />
                      </div>
                      <h4 className="font-bold text-text-primary text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-text-secondary">{feature.desc}</p>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* ✅ CTA Button - Opens Modal */}
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                onClick={() => setShowMore(true)}  // ✅ Opens modal
                className="group flex items-center gap-2 
                  bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-xl font-bold
                  shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More About Us
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

            </motion.div>
          </div>

          {/* STATS ROW */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="relative group p-8 rounded-2xl bg-bg-secondary border border-border
                    hover:border-primary/30 transition-all overflow-hidden"
                >
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center
                      group-hover:bg-primary group-hover:scale-110 transition-all shrink-0">
                      <Icon size={24} className="text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-black text-text-primary">
                          {stat.number}
                        </span>
                        <span className="text-xl font-bold text-primary">{stat.suffix}</span>
                      </div>
                      <p className="text-text-secondary text-sm mt-1">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

      </section>

      {/* ✅ LEARN MORE MODAL */}
      {showMore && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setShowMore(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-bg-secondary rounded-3xl border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-bg-secondary flex items-center justify-between p-6 border-b border-border rounded-t-3xl">
              <h3 className="text-xl font-bold text-text-primary">About FITX Gym</h3>
              <button
                onClick={() => setShowMore(false)}
                className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <X size={20} className="text-text-primary" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              
              {/* Mission */}
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">🏆 Our Mission</h4>
                <p className="text-text-secondary leading-relaxed">
                  At FITX, we believe fitness is not just about lifting weights – it's about 
                  <span className="text-text-primary font-semibold"> transforming lives</span>. Our mission is to provide 
                  a world-class fitness experience that empowers every individual to become the 
                  best version of themselves.
                </p>
              </div>

              {/* Story */}
              <div>
                <h4 className="text-lg font-bold text-primary mb-2">📖 Our Story</h4>
                <p className="text-text-secondary leading-relaxed">
                  Founded in 2014, FITX started as a small garage gym with a big dream. Today, 
                  we've grown into the city's #1 rated fitness destination, helping over 
                  <span className="text-primary font-semibold"> 15,000+ members</span> achieve their fitness goals.
                </p>
              </div>

              {/* What Makes Us Different */}
              <div>
                <h4 className="text-lg font-bold text-primary mb-3">✨ What Makes Us Different</h4>
                <div className="space-y-3">
                  {[
                    'State-of-the-art equipment from leading brands',
                    'Certified trainers with 10+ years experience',
                    'Personalized workout & nutrition plans',
                    'Supportive community that feels like family',
                    'Clean, safe, and hygienic environment 24/7',
                    'Flexible membership plans with no hidden fees',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-green-400" />
                      </div>
                      <p className="text-text-secondary text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 flex items-start gap-3">
                <Quote size={20} className="text-primary shrink-0 mt-0.5" />
                <p className="text-text-primary text-sm italic">
                  "Joining FITX was the best decision of my life. The energy, the trainers, 
                  the community – everything is just amazing!"
                </p>
              </div>

              {/* CTA in Modal */}
              <button
                onClick={() => setShowMore(false)}
                className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-bold text-lg
                  shadow-lg shadow-primary/25 transition-all"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default About;