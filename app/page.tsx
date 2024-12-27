import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ExploreSection } from "@/components/ExploreSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <AboutSection />
      <ExploreSection />
      <AchievementsSection />
      <ContactSection />
    </main>
  );
}
