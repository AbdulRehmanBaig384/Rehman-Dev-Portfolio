"use client";
import {useState,useEffect} from "react";
import {motion} from "framer-motion";
import Particles,{initParticlesEngine} from "@tsparticles/react";
import {loadSlim} from "@tsparticles/slim";
import type {ISourceOptions} from "@tsparticles/engine";

export default function ExperiencePage() {
  const [init,setInit]=useState(false);

  useEffect(()=>{
    initParticlesEngine(async(engine) => {
      await loadSlim(engine);
    }).then(()=>setInit(true));
  },[]);
  const particlesOptions:ISourceOptions={
    background:{color:{value:"transparent"}},
    fpsLimit:120,
    interactivity:{
      events:{onHover:{enable:true,mode:"repulse"}, resize:{enable: true }},
      modes:{repulse:{distance:100,duration:0.4}},
    },
    particles:{
      color:{value:["#00d4ff","#007bff","#7c5cff"] },
      links: {
        color: "#00d4ff",
        distance: 130,
        enable: true,
        opacity: 0.25,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.3,
        direction: "none",
        outModes: { default: "bounce" },
      },
      number:{density:{enable:true,factor:800}as any,value:70},
      opacity:{value:0.5},
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };
  const experiences = [
    {
      title: "Junior React Developer — HZTech",
      subtitle: "Onsite | February 2026 – Present",
      details: [
        "Building and maintaining responsive React.js and React Native interfaces",
        "Working with Tailwind CSS for UI consistency and responsive design",
        "State management using Redux Toolkit, Zustand, and Context API",
        "Strong understanding of React concepts: hooks, component lifecycle, props, memoization, and custom hooks",
        "Mobile app development using React Native with Expo",
        "Backend integration using Firebase (Authentication, Firestore, Storage)",
        "Building REST APIs with Node.js and Express.js",
        "Experience with NestJS for scalable backend architecture",
        "Working with Next.js for SSR and SSG based web applications",
        "Collaborating with the team on real client projects"
      ],
      gradient: "from-[#00d4ff] to-[#60a5fa]",
    },
    {
      title: "Intern — HZTech",
      subtitle: "Onsite | October 2025 – January 2026",
      details: [
        "Learned and applied core React concepts: components, props, state, and hooks",
        "Built responsive UIs using React.js and Tailwind CSS",
        "Practiced state management using Context API and basic Redux",
        "Worked on React Native fundamentals for mobile UI components",
        "Focused on UI/UX consistency and dynamic motion design with Framer Motion"
      ],
      gradient: "from-[#00d4ff] to-[#60a5fa]",
    },
    {
      title: "Remote Internship — Elevopathways",
      subtitle: "Remote | Cairo, Egypt | 2025",
      details: [
        "Collaborated remotely on React-based projects, integrating backend APIs and ensuring performance optimization."
      ],
      gradient: "from-[#7c3aed] to-[#00e0ff]",
    },
  ];
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center py-24 overflow-hidden text-white">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-950/50 via-black to-blue-950/20" />
    {/*Particles movement  */}
      {init && (
        <div className="absolute inset-0 -z-10 opacity-80">
          <Particles id="experienceParticles" options={particlesOptions} />
        </div>
      )}
      
      {/* heading */}
      <motion.div className="relative mt-10 mb-16 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}>
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#60a5fa] via-[#00e0ff] to-[#7c3aed] bg-clip-text text-transparent">
          Experience
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "80%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute left-1/2 -bottom-3 h-[3px] bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#60a5fa] rounded-full -translate-x-1/2"/>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-gradient-to-b from-[#00d4ff] via-[#60a5fa] to-[#7c3aed] h-full opacity-50" />

        <div className="space-y-14">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.25, duration: 0.6 }}
              viewport={{ once: true }}
              className={`relative md:w-1/2 ${
                i % 2 === 0 ? "ml-auto pr-10" : "mr-auto pl-10"
              }`}>
              <div
                className={`absolute top-3 w-6 h-6 rounded-full bg-gradient-to-br ${exp.gradient} shadow-[0_0_30px_rgba(0,183,255,0.6)] border border-white/20`}/>
              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                className="glass rounded-2xl mb-6 p-6 hover:shadow-[0_0_30px_rgba(0,183,255,0.4)] animate-float-slow ">
                <h3 className="text-2xl font-semibold text-[#60a5fa] mb-1">
                  {exp.title}
                </h3>
                <p className="text-sm text-zinc-400">{exp.subtitle}</p>
                <div className="mt-3 leading-relaxed text-zinc-300">
                  {Array.isArray(exp.details) ? (
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.details.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{exp.details}</p>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        animate={{ opacity: [0.4, 0.8, 0.4], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[240px] h-[2px] bg-gradient-to-r from-[#00d4ff] via-[#7c3aed] to-[#60a5fa] blur-sm rounded-full opacity-60"/>
    </motion.section>
  );
}
