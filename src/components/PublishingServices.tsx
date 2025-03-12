
import { CheckCircle, BookMarked, Edit, Printer, Globe, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    id: 1,
    title: "Editorial Excellence",
    description: "Professional editing services from developmental editing to final proofreading.",
    icon: Edit,
    features: ["Developmental Editing", "Copy Editing", "Line Editing", "Proofreading"]
  },
  {
    id: 2,
    title: "Book Design & Production",
    description: "Award-winning cover design and interior formatting for both print and digital books.",
    icon: BookMarked,
    features: ["Cover Design", "Interior Layout", "E-book Conversion", "Audiobook Production"]
  },
  {
    id: 3,
    title: "Printing & Distribution",
    description: "High-quality printing and global distribution services to reach your audience.",
    icon: Printer,
    features: ["Print-on-Demand", "Global Distribution", "Warehousing", "Fulfillment"]
  },
  {
    id: 4,
    title: "Marketing & Promotion",
    description: "Strategic marketing campaigns to increase visibility and drive book sales.",
    icon: Globe,
    features: ["Book Launch Campaigns", "Social Media Marketing", "Press Coverage", "Book Tours"]
  },
  {
    id: 5,
    title: "Author Support",
    description: "Personalized support and resources to help authors throughout their publishing journey.",
    icon: Award,
    features: ["Author Coaching", "Industry Guidance", "Publishing Education", "Career Development"]
  }
];

const ServiceCard = ({ service, className }: { service: typeof services[0], className?: string }) => {
  return (
    <div 
      className={cn(
        "glass-card rounded-lg p-6 hover-lift",
        className
      )}
    >
      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
        <service.icon size={24} />
      </div>
      
      <h3 className="text-xl font-medium mb-2">{service.title}</h3>
      <p className="text-muted-foreground mb-4">{service.description}</p>
      
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-primary/70" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const PublishingServices = () => {
  return (
    <section id="services" className="section bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-96 h-96 rounded-full bg-secondary/50 blur-3xl"></div>
      </div>
      
      <div className="text-center mb-16">
        <span className="pill mb-4">What We Offer</span>
        <h2 className="section-title">Publishing Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We provide comprehensive publishing services to help authors bring their vision to life with exceptional quality and care.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <ServiceCard 
            key={service.id} 
            service={service} 
            className={`animate-fade-in delay-[${index * 100}ms]`}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our flexible publishing services can be tailored to meet your specific needs and goals. Contact us for a personalized consultation.
        </p>
        <Button size="lg" className="hover-lift">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default PublishingServices;
