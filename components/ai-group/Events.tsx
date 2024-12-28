'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/icons";

const events = [
  {
    title: "AI Workshop Series",
    date: "January 15, 2024",
    description: "Hands-on workshop on implementing neural networks from scratch",
    location: "Virtual",
    registration: "Open"
  },
  {
    title: "Research Symposium",
    date: "February 1, 2024",
    description: "Presenting latest research in computer vision and NLP",
    location: "Main Auditorium",
    registration: "Coming Soon"
  },
  {
    title: "AI Hackathon",
    date: "March 10, 2024",
    description: "48-hour hackathon focused on AI solutions for real-world problems",
    location: "Innovation Hub",
    registration: "Coming Soon"
  }
];

export function Events() {
  return (
    <section className="py-12 md:py-20 bg-neutral-950">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">Upcoming Events</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Join us for exciting AI events, workshops, and learning opportunities
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-4 md:p-6 bg-neutral-900/50 border-neutral-800 hover:border-neutral-700 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-1.5 md:mb-2">
                      <Icons.calendar className="h-4 w-4 md:h-5 md:w-5 text-emerald-400 mr-1.5 md:mr-2" />
                      <span className="text-emerald-400 text-sm md:text-base">{event.date}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-1.5 md:mb-2">{event.title}</h3>
                    <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">{event.description}</p>
                    <div className="flex items-center text-gray-500">
                      <Icons.mapPin className="h-3.5 w-3.5 md:h-4 md:w-4 mr-1.5 md:mr-2" />
                      <span className="text-sm md:text-base">{event.location}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 flex justify-start md:justify-end">
                    <button
                      className={`px-3 md:px-4 py-1.5 md:py-2 rounded-lg transition-colors text-sm md:text-base ${
                        event.registration === "Open"
                          ? "bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30"
                          : "bg-gray-500/20 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      {event.registration}
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
