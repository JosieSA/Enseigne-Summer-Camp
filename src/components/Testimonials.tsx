import { Star, Quote } from "lucide-react";
import { testimonials } from "../data";

export default function Testimonials() {
  // Simple styling palette for beautiful avatar initials background
  const avatarColors = [
    "bg-purple-100 text-brand-purple border-purple-200",
    "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
    "bg-indigo-100 text-indigo-700 border-indigo-200"
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative scroll-mt-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-purple uppercase tracking-widest text-xs sm:text-sm font-mono font-bold bg-purple-50 px-3.5 py-1.5 rounded-full inline-block">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-gray-900">
            What Parents & Participants Say
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-sans">
            Hear directly from Ghanaian parents, students, and professionals who have completed 
            our vacation development and skills programmes.
          </p>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {testimonials.map((test, idx) => {
            // Get initials
            const initials = test.author
              .split(" ")
              .map((n) => n[0])
              .join("");

            return (
              <div
                id={`testimonial-${test.id}`}
                key={test.id}
                className="bg-gray-50/60 p-8 rounded-3xl border border-gray-100/80 hover:border-purple-200 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between relative group"
              >
                {/* Quote watermark */}
                <span className="absolute top-6 right-8 text-purple-100 group-hover:text-purple-200/50 transition-colors">
                  <Quote className="h-10 w-10 stroke-[3]" />
                </span>

                <div className="space-y-6">
                  {/* Star Rating */}
                  <div className="flex items-center space-x-1" id={`stars-${test.id}`}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 stroke-amber-400 fill-amber-400" />
                    ))}
                  </div>

                  {/* Core Quote */}
                  <p className="text-sm sm:text-base text-gray-700 font-sans italic leading-relaxed relative">
                    "{test.quote}"
                  </p>
                </div>

                {/* Author Info block */}
                <div className="mt-8 pt-6 border-t border-gray-100/80 flex items-center space-x-4">
                  {/* Avatar Icon Initial */}
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-sm tracking-tight border shadow-sm shrink-0 ${avatarColors[idx % avatarColors.length]}`}>
                    {initials}
                  </div>
                  <div>
                    <h4 className="font-display font-extrabold text-sm text-gray-900">
                      {test.author}
                    </h4>
                    <p className="text-xs text-gray-500 font-sans">
                      {test.role}
                    </p>
                    <p className="text-[10px] text-brand-purple font-mono font-semibold uppercase tracking-wider mt-0.5">
                      📍 {test.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Video Testimonial Preview Spot (Increases trust immensely) */}
        <div className="mt-16 bg-gray-50 rounded-3xl p-8 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-display font-bold text-lg text-gray-900">
              Want to see previous cohort student projects and outcomes?
            </h4>
            <p className="text-sm text-gray-600 font-sans">
              Watch 3-minute video pitches of students presenting their custom-designed mobile application mockups.
            </p>
          </div>
          <a
            id="watch-demo-pitches-cta"
            href="https://wa.me/233531366589?text=Hello%20Enseigne,%20can%20you%20share%20some%20previous%20student%20bootcamp%20projects%20and%20demonstration%20links?"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-purple hover:bg-brand-purple-light text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5 inline-block text-center shrink-0 w-full md:w-auto"
          >
            Request Student Projects Over WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
