'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { OfferCard } from './OfferCard'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_OUT },
  },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="blob blob-1"
          style={{
            top: '-10%',
            left: '-8%',
            width: '600px',
            height: '600px',
            background:
              'radial-gradient(circle at 30% 30%, #bfdbfe, transparent 65%)',
            opacity: 0.55,
          }}
        />
        <div
          className="blob blob-2"
          style={{
            top: '10%',
            right: '-12%',
            width: '620px',
            height: '620px',
            background:
              'radial-gradient(circle at 60% 40%, #bbf7d0, transparent 65%)',
            opacity: 0.5,
          }}
        />
        <div
          className="blob blob-3"
          style={{
            bottom: '-25%',
            left: '35%',
            width: '640px',
            height: '640px',
            background:
              'radial-gradient(circle at 50% 50%, #fde68a, transparent 65%)',
            opacity: 0.35,
          }}
        />
      </div>

      <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="grid items-center gap-14 md:grid-cols-[1.15fr_1fr] md:gap-16">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <motion.div
              variants={item}
              className="mb-7 inline-flex items-center gap-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-500" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span className="rounded-full border border-blue-200/80 bg-white/80 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-blue-900 uppercase backdrop-blur">
                For real-estate investors new to manufactured housing
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="display text-5xl md:text-6xl lg:text-7xl font-semibold text-neutral-950"
            >
              You know real estate.{' '}
              <span className="serif-italic highlight-swoosh text-green-700">
                We&apos;ll show you
              </span>{' '}
              manufactured housing.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg md:text-xl text-neutral-600 leading-relaxed"
            >
              Built for small park owners scaling up, fix-and-flip investors
              graduating to a real asset class, and{' '}
              <span className="font-semibold text-neutral-900">
                affordable-housing authorities funding the gap.
              </span>{' '}
              We bring the brand, the operator, and the homes.
            </motion.p>

            <motion.form
              variants={item}
              action="/api/lead"
              method="post"
              className="mt-8 max-w-xl"
            >
              <div className="rounded-2xl border border-neutral-200 bg-white/90 p-3 shadow-lg shadow-blue-900/5 backdrop-blur">
                <div className="flex flex-col gap-2 sm:flex-row">
                  <label htmlFor="hero-address" className="sr-only">
                    Tell us about you — investor type, parcel, or capital
                  </label>
                  <div className="relative flex-1">
                    <svg
                      aria-hidden
                      className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <input
                      id="hero-address"
                      name="address"
                      type="text"
                      required
                      placeholder="Park owner, fix/flipper, housing authority, other..."
                      className="w-full rounded-xl border border-transparent bg-neutral-50 py-3.5 pl-11 pr-4 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors focus:border-blue-400 focus:bg-white focus:outline-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ y: -1, scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    className="shimmer-hover cta-glow relative overflow-hidden rounded-xl bg-gradient-to-br from-green-500 to-green-700 px-6 py-3.5 text-base font-semibold text-white whitespace-nowrap"
                  >
                    <span className="relative z-10">Walk Me Through It →</span>
                  </motion.button>
                </div>
              </div>
              <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500">
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    className="h-3.5 w-3.5 text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Free 15-min walkthrough call
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    className="h-3.5 w-3.5 text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Asset-class onboarding included
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <svg
                    className="h-3.5 w-3.5 text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Communities operated by Jay Eben
                </span>
              </p>
            </motion.form>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap items-center gap-6 text-sm text-neutral-600"
            >
              <a
                href="tel:+14045550123"
                className="inline-flex items-center gap-2 font-semibold text-neutral-900 hover:text-blue-900 transition-colors"
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
                Or call (404) 555-0123
              </a>
              <span className="text-neutral-300">·</span>
              <div className="inline-flex items-center gap-1.5">
                <span className="flex items-center">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg
                      key={i}
                      className="h-4 w-4 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.95c.3.922-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.95a1 1 0 00-.364-1.118L2.49 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.95z" />
                    </svg>
                  ))}
                </span>
                <span className="font-medium text-neutral-800">As seen on</span>
                <span className="text-neutral-500">· A&amp;E Zombie House Flipping</span>
              </div>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-neutral-200 pt-6"
            >
              <div>
                <div className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                  Park owners
                </div>
                <div className="mt-1 text-xs text-neutral-500 leading-tight">
                  Scaling past their first community
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                  Flippers
                </div>
                <div className="mt-1 text-xs text-neutral-500 leading-tight">
                  Graduating to monthly cash flow
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                  Authorities
                </div>
                <div className="mt-1 text-xs text-neutral-500 leading-tight">
                  Funding the affordable-housing gap
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.25 }}
            className="relative flex flex-col items-center gap-8 md:gap-10"
          >
            <div className="relative w-full">
              <div
                aria-hidden
                className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-200/40 via-emerald-200/30 to-amber-200/40 blur-2xl"
              />
              <div className="paper-card relative overflow-hidden">
                <Image
                  src="/media/hero-handshake.jpg"
                  alt="Heritage Housing Solutions partner shaking hands with a landowner before breaking ground on a new community"
                  width={1264}
                  height={848}
                  priority
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="block h-auto w-full"
                />
              </div>
            </div>

            <OfferCard />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
