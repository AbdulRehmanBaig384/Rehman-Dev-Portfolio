"use client";

import { ArrowUpRight, Braces, Layers3, Server, Smartphone } from "lucide-react";
import { AnimatedSectionHeading, Reveal3D, TiltCard } from "../animations";

const services = [
  { icon: Braces, title: "Frontend Development", description: "Responsive interfaces with considered layouts, purposeful motion, and the details that make an application feel right.", technologies: "React · Next.js · TypeScript" },
  { icon: Server, title: "Backend Development", description: "APIs, authentication, and database integrations that give your product a dependable foundation.", technologies: "Node.js · Express · MongoDB" },
  { icon: Smartphone, title: "Mobile Application Development", description: "Cross-platform applications with smooth interactions and a consistent experience across devices.", technologies: "React Native · Expo · Firebase" },
  { icon: Layers3, title: "Full-Stack Solutions", description: "Connecting thoughtful frontend experiences with the server-side systems that bring them to life.", technologies: "MERN · REST APIs · PostgreSQL" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section services-section">
      <div className="shell">
        <AnimatedSectionHeading number="06" eyebrow="WHAT I BRING TO THE TABLE" title="From first idea to final interaction." description="One engineering mindset. Across the entire product." />
        <div className="services-grid">
          {services.map(({ icon: Icon, title, description, technologies }, index) => (
            <Reveal3D key={title} direction={index % 2 ? "right" : "left"} delay={(index % 2) * 0.1}>
              <TiltCard className="service-card">
                <div className="service-card-top"><span className="service-icon"><Icon size={26} strokeWidth={1.5} aria-hidden="true" /></span><span className="service-number">0{index + 1}</span></div>
                <h3>{title}</h3><p>{description}</p><span className="service-technologies">{technologies}</span>
                <a href="#contact" className="service-link" aria-label={`Discuss ${title.toLowerCase()}`}>Let’s build <ArrowUpRight size={17} aria-hidden="true" /></a>
              </TiltCard>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
}
