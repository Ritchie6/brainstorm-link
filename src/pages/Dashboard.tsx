import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Video,
  Users,
  Clock,
  Calendar,
  BookOpen,
  Target,
  TrendingUp,
  Bell,
  Settings,
  Search,
  Filter,
  Play,
  Star,
  MapPin,
  ChevronRight,
  Sparkles
} from "lucide-react";

// Mock data for study partners
const suggestedPartners = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    subjects: ["Mathematics", "Physics"],
    match: 95,
    location: "New York, USA",
    online: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    subjects: ["Computer Science", "Mathematics"],
    match: 92,
    location: "Toronto, Canada",
    online: true,
  },
  {
    id: 3,
    name: "Emma Wilson",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    subjects: ["Chemistry", "Biology"],
    match: 88,
    location: "London, UK",
    online: false,
  },
];

const recentSessions = [
  {
    id: 1,
    partner: "Alex Kumar",
    subject: "Linear Algebra",
    date: "Today, 2:00 PM",
    duration: "45 min",
    rating: 5,
  },
  {
    id: 2,
    partner: "Lisa Park",
    subject: "Organic Chemistry",
    date: "Yesterday",
    duration: "1 hr 20 min",
    rating: 4,
  },
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r border-border p-4 hidden lg:flex flex-col">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl">StudyBuddy</span>
        </Link>

        <nav className="flex-1 space-y-1">
          {[
            { icon: Target, label: "Dashboard", href: "/dashboard", active: true },
            { icon: Video, label: "Find Partner", href: "/find-partner" },
            { icon: Users, label: "My Partners", href: "/partners" },
            { icon: Calendar, label: "Sessions", href: "/sessions" },
            { icon: BookOpen, label: "Notes", href: "/notes" },
            { icon: TrendingUp, label: "Progress", href: "/progress" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="border-t border-border pt-4 space-y-1">
          <Link
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 p-6">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-display font-bold">Welcome back, John! 👋</h1>
            <p className="text-muted-foreground">Ready for another productive study session?</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-destructive" />
            </Button>
            <Link to="/find-partner">
              <Button variant="hero">
                <Video className="w-4 h-4 mr-2" />
                Quick Match
              </Button>
            </Link>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Study Hours", value: "24.5", change: "+3.2 this week", icon: Clock, gradient: "gradient-primary" },
            { label: "Sessions", value: "12", change: "+2 this week", icon: Video, gradient: "gradient-secondary" },
            { label: "Partners", value: "8", change: "+1 new", icon: Users, gradient: "gradient-accent" },
            { label: "Streak", value: "7 days", change: "Keep it up!", icon: TrendingUp, gradient: "gradient-primary" },
          ].map((stat) => (
            <Card key={stat.label} variant="interactive" className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-display font-bold">{stat.value}</p>
                    <p className="text-xs text-success mt-1">{stat.change}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl ${stat.gradient} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Match Section */}
            <Card variant="gradient" className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center">
                    <Sparkles className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg">Find Your Study Partner</h3>
                    <p className="text-sm text-muted-foreground">AI-powered matching based on your subjects and goals</p>
                  </div>
                  <Link to="/find-partner">
                    <Button variant="hero" size="lg">
                      Start Matching
                      <Play className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Suggested Partners */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Suggested Partners</CardTitle>
                <Link to="/find-partner">
                  <Button variant="ghost" size="sm">
                    View All <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestedPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="relative">
                      <img
                        src={partner.avatar}
                        alt={partner.name}
                        className="w-14 h-14 rounded-xl bg-muted"
                      />
                      {partner.online && (
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-success border-2 border-card" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold truncate">{partner.name}</h4>
                        <Badge variant="success" className="text-xs">{partner.match}% Match</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {partner.location}
                      </div>
                      <div className="flex gap-1 mt-2">
                        {partner.subjects.map((subject) => (
                          <Badge key={subject} variant="muted" className="text-xs">
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Connect
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Search */}
            <Card>
              <CardContent className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search subjects, partners..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-border bg-background focus:border-primary/50 focus:outline-none transition-colors"
                  />
                  <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2">
                    <Filter className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Sessions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentSessions.map((session) => (
                  <div
                    key={session.id}
                    className="p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{session.subject}</h4>
                      <div className="flex items-center gap-1 text-amber-500">
                        {Array.from({ length: session.rating }).map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">with {session.partner}</p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {session.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {session.duration}
                      </span>
                    </div>
                  </div>
                ))}
                <Link to="/sessions">
                  <Button variant="ghost" className="w-full">
                    View All Sessions
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Study Goals */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">This Week's Goals</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { label: "Complete 5 study sessions", progress: 80 },
                  { label: "Study for 10 hours", progress: 65 },
                  { label: "Review notes daily", progress: 100 },
                ].map((goal, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>{goal.label}</span>
                      <span className="text-muted-foreground">{goal.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-500"
                        style={{ width: `${goal.progress}%` }}
                      />
                      <span>{goal.label}</span>
                      <span className="text-muted-foreground">{goal.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full gradient-primary rounded-full transition-all duration-500"
                        style={{ width: `${goal.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
