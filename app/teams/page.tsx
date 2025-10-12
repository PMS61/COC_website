"use client";

import React, { Suspense } from "react";
import Navbar from "@/components/Navbar";
import { Meteors } from "@/components/ui/meteors";
import { generalSecretary, teamMembers, mentors } from "./sections/teamData";

import HeroSection from "./sections/heroSection"
import CoreTeamSection from "./sections/coreTeamSection";
import MentorSection from "./sections/mentorSection";

// i have created a seperate file for including generalSecretary , teamMembers and mentors in /sections/teamData.js 

export default function TeamsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center text-white">
          Loading...
        </div>
      }
    >
      <div className="min-h-screen bg-neutral-950 text-white overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <CoreTeamSection generalSecretary={generalSecretary} teamMembers={teamMembers} />
        <MentorSection mentors={mentors} />
      </div>
    </Suspense>
  );
}
