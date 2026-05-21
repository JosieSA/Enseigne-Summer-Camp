import { Image, Code, Presentation, Users, Sparkles } from "lucide-react";
import imgHeroScene from "../assets/images/hero_teen_students_1779362757035.png";
import imgPresentationScene from "../assets/images/coding_workshop_1779362777422.png";
import imgTeamworkScene from "../assets/images/collaborative_brainstorms_1779364578125_1779365126448.png";
import imgMentorshipScene from "../assets/images/one_on_one_mentoring_1779364601831_1779365148032.png";

export default function Gallery() {
  const galleryItems = [
    {
      id: "hero-scene",
      title: "Hands-on Technical Sprints",
      description: "Students writing code, building mobile mockups, and exploring artificial intelligence collaboratively.",
      image: imgHeroScene,
      span: "md:col-span-2 md:row-span-2",
      icon: Code,
      badge: "In-Person Classroom"
    },
    {
      id: "presentation-scene",
      title: "Speaking Confidently",
      description: "Students presenting their technology solutions and apps on demo days.",
      image: imgPresentationScene,
      span: "md:col-span-1 md:row-span-2",
      icon: Presentation,
      badge: "Leadership Training"
    },
    {
      id: "teamwork-scene",
      title: "Collaborative Brainstorms",
      description: "Setting weekly productivity targets and hacking layout wires in teams.",
      image: imgTeamworkScene,
      span: "md:col-span-1 md:row-span-1",
      icon: Users,
      badge: "Productive Breakouts"
    },
    {
      id: "mentorship-scene",
      title: "One-on-One Mentoring",
      description: "High-quality engineering guides answering career pathway questions from actual tech experience.",
      image: imgMentorshipScene,
      span: "md:col-span-2 md:row-span-1",
      icon: Sparkles,
      badge: "Career Support"
    }
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gray-50 relative scroll-mt-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-purple uppercase tracking-widest text-xs sm:text-sm font-mono font-bold bg-purple-100 px-3.5 py-1.5 rounded-full inline-block">
            Experience the Vibe
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-gray-900">
            Life Internally at our Bootcamp
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 font-sans">
            A peek into the dynamic, high-energy environment where discipline and technological skills are forged.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]" id="gallery-mesh-grid">
          {galleryItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                id={`gallery-item-${item.id}`}
                key={item.id}
                className={`relative rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-1 ${item.span}`}
              >
                {/* Image Cover */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  id={`gallery-img-${item.id}`}
                />

                {/* Shading scrim gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent opacity-85 group-hover:from-purple-950/90 group-hover:via-purple-950/50 transition-colors duration-500" />

                {/* Floating Tags */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-brand-purple font-mono text-[10px] uppercase font-bold px-3 py-1 rounded-full shadow-sm">
                  <IconComponent className="h-3 w-3" />
                  <span>{item.badge}</span>
                </span>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end text-white">
                  <h3 className="font-display font-black text-lg sm:text-xl leading-tight text-white group-hover:text-purple-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 mt-1.5 leading-relaxed font-sans max-w-2xl opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-24 transition-all duration-500 ease-in-out">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
