export interface WhyCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TopicLearn {
  title: string;
  items: string[];
}

export interface LearnCategory {
  title: string;
  icon: string;
  color: string;
  topics: {
    title: string;
    description: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
  avatarSeed: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface RegistrationFormData {
  parentName: string;
  studentName: string;
  studentAge: string;
  phoneNumber: string;
  email: string;
  preferredFormat: "Virtual" | "In-Person" | "Either";
  interests: string[];
}
