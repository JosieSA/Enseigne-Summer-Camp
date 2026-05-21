import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
import { learnCategories } from "../data";

const renderIcon = (name: string, className: string) => {
  const IconComponent = (Icons as any)[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

export default function WhatLearn() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="curriculum" className="py-20 md:py-28 bg-gray-50 relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-purple uppercase tracking-widest text-xs sm:text-sm font-mono font-bold bg-purple-100 px-3.5 py-1.5 rounded-full inline-block">
            Bootcamp Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-gray-950">
            What Students Will Learn & Master
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-sans">
            Our curriculum is balanced to develop physical and mental discipline alongside 
            advanced technological capabilities and global career context.
          </p>
        </div>

        {/* Desktop Tab Selector */}
        <div className="hidden md:flex justify-center mb-12" id="curriculum-tabs">
          <div className="bg-gray-200/60 p-1.5 rounded-2xl flex items-center space-x-1.5">
            {learnCategories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center space-x-2 px-6 py-3.5 rounded-xl font-display font-semibold text-sm transition-all duration-300 ${
                  activeTab === idx
                    ? "bg-brand-purple text-white shadow-md shadow-purple-200"
                    : "text-gray-600 hover:text-brand-purple hover:bg-white"
                }`}
                id={`curriculum-tab-btn-${idx}`}
              >
                {renderIcon(cat.icon, "h-4 w-4")}
                <span>{cat.title.split(" & ")[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Interactive Panel View */}
        <div className="hidden md:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10"
              id="curriculum-interactive-panel"
            >
              {/* Left Column: Topics Breakdown */}
              <div className="lg:col-span-7 space-y-5">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6">
                  <div className="flex items-center space-x-3.5 pb-4 border-b border-gray-100">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${learnCategories[activeTab].color} text-white`}>
                      {renderIcon(learnCategories[activeTab].icon, "h-6 w-6")}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-2xl text-gray-950">
                        {learnCategories[activeTab].title}
                      </h3>
                      <p className="text-xs text-brand-purple tracking-widest uppercase font-mono mt-0.5">Core Pillar {activeTab + 1}</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {learnCategories[activeTab].topics.map((topic, index) => (
                      <div key={topic.title} className="flex gap-4 items-start group">
                        <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-brand-purple font-mono text-xs font-bold shrink-0 mt-0.5 group-hover:bg-brand-purple group-hover:text-white transition-all">
                          {index + 1}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-display font-bold text-gray-900 group-hover:text-brand-purple transition-all">
                            {topic.title}
                          </h4>
                          <p className="text-sm text-gray-600 leading-relaxed font-sans">
                            {topic.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Outcomes & Practical Takeaway */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div className="bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white rounded-3xl p-8 shadow-xl flex-1 flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-white/5 rounded-full blur-2xl" />
                  
                  <div className="space-y-6 relative">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1 rounded-full text-xs font-semibold">
                      <Icons.Sparkles className="h-4 w-4" />
                      <span>Empirical Outcomes</span>
                    </div>

                    <h3 className="text-2xl font-display font-extrabold leading-tight">
                      What You / Your Student Will Walk Away With:
                    </h3>

                    <ul className="space-y-4">
                      {activeTab === 0 && (
                        <>
                          <li className="flex items-start gap-3 text-sm">
                            <Icons.CheckCircle2 className="h-5 w-5 text-purple-200 shrink-0 mt-0.5" />
                            <span>A custom Daily Routine Planner designed and managed by themselves.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm">
                            <Icons.CheckCircle2 className="h-5 w-5 text-purple-200 shrink-0 mt-0.5" />
                            <span>Strong public speaking posture and 3-minute self-introduction framework.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm">
                            <Icons.CheckCircle2 className="h-5 w-5 text-purple-200 shrink-0 mt-0.5" />
                            <span>Digital screen-contract rules agreed with parents.</span>
                          </li>
                        </>
                      )}
                      {activeTab === 1 && (
                        <>
                          <li className="flex items-start gap-3 text-sm">
                            <Icons.CheckCircle2 className="h-5 w-5 text-purple-200 shrink-0 mt-0.5" />
                            <span>A live website built using HTML, CSS, and basic JavaScript hosted online.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm">
                            <Icons.CheckCircle2 className="h-5 w-5 text-purple-200 shrink-0 mt-0.5" />
                            <span>AI command blueprints for summarizing and structured research.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm">
                            <Icons.CheckCircle2 className="h-5 w-5 text-purple-200 shrink-0 mt-0.5" />
                            <span>A structured understanding of computer algorithms and problem solving.</span>
                          </li>
                        </>
                      )}
                      {activeTab === 2 && (
                        <>
                          <li className="flex items-start gap-3 text-sm">
                            <Icons.CheckCircle2 className="h-5 w-5 text-purple-200 shrink-0 mt-0.5" />
                            <span>A pitch deck outlining a solution to a local problem.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm">
                            <Icons.CheckCircle2 className="h-5 w-5 text-purple-200 shrink-0 mt-0.5" />
                            <span>Meaningful exposure to high-level engineering executives and career paths.</span>
                          </li>
                          <li className="flex items-start gap-3 text-sm">
                            <Icons.CheckCircle2 className="h-5 w-5 text-purple-200 shrink-0 mt-0.5" />
                            <span>Official Certificate of Completion awarded by Enseigne.</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-purple-400/20 relative">
                    <p className="text-xs text-purple-200 italic leading-relaxed">
                      "By mixing soft discipline habits directly with heavy coding, students do not just study facts; they build systemized habits."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Accordion/Fallback (Shows all pillars stacked for readability) */}
        <div className="block md:hidden space-y-8" id="curriculum-stack-mobile">
          {learnCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-5"
              id={`curriculum-pillar-mobile-${idx}`}
            >
              <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${cat.color} text-white`}>
                  {renderIcon(cat.icon, "h-5 w-5")}
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg text-gray-950">
                    {cat.title}
                  </h3>
                  <span className="text-[10px] text-brand-purple font-mono uppercase font-bold">Pillar {idx + 1}</span>
                </div>
              </div>

              <div className="space-y-4">
                {cat.topics.map((topic, tIdx) => (
                  <div key={topic.title} className="space-y-1">
                    <h4 className="font-display font-bold text-xs sm:text-sm text-gray-900 flex items-center space-x-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-purple" />
                      <span>{topic.title}</span>
                    </h4>
                    <p className="text-xs text-gray-600 pl-3.5 leading-relaxed font-sans">
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
