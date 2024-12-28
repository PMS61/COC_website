'use client';


import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";

const projects = [
  {
    title: "Face Recognition System",
    description: "Real-time face detection and recognition using deep learning",
    image: "/projects/face-recognition.jpg",
    demo: "https://demo.face-recognition.ai",
    tech: ["PyTorch", "OpenCV"]
  },
  {
    title: "Text Generation AI",
    description: "Advanced language model for creative text generation",
    image: "/projects/text-gen.jpg",
    demo: "https://demo.text-gen.ai",
    tech: ["Transformers", "TensorFlow"]
  },
  {
    title: "Object Detection",
    description: "Real-time object detection for surveillance systems",
    image: "/projects/object-detection.jpg",
    demo: "https://demo.object-detection.ai",
    tech: ["YOLO", "Python"]
  }
];

export function ProjectGallery() {
  return (
    <section className="py-12 md:py-20 bg-black/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Project Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Explore our collection of innovative AI projects with live demonstrations
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
              <Card className="overflow-hidden bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-all h-full flex flex-col">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5 md:mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 md:py-1 text-xs md:text-sm bg-blue-500/10 text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm md:text-base"
                  >
                    View Live Demo
                    <Icons.externalLink className="ml-1.5 md:ml-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
