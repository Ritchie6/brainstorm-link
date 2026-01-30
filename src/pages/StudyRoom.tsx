import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  PhoneOff,
  MessageSquare,
  PenTool,
  FileText,
  Settings,
  Maximize2,
  Minimize2,
  MoreVertical,
  Send,
  Sparkles,
  Clock,
  X,
  Eraser,
  Circle,
  Square,
  Type,
  Download,
  Users,
  Brain
} from "lucide-react";

const StudyRoom = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activePanel, setActivePanel] = useState<"chat" | "whiteboard" | "notes" | null>("chat");
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: "Sarah", text: "Hey! Ready to start with calculus?", time: "2:05 PM", isAI: false },
    { id: 2, sender: "You", text: "Yes! Let's begin with derivatives.", time: "2:06 PM", isAI: false },
    { id: 3, sender: "AI Tutor", text: "Great choice! Derivatives are a fundamental concept. Would you like me to explain the basic rules first?", time: "2:06 PM", isAI: true },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [notes, setNotes] = useState("# Study Session Notes\n\n## Topics to Cover\n- Derivatives\n- Chain rule\n- Product rule\n\n## Key Points\n- ...");
  const [sessionTime, setSessionTime] = useState(0);
  const [transcripts, setTranscripts] = useState([
    { time: "2:05", speaker: "Sarah", text: "Hey! Ready to start with calculus?" },
    { time: "2:06", speaker: "You", text: "Yes! Let's begin with derivatives." },
  ]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawTool, setDrawTool] = useState<"pen" | "eraser" | "circle" | "square" | "text">("pen");
  const [drawColor, setDrawColor] = useState("#7c3aed");

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setSessionTime(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message = {
      id: chatMessages.length + 1,
      sender: "You",
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isAI: false,
    };
    
    setChatMessages([...chatMessages, message]);
    setNewMessage("");

    // Simulate AI response if message contains "help" or "?"
    if (newMessage.toLowerCase().includes("help") || newMessage.includes("?")) {
      setTimeout(() => {
        setChatMessages(prev => [...prev, {
          id: prev.length + 1,
          sender: "AI Tutor",
          text: "I'd be happy to help! Let me explain that concept for you...",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isAI: true,
        }]);
      }, 1000);
    }
  };

  // Simple canvas drawing
  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    
    if (drawTool === "eraser") {
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 20;
    } else {
      ctx.strokeStyle = drawColor;
      ctx.lineWidth = 3;
    }
    ctx.lineCap = 'round';
    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div className="h-screen bg-foreground flex flex-col overflow-hidden">
      {/* Header */}
      <header className="h-16 bg-card/10 backdrop-blur-lg border-b border-white/10 flex items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-white/60 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-white font-semibold">Study Session with Sarah</h1>
            <div className="flex items-center gap-3 text-sm text-white/60">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {formatTime(sessionTime)}
              </span>
              <Badge variant="success" className="text-xs">Live</Badge>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
            <Users className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/10">
            <Settings className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-white/60 hover:text-white hover:bg-white/10"
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Video Area */}
        <div className="flex-1 p-4 flex flex-col gap-4">
          {/* Main Video */}
          <div className="flex-1 relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/60">
                <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <Video className="w-12 h-12" />
                </div>
                <p>Sarah's Video</p>
              </div>
            </div>
            
            {/* Self Video */}
            <div className="absolute bottom-4 right-4 w-48 aspect-video rounded-xl overflow-hidden bg-card/20 backdrop-blur border border-white/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white/60 text-sm">
                  {isVideoOn ? (
                    <p>Your Video</p>
                  ) : (
                    <>
                      <VideoOff className="w-8 h-8 mx-auto mb-2" />
                      <p>Camera Off</p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Transcript Overlay */}
            <div className="absolute bottom-4 left-4 right-56 bg-foreground/80 backdrop-blur rounded-xl p-3">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="accent" className="text-xs">Live Transcript</Badge>
              </div>
              <div className="space-y-1 text-sm text-white/80 max-h-20 overflow-y-auto">
                {transcripts.slice(-2).map((t, i) => (
                  <p key={i}>
                    <span className="text-white/60">[{t.time}]</span>{" "}
                    <span className="font-medium text-white">{t.speaker}:</span>{" "}
                    {t.text}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <Button
              variant={isMicOn ? "glass" : "destructive"}
              size="icon"
              className="w-14 h-14 rounded-full"
              onClick={() => setIsMicOn(!isMicOn)}
            >
              {isMicOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
            </Button>
            <Button
              variant={isVideoOn ? "glass" : "destructive"}
              size="icon"
              className="w-14 h-14 rounded-full"
              onClick={() => setIsVideoOn(!isVideoOn)}
            >
              {isVideoOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
            </Button>
            <Button
              variant="destructive"
              size="icon"
              className="w-14 h-14 rounded-full"
            >
              <PhoneOff className="w-6 h-6" />
            </Button>
            <div className="w-px h-10 bg-white/20 mx-2" />
            <Button
              variant={activePanel === "chat" ? "default" : "glass"}
              size="icon"
              className="w-12 h-12 rounded-full"
              onClick={() => setActivePanel(activePanel === "chat" ? null : "chat")}
            >
              <MessageSquare className="w-5 h-5" />
            </Button>
            <Button
              variant={activePanel === "whiteboard" ? "default" : "glass"}
              size="icon"
              className="w-12 h-12 rounded-full"
              onClick={() => setActivePanel(activePanel === "whiteboard" ? null : "whiteboard")}
            >
              <PenTool className="w-5 h-5" />
            </Button>
            <Button
              variant={activePanel === "notes" ? "default" : "glass"}
              size="icon"
              className="w-12 h-12 rounded-full"
              onClick={() => setActivePanel(activePanel === "notes" ? null : "notes")}
            >
              <FileText className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Side Panel */}
        {activePanel && (
          <div className="w-96 border-l border-white/10 bg-card/5 backdrop-blur flex flex-col animate-slide-up">
            {/* Chat Panel */}
            {activePanel === "chat" && (
              <>
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-white" />
                    <span className="font-semibold text-white">Chat</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/60 hover:text-white"
                    onClick={() => setActivePanel(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {chatMessages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${msg.sender === "You" ? "items-end" : "items-start"}`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {msg.isAI && <Brain className="w-4 h-4 text-primary" />}
                        <span className="text-xs text-white/60">{msg.sender}</span>
                        <span className="text-xs text-white/40">{msg.time}</span>
                      </div>
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                          msg.sender === "You"
                            ? "bg-primary text-primary-foreground"
                            : msg.isAI
                            ? "bg-primary/20 text-white border border-primary/30"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-4 border-t border-white/10">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="text-primary hover:bg-primary/20">
                      <Sparkles className="w-5 h-5" />
                    </Button>
                    <Input
                      placeholder="Type a message or ask AI..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                      className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                    <Button variant="default" size="icon" onClick={sendMessage}>
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                  <p className="text-xs text-white/40 mt-2 text-center">
                    Tip: Type "AI help" for instant assistance
                  </p>
                </div>
              </>
            )}

            {/* Whiteboard Panel */}
            {activePanel === "whiteboard" && (
              <>
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PenTool className="w-5 h-5 text-white" />
                    <span className="font-semibold text-white">Whiteboard</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/60 hover:text-white"
                    onClick={() => setActivePanel(null)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <div className="p-2 border-b border-white/10 flex items-center gap-2 flex-wrap">
                  {[
                    { tool: "pen" as const, icon: PenTool },
                    { tool: "eraser" as const, icon: Eraser },
                    { tool: "circle" as const, icon: Circle },
                    { tool: "square" as const, icon: Square },
                    { tool: "text" as const, icon: Type },
                  ].map(({ tool, icon: Icon }) => (
                    <Button
                      key={tool}
                      variant={drawTool === tool ? "default" : "ghost"}
                      size="icon"
                      className="w-9 h-9"
                      onClick={() => setDrawTool(tool)}
                    >
                      <Icon className="w-4 h-4" />
                    </Button>
                  ))}
                  <div className="w-px h-6 bg-white/20" />
                  <div className="flex gap-1">
                    {["#7c3aed", "#ef4444", "#22c55e", "#3b82f6", "#f59e0b"].map((color) => (
                      <button
                        key={color}
                        className={`w-6 h-6 rounded-full border-2 ${
                          drawColor === color ? "border-white" : "border-transparent"
                        }`}
                        style={{ backgroundColor: color }}
                        onClick={() => setDrawColor(color)}
                      />
                    ))}
                  </div>
                  <div className="w-px h-6 bg-white/20" />
                  <Button variant="ghost" size="icon" className="w-9 h-9" onClick={clearCanvas}>
                    <Eraser className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-9 h-9">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex-1 p-4">
                  <canvas
                    ref={canvasRef}
                    width={350}
                    height={400}
                    className="w-full h-full bg-white rounded-xl cursor-crosshair"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                  />
                </div>
              </>
            )}

            {/* Notes Panel */}
            {activePanel === "notes" && (
              <>
                <div className="p-4 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-white" />
                    <span className="font-semibold text-white">Session Notes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
                      <Download className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white/60 hover:text-white"
                      onClick={() => setActivePanel(null)}
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Take notes during your study session..."
                    className="w-full h-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 resize-none focus:outline-none focus:border-primary/50"
                  />
                </div>
                <div className="p-4 border-t border-white/10">
                  <Button variant="hero" className="w-full gap-2">
                    <Sparkles className="w-4 h-4" />
                    AI Summarize Session
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyRoom;
