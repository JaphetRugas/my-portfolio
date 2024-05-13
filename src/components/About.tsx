"use client"

import React from 'react'

export default function About() {
    return (
        <div>
            <section className="w-full py-24 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-800" id="about">
                <div className="container mx-auto max-w-5xl px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                            <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">I like to walk.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">My Interests</h3>
                            <ul className="space-y-2 text-lg text-gray-500 dark:text-gray-400 md:text-xl">
                                <li>Web Development</li>
                                <li>Traveling</li>
                                <li>Photography</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
