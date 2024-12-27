"use client";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { EvervaultCard, Icon } from "./ui/evervault-card";
import { IconCode, IconBrain, IconRobot, IconDeviceGamepad2, IconBuildingCommunity, IconRocket } from "@tabler/icons-react";
import { motion } from "framer-motion";

export function ExploreSection() {
  return (
    <section className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400">
            Explore Our Communities
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Discover specialized groups within our tech ecosystem
          </p>
        </motion.div>

        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const items = [
  {
    title: "Dev Club",
    description: "Master the art of programming with our expert community. Join us in building the future of software.",
    header: "DEV",
    className: "md:col-span-2 md:row-span-1",
    icon: <IconCode className="h-5 w-5 text-green-400" />,
  },
  {
    title: "AI Group",
    description: "Explore the frontiers of artificial intelligence and machine learning.",
    header: "BRAIN",
    className: "md:col-span-1 md:row-span-1",
    icon: <IconBrain className="h-5 w-5 text-green-400" />,
  },
  {
    title: "Competitive Programming Team",
    description: "Build and program the future of robotics. From concept to creation.",
    header: "CP",
    className: "md:col-span-1 md:row-span-1",
    icon: <IconRobot className="h-5 w-5 text-green-400" />,
  },
  {
    title: "Blockchain Dev Society",
    description: "Create immersive gaming experiences that push boundaries.",
    header: "ETH",
    className: "md:col-span-1 md:row-span-1",
    icon: <IconDeviceGamepad2 className="h-5 w-5 text-green-400" />,
  },
  {
    title: "Open Source Hub",
    description: "Contribute to the global open source community. Make an impact.",
    header: "X",
    className: "md:col-span-1 md:row-span-1",
    icon: <IconBuildingCommunity className="h-5 w-5 text-green-400" />,
  },
  {
    title: "Community of Coders",
    description: "Shape the future of technology with groundbreaking projects and ideas.",
    header: "COC",
    className: "md:col-span-3 md:row-span-1",
    icon: <IconRocket className="h-5 w-5 text-green-400" />,
  },
]; 