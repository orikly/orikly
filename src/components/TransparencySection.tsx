import { Shield, Users, Eye, Target } from "lucide-react";

const principles = [
  { icon: Target, text: "mission-driven and non-commercial" },
  { icon: Users, text: "governed by a General Assembly and a Board" },
  { icon: Eye, text: "committed to transparency, accountability and ethical governance" },
  { icon: Shield, text: "dedicated to using all resources exclusively for its statutory objectives" },
];

const TransparencySection = () => {
  return (
    <section id="transparency" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Our Commitment
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Transparency & Governance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Orikly operates as a non-profit organization in accordance with its statutes and the applicable legal framework.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              The organization is:
            </h3>
            <ul className="space-y-4">
              {principles.map((principle, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <principle.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-muted-foreground pt-2">{principle.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransparencySection;