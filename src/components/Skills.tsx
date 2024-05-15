"use client"
 
import Image from 'next/image'
import React from 'react'

export default function Skills() {
  return (
    <div>
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-800" id="skills">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
                Here are some of the technologies I'm familiar with.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/typescript.png`} alt="icon" width={100} height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/nodejs.png`} alt="icon" width={100}  height={100} className="h-12 w-12" />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/mongo.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">Zod</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">Express.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">Neon Console</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">HTML</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">Drizzle</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">Prisma</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">Postman</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">Zustand</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Image src={`/icons/javascript.png`} alt="icon" width="64" height="64" className="h-12 w-12" />
                <span className="text-sm font-medium">Cloudinary</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
