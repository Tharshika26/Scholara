import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, BookOpen, BrainCircuit, Sparkles, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[120px] rounded-full -z-10"></div>
        
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">The future of research is here</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
            Elevate Your Research with <br className="hidden md:block" />
            <span className="text-gradient">Scholara AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            A premium ecosystem to discover, read, and interact with cutting-edge research papers. Powered by advanced AI to help you understand complex concepts instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <Link href="/register" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-auto h-14 px-8 rounded-xl text-base shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:-translate-y-1")}>
              Start Exploring Free <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link href="#features" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "w-full sm:w-auto h-14 px-8 rounded-xl text-base glass border-white/10 hover:bg-white/5 transition-all")}>
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Everything you need to <span className="text-primary">excel</span></h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Our platform provides state-of-the-art tools designed specifically for researchers, students, and academics.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-8 rounded-3xl hover:bg-white/[0.02] transition-colors border border-white/5 hover:border-primary/30 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Vast Library</h3>
              <p className="text-muted-foreground leading-relaxed">Access thousands of peer-reviewed papers across various disciplines. Buy, download, and organize seamlessly.</p>
            </div>
            
            <div className="glass p-8 rounded-3xl hover:bg-white/[0.02] transition-colors border border-white/5 hover:border-primary/30 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative z-10">
                <BrainCircuit className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">AI Research Assistant</h3>
              <p className="text-muted-foreground leading-relaxed relative z-10">Chat with any paper using our advanced RAG pipeline. Ask questions, get summaries, and understand complex methodologies instantly.</p>
            </div>
            
            <div className="glass p-8 rounded-3xl hover:bg-white/[0.02] transition-colors border border-white/5 hover:border-primary/30 group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Verified</h3>
              <p className="text-muted-foreground leading-relaxed">All uploaded papers go through rigorous admin moderation. Secure payments via PayHere and trusted OTP verifications.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="glass rounded-[3rem] p-12 md:p-20 text-center border-primary/20 bg-primary/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your workflow?</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">Join thousands of researchers who are already using Scholara to accelerate their discoveries.</p>
            <Link href="/register" className={cn(buttonVariants({ size: "lg" }), "h-14 px-10 rounded-xl text-lg shadow-xl shadow-primary/20 hover:-translate-y-1 transition-transform")}>
              Create Your Free Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
