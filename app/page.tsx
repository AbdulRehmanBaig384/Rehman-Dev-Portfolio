"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./components/SectionTitle";
import TechBadge from "./components/TechBadge";
import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects";
import ServicesSection from "./components/ServicesSection";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import ExperiencePage from "./components/Experience";
import Contact from "./components/Contact";
import IntroScreen from "./components/IntroScreen";
import SocialSidebar from "./components/SocialSiderbar";
const SECTIONS = [
  { id: "hero" },
  { id: "about" },
  { id: "tech" },
  { id: "education" },
  { id: "experience" },
  { id: "services" },
  { id: "projects" },
  { id: "contact" },
];
export default function Home() {
  const [introFinished, setIntroFinished] = useState(false);
  const [particlesLoaded, setParticlesLoaded] = useState(false);
  const particlesOptions = {
  background: { color: { value: "transparent" } },
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: { enable: true },
    },
    modes: { repulse: { distance: 120, duration: 0.4 } },
  },
  particles: {
    color: { value: ["#00d4ff", "#007bff", "#7c5cff"] },
    links: { color: "#00d4ff", distance: 150, enable: true, opacity: 0.25, width: 1 },
    move: { enable: true, speed: 1.2, outModes: {default:"bounce" } as const }, 
    number: { density: { enable: true, area: 800 }, value: 80 },
    opacity: { value: 0.5 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};
  const [activeSection, setActiveSection] = useState("hero");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.55 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      className="relative min-h-screen overflow-hidden text-white scroll-smooth">
        {!introFinished && <IntroScreen onFinish={() => setIntroFinished(true)} />}
       {introFinished && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10">
        </motion.div>)}
      {particlesLoaded && <Particles id="particles-bg" options={particlesOptions} />}
      {/* left side portion  */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {SECTIONS.map((s) => (
          <button key={s.id} onClick={() =>
              document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" })}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === s.id
                ? "bg-[#00d4ff] scale-150 shadow-[0_0_15px_rgba(0,212,255,0.7)]"
                : "bg-gray-500/60 hover:scale-110"
            }`}/>
        ))}
      </div>
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>
      <SocialSidebar/>
      <section id="about">
        <About />
      </section>
      <section id="tech">
        <TechStack />
      </section>
      <section id="education">
        <Education />
      </section>

      <section id="experience">
        <ExperiencePage />
      </section>
         <section id="services">
        <ServicesSection />
      </section>

      <section id="projects">
        <ProjectCard  />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </motion.main>
  );
}

//                 ? "bg-[#00d4ff] scale-
//                 : "bg-gray-500/60 hover:scale-110"
//             }`}
//           />
//         ))}
//       </div>

//           {/* 🔹 Navbar */}
//           <Navbar />

//           {/* Sections */}
//           <section id="hero"><HeroSection /></section>
//           <section id="about"><About /></section>
//           <section id="services"><ServicesSection /></section>
//           <section id="tech"><TechStack /></section>
//           <section id="education"><Education /></section>
//           <section id="experience"><ExperiencePage /></section>
//           <section id="projects"><ProjectCard projects={projects} /></section>
//           <section id="contact"><Contact /></section>

//         </motion.div>
//       )}
//     </motion.main>
//   );
// }
``
