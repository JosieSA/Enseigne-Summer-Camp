import { motion } from "motion/react";
import { Check, ClipboardCheck, Sparkles, ExternalLink, ShieldCheck, HelpCircle } from "lucide-react";

export default function RegistrationForm() {
  const googleFormUrl = "https://forms.gle/V6rer1dL2GXdaX166";

  return (
    <section id="register" className="py-20 md:py-28 bg-white relative scroll-mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-purple uppercase tracking-widest text-xs sm:text-sm font-mono font-bold bg-purple-50 px-3.5 py-1.5 rounded-full inline-block">
            Secure a Seat
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-gray-950">
            Submit Your Registration
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-sans">
            Complete your enrollment application in just a few clicks. Once submitted, our admissions desk 
            will reach out to finalize billing details, timing arrays, and answer questions.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-gray-50/60 border border-gray-100/90 rounded-[32px] overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
          
          {/* Quick Info Sidebar / Trust Reinforcement (Left Column) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-purple to-purple-800 text-white p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
            
            <div className="space-y-8 relative">
              <div className="space-y-3">
                <span className="text-[10px] text-purple-200 uppercase tracking-widest font-mono font-bold">
                  Admission Note
                </span>
                <h3 className="text-2xl font-display font-black">
                  Next Step Timeline
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white font-mono text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-purple-100">Submit Application</h4>
                    <p className="text-xs text-purple-200/90 mt-1">Complete your secure student info in less than 2 minutes using our official registration portal.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white font-mono text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-purple-100">Admissions Verification</h4>
                    <p className="text-xs text-purple-200/90 mt-1">Our team calls you within 24 hours to match the best cohort speed and discuss final fee structures.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white font-mono text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-purple-100">Discipline Hub Pack</h4>
                    <p className="text-xs text-purple-200/90 mt-1">Parents receive interactive routine sheets, pre-set laptop specs, and access tokens for students.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-purple-400/20 relative space-y-4 font-sans text-xs">
              <div className="flex items-center space-x-2 text-purple-100">
                <Check className="h-4 w-4 text-emerald-300" />
                <span>Zero obligation inquiry</span>
              </div>
              <p className="text-purple-200 leading-relaxed font-sans">
                💡 <strong>Ghanaian networks context:</strong> We support payments through Mobile Money (MTN MoMo, Telecel Cash, AT Money) and Bank deposit.
              </p>
            </div>
          </div>

          {/* Form Replacement Column (Right Column) */}
          <div className="lg:col-span-7 p-8 sm:p-12 md:p-14 bg-white flex flex-col justify-center items-start relative">
            <div className="w-full space-y-8">
              
              {/* Feature/Intro */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 bg-purple-50 text-brand-purple px-3 py-1 rounded-lg text-xs font-bold font-mono">
                  <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                  <span>Google Forms Verified Portal</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-gray-900 tracking-tight leading-tight">
                  Open Registration Form
                </h3>
                <p className="text-gray-600 font-sans text-sm sm:text-base leading-relaxed">
                  We use <strong className="text-brand-purple">Google Forms</strong> to provide an extremely fast, secure, and lightweight sign-up workspace. Tap below to launch the official form.
                </p>
              </div>

              {/* Form Bullet list */}
              <div className="bg-gray-50/80 border border-gray-100 rounded-2xl p-5 space-y-4 font-sans">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-brand-purple flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">
                    <strong className="text-gray-900 font-semibold">Fast Completion</strong> — Done in 120 seconds.
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-brand-purple flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">
                    <strong className="text-gray-900 font-semibold">Immediate WhatsApp Confirmation</strong> — Instant response system link inside.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-brand-purple flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <div className="text-xs sm:text-sm text-gray-700">
                    <strong className="text-gray-900 font-semibold">Strict Privacy Control</strong> — All inputs are encrypted and completely confidential.
                  </div>
                </div>
              </div>

              {/* Redirect Action Button */}
              <div className="w-full space-y-3">
                <a
                  id="google-form-redirect-btn"
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-brand-purple hover:bg-brand-purple-light text-white font-bold text-base py-4 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  <ClipboardCheck className="h-5 w-5" />
                  <span>Start Online Registration</span>
                  <ExternalLink className="h-4 w-4 opacity-80" />
                </a>

                <div className="flex items-center justify-center gap-2 text-[10px] text-gray-400 font-mono">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Secure external redirection. Fully encryption protected.</span>
                </div>
              </div>

              {/* Assistance link */}
              <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-sans">
                <span className="flex items-center gap-1.5">
                  <HelpCircle className="h-4 w-4 text-gray-400" />
                  Need help enrolling?
                </span>
                <a
                  href="https://wa.me/233531366589?text=Hello%20Enseigne,%20can%20you%20guide%20me%20through%20enrolling%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-purple font-bold hover:underline"
                >
                  Contact Help Hotline →
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
