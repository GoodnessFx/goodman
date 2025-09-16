import { useState } from "react"
import { Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    try {
      alert(`Subscribed with ${email}`)
      setEmail("")
      setStatus("Subscribed successfully!")
    } catch (err) {
      setStatus("Subscription failed. Try again.")
    }
  }

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* About Section */}
            <div className="md:col-span-3">
              <div className="flex items-center mb-3">
                <img
                  src="/goodman-logo.png"
                  alt="Goodman & Goldsmith Logo"
                  className="h-10 w-10 rounded-md object-cover border-2 border-gray-200 shadow-lg"
                />
                <span className="text-lg font-bold text-white ml-3 -mt-3">
                  GOODMAN & GOLDSMITH
                </span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Leading procurement consultants delivering strategic solutions, 
                business development, and learning & development services across industries.
              </p>

              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-300" />
                  <span className="text-gray-300 text-sm">+234 805 737 0966</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-blue-300" />
                  <span className="text-gray-300 text-sm">goodmangoldsmithltd@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-blue-300" />
                  <span className="text-gray-300 text-sm">Lagos, Nigeria</span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white rounded-md hover:bg-blue-500 transition-all duration-200 flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-blue-400 hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 text-sm">Our Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 text-sm">Our Team</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 text-sm">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-3">
                <li><span className="text-gray-300 text-sm">Sales Inquiries</span></li>
                <li><span className="text-gray-300 text-sm">Support</span></li>
                <li><span className="text-gray-300 text-sm">Consultation</span></li>
                <li><span className="text-gray-300 text-sm">General Info</span></li>
              </ul>
            </div>

            {/* Subscribe */}
            <div className="md:col-span-5">
              <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email to subscribe "
                  className="px-4 py-2 rounded-md bg-gray-900 text-gray-300 
             placeholder-gray-400 placeholder:text-sm 
             border border-gray-600 focus:outline-none 
             focus:ring-2 focus:ring-blue-500 flex-grow"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
              {status && <p className="text-green-400 mt-2 text-sm">{status}</p>}
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
  )
}
