import { Card } from "./ui/card";
import { Linkedin, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Team() {
  const teamMembers = [
    {
      name: "MR ZAK",
      title: "Founding Partner & CEO",
      image: "blob:https://web.whatsapp.com/603f7e43-14a3-4a71-9c88-dbcff991ee6b",
      bio: "5+ years in procurement leadership roles at Fortune 500 companies. Former VP of Global Procurement specializing in strategic sourcing and supplier relationship management.",
      expertise: ["Strategic Sourcing", "Supplier Management", "Cost Reduction", "Procurement Strategy"]
    },
    {
      name: "Sarah Goldsmith",
      title: "Founding Partner & COO",
      image: "https://images.unsplash.com/photo-1659904577828-85836db5a45f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG5pZ2VyaWFuJTIwbWFufGVufDB8fDB8fHww",
      bio: "Expert in procurement operations and business development with 10+ years of consulting experience. Led transformation projects for major manufacturing and retail companies.",
      expertise: ["Operations Strategy", "Business Development", "Process Improvement", "Change Management"]
    },
    {
      name: "GOODNESS IYAMAH",
      title: "Senior Director, Procurement Advisory",
      image: "https://images.unsplash.com/photo-1684337399050-0412ebed8005?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxuaWdlcmlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      bio: "Procurement advisory specialist with expertise in strategic sourcing and supplier management. MBA in Supply Chain Management with extensive experience in cost optimization.",
      expertise: ["Procurement Advisory", "Strategic Sourcing", "Cost Optimization", "Supplier Relations"]
    },
    {
      name: "Joshua Nebudcadnezzar",
      title: "Director, Learning & Development",
      image: "https://images.unsplash.com/photo-1612990383139-ebdd9ee31f7b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxuaWdlcmlhbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
      bio: "Learning and development expert focused on building procurement capabilities. Former head of training at global procurement organizations with 15+ years experience.",
      expertise: ["Training Design", "Capability Development", "Skills Assessment", "Mentoring"]
    },
    {
      name: "David Thompson",
      title: "Principal Consultant, Strategic Sourcing",
      image: "https://media.istockphoto.com/id/517302398/photo/portrait-of-nigerian-man-with-beard-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=2bKmY9nViDLxVf_1qgM5hVJJGhM6JqDiwDKiR7XKx0k=",
      bio: "Strategic sourcing specialist with deep expertise in supplier evaluation and contract negotiation. Former procurement director at major corporations with proven track record in cost savings.",
      expertise: ["Strategic Sourcing", "Supplier Evaluation", "Contract Negotiation", "Cost Management"]
    },
    {
      name: "Samuel Zachery",
      title: "Senior Manager, Business Development",
      image: "https://imgur.com/a/CSq6cZM",
      bio: "Business development expert focused on identifying new opportunities and growing procurement capabilities. Former business development manager with 12+ years experience in consulting.",
      expertise: ["Business Development", "Market Analysis", "Opportunity Identification", "Client Relations"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Meet the experienced professionals who bring decades of industry expertise 
            and proven track records to help transform your supply chain operations.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 bg-white">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-100">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary mb-4">{member.title}</p>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Expertise Tags */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3 pt-4 border-t border-gray-100">
                <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-primary transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-gray-600">Combined Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Industry Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Project Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}