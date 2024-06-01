"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience'];
      const scrollPosition = window.scrollY;

      // Find which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom >= 130) { // Adjust the threshold as needed
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-4 md:gap-6">
        {['home', 'about', 'projects', 'skills', 'experience'].map(section => (
          <Link key={section} href="#" passHref className={`text-sm font-medium hover:underline ${activeSection === section ? "text-blue-500" : "text-gray-500"}`} onClick={(e) => scrollToSection(section, e)}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
}
