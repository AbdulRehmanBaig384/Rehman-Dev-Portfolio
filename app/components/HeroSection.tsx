"use client";

import dynamic from "next/dynamic";
import { useInView } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MagneticButton } from "./animations";
import { useMediaQuery, usePageVisible } from "../hooks/useMediaQuery";
import { useAmbientMotion } from "./layout/ExperienceProvider";

const Scene = dynamic(() => import("./three/HeroScene"), { ssr: false });

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref, { margin: "100px" });
  const pageVisible = usePageVisible();
  const desktop = useMediaQuery("(min-width: 900px) and (pointer: fine)");
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const ambient = useAmbientMotion();
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [sceneAllowed, setSceneAllowed] = useState(false);
  const onReady = useCallback(() => setReady(true), []);
  const onFailure = useCallback(() => { setFailed(true); setReady(false); }, []);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: () => setSceneAllowed(true) });
      timeline.from(".site-header", { y: -24, opacity: 0, duration: 0.9 })
        .from(".hero-kicker", { y: 16, opacity: 0, duration: 0.8 }, 0.15)
        .from(".hero-name-line > span", { yPercent: 110, rotation: 2, duration: 1.3, stagger: 0.14 }, 0.25)
        .from(".hero-sculpture", { scale: 0.88, opacity: 0, duration: 1.8 }, 0.35)
        .from(".hero-summary > *", { y: 22, opacity: 0, duration: 0.8, stagger: 0.12 }, 0.75)
        .from(".hero-bottom", { opacity: 0, duration: 0.8 }, 1.05);
    });
    return () => media.revert();
  }, []);

  return <section id="hero" ref={ref} className="hero" aria-labelledby="hero-title">
    <div className="shell hero-main">
      <div className="hero-kicker"><span>INDEPENDENT DEVELOPER & CREATIVE ENGINEER</span><span className="availability"><i className="status-dot" />OPEN TO OPPORTUNITIES</span></div>
      <div className="hero-title-area">
        <h1 id="hero-title" aria-label="Abdul Rehman Baig"><span className="hero-name-line"><span>ABDUL</span></span><span className="hero-name-line hero-name-second"><span>REHMAN<span className="hero-name-star" aria-hidden="true">✳</span></span></span></h1>
        <div className="hero-sculpture" aria-hidden="true">
          <div className={`static-sculpture ${ready && desktop && !reduced ? "sculpture-hidden" : ""}`}><div className="sculpture-ring ring-one" /><div className="sculpture-ring ring-two" /><div className="sculpture-ring ring-three" /></div>
          {sceneAllowed && desktop && !reduced && !failed && <div className="webgl-scene"><Scene active={visible && pageVisible && ambient} onReady={onReady} onFailure={onFailure} /></div>}
          <span className="sculpture-caption">FORM / FUNCTION / FEELING</span>
        </div>
        <span className="hero-side-note">BASED IN KARACHI — BUILDING EVERYWHERE</span>
      </div>
      <div className="hero-summary">
        <p className="hero-statement">Thoughtful code.<br /><span>Extraordinary experiences.</span></p>
        <p className="hero-description">I’m Abdul Rehman Baig. A full-stack software engineer crafting scalable web applications, intelligent products, and intuitive mobile experiences.</p>
        <div className="hero-actions"><MagneticButton href="#contact" className="button button-primary">Let’s work together <ArrowUpRight size={18} /></MagneticButton><a href="/Abdul_Rehman_Baig_Resume1.pdf" download="Abdul_Rehman_Baig_Resume.pdf" className="resume-link">Download résumé <Download size={14} /></a></div>
      </div>
      <div className="hero-bottom"><a href="#projects" className="scroll-cue"><span className="scroll-icon"><ArrowDown size={15} /></span>SCROLL TO DISCOVER</a><span className="hero-discipline">FULL-STACK / REACT NATIVE / CREATIVE DEVELOPMENT</span><div className="hero-socials"><a href="https://github.com/AbdulRehmanBaig384" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)"><Github size={17} /></a><a href="https://www.linkedin.com/in/abdul-rehman-baig-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)"><Linkedin size={17} /></a></div></div>
    </div>
    <div className="stack-strip"><div className="shell"><span className="stack-strip-label">THE TOOLS OF MY TRADE</span>{["React", "Next.js", "TypeScript", "Node.js", "React Native", "MongoDB"].map((name) => <span key={name}>{name}<i aria-hidden="true">✳</i></span>)}</div></div>
  </section>;
}
