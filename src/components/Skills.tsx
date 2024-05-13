"use client"

import { Chrome, Codepen, Database, Navigation, Type } from 'lucide-react'
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
                <Chrome className="h-12 w-12" />
                <span className="text-sm font-medium">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Type className="h-12 w-12" />
                <span className="text-sm font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Codepen className="h-12 w-12" />
                <span className="text-sm font-medium">Node.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Navigation className="h-12 w-12" />
                <span className="text-sm font-medium">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Database className="h-12 w-12" />
                <span className="text-sm font-medium">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Database className="h-12 w-12" />
                <span className="text-sm font-medium">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
