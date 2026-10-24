"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useAmbientMotion } from "./ExperienceProvider";
import { usePageVisible } from "../../hooks/useMediaQuery";

export default function Atmosphere() {
  const ref = useRef<HTMLDivElement>(null);
  const active = useAmbientMotion();
  const visible = usePageVisible();
  useEffect(() => {
    if (!active || !visible || !ref.current) return;
    const media = gsap.matchMedia();
    media.add("(hover: hover) and (pointer: fine)", () => {
      const light = ref.current!.querySelector(".atmosphere-pointer");
      const x = gsap.quickTo(light, "x", { duration: 1.8, ease: "power2.out" });
      const y = gsap.quickTo(light, "y", { duration: 1.8, ease: "power2.out" });
      const move = (event: PointerEvent) => { x((event.clientX / innerWidth - 0.5) * 160); y((event.clientY / innerHeight - 0.5) * 100); };
      window.addEventListener("pointermove", move, { passive: true });
      return () => window.removeEventListener("pointermove", move);
    });
    return () => media.revert();
  }, [active, visible]);
  return <div ref={ref} className="atmosphere" aria-hidden="true" data-active={active && visible}>
    <div className="atmosphere-smoke atmosphere-smoke-one" /><div className="atmosphere-smoke atmosphere-smoke-two" />
    <div className="atmosphere-beam" /><div className="atmosphere-pointer" /><div className="atmosphere-grain" /><div className="atmosphere-vignette" />
  </div>;
}
