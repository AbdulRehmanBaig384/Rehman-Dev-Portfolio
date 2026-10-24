"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { MagneticButton, Reveal3D } from "./animations";

function KarachiClock() {
  const [time, setTime] = useState("— — : — — : — —");
  const [year, setYear] = useState("2026");
  useEffect(() => {
    const clock = new Intl.DateTimeFormat("en-GB", { timeZone: "Asia/Karachi", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
    const date = new Intl.DateTimeFormat("en", { timeZone: "Asia/Karachi", year: "numeric" });
    const update = () => { const now = new Date(); setTime(clock.format(now)); setYear(date.format(now)); };
    update();
    const timer = setInterval(() => { if (!document.hidden) update(); }, 1000);
    document.addEventListener("visibilitychange", update);
    return () => { clearInterval(timer); document.removeEventListener("visibilitychange", update); };
  }, []);
  return <><div className="footer-local"><span>Karachi, Pakistan</span><span className="local-time">{time} <small>PKT · UTC+5</small></span></div><p className="footer-copyright">© {year} Abdul Rehman Baig</p></>;
}

export default function Footer() {
  return <footer className="site-footer"><div className="footer-aura" aria-hidden="true" /><div className="shell">
    <Reveal3D className="footer-invitation"><p>HAVE SOMETHING IN MIND?</p><a href="mailto:rehmanbaig456@gmail.com">Let’s make it happen.<ArrowUpRight strokeWidth={1} aria-hidden="true" /></a></Reveal3D>
    <div className="footer-columns">
      <Reveal3D><nav aria-label="Footer sitemap" className="footer-column"><h2>SITEMAP</h2>{[["Home", "hero"], ["About", "about"], ["Projects", "projects"], ["Contact", "contact"]].map(([label, id]) => <MagneticButton className="footer-nav-link" href={`#${id}`} key={id}>{label}<ArrowUpRight size={14} /></MagneticButton>)}</nav></Reveal3D>
      <Reveal3D delay={0.08}><nav aria-label="Social links" className="footer-column"><h2>ELSEWHERE</h2>{[["GitHub", "https://github.com/AbdulRehmanBaig384"], ["LinkedIn", "https://www.linkedin.com/in/abdul-rehman-baig-/"], ["Kaggle", "https://www.kaggle.com/rehamanengineer"]].map(([label, url]) => <MagneticButton className="footer-nav-link" href={url} key={label} target="_blank" rel="noopener noreferrer">{label}<ArrowUpRight size={14} /></MagneticButton>)}</nav></Reveal3D>
      <Reveal3D delay={0.16}><div className="footer-column footer-contact"><h2>START A CONVERSATION</h2><a className="footer-email" href="mailto:rehmanbaig456@gmail.com">rehmanbaig456@gmail.com<ArrowUpRight size={22} /></a><p>A project, an opportunity, or a hello.<br />Good things start with a conversation.</p><span className="availability"><i className="status-dot" />OPEN TO OPPORTUNITIES</span></div></Reveal3D>
    </div>
    <div className="footer-meta"><KarachiClock /><a href="#hero" className="back-to-top">Back to top<span><ArrowUp size={18} /></span></a></div>
    <Reveal3D className="footer-wordmark"><a href="#hero" aria-label="Abdul Rehman Baig, back to top">REHMAN<span aria-hidden="true">✳</span></a></Reveal3D>
    <div className="footer-colophon"><span>ENGINEER BY DISCIPLINE. CREATIVE BY NATURE.</span><span>CRAFTED WITH INTENTION.</span></div>
  </div></footer>;
}
