"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Meteors } from "@/components/ui/meteors";
import Navbar from "@/components/Navbar";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const teamMembers = [
  {
    name: "John Doe",
    role: "Lead Developer",
    image: "/path/to/image.jpg",
  },
];

const mentors = [
  {
    quote: "Guiding the next generation of developers to build impactful solutions.",
    name: "Jane Smith",
    designation: "Technical Advisor at Google",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    quote: "Empowering students with the tools and knowledge to innovate.",
    name: "Michael Chen",
    designation: "Senior Engineer at Microsoft",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  // Add more mentors as needed
];

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
        <Navbar />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Meteors number={20} />
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-8xl font-bold">
              <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">Meet The</span>{' '}
              <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">Innovators</span>
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex flex-col items-center space-y-6"
            >
              <p className="text-2xl text-gray-400 max-w-3xl">
                A collective of passionate developers, designers, and innovators building the future of technology
              </p>
              {/* <div className="flex gap-4">
                <button className="px-8 py-3 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 text-white font-semibold hover:scale-105 transition-all">
                  Join Our Team
                </button>
                <button className="px-8 py-3 rounded-full border border-green-400/20 text-green-400 hover:bg-green-400/10 transition-all">
                  Learn More
                </button>
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Core Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="relative group rounded-3xl overflow-hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_14px] backdrop-blur-sm border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Team member card content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated Mentors Section with AnimatedTestimonials */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our Mentors & Advisors
          </motion.h2>
          <AnimatedTestimonials testimonials={mentors} />
        </div>
      </section>
    </div>
  );
} 