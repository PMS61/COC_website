"use client";
import { motion } from "framer-motion";
import { IconMail, IconMapPin, IconBrandDiscord } from "@tabler/icons-react";

export function ContactSection() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
            Get in Touch
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Have questions? We&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group"
          >
            <div className="relative h-full px-8 py-12 rounded-2xl border border-green-500/20 hover:border-green-500/40 bg-neutral-900/50 backdrop-blur-sm transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <IconMail className="w-8 h-8 text-green-400 mb-6" />
                <h3 className="text-xl font-semibold text-neutral-200 mb-2">Email Us</h3>
                <p className="text-neutral-400 mb-4 text-sm">We&apos;ll respond within 24 hours</p>
                <a href="mailto:contact@example.com" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                  contact@example.com
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group"
          >
            <div className="relative h-full px-8 py-12 rounded-2xl border border-green-500/20 hover:border-green-500/40 bg-neutral-900/50 backdrop-blur-sm transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <IconBrandDiscord className="w-8 h-8 text-green-400 mb-6" />
                <h3 className="text-xl font-semibold text-neutral-200 mb-2">Join Discord</h3>
                <p className="text-neutral-400 mb-4 text-sm">Chat with the community</p>
                <a href="#" className="text-green-400 hover:text-green-300 transition-colors text-sm">
                  discord.gg/community
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group"
          >
            <div className="relative h-full px-8 py-12 rounded-2xl border border-green-500/20 hover:border-green-500/40 bg-neutral-900/50 backdrop-blur-sm transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <IconMapPin className="w-8 h-8 text-green-400 mb-6" />
                <h3 className="text-xl font-semibold text-neutral-200 mb-2">Visit Us</h3>
                <p className="text-neutral-400 mb-4 text-sm">Come say hello at our office</p>
                <span className="text-green-400 text-sm">
                  123 Innovation Street<br />
                  Tech Valley, CA 94043
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}