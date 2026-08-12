import React from "react";

// ✅ GYM OWNER WHATSAPP NUMBER
const GYM_PHONE = "+923001234567"; // Apna number daalo

const plans = [
  {
    name: "BASIC",
    price: "19",
    description: "Perfect for beginners starting their fitness journey.",
    popular: false,
    features: [
      "Full Gym Access",
      "Cardio Area",
      "Locker Access",
      "Free Wi-Fi",
    ],
  },
  {
    name: "PRO",
    price: "39",
    description: "For serious people ready to level up their training.",
    popular: true,
    features: [
      "Everything in Basic",
      "Personal Training",
      "Diet Consultation",
      "Sauna Access",
      "Progress Tracking",
    ],
  },
  {
    name: "ELITE",
    price: "69",
    description: "The ultimate fitness experience for maximum results.",
    popular: false,
    features: [
      "Everything in Pro",
      "Unlimited Personal Training",
      "Custom Diet Plan",
      "Recovery Sessions",
      "Priority Support",
    ],
  },
];

function Pricing() {

  // ✅ WhatsApp redirect
  const handleGetStarted = (plan) => {
    const message = `Hi FITX! 💪%0A%0AI'm interested in the *${plan.name}* plan ($${plan.price}/month).%0A%0APlease share more details about:%0A- Membership process%0A- Timings%0A- Any ongoing offers%0A%0AThank you!`;
    
    const phoneNumber = GYM_PHONE.replace(/\+/g, '');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappURL, '_blank');
  };

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-background px-6 py-24 text-text-primary"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E50914]/10 blur-[120px]" />

      {/* Heading */}
      <div className="relative mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-[#E50914]">
          Membership Plans
        </p>

        <h2 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
          Choose Your{" "}
          <span className="text-[#E50914]">Weapon</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-text-secondary">
          No excuses. No shortcuts. Choose your plan and start building the
          strongest version of yourself.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="relative mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`group relative transition-all duration-500
              hover:-translate-y-4
              ${plan.popular ? "md:-translate-y-5" : ""}`}
            style={{
              animation: `pricingReveal 0.7s ease-out ${index * 0.15}s both`,
            }}
          >
            {/* Red Glow */}
            <div className="absolute -inset-[1px] rounded-3xl bg-[#E50914] opacity-0 blur-md transition duration-500 group-hover:opacity-40" />

            {/* Card */}
            <div
              className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-8
                ${plan.popular
                  ? "border-[#E50914] bg-bg-secondary"
                  : "border-border bg-bg-secondary"
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-[#E50914] px-5 py-2 text-xs font-black uppercase tracking-widest text-white">
                  Most Popular
                </div>
              )}

              {/* Plan Name & Price */}
              <div>
                <p className="text-sm font-bold tracking-[0.3em] text-text-secondary">
                  {plan.name}
                </p>

                <div className="mt-5 flex items-end">
                  <span className="text-6xl font-black tracking-tighter text-text-primary">
                    ${plan.price}
                  </span>
                  <span className="mb-2 ml-2 text-text-secondary">/month</span>
                </div>

                <p className="mt-5 min-h-[48px] text-sm leading-6 text-text-secondary">
                  {plan.description}
                </p>
              </div>

              {/* Divider */}
              <div className="my-8 h-px bg-border" />

              {/* Features */}
              <ul className="flex flex-1 flex-col gap-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-sm text-text-secondary"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E50914] text-xs font-black text-white">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* ✅ Get Started Button - WhatsApp */}
              <button
                onClick={() => handleGetStarted(plan)}
                className={`mt-10 w-full rounded-xl px-6 py-4 text-sm font-black uppercase tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-2
                  ${plan.popular
                    ? "bg-[#E50914] text-white shadow-[0_0_30px_rgba(229,9,20,0.25)] hover:bg-[#FF1E2D] hover:shadow-[0_0_45px_rgba(229,9,20,0.45)]"
                    : "border border-border bg-transparent text-text-primary hover:border-[#E50914] hover:bg-[#E50914] hover:text-white"
                  }
                `}
              >
                {/* WhatsApp Icon */}
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Text */}
      <div className="relative mx-auto mt-14 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-text-secondary">
          Cancel anytime • No hidden fees • Train harder
        </p>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes pricingReveal {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

export default Pricing;