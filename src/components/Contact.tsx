import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

// Declare grecaptcha global variable
declare global {
  interface Window {
    grecaptcha: {
      reset: () => void;
    };
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // Load reCAPTCHA script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim()) {
      toast.error("Please enter your full name");
      return;
    }
    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    if (!formData.email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (formData.message.trim().length < 10) {
      toast.error("Please enter a message with at least 10 characters");
      return;
    }
    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification");
      return;
    }

    setIsSubmitting(true);

    try {
      // Determine the correct endpoint based on environment
      const endpoint = process.env.NODE_ENV === 'production' 
        ? '/.netlify/functions/send-contact'
        : '/api/send-contact';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Thank you for your message! We'll get back to you within 24 hours.");
        setFormData({ name: '', email: '', company: '', phone: '', subject: '', message: '' });
        // Reset reCAPTCHA
        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
        setRecaptchaToken(null);
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const offices = [
    {
      city: "New York",
      address: "150 Broadway, Suite 1200\nNew York, NY 10038",
      phone: "+1 (212) 555-0123",
      email: "ny@goodmangoldsmith.com"
    },
    {
      city: "Chicago",
      address: "233 S Wacker Dr, Suite 8400\nChicago, IL 60606",
      phone: "+1 (312) 555-0456",
      email: "chicago@goodmangoldsmith.com"
    },
    {
      city: "San Francisco",
      address: "555 California St, Suite 5000\nSan Francisco, CA 94104",
      phone: "+1 (415) 555-0789",
      email: "sf@goodmangoldsmith.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to transform your supply chain? Contact us today for a free consultation 
            and discover how we can help optimize your operations and drive growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <h3 className="text-2xl text-gray-900 mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your procurement challenges and how we can help..."
                    className="min-h-32"
                    required
                  />
                </div>
                
                {/* reCAPTCHA */}
                <div className="flex justify-center">
                  <div 
                    className="g-recaptcha" 
                    data-sitekey="6Lea5ccrAAAAAFuR5LQcwEyjrctIfS-j-d2-FrU4"
                    data-callback={handleRecaptchaChange}
                  ></div>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-6">
              <h3 className="text-xl text-gray-900 mb-4">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900">Main Office</div>
                    <div className="text-gray-600">+1 (212) 555-0123</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900">General Inquiries</div>
                    <div className="text-gray-600">info@goodmangoldsmith.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-900">Business Hours</div>
                    <div className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM EST</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Office Locations */}
            <Card className="p-6">
              <h3 className="text-xl text-gray-900 mb-4">
                Office Locations
              </h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <div className="font-medium text-gray-900">{office.city}</div>
                    </div>
                    <div className="text-sm text-gray-600 ml-6 whitespace-pre-line">
                      {office.address}
                    </div>
                    <div className="text-sm text-gray-600 ml-6">
                      {office.phone}
                    </div>
                    <div className="text-sm text-gray-600 ml-6">
                      {office.email}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="p-6 bg-red-50 border-red-200">
              <h3 className="text-xl text-gray-900 mb-4">
                24/7 Emergency Support
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                For urgent supply chain disruptions or critical issues affecting your operations.
              </p>
              <div className="space-y-2">
                <div className="text-gray-900">Emergency Hotline</div>
                <div className="text-gray-700">+1 (800) 555-URGENT</div>
                <div className="text-xs text-gray-500">
                  Available 24/7 for existing clients
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}