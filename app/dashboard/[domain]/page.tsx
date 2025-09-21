"use client";

// Probablky make this and resource table a combined server component 

import React from "react";
import { useParams } from "next/navigation";
import { domains } from "@/config/navigation";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import ResourceTable from "@/components/ResourceTable";

interface Domain {
  name: string;
  resources: string;
  icon: React.ComponentType;
  gradient: string;
  description: string;
  categories: string[];
}

export const runtime = 'edge';

export default function DomainPage() {
  //   const { data: session } = useSession();
  const params = useParams();
  const currentDomain = domains.find(
    (d: Domain) => d.resources === params.domain
  );

  if (!currentDomain) return <div>{params.domain}</div>

  // Custom tab bar for categories
  const [activeTab, setActiveTab] = React.useState(currentDomain.categories[0]);

  return (
    <div className="min-h-screen bg-black px-8 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Welcome Section */}
        <div className="space-y-3">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
            {currentDomain.name}
          </h1>
          <p className="text-lg text-neutral-400">
            Browse through {currentDomain.name.toLowerCase()} resources curated for VJTI students.
          </p>
        </div>

        {/* Tabbed Resources Section */}
        <Card className="bg-neutral-900/50 backdrop-blur-sm border-neutral-800">
          <div className="p-8 border-b border-neutral-800">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${currentDomain.gradient} bg-opacity-10`}>
                <currentDomain.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-neutral-100">
                  Resources
                </h2>
                <p className="text-sm text-neutral-400 mt-1">
                  {currentDomain.description}
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            {/* Custom Tab Bar */}
            <div className="flex mb-8 gap-8 bg-transparent rounded-lg px-2 py-3 justify-start items-center border-b border-neutral-800 overflow-x-auto">
              {currentDomain.categories.map((category: string) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`relative text-lg font-medium capitalize transition-colors duration-200 px-2 py-1 ${activeTab === category
                      ? 'text-emerald-400 border-b-2 border-emerald-400'
                      : 'text-neutral-400 hover:text-neutral-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>


            {/* Tab Content */}
            <Card className="border-neutral-800/50 bg-neutral-900/30">
              <ResourceTable category={activeTab} domain={currentDomain.resources} />
            </Card>
          </div>
        </Card>
      </motion.div>
    </div>
  );
} 