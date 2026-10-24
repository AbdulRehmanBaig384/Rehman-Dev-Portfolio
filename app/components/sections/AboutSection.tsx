"use client";

import { ArrowUpRight, Code2, Layers3, MapPin, Smartphone } from "lucide-react";
import { AnimatedSectionHeading, Reveal3D, TiltCard } from "../animations";
import "../../styles/sections.css";

const highlights = [
  { icon: Layers3, title: "Full-stack engineering", detail: "From the interface to the API." },
  { icon: Smartphone, title: "Mobile application development", detail: "Thoughtful experiences, on every screen." },
  { icon: Code2, title: "Modern web technologies", detail: "React, Next.js, and a curious mind." },
];

export default function AboutSection() {
  return (
    <section id="about" className="section about-section">
      <div className="shell">
        <AnimatedSectionHeading number="02" eyebrow="A LITTLE ABOUT ME" title="An engineer’s mind. A builder’s heart." />
        <div className="about-layout">
          <Reveal3D direction="left" className="about-art-wrap">
            <TiltCard className="about-art">
              <div className="about-art-grid" aria-hidden="true" />
              <div className="about-art-top"><span className="about-art-code">&lt;AR /&gt;</span><span>DEVELOPER PROFILE</span></div>
              <div className="about-monogram" aria-hidden="true"><span>A</span><span>R</span><i /></div>
              <div className="about-art-orbit" aria-hidden="true" />
              <div className="about-art-bottom">
                <div><strong>Abdul Rehman Baig</strong><span>Always learning. Always building.</span></div>
                <ArrowUpRight size={24} aria-hidden="true" />
              </div>
              <div className="about-location"><MapPin size={13} aria-hidden="true" /> Karachi, Pakistan</div>
            </TiltCard>
          </Reveal3D>
          <Reveal3D direction="right" delay={0.1} className="about-copy">
            <p className="about-lead">I turn complex ideas into digital experiences that feel effortless.</p>
            <p>I’m Abdul Rehman, a full-stack software engineer and Software Engineering undergraduate at the University of Karachi. I build for the web and mobile, bringing together thoughtful interfaces and the systems behind them.</p>
            <p>From React and Next.js to Node.js and React Native, I enjoy the whole process of making a product work. Performance, accessibility, and attention to detail shape how I build.</p>
            <p>I’m exploring new frameworks, sharpening my engineering foundations, and looking for opportunities to make useful things with people who care about their craft.</p>
            <div className="about-highlights">
              {highlights.map(({ icon: Icon, title, detail }) => (
                <div className="about-highlight" key={title}><span className="about-highlight-icon"><Icon size={19} aria-hidden="true" /></span><div><h3>{title}</h3><p>{detail}</p></div></div>
              ))}
            </div>
            <a className="text-link about-connect" href="#contact">Let’s connect <ArrowUpRight size={17} aria-hidden="true" /></a>
          </Reveal3D>
        </div>
      </div>
    </section>
  );
}
