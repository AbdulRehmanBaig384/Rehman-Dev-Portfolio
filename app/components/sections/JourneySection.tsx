"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { ArrowDownRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { education, experience, type JourneyEntry } from "../../data/journey";
import { AnimatedSectionHeading, Reveal3D, TiltCard } from "../animations";

function Timeline({ entries, kind }: { entries: JourneyEntry[]; kind: "experience" | "education" }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 70%"] });
  const Icon = kind === "experience" ? BriefcaseBusiness : GraduationCap;
  return (
    <div className="journey-timeline" ref={ref}>
      <div className="journey-line" aria-hidden="true"><motion.div style={{ scaleY: reducedMotion ? 1 : scrollYProgress }} /></div>
      {entries.map((entry, index) => (
        <div className={`journey-entry ${index % 2 ? "journey-entry-right" : "journey-entry-left"}`} key={`${entry.organization}-${entry.date}`}>
          <span className="journey-node" aria-hidden="true"><Icon size={15} /></span>
          <Reveal3D direction={index % 2 ? "right" : "left"}>
            <TiltCard className="journey-card">
              <div className="journey-card-meta"><span>{entry.date}</span>{index === 0 && kind === "experience" && <span className="journey-current">CURRENT</span>}</div>
              <h3>{entry.title}</h3>
              <p className="journey-organization">{entry.organization}</p>
              {entry.location && <span className="journey-location">{entry.location}</span>}
              <p className="journey-summary">{entry.summary}</p>
              <details className="journey-details">
                <summary aria-label={`Explore ${entry.title} at ${entry.organization}`}>{kind === "experience" ? "Explore the role" : "Explore the curriculum"}<ArrowDownRight size={16} aria-hidden="true" /></summary>
                <div className="journey-details-content"><ul>{entry.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><div className="journey-technologies">{entry.technologies?.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div></div>
              </details>
            </TiltCard>
          </Reveal3D>
        </div>
      ))}
    </div>
  );
}

export default function JourneySection() {
  return (
    <>
      <section id="experience" className="section journey-section">
        <div className="shell">
          <AnimatedSectionHeading number="04" eyebrow="THE JOURNEY SO FAR" title="Learning by building." description="Real projects. New challenges. A little better with every iteration." />
          <Timeline entries={experience} kind="experience" />
        </div>
      </section>
      <section id="education" className="section journey-section education-section">
        <div className="shell">
          <AnimatedSectionHeading number="05" eyebrow="THE FOUNDATIONS" title="Curiosity, with a curriculum." description="Building the foundations for thoughtful, dependable software." />
          <Timeline entries={education} kind="education" />
        </div>
      </section>
    </>
  );
}
