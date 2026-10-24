import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/projects/ProjectsSection";
import AboutSection from "./components/sections/AboutSection";
import TechStackSection from "./components/sections/TechStackSection";
import JourneySection from "./components/sections/JourneySection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Navbar />
    <main id="main-content">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <TechStackSection />
      <JourneySection />
      <ServicesSection />
      <ContactSection />
    </main>
    <Footer />
  </>;
}
