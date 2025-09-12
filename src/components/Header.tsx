import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center shadow-lg border-2 border-yellow-700">
                <span className="text-white text-xl font-black tracking-tight drop-shadow-md">G&G</span>
              </div>
              <span className="text-lg font-bold text-gray-900">GOODMAN & GOLDSMITH</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="px-4 py-2 text-gray-700 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="px-4 py-2 text-gray-700 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="px-4 py-2 text-gray-700 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="px-4 py-2 text-gray-700 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Our Team
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="px-4 py-2 text-gray-700 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 text-gray-700 hover:text-yellow-600 font-medium transition-all duration-200 rounded-md hover:bg-yellow-50"
            >
              Contact Us
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white shadow-lg">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Our Team
              </button>
              <button 
                onClick={() => scrollToSection('industries')}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Industries
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-yellow-600 font-medium transition-colors text-left py-3 px-4 rounded-lg hover:bg-yellow-50"
              >
                Contact Us
              </button>
              <div className="pt-2 px-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}