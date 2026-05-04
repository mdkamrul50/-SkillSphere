'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@heroui/react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <div className="text-center max-w-xl">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-7xl md:text-8xl font-extrabold text-blue-500"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-gray-800 mt-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-500 mt-4"
        >
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Link href="/">
            <Button className="px-6 py-5 text-lg rounded-xl bg-blue-500 text-white hover:bg-blue-600">
              Go Home
            </Button>
          </Link>

          <Link href="/course">
            <Button variant="outline" className="px-6 py-5 text-lg rounded-xl">
              Browse Courses
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
