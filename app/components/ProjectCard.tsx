
// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// import type { ISourceOptions } from "@tsparticles/engine";

// export default function ProjectsPage() {
//   const [init, setInit] = useState(false);

//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => setInit(true));
//   }, []);

//   // Particle Config
//   const particlesOptions: ISourceOptions = {
//     background: { color: { value: "transparent" } },
//     fpsLimit: 120,
//     interactivity: {
//       events: { onHover: { enable: true, mode: "repulse" }, resize: true },
//       modes: { repulse: { distance: 100, duration: 0.4 } },
//     },
//     particles: {
//       color: { value: ["#00d4ff", "#007bff", "#7c5cff"] },
//       links: { enable: true, distance: 140, color: "#00d4ff", opacity: 0.25, width: 1 },
//       move: { enable: true, speed: 1.2 },
//       number: { value: 60 },
//       opacity: { value: 0.5 },
//       shape: { type: "circle" },
//       size: { value: { min: 1, max: 3 } },
//     },
//     detectRetina: true,
//   };

//   const projects = [
//    {
//   title: "ShopEase – E-commerce Website",
//   img: "/shopease.jpg",
//   desc: "A modern e-commerce platform featuring product listings, cart system, checkout flow, user authentication, and smooth UI interactions.",
//   tech: ["React", "Next.js", "Tailwind"],
//   gradient: "from-[#00d4ff] to-[#60a5fa]",
// },
// {
//   title: "HealthMate AI",
//   img: "/healthmate.jpg",
//   desc: "AI-powered medical assistant that helps users track health reports, symptoms, prescriptions, and provides smart health insights.",
//   tech: ["React", "Next.js", "Tailwind"],
//   gradient: "from-[#00d4ff] to-[#60a5fa]",
// },
// {
//   title: "Sloane – Medical Application",
//   img: "/sloane.jpg",
//   desc: "A digital medical platform with patient record handling, appointment booking, report storage, and healthcare analytics.",
//   tech: ["React","Tailwind"],
//   gradient: "from-[#00d4ff] to-[#60a5fa]",
// },
// {
//   title: "Mathani Quran App",
//   img: "/mathani.jpg",
//   desc: "A full Quran app with Tafseer, Tajweed, audio recitation, bookmarks, and beautiful UI — built for smooth mobile experience.",
//   tech: ["React Native", "JavaScript"],
//   gradient: "from-[#00d4ff] to-[#60a5fa]",
// },
// {
//   title: "Personal Portfolio",
//   img: "/portfolio.jpg",
//   desc: "Premium animated portfolio with 3D effects, particles, floating elements, neon gradients, and glassmorphism UI.",
//   tech: ["React", "Next.js", "Tailwind"],
//   gradient: "from-[#00d4ff] to-[#60a5fa]",
// },
// {
//   title: "PostAutoPilot",
//   img: "/postautopilot.jpg",
//   desc: "A React Native automation app for scheduling posts, generating captions, analytics, and smart posting recommendations.",
//   tech: ["React Native", "JavaScript"],
//   gradient: "from-[#00d4ff] to-[#60a5fa]",
// },

//   ];

//   return (
//     <motion.section
//       id="projects"
//       initial={{ opacity: 0, y: 25 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       viewport={{ once: true }}
//       className="relative flex flex-col items-center justify-center py-24 overflow-hidden text-white"
//     >
//       {/* Background Gradient */}
//       <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-950/50 via-black to-blue-950/20" />

//       {/* Particle Background */}
//       {init && (
//         <div className="absolute inset-0 -z-10 opacity-80">
//           <Particles id="projectParticles" options={particlesOptions} />
//         </div>
//       )}


//       {/* Heading */}
//       <motion.div
//         className="relative mt-10 mb-16 text-center"
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//       >
//         <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#60a5fa] via-[#00e0ff] to-[#7c3aed] bg-clip-text text-transparent">
//           Projects 🚀
//         </h2>

//         <motion.div
//           initial={{ width: 0 }}
//           whileInView={{ width: "80%" }}
//           transition={{ duration: 0.8, ease: "easeInOut" }}
//           className="absolute left-1/2 -bottom-3 h-[3px] bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#60a5fa] rounded-full -translate-x-1/2"
//         />
//       </motion.div>

//       {/* Project Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
//         {projects.map((p, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 120, damping: 12 }}
//             className="glass rounded-2xl p-6 backdrop-blur-md border-2 border-[#00d4ff]/40 hover:shadow-[0_0_30px_rgba(0,183,255,0.4)] animate-float-slow"
//           >
//             {/* Image */}
//             <div className="w-full h-48 rounded-xl overflow-hidden mb-4 border border-white/10">
//               <img
//                 src={p.img}
//                 alt={p.title}
//                 className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
//               />
//             </div>

//             {/* Title */}
//             <h3 className="text-2xl font-semibold text-[#60a5fa] mb-2">{p.title}</h3>

//             {/* Description */}
//             <p className="text-zinc-300 leading-relaxed mb-4">{p.desc}</p>

//             {/* Tech Stack */}
//             <div className="flex flex-wrap gap-2">
//               {p.tech.map((t, idx) => (
//                 <span
//                   key={idx}
//                   className={`px-4 py-1 text-sm rounded-full font-medium bg-gradient-to-r ${p.gradient} text-white shadow-[0_0_15px_rgba(0,183,255,0.4)]`}
//                 >
//                   {t}
//                 </span>
//               ))}
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Glow Divider */}
//       <motion.div
//         animate={{ opacity: [0.4, 0.8, 0.4], y: [0, -10, 0] }}
//         transition={{ repeat: Infinity, duration: 3 }}
//         className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[240px] h-[2px] bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#60a5fa] blur-sm rounded-full opacity-60"
//       />
//     </motion.section>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import shopease from "../images/shopease.png"
import virtualmaze from "../images/virtualmaze.png"
import portfolio from "../images/portfolio.png"
import voicetodo from "../images/voiceTodo.png"
import healthmate from "../images/healthmate.jpg"
export default function ProjectsPage() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  // Particle Config
  const particlesOptions: ISourceOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    particles: {
      color: { value: ["#00d4ff", "#007bff", "#7c5cff"] },
      links: { enable: true, distance: 140, color: "#00d4ff", opacity: 0.25, width: 1 },
      move: { enable: true, speed: 1.2 },
      number: { value: 60 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  const projects = [
    {
      title: "ShopEase – E-commerce Website",
      img: shopease.src,
      desc: "A modern e-commerce platform featuring product listings, cart system, checkout flow, user authentication, and smooth UI interactions.",
      github: "https://github.com/AbdulRehmanBaig384/ShopEase-Store",
      deploy: "https://shopease.vercel.app",
      gradient: "from-[#00d4ff] to-[#60a5fa]",
    },
      {
    title: "Voice ToDo MERN App",
    img: voicetodo.src, // Add the image in your public folder
    desc: "A full-stack MERN ToDo app with voice commands. Users can add, update, and delete tasks using voice input, with real-time MongoDB storage.",
    github: "https://github.com/AbdulRehmanBaig384/Voice-Todo-Mern",
    deploy: "https://voice-todo-mern.vercel.app",
    gradient: "from-[#ff6a00] to-[#ee0979]",
  },
    {
      title: "HealthMate AI",
      img: healthmate.src,
      desc: "AI-powered medical assistant that helps users track health reports, symptoms, prescriptions, and provides smart health insights.",
      github: "https://github.com/AbdulRehmanBaig384/HealthMate-AI",
      deploy: "https://healthmate.vercel.app",
      gradient: "from-[#00d4ff] to-[#60a5fa]",
    },
    {
      title: "Sloane – Medical Application",
      img: "/sloane.jpg",
      desc: "A digital medical platform with patient record handling, appointment booking, report storage, and healthcare analytics.",
      github: "https://github.com/yourusername/sloane-medical",
      deploy: "https://sloane.vercel.app",
      gradient: "from-[#00d4ff] to-[#60a5fa]",
    },
    {
      title: "Mathani Quran App",
      img: "/mathani.jpg",
      desc: "A full Quran app with Tafseer, Tajweed, audio recitation, bookmarks, and beautiful UI — built for smooth mobile experience.",
      github: "https://github.com/yourusername/mathani-quran",
      deploy: "https://mathani-quran.vercel.app",
      gradient: "from-[#00d4ff] to-[#60a5fa]",
    },
    {
      title: "Personal Portfolio",
      img: portfolio.src,
      desc: "Premium animated portfolio with 3D effects, particles, floating elements, neon gradients, and glassmorphism UI.",
      github: "https://github.com/yourusername/portfolio",
      deploy: "https://yourportfolio.vercel.app",
      gradient: "from-[#00d4ff] to-[#60a5fa]",
    },
    {
      title: "PostAutoPilot",
      img: "/postautopilot.jpg",
      desc: "A React Native automation app for scheduling posts, generating captions, analytics, and smart posting recommendations.",
      github: "https://github.com/yourusername/postautopilot",
      deploy: "",
      gradient: "from-[#00d4ff] to-[#60a5fa]",
    },
    // New Project
    {
      title: "Virtual Maze Solver",
      img: virtualmaze.src,
      desc: "An interactive app that generates random mazes and automatically finds the shortest path using advanced algorithms.",
      github: "https://github.com/AbdulRehmanBaig384/Visual-Maze-Solver",
      deploy: "https://virtual-maze-solver.netlify.app/",
      gradient: "from-[#00d4ff] to-[#60a5fa]",
    },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center py-24 overflow-hidden text-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-950/50 via-black to-blue-950/20" />

      {/* Particle Background */}
      {init && (
        <div className="absolute inset-0 -z-10 opacity-80">
          <Particles id="projectParticles" options={particlesOptions} />
        </div>
      )}

      {/* Heading */}
      <motion.div
        className="relative mt-10 mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#60a5fa] via-[#00e0ff] to-[#7c3aed] bg-clip-text text-transparent">
          Projects 
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute left-1/2 -bottom-3 h-[3px] bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#60a5fa] rounded-full -translate-x-1/2"
        />
      </motion.div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="glass rounded-2xl p-6 backdrop-blur-md border-2 border-[#00d4ff]/40 hover:shadow-[0_0_30px_rgba(0,183,255,0.4)] animate-float-slow"
          >
            {/* Image */}
            <div className="w-full h-48 rounded-xl overflow-hidden mb-4 border border-white/10">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
              />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold text-[#60a5fa] mb-2">{p.title}</h3>

            {/* Description */}
            <p className="text-zinc-300 leading-relaxed mb-4">{p.desc}</p>

            {/* Links */}
            <div className="flex gap-4">
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 rounded-full font-medium bg-gradient-to-r from-[#00d4ff] to-[#60a5fa] text-white shadow-[0_0_15px_rgba(0,183,255,0.4)] hover:brightness-125 transition"
                >
                  GitHub
                </a>
              )}
              {p.deploy && (
                <a
                  href={p.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1 rounded-full font-medium bg-gradient-to-r from-[#7c5cff] to-[#60a5fa] text-white shadow-[0_0_15px_rgba(124,92,255,0.4)] hover:brightness-125 transition"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Glow Divider */}
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[240px] h-[2px] bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#60a5fa] blur-sm rounded-full opacity-60"
      />
    </motion.section>
  );
}
