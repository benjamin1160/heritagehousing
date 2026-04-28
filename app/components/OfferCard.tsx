'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const checklist = [
  'Cash at close',
  'No fees, no commissions',
  'Close in as little as 7 days',
]

function formatDollars(n: number) {
  return '$' + n.toLocaleString('en-US')
}

export function OfferCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setDisplay(v))
    return unsub
  }, [rounded])

  useEffect(() => {
    if (inView) {
      const c = animate(count, 34500, {
        duration: 2.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4,
      })
      return c.stop
    }
  }, [inView, count])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.3 }}
      className="relative mx-auto w-full max-w-sm"
      style={{ ['--tilt' as string]: '-2deg' }}
    >
      {/* Paper stack effect */}
      <div
        aria-hidden
        className="absolute inset-0 translate-x-2 translate-y-2 rotate-[4deg] rounded-2xl bg-white/70 shadow-lg"
      />
      <div
        aria-hidden
        className="absolute inset-0 translate-x-1 translate-y-1 rotate-[1deg] rounded-2xl bg-white shadow-lg"
      />

      <div className="paper-card float-slow relative overflow-hidden p-7">
        {/* Card header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-blue-900 to-blue-700 text-white shadow-sm">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 10l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-500">
              Garcia MHU · Cash Offer
            </div>
          </div>
          <div className="text-[10px] font-medium text-neutral-400">
            Valid 48 hrs
          </div>
        </div>

        <div className="mt-5 border-t border-dashed border-neutral-200 pt-5">
          <div className="flex items-start justify-between gap-4 text-sm">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                Property
              </div>
              <div className="mt-1 font-medium text-neutral-900">
                Lot 47, Pine Ridge MHP
              </div>
              <div className="text-neutral-500">Loganville, GA</div>
            </div>
            <div className="text-right">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                Sale type
              </div>
              <div className="mt-1 font-medium text-neutral-900">
                As-is · cash
              </div>
            </div>
          </div>
        </div>

        {/* Cash offer */}
        <div className="mt-6 rounded-xl bg-gradient-to-br from-green-50 via-white to-blue-50 p-5 ring-1 ring-green-100">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-green-700">
            Your cash offer
          </div>
          <div className="mt-1 flex items-baseline gap-1 font-semibold tracking-tight">
            <span className="text-5xl md:text-6xl tabular-nums bg-gradient-to-br from-green-700 to-emerald-500 bg-clip-text text-transparent">
              {formatDollars(display)}
            </span>
          </div>
          <div className="mt-1 text-xs text-neutral-500">
            Offered within 24 hours of your submission
          </div>
        </div>

        {/* Check list */}
        <ul className="mt-5 space-y-2.5 text-sm">
          {checklist.map((c, i) => (
            <motion.li
              key={c}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 1.6 + i * 0.18,
                duration: 0.45,
                ease: EASE_OUT,
              }}
              className="flex items-center gap-2.5 text-neutral-700"
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{
                  delay: 1.6 + i * 0.18,
                  type: 'spring',
                  stiffness: 400,
                  damping: 18,
                }}
                className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-600 text-white"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-3 w-3"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.42l-7.5 7.5a1 1 0 01-1.42 0l-3.5-3.5a1 1 0 111.42-1.42L8.5 12.08l6.79-6.79a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.span>
              <span>{c}</span>
            </motion.li>
          ))}
        </ul>

        {/* APPROVED stamp */}
        <div
          aria-hidden
          className="stamp pointer-events-none absolute -right-4 top-20 select-none"
        >
          <div className="rounded-md border-[3px] border-red-500/70 px-3 py-1 text-sm font-bold uppercase tracking-[0.22em] text-red-500/80 opacity-90">
            Approved
          </div>
        </div>
      </div>

      {/* Float helper reminder legend under the card */}
      <div aria-hidden className="mt-4 text-center text-xs text-neutral-400">
        Illustrative example — your offer depends on condition &amp; location
      </div>
    </motion.div>
  )
}
