'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const
const viewport = { once: true, amount: 0.2 }

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="max-w-3xl"
        >
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900">
            <span className="h-px w-10 bg-blue-900" />
            Meet the team
          </p>
          <h2 className="display mt-6 text-5xl md:text-7xl font-semibold text-neutral-950">
            One brand.{' '}
            <span className="serif-italic text-blue-900">One operator</span>.
          </h2>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 leading-relaxed">
            Two clearly-defined seats at the table. Justin gets your project in
            front of the right people. Jay actually makes it happen on the
            ground.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Justin — brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE_OUT }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-rose-200/40 via-amber-200/30 to-blue-200/30 blur-2xl"
            />
            <div className="paper-card relative overflow-hidden">
              <Image
                src="/media/team/jose-portrait.webp"
                alt="Justin Stamper, A&E Zombie House Flipping cast member and the brand face of Heritage Housing Solutions"
                width={800}
                height={592}
                priority={false}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="block h-auto w-full"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 text-white">
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                    The brand
                  </div>
                  <div className="text-lg font-semibold tracking-tight drop-shadow-sm">
                    Justin Stamper
                  </div>
                </div>
                <div className="rounded-full border border-white/40 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur">
                  A&amp;E · Orlando
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700">
              <p>
                You may know Justin from A&amp;E&apos;s{' '}
                <em>Zombie House Flipping</em> — the show where his team takes
                on the worst, most-abandoned houses in Orlando, Tampa, and
                Seattle and brings them back to life. He&apos;s flipped 100+
                of those zombie homes and wholesaled hundreds more.
              </p>
              <p>
                At Heritage, his job is the megaphone. Investors, residents,
                and partners pay attention when Justin posts — and that
                attention is what makes the math work for landowners on the
                fence.
              </p>
            </div>

            <a
              href="https://www.justinstamper.com/"
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600"
            >
              justinstamper.com
              <span aria-hidden>↗</span>
            </a>
          </motion.div>

          {/* Jay — operator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: EASE_OUT, delay: 0.12 }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-blue-200/40 via-emerald-200/30 to-amber-200/20 blur-2xl"
            />
            <div className="paper-card relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-neutral-900 text-white">
              <div className="aspect-[4/3] w-full">
                <div className="relative flex h-full flex-col justify-between p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
                        The operator
                      </div>
                      <div className="mt-1 text-3xl md:text-4xl font-semibold tracking-tight">
                        Jay Eben
                      </div>
                      <div className="mt-1 text-sm text-blue-100/90">
                        Broadview Communities · LakeShore alum
                      </div>
                    </div>
                    <div className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] backdrop-blur">
                      FL · TX licensed
                    </div>
                  </div>

                  <blockquote className="serif-italic mt-4 text-xl md:text-2xl leading-snug text-white">
                    &ldquo;At 25 communities, growth stops being about hustle.
                    It becomes about architecture.&rdquo;
                    <footer className="mt-3 text-xs font-medium not-italic uppercase tracking-[0.16em] text-blue-200/80">
                      — Jay, on LinkedIn
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-700">
              <p>
                Jay is the reason the projects actually work. He&apos;s a
                licensed mobile-home dealer in Florida and Texas, an alumnus of{' '}
                <span className="font-semibold text-neutral-900">
                  LakeShore Management
                </span>{' '}
                — one of the largest manufactured-housing community operators in
                the country — and now runs his own community vehicle, Broadview
                Communities.
              </p>
              <p>
                His specialty is operating community portfolios at scale: lease-
                up, occupancy, NOI, and the unglamorous management architecture
                that turns 25 random pads into a real, cash-flowing asset.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/jayeben"
              target="_blank"
              rel="noopener"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600"
            >
              linkedin.com/in/jayeben
              <span aria-hidden>↗</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.2 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#cta-form"
            className="shimmer-hover cta-glow relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-green-500 to-green-700 px-6 py-3 text-sm font-semibold text-white"
          >
            <span className="relative z-10">Submit your land</span>
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
        </motion.div>
      </div>
    </section>
  )
}
