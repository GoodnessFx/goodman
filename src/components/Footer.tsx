import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            <div className="md:col-span-3">
            <div className="flex items-center mb-3 -mt-2">
  <img
    src="/goodman-logo.png"
    alt="Goodman & Goldsmith Logo"
    className="h-10 w-10 object-contain"
  />
  <span className="text-lg font-bold text-white ml-3">
    GOODMAN & GOLDSMITH
  </span>
</div>

              <p className="text-gray-300 text-sm leading-relaxed mb-4"></p>

              <div className="space-y-2 ml-3">
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

              <div className="mt-4 ml-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-[#0A66C2] rounded-md flex items-center justify-center hover:bg-[#0A66C2] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg 
                    className="h-6 w-6" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" fill="white"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-[#0077B5] text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#0077B5] text-sm">Our Services</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#0077B5] text-sm">Our Team</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#0077B5] text-sm">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-3">
                <li><span className="text-gray-300 text-sm">Sales Inquiries</span></li>
                <li><span className="text-gray-300 text-sm">Support</span></li>
                <li><span className="text-gray-300 text-sm">Consultation</span></li>
                <li><span className="text-gray-300 text-sm">General Info</span></li>
              </ul>
            </div>

            <div className="md:col-span-5">
              <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
              <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="Enter your email to subscribe"
                  className="px-4 py-2 rounded-md bg-gray-900 text-gray-300 placeholder-gray-400 placeholder:text-sm border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#0077B5] flex-grow"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className="bg-[#0077B5] hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
              {status && <p className="text-green-400 mt-2 text-sm">{status}</p>}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col items-center">
            <img
              src="/goodman-logo.png"
              alt="Goodman & Goldsmith Logo"
              className="h-8 w-auto mb-3 rounded-md shadow-md  object-cover"
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
