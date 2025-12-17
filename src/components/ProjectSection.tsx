import { Rocket, CheckCircle2, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectSection = () => {
  const milestones = [
    {
      status: "completed",
      title: "Research & Planning",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      status: "in-progress",
      title: "Content Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod."
    },
    {
      status: "upcoming",
      title: "Platform Launch",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut labore."
    },
    {
      status: "upcoming",
      title: "Community Building",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit magna aliqua."
    }
  ];

  return (
    <section id="project" className="py-24 bg-secondary/30 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            <Rocket className="w-4 h-4" />
            Our Project
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Pilot project
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            This pilot initiative explores how virtual reality (VR) can be used as an inclusive educational tool 
            to support digital literacy, creativity and participation among young people in schools and community-based educational spaces.


          </p>
        </div>

        {/* Project Overview Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-card rounded-3xl border border-border shadow-soft overflow-hidden">
            {/* Card Header */}
            <div className="bg-hero-gradient p-8 text-primary-foreground">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                  <Rocket className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-2xl">In development</h3>
                  <p className="opacity-90">Educational Platform</p>
                </div>
              </div>
              <p className="opacity-90 leading-relaxed whitespace-pre-line">
              The project introduces children and adolescents (ages 6–17) to VR through guided, 
              age-appropriate sessions. Activities combine immersive experiences with reflection and discussion, 
              promoting responsible and meaningful engagement with digital technologies.
              {"\n"}
              {"\n"}
              By using VR as a learning tool — not as an end in itself — the project aims to reduce barriers to 
              digital experiences and support inclusive access to innovative educational formats.
              </p>
            </div>

            {/* What Needs To Be Done */}
            {/* <div className="p-8">
              <h4 className="font-display font-bold text-lg text-foreground mb-6">
                What Needs To Be Done
              </h4>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className={`mt-0.5 ${
                      milestone.status === 'completed' ? 'text-primary' : 
                      milestone.status === 'in-progress' ? 'text-accent' : 
                      'text-muted-foreground'
                    }`}>
                      {milestone.status === 'completed' ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <Clock className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-display font-semibold text-foreground">
                          {milestone.title}
                        </h5>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          milestone.status === 'completed' ? 'bg-primary/10 text-primary' :
                          milestone.status === 'in-progress' ? 'bg-accent/10 text-accent' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {milestone.status === 'completed' ? 'Completed' :
                           milestone.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg">
            Join Our Journey
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
