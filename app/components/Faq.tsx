'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const faqs = [
  {
    q: 'What kind of project is Heritage actually building?',
    a: 'Manufactured-home communities. We help landowners take raw or under-used acreage and turn it into a community of factory-built homes — supplied by Heritage Housing Solutions, operated by Jay Eben\'s team.',
  },
  {
    q: 'Who is Justin Stamper and what does he do here?',
    a: 'Justin is a cast member of A&E\'s Zombie House Flipping and an active real-estate investor in Central Florida (Blueprint Real Estate Group). At Heritage, his role is brand and marketing — putting projects in front of investors and residents through his platform.',
  },
  {
    q: 'Who is Jay Eben and what does he do here?',
    a: 'Jay is the operator. He\'s a licensed mobile-home dealer in FL and TX, an alum of LakeShore Management — one of the largest manufactured-housing community operators in the US — and runs his own community vehicle, Broadview Communities. If Justin is the face, Jay is the playbook.',
  },
  {
    q: 'What does Heritage Housing Solutions itself supply?',
    a: 'Heritage is a Florida-licensed dealer of manufactured, modular, and tiny homes (BBB A+, license DH11519051). Once a community is approved and built out, Heritage supplies the homes that fill the pads.',
  },
  {
    q: 'Do you buy my land or do I keep it?',
    a: 'Most of our partnerships keep the landowner in. The point of bringing Justin\'s reach and Jay\'s operating muscle is so you don\'t have to sell the land at retail-comp pricing — you participate in the community we build together. That said, an outright purchase is on the table if that\'s what you want.',
  },
  {
    q: 'Are there any fees or retainers to talk?',
    a: 'No. No broker commission, no consulting retainer, no upfront cost to have the conversation. We make money when the community is actually built and operating.',
  },
  {
    q: 'What if my land doesn\'t pencil as a community?',
    a: 'We\'ll tell you on the first call. Not every parcel is a fit — wrong location, wrong zoning posture, wrong shape. Jay\'s honest fit-check is the first step, and it\'s free.',
  },
  {
    q: 'Where do you focus geographically?',
    a: 'Heritage is Florida-based with active inventory in central and south Florida (Saint Cloud, Leesburg, LaBelle). Jay holds licenses in FL and TX. Out-of-state parcels are case-by-case — start the conversation and we\'ll be straight with you on whether we\'re the right team.',
  },
  {
    q: 'How does a project actually start?',
    a: 'You submit the land. Jay does an honest fit-check on a 15-minute call. If the parcel works as a community, we draft a partnership structure that fits what you want out of it, line up the build, and Justin starts driving visibility on day one of operations.',
  },
  {
    q: 'How do I check that this is real?',
    a: 'Jay: linkedin.com/in/jayeben (FL Mobile Home Dealer License, expires Sep 2027 / TX MHD License, expires Apr 2026). Justin: A&E cast page at aetv.com and his site justinstamper.com. Heritage Housing Solutions: BBB-accredited (A+), license DH11519051, Longwood, FL.',
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
