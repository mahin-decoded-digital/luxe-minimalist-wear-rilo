import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToCollection = () => {
    const element = document.getElementById("the-edit");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#1f2937]">
      {/* Background Image / Cinematic Feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://placehold.co/1920x1080/1f2937/f8fafc?text=Cinematic+Campaign+Image"
          alt="Luxury Fashion Campaign"
          className="w-full h-full object-cover opacity-80 scale-105 animate-[pulse_15s_ease-in-out_infinite_alternate]"
        />
        {/* Subtle Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-transparent to-slate-950/70" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 animate-in fade-in slide-in-from-bottom-10 duration-[1500ms] ease-out fill-mode-forwards">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-[0.25em] text-white mb-6 uppercase">
          Atelier
        </h1>
        <p className="text-sm md:text-base tracking-[0.4em] text-white/80 mb-12 uppercase font-light">
          Fall / Winter Collection
        </p>

        <Button
          variant="outline"
          size="lg"
          onClick={scrollToCollection}
          className="bg-transparent text-white border-white/60 hover:border-white/80 hover:bg-white/10 hover:text-white transition-all duration-700 tracking-[0.2em] uppercase text-xs px-10 py-7 rounded-none"
        >
          Discover Collection
        </Button>
      </div>

      {/* Minimalist Scroll Hint */}
      <div className="absolute bottom-12 z-10 animate-bounce text-white/60">
        <ArrowDown className="w-6 h-6 stroke-[1.2]" />
      </div>
    </section>
  );
}