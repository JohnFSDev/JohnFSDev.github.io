// src/types/profile.ts
import { StaticImageData } from 'next/image';
import type { ReactElement } from "react";

export interface Skill {
    readonly name: string;
      icon?: ReactElement;
  }
  
  export interface Moment {
    readonly title: string;
    readonly description: string;
    readonly date: string;
    readonly image: string | StaticImageData; 
  }

export interface SocialLink {
  icon: 'linkedin' | 'github' | 'mail';
  url: string;
}
  
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string; 
  liveLink: string; 
  githubLink: string; 
  technologies?: string[];
}

export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  location: string;
  period: string;
  description: string[];
  technologies?: string[];
  logo?: string;
}