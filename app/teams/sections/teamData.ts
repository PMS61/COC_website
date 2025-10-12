export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin?: string;
  github?: string;
}

export interface Mentor {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export const generalSecretary: TeamMember = {
  name: "Ayaansh Churi",
  role: "General Secretary",
  description: "Leading Community of Coders with vision and dedication. Orchestrating initiatives to build a thriving tech community.",
  image: "/Senate/Ayaansh_Churi.jpg",
  linkedin: "#",
  github: "#",
};

export const teamMembers: TeamMember[] = [
  {
    name: "Zoher Vohra",
    role: "Joint General Secretary",
    description: "Supporting community operations and fostering collaboration. Ensuring smooth execution of events and initiatives.",
    image: "/Senate/Zoher_Vohra.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Harsh Jagtap",
    role: "Treasurer",
    description: "Managing community finances and resources. Ensuring transparent budgeting for all technical events and activities.",
    image: "/Senate/Harsh_Jagtap.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Soham Rane",
    role: "CP Head",
    description: "Leading competitive programming initiatives and contests. Mentoring students to excel in algorithmic problem-solving.",
    image: "/Senate/Soham_Rane.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Prathamesh Sankhe",
    role: "Development Head",
    description: "Driving web and app development projects. Empowering members to build real-world applications and learn modern tech stacks.",
    image: "/Senate/Prathamesh_Sankhe.png",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Mudit Jain",
    role: "X Head",
    description: "Spearheading cross-domain initiatives, open-source contributions, and special projects. Bridging multiple technical verticals within the community.",
    image: "/Senate/Mudit_Jain.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Karan Shah",
    role: "Eth Head",
    description: "Leading blockchain and Web3 education initiatives. Building the next generation of decentralized application developers.",
    image: "/Senate/Karan_Shah.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Khush Agrawal",
    role: "ML Head",
    description: "Championing machine learning and AI projects. Conducting workshops and hackathons to democratize ML knowledge.",
    image: "/Senate/Khush_Agrawal.jpg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Diksha Thongire",
    role: "Design Head",
    description: "Leading UI/UX design initiatives for community projects. Creating engaging visual experiences and brand identity.",
    image: "/Senate/Diksha_Thongire.jpeg",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Aarya Pandey",
    role: "PR Head",
    description: "Managing community outreach and communications. Building partnerships and promoting COC VJTI's technical achievements.",
    image: "/Senate/Aarya_Pandey.jpg",
    linkedin: "#",
    github: "#",
  },
];

export const mentors: Mentor[] = [
  {
    quote: "It's been an incredible journey leading COC. Now, I'm excited to guide and support the next wave of innovators as they shape the future of our community.",
    name: "Mohammed Bhadsorawala",
    designation: "Former General Secretary, Community of Coders",
    src: "/Mentors/Mohammed_Bhadsorawala.png",
  },
  {
    quote: "Building a community isn't just about code—it's about creating a space where collaboration thrives and every member feels empowered to push boundaries. ",
    name: "Priyank Jhaveri",
    designation: "Former Joint General Secretary, Community of Coders",
    src: "/Mentors/Priyank_jhaveri.jpg",
  },
];