import { Link } from "react-router-dom";
import { GraduationCap, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">StudyBuddy</span>
            </Link>
            <p className="text-background/60 max-w-sm">
              Connecting students worldwide for collaborative learning experiences. Study smarter, not harder.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-background/60 hover:text-background transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-background/60 hover:text-background transition-colors">Pricing</Link></li>
              <li><Link to="/mobile" className="text-background/60 hover:text-background transition-colors">Mobile App</Link></li>
              <li><Link to="/integrations" className="text-background/60 hover:text-background transition-colors">Integrations</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-background/60 hover:text-background transition-colors">Blog</Link></li>
              <li><Link to="/guides" className="text-background/60 hover:text-background transition-colors">Study Guides</Link></li>
              <li><Link to="/community" className="text-background/60 hover:text-background transition-colors">Community</Link></li>
              <li><Link to="/support" className="text-background/60 hover:text-background transition-colors">Support</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-background/60 hover:text-background transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-background/60 hover:text-background transition-colors">Careers</Link></li>
              <li><Link to="/privacy" className="text-background/60 hover:text-background transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-background/60 hover:text-background transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © 2025 StudyBuddy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-background/60 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-background/60 hover:text-background transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="text-sm text-background/60 hover:text-background transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
