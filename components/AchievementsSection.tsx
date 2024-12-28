"use client";
import { cn } from "@/lib/utils";
import {
  IconTrophy,
  IconUsers,
  IconCode,
  IconRobot,
  IconBrain,
  IconDeviceGamepad2,
  IconGitPullRequest,
  IconRocket,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

export function AchievementsSection() {
  const achievements = [
    {
      title: "National Champions",
      description: "First place in National Robotics Competition 2023",
      icon: <IconTrophy className="w-6 h-6" />,
      stat: "1st",
    },
    {
      title: "Active Members",
      description: "Growing community of passionate tech enthusiasts",
      icon: <IconUsers className="w-6 h-6" />,
      stat: "500+",
    },
    {
      title: "Projects Completed",
      description: "Successful projects delivered by our community",
      icon: <IconCode className="w-6 h-6" />,
      stat: "200+",
    },
    {
      title: "Robotics Innovations",
      description: "New robotics solutions developed and deployed",
      icon: <IconRobot className="w-6 h-6" />,
      stat: "50+",
    },
    {
      title: "AI Research Papers",
      description: "Published research papers in leading conferences",
      icon: <IconBrain className="w-6 h-6" />,
      stat: "25+",
    },
    {
      title: "Games Published",
      description: "Original games created by our Game Dev Society",
      icon: <IconDeviceGamepad2 className="w-6 h-6" />,
      stat: "30+",
    },
    {
      title: "Open Source Contributions",
      description: "Pull requests merged into major projects",
      icon: <IconGitPullRequest className="w-6 h-6" />,
      stat: "1000+",
    },
    {
      title: "Startup Launches",
      description: "Successful startups founded by our members",
      icon: <IconRocket className="w-6 h-6" />,
      stat: "15+",
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
            Our Achievements
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Celebrating milestones and successes across our tech community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {achievements.map((achievement, index) => (
            <Achievement key={achievement.title} {...achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Achievement = ({
  title,
  description,
  icon,
  stat,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  stat: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r border-green-500/20 py-10 relative group/achievement",
        (index === 0 || index === 4) && "lg:border-l border-green-500/20",
        index < 4 && "lg:border-b border-green-500/20"
      )}
    >
      {index < 4 ? (
        <div className="opacity-0 group-hover/achievement:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-t from-green-500/10 via-green-500/5 to-transparent pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/achievement:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-green-500/10 via-green-500/5 to-transparent pointer-events-none" />
      )}

      <div className="mb-4 relative z-10 px-10 text-green-400">
        {icon}
      </div>

      <div className="text-3xl font-bold mb-2 relative z-10 px-10 font-montserrat">
        <div className="absolute left-0 inset-y-0 h-8 w-1 rounded-tr-full rounded-br-full bg-green-500/20 group-hover/achievement:bg-green-500 transition-all duration-300" />
        <span className="bg-gradient-to-r from-green-200 to-emerald-100 bg-clip-text text-transparent group-hover/achievement:translate-x-2 transition duration-300 inline-block">
          {stat}
        </span>
      </div>

      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <span className="text-neutral-200 group-hover/achievement:text-green-300 transition duration-300">
          {title}
        </span>
      </div>

      <p className="text-sm text-neutral-400 group-hover/achievement:text-neutral-300 max-w-xs relative z-10 px-10 transition duration-300">
        {description}
      </p>
    </div>
  );
};