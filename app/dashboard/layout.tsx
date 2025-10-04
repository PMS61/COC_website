
"use client";
import { useState } from "react";

import { Sidebar } from "@/components/Sidebar";

import { Menu } from "lucide-react";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Callback to close sidebar only on mobile
  const handleSidebarLinkClick = () => {
    if (window.innerWidth < 1024) setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar for large screens */}
      <div className="hidden lg:block fixed left-0 h-screen w-72 z-40">
        <Sidebar />
      </div>

      {/* Sidebar popup for small screens */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${sidebarOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <Sidebar onLinkClick={handleSidebarLinkClick} />
      </div>

      <button
        className="lg:hidden fixed top-4 right-4 z-50 bg-neutral-900/80 text-white px-3 py-2 rounded shadow"
        onClick={() => setSidebarOpen((open) => !open)}
        aria-label="Toggle sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="flex-1 lg:ml-72">
        <main className="h-screen overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
