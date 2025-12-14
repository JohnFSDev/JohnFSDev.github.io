import React, { useState, useEffect } from "react";
import { Footer } from "./Footer";
import Image from "next/image";
import {
  MoonIcon,
  LinkedinIcon,
  MailIcon,
  SunIcon,
  DownloadIcon,
  ChevronDown,
  Share2,
  QrCode,
  GithubIcon,
  ExternalLink,
  Contact,
  Briefcase,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  Skill,
  Moment,
  SocialLink,
  Project,
  WorkExperience,
} from "@/types/profile";
import { MomentsCarousel } from "../MomentsCarousel";

interface ProfileProps {
  skills: Skill[];
  moments: Moment[];
  socialLinks: SocialLink[];
  projects: Project[];
  workExperience: WorkExperience[];
  email: string;
}

export function Profile({
  skills,
  moments,
  socialLinks,
  projects,
  workExperience,
  email,
}: ProfileProps) {
  const [showQR, setShowQR] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, [isDarkMode]);

  const handleShare = async () => {
    const shareData = {
      title: "My Portfolio",
      text: "Check out my professional portfolio!",
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 2000);
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className={cn(
          "flex-grow transition-colors duration-200 p-4 md:p-8",

          isDarkMode ? "bg-[#0C0F17] text-white" : "bg-white text-gray-900"
        )}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={cn(
                "p-2 rounded-full transition-colors",
                isDarkMode
                  ? "hover:bg-gray-800 text-white"
                  : "hover:bg-gray-100 text-gray-900"
              )}
            >
              {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
            <div className="relative group">
              <button
                onClick={handleShare}
                className={cn(
                  "p-2 rounded-full transition-colors relative z-10",
                  isDarkMode
                    ? "hover:bg-gray-800 text-white"
                    : "hover:bg-gray-100 text-gray-900"
                )}
                aria-label="Share portfolio"
              >
                <Share2
                  size={20}
                  className="group-hover:scale-110 transition-transform duration-200"
                />
              </button>
              <div
                className="absolute right-0 mt-2 px-4 py-2 w-auto min-w-[160px] bg-gradient-to-br from-blue-600 to-blue-800 text-white text-sm rounded-lg shadow-lg opacity-0 invisible 
                          group-hover:opacity-100 group-hover:visible 
                          transition-all duration-300 ease-in-out 
                          transform group-hover:-translate-y-1 
                          backdrop-blur-sm
                          border border-blue-400/30"
              >
                <div className="flex items-center justify-center gap-2 font-medium">
                  <Share2 size={14} />
                  ¡Share my portfolio!
                </div>
                <div className="absolute -top-1 right-4 w-2 h-2 bg-blue-600 transform rotate-45" />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Profile Section */}
            <div className="space-y-6 text-center">
              <div className="relative mx-auto w-40 h-40 md:w-44 md:h-44 group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 animate-pulse group-hover:animate-none transition-all duration-300"></div>
                <div className="absolute inset-[2px] rounded-full overflow-hidden bg-[#1E2124]">
                  <Image
                    src="/imgs/profile-photo.webp"
                    alt="Profile photo"
                    width={244}
                    height={244}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    priority
                    quality={95}
                  />
                </div>
              </div>
            </div>

            {/* Title Section */}
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400">
                  Software Engineer
                </h2>
                <p
                  className={cn(
                    "transition-colors",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  Data Engineer | Project Lead
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-center gap-4">
                  <a
                    href="/pdfs/CV-John Del Rosario.pdf"
                    download="CV - John Del Rosario.pdf"
                    className="px-4 py-2 bg-[#1E2124] text-gray-200 hover:bg-gray-800 rounded-md flex items-center gap-2 transition-colors"
                  >
                    <DownloadIcon size={16} />
                    <span>Download CV</span>
                  </a>
                  <button
                    className="px-4 py-2 bg-[#1E2124] text-gray-200 hover:bg-gray-800 rounded-md flex items-center gap-2 transition-colors"
                    onClick={() => setShowQR(true)}
                  >
                    <QrCode size={16} />
                    <span>Certifications</span>
                  </button>
                </div>
              </div>

              {/* Contact Me */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-2">
                  <span className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                    <Contact size={20} className="inline-block align-middle" />
                    <span className="text-base">Email:</span>
                  </span>
                  <a
                    href={`mailto:${email}`}
                    className={cn(
                      "hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.icon}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "relative p-4 transition-colors group",
                      isDarkMode
                        ? "text-gray-300 hover:text-white"
                        : "text-gray-600 hover:text-gray-800"
                    )}
                    aria-label={
                      link.icon === "linkedin"
                        ? "LinkedIn"
                        : link.icon === "github"
                        ? "GitHub"
                        : "Email"
                    }
                  >
                    {link.icon === "linkedin" && <LinkedinIcon size={24} />}
                    {link.icon === "github" && <GithubIcon size={24} />}
                    {link.icon === "mail" && <MailIcon size={24} />}
                    <span className="absolute inset-0 rounded-full border-2 border-transparent transition-colors group-hover:border-blue-500 group-hover:animate-border-pulse" />
                  </a>
                ))}
              </div>

              {/* Skills */}
              <div className="flex justify-center gap-2 flex-wrap">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-1 bg-[#1E2124] text-gray-200 rounded-full text-sm border border-gray-700"
                  >
                    {skill.icon}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "h-px flex-1",
                    isDarkMode ? "bg-gray-600" : "bg-gray-400"
                  )}
                ></div>
                <h3
                  className={cn(
                    "text-lg font-medium whitespace-nowrap flex items-center gap-2",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  <Briefcase
                    size={20}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  Work Experience
                </h3>
                <div
                  className={cn(
                    "h-px flex-1",
                    isDarkMode ? "bg-gray-600" : "bg-gray-400"
                  )}
                ></div>
              </div>

              <div className="space-y-6">
                {workExperience.map((experience) => (
                  <div
                    key={experience.id}
                    className="bg-[#1E2124] rounded-lg p-6 border border-gray-800/50 hover:border-gray-700/50 transition-colors duration-200"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="space-y-2">
                        <h4 className="text-xl font-semibold text-blue-400">
                          {experience.position}
                        </h4>
                        <h5 className="text-lg font-medium text-gray-200">
                          {experience.company}
                        </h5>
                        <p className="text-gray-400 text-sm flex items-center gap-1">
                          <span>📍</span>
                          {experience.location}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30">
                          {experience.period}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <ul className="space-y-3">
                        {experience.description.map((item, index) => (
                          <li
                            key={index}
                            className="text-gray-300 text-sm flex items-center gap-3 leading-relaxed"
                          >
                            <span className="text-blue-400 text-xs flex-shrink-0">
                              ●
                            </span>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>

                      {experience.technologies &&
                        experience.technologies.length > 0 && (
                          <div className="pt-4 border-t border-gray-700/50">
                            <div className="flex flex-wrap gap-2">
                              {experience.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 text-xs font-medium text-gray-200
                                  bg-gray-900/50 border border-gray-700/60 rounded-md 
                                  backdrop-blur-sm shadow-sm
                                  hover:bg-blue-600/20 hover:text-blue-300 hover:border-blue-600/40
                                  transition-all duration-200 cursor-default"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Moments Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "h-px flex-1",
                    isDarkMode ? "bg-gray-600" : "bg-gray-400"
                  )}
                ></div>
                <h3
                  className={cn(
                    "text-lg font-medium whitespace-nowrap",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  Moments That Shaped Me
                </h3>
                <div
                  className={cn(
                    "h-px flex-1",
                    isDarkMode ? "bg-gray-600" : "bg-gray-400"
                  )}
                ></div>
              </div>

              <MomentsCarousel moments={moments} />

              <div className="flex justify-center">
                <ChevronDown
                  size={24}
                  className={cn(
                    "animate-bounce",
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  )}
                />
              </div>
            </div>

            {/* Projects Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div
                  className={cn(
                    "h-px flex-1",
                    isDarkMode ? "bg-gray-600" : "bg-gray-400"
                  )}
                ></div>
                <h3
                  className={cn(
                    "text-lg font-medium whitespace-nowrap",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  My Top Projects
                </h3>
                <div
                  className={cn(
                    "h-px flex-1",
                    isDarkMode ? "bg-gray-600" : "bg-gray-400"
                  )}
                ></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .slice(0, showAllProjects ? projects.length : 3)
                  .map((project) => (
                    <div
                      key={project.id}
                      className="bg-[#1E2124] rounded-lg overflow-hidden border border-gray-800/50 hover:border-gray-700/50 transition-colors"
                    >
                      <div className="relative w-full h-48">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          priority
                          style={{ objectFit: "cover" }}
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      <div className="p-6 space-y-3">
                        {/* Título */}
                        <h4 className="text-lg font-semibold text-gray-200">
                          {project.title}
                        </h4>

                        {/* Descripción */}
                        <p className="text-gray-400 text-sm">
                          {project.description}
                        </p>

                        {/* ✅ Tecnologías usadas */}
                        {project.technologies &&
                          project.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 text-xs font-medium text-gray-200
                   bg-gray-900/50 border border-gray-700/60 rounded-md 
                   backdrop-blur-sm shadow-sm
                   hover:bg-blue-600/20 hover:text-blue-300 
                   transition-colors duration-200"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                        {/* Enlaces */}
                        <div className="flex justify-center gap-4 pt-3">
                          <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors group"
                            aria-label="GitHub Repository"
                          >
                            <GithubIcon className="w-5 h-5 text-gray-400 group-hover:text-gray-200" />
                          </a>

                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors group"
                            aria-label="Live Project"
                          >
                            <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-200" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {projects.length > 3 && (
                <div className="flex justify-center pt-4">
                  <button
                    className="px-6 py-2 bg-[#1E2124] text-gray-200 hover:bg-gray-800 rounded-md transition-colors"
                    onClick={() => setShowAllProjects(!showAllProjects)}
                  >
                    {showAllProjects ? "Ver menos" : "Ver más"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Toast Notification */}
        {showShareToast && (
          <div
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 
                bg-[#1E2124] text-white px-4 py-2.5 rounded-lg shadow-lg z-50
                border border-blue-500/20
                animate-in fade-in slide-in-from-bottom duration-300"
          >
            <div className="flex items-center gap-2.5">
              <div className="rounded-full bg-blue-500/20 p-1">
                <svg
                  className="w-3.5 h-3.5 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className="text-sm font-medium">
                Link copiado al portapapeles
              </span>
            </div>
          </div>
        )}

        {/* QR Modal */}
        {showQR && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div
              className={cn(
                "rounded-lg p-6 max-w-sm w-full",
                isDarkMode ? "bg-[#1E2124]" : "bg-white"
              )}
            >
              <h3
                className={cn(
                  "text-xl font-semibold mb-4",
                  isDarkMode ? "text-gray-200" : "text-gray-800"
                )}
              >
                View Complete Profile
              </h3>
              <p
                className={cn(
                  "mb-4",
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                )}
              >
                Scan this QR code to view my certificates
              </p>

              {/* QR Code */}
              <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-4">
                <a
                  href="https://drive.google.com/drive/folders/1vctsONMMbGc-RGchxQi-hx_rd7m0Pecl?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Ver certificados online"
                  className="block w-full h-full"
                >
                  <Image
                    src="/imgs/certifications_qr.webp"
                    alt="My Certifications QR Code"
                    width={192}
                    height={192}
                    className="w-full h-full object-contain rounded-lg"
                    quality={95}
                  />
                </a>
              </div>
              <div className="text-center">
                <a
                  href="https://drive.google.com/drive/folders/1vctsONMMbGc-RGchxQi-hx_rd7m0Pecl?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm"
                >
                  <span>Or click here to view my certificates online</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <button
                className="w-full mt-6 px-4 py-2 bg-[#1E2124] text-gray-200 hover:bg-gray-800 rounded-md transition-colors"
                onClick={() => setShowQR(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer socialLinks={socialLinks} email="johnluis22@outlook.com" />
    </div>
  );
}
