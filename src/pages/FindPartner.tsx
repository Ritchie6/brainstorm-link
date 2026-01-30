import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  GraduationCap,
  ArrowLeft,
  Search,
  Filter,
  MapPin,
  Star,
  Video,
  Clock,
  BookOpen,
  Users,
  Sparkles,
  Check,
  X,
  ChevronDown
} from "lucide-react";

const subjects = [
  "Mathematics", "Physics", "Chemistry", "Biology", "Computer Science",
  "Economics", "Psychology", "History", "Literature", "Languages"
];

const mockPartners = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    age: 21,
    subjects: ["Mathematics", "Physics"],
    exams: ["GRE"],
    match: 95,
    location: "New York, USA",
    online: true,
    rating: 4.9,
    sessions: 156,
    bio: "Physics major passionate about quantum mechanics. Love explaining complex concepts!",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    age: 23,
    subjects: ["Computer Science", "Mathematics"],
    exams: ["GATE"],
    match: 92,
    location: "Toronto, Canada",
    online: true,
    rating: 4.8,
    sessions: 89,
    bio: "CS graduate student. Specializing in ML and algorithms.",
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    age: 20,
    subjects: ["Chemistry", "Biology"],
    exams: ["MCAT"],
    match: 88,
    location: "London, UK",
    online: false,
    rating: 4.7,
    sessions: 234,
    bio: "Pre-med student preparing for MCAT. Let's study together!",
  },
  {
    id: 4,
    name: "David Park",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    age: 22,
    subjects: ["Economics", "Mathematics"],
    exams: ["GMAT"],
    match: 85,
    location: "Seoul, Korea",
    online: true,
    rating: 4.6,
    sessions: 67,
    bio: "Business school aspirant. Strong in quantitative subjects.",
  },
];

const FindPartner = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [isMatching, setIsMatching] = useState(false);
  const [matchedPartner, setMatchedPartner] = useState<typeof mockPartners[0] | null>(null);
  const navigate = useNavigate();

  const toggleSubject = (subject: string) => {
    setSelectedSubjects(prev =>
      prev.includes(subject)
        ? prev.filter(s => s !== subject)
        : [...prev, subject]
    );
  };

  const startMatching = () => {
    setIsMatching(true);
    // Simulate AI matching
    setTimeout(() => {
      setMatchedPartner(mockPartners[0]);
      setIsMatching(false);
    }, 3000);
  };

  const startSession = () => {
    navigate("/study-room");
  };

  const filteredPartners = mockPartners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      partner.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesSubjects = selectedSubjects.length === 0 ||
      partner.subjects.some(s => selectedSubjects.includes(s));
    return matchesSearch && matchesSubjects;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-display font-bold">Find Study Partner</h1>
              <p className="text-sm text-muted-foreground">AI-powered matching for optimal study sessions</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Match Card */}
        <Card variant="gradient" className="mb-8 overflow-hidden">
          <CardContent className="p-8">
            {!isMatching && !matchedPartner && (
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <Sparkles className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-display font-bold mb-2">Quick Match</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Let our AI find the perfect study partner based on your subjects, goals, and availability.
                </p>
                <Button variant="hero" size="xl" onClick={startMatching}>
                  <Video className="w-5 h-5 mr-2" />
                  Find My Partner
                </Button>
              </div>
            )}

            {isMatching && (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6 animate-pulse-soft shadow-glow">
                  <Sparkles className="w-10 h-10 text-primary-foreground animate-spin" />
                </div>
                <h2 className="text-2xl font-display font-bold mb-2">Finding Your Match...</h2>
                <p className="text-muted-foreground">Analyzing compatibility with available partners</p>
                <div className="flex justify-center gap-2 mt-6">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-3 h-3 rounded-full bg-primary animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {matchedPartner && (
              <div className="animate-scale-in">
                <div className="text-center mb-6">
                  <Badge variant="success" className="mb-4">Perfect Match Found!</Badge>
                  <h2 className="text-2xl font-display font-bold">You've been matched!</h2>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <img
                        src={matchedPartner.avatar}
                        alt={matchedPartner.name}
                        className="w-24 h-24 rounded-2xl bg-muted"
                      />
                      <span className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-success border-2 border-card flex items-center justify-center">
                        <Check className="w-3 h-3 text-success-foreground" />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold">{matchedPartner.name}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        {matchedPartner.location}
                      </div>
                      <div className="flex gap-1">
                        {matchedPartner.subjects.map(subject => (
                          <Badge key={subject} variant="muted">{subject}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="text-center">
                      <span className="text-4xl font-display font-bold gradient-text">{matchedPartner.match}%</span>
                      <p className="text-sm text-muted-foreground">Compatibility</p>
                    </div>
                    <div className="flex gap-3">
                      <Button variant="hero" onClick={startSession}>
                        <Video className="w-4 h-4 mr-2" />
                        Start Session
                      </Button>
                      <Button variant="outline" onClick={() => setMatchedPartner(null)}>
                        Find Another
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by name or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </Button>
          </div>

          {showFilters && (
            <Card className="animate-slide-up">
              <CardContent className="p-4">
                <Label className="mb-3 block">Subjects</Label>
                <div className="flex flex-wrap gap-2">
                  {subjects.map(subject => (
                    <Badge
                      key={subject}
                      variant={selectedSubjects.includes(subject) ? "default" : "outline"}
                      className="cursor-pointer transition-all hover:scale-105"
                      onClick={() => toggleSubject(subject)}
                    >
                      {selectedSubjects.includes(subject) && <Check className="w-3 h-3 mr-1" />}
                      {subject}
                    </Badge>
                  ))}
                </div>
                {selectedSubjects.length > 0 && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="mt-3"
                    onClick={() => setSelectedSubjects([])}
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear Filters
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Partner List */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredPartners.map(partner => (
            <Card key={partner.id} variant="interactive">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="relative flex-shrink-0">
                    <img
                      src={partner.avatar}
                      alt={partner.name}
                      className="w-16 h-16 rounded-xl bg-muted"
                    />
                    {partner.online && (
                      <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-success border-2 border-card" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold truncate">{partner.name}</h3>
                      <Badge variant="success">{partner.match}%</Badge>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {partner.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-amber-500" />
                        {partner.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <Video className="w-3 h-3" />
                        {partner.sessions}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {partner.subjects.map(subject => (
                        <Badge key={subject} variant="muted" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                      {partner.exams.map(exam => (
                        <Badge key={exam} variant="accent" className="text-xs">
                          {exam}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{partner.bio}</p>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="hero" className="flex-1" onClick={startSession}>
                    <Video className="w-4 h-4 mr-2" />
                    Study Now
                  </Button>
                  <Button variant="outline">View Profile</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FindPartner;
