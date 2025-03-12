
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const phrases = [
  "Stories",
  "Ideas",
  "Voices",
  "Imagination",
  "Worlds",
];

const Hero = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsAnimating(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-secondary/20">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-primary"></div>
        <div className="absolute right-1/4 bottom-1/4 h-48 w-48 rounded-full bg-accent"></div>
        <div className="absolute left-2/3 top-1/2 h-24 w-24 rounded-full bg-muted"></div>
      </div>
      
      <div className="container max-w-5xl px-6 md:px-10 relative z-10 py-20 md:py-0">
        <div className="text-center">
          <div className="mb-6 inline-block">
            <span className="pill animate-fade-in">Premium Publishing House</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-semibold tracking-tight text-primary mb-6 md:mb-8">
            <span>We Publish </span>
            <span className="relative">
              <span 
                className={`inline-block transition-opacity duration-500 ${isAnimating ? 'opacity-100' : 'opacity-0'}`}
              >
                {phrases[currentPhraseIndex]}
              </span>
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary/30"></span>
            </span>
            <br />
            <span>That Inspire The World</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in delay-200 text-balance">
            A premier publishing house dedicated to bringing exceptional literary works to readers worldwide. Where words become experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up delay-300">
            <Button size="lg" className="px-8 py-6">
              Explore Books <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6">
              Submit Manuscript
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
