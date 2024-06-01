"use client"

import React from 'react'

export default function Experience() {
  return (
    <div>
      <section className="w-full py-24 md:py-32 lg:py-40" id="experience">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Experience</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
                Here's a timeline of my educational and work experience.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> 
              <div className="bg-white px-6 py-8 shadow dark:bg-gray-950">
                <h3 className="text-lg font-semibold">College</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">2019 - Present</p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Currently pursuing a Bachelor of Science in Information Technology at Technological Institute of the Philippines.
                </p>
              </div>
              <div className="bg-white px-6 py-8 shadow dark:bg-gray-950">
                <h3 className="text-lg font-semibold">OJT</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Feb 2024 - Present</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Position: Web Developer  <br />
                  Company: Linoflap Technology Inc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
