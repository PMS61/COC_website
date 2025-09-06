import { Book, Brain, Code2, GraduationCap
       ,  Blocks
       ,  Smartphone
       , Laptop
       } from "lucide-react";

export const domains = [
  {
    name: "Coding Basics",
    resources: "basics",
    icon: Code2,
    description: "Resources for learning programming languages and fundamental coding concepts",
    categories: ["C++", "Java", "Python"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Web Development",
    resources: "web",
    icon: Laptop,
    description: "Frontend, Backend, and Full Stack Development Resources",
    categories: ["Frontend", "Backend", "DevOps"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Machine Learning",
    resources: "ml",
    icon: Brain,
    description: "AI, Deep Learning, and Data Science Resources",
    categories: ["AIML Fundamentals", "Deep Learning", "Data Science", "NLP", "CV"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "DSA & CP",
    resources: "dsa-cp",
    icon: Book,
    description: "DSA, Algorithms, and Contest Preparation",
    categories: ["DSA", "Algorithms", "Contest Prep", "Practice"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Blockchain",
    resources: "blockchain",
    icon: Blocks,
    description: "Web3, Smart Contracts and Decentralized Applications",
    categories: ["Web3", "Smart Contracts", "Cryptocurrency"],
    gradient: "from-yellow-500 to-amber-600",
  },
  {
      name: "App Development",
      resources: "appdev",
      icon: Smartphone,
      description: "Android, iOS, and Cross-Platform App Development Resources",
      categories: ["Flutter", "React Native", "Android", "iOS"],
      gradient: "from-indigo-500 to-purple-600",
  },
  {
  name: "Interview Resources",
  resources: "academics",
  icon: GraduationCap,
  description: "Resources for Internship and Placement Interviews.",
  categories: [
    "Interview Experiences",
    "CS Fundamentals",
    "Behavioral Questions"
  ],
  gradient: "from-green-400 to-emerald-600",
}

];
