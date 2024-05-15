"use client"

import React from 'react';

export default function About() {
    return (
        <div>
            <section className="w-full py-24 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-800" id="about">
                <div className="container mx-auto max-w-5xl px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                            <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">Greetings, I am Jade Japhet Rugas, a dedicated and passionate individual striving for excellence in the field of technology. I have a profound interest in software development, particularly in the realm of backend development, where I have honed my skills and expertise.</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">My Interests</h3>
                            <ul className="space-y-2 text-lg text-gray-500 dark:text-gray-400 md:text-xl">
                                <li>Backend Development: I am deeply fascinated by the intricacies of backend development, where I enjoy architecting robust and scalable solutions to solve complex problems.</li>
                                <li>Technology: My enthusiasm for technology extends beyond development, as I actively engage in exploring emerging technologies and trends, keeping myself updated with the latest advancements.</li>
                                <li>Gaming: In my leisure time, I indulge in gaming, finding it to be a refreshing and enjoyable way to unwind and stimulate creativity.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
