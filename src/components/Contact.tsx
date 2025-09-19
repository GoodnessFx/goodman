import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

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
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "rRA_wmPsqw0tN3MUT");
  }, []);

  // Handle reCAPTCHA change
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

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
      console.log("Sending email with params:", {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not provided",
        phone: formData.phone || "Not provided",
        subject: formData.subject || "Contact Form Submission",
        message: formData.message,
        to_email: "goodmangoldsmithltd@gmail.com",
        'g-recaptcha-response': recaptchaToken,
      });
      console.log("Service ID:", process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_8ajtiw1");
      console.log("Template ID:", process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_4j1dbfs");
      console.log("Public Key:", process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "rRA_wmPsqw0tN3MUT");
      console.log("reCAPTCHA Token:", recaptchaToken);
      
      // Create template parameters with reCAPTCHA token
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || "Not provided",
        phone: formData.phone || "Not provided",
        subject: formData.subject || "Contact Form Submission",
        message: formData.message,
        to_email: "goodmangoldsmithltd@gmail.com",
        'g-recaptcha-response': recaptchaToken,
      };

      // Use EmailJS send method with template parameters
      const result = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_8ajtiw1",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_4j1dbfs",
        templateParams,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "rRA_wmPsqw0tN3MUT",
        }
      );
      
      console.log("EmailJS result:", result);

      toast.success("Thank you for your message! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", company: "", phone: "", subject: "", message: "" });

      // Reset reCAPTCHA
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
      setRecaptchaToken(null);
    } catch (error: any) {
      console.error("EmailJS error:", error);
      console.error("Error details:", {
        status: error.status,
        text: error.text,
        message: error.message,
        response: error.response
      });
      
      // Log the full error object
      console.error("Full error object:", JSON.stringify(error, null, 2));
      
      toast.error(`Failed to send message: ${error.text || error.message || "Unknown error"}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-20 relative">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid lg:grid-cols-3 gap-12">
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

              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY || "6Lf2nsorAAAAAJPs6DcDQw60JmKj7d_HXO_jDhsH"}
                  onChange={handleRecaptchaChange}
                  theme="light"
                />
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

        <div className="space-y-8">
          <Card className="p-6">
            <h3 className="text-xl text-gray-900 mb-4">Reach Us Here</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-900">Main Office</div>
                  <div className="text-gray-600">+234 903 988 4866</div>
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