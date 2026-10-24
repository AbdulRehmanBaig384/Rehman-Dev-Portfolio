"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [{ label: "Home", id: "hero" }, { label: "About", id: "about" }, { label: "Projects", id: "projects" }, { label: "Experience", id: "experience" }, { label: "Contact", id: "contact" }];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDialogElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 35 });
  const reduced = useReducedMotion();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: "-12% 0px -65% 0px", threshold: 0 });
    document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    if (open) { menu.showModal(); const previous = document.body.style.overflow; document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = previous; }; }
    if (menu.open) menu.close();
  }, [open]);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    const closeDesktop = () => { if (media.matches) setOpen(false); };
    media.addEventListener("change", closeDesktop);
    return () => media.removeEventListener("change", closeDesktop);
  }, []);
  return <>
    <header className="site-header">
      <nav className="shell navigation" aria-label="Main navigation">
        <a href="#hero" className="wordmark" aria-label="Abdul Rehman Baig, home"><span className="logo-mark">a<span>r</span><i /></span><span className="wordmark-name">ABDUL REHMAN<span>ENGINEER & CREATIVE DEVELOPER</span></span></a>
        <div className="nav-links">{links.map((link) => <a key={link.id} href={`#${link.id}`} className={active === link.id ? "is-active" : ""} aria-current={active === link.id ? "location" : undefined}>{link.label}</a>)}</div>
        <a className="nav-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
        <button ref={menuButton} className="menu-toggle" onClick={() => setOpen(true)} aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-navigation"><Menu size={23} /></button>
      </nav>
      <motion.div className="reading-progress" style={{ scaleX: reduced ? scrollYProgress : progress }} />
    </header>
    <dialog ref={menuRef} className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation" onCancel={() => setOpen(false)} onClose={() => { setOpen(false); menuButton.current?.focus(); }}>
      <div className="mobile-menu-top"><span className="eyebrow">EXPLORE THE PORTFOLIO</span><button onClick={() => setOpen(false)} aria-label="Close navigation menu"><X /></button></div>
      <nav aria-label="Mobile">{[...links, { label: "Tech stack", id: "tech" }, { label: "Education", id: "education" }, { label: "Services", id: "services" }].map((link, i) => <a href={`#${link.id}`} key={link.id} onClick={() => setOpen(false)}><span>0{i + 1}</span>{link.label}<ArrowUpRight size={20} /></a>)}</nav>
      <p>Karachi, Pakistan · Open to a conversation</p>
    </dialog>
  </>;
}
