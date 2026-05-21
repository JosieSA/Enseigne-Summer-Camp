import { motion } from "motion/react";
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, CheckCircle } from "lucide-react";

export default function Hero() {
  // Use exact generated image path
  const heroImageSrc = "/src/assets/images/classroom_attached_1779369052912.png";

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-purple-50 via-white to-gray-50 flex items-center"
    >
      {/* Absolute decorative blurred elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-fuchsia-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Visual Social Proof / Target Beacon */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-purple-100/80 border border-purple-200/50 px-4 py-1.5 rounded-full text-brand-purple font-medium text-xs sm:text-sm shadow-sm"
              id="social-proof-badge"
            >
              <Sparkles className="h-4 w-4" />
              <span>Discipline & Future Skills Bootcamp for Ages 7–17 in Accra</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight text-gray-900 leading-[1.05]"
              id="hero-header-title"
            >
              Helping Kids & Teenagers Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-600">
                Discipline, Confidence
              </span>{" "}
              & Future-Ready Skills This Vacation
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-sans leading-relaxed"
              id="hero-subheader"
            >
              A structured development programme combining technology, leadership, productivity, coding, AI, and mentorship at Accra Innovation Center, East Legon, optimized for ages 7 to 17.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              id="hero-action-buttons"
            >
              <a
                id="hero-register-btn"
                href="#register"
                className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-brand-purple hover:bg-brand-purple-light text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-lg shadow-purple-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
              >
                <span>Register Now</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/233531366589?text=Hello%20Enseigne,%20I%20am%20interested%20in%20enrolling%20in%20the%20Discipline%20%26%20Skills%20Summer%20Bootcamp."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center space-x-2.5 bg-white border border-gray-200 text-gray-800 hover:text-brand-purple font-semibold text-base px-8 py-4 rounded-2xl shadow-sm hover:border-brand-purple-light transition-all duration-300 hover:bg-purple-50/20"
              >
                <MessageCircle className="h-5 w-5 text-green-600 fill-green-600" />
                <span>WhatsApp Us</span>
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-4 flex flex-wrap justify-center lg:justify-start gap-y-3 gap-x-6 text-xs text-gray-500 font-medium"
              id="hero-trust-indicators"
            >
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="h-4.5 w-4.5 text-brand-purple" />
                <span>Led by Verified STEM Mentors</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle className="h-4.5 w-4.5 text-brand-purple" />
                <span>Certificate on Completion</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Sparkles className="h-4.5 w-4.5 text-brand-purple" />
                <span>Beginner-Friendly Standard</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-[480px] lg:max-w-none"
              id="hero-visual-wrapper"
            >
              {/* Backing decorative shapes */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-purple to-pink-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
              
              {/* Image Frame */}
              <div className="relative bg-white p-3 rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden">
                <img
                  src={heroImageSrc}
                  alt="Ghanaian teenagers learning coding and collaboration at Enseigne Summer Bootcamp"
                  className="rounded-[22px] w-full aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                  id="hero-profile-students-img"
                />
                
                {/* Floating over-image badges */}
                <div
                  id="floating-badge-1"
                  className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-lg border border-purple-50 flex items-center space-x-3"
                >
                  <div className="p-2 bg-purple-100 rounded-xl text-brand-purple">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 leading-none">Ages 7–17 Years</h4>
                    <p className="text-[10px] text-gray-500 font-mono mt-0.5">Kids & Teenagers</p>
                  </div>
                </div>

                <div
                  id="floating-badge-2"
                  className="absolute top-6 right-6 bg-brand-purple/95 backdrop-blur-md text-white px-4 py-2.5 rounded-2xl shadow-lg border border-purple-400/30 flex items-center space-x-2.5"
                >
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold tracking-tight">Accra Innovation Center, East Legon + Virtual</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
