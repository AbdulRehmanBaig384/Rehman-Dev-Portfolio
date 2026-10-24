"use client";
import { MotionConfig } from "framer-motion";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { Pause, Play } from "lucide-react";
import Atmosphere from "./Atmosphere";
import { useMediaQuery } from "../../hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);
const AmbientContext = createContext(true);
export const useAmbientMotion = () => useContext(AmbientContext);

export default function ExperienceProvider({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference) and (pointer: fine) and (min-width: 900px)", () => {
      const lenis = new Lenis({ duration: 0.8, smoothWheel: true, syncTouch: false, anchors: { offset: -100 }, prevent: (node) => node.closest("dialog") !== null });
      const update = () => ScrollTrigger.update();
      const tick = (time: number) => lenis.raf(time * 1000);
      lenis.on("scroll", update);
      gsap.ticker.add(tick);
      const syncDialog = () => document.querySelector("dialog[open]") ? lenis.stop() : lenis.start();
      const dialogs = new MutationObserver(syncDialog);
      document.querySelectorAll("dialog").forEach((dialog) => dialogs.observe(dialog, { attributes: true, attributeFilter: ["open"] }));
      return () => { dialogs.disconnect(); gsap.ticker.remove(tick); lenis.off("scroll", update); lenis.destroy(); };
    });
    let frame = 0;
    let lastHeight = 0;
    const resize = new ResizeObserver(([entry]) => {
      const height = entry.contentRect.height;
      if (Math.abs(height - lastHeight) < 1) return;
      lastHeight = height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => ScrollTrigger.refresh());
    });
    resize.observe(document.body);
    return () => { media.revert(); resize.disconnect(); cancelAnimationFrame(frame); };
  }, []);
  return <MotionConfig reducedMotion="user"><AmbientContext.Provider value={!paused && !reduced}>
    <div className="portfolio-experience" data-motion-paused={paused || reduced}>
      <Atmosphere />{children}
      {!reduced && <button type="button" className="motion-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Resume ambient animation" : "Pause ambient animation"} title={paused ? "Resume atmosphere" : "Pause atmosphere"}>{paused ? <Play size={13} /> : <Pause size={13} />}<span>Motion {paused ? "off" : "on"}</span></button>}
    </div>
  </AmbientContext.Provider></MotionConfig>;
}
