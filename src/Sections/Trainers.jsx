import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Award, 
  Star, 
  Dumbbell,
  Quote,
  Zap,
  ChevronRight,
  Medal,
  X,
  Calendar,
  Clock
} from 'lucide-react';

function Trainers() {
  const sectionRef = useRef(null);
  const [activeTrainer, setActiveTrainer] = useState(null);
  const [bookingModal, setBookingModal] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const titleX = useTransform(scrollYProgress, [0, 0.5], [-100, 0]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const gridY = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const rotateText = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const trainers = [
    {
      id: 1,
      name: 'Alex Mercer',
      role: 'Head Coach',
      specialty: 'Strength & Powerlifting',
      experience: '12 Years',
      rating: 4.9,
      clients: '2000+',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&auto=format&fit=crop',
      color: '#E50914',
      gradient: 'from-red-600 to-red-900',
      shadow: 'shadow-red-500/20',
      achievements: ['National Champion 2020', 'Certified NASM', 'Olympic Lifting Coach'],
      quote: "Pain is temporary. Pride is forever.",
    },
    {
      id: 2,
      name: 'Sarah Chen',
      role: 'Senior Trainer',
      specialty: 'HIIT & Functional',
      experience: '8 Years',
      rating: 4.8,
      clients: '1500+',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&auto=format&fit=crop',
      color: '#8B5CF6',
      gradient: 'from-purple-600 to-purple-900',
      shadow: 'shadow-purple-500/20',
      achievements: ['CrossFit Level 2', 'Sports Science Degree', 'Injury Prevention Specialist'],
      quote: "Your only limit is your mind.",
    },
    {
      id: 3,
      name: 'Marcus Johnson',
      role: 'Nutrition Expert',
      specialty: 'Body Transformation',
      experience: '15 Years',
      rating: 5.0,
      clients: '3000+',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&auto=format&fit=crop',
      color: '#3B82F6',
      gradient: 'from-blue-600 to-blue-900',
      shadow: 'shadow-blue-500/20',
      achievements: ['Certified Nutritionist', 'IFBB Pro Card', 'Published Author'],
      quote: "Transform your body, transform your life.",
    },
  ];

  const handleBookSession = (trainer) => {
    setSelectedTrainer(trainer);
    setBookingModal(true);
  };

  return (
    <>
      <section 
        ref={sectionRef}
        id="trainers" 
        className="relative py-24 lg:py-32 bg-background overflow-hidden"
      >
        
        {/* Layer 1: Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(#E50914 1px, transparent 1px), linear-gradient(90deg, #E50914 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Layer 2: Blurred orbs */}
        <motion.div style={{ scale: bgScale }} className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
        </motion.div>

        {/* Layer 3: Rotating text */}
        <motion.div 
          style={{ rotate: rotateText }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        >
          <div className="text-[200px] font-black text-text-primary/3 whitespace-nowrap">
            OUR TEAM OUR TEAM OUR TEAM
          </div>
        </motion.div>

        {/* Layer 4: Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* SECTION HEADER */}
          <motion.div 
            style={{ x: titleX, opacity: titleOpacity }}
            className="text-center max-w-3xl mx-auto mb-20 lg:mb-28"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 
                bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full px-5 py-2 mb-6"
            >
              <Medal size={16} className="text-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Elite Team</span>
              <Zap size={14} className="text-primary" />
            </motion.div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-text-primary leading-tight mb-6">
              MEET THE
              <br />
              <span className="text-primary relative inline-block">
                CHAMPIONS
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h2>
            
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              World-class trainers dedicated to pushing you beyond your limits.
            </p>
          </motion.div>

          {/* TRAINERS GRID */}
          <motion.div 
            style={{ y: gridY, opacity: gridOpacity }}
            className="grid lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{ y: -12 }}
                onMouseEnter={() => setActiveTrainer(trainer.id)}
                onMouseLeave={() => setActiveTrainer(null)}
                className="relative group"
              >
                <div className={`relative h-full bg-bg-secondary rounded-3xl overflow-hidden 
                  border border-border group-hover:border-transparent transition-all duration-500
                  ${activeTrainer === trainer.id ? `shadow-2xl ${trainer.shadow}` : 'shadow-xl'}`}>
                  
                  {/* ✅ IMAGE CONTAINER - FIXED */}
                  <div className="relative h-80 sm:h-96 overflow-hidden">
                    {/* ✅ Real Image */}
                    <img 
                      src={trainer.image} 
                      alt={trainer.name}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary via-bg-secondary/20 to-transparent" />
                    
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${trainer.gradient} opacity-0 
                      group-hover:opacity-30 transition-opacity duration-500`} />

                    {/* Rating Badge */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <div className="bg-background/80 backdrop-blur-xl rounded-full px-3 py-1.5 
                        border border-border flex items-center gap-1.5">
                        <Star size={14} className="text-yellow-500 fill-yellow-500" />
                        <span className="text-text-primary text-sm font-bold">{trainer.rating}</span>
                      </div>
                    </div>

                    {/* Name on Image */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-black text-white mb-1">{trainer.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: trainer.color }} />
                        <p className="text-white/80 font-medium">{trainer.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    
                    {/* Specialty */}
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: trainer.color + '20' }}>
                        <Dumbbell size={16} style={{ color: trainer.color }} />
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary uppercase tracking-wider">Specialty</p>
                        <p className="text-text-primary font-semibold text-sm">{trainer.specialty}</p>
                      </div>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-border">
                      <div>
                        <p className="text-xs text-text-secondary mb-1">Experience</p>
                        <p className="text-text-primary font-bold text-lg">{trainer.experience}</p>
                      </div>
                      <div>
                        <p className="text-xs text-text-secondary mb-1">Clients</p>
                        <p className="text-text-primary font-bold text-lg">{trainer.clients}</p>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {trainer.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                          <Award size={14} style={{ color: trainer.color }} />
                          {achievement}
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: activeTrainer === trainer.id ? 'auto' : 0,
                        opacity: activeTrainer === trainer.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="flex items-start gap-2 p-4 rounded-xl mt-2"
                        style={{ backgroundColor: trainer.color + '10', borderLeft: `3px solid ${trainer.color}` }}>
                        <Quote size={20} style={{ color: trainer.color }} className="shrink-0 mt-0.5" />
                        <p className="text-text-primary text-sm italic font-medium">
                          "{trainer.quote}"
                        </p>
                      </div>
                    </motion.div>

                    {/* ✅ Book Session Button */}
                    

                  </div>

                  {/* Corner Accent */}
                  <div className={`absolute top-0 right-0 w-20 h-20 overflow-hidden 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}>
                    <div className="absolute -top-4 -right-4 w-16 h-16 rotate-45"
                      style={{ backgroundColor: trainer.color }} />
                    <Star size={14} className="absolute top-2 right-2 text-white" />
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </section>

      {/* ✅ BOOKING MODAL */}
      {bookingModal && selectedTrainer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setBookingModal(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="w-full max-w-md bg-bg-secondary rounded-3xl border border-border shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-bold text-text-primary">Book Session</h3>
              <button
                onClick={() => setBookingModal(false)}
                className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center"
              >
                <X size={20} className="text-text-primary" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Trainer Info */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-background border border-border">
                <img 
                  src={selectedTrainer.image} 
                  alt={selectedTrainer.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="text-text-primary font-bold">{selectedTrainer.name}</p>
                  <p className="text-text-secondary text-sm">{selectedTrainer.specialty}</p>
                </div>
              </div>

              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full px-4 py-3 rounded-xl bg-background border border-border text-text-primary placeholder-text-secondary outline-none focus:border-primary"
              />
              
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-background border border-border text-text-secondary">
                <Calendar size={18} />
                <input 
                  type="date" 
                  className="bg-transparent outline-none text-text-primary flex-1"
                />
              </div>

              <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-background border border-border text-text-secondary">
                <Clock size={18} />
                <select className="bg-transparent outline-none text-text-primary flex-1">
                  <option>Select Time</option>
                  <option>6:00 AM - 7:00 AM</option>
                  <option>7:00 AM - 8:00 AM</option>
                  <option>5:00 PM - 6:00 PM</option>
                  <option>6:00 PM - 7:00 PM</option>
                  <option>7:00 PM - 8:00 PM</option>
                </select>
              </div>

              <button
                onClick={() => setBookingModal(false)}
                className="w-full text-white py-3.5 rounded-xl font-bold shadow-lg"
                style={{ backgroundColor: selectedTrainer.color }}
              >
                Confirm Booking
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Trainers;