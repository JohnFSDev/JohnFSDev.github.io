import React from "react";
import { LinkedinIcon, GithubIcon, MailIcon, Contact } from "lucide-react";
import type { SocialLink } from "@/types/profile";

interface FooterProps {
  socialLinks: SocialLink[];
  email: string;
}

export function Footer({ socialLinks, email }: FooterProps) {
  return (
    <footer className="w-full bg-[#0C0F17] border-t border-gray-800/30">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 md:px-8">
          <div className="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
            <div className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} John Del Rosario with{" "}
              <span className="text-red-500">❤</span> | All rights reserved.
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.icon} // Agrega la clave única para React
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-2 rounded-full hover:bg-gray-800/50 transition-all duration-300"
                    aria-label={
                      link.icon === "linkedin"
                        ? "LinkedIn"
                        : link.icon === "github"
                        ? "GitHub"
                        : "Email"
                    }
                  >
                    <div className="transform transition-transform duration-300 group-hover:scale-110">
                      {link.icon === "linkedin" && (
                        <LinkedinIcon
                          size={20}
                          className="text-gray-400 group-hover:text-gray-200"
                        />
                      )}
                      {link.icon === "github" && (
                        <GithubIcon
                          size={20}
                          className="text-gray-400 group-hover:text-gray-200"
                        />
                      )}
                      {link.icon === "mail" && (
                        <MailIcon
                          size={20}
                          className="text-gray-400 group-hover:text-gray-200"
                        />
                      )}
                    </div>
                  </a>
                ))}
              </div>
              <div className="text-gray-400 flex items-center space-x-1">
                <Contact size={24} className="text-gray-400" />
                <span></span>
                <span>{email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
