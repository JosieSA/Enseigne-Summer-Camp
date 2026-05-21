import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { faqs } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-gray-50 relative scroll-mt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-brand-purple uppercase tracking-widest text-xs sm:text-sm font-mono font-bold bg-purple-100 px-3.5 py-1.5 rounded-full inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-black tracking-tight text-gray-900">
            Have Questions about the Bootcamp?
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-sans max-w-2xl mx-auto">
            Everything you need to know about the Enseigne Summer Discipline & skills cohort. 
            Can’t find the answer you’re looking for? Reach out anytime.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4" id="faq-accordions">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                id={`faq-item-${faq.id}`}
                key={faq.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? "border-purple-200 shadow-md" : "border-gray-100 shadow-sm hover:border-purple-100"
                }`}
              >
                {/* Trigger Button */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-6 py-5 sm:py-6 flex items-center justify-between gap-4 font-display font-bold text-gray-900 hover:text-brand-purple transition-all outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base pr-2 leading-tight flex items-start sm:items-center gap-2.5">
                    <HelpCircle className="h-4.5 w-4.5 text-brand-purple shrink-0 mt-0.5 sm:mt-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div className={`p-1.5 rounded-xl bg-purple-50 text-brand-purple shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="h-4 w-4 stroke-[2.5]" />
                  </div>
                </button>

                {/* Collapsible Content Area */}
                <div
                  id={`faq-content-${faq.id}`}
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-gray-50 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="px-6 py-5 sm:py-6 text-xs sm:text-sm text-gray-600 leading-relaxed font-sans bg-purple-50/10">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center bg-white rounded-3xl p-8 border border-gray-100 shadow-sm max-w-2xl mx-auto">
          <h4 className="font-display font-bold text-base sm:text-lg text-gray-900">Still Have Questions?</h4>
          <p className="text-xs sm:text-sm text-gray-500 font-sans mt-1.5 max-w-sm mx-auto">
            Send us a direct message on WhatsApp or email our representative. We are ready to help.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              id="faq-whatsapp-direct"
              href="https://wa.me/233531366589?text=Hello%20Enseigne!%20I%20have%20an%20unanswered%20question%20regarding%20the%20Summer%20Bootcamp."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 hover:bg-green-100 text-green-700 font-bold text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-2"
            >
              <span>Connect on WhatsApp</span>
            </a>
            <a
              id="faq-email-direct"
              href="mailto:info@enseigne.edu"
              className="bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 font-semibold text-xs px-5 py-3 rounded-xl transition-all"
            >
              <span>Email: info@enseigne.edu</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
