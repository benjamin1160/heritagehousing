'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

type IconName = 'cash' | 'home' | 'noShow' | 'wrench' | 'noFee' | 'clock'

const Icon = ({ name, className }: { name: IconName; className?: string }) => {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  }
  switch (name) {
    case 'cash':
      return (
        <svg {...common}>
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M6 10h.01M18 14h.01" />
        </svg>
      )
    case 'home':
      return (
        <svg {...common}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10" />
          <path d="M9 16l2 2 4-4" />
        </svg>
      )
    case 'noShow':
      return (
        <svg {...common}>
          <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
          <circle cx="12" cy="12" r="3" />
          <path d="M3 3l18 18" />
        </svg>
      )
    case 'wrench':
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 00-5.6 5.6L3 18v3h3l6.1-6.1a4 4 0 005.6-5.6l-2.8 2.8-2.2-2.2 2.8-2.8-1.8 0z" />
        </svg>
      )
    case 'noFee':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M5.5 5.5l13 13" />
          <path d="M12 7v2M12 15v2M9 10h4.5a1.5 1.5 0 010 3H10a1.5 1.5 0 000 3h5" />
        </svg>
      )
    case 'clock':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      )
  }
}

const benefits: {
  icon: IconName
  title: string
  body: string
  size: 'wide' | 'tall' | 'default'
  tone: string
}[] = [
  {
    icon: 'noFee',
    title: 'The brand: Justin Stamper',
    body: 'Cast member of A&E’s Zombie House Flipping with hundreds of thousands of followers across his platforms. When Justin posts about a community, the right investors and residents pay attention.',
    size: 'wide',
    tone: 'from-rose-500/15 to-pink-300/5',
  },
  {
    icon: 'home',
    title: 'The homes: Heritage',
    body: 'Heritage Housing Solutions is a Florida-licensed manufactured / modular / tiny-home dealer (BBB A+). We supply the inventory that fills the community.',
    size: 'default',
    tone: 'from-blue-500/15 to-cyan-300/5',
  },
  {
    icon: 'noShow',
    title: 'The operator: Jay Eben',
    body: 'Mobile-home dealer licensed in FL and TX, alum of LakeShore Management — one of the country’s largest community operators. Jay runs the playbook from move-in through stabilized cash flow.',
    size: 'default',
    tone: 'from-violet-500/15 to-indigo-300/5',
  },
  {
    icon: 'cash',
    title: 'You keep the land',
    body: 'No requirement to sell. Most partnerships are structured so you stay in as the landowner and ride the upside.',
    size: 'default',
    tone: 'from-green-500/15 to-emerald-300/5',
  },
  {
    icon: 'wrench',
    title: 'Honest fit check first',
    body: 'Not every parcel pencils as a community. We tell you on the first call whether the math works — before anyone spends a dollar.',
    size: 'default',
    tone: 'from-orange-500/15 to-amber-300/5',
  },
  {
    icon: 'clock',
    title: 'No broker, no retainer',
    body: 'You don’t pay us to talk. We make money when communities are built and leased — not on consulting hours.',
    size: 'default',
    tone: 'from-sky-500/15 to-blue-300/5',
  },
]

const steps = [
  {
    n: '01',
    title: 'Tell us about the land',
    body: 'Fill out the form or call. Address or county, acreage, current zoning, and what you want out of it.',
  },
  {
    n: '02',
    title: 'Honest fit call with Jay',
    body: 'Jay walks the parcel on a map and tells you whether it can support a manufactured-home community — and what kind. No pitch deck, no retainer.',
  },
  {
    n: '03',
    title: 'Build, fill, operate',
    body: 'If it’s a fit, we draft a partnership structure that lets you keep skin in the game. Heritage supplies the homes, Jay runs operations, Justin drives visibility.',
  },
]

const listContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07 },
  },
}

const listItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
}

const viewport = { once: true, amount: 0.2 }

function sizeClasses(size: 'wide' | 'tall' | 'default') {
  if (size === 'wide') return 'md:col-span-2'
  if (size === 'tall') return 'md:row-span-2'
  return ''
}

export function Solution() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="blob blob-2"
          style={{
            top: '20%',
            right: '-10%',
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
          variants={listContainer}
        >
          <motion.p
            variants={listItem}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900"
          >
            <span className="h-px w-10 bg-blue-900" />
            How it works
          </motion.p>
          <motion.h2
            variants={listItem}
            className="display mt-6 text-5xl md:text-7xl font-semibold text-neutral-950"
          >
            What you actually get with{' '}
            <span className="serif-italic text-blue-900">Heritage</span>.
          </motion.h2>
          <motion.p
            variants={listItem}
            className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 leading-relaxed"
          >
            Three things stitched together: a brand that gets eyeballs on the
            project, a dealer that supplies the homes, and an operator who&apos;s
            already run portfolios past 25 communities.
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          className="mt-16 grid gap-5 md:grid-cols-3 md:auto-rows-[220px]"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={listContainer}
        >
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              variants={listItem}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className={`group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm hover:shadow-lg hover:shadow-blue-900/5 transition-shadow ${sizeClasses(
                b.size
              )}`}
            >
              <div
                aria-hidden
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${b.tone} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative flex h-full flex-col">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-sm transition-transform group-hover:scale-105 group-hover:rotate-[-4deg]">
                  <Icon name={b.icon} className="h-5 w-5" />
                </div>
                <h3
                  className={`mt-5 font-semibold tracking-tight text-neutral-900 ${
                    b.size === 'wide' ? 'text-2xl md:text-3xl' : 'text-xl'
                  }`}
                >
                  {b.title}
                </h3>
                <p
                  className={`mt-2 text-neutral-600 leading-relaxed ${
                    b.size === 'wide'
                      ? 'text-base md:text-lg max-w-md'
                      : 'text-[15px]'
                  }`}
                >
                  {b.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process steps */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="max-w-2xl"
          >
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900">
              <span className="h-px w-10 bg-blue-900" />
              The process
            </p>
            <h3 className="display mt-6 text-4xl md:text-6xl font-semibold text-neutral-950">
              Three steps.{' '}
              <span className="serif-italic text-green-700">Done in days.</span>
            </h3>
          </motion.div>

          <div className="relative mt-14">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-7 hidden md:block"
            >
              <svg
                className="mx-16 h-8 w-[calc(100%-8rem)]"
                viewBox="0 0 100 4"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 2 H 100"
                  stroke="url(#grad)"
                  strokeWidth="1"
                  strokeDasharray="2 3"
                />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1e3a8a" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#16a34a" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <motion.div
              className="grid gap-6 md:grid-cols-3"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={listContainer}
            >
              {steps.map((s) => (
                <motion.div
                  key={s.n}
                  variants={listItem}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="relative rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-950 font-mono text-sm font-semibold text-white shadow-lg shadow-blue-900/10 ring-4 ring-white">
                    {s.n}
                  </div>
                  <h4 className="mt-5 text-xl font-semibold tracking-tight">
                    {s.title}
                  </h4>
                  <p className="mt-2 text-neutral-600 leading-relaxed">
                    {s.body}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
