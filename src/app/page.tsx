import Hero from "@/components/landing/Hero";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/ui/grid-pattern";
import Navbar from "@/components/commons/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 -translate-x-1/2 h-[400px] w-[800px] rounded-full blur-[100px] dark:bg-blue-700/20" />
  
        <GridPattern
          x={-1}
          y={-1}
          className={cn(
            "opacity-50",
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
          )}
        />
      </div>

      <Navbar />
      <Hero />
    </div>
  );
}