"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import { TeamMember } from "./teamData";

export default function MemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="relative h-96 cursor-pointer perspective-1000"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* FRONT SIDE */}
        <div
          className="absolute w-full h-full rounded-3xl overflow-hidden bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_14px] backdrop-blur-sm border border-green-400/20"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="p-8 flex flex-col items-center justify-center h-full space-y-4">
            <motion.div
              className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-green-400/30"
              whileHover={{ scale: 1.05, borderColor: "rgba(74,222,128,0.5)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className="w-full h-full object-cover"
                style={{
                  objectPosition:
                    member.name === "Prathamesh Sankhe"
                      ? "50% 15%"
                      : member.name === "Aarya Pandey"
                      ? "50% 0%"
                      : "50% 50%",
                }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="space-y-3 text-center"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                {member.name}
              </h3>
              <motion.p
                className="text-green-400 font-semibold text-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {member.role}
              </motion.p>
              <p className="text-gray-500 text-sm italic">Click to learn more</p>
            </motion.div>


            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-emerald-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>
        </div>

        {/* BACK SIDE */}
        <div
          className="absolute w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-green-900/10 via-neutral-950 to-emerald-900/10 backdrop-blur-sm border border-green-400/30"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="p-8 flex flex-col justify-center h-full space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-green-400">{member.name}</h3>
              <p className="text-white font-medium text-lg">{member.role}</p>
              <div className="h-px bg-gradient-to-r from-green-400/50 to-transparent" />
              <p className="text-gray-300 text-base leading-relaxed">
                {member.description}
              </p>
            </motion.div>

                
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {member.linkedin && (
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center hover:bg-green-400/20 hover:border-green-400/50 transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Linkedin className="w-5 h-5 text-green-400" />
                </motion.a>
              )}

              {member.github && (
                <motion.a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-green-400/10 border border-green-400/30 flex items-center justify-center hover:bg-green-400/20 hover:border-green-400/50 transition-all"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-5 h-5 text-green-400" />
                </motion.a>
              )}
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-emerald-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
