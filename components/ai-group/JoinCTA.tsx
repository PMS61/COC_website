'use client';

import { motion } from "framer-motion";
import { Icons } from "@/components/icons";

export function JoinCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-neutral-950 to-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the AI Revolution
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Be part of our innovative AI community. Learn, collaborate, and build the future of artificial intelligence together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#apply"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
            >
              Apply Now
              <Icons.arrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 transition-colors"
            >
              Contact Us
              <Icons.mail className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 text-blue-400 mb-4">
                <Icons.users className="h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">Community</h3>
              <p className="text-gray-400">Join a vibrant community of AI enthusiasts</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/10 text-purple-400 mb-4">
                <Icons.brain className="h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">Learning</h3>
              <p className="text-gray-400">Access exclusive AI/ML learning resources</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mb-4">
                <Icons.rocket className="h-6 w-6" />
              </div>
              <h3 className="text-white font-semibold mb-2">Projects</h3>
              <p className="text-gray-400">Work on cutting-edge AI projects</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
