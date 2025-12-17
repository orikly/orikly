import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Education for Ages 8-16</span>
          </div> */}

          {/* Main Heading */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 animate-fade-up-delay">
            <span className="text-foreground">Welcome to </span>
            <span className="text-gradient">Orikly</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
            Empowering young minds through innovative and engaging educational experiences. 
            Learn, grow, and discover your potential with us.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-2">
            <Button variant="hero" size="lg">
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto animate-fade-up-delay-2">
            <div className="text-center">
              {/* <div className="font-display font-bold text-3xl text-primary">8-16</div>
              <div className="text-sm text-muted-foreground mt-1">Age Range</div> */}
            </div>
            <div className="text-center">
              {/* <div className="font-display font-bold text-3xl text-accent">Fun</div>
              <div className="text-sm text-muted-foreground mt-1">Learning</div> */}
            </div>
            <div className="text-center">
              {/* <div className="font-display font-bold text-3xl text-primary">100%</div>
              <div className="text-sm text-muted-foreground mt-1">Engaging</div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            className="fill-background"
          />
        </svg>
      </div> */}
    </section>
  );
};

export default HeroSection;
