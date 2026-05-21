import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { whyCards } from "../data";

// Type-safe icon renderer from lucide-react
const renderIcon = (name: string, className: string) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 md:py-28 bg-white relative scroll-mt-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-purple uppercase tracking-widest text-xs sm:text-sm font-mono font-bold bg-purple-50 px-3.5 py-1.5 rounded-full inline-block">
            Empowerment & Structure
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-gray-950">
            Why Parents Are Choosing This Programme
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-sans">
            We go beyond standard code camps. Enseigne blends cutting-edge technological literacy 
            with critical personal habit tracking to prepare your teenager for life.
          </p>
        </div>

        {/* Responsive Bento Grid of whyCards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyCards.map((card, idx) => (
            <motion.div
              id={`why-card-${card.id}`}
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative bg-gray-50/60 hover:bg-white rounded-3xl p-8 border border-gray-100/80 hover:border-purple-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Highlight background light effects on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full group-hover:bg-purple-100/60 transition-colors -z-10" />

              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 text-brand-purple flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                  {renderIcon(card.icon, "h-6 w-6")}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-brand-purple transition-colors">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-gray-600 leading-relaxed font-sans">
                  {card.description}
                </p>
              </div>

              {/* Decorative Arrow */}
              <div className="mt-6 flex items-center text-xs font-semibold text-brand-purple mt-auto opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-2 transition-all duration-300 shrink-0">
                <span className="mr-0.5">Learn more</span>
                <Icons.ArrowRight className="h-3 w-3" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Trust Accent */}
        <div className="mt-16 text-center bg-purple-50/50 rounded-3xl p-6 border border-purple-100 max-w-4xl mx-auto">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            🚀 <strong>Did you know?</strong> Parents of previous cohorts report an average of 
            <span className="text-brand-purple font-bold"> 84% reduction in non-educational screen time</span> and significantly heightened motivation for high school and university prep courses.
          </p>
        </div>

      </div>
    </section>
  );
}
