"use client";
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { motion } from "framer-motion";
const HeroSection: React.FC = () => {
  const [init, setInit] = useState(false);
  const [imgError, setImgError] = useState(false);
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
      <div className="z-10 px-6 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full">
        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-4 text-5xl font-extrabold text-transparent sm:text-6xl bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text drop-shadow-lg">
            Hi, I’m Abdul Rehman Baig
          </h1>
          <p className="max-w-2xl mx-auto md:mx-0 mb-8 text-lg leading-relaxed text-gray-300 sm:text-xl">
            Full Stack Developer — Building modern and scalable web apps using{" "}
            <span className="font-medium text-blue-400">
              React, Node.js, Express, and MongoDB
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="glow-btn"> Hire Me</button>
            <a
              href="/Abdul_Rehman_Baig_Resume1.pdf"
              download="Abdul_Rehman_Baig_Resume.pdf"
              className="px-6 py-3 font-semibold transition duration-300 border border-blue-400 rounded-full hover:bg-blue-500/10 cursor-pointer inline-flex items-center justify-center"
            >
               Download Resume
            </a>
          </div>
        </div>

        {/* Profile Image Column */}
        <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-to-tr from-[#00d4ff] via-[#3b82f6] to-[#7c5cff] shadow-[0_0_30px_rgba(0,212,255,0.4)] animate-float-slow">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-[6px] border-[#0a0a0a] relative flex items-center justify-center">
              {!imgError ? (
                <img 
                  src="/profile.jpg" 
                  alt="Abdul Rehman Baig" 
                  className="w-full h-full object-cover"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="text-6xl font-bold bg-gradient-to-br from-[#00d4ff] to-[#7c5cff] bg-clip-text text-transparent drop-shadow-md">
                  AR
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-48 h-48 rounded-full bg-blue-500/20 blur-3xl top-10 left-10 animate-float-slow" />
      <div className="absolute w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl bottom-10 right-10 animate-float-slower" />
    </motion.section>
  );
};
export default HeroSection;
