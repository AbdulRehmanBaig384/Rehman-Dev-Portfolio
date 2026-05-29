'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  // { label: "Tech Stack", href: "#tech" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  // { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
export default function Navbar() {
  const [active, setActive] = useState("#hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(`#${entry.target.id}`);
      }),
      { threshold: 0.4 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-[999] transition-all duration-500 backdrop-blur-xl border-b border-white/10
        ${scrolled ? "bg-black/60 py-2" : "bg-black/40 py-4"}
      `}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-black text-transparent bg-clip-text
            bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#a855f7] cursor-pointer">
            AR.
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-white/80">
            {navLinks.map(({ label, href }) => (
              <motion.a
                key={href}
                href={href}
                whileHover={{ scale: 1.1 }}
                className={`relative transition-all py-1 ${active === href ? "text-white font-medium" : "hover:text-white"}`}>
                {label}
                {active === href && (
                  <motion.span
                    layoutId="active-indicator"
                    className="absolute -bottom-1 left-0 w-full h-[2px] 
                    bg-gradient-to-r from-[#06b6d4] via-[#3b82f6] to-[#a855f7] rounded-full"
                  />
                )}
              </motion.a>
            ))}
            <a href="mailto:rehmanbaig456@gmail.com" className="ml-4 px-6 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all">
              Hire Me
            </a>
          </div>
          <button className="text-white md:hidden" onClick={() => setMenuOpen(true)}>
            <Menu size={30} />
          </button>
        </div>
      </motion.nav>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: menuOpen ? 0 : "100%" }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 right-0 w-72 h-full bg-black/90 backdrop-blur-2xl z-[999] p-8 border-l border-white/10">
        <button onClick={() => setMenuOpen(false)} className="absolute text-white top-4 right-4">
          <X size={30} />
        </button>
        <div className="mt-14 flex flex-col gap-6 text-white text-lg">
          {navLinks.map(({ label, href }) => (
            <motion.a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              whileHover={{ x: 10 }}
              className={`transition-all ${active === href ? "text-[#60a5fa] font-semibold" : "text-white/80"}`}>
              {label}
            </motion.a>
          ))}
          <a href="mailto:rehmanbaig456@gmail.com" onClick={() => setMenuOpen(false)} className="mt-4 px-6 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg">
            Hire Me
          </a>
        </div>
      </motion.div>
    </>
  );
}
