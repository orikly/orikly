import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import TransparencySection from "@/components/TransparencySection";

import ProjectSection from "@/components/ProjectSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <TransparencySection />
        <ProjectSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
