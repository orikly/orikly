import { Target, Lightbulb, Heart, Users } from "lucide-react";

const MissionSection = () => {
  const features = [
    // {
    //   icon: Target,
    //   title: "Our Aim",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    // },
    // {
    //   icon: Lightbulb,
    //   title: "Our Vision",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat."
    // },
    {
    icon: Heart,
    title: "Core Values",
    description: (
      <ul className="list-disc pl-5 space-y-2">
        <li><strong>Accessibility</strong> — education and technology should be available to everyone</li>
        <li><strong>Inclusion</strong> — equal opportunities regardless of background, language or ability</li>
        <li><strong>Social responsibility</strong> — technology must serve people and communities</li>
        <li><strong>Empathy and participation</strong> — learning as a shared and human-centered process</li>
        <li><strong>Integrity</strong> — transparency, accountability and non-profit principles</li>
      </ul>
      )
    },
    {
      icon: Users,
      title: "Created for",
      description: (
      <ul className="list-disc pl-5 space-y-2">
        <li> young people and students</li>
        <li> people living in remote or underserved areas</li>
        <li> people with disabilities or limited mobility</li>
        <li> individuals with limited access to educational content in their native language</li>
        <li> migrants and displaced people integrating into new societies</li>
      </ul>
      )
    }
  ];

  const whatWeDoFeatures = [
    // {
    //   icon: Target,
    //   title: "Our Aim",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    // },
    // {
    //   icon: Lightbulb,
    //   title: "Our Vision",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat."
    // },
    {
      icon: Target,
      title: "Our areas of work",
      description: (
      <ul className="list-disc pl-5 space-y-2">
        <li> digital and inclusive education</li>
        <li> reduction of linguistic and digital barriers</li>
        <li> application of immersive and interactive technologies in learning</li>
        <li> support for social integration and participation</li>
        <li> international cooperation and knowledge exchange</li>
      </ul>
      )
    },

    {
      icon: Lightbulb,
      title: "Intended Impact",
      description: (
      <ul className="list-disc pl-5 space-y-2">
        <li> expand access to digital learning experiences</li>
        <li> reduce educational, linguistic and technological barriers</li>
        <li> supporting digital literacy and critical thinking</li>
        <li> foster creativity, empathy and social participation</li>
        <li> strengthen schools and community spaces as inclusive environments for learning</li>
      </ul>
      )
    },

  ];

  return (
    [
    <section id="mission" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            About Orikly
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            Our Mission & Purpose
          </h2>
          {/* <p className="text-muted-foreground text-lg max-w-3xl mx-auto whitespace-pre-line"> */}
          {/* <p className="text-lg text-muted-foreground leading-relaxed"> */}
          <p className="text-muted-foreground text-lg max-w-5xl mx-auto whitespace-pre-line">
            Orikly is a non-profit organization dedicated to expanding access to education, digital tools
            and inclusive learning opportunities through the responsible use of modern technologies.
            {"\n"}
            {"\n"}
          </p>
          {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto 1"> */}
          {/* <p className="text-lg text-muted-foreground leading-relaxed"> */}
          <p className="text-muted-foreground text-lg max-w-5xl mx-auto">
            Our mission is to reduce educational, linguistic and digital barriers by developing innovative,
            technology-supported initiatives that foster learning, creativity, empathy and social participation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-primary-glow">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>,

    <section id="whatWeDo" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
            What We Do
          </h2>
          {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto whitespace-pre-line"> */}
          {/* <p className="text-lg text-muted-foreground leading-relaxed"> */}
          <p className="text-muted-foreground text-lg max-w-5xl mx-auto whitespace-pre-line">
            Orikly develops and supports educational and social initiatives that combine learning, 
            technology and community engagement.
            {/* {"\n"}
            {"\n"} */}
          </p>
          {/* <p className="text-muted-foreground text-lg max-w-2xl mx-auto 1"> */}
          {/* <p className="text-lg text-muted-foreground leading-relaxed"> */}
          <p className="text-muted-foreground text-lg max-w-5xl mx-auto">
            We focus on practical, adaptable formats that can be implemented in schools, 
            cultural institutions and community-based educational spaces.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {whatWeDoFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-primary-glow">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto whitespace-pre-line">
            {"\n"}
            {"\n"}
            Our impact is conceived as systemic and long-term, evolving through pilot initiatives, 
            partnerships and continuous learning.
          </p>
        </div>


      </div>
    </section>


    



    
  ]);
};

export default MissionSection;


