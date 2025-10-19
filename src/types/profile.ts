// src/types/profile.ts
import { StaticImageData } from 'next/image';

export interface Skill {
    readonly name: string;
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
}