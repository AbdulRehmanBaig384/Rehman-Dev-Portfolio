"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function IntroScreen({ onFinish }: { onFinish: () => void }) {
  const [show, setShow] = useState(true);
  const words = ["WELCOME TO", "ABDUL REHMAN BAIG", "PORTFOLIO"];
  useEffect(() => {
    const timer = setTimeout(() =>{ setShow(false)
    onFinish();
   }, 7500);
    return () => clearTimeout(timer);
  }, []);
  if (!show) return null;
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-[99999] overflow-hidden pointer-events-none" 
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 6.6, duration: 1.2 }}>
      <Canvas
        className="absolute inset-0"
        camera={{ position: [0, 0, 3.2], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 2]} intensity={1.5} />
        <Sphere args={[1.6, 64, 64]}>
          <meshStandardMaterial
            wireframe
            color={"#0ef"}
            emissive={"#0ef"}
            emissiveIntensity={1.8}/>
        </Sphere>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <motion.div
        className="absolute w-80 h-80 md:w-96 md:h-96 bg-cyan-500 blur-[180px] rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 4, opacity: 0.45 }}
        transition={{ duration: 2 }}/>
      <motion.div
        className="absolute inset-0"
        style={{
          background:"repeating-linear-gradient(0deg, rgba(0,255,255,0.06) 0px, transparent 4px)",}}
        initial={{ backgroundPositionY: "0%" }}
        animate={{ backgroundPositionY: "200%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}/>
      <motion.div
        className="absolute inset-0 bg-[#06131D]"
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}/>

      {/* Exit Wall */}
      <motion.div
        className="absolute inset-0 bg-black"
        initial={{ y: 0 }}
        animate={{ y: "100%" }}
        transition={{ delay: 5, duration: 1.2, ease: "easeInOut" }}
      />

      {/* Text */}
      <div className="absolute inset-0 z-[10] flex flex-col items-center justify-center text-center px-6 space-y-4">
        {words.map((word, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: 1.3 + i * 1,
              duration: 0.9,
              ease: "easeOut",
            }}
            className={`font-extrabold ${
              i === 1
                ? "text-4xl sm:text-6xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(0,200,255,0.6)]"
                : "text-gray-300 text-lg sm:text-3xl tracking-wider"
            }`}
          >
            {word}
          </motion.div>
        ))}
      </div>

      {/* Noise */}
      <motion.div
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/static.png')",
        }}
        animate={{ opacity: [0.1, 0.3, 0.2, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
}
