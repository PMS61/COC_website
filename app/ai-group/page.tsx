import Navbar from "@/components/Navbar";
import { SectionHero } from "@/components/sections/SectionHero";

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
    <main className="min-h-screen bg-neutral-950">
      <Navbar />
      <SectionHero
        title="AI Group"
        subtitle="Shaping Tomorrow's Intelligence"
        description="Dive into the fascinating world of artificial intelligence with our dedicated community. Explore cutting-edge AI technologies, machine learning algorithms, and innovative applications that are transforming industries."
        badges={badges}
      />
      {/* Other sections will go here */}
    </main>
  );
} 