"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
const socialLinks = [
  { label: "GitHub", icon: <FaGithub size={20} />, url: "https://github.com/AbdulRehmanBaig384" },
  { label: "LinkedIn", icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/abdul-rehman-baig-/" },
  { label: "Kaggle", icon: <SiKaggle size={20} />, url: "https://www.kaggle.com/rehamanengineer" },
  { label: "Email", icon: <FaEnvelope size={20} />, url: "mailto:rehmanbaig456@gmail.com" },
];
export default function SocialSidebar() {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-6">
      {socialLinks.map((item, index) => (
        <motion.a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ x: -12 }}
          className="group flex items-center gap-3 cursor-pointer">
          {/* Sliding Text */}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            whileHover={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-medium text-white whitespace-nowrap">
            {item.label}
          </motion.span>
          <motion.div
            whileHover={{ scale: 1.15 }}
            className="bg-gradient-to-br from-[#0ea5e9] to-[#7c3aed] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-md transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.8)]">
            {item.icon}
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
}
