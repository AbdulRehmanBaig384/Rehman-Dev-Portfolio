"use client";

import dynamic from "next/dynamic";
import { useInView } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { MagneticButton } from "./animations";
import { useMediaQuery, usePageVisible } from "../hooks/useMediaQuery";
import { useAmbientMotion } from "./layout/ExperienceProvider";
import HeroTechStrip from "./HeroTechStrip";

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
  const introPlayed = useRef(false);
  const onReady = useCallback(() => setReady(true), []);
  const onFailure = useCallback(() => { setFailed(true); setReady(false); }, []);

  useEffect(() => {
    if (!ambient || introPlayed.current) return;
    const media = gsap.matchMedia();
    media.add({ motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 900px) and (pointer: fine)" }, (context) => {
      if (!context.conditions?.motion || introPlayed.current) return;
      const full = context.conditions.desktop;
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" }, onComplete: () => { introPlayed.current = true; setSceneAllowed(true); } });
      timeline.from(".site-header", { y: -24, opacity: 0, duration: 0.9 })
        .from(".hero-kicker", { y: 16, opacity: 0, duration: 0.8 }, 0.15)
        .from(".hero-letter", { yPercent: full ? 45 : 20, z: full ? -40 : -10, rotationX: full ? 8 : 2, opacity: 0, duration: 0.22, stagger: 0.16, clearProps: "transform,opacity" }, 0.25)
        .from(".hero-name-star", { opacity: 0, scale: 0.8, duration: 0.3, clearProps: "transform,opacity" }, 2.05)
        .from(".hero-sculpture", { scale: 0.88, opacity: 0, duration: 1.8 }, 0.35)
        .from(".hero-summary > *", { y: 22, opacity: 0, duration: 0.8, stagger: 0.12 }, 0.75)
        .from(".hero-bottom", { opacity: 0, duration: 0.8 }, 1.05);
    });
    return () => media.revert();
  }, [ambient]);

  return <section id="hero" ref={ref} className="hero" aria-labelledby="hero-title">
    <div className="shell hero-main">
      <div className="hero-kicker"><span>INDEPENDENT DEVELOPER & CREATIVE ENGINEER</span><span className="availability"><i className="status-dot" />OPEN TO OPPORTUNITIES</span></div>
      <div className="hero-title-area">
        <h1 id="hero-title" aria-label="Abdul Rehman Baig">
          {["ABDUL", "REHMAN"].map((word, wordIndex) => (
            <span className={`hero-name-line${wordIndex ? " hero-name-second" : ""}`} key={word} aria-hidden="true">
              <span className="hero-word">
                {Array.from(word).map((letter, index) => <span className="hero-letter" key={`${word}-${index}`}>{letter}</span>)}
                {wordIndex === 1 && <span className="hero-name-star">✳</span>}
              </span>
            </span>
          ))}
        </h1>
        <div className="hero-sculpture" aria-hidden="true">
          {sceneAllowed && desktop && !reduced && !failed && <div className="webgl-scene" data-ready={ready}><Scene active={visible && pageVisible && ambient} onReady={onReady} onFailure={onFailure} /></div>}
          {ready && desktop && !reduced && !failed && <span className="sculpture-caption">FORM / FUNCTION / FEELING</span>}
        </div>
        <span className="hero-side-note">BASED IN KARACHI — BUILDING EVERYWHERE</span>
      </div>
      <div className="hero-summary">
        <p className="hero-statement">Thoughtful code.<br /><span>Extraordinary experiences.</span></p>
        <p className="hero-description">I’m Abdul Rehman Baig. A full-stack software engineer crafting scalable web applications, intelligent products, and intuitive mobile experiences.</p>
        <div className="hero-actions"><MagneticButton href="#contact" className="button button-primary">Let’s work together <ArrowUpRight size={18} /></MagneticButton><a href="/Abdul_Rehman_Baig_Resume1.pdf" download="Abdul_Rehman_Baig_Resume.pdf" className="resume-link">Download résumé <Download size={14} /></a></div>
      </div>
      <div className="hero-bottom"><a href="#about" className="scroll-cue"><span className="scroll-icon"><ArrowDown size={15} /></span>SCROLL TO DISCOVER</a><span className="hero-discipline">FULL-STACK / REACT NATIVE / CREATIVE DEVELOPMENT</span><div className="hero-socials"><a href="https://github.com/AbdulRehmanBaig384" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in new tab)"><Github size={17} /></a><a href="https://www.linkedin.com/in/abdul-rehman-baig-/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in new tab)"><Linkedin size={17} /></a></div></div>
    </div>
    <HeroTechStrip />
  </section>;
}
