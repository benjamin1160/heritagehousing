'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const
const viewport = { once: true, amount: 0.3 }

const credentials = [
  { value: '900+', label: 'mobile homes bought' },
  { value: '400+', label: 'investors trained at GMHU' },
  { value: '#1', label: 'Amazon best-seller' },
]

export function Founder() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-gradient-to-b from-white via-blue-50/30 to-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="blob blob-2"
          style={{
            top: '20%',
            right: '-12%',
            width: '560px',
            height: '560px',
            background:
              'radial-gradient(circle at 50% 50%, #bfdbfe, transparent 65%)',
            opacity: 0.45,
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-200/40 via-emerald-200/20 to-amber-200/30 blur-2xl"
            />
            <div className="paper-card relative overflow-hidden">
              <Image
                src="/media/team/jose-portrait.webp"
                alt="Jose Garcia, founder of Garcia Mobile Home Buyers and Garcia Mobile Home University"
                width={800}
                height={592}
                priority={false}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="block h-auto w-full"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                    Founder
                  </div>
                  <div className="text-lg font-semibold tracking-tight drop-shadow-sm">
                    Jose Garcia
                  </div>
                </div>
                <div className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur">
                  Loganville, GA
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.1 }}
          >
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900">
              <span className="h-px w-10 bg-blue-900" />
              Meet the buyer
            </p>
            <h2 className="display mt-6 text-5xl md:text-6xl font-semibold text-neutral-950">
              Hi, I&apos;m{' '}
              <span className="serif-italic text-blue-900">Jose</span>.
            </h2>
            <p className="mt-4 text-sm font-medium text-neutral-500">
              Founder of{' '}
              <span className="text-neutral-900">
                Garcia Mobile Home University
              </span>{' '}
              · 400+ investors trained · Amazon best-selling author
            </p>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-neutral-700">
              <p>
                I&apos;ve spent the last nine years buying mobile and
                manufactured homes across the Southeast — singlewides,
                doublewides, in parks and on private land, any age, any
                condition. My team and I have closed on more than 900 of them.
              </p>
              <p>
                I&apos;m not just a buyer — I literally teach this. Over 400
                other investors have come through Garcia Mobile Home University
                to learn how I source, evaluate, and close mobile-home deals.
                When you call me, you&apos;re not getting someone learning on
                your home. You&apos;re getting the person other buyers learn
                from.
              </p>
              <p>
                Fill out the form and we&apos;ll send you a fair cash number, no
                pressure, no back-and-forth. If the offer works, we close on
                your schedule. If it doesn&apos;t, you walk away owing nothing.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-neutral-200 pt-6">
              {credentials.map((c) => (
                <div key={c.label}>
                  <div className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
                    {c.value}
                  </div>
                  <div className="mt-1 text-xs text-neutral-500 leading-tight">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#cta-form"
                className="shimmer-hover cta-glow relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-green-500 to-green-700 px-6 py-3 text-sm font-semibold text-white"
              >
                <span className="relative z-10">Get my cash offer</span>
                <span aria-hidden className="relative z-10">
                  →
                </span>
              </a>
              <a
                href="tel:+14045550123"
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-blue-900 transition-colors"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
