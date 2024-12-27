"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { EvervaultCard } from "./evervault-card";
// import { Gradient } from "./gradient-text";

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string;
  description?: string;
  header?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-2xl hover:shadow-green-500/10 transition duration-300 border border-neutral-800/50 bg-gradient-to-b from-neutral-900/90 to-neutral-900/50 backdrop-blur-sm overflow-hidden",
        className
      )}
    >
      <div className="relative h-full w-full p-6 flex flex-col">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500" />
        
        <div className="flex-grow relative z-10 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 group-hover/bento:border-green-500/30 transition-colors">
              {icon}
            </div>
            <h3 className="font-semibold text-lg bg-gradient-to-r from-neutral-50 to-neutral-200 bg-clip-text text-transparent group-hover/bento:from-green-200 group-hover/bento:to-emerald-100 transition-all duration-300">
              {title}
            </h3>
          </div>

          <p className="text-sm text-neutral-400 leading-relaxed group-hover/bento:text-neutral-300 transition-colors mb-6 pl-2 border-l border-green-500/20 group-hover/bento:border-green-500/30">
            {description}
          </p>

          <div className="flex-grow relative flex items-center justify-center min-h-[200px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-5xl font-bold text-neutral-600 transition-all duration-500 group-hover/bento:bg-gradient-to-b group-hover/bento:from-neutral-200 group-hover/bento:to-neutral-600 group-hover/bento:bg-clip-text group-hover/bento:text-transparent">
                {header}
              </span>
            </div>
            <EvervaultCard className="w-full h-full opacity-0 group-hover/bento:opacity-100 transition-opacity absolute inset-0" />
          </div>

          <div className="mt-6">
            <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/30 text-green-300 hover:text-green-200 transition-all duration-300 text-sm font-medium group-hover/bento:shadow-lg group-hover/bento:shadow-green-500/20">
              Explore More
              <span className="inline-block ml-2 transition-transform group-hover/bento:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-transparent blur-3xl opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/5 blur-3xl opacity-30" />
      </div>
      
      <div
        className={cn(
          "relative z-10 grid md:auto-rows-[28rem] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto p-4",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
