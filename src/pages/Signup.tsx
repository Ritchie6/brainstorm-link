import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Mail, Lock, User, ArrowRight, Github, Chrome, Check } from "lucide-react";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    setIsLoading(true);
    // Simulate signup - will be replaced with actual auth
    setTimeout(() => {
      setIsLoading(false);
      navigate("/onboarding");
    }, 1000);
  };

  const features = [
    "AI-powered study partner matching",
    "HD video calls with whiteboard",
    "AI tutor for instant help",
    "Progress tracking & notes",
  ];

  return (
    <div className="min-h-screen gradient-mesh flex items-center justify-center p-4">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-8 animate-fade-in">
        {/* Left - Benefits */}
        <div className="hidden lg:flex flex-col justify-center space-y-8 p-8">
          <div>
            <h1 className="text-4xl font-display font-bold mb-4">
              Start Your <span className="gradient-text">Learning Journey</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Join thousands of students who study smarter together.
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          <div className="glass-card p-6 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
                alt="User" 
                className="w-12 h-12 rounded-full bg-muted"
              />
              <div>
                <p className="font-semibold">Alex Chen</p>
                <p className="text-sm text-muted-foreground">Stanford University</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">
              "StudyBuddy helped me find the perfect study partner for my MCAT prep. 
              The AI tutor feature is a game-changer!"
            </p>
          </div>
        </div>

        {/* Right - Form */}
        <div>
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center gap-2 mb-8 lg:justify-start">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-2xl">StudyBuddy</span>
          </Link>

          <Card variant="glass" className="shadow-medium">
            <CardHeader className="text-center lg:text-left">
              <CardTitle className="text-2xl">Create Your Account</CardTitle>
              <CardDescription>
                {step === 1 ? "Enter your details to get started" : "Set up your password"}
              </CardDescription>
              {/* Progress */}
              <div className="flex gap-2 pt-4">
                {[1, 2].map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${
                      s <= step ? "gradient-primary" : "bg-muted"
                    }`}
                  />
                ))}
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {step === 1 && (
                <>
                  {/* Social Login */}
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="w-full">
                      <Chrome className="w-4 h-4 mr-2" />
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                </>
              )}

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="password"
                          type="password"
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="••••••••"
                          value={formData.confirmPassword}
                          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                <div className="flex gap-3">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                      Back
                    </Button>
                  )}
                  <Button type="submit" variant="hero" className="flex-1" disabled={isLoading}>
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Creating account...
                      </span>
                    ) : step === 2 ? (
                      <>
                        Create Account
                        <ArrowRight className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
