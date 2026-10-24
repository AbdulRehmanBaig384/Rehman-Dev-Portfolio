"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight, AudioLines, BookOpen, CalendarDays, Check, Code2, ExternalLink, Github, Layers3, MessageCircle, ShoppingBag, Smartphone, X } from "lucide-react";
import { AnimatedSectionHeading, Reveal3D, TiltCard } from "../animations";
import projects, { projectFilters, type Project, type ProjectFilter } from "../../data/projects";
import "../../styles/projects.css";

const projectIcons = { mathani: BookOpen, postautopilot: CalendarDays, studysync: MessageCircle, shopease: ShoppingBag, "voice-todo": AudioLines, "maze-solver": Code2, portfolio: Layers3 };

const previewFiles: Record<string, string> = { mathani: "mathani", postautopilot: "postautopilot", studysync: "StudySync", shopease: "shopease", "voice-todo": "voiceTodo", "maze-solver": "virtualmaze", portfolio: "portfolio" };

function ProjectPreview({ project, number, onOpen }: { project: Project; number: string; onOpen: () => void }) {
  const Icon = projectIcons[project.id as keyof typeof projectIcons];
  return (
    <TiltCard className={`project-stage project-stage-${project.id}`} style={{ "--project-accent": project.accent, "--project-glow": project.glow } as CSSProperties}>
      <div className="project-stage-grid" aria-hidden="true" />
      <span className="project-stage-number" aria-hidden="true">{number}</span>
      <div className="project-preview-label"><span className="project-preview-dot" />{project.id === "mathani" ? "DESIGNED FOR EVERYDAY CONNECTION" : "A CLOSER LOOK"}</div>
      {project.id === "mathani" ? (
        <div className="mathani-composition">
          <div className="mathani-wordmark" aria-hidden="true"><BookOpen size={31} strokeWidth={1.25} /><strong>Mathani<span>Meaningful moments.<br />One verse at a time.</span></strong></div>
          <div className="project-phone">
            <div className="project-phone-speaker" />
            <div className="mathani-screen-excerpt">
              <Image src={project.image} alt="Reading screen excerpt from the supplied Mathani store screenshot" sizes="1883px" className="mathani-source-image" />
            </div>
            <div className="project-phone-bottom"><span /> <BookOpen size={16} /> <span /></div>
          </div>
          <span className="project-floating-note mathani-note"><AudioLines size={17} /><span>Read. Listen. Reflect.</span></span>
        </div>
      ) : (
        <div className="project-browser">
          <div className="project-browser-bar"><div className="project-browser-dots"><i /><i /><i /></div><span>{new URL(project.demo).hostname}</span><ExternalLink size={10} /></div>
          <picture><source srcSet={`/projects/${previewFiles[project.id]}-640.webp 640w, /projects/${previewFiles[project.id]}.webp 1400w`} sizes="(max-width: 767px) 90vw, 54vw" type="image/webp" /><Image src={project.image} alt={project.imageAlt} sizes="(max-width: 767px) 90vw, 54vw" className="project-screenshot" /></picture>
        </div>
      )}
      <div className={`project-feature-float project-feature-${project.id}`} aria-hidden="true"><div className="project-float-icon"><Icon size={19} /></div><div><span>{project.id === "postautopilot" ? "A simpler publishing flow" : project.id === "studysync" ? "Better, together" : project.features[0]}</span><small>{project.id === "mathani" ? "MOBILE EXPERIENCE" : project.id === "maze-solver" ? "EXPLORE THE ALGORITHM" : "THOUGHTFULLY BUILT"}</small></div><Check size={14} /></div>
      <button type="button" className="project-preview-open" onClick={onOpen} aria-label={`View project: ${project.title}`}><ArrowUpRight size={24} /></button>
      <span className="project-preview-caption">{project.id === "mathani" ? "Actual app screenshot excerpt" : "Original project screenshot"}</span>
    </TiltCard>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-external-links">
      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-link" aria-label={`${project.demoLabel || "Live demo"} — ${project.title} (opens in a new tab)`}>{project.demoLabel || "Live Demo"}<ArrowUpRight size={16} /></a>
      {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-github" aria-label={`${project.title} on GitHub (opens in a new tab)`}><Github size={18} /><span>GitHub</span></a>}
    </div>
  );
}

function CaseStudy({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!project || !dialog) return;
    const previouslyFocused = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus({ preventScroll: true });
    };
  }, [project]);

  return (
    <dialog ref={dialogRef} className="case-study-dialog" aria-labelledby="case-study-title" onCancel={onClose} onClose={() => { if (!dialogRef.current?.open) onClose(); }} onClick={(event) => {
      if (event.target === event.currentTarget) {
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onClose();
      }
    }}>
      {project && <div className="case-study-content" style={{ "--project-accent": project.accent } as CSSProperties}>
        <div className="case-study-topline"><span className="eyebrow">PROJECT NOTES / {project.category}</span><button type="button" className="case-study-close" onClick={onClose} aria-label="Close case study" autoFocus><X size={21} /></button></div>
        <h2 id="case-study-title">{project.title}</h2>
        <p className="case-study-lead">{project.description}</p>
        <ProjectLinks project={project} />
        <figure className="case-study-image"><Image src={project.image} alt={project.imageAlt} sizes="(max-width: 900px) 90vw, 850px" />{project.imageNote && <figcaption>{project.imageNote}</figcaption>}</figure>
        <div className="case-study-grid">
          <section><span className="case-study-section-number">01 / CONTEXT</span><h3>The problem</h3><p>{project.problem}</p></section>
          <section><span className="case-study-section-number">02 / ENGINEERING</span><h3>The technical focus</h3><p>{project.focus}</p></section>
          <section className="case-study-architecture"><span className="case-study-section-number">03 / UNDER THE HOOD</span><h3>Architecture & technology</h3><p>{project.architecture}</p>{project.tech.length > 0 && <div className="project-tech">{project.tech.map((tech) => <span className="tag" key={tech}>{tech}</span>)}</div>}</section>
          <section><span className="case-study-section-number">04 / EXPERIENCE</span><h3>Key features</h3><ul className="case-study-features">{project.features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul></section>
          <section><span className="case-study-section-number">05 / PROJECT CONTEXT</span><h3>My role & lessons learned</h3><p>{project.id === "portfolio" ? "This is my personal developer portfolio, bringing my projects and professional background together. The current design explores 3D presentation while keeping motion optional, content readable, and navigation accessible." : "Detailed contribution notes and a personal engineering retrospective are not included in the original project documentation. These will be added with the complete case study."}</p></section>
        </div>
        <div className="case-study-footer"><span>Explore the original project.</span><ProjectLinks project={project} /></div>
        {project.source && <a className="case-study-source" href={project.source} target="_blank" rel="noopener noreferrer">Technical details from the project README <ArrowUpRight size={13} /></a>}
      </div>}
    </dialog>
  );
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<ProjectFilter>("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const reduceMotion = useReducedMotion();
  const visibleProjects = projects.filter((project) => filter === "All Projects" || project.filters.includes(filter));

  return (
    <section id="projects" className="section projects-section" aria-labelledby="projects-heading">
      <div className="shell">
        <div className="projects-heading-row"><div id="projects-heading"><AnimatedSectionHeading number="01" eyebrow="SELECTED WORK" title="Ideas, brought to life." description="A selection of things I’ve built. Real problems, thoughtful solutions, and a little creative ambition." /></div><a href="https://github.com/AbdulRehmanBaig384" target="_blank" rel="noopener noreferrer" className="projects-all-link">More on GitHub<ArrowUpRight size={17} /></a></div>
        <div className="project-filter-row"><div className="project-filters" role="group" aria-label="Filter projects by category">{projectFilters.map((item) => <button type="button" className={`project-filter ${filter === item ? "is-active" : ""}`} aria-pressed={filter === item} key={item} onClick={() => setFilter(item)}>{item}{item === "All Projects" && <span>{projects.length.toString().padStart(2, "0")}</span>}</button>)}</div><span className="project-result-count" aria-live="polite">{visibleProjects.length} projects <ArrowDown size={14} /></span></div>
        <div className="projects-list">
          <AnimatePresence initial={false} mode="popLayout">
            {visibleProjects.map((project, index) => {
              const number = (projects.indexOf(project) + 1).toString().padStart(2, "0");
              return <motion.article key={project.id} layout={!reduceMotion ? "position" : false} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.35 }} className={`project-showcase ${index % 2 ? "project-showcase-reverse" : ""}`} aria-labelledby={`project-title-${project.id}`}>
                <Reveal3D direction={index % 2 ? "right" : "left"} className="project-visual-reveal" scrub><ProjectPreview project={project} number={number} onOpen={() => setSelectedProject(project)} /></Reveal3D>
                <Reveal3D direction={index % 2 ? "left" : "right"} delay={0.12} className="project-copy-reveal">
                  <div className="project-copy" style={{ "--project-accent": project.accent } as CSSProperties}>
                    <div className="project-category"><span>{number}</span><i />{project.category}</div>
                    <h3 id={`project-title-${project.id}`}>{project.shortTitle}<span className="project-title-dot">.</span></h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">{(project.tech.length ? project.tech : ["Mobile application", "Quran & audio"]).map((tech) => <span key={tech} className="tag">{tech}</span>)}</div>
                    <p className="project-engineering"><Code2 size={15} /><span>{project.focus}</span></p>
                    <div className="project-actions"><button type="button" className="project-case-button" onClick={() => setSelectedProject(project)} aria-label={`View case study: ${project.title}`}>View Project<ArrowUpRight size={16} /></button><ProjectLinks project={project} /></div>
                  </div>
                </Reveal3D>
              </motion.article>;
            })}
          </AnimatePresence>
        </div>
        <div className="projects-endnote"><span className="projects-endnote-line" /><Smartphone size={15} /><span>From the browser to your pocket. Built with intention.</span><span className="projects-endnote-line" /></div>
      </div>
      <CaseStudy project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
