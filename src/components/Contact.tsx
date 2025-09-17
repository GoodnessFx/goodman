import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaSuccess: (token: string) => void;
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  // Load reCAPTCHA script
  useEffect(() => {
    const scriptId = "recaptcha-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // Define callback globally so Google reCAPTCHA can call it
    window.onRecaptchaSuccess = (token: string) => {
      setRecaptchaToken(token);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) return toast.error("Please enter your full name");
    if (!formData.email.trim()) return toast.error("Please enter your email address");
    if (!formData.email.includes("@")) return toast.error("Please enter a valid email address");
    if (formData.message.trim().length < 10)
      return toast.error("Please enter a message with at least 10 characters");
    if (!recaptchaToken) return toast.error("Please complete the reCAPTCHA verification");

    setIsSubmitting(true);

    try {
      const endpoint =
        process.env.NODE_ENV === "production"
          ? "/.netlify/functions/send-contact"
          : "/api/send-contact";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Thank you for your message! We'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });

        if (window.grecaptcha) {
          window.grecaptcha.reset();
        }
        setRecaptchaToken(null);
      } else {
        toast.error(result.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background Image & Header */}
      <div className="relative w-full h-96 flex items-center justify-center">
        <img
          src="https://media.istockphoto.com/id/1345338201/nl/foto/shot-of-two-young-call-center-agents-working-in-an-office.jpg?s=612x612&w=0&k=20&c=yLjM3R1r9NaymeGLzf_Jq7gP8Qimji4o2x0uUdJJ620="
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center max-w-3xl px-4">
          <h2 className="text-3xl md:text-4xl text-white mb-6 font-bold">Get In Touch</h2>
          <p className="text-xl text-gray-200 leading-relaxed">
            Ready to transform your supply chain? Contact us today for a consultation and discover
            how we can help optimize your operations and drive growth.
          </p>
        </div>
      </div>

      {/* Contact Form & Quick Contact */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="p-8">
            <h3 className="text-2xl text-gray-900 mb-6">Send Us a Message</h3>
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
                  placeholder="Describe your consultation reason"
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

              {/* reCAPTCHA v2 */}
              <div className="flex justify-center">
                <div
                  className="g-recaptcha"
                  data-sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY as string}
                  data-callback="onRecaptchaSuccess"
                ></div>
              </div>

              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending Message...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </Card>
        </div>

        {/* Quick Contact */}
        <div className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl text-gray-900 mb-4">Reach Us Here</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-900">Main Office</div>
                  <div className="text-gray-600">+234 805 737 0966</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-900">General Inquiries</div>
                  <div className="text-gray-600">goodmangoldsmithltd@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-900">Business Hours</div>
                  <div className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM GMT+1</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
