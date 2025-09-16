import { Card } from "./ui/card"
import { Target, Eye, Award, Users } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses with strategic procurement and supply chain solutions that drive sustainable growth and competitive advantage.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading procurement consulting firm, recognized for transforming supply chains and delivering exceptional value to our clients.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards of quality and professionalism in every engagement, delivering results that exceed expectations.",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "We work as trusted partners with our clients, building long-term relationships based on transparency and mutual success.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-800 font-semibold"></span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="text-3xl md:text-4xl text-gray-900 mb-6"
            style={{ fontFamily: "'Merriweather', serif", fontVariantLigatures: "none" }}
          >
            About Goodman & Goldsmith
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We deliver procurement strategy and operations. We train teams. We
            scale procurement processes. We drive value across supply chains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl text-gray-900">
              Leading the Future of Supply Chain Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded by seasoned professionals with extensive experience in
              procurement, supply chain management, and strategic consulting,
              Goodman & Goldsmith has established itself as a trusted
              partner for organizations aiming to optimize and transform their
              operations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team combines deep industry expertise with innovative
              methodologies to deliver tailored solutions that address the
              unique challenges of today’s business landscape. From digital
              transformation initiatives to risk management and operational
              efficiency strategies, we help our clients build resilient,
              streamlined, and sustainable business processes.
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-32 rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-cover bg-center animate-zoom"
                    style={{
                      backgroundImage:
                        "url('https://plus.unsplash.com/premium_photo-1682144979903-95bd827deba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYxfHxlbmdpbmVlcmluZyUyMGluZHVzdHJ5JTIwZmFjaWxpdHl8ZW58MHx8MHx8fDA%3D')",
                      animationDuration: "9s",
                    }}
                  />
                </div>

                <div className="h-48 rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-cover bg-center animate-zoom"
                    style={{
                      backgroundImage:
                        "url('https://plus.unsplash.com/premium_photo-1661963653263-ba95e11e664d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgxfHxlbmdpbmVlcmluZyUyMGluZHVzdHJ5JTIwZmFjaWxpdHl8ZW58MHx8MHx8fDA%3D')",
                      animationDuration: "11s",
                      animationDelay: "0.6s",
                    }}
                  />
                </div>
              </div>

              <div className="space-y-4 mt-8">
                <div className="h-48 rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-cover bg-center animate-zoom"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1474674556023-efef886fa147?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZHVzdHJ5fGVufDB8fDB8fHww')",
                      animationDuration: "10.5s",
                      animationDelay: "0.3s",
                    }}
                  />
                </div>

                <div className="h-32 rounded-xl overflow-hidden">
                  <div
                    className="h-full bg-cover bg-center animate-zoom"
                    style={{
                      backgroundImage:
                        "url('https://plus.unsplash.com/premium_photo-1661963049200-024ef364ad15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8')",
                      animationDuration: "8.5s",
                      animationDelay: "0.9s",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </Card>
            )
          })}
        </div>
      </div>

      <style>{`
        @keyframes zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .animate-zoom {
          animation-name: zoom;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-duration: 10s;
          transform-origin: center;
          will-change: transform;
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  )
}
