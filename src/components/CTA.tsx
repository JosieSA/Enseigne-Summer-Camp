import { motion } from "motion/react";
import { ArrowUpRight, ShieldAlert, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="py-16 md:py-24 bg-[#5e005e] text-white relative overflow-hidden"
    >
      {/* Visual background atmospheric elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6 md:space-y-8">
        {/* Supporting tag */}
        <div className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest text-purple-200">
          <Sparkles className="h-4 w-4 text-purple-300" />
          <span>June 2026 Admissions Open</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight leading-tight max-w-3xl mx-auto">
          Unlock a Productive, Empowered & Future-Focused Vacation
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-purple-200 font-sans max-w-2xl mx-auto leading-relaxed">
          Equip your child with structured routines, computational thinking skills, 
          and positive mentorship that transforms digital idle scrolling into ambitious creative action.
        </p>

        {/* Primary CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            id="bottom-cta-register-btn"
            href="#register"
            className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white hover:bg-gray-100 text-brand-purple font-bold text-base px-8 py-4 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Reserve a Spot</span>
            <ArrowUpRight className="h-5 w-5" />
          </a>
          <a
            id="bottom-cta-whatsapp-btn"
            href="https://wa.me/233531366589?text=Hello%20Enseigne,%20I%20want%20to%20reserve%20a%20seat%20for%20the%20Summer%20Bootcamp."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center bg-transparent border border-white/30 hover:border-white text-white font-semibold text-base px-8 py-4 rounded-2xl transition-all hover:bg-white/5"
          >
            <span>Ask Admissions Question</span>
          </a>
        </div>

        {/* Security Reassurance Indicator */}
        <p className="text-[10px] text-purple-300 font-mono tracking-wider flex items-center justify-center gap-1">
          <ShieldAlert className="h-3.5 w-3.5 text-purple-400" />
          <span>ONLY 45 TOTAL SEATS AVAILABLE ACROSS IN-PERSON COHORTS. APPLIES FIRST-COME BASES.</span>
        </p>
      </div>
    </section>
  );
}
