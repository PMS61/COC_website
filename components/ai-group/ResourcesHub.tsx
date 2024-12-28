'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";

const resources = [
  {
    title: "Machine Learning Fundamentals",
    description: "Comprehensive guide to ML algorithms and mathematics",
    type: "Course",
    link: "#"
  },
  {
    title: "Deep Learning Projects",
    description: "Hands-on projects with PyTorch and TensorFlow",
    type: "Projects",
    link: "#"
  },
  {
    title: "Research Papers Collection",
    description: "Latest papers in AI/ML from top conferences",
    type: "Papers",
    link: "#"
  },
  {
    title: "AI Tools & Libraries",
    description: "Curated list of essential AI development tools",
    type: "Tools",
    link: "#"
  }
];

export function ResourcesHub() {
  return (
    <section className="py-12 md:py-20 bg-black/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">ML/DL Resources</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Access our carefully curated collection of learning resources, tools, and research materials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-4 md:p-6 bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-all hover:scale-[1.02]">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <div className="bg-blue-500/10 p-2 md:p-3 rounded-lg shrink-0">
                    <Icons.book className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">{resource.title}</h3>
                    <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">{resource.description}</p>
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs md:text-sm bg-purple-500/10 text-purple-300 rounded">
                        {resource.type}
                      </span>
                      <a
                        href={resource.link}
                        className="text-blue-400 hover:text-blue-300 transition-colors flex items-center text-sm md:text-base"
                      >
                        Learn More
                        <Icons.arrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                      </a>
                    </div>
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
