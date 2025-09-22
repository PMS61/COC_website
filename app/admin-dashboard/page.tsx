"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, Settings, BarChart3 } from "lucide-react";
import EventManagement from "@/components/admin/EventManagement";
import ParticipantManagement from "@/components/admin/ParticipantManagement";
import AdminStats from "@/components/admin/AdminStats";
import { Event, EventWithStats } from "@/types/events";

// Mock data - replace with actual API calls
const mockEvents: EventWithStats[] = [
  {
    id: "1",
    title: "AI Workshop Series",
    description: "Hands-on workshop on implementing neural networks from scratch",
    date: "2024-01-15",
    time: "10:00",
    location: "Virtual",
    maxParticipants: 100,
    registrationStatus: "open",
    category: "workshop",
    organizer: "AI Group",
    tags: ["AI", "Machine Learning", "Neural Networks"],
    requirements: ["Basic Python knowledge", "Laptop with Python installed"],
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    participantCount: 45,
    stats: {
      total: 45,
      confirmed: 42,
      attended: 0,
      cancelled: 3
    }
  },
  {
    id: "2",
    title: "Blockchain Hackathon",
    description: "48-hour hackathon focused on DeFi and Web3 solutions",
    date: "2024-02-10",
    time: "09:00",
    location: "Innovation Hub",
    maxParticipants: 80,
    registrationStatus: "upcoming",
    category: "hackathon",
    organizer: "ETH Club",
    tags: ["Blockchain", "Web3", "DeFi"],
    requirements: ["Team of 2-4 members", "Basic blockchain knowledge"],
    createdAt: "2024-01-05T00:00:00Z",
    updatedAt: "2024-01-10T00:00:00Z",
    participantCount: 32,
    stats: {
      total: 32,
      confirmed: 30,
      attended: 0,
      cancelled: 2
    }
  }
];

export default function AdminDashboard() {
  const router = useRouter();
  const [events, setEvents] = useState<EventWithStats[]>(mockEvents);
  const [activeTab, setActiveTab] = useState("overview");

  const handleCreateEvent = (eventData: Event) => {
    const newEvent: EventWithStats = {
      ...eventData,
      id: Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      participantCount: 0,
      stats: {
        total: 0,
        confirmed: 0,
        attended: 0,
        cancelled: 0
      }
    };
    setEvents(prev => [newEvent, ...prev]);
  };

  const handleUpdateEvent = (eventId: string, updates: Partial<Event>) => {
    setEvents(prev => prev.map(event => 
      event.id === eventId 
        ? { ...event, ...updates, updatedAt: new Date().toISOString() }
        : event
    ));
  };

  const handleDeleteEvent = (eventId: string) => {
    setEvents(prev => prev.filter(event => event.id !== eventId));
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="border-b border-neutral-800/50 bg-neutral-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-neutral-400 text-sm mt-1">
                Manage events and participants
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-neutral-400">
                Welcome, Admin
              </span>
              <Button
                onClick={() => router.push("/")}
                variant="outline"
                size="sm"
                className="border-neutral-700 text-neutral-600 hover:bg-neutral-800"
              >
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-neutral-900/50 border border-neutral-800/50">
            <TabsTrigger value="overview" className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4" />
              <span>Overview</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Events</span>
            </TabsTrigger>
            <TabsTrigger value="participants" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Participants</span>
            </TabsTrigger>
            
          </TabsList>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <TabsContent value="overview" className="space-y-6">
              <AdminStats events={events} />
            </TabsContent>

            <TabsContent value="events" className="space-y-6">
              <EventManagement
                events={events}
                onCreateEvent={handleCreateEvent}
                onUpdateEvent={handleUpdateEvent}
                onDeleteEvent={handleDeleteEvent}
              />
            </TabsContent>

            <TabsContent value="participants" className="space-y-6">
              <ParticipantManagement events={events} />
            </TabsContent>

            
          </motion.div>
        </Tabs>
      </div>
    </div>
  );
}
