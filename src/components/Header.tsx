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
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">PSC</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">ProSupply Consulting</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Our Team
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button onClick={() => scrollToSection('contact')}>
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Our Team
              </button>
              <button 
                onClick={() => scrollToSection('industries')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Industries
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-primary transition-colors text-left"
              >
                Contact Us
              </button>
              <Button onClick={() => scrollToSection('contact')} className="self-start">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}