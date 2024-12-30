import React from "react";
import Navbar from "@/components/Navbar";
import AboutMain from "@/components/AboutMain";
const page = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <AboutMain />
    </main>
  );
};

export default page;
