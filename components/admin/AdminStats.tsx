"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, TrendingUp, AlertCircle } from "lucide-react";
import { EventWithStats } from "@/types/events";

interface AdminStatsProps {
  events: EventWithStats[];
}

export default function AdminStats({ events }: AdminStatsProps) {
  const totalEvents = events.length;
  const activeEvents = events.filter(e => e.registrationStatus === 'open').length;
  const totalParticipants = events.reduce((sum, event) => sum + event.participantCount, 0);
  const upcomingEvents = events.filter(e => new Date(e.date) > new Date()).length;

  const stats = [
    {
      title: "Total Events",
      value: totalEvents,
      icon: Calendar,
      color: "emerald",
      description: "All time events created"
    },
    {
      title: "Active Events",
      value: activeEvents,
      icon: TrendingUp,
      color: "blue",
      description: "Currently accepting registrations"
    },
    {
      title: "Total Participants",
      value: totalParticipants,
      icon: Users,
      color: "purple",
      description: "Across all events"
    },
    {
      title: "Upcoming Events",
      value: upcomingEvents,
      icon: AlertCircle,
      color: "orange",
      description: "Events scheduled for future"
    }
  ];

  const recentEvents = events
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-neutral-900/50 border-neutral-800/50 hover:bg-neutral-800/50 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-neutral-400 mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold text-neutral-200">{stat.value}</p>
                    <p className="text-xs text-neutral-500 mt-1">{stat.description}</p>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}-500/10`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Recent Events */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        <Card className="bg-neutral-900/50 border-neutral-800/50">
          <CardHeader>
            <CardTitle className="text-neutral-200 flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>Recent Events</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentEvents.length > 0 ? (
              <div className="space-y-4">
                {recentEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 rounded-lg bg-neutral-800/30 hover:bg-neutral-800/50 transition-colors">
                    <div className="flex-1">
                      <h4 className="font-medium text-neutral-200">{event.title}</h4>
                      <p className="text-sm text-neutral-400 mt-1">{event.description}</p>
                      <div className="flex items-center space-x-4 mt-2 text-xs text-neutral-500">
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                        <span>{event.location}</span>
                        <span className={`px-2 py-1 rounded-full ${
                          event.registrationStatus === 'open' 
                            ? 'bg-emerald-500/20 text-emerald-300' 
                            : event.registrationStatus === 'upcoming'
                            ? 'bg-blue-500/20 text-blue-300'
                            : 'bg-gray-500/20 text-gray-300'
                        }`}>
                          {event.registrationStatus}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-neutral-400">
                      <div className="text-center">
                        <p className="font-medium text-neutral-200">{event.participantCount}</p>
                        <p className="text-xs">Participants</p>
                      </div>
                      {event.maxParticipants && (
                        <div className="text-center">
                          <p className="font-medium text-neutral-200">
                            {Math.round((event.participantCount / event.maxParticipants) * 100)}%
                          </p>
                          <p className="text-xs">Filled</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-neutral-400">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>No events created yet</p>
              </div>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}