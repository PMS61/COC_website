import React from 'react';
import { motion } from 'framer-motion';
import { Mentor } from './teamData';
import {AnimatedTestimonials} from '@/components/ui/animated-testimonials'; 

interface MentorSectionProps {
  mentors: Mentor[];
}

const MentorSection: React.FC<MentorSectionProps> = ({ mentors }) => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-emerald-950/5 to-neutral-950" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent px-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Mentors & Advisors
        </motion.h2>
        <AnimatedTestimonials testimonials={mentors} />
      </div>
    </section>
  );
};

export default MentorSection;
