'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const faqs = [
  {
    q: 'What kind of mobile homes do you buy?',
    a: 'Singlewides, doublewides, manufactured homes, park models — any age (1970s, 80s, 90s, newer), in a park or on private land. We buy nationwide-built and HUD-tagged homes.',
  },
  {
    q: 'Do I have to make any repairs?',
    a: "No. We buy mobile homes in any condition — gutted, water damage, fire damage, vandalized, full of belongings, even abandoned. Leave whatever you don't want. We handle everything after close.",
  },
  {
    q: 'What if I owe back lot rent or have title issues?',
    a: "It depends on the deal. We've worked with sellers carrying back lot rent, title problems, missing titles, and unpaid taxes. Tell us the situation on the call and we'll figure out what we can do.",
  },
  {
    q: 'Do I have to move the home myself?',
    a: "No. If the home needs to leave the park or move off-site, we coordinate transport. You don't hire a hauler or a demo crew.",
  },
  {
    q: 'Are there any fees or commissions?',
    a: 'None. No agent fees, no closing costs, no junk charges. The cash number we offer is the exact amount you walk away with.',
  },
  {
    q: 'How fast can I close?',
    a: 'As fast as 7 days once title clears. Most sellers close in 10–21 days. Need more time? Pick a date 30, 60, or 90 days out — we work around you.',
  },
  {
    q: 'Am I obligated to accept the offer?',
    a: "Not at all. The offer is free and no-obligation. If the number doesn't work for you, walk away — no fee, no pressure, no follow-up calls.",
  },
  {
    q: 'How do you calculate the offer?',
    a: 'We look at the year and size of the home, the condition (we ask a few quick questions), the location and lot rent if it stays in the park, and what it would cost us to rehab and resell or move it. Then we back into a fair cash number.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We buy across Georgia, Alabama, Tennessee, South Carolina, and Florida — with a strong focus on the Atlanta, Birmingham, Nashville, Columbia, and Jacksonville metros. Outside that footprint? Send us the info anyway — we have buyer partners through Garcia Mobile Home University in most US markets.',
  },
  {
    q: 'What happens after I submit my info?',
    a: 'You will get a quick text or call from someone on our team to confirm a few details about the home. We send a written cash offer within 24 hours. If you say yes, we open escrow and close on the date you pick.',
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
            Questions sellers{' '}
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
