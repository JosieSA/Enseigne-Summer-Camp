import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { programmeDetails } from "../data";

const renderIcon = (name: string, className: string) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

export default function Details() {
  return (
    <section
      id="details"
      className="py-20 md:py-28 bg-gradient-to-br from-brand-purple-dark via-purple-900 to-gray-950 text-white relative overflow-hidden scroll-mt-10"
    >
      {/* Decorative vector grid overlays or blurred ambient circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Details Left Side: Callouts and Context */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left">
            <span className="text-secondary uppercase tracking-widest text-xs font-mono font-bold bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full inline-block">
              📅 Logistics & Structure
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight">
              Programme Details & Timelines
            </h2>
            
            <p className="text-sm sm:text-base text-purple-200 font-sans leading-relaxed">
              Designed from the ground up for kids and teenagers (ages 7–17) in Ghana. 
              Our schedules are set to support flexible study, and physical cohort groups meet at Accra Innovation Center, East Legon.
            </p>

            <div className="pt-4 flex flex-col items-center lg:items-start space-y-3 font-mono text-xs">
              <div className="flex items-center space-x-2 text-purple-100">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span>Next Cohort Starts: June 22nd 2026 - August</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-100">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Enrollment Window: Now Open</span>
              </div>
            </div>

            <div className="pt-6">
              <a
                id="details-action-btn"
                href="#register"
                className="inline-flex items-center space-x-2 bg-white hover:bg-gray-100 text-brand-purple font-bold text-sm px-6 py-3 rounded-2xl shadow-md transition-all duration-300 hover:scale-105"
              >
                <span>Reserve a Slot</span>
                <Icons.ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Details Right Side: Modular Details Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="details-grid">
              {programmeDetails.map((detail, idx) => (
                <motion.div
                  id={`details-card-${idx}`}
                  key={detail.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-200 flex items-center justify-center mb-4 group-hover:scale-110 duration-300">
                    {renderIcon(detail.icon, "h-5 w-5")}
                  </div>

                  <span className="block text-[10px] text-purple-300 font-mono uppercase tracking-wider">
                    {detail.label}
                  </span>

                  <span className="block text-lg font-display font-extrabold text-white mt-1 group-hover:text-purple-100 transition-colors">
                    {detail.value}
                  </span>

                  <span className="block text-xs text-purple-200 font-sans mt-2 leading-relaxed">
                    {detail.desc}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center sm:text-left bg-white/5 rounded-2xl p-4 border border-white/5 text-xs text-purple-300 leading-relaxed font-sans">
              ℹ️ <strong>Format Flexibility:</strong> In-person sessions run inside premium air-conditioned workspaces with super-fast backup internet and secure drop-off/pick-up protocols at Accra Innovation Center, East Legon. Virtual attendees use our purpose-built streaming workspace, tailored specifically to Ghanaian bandwidth constraints (low-data screen share streaming).
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
