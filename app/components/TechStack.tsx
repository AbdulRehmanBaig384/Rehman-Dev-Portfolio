"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiExpress, SiMongodb,
  SiPostgresql, SiDocker, SiTailwindcss, SiGit 
} from "react-icons/si";

const iconMap: Record<string, React.ReactElement> = {
  "React": <SiReact className="text-[#61dafb]" size={38} />,
  "React Native": <SiReact className="text-[#61dafb]" size={38} />,
  "Next.js": <SiNextdotjs className="text-white" size={38} />,
  "TypeScript": <SiTypescript className="text-[#3178c6]" size={38} />,
  "Node.js": <SiNodedotjs className="text-[#3c873a]" size={38} />,
  "Express": <SiExpress className="text-gray-300" size={38} />,
  "MongoDB": <SiMongodb className="text-[#4db33d]" size={38} />,
  "PostgreSQL": <SiPostgresql className="text-[#31648c]" size={38} />,
  "Docker": <SiDocker className="text-[#2496ed]" size={38} />,
  "Tailwind CSS": <SiTailwindcss className="text-[#38bdf8]" size={38} />,
  "Git": <SiGit className="text-[#f05033]" size={38} />,
};

const techList = Object.keys(iconMap);
const sectionVariants :Variants= {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function TechStack() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "repulse" },
        resize:{ enable:true,}
      },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: ["#00d4ff", "#007bff", "#7c5cff"] },
      links: {
        color: "#00d4ff",
        distance: 130,
        enable: true,
        opacity: 0.22,
        width: 1,
      },
      move: { enable: true, speed: 1.3 },
      number: { density: { enable: true, factor: 800 } as any, value: 60 },
      opacity: { value: 0.4 },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };
  return (
    <motion.section
      id="tech"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="relative flex flex-col items-center justify-center w-full py-28 overflow-hidden text-center">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-950/50 via-black to-blue-950/20" />
      {init && (
        <div className="absolute inset-0 -z-10 opacity-80">
          <Particles id="techParticles" options={particlesOptions} />
        </div>
      )}
      <motion.div variants={sectionVariants} className="relative mb-14 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold bg-gradient-to-r 
          from-[#00d4ff] via-[#60a5fa] to-[#7c3aed] bg-clip-text text-transparent drop-shadow-xl">
          Tech Stack
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "60%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute mt-0 left-1/2 -bottom-2 h-[4px] -translate-x-1/2 
          bg-gradient-to-r from-[#00d4ff] via-[#60a5fa] to-[#7c3aed] 
          rounded-full shadow-[0_0_20px_rgba(0,212,255,0.6)]"
        />

        <p className="max-w-xl mx-auto mt-6 text-lg text-[var(--text-dim)] leading-relaxed">
          Tools & technologies I use to build fast, modern and scalable digital
          experiences.
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: {
            transition: { staggerChildren: 0.12 },
          },
        }}
        className="grid w-full max-w-6xl grid-cols-2 sm:grid-cols-3 
        md:grid-cols-4 lg:grid-cols-5 gap-7">
        {techList.map((tech) => (
          <motion.div
            key={tech}
            variants={{
              hidden: { opacity: 0, y: 35, scale: 0.9 },
              show: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { duration: 0.45, ease: "easeOut" },
              }, }}
            whileHover={{
              scale: 1.09,
              y: -6,
              boxShadow: "0 0 25px rgba(0, 200, 255, 0.4)",
            }}
            className="flex flex-col items-center justify-center gap-3
            p-5 rounded-2xl glass backdrop-blur-xl 
           bg-gradient-to-b from-blue-950/50  to-blue-950/20 hover:border-blue-400/60">
            {iconMap[tech]}
            <p className="font-medium text-[var(--text-light)] text-lg">{tech}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="inline-flex items-center justify-center px-6 py-3 mt-16 text-lg 
        font-medium rounded-full bg-gradient-to-r 
        from-[#60a5fa]/20 via-[#7c3aed]/20 to-[#00d4ff]/20 
        backdrop-blur-xl border border-white/10 shadow-lg cursor-default">
        Powering My Development Journey 
      </motion.div>
    </motion.section>
  );
}
