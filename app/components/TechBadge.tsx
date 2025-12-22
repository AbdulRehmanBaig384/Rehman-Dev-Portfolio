"use client";

import React from "react";
import { motion } from "framer-motion";
type Props = {
  name: string;
};
export default function TechBadge({ name }: Props) {
  return (
    <motion.span
      whileHover={{
        scale: 1.15,
        boxShadow: "0 0 18px rgba(56, 189, 248, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 12,
      }}
      className="relative inline-block rounded-full bg-gradient-to-r from-blue-700/30 via-indigo-800/30 to-cyan-700/30 
        px-4 py-1.5 text-sm font-semibold text-blue-100 tracking-wide border border-blue-500/40 shadow-[0_0_12px_rgba(37,99,235,0.35)]
        backdrop-blur-md hover:border-cyan-400/70 hover:shadow-[0_0_22px_rgba(56,189,248,0.65)] transition-all duration-300 ease-out
        overflow-hidden "
    >
      {/* Subtle animated gradient ring */}
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-indigo-500/10 blur-md opacity-60 animate-pulse" />

      {/* Inner rotating shimmer ring */}
      <motion.span
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
        className="absolute -inset-[1px] rounded-full border border-blue-400/20"
      />

      {/* Text */}
      <span className="relative z-10">{name}</span>
    </motion.span>
  );
}
