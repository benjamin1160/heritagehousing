'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const faqs = [
  {
    q: "I've never invested in manufactured housing. Where do I start?",
    a: "On a 15-minute call with Jay. He'll explain how MH community returns actually work — lot rent, occupancy, expense ratios, how a community gets to stabilization — versus the fix-and-flip or SFR math you're already used to. No pitch deck, no homework, no commitment to come back.",
  },
  {
    q: "I've been doing fix-and-flips. Why would MH be a better next move?",
    a: "Because flips top out. Each unit is a one-time payday and the cycle exhausts itself. A manufactured-home community is monthly cash flow on dozens of pads at once, with the same kind of value-add upside you already know how to spot — just at portfolio scale. Justin made exactly this jump.",
  },
  {
    q: 'My team is an affordable-housing authority. Can you partner with us?',
    a: "Yes. Manufactured-home communities are one of the fastest, lowest-cost paths to new affordable-housing inventory — the unit price points and build speed are very different from stick-built. We're set up to work with municipal and housing-authority partners on the structure that fits your charter.",
  },
  {
    q: 'I own a small park already. What does scaling with you look like?',
    a: "Jay's specialty is exactly the gap you're hitting — going from one or two communities to the operating architecture that supports five, ten, twenty-five. That can mean acquiring adjacent communities, taking on operations of your existing community, or co-developing additional ones.",
  },
  {
    q: 'Who is Justin Stamper and what does he do here?',
    a: "Justin is a cast member of A&E's Zombie House Flipping and a Central-Florida real-estate investor (Blueprint Real Estate Group). At Heritage, his role is brand and marketing — getting investors, residents, and partners onto the platform.",
  },
  {
    q: 'Who is Jay Eben and what does he do here?',
    a: "Jay is the operator. Licensed mobile-home dealer in FL and TX, alum of LakeShore Management — one of the largest manufactured-housing community operators in the US — and now runs his own community vehicle, Broadview Communities.",
  },
  {
    q: 'What does Heritage Housing Solutions itself supply?',
    a: "Heritage is a Florida-licensed dealer of manufactured, modular, and tiny homes (BBB A+, license DH11519051). When a community is built or expanded, Heritage supplies the homes that fill the pads.",
  },
  {
    q: 'Do I need to bring land or capital to start?',
    a: "Either works. Land owners come for the operator and the homes. Capital partners come for the deal flow and the operating team. Most conversations land on a structure that fits whichever side you bring.",
  },
  {
    q: 'Are there any fees or retainers to talk?',
    a: "No. No broker commission, no consulting retainer, no upfront cost to have the conversation. We make money when communities are actually built and operating.",
  },
  {
    q: 'How do I check that this is real?',
    a: "Jay: linkedin.com/in/jayeben (FL Mobile Home Dealer License, expires Sep 2027; TX MHD License, expires Apr 2026). Justin: aetv.com cast page and justinstamper.com. Heritage Housing Solutions: BBB-accredited A+, FL license DH11519051, Longwood, FL.",
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
            Questions investors{' '}
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
