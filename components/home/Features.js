'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Smartphone, 
  Palette, 
  Zap, 
  Database, 
  Lock,
  Mail,
  Users
} from 'lucide-react'

const features = [
  {
    name: 'Authentication System',
    description: 'Complete JWT-based authentication with OTP verification for secure user management.',
    icon: Shield,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20'
  },
  {
    name: 'Responsive Design',
    description: 'Mobile-first design that works perfectly on all devices and screen sizes.',
    icon: Smartphone,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20'
  },
  {
    name: 'Dark/Light Theme',
    description: 'Built-in theme switching with system preference detection and smooth transitions.',
    icon: Palette,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20'
  },
  {
    name: 'Fast Performance',
    description: 'Optimized with Next.js 14, Tailwind CSS, and modern development practices.',
    icon: Zap,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-50 dark:bg-yellow-900/20'
  },
  {
    name: 'Database Ready',
    description: 'MongoDB integration with Mongoose for scalable data management.',
    icon: Database,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20'
  },
  {
    name: 'Secure API',
    description: 'Protected API routes with middleware and proper error handling.',
    icon: Lock,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20'
  },
  {
    name: 'Email Integration',
    description: 'Nodemailer setup for sending OTP and transactional emails.',
    icon: Mail,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20'
  },
  {
    name: 'User Management',
    description: 'Complete user registration, login, and profile management system.',
    icon: Users,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20'
  }
]

export function Features() {
  return (
    <section className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-blue-400">
            Everything you need
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Complete Hackathon Template
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            This template includes all the essential features you need to build a production-ready application 
            in record time. No more setting up authentication, styling, or basic components from scratch.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${feature.bgColor}`}>
                      <Icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </motion.div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
} 