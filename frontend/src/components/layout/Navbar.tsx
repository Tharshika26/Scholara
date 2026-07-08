import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GraduationCap, LogIn, UserPlus } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
        >
          <div className="bg-primary/20 p-2 rounded-xl group-hover:bg-primary/30 transition-colors">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            Scholara
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link href="#features" className="hover:text-primary transition-colors hover:-translate-y-0.5 duration-300 inline-block">Features</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors hover:-translate-y-0.5 duration-300 inline-block">Pricing</Link>
          <Link href="#about" className="hover:text-primary transition-colors hover:-translate-y-0.5 duration-300 inline-block">About</Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/login" className={cn(buttonVariants({ variant: "ghost" }), "hidden md:flex rounded-xl hover:bg-primary/10 transition-colors")}>
            <LogIn className="mr-2 h-4 w-4" />
            Sign in
          </Link>
          <Link href="/register" className={cn(buttonVariants(), "rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 duration-300")}>
            <UserPlus className="mr-2 h-4 w-4" />
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
