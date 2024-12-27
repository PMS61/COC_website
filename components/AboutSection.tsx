"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

export function AboutSection() {
  const timelineData = [
    {
      title: "2024",
      content: (
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-neutral-200 text-sm md:text-base font-normal mb-8"
          >
            Launched our state-of-the-art AI Research Lab and expanded our community to over 10,000 members globally.
          </motion.p>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/images/ai-lab.jpg"
                alt="AI Research Lab"
                width={500}
                height={500}
                className="rounded-lg object-cover h-44 lg:h-60 w-full border border-green-500/20 hover:border-green-500/40 transition-colors duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/images/community.jpg"
                alt="Global Community"
                width={500}
                height={500}
                className="rounded-lg object-cover h-44 lg:h-60 w-full border border-green-500/20 hover:border-green-500/40 transition-colors duration-300"
              />
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-neutral-200 text-sm md:text-base font-normal mb-8"
          >
            Established partnerships with leading tech companies and launched our first successful startup incubator program.
          </motion.p>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/images/partnership.jpg"
                alt="Tech Partnerships"
                width={500}
                height={500}
                className="rounded-lg object-cover h-44 lg:h-60 w-full border border-green-500/20 hover:border-green-500/40 transition-colors duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/images/incubator.jpg"
                alt="Startup Incubator"
                width={500}
                height={500}
                className="rounded-lg object-cover h-44 lg:h-60 w-full border border-green-500/20 hover:border-green-500/40 transition-colors duration-300"
              />
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-neutral-200 text-sm md:text-base font-normal mb-8"
          >
            Founded with a vision to revolutionize tech education and innovation. Started with our first cohort of 100 passionate developers.
          </motion.p>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src="/images/founding.jpg"
                alt="Founding Moment"
                width={500}
                height={500}
                className="rounded-lg object-cover h-44 lg:h-60 w-full border border-green-500/20 hover:border-green-500/40 transition-colors duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Image
                src="/images/first-cohort.jpg"
                alt="First Cohort"
                width={500}
                height={500}
                className="rounded-lg object-cover h-44 lg:h-60 w-full border border-green-500/20 hover:border-green-500/40 transition-colors duration-300"
              />
            </motion.div>
          </div>
        </div>
      ),
    },
  ];

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
            Our Journey
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            From humble beginnings to transformative impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <Timeline data={timelineData} />
        </motion.div>
      </div>
    </section>
  );
} 