"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";

export default function Navigation() {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
            const scrollPosition = window.scrollY;

            // Find which section is currently in view
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect();
                    if (top <= 100 && bottom >= 100) { // Adjust the threshold as needed
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

    // Function to handle smooth scrolling to the selected section
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
                <Link href="#" passHref className={`text-sm font-medium hover:underline ${activeSection === "home" ? "text-blue-500" : "text-gray-500"}`} onClick={(e) => scrollToSection("home", e)}>
                    Home
                </Link>
                <Link href="#" passHref className={`text-sm font-medium hover:underline ${activeSection === "about" ? "text-blue-500" : "text-gray-500"}`} onClick={(e) => scrollToSection("about", e)}>
                    About
                </Link>
                <Link href="#" passHref className={`text-sm font-medium hover:underline ${activeSection === "projects" ? "text-blue-500" : "text-gray-500"}`} onClick={(e) => scrollToSection("projects", e)}>
                    Projects
                </Link>
                <Link href="#" passHref className={`text-sm font-medium hover:underline ${activeSection === "skills" ? "text-blue-500" : "text-gray-500"}`} onClick={(e) => scrollToSection("skills", e)}>
                    Skills
                </Link>
                <Link href="#" passHref className={`text-sm font-medium hover:underline ${activeSection === "experience" ? "text-blue-500" : "text-gray-500"}`} onClick={(e) => scrollToSection("experience", e)}>
                    Experience
                </Link>
                <Link href="#" passHref className={`text-sm font-medium hover:underline ${activeSection === "contact" ? "text-blue-500" : "text-gray-500"}`} onClick={(e) => scrollToSection("contact", e)}>
                    Contact
                </Link>
            </div>
        </nav>
    );
}
