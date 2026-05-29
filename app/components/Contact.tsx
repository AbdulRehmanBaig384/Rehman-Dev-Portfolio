"use client";

import React, { useState, useEffect } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !email || !msg) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "37a16755-1c8a-4365-b289-1c903543c7d5",
          name: name,
          email: email,
          message: msg,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setName("");
        setEmail("");
        setMsg("");
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center py-24 text-white overflow-hidden">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black via-blue-950/40 to-black" />
      {/* Particles */}
      {init && (
        <div className="absolute inset-0 -z-10 opacity-70">
          <Particles id="contactParticles" options={particlesOptions} />
        </div>
      )}
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
        {/* Form or Success Message */}
        {submitStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 flex flex-col items-center justify-center text-center py-8 space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white">Thank You!</h3>
            <p className="text-zinc-300 text-base max-w-md">
              Message sent successfully! I'll get back to you soon.
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="mt-4 px-6 py-2.5 rounded-full border border-cyan-400/30 hover:border-cyan-400 text-sm text-zinc-300 hover:text-white transition-all bg-cyan-950/20 hover:bg-cyan-950/40 shadow-[0_0_15px_rgba(0,212,255,0.15)]"
            >
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
            <input type="hidden" name="access_key" value="37a16755-1c8a-4365-b289-1c903543c7d5" />
            
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 py-3 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-400 text-sm flex items-center gap-2"
              >
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Something went wrong. Please try again.</span>
              </motion.div>
            )}

            <div>
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required
                className="w-full px-4 py-3 text-white bg-black/20 rounded-lg outline-none border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition-all" />
            </div>
            <div>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" required
                className="w-full px-4 py-3 text-white bg-black/20 rounded-lg outline-none border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition-all"/>
            </div>
            <div>
              <textarea name="message" rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Write your message..." required
                className="w-full px-4 py-3 text-white bg-black/20 rounded-lg outline-none border border-white/20 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 transition-all"
              ></textarea>
            </div>
            {/* BUTTON */}
            <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: isSubmitting ? 1 : 1.05 }} whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              className="w-full py-3 mt-4 font-semibold text-white rounded-full bg-gradient-to-r from-blue-950/50 via-black to-blue-950/20
                shadow-[0_0_20px_rgba(0,200,255,0.35)] hover:shadow-[0_0_30px_rgba(0,200,255,0.55)] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none">
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        )}
      </motion.div>
    </motion.section>
  );
}
