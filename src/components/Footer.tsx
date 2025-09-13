import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">G&G</span>
                </div>
                <span className="text-lg font-bold text-white">GOODMAN & GOLDSMITH</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Leading procurement consultants delivering strategic solutions, business development, and learning & development services across industries.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-yellow-400" />
                  <span className="text-gray-400 text-sm">+234 805 737 0966</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-yellow-400" />
                  <span className="text-gray-400 text-sm">info@goodmangoldsmith.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-yellow-400" />
                  <span className="text-gray-400 text-sm">Lagos, Nigeria</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Our Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Industries</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Sales Inquiries</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Support</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Consultation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Partnership</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Media Inquiries</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Office Locations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Emergency Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">General Info</a></li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Follow Us</h3>
              <div className="flex space-x-3 mb-6">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-yellow-500 transition-all duration-200 flex items-center justify-center group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-yellow-500 transition-all duration-200 flex items-center justify-center group"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-yellow-500 transition-all duration-200 flex items-center justify-center group"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg hover:bg-yellow-500 transition-all duration-200 flex items-center justify-center group"
                  aria-label="YouTube"
                >
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Stay updated with our latest insights on procurement trends and best practices.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} GOODMAN & GOLDSMITH. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}