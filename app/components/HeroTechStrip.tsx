"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAmbientMotion } from "./layout/ExperienceProvider";

gsap.registerPlugin(ScrollTrigger);
const tools = ["React", "Next.js", "TypeScript", "Node.js", "React Native", "MongoDB"];

/** A compact 3D wave connects the hero sculpture to the first scroll chapter. */
export default function HeroTechStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useAmbientMotion();
  useEffect(() => {
    if (!ref.current || !enabled) return;
    const media = gsap.matchMedia();
    media.add({ desktop: "(min-width: 900px) and (pointer: fine)", motion: "(prefers-reduced-motion: no-preference)" }, (context) => {
      if (!context.conditions?.motion) return;
      const desktop = Boolean(context.conditions.desktop);
      const labels = ref.current!.querySelectorAll<HTMLElement>(".stack-tool-name");
      gsap.fromTo(labels, {
        y: desktop ? 28 : 10, z: desktop ? -100 : -16,
        rotationX: desktop ? 8 : 2, rotationY: desktop ? -5 : 0, opacity: 0.65,
      }, {
        y: 0, z: 0, rotationX: 0, rotationY: 0, scale: 1, opacity: 1,
        duration: 1, stagger: 0.12, ease: "power1.inOut",
        scrollTrigger: {
          trigger: ref.current, start: "top 98%", end: "top 65%", scrub: true,
          invalidateOnRefresh: true,
          onToggle: (self) => labels.forEach((label) => {
            label.style.willChange = self.isActive ? "transform, opacity" : "auto";
          }),
        },
      });
      return () => labels.forEach((label) => label.style.removeProperty("will-change"));
    });
    return () => media.revert();
  }, [enabled]);

  return <div ref={ref} className="stack-strip"><div className="shell">
    <span className="stack-strip-label">THE TOOLS OF MY TRADE</span>
    {tools.map((name) => <span className="stack-tool" key={name}><span className="stack-tool-name">{name}</span><i aria-hidden="true">✳</i></span>)}
  </div></div>;
}
