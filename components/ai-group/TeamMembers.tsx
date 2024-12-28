'use client';

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Dr. Sarah Kumar",
    role: "Faculty Advisor",
    expertise: "Deep Learning & Computer Vision",
    image: "/team/advisor.jpg"
  },
  {
    name: "Rahul Sharma",
    role: "Team Lead",
    expertise: "Machine Learning & NLP",
    image: "/team/lead.jpg"
  },
  {
    name: "Priya Patel",
    role: "Research Lead",
    expertise: "Neural Networks & Data Science",
    image: "/team/research.jpg"
  },
  // Add more team members as needed
];

export function TeamMembers() {
  return (
    <section className="py-12 md:py-20 bg-neutral-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Our Team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Meet our diverse team of AI enthusiasts, researchers, and innovators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-3 md:mb-4 flex justify-center">
                <Avatar className="h-24 w-24 md:h-32 md:w-32">
                  <AvatarImage src={member.image} alt={member.name} loading="lazy" />
                  <AvatarFallback className="text-xl md:text-2xl bg-neutral-800">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-1">{member.name}</h3>
              <p className="text-emerald-400 mb-1.5 md:mb-2 text-sm md:text-base">{member.role}</p>
              <p className="text-gray-400 text-sm md:text-base">{member.expertise}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
