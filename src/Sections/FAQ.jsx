import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What are your gym timings?",
    answer: "We're open 24/7! Yes, you read that right. Whether you're an early bird at 5 AM or a night owl at 2 AM, FITX is always ready for you. Staff assistance is available from 6 AM to 10 PM.",
  },
  {
    question: "Do you offer personal training?",
    answer: "Absolutely! We have certified personal trainers who create custom workout plans based on your goals. You can book 1-on-1 sessions or small group training. Check our PRO and ELITE plans for included PT sessions.",
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes! We offer a 3-day free trial so you can experience the FITX vibe before committing. Just walk in or message us on WhatsApp to claim your free trial. No credit card required.",
  },
  {
    question: "What equipment do you have?",
    answer: "We've got everything: free weights (dumbbells, barbells, kettlebells), machines (cable, Smith, leg press), cardio (treadmills, bikes, rowers), functional training area, and a dedicated stretching zone.",
  },
  {
    question: "Do you have group classes?",
    answer: "Yes! We run daily group classes including HIIT, Yoga, Zumba, Spinning, and CrossFit. Classes are included in PRO and ELITE plans. Message us for the weekly timetable.",
  },
  {
    question: "Is there a separate timing for women?",
    answer: "We have mixed hours and dedicated women-only slots. Women-only timing is 10 AM to 2 PM on weekdays. We also have female trainers available for personal training sessions.",
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, you can freeze your membership for up to 30 days per year. Perfect for vacations or medical breaks. Just inform us 7 days in advance. Freezing is free for ELITE members.",
  },
  {
    question: "What's the cancellation policy?",
    answer: "Cancel anytime, no questions asked. We don't believe in locking you in. Just give us a 15-day notice before your next billing cycle. No cancellation fees, no drama.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ WhatsApp redirect
  const handleWhatsApp = () => {
    const phone = "+923001234567";
    const message = "Hi FITX! I have a question about...";
    const url = `https://wa.me/${phone.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-background px-6 py-24 text-text-primary"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#E50914]/5 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#E50914]/5 blur-[120px]" />

      {/* Heading */}
      <div className="relative mx-auto mb-16 max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 bg-[#E50914]/10 border border-[#E50914]/20 rounded-full px-4 py-1.5 mb-6">
          <HelpCircle size={14} className="text-[#E50914]" />
          <span className="text-[#E50914] text-xs font-bold uppercase tracking-widest">Got Questions?</span>
        </div>

        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
          Frequently Asked <span className="text-[#E50914]">Questions</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-text-secondary">
          Everything you need to know before you start your fitness journey with us.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="relative mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden
                ${isOpen 
                  ? "border-[#E50914]/50 bg-bg-secondary" 
                  : "border-border bg-bg-secondary hover:border-[#E50914]/30"
                }`}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <span className={`text-sm md:text-base font-bold pr-4 transition-colors
                  ${isOpen ? "text-[#E50914]" : "text-text-primary"}`}
                >
                  {faq.question}
                </span>

                {/* Plus/Minus Icon */}
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all
                  ${isOpen 
                    ? "bg-[#E50914] text-white" 
                    : "bg-background text-text-secondary border border-border"
                  }`}
                >
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6">
                      {/* Divider */}
                      <div className="h-px bg-border mb-4" />
                      
                      {/* Answer Text */}
                      <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="relative mx-auto mt-12 max-w-xl text-center">
        <p className="text-text-secondary text-sm mb-4">Still have questions?</p>
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-2 bg-[#E50914] hover:bg-[#FF1E2D] text-white 
            px-8 py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm transition-all
            shadow-lg shadow-[#E50914]/25"
        >
          Ask on WhatsApp
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}

export default FAQ;