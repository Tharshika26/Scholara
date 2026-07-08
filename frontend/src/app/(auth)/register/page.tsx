import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RegisterPage() {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Create an account</h1>
        <p className="text-muted-foreground">Join Scholara and elevate your research journey</p>
      </div>
      
      <form className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input 
            id="fullName" 
            placeholder="John Doe" 
            required 
            className="h-11 bg-background/50 border-white/10 focus-visible:ring-primary/50 transition-all"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="name@example.com" 
            required 
            className="h-11 bg-background/50 border-white/10 focus-visible:ring-primary/50 transition-all"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input 
            id="phone" 
            type="tel" 
            placeholder="+1 (555) 000-0000" 
            required 
            className="h-11 bg-background/50 border-white/10 focus-visible:ring-primary/50 transition-all"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input 
            id="password" 
            type="password" 
            required 
            className="h-11 bg-background/50 border-white/10 focus-visible:ring-primary/50 transition-all"
          />
          <p className="text-xs text-muted-foreground mt-1">Must be at least 8 characters long</p>
        </div>
        
        <Button type="submit" className="w-full h-12 rounded-xl text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5 mt-2">
          Create Account
        </Button>
      </form>
      
      <div className="mt-8 text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline font-medium">
          Sign in
        </Link>
      </div>
    </div>
  );
}
