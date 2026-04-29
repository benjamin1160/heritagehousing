'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const roles = [
  {
    label: 'Brand',
    name: 'Justin Stamper',
    sub: 'A&E · Zombie House Flipping',
  },
  {
    label: 'Operator',
    name: 'Jay Eben',
    sub: 'FL · TX licensed · LakeShore alum',
  },
  {
    label: 'Homes',
    name: 'Heritage Housing',
    sub: 'BBB A+ · FL dealer DH11519051',
  },
]

export function OfferCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: -2 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.3 }}
      className="relative mx-auto w-full max-w-sm"
      style={{ ['--tilt' as string]: '-2deg' }}
    >
      <div
        aria-hidden
        className="absolute inset-0 translate-x-2 translate-y-2 rotate-[4deg] rounded-2xl bg-white/70 shadow-lg"
      />
      <div
        aria-hidden
        className="absolute inset-0 translate-x-1 translate-y-1 rotate-[1deg] rounded-2xl bg-white shadow-lg"
      />

      <div className="paper-card float-slow relative overflow-hidden p-7">
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
              Heritage · Partnership
            </div>
          </div>
          <div className="text-[10px] font-medium text-neutral-400">
            Three roles · one team
          </div>
        </div>

        <div className="mt-5 border-t border-dashed border-neutral-200 pt-5">
          <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
            What you get
          </div>
          <div className="mt-1 text-base font-semibold tracking-tight text-neutral-900">
            A community on your land —{' '}
            <span className="serif-italic text-blue-900">funded, filled, and operated</span>.
          </div>
        </div>

        <ul className="mt-5 space-y-3">
          {roles.map((r, i) => (
            <motion.li
              key={r.label}
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{
                delay: 0.6 + i * 0.18,
                duration: 0.45,
                ease: EASE_OUT,
              }}
              className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-gradient-to-br from-white to-neutral-50 p-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-900 to-blue-700 text-[10px] font-bold uppercase tracking-wider text-white">
                {r.label[0]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                  {r.label}
                </div>
                <div className="mt-0.5 truncate text-sm font-semibold text-neutral-900">
                  {r.name}
                </div>
                <div className="truncate text-xs text-neutral-500">{r.sub}</div>
              </div>
            </motion.li>
          ))}
        </ul>

        <div
          aria-hidden
          className="stamp pointer-events-none absolute -right-4 top-16 select-none"
        >
          <div className="rounded-md border-[3px] border-blue-700/70 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-blue-700/80 opacity-90">
            Aligned
          </div>
        </div>
      </div>

      <div aria-hidden className="mt-4 text-center text-xs text-neutral-400">
        Each partnership is structured to your land &amp; goals
      </div>
    </motion.div>
  )
}
