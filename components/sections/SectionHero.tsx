"use client";

import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

interface Badge {
  label: string;
  color: string;
}

interface SectionHeroProps {
  title: string;
  subtitle: string;
  description: string;
  badges: Badge[];
}

export function SectionHero({ title, subtitle, description, badges }: SectionHeroProps) {
  return (
    <LampContainer>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center space-y-8"
      >
        <div className="space-y-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-green-200 to-green-400 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl font-montserrat"
          >
            {title}
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-neutral-200 to-neutral-400 bg-clip-text text-transparent font-montserrat"
          >
            {subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 max-w-3xl"
        >
          {badges.map((badge, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.7 + index * 0.1,
                duration: 0.4,
                ease: "easeOut",
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border border-green-500/20 
                ${badge.color} backdrop-blur-sm hover:border-green-500/40 transition-all duration-300
                hover:scale-105 cursor-pointer`}
            >
              {badge.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </LampContainer>
  );
} 