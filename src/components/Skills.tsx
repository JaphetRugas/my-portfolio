"use client"

import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image'

const skills = [
  { name: 'JavaScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
  { name: 'TypeScript', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg' },
  { name: 'Node.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
  { name: 'Next.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
  { name: 'MongoDB', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg' },
  { name: 'PostgreSQL', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' },
  { name: 'Zod', icon: 'https://zod.dev/logo.svg' },
  { name: 'Express.js', icon: 'https://i.cloudup.com/zfY6lL7eFa-3000x3000.png' },
  { name: 'Neon', icon: 'https://dfv3qgd2ykmrx.cloudfront.net/assets/js/../media/_/console/components/ConsoleLayout/ConsoleBreadcrumbs/assets/neon-logo-29e460f01d320668cf9f331ee1fb598d.svg' },
  { name: 'HTML', icon: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'Drizzle', icon: 'https://images.opencollective.com/drizzle-orm/9405e48/logo/256.png' },
  { name: 'Prisma', icon: '/image/Prisma.svg' },
  { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'Zustand', icon: 'https://docs.pmnd.rs/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fzustand-icon.8507f6a0.png&w=2048&q=75' },
  { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'Cloudinary', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Cloudinary_logo.svg' },
];

export default function Skills() {
  return (
    <div id="skills" className="bg-gray-100 dark:bg-gray-800 py-24 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
            <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">Here are some of the technologies I'm familiar with.</p>
          </div>
          <motion.div
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {skills.map((skill, index) => (
              <SkillCard key={index} name={skill.name} icon={skill.icon} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const SkillCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-2"
      whileHover={{ scale: 1.1 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md transition-all">
        <Image width={500} height={500} src={icon} alt={`${name} icon`} className="h-12 w-12" />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
};
