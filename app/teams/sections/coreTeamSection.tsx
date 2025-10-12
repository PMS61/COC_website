"use client";

import React from "react";
import { motion } from "framer-motion";
import MemberCard from "./memberCard";
import { TeamMember } from "./teamData.js";

interface CoreTeamSectionProps {
  generalSecretary: TeamMember;
  teamMembers: TeamMember[];
}

export default function CoreTeamSection({ generalSecretary, teamMembers }: CoreTeamSectionProps) {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-green-950/5 to-neutral-950" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-green-400 via-emerald-500 to-emerald-600 bg-clip-text text-transparent px-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Core Team
        </motion.h2>

        {/* General Secretary */}
        <div className="flex justify-center mb-16">
          <motion.div
            className="w-full max-w-md"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <MemberCard member={generalSecretary} index={0} />
          </motion.div>
        </div>

        {/* Team Members */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {teamMembers.map((member, index) => (
            <MemberCard key={member.name} member={member} index={index + 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
