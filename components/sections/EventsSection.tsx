"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Boxes } from "../ui/background-boxes";
import { Particles } from "../ui/particles";
import {OrbitingCircles} from "@/components/ui/orbiting-circles";
import { AnimatedList } from "@/components/ui/animated-list";

const Icons = {
  python: () => (
    <svg viewBox="0 0 128 128" width="100" height="100">
      <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/><path opacity=".444" fill="url(#python-original-a)" enableBackground="new" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"/>
    </svg>
  ),
  javascript: () => (
    <svg viewBox="0 0 128 128" width="100" height="100">
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
    </svg>
  ),
  react: () => (
    <svg viewBox="0 0 128 128" width="100" height="100">
      <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g>
    </svg>
  ),
  typescript: () => (
    <svg viewBox="0 0 128 128" width="100" height="100">
      <path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10.87-.12 22.81-.1l22.56.05z"/>
    </svg>
  )
};

interface Event {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let developerEvents = [
  {
    name: "Hackathon",
    description: "48-hour coding challenge",
    time: "Coming Soon",
    icon: "🚀",
    color: "#4285F4", // Google Blue
  },
  {
    name: "Workshop",
    description: "Learn new technologies",
    time: "Every Weekend",
    icon: "💻",
    color: "#0F9D58", // Google Green
  },
  {
    name: "Tech Talks",
    description: "Industry expert sessions",
    time: "Monthly",
    icon: "🎯",
    color: "#DB4437", // Google Red
  },
  {
    name: "Project Showcase",
    description: "Show your builds",
    time: "Quarterly",
    icon: "✨",
    color: "#F4B400", // Google Yellow
  },
];

developerEvents = Array.from({ length: 10 }, () => developerEvents).flat();

const EventCard = ({ name, description, icon, color, time }: Event) => {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 mb-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "transform-gpu bg-transparent backdrop-blur-md",
        "[border:1px_solid_rgba(255,255,255,.1)]",
        "[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-400">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

function EventsListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col overflow-hidden rounded-lg",
        "backdrop-blur-md border border-white/10",
        className,
      )}
    >
      <div className="h-[500px] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <AnimatedList className="p-4">
          {developerEvents.slice(0, 5).map((event, idx) => (
            <EventCard {...event} key={idx} />
          ))}
        </AnimatedList>
      </div>
    </div>
  );
}

export function FeaturesSectionDemo() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const events = ["Hackathons", "Workshops", "Activities", "Talks"];

  const cards = [
    { 
      id: 1, 
      className: "col-span-12 lg:col-span-8 row-span-2 min-h-[500px]",
      showOrbits: true 
    },
    { 
      id: 2, 
      className: "col-span-12 lg:col-span-4 row-span-2 min-h-[500px]",
      showAnimatedList: true 
    },
    { 
      id: 3, 
      className: "col-span-12 lg:col-span-4 min-h-[240px]", 
      keyword: "Team",
      subheading: "Join Our Community" 
    },
    { 
      id: 4, 
      className: "col-span-12 lg:col-span-4 min-h-[240px]", 
      keyword: "Dev",
      subheading: "Build Together" 
    },
    { 
      id: 5, 
      className: "col-span-12 lg:col-span-4 min-h-[240px]", 
      keyword: "Events",
      subheading: "Learn & Grow" 
    },
    // { id: 6, className: "col-span-12 lg:col-span-6 min-h-[300px]", showEvents: true },
    // { id: 7, className: "col-span-12 lg:col-span-3 min-h-[300px]" },
    // { id: 8, className: "col-span-12 lg:col-span-3 min-h-[300px]" },
  ];

  return (
    <section className="py-24 bg-neutral-950/0 relative overflow-hidden">
      <Particles className="absolute inset-0" />
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-6xl font-bold bg-gradient-to-b from-green-700 to-green-300 bg-clip-text text-transparent  mb-4">
          WHAT WE DO
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Empowering students with technology through workshops, hackathons, and collaborative projects
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className={cn(
                "relative group rounded-3xl overflow-hidden",
                "border border-gray-500/20",
                "shadow-[0_2px_10px_rgba(0,0,0,0.1)]",
                "bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
                "bg-[size:14px_14px]",
                "backdrop-blur-sm",
                card.className
              )}
              style={{
                backgroundPosition: '0 0'
              }}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              {card.showOrbits && (
                   <div className="relative flex h-[500px] border-none w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-transparent md:shadow-xl">
                   <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-500 to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                     DEV
                   </span>
              
                   {/* Inner Circles */}
                   <OrbitingCircles
                     className="size-[30px] border-none bg-transparent"
                     duration={20}
                     delay={20}
                     radius={80}
                   >
                     <Icons.python />
                   </OrbitingCircles>
                   <OrbitingCircles
                     className="size-[30px] border-none bg-transparent"
                     duration={20}
                     delay={10}
                     radius={80}
                   >
                     <Icons.typescript />
                   </OrbitingCircles>
              
                   {/* Outer Circles (reverse) */}
                   <OrbitingCircles
                     className="size-[50px] border-none bg-transparent"
                     radius={190}
                     duration={20}
                     reverse
                   >
                     <Icons.react />
                   </OrbitingCircles>
                   <OrbitingCircles
                     className="size-[50px] border-none bg-transparent"
                     radius={190}
                     duration={20}
                     delay={20}
                     reverse
                   >
                     <Icons.typescript />
                   </OrbitingCircles>
                 </div>
              )}

              {card.showAnimatedList && (
                <EventsListDemo className="h-full" />
              )}

              {card.keyword && (
                <div className="relative z-40 h-full flex flex-col items-center justify-center space-y-4">
                  <motion.span
                    className="text-7xl font-bold uppercase tracking-wider bg-gradient-to-b from-gray-500 to-gray-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: [0.8, 1, 0.8],
                      scale: [0.98, 1.02, 0.98],
                      rotateX: [0, 10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {card.keyword}
                  </motion.span>
                  {card.subheading && (
                    <motion.p 
                      className="text-xl text-gray-300 font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {card.subheading}
                    </motion.p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
