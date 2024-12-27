import Navbar from "@/components/Navbar";
import { SectionHero } from "@/components/sections/SectionHero";

export default function EthClubPage() {
  const badges = [
    { label: "Web Development", color: "bg-green-500/10 text-green-300" },
    { label: "Mobile Apps", color: "bg-emerald-500/10 text-emerald-300" },
    { label: "Cloud Computing", color: "bg-green-500/10 text-green-300" },
    { label: "DevOps", color: "bg-emerald-500/10 text-emerald-300" },
    { label: "System Design", color: "bg-green-500/10 text-green-300" },
    { label: "Full Stack", color: "bg-emerald-500/10 text-emerald-300" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <SectionHero
        title="Eth Club"
        subtitle="Where Code Meets Innovation"
        description="Join a thriving community of developers who are passionate about crafting exceptional software solutions. From web applications to mobile experiences, we're building the digital future together."
        badges={badges}
      />
      {/* Other sections will go here */}
    </main>
  );
} 