'use client';


import { motion } from "framer-motion";
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
    <section className="py-20 bg-black/50">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Project Gallery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our collection of innovative AI projects with live demonstrations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-all">
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-sm bg-blue-500/10 text-blue-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    View Live Demo
                    <Icons.externalLink className="ml-2 h-4 w-4" />
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
