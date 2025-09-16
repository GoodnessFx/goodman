import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { 
  ShoppingCart, 
  TruckIcon, 
  BarChart3, 
  Shield, 
  Zap, 
  Settings,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: ShoppingCart,
      title: "Procurement Advisory",
      description: "Strategic procurement consulting to optimize your purchasing processes, reduce costs, and improve supplier relationships.",
      features: ["Spend Analysis", "Supplier Evaluation", "Contract Negotiation", "Category Management"]
    },
    {
      icon: TruckIcon,
      title: "Strategic Sourcing",
      description: "End-to-end strategic sourcing solutions to identify, evaluate, and select the best suppliers for your business needs.",
      features: ["Supplier Identification", "RFP Management", "Vendor Selection", "Contract Management"]
    },
    {
      icon: BarChart3,
      title: "Supplier Management",
      description: "Comprehensive supplier relationship management to optimize performance, reduce risks, and drive continuous improvement.",
      features: ["Performance Monitoring", "Supplier Development", "Risk Assessment", "Relationship Management"]
    },
    {
      icon: Shield,
      title: "Procurement Training and L&D",
      description: "Professional development programs to enhance your team's procurement skills and knowledge across all levels.",
      features: ["Skills Assessment", "Training Programs", "Certification Support", "Mentoring"]
    },
    {
      icon: Zap,
      title: "Business Development Support",
      description: "Strategic business development services to help you identify new opportunities and grow your procurement capabilities.",
      features: ["Market Analysis", "Opportunity Identification", "Strategy Development", "Implementation Support"]
    },
    {
      icon: Settings,
      title: "Learning and Development",
      description: "Comprehensive learning solutions to build procurement expertise and drive organizational capability development.",
      features: ["Curriculum Design", "Workshop Delivery", "E-Learning", "Assessment Tools"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Divider with Text (same style as About section) */}
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-800 font-semibold"></span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive supply chain and procurement consulting services designed to optimize 
            your operations, reduce costs, and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                
                <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="w-full group"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl mb-4">
            Ready to Transform Your Supply Chain?
          </h3>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Let our experts help you identify opportunities, optimize operations, and achieve your strategic objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary">
                Get Assessment
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
