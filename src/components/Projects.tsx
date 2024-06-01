"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Link from "next/link"
import { Button } from './ui/button'
import Image from 'next/image'

export default function Projects() {
  return (
    <div>
      <section className="w-full py-24 md:py-32 lg:py-40" id="projects">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
                Check out some of my recent projects.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Image
                    alt="Project 1"
                    className="rounded-t-lg"
                    height={225}
                    src="/image/CycleUpTech.png"
                    style={{
                      aspectRatio: "400/225",
                      objectFit: "cover",
                    }}
                    width={400}
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    CycleUpTech: Sustainable Technology Management System
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mb-4">A comprehensive web solution facilitating geolocated donations and analytics-driven e-marketplace for repurposing old computers.</p>
                  <Link className="text-sm font-medium hover:underline" href={"https://scraptec.onrender.com/"} target='blank'>Website</Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Nextjs-Auth-Tutorial</CardTitle>
                  <CardDescription>An authentication tutorial built with Next.js</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is an authentication tutorial built with Next.js covering authentication concepts and implementation.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link className="text-sm font-medium hover:underline" href="https://github.com/JaphetRugas/nextjs-auth-tutorial" target='blank'>
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Express API</CardTitle>
                  <CardDescription>A backend API built with Node.js and Express</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    Express API: Node.js backend with Express.js for user management.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Stack used: Node.js, Express.js, Prisma
                  </p>
                </CardContent>
                <CardFooter>
                  <Link className="text-sm font-medium hover:underline" href="https://github.com/JaphetRugas/express_api" target='blank'>
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="https://github.com/JaphetRugas?tab=repositories"
                target='blank'
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
