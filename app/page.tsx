import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import AboutSection from "./components/sections/AboutSection";
import TechStackSection from "./components/sections/TechStackSection";
import JourneySection from "./components/sections/JourneySection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import CinematicTransitions from "./components/animations/CinematicTransitions";

export default function Home() {
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TechStackSection />
      <JourneySection />
      <ServicesSection />
      <ContactSection />
    </main>
    <CinematicTransitions />
    <Footer />
  </>;
}
