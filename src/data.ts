import { WhyCard, LearnCategory, Testimonial, FAQItem } from "./types";

export const whyCards: WhyCard[] = [
  {
    id: "discipline",
    title: "Discipline & Productivity",
    description: "Instilling structured daily checklists, digital habit tracking, and accountability to transform passive screen time into constructive action.",
    icon: "Calendar"
  },
  {
    id: "coding",
    title: "Coding & AI Skills",
    description: "Practical coding fundamentals (HTML, CSS, JS) and generative AI mastery. Turning teenagers from passive consumers into creators of real technology.",
    icon: "Code"
  },
  {
    id: "confidence",
    title: "Confidence Building",
    description: "Nurturing resilience and speaking capabilities through public speaking challenges, team pitch sessions, and personal development drills.",
    icon: "Sparkles"
  },
  {
    id: "mentorship",
    title: "Positive Mentorship",
    description: "Connecting students with experienced tech leaders, engineers, and mentors in Ghana and globally to offer live role models and career guidance.",
    icon: "Users"
  },
  {
    id: "leadership",
    title: "Leadership & Communication",
    description: "Group exercises, cooperative app idea pitches, and active leadership roles that prepare them to express, coordinate, and lead with empathy.",
    icon: "Target"
  },
  {
    id: "structure",
    title: "Productive Vacation Structure",
    description: "The ultimate solution for high school and BECE graduate vacation drift. A dynamic routine that bridges academic seasons productively.",
    icon: "Clock"
  }
];

export const learnCategories: LearnCategory[] = [
  {
    title: "Discipline & Personal Development",
    icon: "ClipboardCheck",
    color: "from-purple-500 to-indigo-600",
    topics: [
      { title: "Time Management Matrix", description: "Learning to categorize tasks, defeat procrastination, and manage daily responsibilities on their own." },
      { title: "Setting Micro-Goals", description: "Turning lofty life ambitions into concrete, trackable, daily milestones." },
      { title: "Smart Digital Habits", description: "Setting healthy boundaries on game and social media usage for better focus." },
      { title: "Public Speaking & Assertiveness", description: "Expressing ideas clearly, making stable eye-contact, and presenting beautifully to audience groups." },
      { title: "Personal Leadership Basics", description: "Developing integrity, self-reliance, and standard accountability routines." }
    ]
  },
  {
    title: "Technology & Future Skills",
    icon: "Laptop",
    color: "from-fuchsia-500 to-purple-600",
    topics: [
      { title: "Coding Fundamentals", description: "Learning how the web works through building interactive user interfaces from scratch." },
      { title: "AI Literacy & Prompting", description: "Using Generative AI as a collaborative study, design, and problem-solving partner responsibly." },
      { title: "Digital Design & Storytelling", description: "Unlocking structural graphic layouts, wireframing, and creating slides that capture eyes." },
      { title: "Computational Thinking", description: "Deconstructing large, intimidating problems into logical step-by-step algorithms." },
      { title: "Ideation of Tech Solutions", description: "Drafting an app or local business solution to solve genuine challenges in contemporary Ghana." }
    ]
  },
  {
    title: "Exposure & Mentorship",
    icon: "Award",
    color: "from-violet-500 to-primary-600",
    topics: [
      { title: "Career Discovery Journeys", description: "Exploring diverse paths in STEM, tech sales, product management, and digital entrepreneurship." },
      { title: "Ghana Tech Industry Spotlights", description: "Fascinating panels with elite local builders, founders, and engineering executives." },
      { title: "Collaborative Team Presentations", description: "Competing in pitch rounds to test their digital prototypes and receive rigorous feedback." },
      { title: "One-on-One Advisory Hours", description: "Obtaining direct answers to questions about subject choice, universities, and career pathways." }
    ]
  }
];

export const programmeDetails = [
  { label: "Duration", value: "4–6 Weeks", desc: "Engaging & hands-on", icon: "Calendar" },
  { label: "Age Group", value: "7–17 Years", desc: "For Kids & Teens (Grouped by age)", icon: "Users" },
  { label: "Format", value: "Virtual + In-Person", desc: "Accra Innovation Center, East Legon & online live stream", icon: "Globe" },
  { label: "Sessions", value: "Mon, Wed & Fri", desc: "10:00 am - 12:00 pm (GMT)", icon: "Clock" },
  { label: "Location", value: "Accra Innovation Center, East Legon", desc: "Premium tech hub in East Legon, Accra", icon: "MapPin" },
  { label: "Cohort Sizes", value: "Optimal Cohorts", desc: "Age-appropriate tracking and mentor guides", icon: "Sparkles" }
];

export const testimonials: Testimonial[] = [
  {
    id: "ama",
    quote: "The change in Joel after just 4 weeks was unbelievable. He went from spending hours on gaming to building his first mobile landing page pitch and managing his morning routines without any prompts. The discipline aspect is so practical!",
    author: "Ama Hanson",
    role: "Mother of Joel (15)",
    location: "East Legon, Accra",
    avatarSeed: "ama"
  },
  {
    id: "kofi",
    quote: "The Enseigne bootcamp solved our biggest worry—total layout drift during the long vacation. Mixing programming skills with real presentation, habit building, and time management is exactly what high schools should be teaching. This is an essential investment.",
    author: "Kofi Boateng",
    role: "Father of Nana Kwame (16)",
    location: "Tema, Region of Greater Accra",
    avatarSeed: "kofi"
  },
  {
    id: "ewurama",
    quote: "My daughter Efua was always shy, but watching her present her team's business prototype with confidence on the demo day was a proud parent moment. The mentors are outstanding and are amazing real-life role models.",
    author: "Dr. Ewurama Mensah",
    role: "Mother of Efua (14)",
    location: "Accra, Ghana / Virtual Cohort",
    avatarSeed: "ewurama"
  }
];

export const faqs: FAQItem[] = [
  {
    id: "coding-experience",
    question: "Does my child need coding experience?",
    answer: "No prior coding experience is required! This bootcamp is specifically designed to take complete absolute beginners and guide them step-by-step through technology fundamentals and foundational logic."
  },
  {
    id: "beginner-friendly",
    question: "Is the programme beginner-friendly?",
    answer: "Absolutely. We group students based on age and existing experience levels, ensuring they are challenged appropriately without feeling overwhelmed or falling behind."
  },
  {
    id: "devices-needed",
    question: "What devices are needed?",
    answer: "A laptop (Windows, Mac, or Chromebook) with a working camera, microphone, and a stable internet connection is required. We can assist virtual parents with lightweight setup optimization ahead of high-speed sessions."
  },
  {
    id: "session-length",
    question: "How long are sessions?",
    answer: "Each session runs for about 2 to 2.5 hours, integrating active lectures with hands-on breakout lab sprints to keep raw teen energy fully channeled, focused, and creative."
  }
];

export const interestOptions = [
  "Coding & Making Websites",
  "Artificial Intelligence & ChatGPT",
  "Design & Social Media Branding",
  "Public Speaking & Presenting",
  "Time Management & Goal Setting",
  "Entrepreneurship & Startups"
];
