'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Computer Vision for Healthcare",
    description: "Deep learning models for medical image analysis and diagnosis assistance.",
    tech: ["PyTorch", "OpenCV", "Medical Imaging"],
    status: "Ongoing"
  },
  {
    title: "NLP Research",
    description: "Advanced language models for Indic languages processing and understanding.",
    tech: ["Transformers", "BERT", "NLP"],
    status: "Active"
  },
  {
    title: "Reinforcement Learning",
    description: "Developing intelligent agents for complex decision-making scenarios.",
    tech: ["TensorFlow", "PyTorch", "RL"],
    status: "Upcoming"
  }
];

export function ResearchProjects() {
  return (
    <section className="py-12 md:py-20 bg-black/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Research Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Exploring the frontiers of artificial intelligence through innovative research projects
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-4 md:p-6 bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-colors h-full">
                <div className="flex flex-col h-full">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5 md:mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-3 md:mb-4 flex-grow text-sm md:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 md:py-1 text-xs md:text-sm bg-blue-500/10 text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 md:mt-4">
                    <span className="px-2 py-0.5 md:py-1 text-xs md:text-sm bg-green-500/10 text-green-300 rounded">
                      {project.status}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
