"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Gradient = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn(
        "relative bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.neutral.900),theme(colors.neutral.600),theme(colors.neutral.900))]",
        "before:content-[''] before:absolute before:inset-0",
        "before:bg-[linear-gradient(to_right,transparent,white,transparent)]",
        "before:animate-[shine_2s_ease-in-out_infinite]",
        className
      )}
    >
      {children}
    </motion.span>
  );
}; 