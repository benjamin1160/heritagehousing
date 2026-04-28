'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const crossedOptions = [
  { label: 'List with an agent', sub: '6% commission. Months on market.' },
  {
    label: 'Make repairs first',
    sub: 'Thousands out-of-pocket before offers.',
  },
  {
    label: 'Host open houses',
    sub: 'Strangers walking through every weekend.',
  },
  {
    label: 'Wait for a buyer',
    sub: 'Inspections, lender delays, fall-throughs.',
  },
]

const viewport = { once: true, amount: 0.25 }

export function Problem() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-800 bg-neutral-950 text-neutral-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at 15% 0%, rgba(244, 63, 94, 0.22), transparent 55%), radial-gradient(ellipse at 85% 100%, rgba(30, 64, 175, 0.35), transparent 55%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div className="noise pointer-events-none absolute inset-0 -z-10 opacity-[0.18]" />

      <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rose-400"
        >
          <span className="h-px w-10 bg-rose-400" />
          The traditional way
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.08 }}
          className="display mt-6 text-5xl md:text-7xl lg:text-[92px] font-semibold tracking-tight leading-[0.98] max-w-5xl"
        >
          Selling the old way is{' '}
          <span className="serif-italic text-rose-400">expensive and slow</span>
          .
        </motion.h2>

        <div className="mt-16 grid gap-14 md:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.12 }}
            className="text-lg md:text-xl text-neutral-300 leading-relaxed space-y-5"
          >
            <p>
              Maybe you inherited a house you can&apos;t keep. Maybe the roof
              needs replacing before anyone will touch it. Maybe you&apos;re
              facing a job move, a divorce, or a lender deadline — and you
              don&apos;t have six months to wait.
            </p>
            <p>
              Listing the traditional way means paying for repairs, prepping for
              showings, and praying a buyer&apos;s financing doesn&apos;t fall
              through. Every option feels like a dead-end:
            </p>
          </motion.div>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.2 },
              },
            }}
            className="space-y-3"
          >
            {crossedOptions.map((o) => (
              <motion.li
                key={o.label}
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.55, ease: EASE_OUT },
                  },
                }}
                className="relative flex items-baseline justify-between gap-4 border-b border-white/10 pb-4"
              >
                <div>
                  <div className="relative inline-block text-xl md:text-2xl font-semibold tracking-tight text-neutral-100">
                    <span className="relative z-10">{o.label}</span>
                    <motion.span
                      aria-hidden
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={viewport}
                      transition={{
                        duration: 0.55,
                        ease: EASE_OUT,
                        delay: 0.4,
                      }}
                      className="absolute left-0 top-[55%] h-[2px] w-full origin-left bg-rose-400/80"
                    />
                  </div>
                  <div className="mt-1 text-sm text-neutral-400">{o.sub}</div>
                </div>
                <svg
                  aria-hidden
                  className="h-5 w-5 shrink-0 text-rose-400/80"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.25 }}
          className="relative mt-24 max-w-4xl"
        >
          <div
            aria-hidden
            className="serif-italic absolute -left-4 -top-12 text-[180px] leading-none text-rose-500/20 md:-left-10 md:-top-20 md:text-[240px]"
          >
            &ldquo;
          </div>
          <p className="relative serif-italic text-3xl md:text-5xl text-white leading-[1.1] tracking-tight">
            You need a buyer who{' '}
            <span className="text-rose-400">shows up with cash</span>, takes the
            home as it is, and lets you pick the day you walk away.
          </p>
        </motion.blockquote>
      </div>
    </section>
  )
}
