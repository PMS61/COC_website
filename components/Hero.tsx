"use client";
import React from 'react';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="h-screen w-full bg-black/95 relative flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-bold font-montserrat tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 leading-none">
              Community of
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.emerald.400))] leading-none">
              Coders
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4">
            {['Innovate', 'Create', 'Collaborate'].map((text) => (
              <span 
                key={text}
                className="text-sm text-neutral-300 px-4 py-2 border border-neutral-700/50 rounded-full"
              >
                {text}
              </span>
            ))}
          </div>

          <p className="text-neutral-300 max-w-2xl mx-auto text-lg font-montserrat leading-relaxed">
            Join an exclusive community of innovative developers where ideas transform into reality. 
            <span className="text-green-400"> Build the future of technology together.</span>
          </p>
          
          <div className="flex items-center justify-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-green-500/20 via-green-500/10 to-emerald-500/20 rounded-xl font-montserrat text-green-300 hover:text-green-200 hover:shadow-[0_0_30px_-5px] hover:shadow-green-500/30 transition-all border border-green-500/20"
            >
              Join the Community
            </motion.button>
            <motion.button 
              whileHover={{ x: 5 }}
              className="px-8 py-4 text-neutral-400 hover:text-green-300 font-montserrat transition-colors flex items-center gap-2"
            >
              Explore Projects
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-12 flex items-center justify-center gap-8 opacity-70">
            {['React', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="text-sm text-neutral-400 flex flex-col items-center gap-2"
              >
                <div className="w-12 h-12 rounded-lg bg-neutral-900/50 border border-neutral-800 flex items-center justify-center">
                  {tech[0]}
                </div>
                <span>{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <BackgroundBeams />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/0 z-[5]" />
    </div>
  );
};

export default Hero; 