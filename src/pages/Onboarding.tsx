import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  ArrowRight, 
  ArrowLeft,
  MapPin,
  Calendar,
  User,
  BookOpen,
  Target,
  Check
} from "lucide-react";

const subjects = [
  "Mathematics", "Physics", "Chemistry", "Biology", "Computer Science",
  "Economics", "Psychology", "History", "Literature", "Languages",
  "Medicine", "Engineering", "Law", "Business", "Art & Design"
];

const examTypes = [
  "SAT", "ACT", "GRE", "GMAT", "MCAT", "LSAT", "IELTS", "TOEFL",
  "JEE", "NEET", "CAT", "GATE", "UPSC", "University Exams", "Other"
];

const studyGoals = [
  "Daily Study Sessions", "Exam Preparation", "Homework Help",
  "Research Collaboration", "Language Practice", "Skill Development"
];

const Onboarding = () => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState({
    age: "",
    gender: "",
    location: "",
    subjects: [] as string[],
    exams: [] as string[],
    goals: [] as string[],
    availability: "",
    bio: "",
  });
  const navigate = useNavigate();
  const totalSteps = 4;

  const toggleItem = (array: string[], item: string, key: "subjects" | "exams" | "goals") => {
    setProfile({
      ...profile,
      [key]: array.includes(item) 
        ? array.filter(i => i !== item)
        : [...array, item]
    });
  };

  const handleComplete = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen gradient-mesh flex items-center justify-center p-4">
      <div className="w-full max-w-2xl animate-fade-in">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
            <GraduationCap className="w-7 h-7 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-2xl">StudyBuddy</span>
        </div>

        <Card variant="glass" className="shadow-medium">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Complete Your Profile</CardTitle>
            <CardDescription>
              Help us find the perfect study partners for you
            </CardDescription>
            {/* Progress */}
            <div className="flex gap-2 pt-4">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`h-1.5 flex-1 rounded-full transition-colors ${
                    s <= step ? "gradient-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground pt-2">Step {step} of {totalSteps}</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">About You</h3>
                  <p className="text-sm text-muted-foreground">Tell us a bit about yourself</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Age
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="Your age"
                      value={profile.age}
                      onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Gender</Label>
                    <div className="flex gap-2">
                      {["Male", "Female", "Other"].map((g) => (
                        <Button
                          key={g}
                          type="button"
                          variant={profile.gender === g ? "default" : "outline"}
                          size="sm"
                          onClick={() => setProfile({ ...profile, gender: g })}
                          className="flex-1"
                        >
                          {g}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="City, Country"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                  />
                </div>
              </div>
            )}

            {/* Step 2: Subjects */}
            {step === 2 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl gradient-secondary flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">What do you study?</h3>
                  <p className="text-sm text-muted-foreground">Select subjects you're interested in</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {subjects.map((subject) => (
                    <Badge
                      key={subject}
                      variant={profile.subjects.includes(subject) ? "default" : "outline"}
                      className="cursor-pointer px-4 py-2 text-sm transition-all hover:scale-105"
                      onClick={() => toggleItem(profile.subjects, subject, "subjects")}
                    >
                      {profile.subjects.includes(subject) && <Check className="w-3 h-3 mr-1" />}
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Exams & Goals */}
            {step === 3 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl gradient-accent flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">Your Goals</h3>
                  <p className="text-sm text-muted-foreground">What are you preparing for?</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label className="mb-3 block">Exams (if any)</Label>
                    <div className="flex flex-wrap gap-2">
                      {examTypes.map((exam) => (
                        <Badge
                          key={exam}
                          variant={profile.exams.includes(exam) ? "default" : "outline"}
                          className="cursor-pointer px-3 py-1.5 text-sm transition-all hover:scale-105"
                          onClick={() => toggleItem(profile.exams, exam, "exams")}
                        >
                          {profile.exams.includes(exam) && <Check className="w-3 h-3 mr-1" />}
                          {exam}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Study Goals</Label>
                    <div className="flex flex-wrap gap-2">
                      {studyGoals.map((goal) => (
                        <Badge
                          key={goal}
                          variant={profile.goals.includes(goal) ? "default" : "outline"}
                          className="cursor-pointer px-3 py-1.5 text-sm transition-all hover:scale-105"
                          onClick={() => toggleItem(profile.goals, goal, "goals")}
                        >
                          {profile.goals.includes(goal) && <Check className="w-3 h-3 mr-1" />}
                          {goal}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Availability & Bio */}
            {step === 4 && (
              <div className="space-y-6 animate-fade-in">
                <div className="text-center mb-4">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-lg">Almost Done!</h3>
                  <p className="text-sm text-muted-foreground">A few more details to complete your profile</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Study Availability</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Morning", "Afternoon", "Evening", "Night", "Weekends", "Flexible"].map((time) => (
                        <Button
                          key={time}
                          type="button"
                          variant={profile.availability === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setProfile({ ...profile, availability: time })}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Short Bio (Optional)</Label>
                    <textarea
                      id="bio"
                      placeholder="Tell potential study partners about yourself..."
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      className="flex min-h-24 w-full rounded-xl border-2 border-border bg-background px-4 py-3 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex gap-3 pt-4">
              {step > 1 && (
                <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              )}
              <Button 
                variant="hero" 
                className="flex-1"
                onClick={() => step === totalSteps ? handleComplete() : setStep(step + 1)}
              >
                {step === totalSteps ? (
                  <>
                    Complete Profile
                    <Check className="w-4 h-4 ml-2" />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Onboarding;
