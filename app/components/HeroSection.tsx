"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Code2, Download, Github, Linkedin, Mail, Pause, Play, Terminal } from "lucide-react";
import { SiReact, SiTypescript } from "react-icons/si";
import { useCallback, useEffect, useRef, useState } from "react";
import { FloatingCard, MagneticButton } from "./animations";
import { useMediaQuery, usePageVisible } from "../hooks/useMediaQuery";

const Scene = dynamic(() => import("./three/HeroScene"), { ssr: false });
const roles = ["Full-Stack Developer", "React Native Developer", "Creative Frontend Engineer", "Software Engineering Student"];

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { margin: "100px" });
  const pageVisible = usePageVisible();
  const desktop = useMediaQuery("(min-width: 768px)");
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [role, setRole] = useState(0);
  const active = visible && pageVisible && !paused && !reduced;
  const onReady = useCallback(() => setReady(true), []);
  const onFailure = useCallback(() => { setFailed(true); setReady(false); }, []);
  useEffect(() => {
    if (!active) return;
    const interval = setInterval(() => setRole((value) => (value + 1) % roles.length), 3600);
    return () => clearInterval(interval);
  }, [active]);
  return <section id="hero" ref={ref} className="hero" aria-labelledby="hero-title" data-paused={!active}>
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-aura" aria-hidden="true" />
    <div className="shell hero-main">
      <motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
        <div className="hero-eyebrow"><span className="status-dot" />CREATIVE MIND. ENGINEERING DNA.</div>
        <p className="hero-introduction">Hi, I&apos;m <strong>Abdul Rehman Baig</strong><span className="hello-star" aria-hidden="true">✳</span></p>
        <h1 id="hero-title">Building digital<br />experiences <span className="hero-gradient">beyond<br />the ordinary.</span></h1>
        <div className="hero-role"><span className="role-bracket">&lt;</span><span className="sr-only">Full-Stack Developer, React Native Developer, Creative Frontend Engineer, and Software Engineering Student.</span>
          <span className="role-window" aria-hidden="true"><AnimatePresence mode="wait" initial={false}><motion.span key={role} initial={{ y: reduced ? 0 : 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: reduced ? 0 : -12, opacity: 0 }} transition={{ duration: 0.25 }}>{roles[role]}</motion.span></AnimatePresence></span>
          <span className="role-bracket">/&gt;</span>
        </div>
        <p className="hero-description">Full-Stack Software Engineer crafting scalable applications, intelligent products, and immersive digital experiences.</p>
        <div className="hero-actions">
          <MagneticButton href="#projects" className="button button-primary">Explore Projects <ArrowUpRight size={17} /></MagneticButton>
          <MagneticButton href="/Abdul_Rehman_Baig_Resume1.pdf" download="Abdul_Rehman_Baig_Resume.pdf" className="button button-secondary">Download Resume <Download size={16} /></MagneticButton>
        </div>
        <div className="hero-social-row">
          <div className="hero-socials"><a href="https://github.com/AbdulRehmanBaig384" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)"><Github size={18} /></a><a href="https://www.linkedin.com/in/abdul-rehman-baig-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)"><Linkedin size={18} /></a><a href="mailto:rehmanbaig456@gmail.com" aria-label="Email Abdul Rehman"><Mail size={18} /></a></div>
          <span className="social-divider" /><a className="contact-text" href="#contact">Contact me <ArrowUpRight size={14} /></a>
        </div>
      </motion.div>
      <motion.div className="hero-visual" initial={reduced ? false : { opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.3, delay: 0.15 }}>
        <div className="scene-coordinate scene-coordinate-top" aria-hidden="true"><span>01 / THE CREATIVE CORE</span><span className="tiny-cross">+</span></div>
        <div className="scene-art" aria-hidden="true">
          <div className={`static-sculpture ${ready && desktop && !reduced ? "sculpture-hidden" : ""}`}><div className="sculpture-ring ring-one" /><div className="sculpture-ring ring-two" /><div className="sculpture-ring ring-three" /><div className="sculpture-orbit" /><div className="sculpture-orbit orbit-two" /></div>
          {desktop && !reduced && !failed && <div className="webgl-scene"><Scene active={Boolean(active)} onReady={onReady} onFailure={onFailure} /></div>}
        </div>
        <FloatingCard className="hero-code-card" delay={-1}>
          <div className="code-card-top"><span><i /><i /><i /></span><span>developer.ts</span><Terminal size={12} /></div>
          <div className="code-lines"><div><span className="code-purple">const</span> developer <span className="code-purple">=</span> &#123;</div><div>&nbsp; name: <span className="code-green">&apos;Abdul Rehman&apos;</span>,</div><div>&nbsp; focus: <span className="code-green">&apos;meaningful experiences&apos;</span>,</div><div>&nbsp; curiosity: <span className="code-orange">Infinity</span></div><div>&#125;;</div></div>
        </FloatingCard>
        <FloatingCard className="hero-tech-float react-float" delay={-2}><SiReact size={29} /><span>React</span></FloatingCard>
        <FloatingCard className="hero-tech-float ts-float" delay={-4}><SiTypescript size={24} /><span>TypeScript</span></FloatingCard>
        <FloatingCard className="hero-craft-card" delay={-3}><span className="craft-icon"><Code2 size={21} /></span><div><strong>Thoughtfully engineered.</strong><span>Crafted with intention.</span></div><span className="status-dot" /></FloatingCard>
        <div className="scene-coordinate scene-coordinate-bottom"><span><span className="tiny-cross" aria-hidden="true">+</span> {ready && desktop && !reduced ? "MOVE YOUR CURSOR TO EXPLORE" : "AT THE INTERSECTION OF CODE & CREATIVITY"}</span>{desktop && !reduced && <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? "Play hero animations" : "Pause hero animations"} aria-pressed={paused}>{paused ? <Play size={13} /> : <Pause size={13} />}</button>}</div>
      </motion.div>
    </div>
    <div className="shell hero-bottom"><a href="#projects" className="scroll-cue"><span className="scroll-icon"><ArrowDown size={14} /></span>SCROLL TO EXPLORE</a><p>Based in Karachi, Pakistan <span>·</span> Building for the world <ArrowDownRight size={16} /></p></div>
    <div className="stack-strip"><div className="shell"><span className="stack-strip-label">IDEAS INTO EXPERIENCES</span><span><SiReact /> React</span><span>Next.js <span className="stack-dot">✦</span></span><span><SiTypescript /> TypeScript</span><span>Node.js <span className="stack-dot">✦</span></span><span><SiReact /> React Native</span><span>MongoDB</span></div></div>
  </section>;
}
