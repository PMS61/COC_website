import Navbar from "@/components/Navbar";
import { SectionHero } from "@/components/sections/SectionHero";
import { ResearchProjects } from "@/components/ai-group/ResearchProjects";
import { TeamMembers } from "@/components/ai-group/TeamMembers";
import { ResourcesHub } from "@/components/ai-group/ResourcesHub";
import { Events } from "@/components/ai-group/Events";
import { ProjectGallery } from "@/components/ai-group/ProjectGallery";
import { JoinCTA } from "@/components/ai-group/JoinCTA";
import { Suspense } from "react";

export default function AIGroupPage() {
  const badges = [
    { label: "Machine Learning", color: "bg-green-500/10 text-green-300" },
    { label: "Deep Learning", color: "bg-emerald-500/10 text-emerald-300" },
    { label: "Computer Vision", color: "bg-green-500/10 text-green-300" },
    { label: "NLP", color: "bg-emerald-500/10 text-emerald-300" },
    { label: "Neural Networks", color: "bg-green-500/10 text-green-300" },
    { label: "Data Science", color: "bg-emerald-500/10 text-emerald-300" },
  ];

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen bg-neutral-950">
        <Navbar />
        <SectionHero
          title="AI Group"
          subtitle="Shaping Tomorrow's Intelligence"
          description="Dive into the fascinating world of artificial intelligence with our dedicated community. Explore cutting-edge AI technologies, machine learning algorithms, and innovative applications that are transforming industries."
          badges={badges}
        />
        <ResearchProjects />
        <TeamMembers />
        <ResourcesHub />
        <Events />
        <ProjectGallery />
        <JoinCTA />
      </main>
    </Suspense>
  );
}