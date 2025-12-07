"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook } from "react-icons/fa";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function Footer() {
  const [init, setInit] = useState(false);

  //  Initialize particles (same as HeroSection)
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  //  Particle configuration
  const particlesOptions: ISourceOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize:{ enable: true }},
      modes: { repulse: { distance: 120, duration: 0.4 } },
    },
    particles: {
      color: { value: ["#00d4ff", "#007bff", "#7c5cff"] },
      links: { color: "#00d4ff", distance: 140, enable: true, opacity: 0.25, width: 1 },
      move: { enable: true, speed: 1.1, direction: "none", outModes: { default: "bounce" } },
      number: { density: { enable: true, factor: 800 } as any, value: 65 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/abdul-rehman-baig-/" },
    { icon: <FaGithub />, href: "https://github.com/AbdulRehmanBaig384" },
    { icon: <FaEnvelope />, href: "mailto:rehmanbaig456@gmail.com" },
    { icon: <FaFacebook />, href: "https://facebook.com/yourprofile" },
  ];

  return (
    <footer className="relative overflow-hidden text-gray-300">
      {/*  Deep Black Gradient Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-blue-950/50 via-black to-blue-950/20" />

      {/*  Particle Background */}
      {init && (
        <div className="absolute inset-0 -z-10 opacity-80">
          <Particles id="footerParticles" options={particlesOptions} />
        </div>
      )}

      {/*  Floating Glows */}


      {/*  Main Footer Content */}
      <div className="relative z-10 flex flex-col items-center justify-between max-w-6xl gap-6 px-6 py-16 mx-auto md:flex-row">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl font-bold text-blue-400">Abdul Rehman Baig</h2>
          <p className="mt-1 text-sm text-gray-400">
            Full-Stack Developer | React | Node.js | MongoDB
          </p>
        </motion.div>

        {/* Center Navigation */}
        <motion.ul
          className="flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {navLinks.map((link, i) => (
            <motion.li
              key={i}
              whileHover={{ y: -3, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group"
            >
              <Link
                href={link.href}
                className="relative z-10 px-2 py-1 transition-colors duration-300 group-hover:text-blue-400"
              >
                {link.label}
              </Link>
              {/* Neon underline */}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded" />
            </motion.li>
          ))}
        </motion.ul>

        {/* Right Social Icons */}
        <motion.div
          className="flex gap-4 text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {socialLinks.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              whileHover={{ scale: 1.3, rotate: 10, color: "#60A5FA" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <motion.div
        className="relative z-10 pb-6 mt-8 text-xs text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        © {new Date().getFullYear()} Abdul Rehman — All Rights Reserved.
      </motion.div>

      {/* Floating animation keyframes */}
      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float-slower {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 9s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}

