"use client";

import { type ComponentPropsWithoutRef, type CSSProperties, type ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery, usePageVisible } from "../../hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);
type RevealProps = { children: ReactNode; direction?: "left" | "right"; delay?: number; className?: string; scrub?: boolean };

/** Entrance and hover transforms have separate owners; content is visible before hydration. */
export function Reveal3D({ children, direction = "left", delay = 0, className = "", scrub = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = gsap.matchMedia();
    media.add({ desktop: "(min-width: 900px) and (pointer: fine)", motion: "(prefers-reduced-motion: no-preference)" }, (context) => {
      if (!context.conditions?.motion) return;
      const desktop = context.conditions.desktop;
      const sign = direction === "left" ? -1 : 1;
      const scrubbing = scrub && desktop;
      const tween = gsap.fromTo(element,
        { x: scrub ? sign * (desktop ? 200 : 24) : 0, y: desktop ? 38 : 20, rotationY: scrub && desktop ? sign * 16 : 0, rotationX: scrub && desktop ? 5 : 0, opacity: 0, scale: scrub && desktop ? 0.94 : 1 },
        { x: 0, y: 0, rotationY: 0, rotationX: 0, opacity: 1, scale: 1, duration: 0.95, delay: scrubbing ? 0 : delay, ease: scrubbing ? "none" : "power3.out", scrollTrigger: { trigger: element, start: "top 96%", end: "top 52%", scrub: scrubbing ? 0.7 : false, once: !scrubbing, invalidateOnRefresh: true } });
      const image = element.querySelector(".project-screenshot");
      if (scrubbing && image) {
        gsap.fromTo(image, { yPercent: 1.5 }, { yPercent: -1.5, ease: "none", scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 0.7 } });
      }
      // Keyboard users should never encounter a visually hidden focused control.
      const focus = () => { tween.scrollTrigger?.kill(); tween.progress(1); };
      element.addEventListener("focusin", focus);
      return () => element.removeEventListener("focusin", focus);
    });
    return () => media.revert();
  }, [direction, delay, scrub]);
  return <div ref={ref} className={`reveal-3d ${className}`} data-reveal={direction} style={{ perspective: 1200, transformStyle: "preserve-3d" }}>{children}</div>;
}

export function TiltCard({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const reduced = useReducedMotion();
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)");
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(50);
  const rotateX = useSpring(x, { stiffness: 160, damping: 24 });
  const rotateY = useSpring(y, { stiffness: 160, damping: 24 });
  const glow = useMotionTemplate`radial-gradient(440px circle at ${lightX}% ${lightY}%, rgba(225,225,225,.08), transparent 65%)`;
  const shadowX = useTransform(rotateY, [-7, 7], [14, -14]);
  const shadowY = useTransform(rotateX, [-7, 7], [18, 38]);
  const boxShadow = useMotionTemplate`${shadowX}px ${shadowY}px 65px -30px rgba(0,0,0,.65)`;
  return <motion.div className={`tilt-card ${className}`} style={{ ...style, rotateX, rotateY, transformPerspective: 1200, transformStyle: "preserve-3d", boxShadow }}
    onPointerMove={(event) => {
      if (reduced || !fine) return;
      const bounds = event.currentTarget.getBoundingClientRect();
      const px = (event.clientX - bounds.left) / bounds.width;
      const py = (event.clientY - bounds.top) / bounds.height;
      x.set((0.5 - py) * 9); y.set((px - 0.5) * 11);
      lightX.set(px * 100); lightY.set(py * 100);
    }}
    onPointerLeave={() => { x.set(0); y.set(0); }}>
    {children}
    <motion.div className="tilt-light" aria-hidden="true" style={{ background: glow }} />
  </motion.div>;
}

export function MagneticButton({ children, className = "", ...props }: ComponentPropsWithoutRef<"a">) {
  const reduced = useReducedMotion();
  const fine = useMediaQuery("(hover: hover) and (pointer: fine)");
  const x = useSpring(0, { stiffness: 250, damping: 20 });
  const y = useSpring(0, { stiffness: 250, damping: 20 });
  return <motion.span className="magnetic-wrap" style={{ x, y }}
    onPointerMove={(event) => {
      if (reduced || !fine) return;
      const rect = event.currentTarget.getBoundingClientRect();
      x.set((event.clientX - rect.left - rect.width / 2) * 0.1);
      y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
    }} onPointerLeave={() => { x.set(0); y.set(0); }}>
    <a {...props} className={className}>{children}</a>
  </motion.span>;
}

export function FloatingCard({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref);
  const pageVisible = usePageVisible();
  return <div ref={ref} className={`floating-card ${className}`} style={{ animationDelay: `${delay}s`, animationPlayState: visible && pageVisible ? "running" : "paused" }}>{children}</div>;
}

export function AnimatedSectionHeading({ number, eyebrow, title, description }: { number: string; eyebrow: string; title: ReactNode; description?: string }) {
  return <Reveal3D className="section-heading">
    <div className="eyebrow"><span className="section-number">{number}</span><span className="eyebrow-line" />{eyebrow}</div>
    <div className="section-heading-row"><h2>{title}</h2>{description && <p>{description}</p>}</div>
  </Reveal3D>;
}

export function ParallaxLayer({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [28, -28]);
  return <motion.div ref={ref} className={className} style={{ y: reduced ? 0 : y }}>{children}</motion.div>;
}
