import { MouseEvent } from "react";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowUp } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const scrollToTop = (e: MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="app-footer" className="bg-gray-950 text-gray-400 font-sans border-t border-gray-900">
      
      {/* Top Footer Main Widgets */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        
        {/* Box 1: Brand & Purpose */}
        <div className="md:col-span-4 space-y-6">
          <a
            href="#"
            onClick={scrollToTop}
            className="hover:opacity-95 transition-opacity pb-1"
            id="footer-logo"
          >
            <Logo onDark={true} />
          </a>

          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
            Instilling systemized high performance habit discipline and technological competence in 
            the next generation of Ghanaian leaders, entrepreneurs, and digital makers.
          </p>

          {/* Social Icons */}
          <div className="flex items-center space-x-3" id="social-mock-links">
            <a
              href="https://facebook.com/enseigne"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-900 hover:bg-brand-purple-light text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all border border-gray-800"
              aria-label="Facebook Link"
            >
              <Facebook className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://instagram.com/enseigne"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-900 hover:bg-brand-purple-light text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all border border-gray-800"
              aria-label="Instagram Link"
            >
              <Instagram className="h-4.5 w-4.5" />
            </a>
            <a
              href="https://linkedin.com/company/enseigne"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-gray-900 hover:bg-brand-purple-light text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all border border-gray-800"
              aria-label="LinkedIn Link"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Box 2: Quick Links */}
        <div className="md:col-span-3 space-y-6">
          <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">
            Bootcamp Sections
          </h4>
          <ul className="space-y-3.5 text-xs sm:text-sm" id="footer-quick-links">
            <li>
              <a href="#why-choose" className="hover:text-purple-300 transition-colors">Why Enseigne Bootcamp</a>
            </li>
            <li>
              <a href="#curriculum" className="hover:text-purple-300 transition-colors">Core Curriculum</a>
            </li>
            <li>
              <a href="#details" className="hover:text-purple-300 transition-colors">Date & Class Schedule</a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-purple-300 transition-colors">Parent Success Reviews</a>
            </li>
            <li>
              <a href="#register" className="hover:text-purple-300 transition-colors">Register Now</a>
            </li>
          </ul>
        </div>

        {/* Box 3: Contact Channels & Local Specs */}
        <div className="md:col-span-5 space-y-6">
          <h4 className="font-display font-bold text-white uppercase tracking-wider text-xs">
            Admissions Office (Accra)
          </h4>
          <ul className="space-y-4 text-xs sm:text-sm text-gray-400 font-sans" id="footer-contact-details">
            <li className="flex items-start gap-3">
              <Phone className="h-4.5 w-4.5 text-brand-purple shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-gray-300">WhatsApp / Call Hotlines:</span>
                <a
                  href="https://wa.me/233531366589?text=Hello%20Enseigne,%20can%20you%20guide%20me%20through%20enrolling%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors z-10"
                >
                  +233 53 136 6589
                </a>
                <span className="text-gray-500 block text-[10px] mt-0.5">Mon–Sat, 8:00 AM – 6:00 PM GMT</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <Mail className="h-4.5 w-4.5 text-brand-purple shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-gray-300">General Enquiries Email:</span>
                <a href="mailto:info@enseignee.com" className="hover:text-purple-300 transition-colors">
                  info@enseignee.com
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <MapPin className="h-4.5 w-4.5 text-brand-purple shrink-0 mt-0.5" />
              <div>
                <span className="block font-semibold text-gray-300">In-Person Core Lab Hub:</span>
                <span className="text-gray-400 leading-relaxed block">
                  Accra Innovation Center, East Legon, Accra, Ghana
                </span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Under Footer Partition */}
      <div className="bg-gray-950 border-t border-gray-900 text-[11px] sm:text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500">
          
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 gap-y-2">
            <span>&copy; {new Date().getFullYear()} Enseigne. All Rights Reserved.</span>
            <a href="#" onClick={scrollToTop} className="hover:text-purple-300">Privacy Policy</a>
            <a href="#" onClick={scrollToTop} className="hover:text-purple-300">Ghanaian Terms of Service</a>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-gray-600 font-mono text-[10px]">Back to Top</span>
            <button
              id="back-to-top-footer-btn"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white hover:bg-brand-purple transition-all"
              aria-label="Scroll to top of landing page"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
