"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowUpRight, Layers3 } from "lucide-react";
import {
  SiDocker, SiExpress, SiGit, SiJavascript, SiMongodb, SiNextdotjs,
  SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript,
} from "react-icons/si";
import { AnimatedSectionHeading, Reveal3D, TiltCard } from "../animations";
import "../../styles/tech-stack.css";

const technologies = [
  { name: "React", category: "Interface engineering", icon: SiReact, color: "#dededb", description: "Component-driven interfaces that turn complex application flows into clear, reusable experiences.", tags: ["Components", "State", "Interactions"] },
  { name: "Next.js", category: "Web applications", icon: SiNextdotjs, color: "#dededb", description: "A React framework for building web applications with routing, server rendering, and a considered approach to performance.", tags: ["Routing", "Rendering", "Performance"] },
  { name: "TypeScript", category: "Developer experience", icon: SiTypescript, color: "#dededb", description: "Explicit types and useful tooling that make application code easier to understand, refactor, and maintain.", tags: ["Type safety", "Tooling", "Maintainability"] },
  { name: "JavaScript", category: "The foundations", icon: SiJavascript, color: "#dededb", description: "The language connecting interactive browser experiences, asynchronous application logic, and server-side development.", tags: ["Web platform", "Async logic", "ES modules"] },
  { name: "Node.js", category: "Backend development", icon: SiNodedotjs, color: "#dededb", description: "JavaScript beyond the browser, powering application services, API integrations, and backend workflows.", tags: ["Services", "Integrations", "APIs"] },
  { name: "Express.js", category: "API architecture", icon: SiExpress, color: "#dededb", description: "A focused foundation for HTTP services, with composable routing and middleware for application APIs.", tags: ["REST", "Middleware", "Routing"] },
  { name: "React Native", category: "Mobile development", icon: SiReact, color: "#dededb", description: "React-based mobile interfaces with shared application logic and experiences shaped for touch and smaller screens.", tags: ["Mobile", "Cross-platform", "Expo"] },
  { name: "MongoDB", category: "Application data", icon: SiMongodb, color: "#dededb", description: "Document-based storage for flexible application data, working naturally with JavaScript-powered backends.", tags: ["Documents", "NoSQL", "Application data"] },
  { name: "PostgreSQL", category: "Relational data", icon: SiPostgresql, color: "#dededb", description: "Relational storage for structured data, expressive SQL queries, and carefully defined relationships.", tags: ["SQL", "Relations", "Data integrity"] },
  { name: "Docker", category: "Development workflow", icon: SiDocker, color: "#dededb", description: "Containerized environments that keep application dependencies and development setups consistent.", tags: ["Containers", "Environments", "Consistency"] },
  { name: "Git", category: "Version control", icon: SiGit, color: "#dededb", description: "A reliable history of changes, with branches and collaboration workflows that support thoughtful software development.", tags: ["Versioning", "Branches", "Collaboration"] },
  { name: "Tailwind CSS", category: "Interface design", icon: SiTailwindcss, color: "#dededb", description: "A utility-first approach to building consistent, responsive interfaces with a shared visual language.", tags: ["Responsive UI", "Design systems", "Styling"] },
];

export default function TechStackSection() {
  const [selected, setSelected] = useState(0);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const technology = technologies[selected];
  const SelectedIcon = technology.icon;

  function navigate(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % technologies.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index + technologies.length - 1) % technologies.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = technologies.length - 1;
    else return;
    event.preventDefault();
    buttonRefs.current[next]?.focus();
  }

  return (
    <section id="tech" className="section tech-section" aria-labelledby="tech-section-title">
      <div className="shell">
        <div id="tech-section-title">
          <AnimatedSectionHeading number="03" eyebrow="THE TOOLKIT" title="Different tools. One connected vision." description="From the first component to the final deployment. The technologies behind my work." />
        </div>
        <div className="tech-composition">
          <div className="tech-grid-wrap">
            <div className="tech-node-list" role="group" aria-label="Explore the technology stack. Use Tab or arrow keys to choose a technology.">
              {technologies.map((item, index) => {
                const Icon = item.icon;
                return <Reveal3D key={item.name} delay={(index % 3) * 0.06}>
                  <TiltCard>
                    <button ref={(element) => { buttonRefs.current[index] = element; }} type="button" className={`tech-node${selected === index ? " is-selected" : ""}`} aria-pressed={selected === index} aria-controls="technology-detail" onMouseEnter={() => setSelected(index)} onFocus={() => setSelected(index)} onClick={() => setSelected(index)} onKeyDown={(event) => navigate(event, index)}>
                      <span className="tech-card-index">{String(index + 1).padStart(2, "0")}</span><Icon aria-hidden="true" size={27} /><span>{item.name}</span><ArrowUpRight className="tech-card-arrow" size={13} aria-hidden="true" />
                    </button>
                  </TiltCard>
                </Reveal3D>;
              })}
            </div>
            <p className="tech-orbit-caption">Select a technology to explore. <span className="tech-keyboard-hint">Tab + arrow keys work, too.</span></p>
          </div>
          <Reveal3D direction="right" className="tech-detail-reveal">
            <TiltCard className="tech-detail-tilt">
              <div className="tech-detail" id="technology-detail" aria-live="polite" aria-atomic="true">
                <div className="tech-detail-top"><span className="eyebrow">IN THE STACK</span><span className="tech-detail-count">{String(selected + 1).padStart(2, "0")} / 12</span></div>
                <div className="tech-detail-icon" style={{ color: technology.color }}><SelectedIcon size={38} aria-hidden="true" /></div>
                <span className="tech-detail-category">{technology.category}</span>
                <h3>{technology.name}</h3>
                <p>{technology.description}</p>
                <div className="tech-detail-tags">{technology.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                <a className="tech-detail-link" href="#projects">See it in the work <ArrowUpRight size={16} aria-hidden="true" /></a>
              </div>
            </TiltCard>
            <div className="tech-principle"><Layers3 size={18} aria-hidden="true" /><p>The stack changes.<br /><strong>The focus stays on the experience.</strong></p></div>
          </Reveal3D>
        </div>
      </div>
    </section>
  );
}
