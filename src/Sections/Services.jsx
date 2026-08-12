import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Dumbbell, 
  Heart, 
  Users, 
  Apple, 
  Timer, 
  Brain,
  ArrowRight,
  Sparkles,
  Zap,
  Crown,
  X,
  Check,
  Clock,
  Star,
  Target
} from 'lucide-react';
import { scrollTo } from '../Utils/scrollTo';

function Services() {
  const sectionRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedService, setSelectedService] = useState(null); // ✅ Modal state
  const [consultModal, setConsultModal] = useState(false); // ✅ Consultation modal

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      desc: 'Build raw power with our elite equipment and expert-guided programs.',
      gradient: 'from-red-500 to-orange-500',
      iconBg: 'bg-red-500/10',
      iconColor: 'text-red-400',
      borderColor: 'border-red-500/20',
      features: ['Free Weights', 'Machines', 'Power Racks'],
      // ✅ Modal Details
      longDesc: 'Our strength training program is designed for all levels - from beginners learning proper form to advanced lifters pushing their limits. We use periodization techniques to ensure consistent progress.',
      benefits: [
        'Increase muscle mass and strength',
        'Boost metabolism and fat burning',
        'Improve bone density and joint health',
        'Enhance athletic performance',
      ],
      duration: '60-90 min sessions',
      level: 'All Levels',
    },
    {
      icon: Heart,
      title: 'Cardio Zone',
      desc: 'Heart-pumping sessions on premium treadmills and bikes.',
      gradient: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-blue-500/10',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/20',
      features: ['Treadmills', 'Cycling', 'Rowing'],
      longDesc: 'Get your heart racing with our state-of-the-art cardio equipment. From high-intensity interval training to steady-state endurance sessions, we have everything you need for cardiovascular fitness.',
      benefits: [
        'Improve heart health and endurance',
        'Burn calories effectively',
        'Reduce stress and anxiety',
        'Increase lung capacity',
      ],
      duration: '30-60 min sessions',
      level: 'All Levels',
    },
    {
      icon: Users,
      title: 'Group Classes',
      desc: 'Energy-packed group sessions that make fitness fun.',
      gradient: 'from-purple-500 to-pink-500',
      iconBg: 'bg-purple-500/10',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/20',
      features: ['HIIT', 'Yoga', 'Zumba'],
      longDesc: 'Experience the energy of working out together! Our group classes are led by motivating instructors who make every session engaging and effective. Choose from a variety of class styles.',
      benefits: [
        'Stay motivated with group energy',
        'Learn proper form from instructors',
        'Make friends and build community',
        'Variety keeps workouts exciting',
      ],
      duration: '45-60 min classes',
      level: 'Beginner to Advanced',
    },
    {
      icon: Apple,
      title: 'Nutrition Plan',
      desc: 'Customized meal plans to fuel your fitness journey.',
      gradient: 'from-green-500 to-emerald-500',
      iconBg: 'bg-green-500/10',
      iconColor: 'text-green-400',
      borderColor: 'border-green-500/20',
      features: ['Meal Plans', 'Supplements', 'Tracking'],
      longDesc: 'Fuel your body right with personalized nutrition plans created by our certified nutritionists. We analyze your goals, body type, and preferences to create a sustainable eating plan.',
      benefits: [
        'Customized meal plans for your goals',
        'Supplement guidance and recommendations',
        'Weekly progress tracking',
        'Grocery lists and recipes included',
      ],
      duration: 'Ongoing support',
      level: 'Customized',
    },
    {
      icon: Timer,
      title: 'Personal Training',
      desc: 'One-on-one sessions tailored to your unique goals.',
      gradient: 'from-yellow-500 to-amber-500',
      iconBg: 'bg-yellow-500/10',
      iconColor: 'text-yellow-400',
      borderColor: 'border-yellow-500/20',
      features: ['Custom Plan', '1-on-1 Coach', 'Progress Track'],
      longDesc: 'Get undivided attention from our elite personal trainers. They will create a customized workout plan, correct your form, and push you beyond what you thought possible.',
      benefits: [
        'Personalized workout programming',
        'Form correction and injury prevention',
        'Goal setting and progress tracking',
        'Flexible scheduling',
      ],
      duration: '60 min sessions',
      level: 'All Levels',
    },
    {
      icon: Brain,
      title: 'Mind & Body',
      desc: 'Balance your mental and physical wellness together.',
      gradient: 'from-indigo-500 to-violet-500',
      iconBg: 'bg-indigo-500/10',
      iconColor: 'text-indigo-400',
      borderColor: 'border-indigo-500/20',
      features: ['Meditation', 'Stretching', 'Recovery'],
      longDesc: 'True fitness includes mental wellness. Our mind-body programs combine yoga, meditation, and recovery techniques to help you find balance, reduce stress, and improve overall wellbeing.',
      benefits: [
        'Reduce stress and anxiety',
        'Improve flexibility and mobility',
        'Enhance mind-body connection',
        'Better sleep and recovery',
      ],
      duration: '45-75 min sessions',
      level: 'All Levels',
    },
  ];

  return (
    <>
      <section 
        ref={sectionRef}
        id="services" 
        className="relative py-24 lg:py-32 bg-bg-secondary overflow-hidden"
      >
        
        {/* BACKGROUND ORBS */}
        <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        </motion.div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SECTION HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 
                bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full px-5 py-2 mb-6"
            >
              <Crown size={16} className="text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Premium Services</span>
              <Sparkles size={14} className="text-primary" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary leading-tight mb-4">
                EVERYTHING YOU
                <br />
                <span className="text-primary relative">
                  NEED
                </span>{' '}
                TO SUCCEED
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                From strength to nutrition, we provide complete fitness solutions 
                under one roof. Your transformation starts here.
              </p>
            </motion.div>

          </div>

          {/* SERVICES GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredCard === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ y: -8 }}
                  className="relative group cursor-default"
                >
                  <div className={`relative h-full rounded-2xl bg-background border ${service.borderColor} 
                    group-hover:border-transparent transition-all duration-500 overflow-hidden`}>
                    
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} 
                        transition-opacity duration-500 pointer-events-none
                        ${isHovered ? 'opacity-15' : 'opacity-0'}`} 
                    />

                    <div className="relative p-6 lg:p-8 flex flex-col h-full z-10">
                      
                      <div className={`w-16 h-16 rounded-2xl ${service.iconBg} 
                        flex items-center justify-center mb-6
                        group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon size={28} className={service.iconColor} />
                      </div>

                      <h3 className={`text-xl lg:text-2xl font-bold mb-3 transition-colors duration-300
                        ${isHovered ? service.iconColor : 'text-text-primary'}`}>
                        {service.title}
                      </h3>

                      <p className="text-text-secondary text-sm lg:text-base mb-6 leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="space-y-2 mb-6 flex-1">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                            <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300
                              ${isHovered ? service.iconColor.replace('text-', 'bg-') : 'bg-primary'}`} />
                            {feature}
                          </div>
                        ))}
                      </div>

                      {/* ✅ Learn More Button - Opens specific service modal */}
                      <motion.button
                        onClick={() => setSelectedService(service)}
                        className={`flex items-center gap-2 font-semibold text-sm 
                          group/btn hover:gap-3 transition-all cursor-pointer
                          ${isHovered ? service.iconColor : 'text-primary'}`}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>

                    </div>

                    <div className={`absolute top-0 right-0 w-16 h-16 overflow-hidden transition-opacity duration-300 pointer-events-none
                      ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                      <div className={`absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br ${service.gradient} rotate-45`} />
                      <Zap size={12} className="absolute top-2 right-2 text-white" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* BOTTOM CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 
              bg-background border border-border rounded-2xl p-6 sm:p-8">
              <p className="text-text-secondary text-lg">
                Not sure where to start?
              </p>
              <motion.button
                onClick={() => setConsultModal(true)}
                className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-white 
                  px-6 py-3 rounded-xl font-bold shadow-lg shadow-primary/25 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>

        </div>

      </section>

      {/* ✅ SERVICE DETAIL MODAL */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="w-full max-w-lg max-h-[85vh] overflow-y-auto bg-bg-secondary rounded-3xl border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with gradient */}
            <div className={`relative p-6 rounded-t-3xl bg-gradient-to-r ${selectedService.gradient}`}>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/30 flex items-center justify-center hover:bg-black/50 transition-colors"
              >
                <X size={16} className="text-white" />
              </button>
              
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center`}>
                  <selectedService.icon size={28} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                  <p className="text-white/70 text-sm">{selectedService.desc}</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              
              {/* Description */}
              <div>
                <h4 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-2">Overview</h4>
                <p className="text-text-primary leading-relaxed">{selectedService.longDesc}</p>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-background border border-border flex items-center gap-3">
                  <Clock size={18} className="text-primary" />
                  <div>
                    <p className="text-xs text-text-secondary">Duration</p>
                    <p className="text-text-primary text-sm font-semibold">{selectedService.duration}</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-background border border-border flex items-center gap-3">
                  <Target size={18} className="text-primary" />
                  <div>
                    <p className="text-xs text-text-secondary">Level</p>
                    <p className="text-text-primary text-sm font-semibold">{selectedService.level}</p>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-sm font-bold text-text-secondary uppercase tracking-wider mb-3">Benefits</h4>
                <div className="space-y-2">
                  {selectedService.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="text-green-400" />
                      </div>
                      <p className="text-text-secondary text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => {
                  setSelectedService(null);
                  scrollTo('pricing');
                }}
                className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-bold
                  shadow-lg shadow-primary/25 transition-all"
              >
                Get Started with {selectedService.title}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* ✅ CONSULTATION MODAL */}
      {consultModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setConsultModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="w-full max-w-md bg-bg-secondary rounded-3xl border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-bold text-text-primary">Free Consultation</h3>
              <button
                onClick={() => setConsultModal(false)}
                className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center hover:border-primary transition-colors"
              >
                <X size={20} className="text-text-primary" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary placeholder-text-secondary focus:border-primary outline-none"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary placeholder-text-secondary focus:border-primary outline-none"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary placeholder-text-secondary focus:border-primary outline-none"
              />
              <select 
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary focus:border-primary outline-none"
              >
                <option>Select Interest</option>
                {services.map((s, i) => (
                  <option key={i}>{s.title}</option>
                ))}
              </select>
              <button
                onClick={() => setConsultModal(false)}
                className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-xl font-bold shadow-lg shadow-primary/25"
              >
                Submit Request
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Services;