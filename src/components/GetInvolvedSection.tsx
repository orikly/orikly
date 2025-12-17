import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const GetInvolvedSection = () => {
  const involvementOptions = [
    "becoming a member",
    "participating as a volunteer",
    "partnering on educational or social initiatives",
    "supporting the development of new projects"
  ];

  return (
    <section id="get-involved" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            <Users className="w-4 h-4" />
            Get Involved
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">
            Join Our Community
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl border border-border shadow-soft p-8 md:p-12">
            <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8">
              <span className="font-display font-bold text-primary">Orikly</span> is open to collaboration and participation.
            </p>

            <p className="text-muted-foreground text-lg mb-6">
              You can get involved by:
            </p>

            <ul className="space-y-3 mb-8">
              {involvementOptions.map((option, index) => (
                <li 
                  key={index}
                  className="flex items-start gap-3 text-foreground"
                >
                  <span className="w-2 h-2 mt-2.5 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-lg">{option}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-lg leading-relaxed">
              We value long-term cooperation and shared responsibility in building meaningful educational solutions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="hero" size="lg">
            Join Our Journey
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
