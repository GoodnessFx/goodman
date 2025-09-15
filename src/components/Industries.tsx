import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Factory, 
  Truck, 
  Building2, 
  Stethoscope, 
  Cpu, 
  Car,
  Plane,
  ShoppingBag,
  Zap,
  Wheat,
  Fuel,
  Hammer
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Zap,
      title: "Energy",
      description: "Specialized procurement solutions for energy sector operations, focusing on reliability, sustainability, and regulatory compliance.",
      specialties: ["Asset Management", "Renewable Energy", "Grid Reliability", "ESG Compliance"],
      clients: "15+ clients"
    },
    {
      icon: Cpu,
      title: "Telecom",
      description: "Technology and telecommunications procurement expertise to manage complex supply chains and drive innovation.",
      specialties: ["Component Sourcing", "Innovation Management", "Speed to Market", "Supply Security"],
      clients: "20+ clients"
    },
    {
      icon: ShoppingBag,
      title: "FMCG",
      description: "Fast-moving consumer goods procurement optimization with focus on speed, efficiency, and market responsiveness.",
      specialties: ["Demand Planning", "Supplier Integration", "Quality Management", "Cost Optimization"],
      clients: "25+ clients"
    },
    {
      icon: Building2,
      title: "Public Sector",
      description: "Government and public sector procurement consulting with expertise in compliance, transparency, and value delivery.",
      specialties: ["Regulatory Compliance", "Transparency", "Value Delivery", "Risk Management"],
      clients: "18+ clients"
    },
    {
      icon: Factory,
      title: "Real Estate",
      description: "Real estate development and construction procurement solutions for project-based operations and materials management.",
      specialties: ["Project Procurement", "Materials Management", "Subcontractor Relations", "Cost Control"],
      clients: "12+ clients"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our deep industry expertise spans across multiple sectors, allowing us to provide 
            specialized solutions that address the unique challenges of your industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-white group">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg text-gray-900 mb-1 truncate">{industry.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {industry.clients}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {industry.description}
                </p>
                
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    Key Specialties
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {industry.specialties.map((specialty, specialtyIndex) => (
                      <span 
                        key={specialtyIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
