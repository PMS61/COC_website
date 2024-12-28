'use client';

import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

export function JoinCTA() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-neutral-950 to-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Join the AI Revolution
          </h2>
          <p className="text-base md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl mx-auto">
            Be part of our innovative AI community. Learn, collaborate, and build the future of artificial intelligence together.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors text-sm md:text-base"
            >
              Apply Now
              <Icons.arrowRight className="ml-1.5 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 md:px-6 py-2.5 md:py-3 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition-colors text-sm md:text-base"
            >
              Contact Us
              <Icons.mail className="ml-1.5 md:ml-2 h-4 w-4 md:h-5 md:w-5" />
            </a>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 text-blue-400 mb-3 md:mb-4">
                <Icons.users className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-white font-semibold mb-1 md:mb-2 text-lg md:text-xl">Community</h3>
              <p className="text-gray-400 text-sm md:text-base">Join a vibrant community of AI enthusiasts</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500/10 text-purple-400 mb-3 md:mb-4">
                <Icons.brain className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-white font-semibold mb-1 md:mb-2 text-lg md:text-xl">Learning</h3>
              <p className="text-gray-400 text-sm md:text-base">Access exclusive AI/ML learning resources</p>
            </div>
            <div className="text-center sm:col-span-2 md:col-span-1">
              <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-emerald-500/10 text-emerald-400 mb-3 md:mb-4">
                <Icons.rocket className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <h3 className="text-white font-semibold mb-1 md:mb-2 text-lg md:text-xl">Projects</h3>
              <p className="text-gray-400 text-sm md:text-base">Work on cutting-edge AI projects</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
