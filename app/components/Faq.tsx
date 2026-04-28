'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const faqs = [
  {
    q: 'What kind of land do you partner on?',
    a: 'Raw acreage, infill parcels, distressed parks, failed subdivisions, and sites already in entitlement. Typical project sizes range from 20 to 500+ acres, but we look at deals outside that range when the fundamentals work. We focus on parcels suited for manufactured-home communities, RV resorts, and master-planned residential.',
  },
  {
    q: 'Do you buy land outright or partner on it?',
    a: 'Both. We structure deals three ways: (1) outright purchase at close, (2) joint venture where you contribute the land for equity in the developed asset, or (3) seller-carried partnership / ground lease. We tailor the structure to what the owner needs.',
  },
  {
    q: 'Who is Justin Stamper?',
    a: 'Justin is a partner at Heritage Housing Solutions and a cast member on A&E\'s Zombie House Flipping — a reality series where teams renovate dilapidated, abandoned "zombie" houses across Orlando, Tampa, and Seattle. He brings visibility, network, and a track record of bringing distressed real estate back to life.',
  },
  {
    q: 'Who is Jay Eben?',
    a: 'Jay is the operational backbone of Heritage Housing Solutions. He has 20+ years designing, entitling, building, and operating manufactured-home communities and parks. If Justin is the face, Jay is the playbook — he\'s the reason the projects actually pencil and lease up.',
  },
  {
    q: 'What states do you operate in?',
    a: 'We have active projects across 12+ states and continue to expand. We underwrite parcels nationwide. Send us the info — if it\'s outside our current footprint but the fundamentals are strong, we have a network of capital partners who can step in.',
  },
  {
    q: 'Are there any fees or commissions to engage you?',
    a: 'No. The feasibility review is free. There\'s no broker commission, no consulting retainer, no upfront cost. We only make money when a project actually closes and gets built.',
  },
  {
    q: 'What if my land is stuck in entitlement?',
    a: 'That\'s often where we add the most value. Our team has navigated zoning changes, special-use permits, conditional approvals, utility extensions, and county hearings across multiple jurisdictions. Send us the file — we\'ll tell you whether it\'s salvageable.',
  },
  {
    q: 'How fast does a deal move?',
    a: 'Initial proposal in a few business days. Letter of intent within 1–2 weeks once we have the basics. Outright purchases can close in 30–45 days; JV partnerships and entitlement-heavy projects move on a project-specific timeline.',
  },
  {
    q: 'What happens after I submit my info?',
    a: 'A member of our team reviews the parcel, pulls the public data we need, and reaches out to confirm a few details. We send a written proposal with one or more deal structures and projected economics. From there, you decide whether to move forward — no pressure either way.',
  },
  {
    q: 'Can I see Heritage Housing Solutions online?',
    a: 'Yes — visit heritagehousingsolutions.com for the company, or partners.heritagehousingsolutions.com for active partnership opportunities. Connect with Jay on LinkedIn at linkedin.com/in/jayeben.',
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="text-center"
        >
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-blue-900">
            <span className="h-px w-8 bg-blue-900" />
            FAQ
            <span className="h-px w-8 bg-blue-900" />
          </p>
          <h2 className="display mt-6 text-5xl md:text-7xl font-semibold text-neutral-950">
            Questions landowners{' '}
            <span className="serif-italic text-blue-900">actually ask</span>.
          </h2>
        </motion.div>

        <ul className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  ease: EASE_OUT,
                  delay: i * 0.03,
                }}
                className={`overflow-hidden rounded-xl border transition-colors ${
                  isOpen
                    ? 'border-blue-300 bg-gradient-to-br from-blue-50/70 to-white shadow-sm'
                    : 'border-neutral-200 bg-white hover:border-neutral-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-xl"
                >
                  <span className="text-base md:text-lg font-semibold tracking-tight text-neutral-900">
                    {f.q}
                  </span>
                  <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: EASE_OUT }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg transition-colors ${
                      isOpen
                        ? 'bg-blue-900 text-white'
                        : 'bg-neutral-100 text-blue-900'
                    }`}
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: EASE_OUT },
                        opacity: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 pr-10 text-neutral-700 leading-relaxed">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
