// src/app/page.tsx
"use client";

import { Profile } from "@/components/ui/Profile";
import type { SocialLink, Skill, Moment, Project } from "@/types/profile";

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
  { name: "SQL" },
  { name: "Python" },
  { name: "Power BI" },
  { name: "Oracle SQL Developer" },
  { name: "Microsoft Excel" },
  { name: "Pentaho" },
];

const moments: Moment[] = [
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
    image: "/imgs/withyou.png",
    liveLink: "https://www.withyouapp.me/en",
    githubLink: "https://github.com/JohnFSDev/withyou-backend",
  },
  {
    id: 2,
    title: "Hardwhere?",
    description:
      "Hardwhere is an application for searching electronic components.",
    image: "/imgs/hardwhere-img.png",
    liveLink: "https://github.com/JohnFSDev/Hardwhere/tree/api-backend",
    githubLink: "https://github.com/JohnFSDev/Hardwhere/tree/api-backend",
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
