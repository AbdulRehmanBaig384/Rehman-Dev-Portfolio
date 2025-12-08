"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import SectionTitle from "./SectionTitle";

export default function Contact() {
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
      modes: { repulse: { distance: 120, duration: 0.4 } },
    },
    particles: {
      color: { value: ["#00d4ff", "#7c3aed", "#00b5ff"] },
      links: {
        enable: true,
        distance: 150,
        color: "#00d4ff",
        opacity: 0.25,
        width: 1,
      },
      move: { enable: true, speed: 1 },
      number: { value: 70 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e: any) {
    e.preventDefault();
    if (!name || !email || !msg) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    setName("");
    setEmail("");
    setMsg("");
  }
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center py-24 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black via-blue-950/40 to-black" />
      {/* Particles */}
      {init && (
        <div className="absolute inset-0 -z-10 opacity-70">
          <Particles id="contactParticles" options={particlesOptions} />
        </div>
      )}
      {/* Heading */}
      <SectionTitle title="Contact" subtitle="Let's work together" centered />
      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className=" w-full max-w-2xl px-8 py-10 mt-10 rounded-3xl backdrop-blur-xl glass  border border-cyan-400/30 shadow-[0_0_30px_rgba(0,200,255,0.25)]
          bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 rounded-3xl pointer-events-none border border-transparent">
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent neon-border"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">

          <div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full px-4 py-3 text-white bg-black/20 rounded-lg outline-none border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition-all" />
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-3 text-white bg-black/20 rounded-lg outline-none border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition-all"
            />
          </div>

          <div>
            <textarea
              rows={4}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Write your message..."
              className="w-full px-4 py-3 text-white bg-black/20 rounded-lg outline-none border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition-all"
            ></textarea>
          </div>

          {/* BUTTON */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              w-full py-3 mt-4 font-semibold text-white
              rounded-full bg-gradient-to-r from-blue-950/50 via-black to-blue-950/20
              shadow-[0_0_20px_rgba(0,200,255,0.35)]
              hover:shadow-[0_0_30px_rgba(0,200,255,0.55)]
              transition-all">
            {submitted ? "✔ Message Sent!" : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </motion.section>
  );
}
