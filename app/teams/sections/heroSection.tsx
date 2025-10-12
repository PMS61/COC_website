"use client";

import React from "react";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/meteors";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Meteors number={20} />
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-neutral-950 to-neutral-950" />

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-8xl font-bold"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
              Meet The
            </span>{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Innovators
            </span>
          </motion.h1>

          <div className="flex flex-col items-center space-y-6">
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-3xl px-4">
              A collective of passionate developers, designers, and innovators building the future of technology.
            </p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-green-400 text-4xl"
            >
              ↓
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
