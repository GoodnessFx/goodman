import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* About */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <img
                  src="/goodman-logo.png"
                  alt="Goodman & Goldsmith Logo"
                  className="h-10 w-auto rounded-md shadow-lg border-2 border-gray-200 object-cover"
                />
                <span className="text-lg font-bold text-white">GOODMAN</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Leading procurement consultants delivering strategic solutions, business development, and learning & development services across industries.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-400 text-sm">+234 805 737 0966</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-400 text-sm">goodmangoldsmithltd@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-400 text-sm">Lagos, Nigeria</span>
                </div>
                <div className="mt-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-md hover:bg-blue-500 transition-all duration-200 flex items-center justify-center group"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Our Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Our Team</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Contact</h3>
              <ul className="space-y-3">
                <li><span className="text-gray-400 text-sm">Sales Inquiries</span></li>
                <li><span className="text-gray-400 text-sm">Support</span></li>
                <li><span className="text-gray-400 text-sm">Consultation</span></li>
                <li><span className="text-gray-400 text-sm">General Info</span></li>
              </ul>
            </div>

            {/* Subscribe */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Subscribe</h3>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l bg-gray-900 text-gray-300 placeholder-gray-500 border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-r transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col items-center">
            <img
              src="/goodman-logo.png"
              alt="Goodman & Goldsmith Logo"
              className="h-8 w-auto mb-3 rounded-md shadow-md border-2 border-gray-700 object-cover"
            />
            <div className="text-gray-400 text-sm text-center">
              © {currentYear} GOODMAN & GOLDSMITH. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
