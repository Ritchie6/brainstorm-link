import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, Video, Brain } from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 gradient-mesh opacity-60" />
      
      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-20 h-20 rounded-2xl gradient-primary opacity-20 animate-float" />
      <div className="absolute top-64 right-20 w-16 h-16 rounded-full gradient-secondary opacity-20 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-12 h-12 rounded-xl gradient-accent opacity-20 animate-float" style={{ animationDelay: '2s' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <Badge variant="glass" className="gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
              500+ Students Online Now
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-tight">
              Find Your Perfect{" "}
              <span className="gradient-text">Study Partner</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              Connect with like-minded students, join live study sessions, and achieve your academic goals together with AI-powered matching.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Start Studying Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button variant="hero-outline" size="xl" className="gap-2">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border/50">
              <div className="space-y-1">
                <p className="text-3xl font-display font-bold gradient-text">50K+</p>
                <p className="text-sm text-muted-foreground">Active Students</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-display font-bold gradient-text">1M+</p>
                <p className="text-sm text-muted-foreground">Study Sessions</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-display font-bold gradient-text">4.9★</p>
                <p className="text-sm text-muted-foreground">User Rating</p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Students studying together" 
                className="w-full rounded-3xl shadow-medium"
              />
              
              {/* Floating Cards */}
              <div className="absolute -left-4 top-1/4 glass-card p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Perfect Match!</p>
                    <p className="text-xs text-muted-foreground">95% compatibility</p>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-1/2 glass-card p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-secondary flex items-center justify-center">
                    <Video className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Live Session</p>
                    <p className="text-xs text-muted-foreground">In progress...</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 left-1/3 glass-card p-4 animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-accent flex items-center justify-center">
                    <Brain className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">AI Tutor</p>
                    <p className="text-xs text-muted-foreground">Ready to help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
