"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

const education = [
  {
    title: "Bachelor in Software Engineering",
    school: "University of Karachi (UBIT)",
    year: "2023 – 2027",
    details:
      "Focused on full-stack development, algorithms, system design, and modern software architecture.",
  },
  {
    title: "Intermediate in Pre-Engineering",
    school: "Adamjee Government Science College",
    year: "2021 – 2023",
    details: "Studied mathematics, physics, and computer fundamentals.",
  },
  {
    title: "Matriculation (Science)",
    school: "Metropolitan Academy",
    year: "2019 – 2021",
    details: "Completed secondary education with a strong foundation in science.",
  },
];
export default function Education() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => await loadSlim(engine)).then(() =>
      setInit(true)
    );
  }, []);
  const particlesOptions: ISourceOptions = {
    background: { color: { value: "transparent" } },
    particles: {
      number: { value: 60 },
      opacity: { value: 0.3 },
      size: { value: { min: 1, max: 3 } },
      links: { enable: true, opacity: 0.25, distance: 130 },
      move: { enable: true, speed: 1.3 },
      color: { value: ["#00d4ff", "#007bff", "#7c5cff"] },
    },
  };
  return (
    <motion.section
      id="education"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-24 overflow-hidden text-white">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-950/50 via-black to-blue-950/20"></div>
      {/*Particles movmemnt  */}
      {init && (
        <div className="absolute inset-0 -z-10 opacity-70">
          <Particles id="eduParticles" options={particlesOptions} />
        </div>
      )}      
      {/* Heading Wrapper */}
<div className="relative w-fit mx-auto mb-20">
  <motion.h2
    className="text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#60a5fa] to-[#7c3aed]"
    initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}>
    Education 🎓
  </motion.h2>

  {/* Animated line under heading */}
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: "100%" }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="absolute left-1/2 -bottom-3 h-[3px] bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#60a5fa] rounded-full -translate-x-1/2"/>

</div>
{/* Quote */}
<motion.p
  className="mt-0 text-gray-300 italic text-lg max-w-xl mx-auto -mt-10"
  initial={{ opacity: 0, y: -10 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.7 }}>
  Education is the most powerful weapon which you can use to change the world. – Nelson Mandela
</motion.p>

      {/* Timeline Wrapper */}
      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* Center glowing line */}
        <div
          className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 
          bg-gradient-to-b from-[#00d4ff] via-[#60a5fa] to-[#7c3aed] 
          animate-pulse opacity-60 shadow-[0_0_35px_#00d4ff]"
        />

        <div className="space-y-16">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 45, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`relative md:w-1/2 group ${
                i % 2 === 0
                  ? "ml-auto pr-12 text-right"
                  : "mr-auto pl-12 text-left"
              }`}
            >
              {/* Dot pulse */}
              <div
                className="absolute top-4 w-6 h-6 rounded-full 
                bg-gradient-to-br from-[#00d4ff] to-[#7c3aed] 
                shadow-[0_0_25px_#00d4ff]  
                animate-ping-slow"
              />

              {/* 3D Card */}
              <motion.div
                whileHover={{ rotateX: 8, rotateY: i % 2 === 0 ? -8 : 8, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="glass rounded-2xl mb-6 p-6 hover:shadow-[0_0_30px_rgba(0,183,255,0.4)] animate-float-slow backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-[#7ab4ff]">
                  {edu.title}
                </h3>
                <p className="text-sm text-zinc-400">{edu.school}</p>
                <p className="text-xs mt-1 text-zinc-500">{edu.year}</p>
                <p className="mt-3 text-zinc-300 leading-relaxed">
                  {edu.details}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
