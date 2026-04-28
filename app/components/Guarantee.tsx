'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

export function Guarantee() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-b from-white via-blue-50/60 to-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="blob blob-1"
          style={{
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '640px',
            height: '640px',
            background:
              'radial-gradient(circle at 50% 50%, #c7d2fe, transparent 65%)',
            opacity: 0.45,
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-24 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-900 to-blue-700 shadow-xl shadow-blue-900/30"
        >
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-blue-500/40 pulse-ring"
          />
          <svg
            aria-hidden
            className="relative h-9 w-9 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2l2.2 6.76h7.1l-5.75 4.18 2.2 6.77L12 15.53l-5.75 4.18 2.2-6.77L2.7 8.76h7.1L12 2z" />
          </svg>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.12 }}
          className="display balance mt-8 text-4xl md:text-6xl font-semibold text-neutral-950"
        >
          No obligation. No pressure.{' '}
          <span className="serif-italic text-blue-900">No surprise fees.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.22 }}
          className="balance mx-auto mt-5 max-w-xl text-lg text-neutral-600 leading-relaxed"
        >
          The offer is free. The call is free. If our number isn&apos;t right
          for you, walk away — no fee, no pressure. The cash amount we quote is
          the cash you walk away with at closing.
        </motion.p>
      </div>
    </section>
  )
}
