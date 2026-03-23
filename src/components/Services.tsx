import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faChessKnight, 
  faGear, 
  faBrain, 
  faCartShopping, 
  faBolt, 
  faArrowRight,
  faGlobe 
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const services = [
    { 
      icon: faCartShopping, 
      title: "Operational and Project Procurement", 
      description: "Comprehensive procurement support for both day-to-day operations and complex projects, ensuring efficiency and on-budget delivery.", 
      features: [
        "End-to-End Project Procurement Management", 
        "Purchase Order Management", 
        "Supplier Coordination", 
        "Bid & Tender Support", 
        "Compliance & Policy Adherence"
      ] 
    },
    { 
      icon: faChessKnight, 
      title: "Strategic Sourcing and Ethical Procurement", 
      description: "Strategic sourcing solutions that identify the best suppliers while ensuring sustainability, fair labor practices, and ethical standards.", 
      features: [
        "Supplier Identification", 
        "RFP & Vendor Selection", 
        "Sustainability Audits", 
        "Fair Labor Compliance", 
        "Responsible Supply Chains"
      ] 
    },
    { 
      icon: faGear, 
      title: "Engineering Services", 
      description: "Technical expertise and engineering solutions to optimize project delivery, operational efficiency, and technical design.", 
      features: [
        "Technical Design & Review", 
        "Project Engineering Support", 
        "Asset Management", 
        "Operational Efficiency Consulting",
        "Technical Advisory Services"
      ] 
    },
    { 
      icon: faBolt, 
      title: "Business Development", 
      description: "Strategic business development services to help you identify new opportunities and grow your procurement capabilities.", 
      features: ["Market Analysis", "Opportunity Identification", "Strategy Development", "Implementation Support"] 
    },
    { 
      icon: faBrain, 
      title: "Learning and Development", 
      description: "Comprehensive learning solutions to build procurement expertise and drive organizational capability development.", 
      features: ["Training Programs & Workshops", "Certification & Accreditation Support", "Customized Capability Building", "Leadership & Soft Skills Development"] 
    },
    { 
      icon: faGlobe, 
      title: "Procurement Services", 
      description: "We source and deliver from all over the world to our valued customers in line with global best practices.", 
      features: [
        "Global Sourcing & Supply Chain", 
        "International Logistics Management", 
        "Quality Assurance & Inspection", 
        "Customs & Regulatory Compliance",
        "Last-mile Delivery Solutions"
      ] 
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-800 font-semibold"></span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive supply chain and procurement consulting services designed to optimize 
            your operations, reduce costs, and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 bg-white border-0 shadow-lg">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={service.icon} className="text-primary h-6 w-6" />
                </div>

                <h3 className="text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact" className="mt-auto">
                <Button variant="outline" className="w-full group">
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
