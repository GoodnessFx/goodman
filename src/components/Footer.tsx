import { Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">PSC</span>
              </div>
              <span className="text-xl font-semibold">ProSupply Consulting</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Leading procurement and supply chain consulting firm helping organizations 
              optimize operations, reduce costs, and drive sustainable growth through 
              innovative solutions and strategic expertise.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('team')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('industries')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Strategic Procurement
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Supply Chain Optimization
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Analytics & Intelligence
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Risk Management
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Digital Transformation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Operational Excellence
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 py-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest insights on supply chain trends and best practices.
              </p>
            </div>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} ProSupply Consulting. All rights reserved.
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}