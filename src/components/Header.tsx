import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3">
            {/* Replace box with image */}
            <img
              src="/goodman-logo.png"  // place your image in "public" folder as goodman-logo.png
              alt="Goodman & Goldsmith Logo"
              className="h-12 w-auto"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-bold text-blue-900 tracking-wide">
                GOODMAN
              </span>
              <span className="text-xs font-medium text-gray-600">
                PART OF GOODMAN &amp; GOLDSMITH
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            <button
              onClick={() => scrollToSection("home")}
              className="px-4 py-2 text-blue-700 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 text-blue-700 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 text-blue-700 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="px-4 py-2 text-blue-700 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="px-4 py-2 text-blue-700 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Industries
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-blue-700 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white shadow-lg">
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="text-blue-700 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-blue-700 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-blue-700 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-blue-700 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="text-blue-700 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Industries
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-blue-700 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
