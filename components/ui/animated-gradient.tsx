"use client";
import { motion } from "framer-motion";

interface AnimatedGradientProps {
  customGradient?: string;
}

export const AnimatedGradient = ({ customGradient }: AnimatedGradientProps) => {
  return (
    <motion.div
      className={`absolute inset-0 bg-gradient-to-r ${
        customGradient || "from-green-500/10 via-neutral-800/30 to-emerald-500/10"
      }`}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 5,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        backgroundSize: "400% 400%",
      }}
    />
  );
}; 