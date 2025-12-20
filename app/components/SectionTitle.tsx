"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle?: string;
   centered?: boolean;
};
export default function SectionTitle({ title, subtitle,centered }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-10 text-center sm:text-left">
      <motion.h2
        className="text-3xl font-bold text-transparent sm:text-4xl bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-500 bg-clip-text"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 120 }}>
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="max-w-xl mt-2 text-base text-zinc-400"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {subtitle}
        </motion.p>
      )}

      {/* subtle blue line animation */}
      <motion.div
        className="mt-3 h-[2px] w-20 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto sm:mx-0 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />
    </motion.div>
  );
}
