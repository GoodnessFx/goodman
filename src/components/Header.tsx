import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // wait for homepage to render
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img
                src="/goodman-logo.png"
                alt="Goodman Logo"
                className="w-12 h-12 rounded-lg shadow-lg border-2 border-gray-200 object-cover"
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
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            <button
              onClick={() => scrollToSection("home")}
              className="px-4 py-2 text-blue-800 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="px-4 py-2 text-blue-800 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 text-blue-800 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("industries")}
              className="px-4 py-2 text-blue-800 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Industries
            </button>
            <Link
              to="/contact"
              className="px-4 py-2 text-blue-800 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
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
                className="text-blue-800 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-blue-800 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-blue-800 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("industries")}
                className="text-blue-800 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Industries
              </button>
              <Link
                to="/contact"
                className="text-blue-800 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
