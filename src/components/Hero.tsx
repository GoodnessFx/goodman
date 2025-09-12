import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full -translate-y-48 translate-x-48 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-100 to-yellow-200 rounded-full translate-y-32 -translate-x-32 opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent font-bold">GOODMAN & GOLDSMITH</span>
                <br />Procurement consultants. Procurement services. 
                <br />Business development. Learning and development.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                We deliver procurement strategy and operations. We train teams. 
                We scale procurement processes. We drive value across supply chains.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Procurement Advisory</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Strategic Sourcing</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Supplier Management</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700 font-medium">Procurement Training & L&D</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('services')}
                className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9jdXJlbWVudCUyMGJ1c2luZXNzJTIwb2ZmaWNlfGVufDF8fHx8MTc1NzQwNzI5NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional procurement business office meeting"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 border border-yellow-200">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">150+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">95%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}