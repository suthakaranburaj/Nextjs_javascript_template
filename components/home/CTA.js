'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Star } from 'lucide-react'

export function CTA() {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Ready to build something amazing?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Start your next hackathon project with this comprehensive template. 
              Everything you need is already set up and ready to go.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="/register"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
            <a
              href="https://github.com/yourusername/nextjs-hackathon-template"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>View on GitHub</span>
              <Star className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Ready to Use</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">24h</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">∞</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Possibilities</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 