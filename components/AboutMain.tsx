"use client";
import React from "react";
import Image from "next/image"; // Import Next.js Image component
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";

const AboutMain = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/95 via-neutral-900 to-black/95 text-neutral-300 px-8 py-12">
      {/* Header Section */}
      <div className="text-center mb-16 mt-16">
        <h1 className="text-6xl font-bold font-montserrat tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-green-400 to-green-300">
          About Us
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto font-montserrat leading-relaxed text-neutral-400">
          Welcome to the{" "}
          <span className="text-green-400">Community of Coders</span>&mdash;a
          lively space where both new and experienced developers come together.
          It&apos;s all about innovation, collaboration, and growing our skills
          together.
        </p>
      </div>

      {/* Vision Section */}
      <div className="flex justify-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-8 bg-neutral-800/70 rounded-xl border border-neutral-700 shadow-lg w-full md:w-1/2"
        >
          <h2 className="text-3xl font-semibold mb-4 text-green-400 text-center">
            Our Vision
          </h2>
          <p className="mt-4 text-lg font-montserrat leading-relaxed text-neutral-400 italic">
            &quot;Guided by Experience, Driven by Passion – For Juniors, By the
            Seniors.&quot;
          </p>
        </motion.div>
      </div>

      {/* Senate Teams Section */}
      <div className="flex flex-col gap-6 mb-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-green-400">
            Senate Teams
          </h2>
        </div>

        {/* Images */}
        <div className="flex justify-start">
          <div className="w-[60%] sm:w-[45%] ml-4">
            <Image
              src="/senate_image1.jpg"
              alt="Team 1"
              width={600} // Add width
              height={400} // Add height
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <div className="w-[60%] sm:w-[45%] mr-4">
            <Image
              src="/senate_image3.png"
              alt="Team 2"
              width={600} // Add width
              height={400} // Add height
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="flex justify-start">
          <div className="w-[60%] sm:w-[45%] ml-4">
            <Image
              src="/senate_image4.jpg"
              alt="Team 3"
              width={600} // Add width
              height={400} // Add height
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
};

export default AboutMain;
