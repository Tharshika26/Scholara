import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back</h1>
        <p className="text-muted-foreground">Enter your credentials to access your account</p>
      </div>
      
      <form className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="name@example.com" 
            required 
            className="h-12 bg-background/50 border-white/10 focus-visible:ring-primary/50 transition-all"
          />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link href="#" className="text-sm text-primary hover:underline font-medium">
              Forgot password?
            </Link>
          </div>
          <Input 
            id="password" 
            type="password" 
            required 
            className="h-12 bg-background/50 border-white/10 focus-visible:ring-primary/50 transition-all"
          />
        </div>
        
        <Button type="submit" className="w-full h-12 rounded-xl text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:-translate-y-0.5">
          Sign In
        </Button>
      </form>
      
      <div className="mt-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-primary hover:underline font-medium">
          Sign up for free
        </Link>
      </div>
    </div>
  );
}
