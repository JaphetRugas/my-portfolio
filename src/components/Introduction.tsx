"use client"

import { Facebook, Github, Linkedin, Mailbox, Twitter } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Introduction() {
    return (
        <div>
            <section className="w-full py-24 md:py-32 lg:py-40" id="home">
                <div className="container mx-auto max-w-5xl px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                Hello, I'm Jade Japhet R. Rugas
                            </h1>
                            <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
                                I'm passionate about programming and enjoy creating efficient solutions. Let's explore software development together!
                            </p>
                            <div className="flex items-center gap-4">
                                <Link
                                    href="mailto:rugas.jadejaphet.123@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                >
                                    <Mailbox className="h-6 w-6" />
                                    <span className="sr-only">Email</span>
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/jade-japhet-rugas-459938288/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                >
                                    <Linkedin className="h-6 w-6" />
                                    <span className="sr-only">LinkedIn</span>
                                </Link>
                                <Link
                                    href="https://web.facebook.com/japhetrugas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                >
                                    <Facebook className="h-6 w-6" />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link
                                    href="https://twitter.com/japhet_rugas"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                >
                                    <Twitter className="h-6 w-6" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link
                                    href="https://github.com/JaphetRugas/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                >
                                    <Github className="h-6 w-6" />
                                    <span className="sr-only">GitHub</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <img
                                alt="Jade Japhet R. Rugas"
                                className="rounded-full"
                                height={300}
                                src="https://avatars.githubusercontent.com/u/106372419?s=400&u=767b591a16be5a8d7bfc01135ec77160684f6c5d&v=4"
                                style={{
                                    aspectRatio: "300/300",
                                    objectFit: "cover",
                                }}
                                width={300}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
