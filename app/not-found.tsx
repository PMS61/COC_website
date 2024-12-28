"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl text-center relative">
        {/* Hero Text with Gradient */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <h1 className="text-[12rem] font-bold leading-none tracking-tight">
            <span className="bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 bg-clip-text text-transparent 
                           hover:from-emerald-400 hover:via-emerald-500 hover:to-teal-600 transition-all duration-300">
              404
            </span>
          </h1>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-8 relative z-10"
        >
          <h2 className="text-4xl font-semibold">
            <span className="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              Site Under Construction
            </span>
          </h2>
          
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            We&apos;re crafting something extraordinary. Our team is working on new features 
            and experiences that will transform the way you learn and collaborate.
          </p>

          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [0.98, 1, 0.98],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-2xl font-medium"
          >
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Coming Soon
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center px-8 py-3"
            >
              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 
                             group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300" />
              <span className="relative text-lg font-medium text-emerald-400 group-hover:text-emerald-300 
                             transition-colors duration-300">
                Return Home
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute inset-0 -z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent"
          />
        </div>
      </div>
    </div>
  );
} 