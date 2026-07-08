import Link from "next/link";
import { GraduationCap, MessageCircle, Globe, Users } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background/80 backdrop-blur-xl pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="bg-primary/20 p-2 rounded-xl group-hover:bg-primary/30 transition-colors">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">Scholara</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              AI-powered research paper management and interaction platform for the modern scholar.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300">
                <MessageCircle className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 duration-300">
                <Users className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">AI Assistant</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Integration</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Scholara. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="text-xs text-muted-foreground/60">Designed with precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
