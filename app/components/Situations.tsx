'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

type IconName =
  | 'inherited'
  | 'lotRent'
  | 'parkMove'
  | 'relocation'
  | 'vacant'
  | 'damaged'
  | 'tenants'
  | 'landlord'
  | 'title'
  | 'vin'
  | 'lawsuit'
  | 'rehab'

const Icon = ({ name }: { name: IconName }) => {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'h-5 w-5',
  }
  switch (name) {
    case 'inherited':
      return (
        <svg {...common}>
          <path d="M12 2v8" />
          <path d="M9 5l3-3 3 3" />
          <path d="M3 12l9-2 9 2" />
          <path d="M5 12v8a1 1 0 001 1h12a1 1 0 001-1v-8" />
        </svg>
      )
    case 'lotRent':
      return (
        <svg {...common}>
          <path d="M12 1v22" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      )
    case 'parkMove':
      return (
        <svg {...common}>
          <path d="M3 17h13l3-4h2v-3h-5l-3-4H3z" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="16" cy="18" r="2" />
        </svg>
      )
    case 'relocation':
      return (
        <svg {...common}>
          <path d="M3 10h13" />
          <path d="M13 6l-4 4 4 4" />
          <path d="M16 14l5 0 0 6-16 0" />
          <path d="M21 4v10" />
        </svg>
      )
    case 'vacant':
      return (
        <svg {...common}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
          <circle cx="12" cy="15" r="1.5" />
        </svg>
      )
    case 'damaged':
      return (
        <svg {...common}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
          <path d="M9 13l3 3 3-3" />
          <path d="M9 17l3-3 3 3" />
        </svg>
      )
    case 'tenants':
      return (
        <svg {...common}>
          <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
          <circle cx="10" cy="7" r="4" />
          <path d="M21 21v-2a4 4 0 00-3-3.87" />
          <path d="M17 3.13a4 4 0 010 7.75" />
        </svg>
      )
    case 'landlord':
      return (
        <svg {...common}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10" />
          <circle cx="12" cy="14" r="2" />
          <path d="M8 20v-2a4 4 0 014-4 4 4 0 014 4v2" />
        </svg>
      )
    case 'title':
      return (
        <svg {...common}>
          <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
          <path d="M14 3v5h5" />
          <path d="M9 13h6" />
          <path d="M9 17h4" />
        </svg>
      )
    case 'vin':
      return (
        <svg {...common}>
          <path d="M20 12l-7 7a2 2 0 01-2.83 0l-7-7V4h7z" />
          <circle cx="8.5" cy="8.5" r="1.5" />
        </svg>
      )
    case 'lawsuit':
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M5 8h14" />
          <path d="M8 8l-3 6a3 3 0 006 0z" />
          <path d="M16 8l-3 6a3 3 0 006 0z" />
          <path d="M8 21h8" />
        </svg>
      )
    case 'rehab':
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 00-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 005.4-5.4l-2.6 2.6-2.4-2.4z" />
        </svg>
      )
  }
}

const situations: {
  icon: IconName
  title: string
  body: string
}[] = [
  {
    icon: 'inherited',
    title: 'Inherited acreage',
    body: 'Family land you can’t actively manage? We turn it into a producing community asset — purchase or partner.',
  },
  {
    icon: 'lotRent',
    title: 'Carrying costs eating returns',
    body: 'Property tax and interest compounding on idle dirt? Let us put the land to its highest use.',
  },
  {
    icon: 'parkMove',
    title: 'Tired park operator',
    body: 'Done managing a legacy mobile-home park? We acquire, reposition, and operate at scale.',
  },
  {
    icon: 'relocation',
    title: '1031 exchange target',
    body: 'Need to place capital fast into a yielding asset? Heritage projects qualify and pencil.',
  },
  {
    icon: 'vacant',
    title: 'Vacant raw land',
    body: 'Dirt sitting on a county map for years? We underwrite the parcel and bring a community vision.',
  },
  {
    icon: 'damaged',
    title: 'Distressed park',
    body: 'Aging infrastructure, deferred maintenance, low occupancy? We turnaround community assets.',
  },
  {
    icon: 'tenants',
    title: 'JV partner wanted',
    body: 'Want to ride the upside instead of selling? Co-develop the project with our team and capital.',
  },
  {
    icon: 'landlord',
    title: 'Subdivision that under-yields',
    body: 'Approved single-family lots? A manufactured-home community can generate higher cash-on-cash.',
  },
  {
    icon: 'title',
    title: 'Stuck in entitlement',
    body: 'Plans stalled at the county? Our team has shepherded zoning, hearings, and permits in 12+ states.',
  },
  {
    icon: 'vin',
    title: 'Off-market parcel',
    body: 'Land you’ve never listed but are open to monetizing? We do confidential, no-broker conversations.',
  },
  {
    icon: 'lawsuit',
    title: 'Lender pressure',
    body: 'Loan maturing or covenant tripped on a land position? We can recapitalize or close fast.',
  },
  {
    icon: 'rehab',
    title: 'Failed development attempt',
    body: 'Previous builder walked away or ran out of capital? We pick projects up mid-stream and finish them.',
  },
]

const viewport = { once: true, amount: 0.2 }

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
}

export function Situations() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="blob blob-3"
          style={{
            top: '10%',
            left: '-10%',
            width: '520px',
            height: '520px',
            background:
              'radial-gradient(circle at 50% 50%, #c7d2fe, transparent 65%)',
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
            Who we partner with
          </motion.p>
          <motion.h2
            variants={item}
            className="display mt-6 text-5xl md:text-7xl font-semibold text-neutral-950"
          >
            Every parcel has a{' '}
            <span className="serif-italic text-blue-900">path forward</span>.
          </motion.h2>
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-600 leading-relaxed"
          >
            You don&apos;t need a perfect deal teed up. Whatever the situation
            — we&apos;ve probably worked through one like it.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={container}
        >
          {situations.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-blue-900/5"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-300/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-white transition-transform group-hover:scale-105 group-hover:rotate-[-4deg]">
                  <Icon name={s.icon} />
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-neutral-900">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="mt-10 text-center text-sm text-neutral-500"
        >
          Not sure if your parcel fits?{' '}
          <a
            href="#cta-form"
            className="font-semibold text-blue-900 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-600"
          >
            Tell us about your land
          </a>{' '}
          — we&apos;ll be straight with you on the call.
        </motion.p>
      </div>
    </section>
  )
}
