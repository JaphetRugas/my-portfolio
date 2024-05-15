"use client"

import { Linkedin, Mailbox, Twitter } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <section className="w-full py-28 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-800" id="contact">
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="text-lg text-gray-500 dark:text-gray-400 md:text-xl">
                Feel free to reach out to me if you have any questions or would like to collaborate.
              </p>
            </div>
            <form className="mx-auto max-w-lg space-y-7">
              <div className="grid w-full max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                  <Link href="mailto:rugas.jadejaphet.123@gmail.com" target="_blank" rel="noopener noreferrer">
                    <Mailbox className="h-8 w-8 text-gray-500 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                    <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Email
                    </div>
                  </Link>
                </div>
                <div className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                  <Link href="https://www.linkedin.com/in/jade-japhet-rugas-459938288/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-8 w-8 text-gray-500 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                    <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      LinkedIn
                    </div>
                  </Link>
                </div>
                <div className="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-6 text-center transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
                  <Link href="https://twitter.com/japhet_rugas" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-8 w-8 text-gray-500 transition-colors group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" />
                    <div className="text-sm font-medium text-gray-900 transition-colors group-hover:text-gray-900 dark:text-gray-50 dark:group-hover:text-gray-50">
                      Twitter
                    </div> 
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
