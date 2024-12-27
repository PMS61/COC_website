"use client";

import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import ResourceTable from "@/components/ResourceTable";
import { domains } from "@/config/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const currentDomain = domains.find(
    domain => `/dashboard/${domain.resources}` === pathname
  );

  return (
    <div className="min-h-screen bg-black px-8 py-6">
      <motion.div
        initial="initial"
        animate="animate"
        className="space-y-8"
      >
        <motion.div 
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          }}
          className="space-y-3"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            Welcome back, {session?.user?.name?.split(" ")[0]}!
          </h1>
          <p className="text-lg text-neutral-400">
            Explore {currentDomain?.name || "educational"} resources curated just for you.
          </p>
        </motion.div>

        <motion.div 
          variants={{
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {domains.map((domain) => (
            <Link key={domain.name} href={`/dashboard/${domain.resources}`}>
              <Card className="group relative bg-neutral-900/50 border-neutral-800/50 p-6 hover:bg-neutral-800/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={cn(
                    "p-3 rounded-lg transition-all duration-300",
                    `bg-gradient-to-br ${domain.gradient} bg-opacity-10 group-hover:bg-opacity-20`,
                    "ring-1 ring-neutral-700/50 group-hover:ring-neutral-600/50"
                  )}>
                    <domain.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-200 group-hover:text-white transition-colors">
                      {domain.name}
                    </h3>
                    <p className="text-sm text-neutral-400 mt-1">
                      {domain.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {domain.categories.map((category) => (
                        <span
                          key={category}
                          className="px-2.5 py-1 text-xs rounded-md bg-neutral-800/50 text-neutral-300 ring-1 ring-neutral-700/50"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}