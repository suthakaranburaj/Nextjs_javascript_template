'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Zap, Shield } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Build Amazing Apps{' '}
              <span className="text-blue-600 dark:text-blue-400">Faster</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              A comprehensive Next.js template with authentication, responsive design, 
              and modern UI components. Perfect for hackathons and rapid prototyping.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <Link
              href="/register"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 inline" />
            </Link>
            <Link
              href="/features"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Learn More <span aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flow-root sm:mt-24"
        >
          <div className="rounded-xl bg-gray-900/5 dark:bg-gray-100/5 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-gray-100/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-center">
                  <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Modern Stack</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Next.js + Tailwind + MUI</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-center">
                  <Zap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Fast Development</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">Ready to use components</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                <div className="text-center">
                  <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Secure Auth</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">JWT + OTP verification</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 