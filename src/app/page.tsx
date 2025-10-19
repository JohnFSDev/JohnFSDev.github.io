// src/app/page.tsx
"use client";

import { Profile } from "@/components/ui/Profile";
import type { SocialLink, Skill, Moment, Project } from "@/types/profile";
import { Database, Code, Server, BarChart3, Wrench, FileCode } from "lucide-react";

const email = "johnluis22@outlook.com";

const socialLinks: SocialLink[] = [
  {
    icon: "linkedin",
    url: "https://www.linkedin.com/in/johndelrosariosanchez/",
  },
  { icon: "github", url: "https://github.com/JohnFSDev" },
  { icon: "mail", url: "mailto:johnluis22@outlook.com" },
];

const skills: Skill[] = [
  { name: "SQL", icon: <Database className="w-5 h-5 text-blue-500" /> },
  { name: "NoSQL", icon: <Database className="w-5 h-5 text-green-600" /> },
  { name: "Python", icon: <Code className="w-5 h-5 text-yellow-500" /> },
  { name: "Power BI", icon: <BarChart3 className="w-5 h-5 text-yellow-600" /> },
  { name: "Oracle SQL Developer", icon: <Database className="w-5 h-5 text-red-500" />,},
  { name: "Pentaho", icon: <Wrench className="w-5 h-5 text-cyan-400" />,},
  { name: "JavaScript", icon: <FileCode className="w-5 h-5 text-yellow-400" />,},
  { name: "NodeJS", icon: <Server className="w-5 h-5 text-green-500" /> },
];
const moments: Moment[] = [
  {
    title: "Graduation as Software Engineer – INTEC",
    date: "2025",
    description:
      "Proudly graduated as a Software Engineer from the Instituto Tecnológico de Santo Domingo (INTEC). This milestone marks the culmination of years of academic dedication, leadership, and continuous growth in technology and innovation.",
    image: "/imgs/graduation_intec.webp",
  },
  {
    title: "Final Degree Project Presentation – WithYou",
    date: "2025",
    description:
      "Successfully presented my final degree project, 'WithYou', a web platform for online psychological consulting services. The project integrated modern web technologies with a focus on accessibility, user experience, and data security.",
    image: "/imgs/finalproject.webp",
  },
  {
    title: "President of the CEISSC Committee 2023-2024",
    date: "2023",
    description:
      "Served as the President of the CEISSC Committee at the Instituto Tecnológico de Santo Domingo (INTEC) during the 2023-2024 term. Dedicated to promoting innovation, teamwork, and academic growth within the student community.",
    image: "/imgs/Committee_CEISSC.webp",
  },
  {
    title: "Exchange Program at IPN - ESCOM",
    date: "2024",
    description:
      "Participated in an academic exchange program at the Instituto Politécnico Nacional (IPN), studying Computer Systems Engineering at the Escuela Superior de Cómputo (ESCOM). A unique opportunity to broaden knowledge, develop technical skills, and engage with a diverse academic community.",
    image: "/imgs/ESCOM_IPN.webp",
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: "WithYou (Final Degree Project)",
    description:
      "Web System for Online Psychological Consulting for Private Attention Services",
    image: "/imgs/withyou.webp",
    liveLink: "https://www.withyouapp.me/en",
    githubLink: "https://github.com/JohnFSDev/withyou-backend",
    technologies: [
      "Next.js",
      "React",
      "Prisma",
      "NestJS",
      "PostgreSQL",
      "Firebase Auth",
      "Stripe",
      "Railway",
      "Vercel",
      "Supabase",
      "LiveKit",
    ],
  },
  {
    id: 2,
    title: "ADR Collections",
    description:
      "Responsive e-commerce web project built with Astro and Tailwind CSS.",
    image: "/imgs/adr-collections.webp",
    liveLink: "https://adr-collections-web.vercel.app/",
    githubLink: "https://github.com/JohnFSDev/adr-collections-web",
    technologies: ["Astro", "HTML", "CSS", "TailwindCSS", "Vercel"],
  },
  {
    id: 3,
    title: "Hardwhere?",
    description:
      "Application for searching and managing electronic components.",
    image: "/imgs/hardwhere-img.webp",
    liveLink: "https://github.com/JohnFSDev/Hardwhere/tree/api-backend",
    githubLink: "https://github.com/JohnFSDev/Hardwhere/tree/api-backend",
    technologies: ["C#", ".NET Framework", "Entity Framework", "Vue.js"],
  },
];

const mockData = {
  skills,
  moments,
  socialLinks,
  projects,
  email,
};

export default function Home() {
  return (
    <Profile
      skills={mockData.skills}
      moments={mockData.moments}
      socialLinks={mockData.socialLinks}
      projects={mockData.projects}
      email={mockData.email}
    />
  );
}
