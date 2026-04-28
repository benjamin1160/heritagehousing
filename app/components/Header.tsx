'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'border-b border-neutral-200/80 bg-white/80 backdrop-blur-xl shadow-sm'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="#top"
          className="flex items-center gap-2 font-semibold tracking-tight text-blue-900"
        >
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-900 to-blue-700 text-white shadow-md shadow-blue-900/20"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 10l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[15px]">Heritage Housing Solutions</span>
            <span className="hidden text-[10px] font-medium tracking-wide text-neutral-500 sm:inline">
              Land partnerships · Community development
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="tel:+14045550123"
            className="hidden items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1.5 text-sm font-semibold text-neutral-800 backdrop-blur transition-colors hover:border-blue-300 hover:text-blue-900 sm:inline-flex"
          >
            <svg
              aria-hidden
              className="h-4 w-4 text-green-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            (404) 555-0123
          </a>

          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          >
            <Link
              href="#cta-form"
              className="shimmer-hover relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-green-500 to-green-700 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-green-600/30 hover:shadow-lg hover:shadow-green-600/40 transition-shadow"
            >
              <span className="relative z-10">Partner With Us</span>
              <span aria-hidden className="relative z-10">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
