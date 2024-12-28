"use client";

import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black">
        <div className="fixed left-0 h-screen w-72">
        <Sidebar />
      </div>
      
      <div className="flex-1 ml-72">
        <main className="h-screen overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
