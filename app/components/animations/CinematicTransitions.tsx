"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const effectFor = (from: string, to: string) => {
  if (from === "hero") return "portal";
  if (to === "about" || to === "tech") return "rotation";
  if (to === "experience" || to === "education") return "depth";
  if (to === "services") return "curtain";
  return "pullback";
};

export default function CinematicTransitions() {
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add({
      desktop: "(min-width: 900px) and (pointer: fine)",
      motion: "(prefers-reduced-motion: no-preference)",
    }, (context) => {
      if (!context.conditions?.motion) return;
      const desktop = Boolean(context.conditions.desktop);
      const scenes = Array.from(document.querySelectorAll<HTMLElement>("#main-content > section"));
      const footer = document.querySelector<HTMLElement>(".site-footer");
      if (footer) scenes.push(footer);

      scenes.forEach((incoming, index) => {
        const outgoing = scenes[index - 1];
        if (!outgoing) return;

        const incomingShell = incoming.querySelector<HTMLElement>(":scope > .shell");
        const outgoingShell = outgoing.querySelector<HTMLElement>(":scope > .shell");
        if (!incomingShell || !outgoingShell) return;

        const from = outgoing.id || "contact";
        const to = incoming.id || "footer";
        const effect = effectFor(from, to);
        const portal = document.querySelector<HTMLElement>(".transition-portal");
        const page = document.querySelector<HTMLElement>(".transition-page");
        const beams = document.querySelector<HTMLElement>(".transition-beams");
        const curtainLeft = document.querySelector<HTMLElement>(".transition-curtain-left");
        const curtainRight = document.querySelector<HTMLElement>(".transition-curtain-right");
        const pullback = document.querySelector<HTMLElement>(".transition-pullback");
        const incomingHeading = incoming.querySelector<HTMLElement>(".section-heading h2");
        const assemblySelector: Record<string, string> = {
          projects: ".project-copy",
          about: ".about-highlight",
          tech: ".tech-node-list .tech-node",
          experience: ".journey-entry",
          education: ".journey-entry",
          services: ".service-card",
          contact: ".contact-email, .contact-socials a, .contact-form",
          footer: ".footer-column, .footer-wordmark",
        };
        const assemblyTargets = incoming.querySelectorAll<HTMLElement>(assemblySelector[to] || "");
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: incoming,
            start: "top 82%",
            end: "top 18%",
            scrub: 0.75,
            invalidateOnRefresh: true,
            preventOverlaps: "cinematic-scenes",
          },
        });

        const depth = desktop ? -260 : -65;
        timeline.to(outgoingShell, {
          z: depth,
          rotateX: desktop ? 4 : 1,
          scale: desktop ? 0.93 : 0.98,
          opacity: desktop ? 0.72 : 0.88,
          ease: "none",
        }, 0);
        timeline.fromTo(incomingShell, {
          z: desktop ? -210 : -55,
          rotateX: desktop ? -5 : -1,
          rotateY: desktop && effect === "rotation" ? (to === "about" ? -17 : 18) : 0,
          scale: desktop ? 0.94 : 0.98,
        }, {
          z: 0,
          rotateX: 0,
          rotateY: 0,
          scale: 1,
          ease: "none",
          immediateRender: false,
        }, 0);

        if (incomingHeading) {
          timeline.fromTo(incomingHeading, {
            z: desktop ? -125 : -30,
            y: desktop ? 32 : 12,
            rotateX: desktop ? 7 : 2,
          }, {
            z: 0,
            y: 0,
            rotateX: 0,
            ease: "none",
            immediateRender: false,
          }, 0.18);
        }

        if (assemblyTargets.length > 0) {
          timeline.fromTo(assemblyTargets, {
            z: desktop ? -85 : -24,
            y: desktop ? 18 : 8,
            rotateX: desktop ? 5 : 1,
            scale: desktop ? 0.97 : 0.99,
          }, {
            z: 0,
            y: 0,
            rotateX: 0,
            scale: 1,
            stagger: desktop ? 0.045 : 0.025,
            ease: "none",
            immediateRender: false,
          }, 0.22);
        }

        if (desktop && effect === "portal" && portal && beams) {
          timeline.fromTo(portal, { scale: 0.2, opacity: 0 }, { scale: 1.1, opacity: 0.8, ease: "none" }, 0.12)
            .to(portal, { scale: 1.55, opacity: 0, ease: "none" }, 0.72)
            .fromTo(beams, { scaleX: 0.35, opacity: 0 }, { scaleX: 1, opacity: 0.55, ease: "none" }, 0.2)
            .to(beams, { opacity: 0, ease: "none" }, 0.78);
        } else if (desktop && effect === "rotation" && page) {
          timeline.fromTo(page, { rotateY: -76, opacity: 0 }, { rotateY: 0, opacity: 0.38, ease: "none" }, 0.14)
            .to(page, { rotateY: 76, opacity: 0, ease: "none" }, 0.78);
        } else if (desktop && effect === "depth" && pullback) {
          timeline.fromTo(pullback, { scale: 0.72, opacity: 0 }, { scale: 1.08, opacity: 0.44, ease: "none" }, 0.12)
            .to(pullback, { scale: 1.28, opacity: 0, ease: "none" }, 0.78);
        } else if (desktop && effect === "curtain" && curtainLeft && curtainRight) {
          timeline.fromTo([curtainLeft, curtainRight], { xPercent: 0, opacity: 0 }, { opacity: 0.88, ease: "none" }, 0.12)
            .to(curtainLeft, { xPercent: -105, ease: "none" }, 0.48)
            .to(curtainRight, { xPercent: 105, ease: "none" }, 0.48)
            .to([curtainLeft, curtainRight], { opacity: 0, ease: "none" }, 0.88);
        } else if (desktop && effect === "pullback" && pullback) {
          timeline.fromTo(pullback, { scale: 1.25, opacity: 0 }, { scale: 0.92, opacity: 0.42, ease: "none" }, 0.12)
            .to(pullback, { scale: 0.72, opacity: 0, ease: "none" }, 0.8);
        }
      });

    });
    return () => media.revert();
  }, []);

  return (
    <div className="cinematic-transition-effects" aria-hidden="true">
      <div className="transition-portal" />
      <div className="transition-beams" />
      <div className="transition-page" />
      <div className="transition-curtain transition-curtain-left" />
      <div className="transition-curtain transition-curtain-right" />
      <div className="transition-pullback" />
    </div>
  );
}
