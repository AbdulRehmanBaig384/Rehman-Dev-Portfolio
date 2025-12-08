"use client";
import { motion,Variants } from "framer-motion";

export default function About() {
  const sectionVariants:Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};
  return (
    <motion.section
      id="about"
      variants={sectionVariants}
        initial="hidden"
      whileInView="show"
     className="relative flex flex-col items-center justify-center pt-20 overflow-hidden text-center">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-950/50 via-black to-blue-950/20" />

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
          className=" mb-8 text-5xl font-extrabold bg-gradient-to-r from-[#00d4ff] via-[#60a5fa] to-[#7c3aed] bg-clip-text text-transparent drop-shadow-xl">
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-5xl px-6 text-center md:px-10 lg:px-20">
        <p className="mb-6 text-base leading-relaxed text-zinc-300 md:text-lg">
          Hi 👋 I’m{" "}
          <span className="font-semibold text-cyan-400">Abdul Rehman Baig</span>, a
          passionate{" "}
          <span className="text-blue-400">Full Stack Developer</span> and tech
          enthusiast from Karachi, Pakistan. I love crafting beautiful and
          high-performance web applications using{" "}
          <span className="text-cyan-400">React.js</span>,{" "}
          <span className="text-cyan-400">Next.js</span>, and{" "}
          <span className="text-cyan-400">Node.js</span>.
        </p>

        <p className="mb-6 text-base leading-relaxed text-zinc-400 md:text-lg">
          My mission is to blend creativity with technology — delivering
          seamless digital experiences that look stunning and feel effortless.
          Every project I build focuses on performance, accessibility, and
          beautiful design.
        </p>

        <p className="mb-10 text-base leading-relaxed text-zinc-400 md:text-lg">
          I’m always exploring new frameworks, libraries, and design systems to
          stay ahead in this fast-moving tech world. My ultimate goal is to
          evolve into one of the leading developers in my field and make a
          meaningful impact through innovation and collaboration.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-8 py-1 mb-4 mt-2 text-sm font-medium text-white transition-all rounded-full shadow-lg glow-btn bg-gradient-to-r from-blue-600 to-cyan-500">
          Let’s Connect 
        </motion.button>
      
      </motion.div> 
    </motion.section>
  );
}


