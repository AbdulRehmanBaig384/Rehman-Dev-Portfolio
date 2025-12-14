"use client";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
const HeroSection: React.FC = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);
  const particlesOptions: ISourceOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        onClick: { enable: true, mode: "push" },
        resize:{enable: true,}
      },
      modes: {
        repulse: { distance: 120, duration: 0.4 },
        push: { quantity: 2 },
      },},
    particles: {
      color: { value: ["#00d4ff", "#007bff", "#7c5cff"] },
      links: {
        color: "#00d4ff",
        distance: 140,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        random: false,
        straight: false,
        outModes: { default: "bounce" },
      },
      number: { density: { enable: true, factor: 800 } as any, value: 80 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };
  if (!init) return null;
  return (
    <motion.section className="relative flex flex-col items-center justify-center h-screen overflow-hidden text-center text-white">
      <div className="absolute inset-0 -z-20">
        <Particles id="tsparticles" options={particlesOptions} />
      </div>
      <div className="absolute inset-0 -z-30 bg-gradient-to-b from-blue-950/50 via-black to-blue-950/20" />
      <div className="side-glow left" />
      <div className="side-glow right" />
      <div className="z-10 px-6">
        <h1 className="mb-4 text-5xl font-extrabold text-transparent sm:text-6xl bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text drop-shadow-lg">
          Hi, I’m Abdul Rehman Baig
        </h1>

        <p className="max-w-2xl mx-auto mb-8 text-lg leading-relaxed text-gray-300 sm:text-xl">
          Full Stack Developer — Building modern and scalable web apps using{" "}
          <span className="font-medium text-blue-400">
            React, Node.js, Express, and MongoDB
          </span>
          .
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="glow-btn"> Hire Me</button>
          <button className="px-6 py-3 font-semibold transition duration-300 border border-blue-400 rounded-full hover:bg-blue-500/10 cursor-pointer">
             Download Resume
          </button>
        </div>
      </div>

      {/*  Floating Glow Orbs */}
      <div className="absolute w-48 h-48 rounded-full bg-blue-500/20 blur-3xl top-10 left-10 animate-float-slow" />
      <div className="absolute w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl bottom-10 right-10 animate-float-slower" />
    </motion.section>
  );
};

export default HeroSection;
