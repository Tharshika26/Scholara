import { GraduationCap } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex">
      {/* Left side - Auth Form */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <Link href="/" className="flex items-center gap-2 mb-10 group w-fit">
            <div className="bg-primary/20 p-2 rounded-xl group-hover:bg-primary/30 transition-colors">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <span className="text-xl font-bold text-foreground">Scholara</span>
          </Link>
          {children}
        </div>
      </div>
      
      {/* Right side - Image/Decoration */}
      <div className="hidden lg:flex flex-1 relative w-0 bg-primary/5 items-center justify-center p-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background"></div>
        <div className="relative z-10 w-full max-w-lg glass p-12 rounded-[2.5rem] border-primary/20 shadow-2xl shadow-primary/10">
          <h2 className="text-3xl font-bold mb-4">Empower Your Research Journey.</h2>
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Join the premier platform for discovering, organizing, and interacting with academic papers using advanced AI capabilities.
          </p>
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center backdrop-blur-md">
                <span className="text-xs font-bold text-primary">UI</span>
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-background bg-secondary flex items-center justify-center z-10">
              <span className="text-xs font-bold">10k+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
