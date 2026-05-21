import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import WhatLearn from "./components/WhatLearn";
import Details from "./components/Details";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import RegistrationForm from "./components/RegistrationForm";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="app-root-container" className="min-h-screen bg-gray-50 flex flex-col justify-between antialiased overflow-x-hidden">
      {/* Top sticky navigation */}
      <Header />

      {/* Main body segments */}
      <main className="flex-grow">
        <Hero />
        <WhyChoose />
        <WhatLearn />
        <Details />
        <Testimonials />
        <Gallery />
        <RegistrationForm />
        <FAQ />
        <CTA />
      </main>

      {/* Structured closing footer */}
      <Footer />
    </div>
  );
}
