'use client';
import React, { useState, useEffect } from "react";
import { motion,Variants } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Code, Server, Database, Smartphone } from "lucide-react";
import type { ISourceOptions } from "@tsparticles/engine";

const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive and interactive UIs using React.js, HTML, CSS, and modern frameworks.",
    icon: <Code size={40} className="text-blue-400" />,
  },{
    title: "Backend Development",
    description:
      "Robust server-side logic, APIs, and integrations using Node.js and Express.",
    icon: <Server size={40} className="text-blue-400" />,
  },
  {
    title: "Database Management",
    description:
      "Designing and managing SQL & NoSQL databases efficiently.",
    icon: <Database size={40} className="text-blue-400" />,
  },
  {
    title: "Mobile & Responsive Apps",
    description:
      "Mobile-friendly and responsive applications with seamless UX.",
    icon: <Smartphone size={40} className="text-blue-400" />,
  },
];
const containerVariants:Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const cardVariants:Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const ServicesSection: React.FC = () => {
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
      events: { onHover: { enable: true, mode: "repulse" }, resize:{enable: true }},
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: ["#00d4ff", "#007bff", "#7c5cff"] },
      links: { color: "#00d4ff", distance: 130, enable: true, opacity: 0.25, width: 1 },
      move: { enable: true, speed: 1.3, direction: "none", outModes: { default: "bounce" } },
      number: { density: { enable: true, factor: 800 } as any, value: 70 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <motion.section
      id="services"
      className="relative flex flex-col items-center justify-center w-full px-5 py-24 overflow-hidden text-white"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}>
  <div className="absolute inset-0 -z-20 bg-gradient-to-b  from-blue-950/50 via-black to-blue-950/20" />
{init && (
  <div className="absolute inset-0 -z-10 opacity-80">
    <Particles id="servicesParticles" options={particlesOptions} />
  </div>
)}


      {/*  Animated Heading */}
      <motion.div
        className="relative mb-12 text-center"
        variants={cardVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h2
          className="mb-4 text-5xl font-extrabold bg-gradient-to-r from-[#00d4ff] via-[#60a5fa] to-[#7c3aed] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h2>

             <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="  absolute mt-0 justify-center items-center left-1/2 -bottom-2 h-[4px] -translate-x-1/2 bg-gradient-to-r from-[#00d4ff] via-[#60a5fa] to-[#7c3aed] rounded-full shadow-[0_0_20px_rgba(0,212,255,0.6)]"
                ></motion.div>

        <motion.p
          className="max-w-xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I offer full-stack development solutions using modern technologies and best practices.
        </motion.p>
      </motion.div>

      {/*  Service Cards */}
      <motion.div
        className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl"
        variants={containerVariants}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              scale: 1.08,
              y: -5,
              boxShadow: "0 0 25px rgba(0,183,255,0.5)",
            }}
            className="p-8 transition-transform duration-300 border border-blue-500 shadow-xl cursor-pointer glass rounded-2xl backdrop-blur-md"
          >
            <motion.div
              className="mb-4"
              whileHover={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.6 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="mb-2 text-xl font-semibold text-[#60a5fa]">
              {service.title}
            </h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/*  Animated Bottom Line */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[240px] h-[2px] bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#60a5fa] blur-sm rounded-full opacity-60"
      />
    </motion.section>
  );
};

export default ServicesSection;
