"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from "framer-motion";

interface ParticlesProps {
  className?: string;
}

export const Particles = ({ className }: ParticlesProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 75, damping: 15 }),
    y: useSpring(mouse.y, { stiffness: 75, damping: 15 }),
  };

  const particleCount = 50;
  const particles = Array.from({ length: particleCount });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = ref.current?.getBoundingClientRect();
      if (rect) {
        mouse.x.set(e.clientX - rect.left);
        mouse.y.set(e.clientY - rect.top);
      }
    };

    ref.current?.addEventListener("mousemove", handleMouseMove);
    return () => ref.current?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-green-500/20 rounded-full"
          style={{
            x: useTransform(smoothMouse.x, (x) => x + Math.cos(i) * 100),
            y: useTransform(smoothMouse.y, (y) => y + Math.sin(i) * 100),
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}; 