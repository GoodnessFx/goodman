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
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Transform Your 
                <span className="text-primary"> Supply Chain</span> 
                <br />Into a Competitive Advantage
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Expert procurement and supply chain consulting that drives efficiency, 
                reduces costs, and accelerates growth for industry-leading companies.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Cost Reduction up to 30%</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Supply Chain Optimization</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Risk Mitigation Strategies</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">Digital Transformation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('services')}
              >
                Explore Services
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1716703432455-3045789de738?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1lZXRpbmd8ZW58MXx8fHwxNzU3NDA3Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional business meeting"
                className="w-full h-[600px] object-cover"
              />
              {/* Overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">150+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
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