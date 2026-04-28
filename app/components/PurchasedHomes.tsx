'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const
const viewport = { once: true, amount: 0.2 }

const homes = [
  {
    src: '/media/purchased/home-1.jpeg',
    alt: 'Mobile home Garcia Mobile Home Buyers purchased',
    width: 960,
    height: 713,
  },
  {
    src: '/media/purchased/home-2.jpeg',
    alt: 'Mobile home Garcia Mobile Home Buyers purchased',
    width: 1079,
    height: 811,
  },
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_OUT },
  },
}

export function PurchasedHomes() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="blob blob-2"
          style={{
            top: '15%',
            right: '-12%',
            width: '520px',
            height: '520px',
            background:
              'radial-gradient(circle at 50% 50%, #bbf7d0, transparent 65%)',
            opacity: 0.4,
          }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={container}
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900"
          >
            <span className="h-px w-10 bg-blue-900" />
            Receipts
          </motion.p>
          <motion.h2
            variants={item}
            className="display mt-6 text-5xl md:text-7xl font-semibold text-neutral-950"
          >
            Homes we&apos;ve{' '}
            <span className="serif-italic text-blue-900">purchased</span>.
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 leading-relaxed"
          >
            Real homes, real closings. A small slice of the 900+ mobile and
            manufactured homes we&apos;ve bought across the Southeast.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={container}
        >
          {homes.map((home) => (
            <motion.figure
              key={home.src}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-shadow hover:shadow-xl hover:shadow-neutral-900/5"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image
                  src={home.src}
                  alt={home.alt}
                  width={home.width}
                  height={home.height}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent"
                />
                <figcaption className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                  Closed · cash
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
