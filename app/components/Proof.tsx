'use client'

import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from 'framer-motion'
import { CtaButton } from './CtaButton'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const testimonials = [
  {
    quote:
      'PLACEHOLDER — replace with a fix-and-flip investor who graduated into MH. Aim for: how many flips before the jump, what Jay’s walkthrough call clarified, what they ended up doing.',
    name: 'Investor name',
    role: 'City, ST',
    initials: 'IN',
    tag: 'Fix-and-flip → MH community',
  },
  {
    quote:
      'PLACEHOLDER — replace with a small park owner who scaled with Jay. Aim for: pads they started with, where they got stuck, how Jay’s operating architecture moved them past that.',
    name: 'Park owner name',
    role: 'Community, ST',
    initials: 'PO',
    tag: 'Small park owner · scaled up',
  },
  {
    quote:
      'PLACEHOLDER — replace with a housing-authority partner. Aim for: the affordable-housing gap they were trying to fill, how MH penciled vs. stick-built, the result.',
    name: 'Authority name',
    role: 'Municipality, ST',
    initials: 'HA',
    tag: 'Affordable housing partner',
  },
]

const stats = [
  { value: 25, suffix: '+', label: 'Communities in Jay’s operating arc' },
  { value: 100, suffix: '+', label: 'Zombie houses flipped on A&E by Justin' },
  { value: 2, suffix: '', label: 'States Jay holds dealer licenses (FL, TX)' },
  { value: 100, suffix: '%', label: 'Honest fit-check on the first call' },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const card = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
}

const viewport = { once: true, amount: 0.3 }

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.8 })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplay(v))
    return unsubscribe
  }, [rounded])

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      })
      return controls.stop
    }
  }, [inView, count, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  )
}

export function Proof() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden border-b border-neutral-200 bg-neutral-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={container}
        >
          <motion.p
            variants={card}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900"
          >
            <span className="h-px w-10 bg-blue-900" />
            Proof
          </motion.p>
          <motion.h2
            variants={card}
            className="display mt-6 text-5xl md:text-7xl font-semibold text-neutral-950"
          >
            Investors at every{' '}
            <span className="serif-italic text-blue-900">stage</span>. One team
            walking them through.
          </motion.h2>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          className="mt-16 grid grid-cols-2 divide-neutral-200 border-y border-neutral-200 md:grid-cols-4 md:divide-x"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={container}
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={card}
              className="relative px-6 py-10 md:px-8"
            >
              <div className="display text-5xl md:text-6xl font-semibold tracking-tight text-neutral-950">
                <CountUp value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm text-neutral-500 leading-snug">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mt-20 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={container}
        >
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              variants={card}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="relative flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-xl hover:shadow-neutral-900/5 transition-shadow"
            >
              <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-600">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                {t.tag}
              </div>
              <svg
                aria-hidden
                className="mt-5 h-8 w-8 text-neutral-300"
                viewBox="0 0 32 32"
                fill="currentColor"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <blockquote className="mt-3 flex-1 text-[17px] leading-relaxed text-neutral-800">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-neutral-100 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neutral-800 to-neutral-950 text-xs font-semibold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        <div className="mt-20 flex justify-center">
          <CtaButton microcopy="Free feasibility review. No obligation, no broker.">
            Start the Conversation
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
