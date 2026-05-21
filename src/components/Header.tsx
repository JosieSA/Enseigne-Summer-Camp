import { useState, useEffect } from "react";
import { MessageCircle, Menu, X, Rocket } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Why Choose Us", href: "#why-choose" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Programme Details", href: "#details" },
    { label: "Parent Reviews", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
  ];

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            id="brand-logo"
            href="#"
            className="flex items-center space-x-2 text-brand-purple hover:opacity-90 transition-opacity"
          >
            <div className="bg-brand-purple text-white p-2 rounded-xl flex items-center justify-center shadow-md shadow-purple-200">
              <Rocket className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight leading-none text-gray-900">
                ENSEIGNE
              </span>
              <span className="text-[10px] uppercase tracking-widest font-mono text-brand-purple font-semibold mt-0.5">
                Summer Bootcamp
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-600 hover:text-brand-purple font-medium text-sm transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              id="header-whatsapp-cta"
              href="https://wa.me/233531366589?text=Hello%20Enseigne,%20I%20am%20interested%20in%20enrolling%20in%20the%20Discipline%20%26%20Skills%20Summer%20Bootcamp."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors duration-200 bg-green-50 px-3.5 py-1.5 rounded-full"
            >
              <MessageCircle className="h-4 w-4 fill-green-600" />
              <span>WhatsApp Support</span>
            </a>
            <a
              id="header-register-cta"
              href="#register"
              className="bg-brand-purple hover:bg-brand-purple-light text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-md shadow-purple-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              Register Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <a
              id="mobile-register-header-btn"
              href="#register"
              className="bg-brand-purple text-white font-semibold text-xs px-3.5 py-2 rounded-lg"
            >
              Enrol
            </a>
            <button
              id="menu-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Dropdown */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-3">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-gray-700 hover:bg-purple-50 hover:text-brand-purple transition-all"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              id="mobile-whatsapp-cta"
              href="https://wa.me/233531366589?text=Hello%20Enseigne,%20I%20am%20interested%20in%20enrolling%20in%20the%20Discipline%20%26%20Skills%20Summer%20Bootcamp."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 text-green-700 bg-green-50 py-3 rounded-xl font-bold text-sm"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle className="h-5 w-5 fill-green-700" />
              <span>WhatsApp Chat (+233)</span>
            </a>
            <a
              id="mobile-register-full-btn"
              href="#register"
              className="block w-full text-center bg-brand-purple hover:bg-brand-purple-light text-white font-semibold py-3 rounded-xl shadow-md"
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
