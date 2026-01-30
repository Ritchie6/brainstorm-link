import { Badge } from "@/components/ui/badge";
import { UserPlus, Filter, Video, Star } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Create Your Profile",
    description: "Sign up and tell us about yourself - your subjects, goals, availability, and preferred study style.",
  },
  {
    icon: Filter,
    number: "02",
    title: "Set Your Preferences",
    description: "Filter by age, location, subjects, exam prep, or difficulty level to find compatible partners.",
  },
  {
    icon: Video,
    number: "03",
    title: "Join Live Sessions",
    description: "Get matched with the perfect study buddy and start collaborating in real-time with video, whiteboard, and AI support.",
  },
  {
    icon: Star,
    number: "04",
    title: "Track & Improve",
    description: "Monitor your progress, save notes, rate sessions, and build lasting study partnerships.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="gradient" className="mb-4">Simple Process</Badge>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes and find your ideal study partner today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
              )}
              
              <div className="relative bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-4 left-6">
                  <span className="text-6xl font-display font-bold text-primary/10">{step.number}</span>
                </div>
                
                <div className="pt-8 space-y-4">
                  <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-xl">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
