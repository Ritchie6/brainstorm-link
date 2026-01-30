import { Card, CardContent } from "@/components/ui/card";
import { 
  Video, 
  Brain, 
  Users, 
  MessageSquare, 
  PenTool, 
  FileText, 
  Sparkles,
  Target
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Smart Matching",
    description: "AI-powered algorithm finds your perfect study partner based on subjects, goals, and learning style.",
    gradient: "gradient-primary",
  },
  {
    icon: Video,
    title: "HD Video Calls",
    description: "Crystal-clear video streaming with background blur, filters, and screen sharing capabilities.",
    gradient: "gradient-secondary",
  },
  {
    icon: PenTool,
    title: "Interactive Whiteboard",
    description: "Collaborate in real-time with our digital whiteboard. Draw, annotate, and solve problems together.",
    gradient: "gradient-accent",
  },
  {
    icon: Brain,
    title: "AI Study Assistant",
    description: "Get instant doubt clearance and explanations from our AI tutor during your study sessions.",
    gradient: "gradient-primary",
  },
  {
    icon: MessageSquare,
    title: "Live Transcripts",
    description: "Automatic speech-to-text transcription so you never miss important points discussed.",
    gradient: "gradient-secondary",
  },
  {
    icon: FileText,
    title: "Session Notes",
    description: "Take notes collaboratively and access them anytime. All your study materials in one place.",
    gradient: "gradient-accent",
  },
  {
    icon: Sparkles,
    title: "Focus Mode",
    description: "Pomodoro timers, ambient sounds, and distraction blocking to maximize productivity.",
    gradient: "gradient-primary",
  },
  {
    icon: Target,
    title: "Goal Tracking",
    description: "Set study goals, track progress, and celebrate achievements with your study partners.",
    gradient: "gradient-secondary",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-6">
            Everything You Need to{" "}
            <span className="gradient-text">Study Better</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to make collaborative studying effective, engaging, and fun.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              variant="interactive"
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className={`w-12 h-12 rounded-xl ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
