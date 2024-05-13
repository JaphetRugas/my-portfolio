"use client"

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Link from "next/link"

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
                  <CardTitle>Project 1</CardTitle>
                  <CardDescription>A web application built with Next.js</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is a description of the first project.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link className="text-sm font-medium hover:underline" href="#">
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 2</CardTitle>
                  <CardDescription>A mobile app built with React Native</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is a description of the second project.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link className="text-sm font-medium hover:underline" href="#">
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project 3</CardTitle>
                  <CardDescription>A backend API built with Node.js and Express</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    This is a description of the third project.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link className="text-sm font-medium hover:underline" href="#">
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
            <div className="flex justify-center">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
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
