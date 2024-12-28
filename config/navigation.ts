import { Book, Brain, Code2, GraduationCap } from "lucide-react";

export const domains = [
  {
    name: "Web Development",
    resources: "web",
    icon: Code2,
    description: "Frontend, Backend, and Full Stack Development Resources",
    categories: ["Frontend", "Backend", "DevOps", "Mobile"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Machine Learning",
    resources: "ml",
    icon: Brain,
    description: "AI, Deep Learning, and Data Science Resources",
    categories: ["AI Fundamentals", "Deep Learning", "NLP", "Computer Vision"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Competitive Programming",
    resources: "cp",
    icon: Book,
    description: "DSA, Algorithms, and Contest Preparation",
    categories: ["DSA", "Algorithms", "Contest Prep", "Practice"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Academics",
    resources: "academics",
    icon: GraduationCap,
    description: "Year-wise Academic Resources and Materials",
    categories: ["First Year", "Second Year", "Third Year", "Final Year"],
    gradient: "from-green-400 to-emerald-600",
  },
];
