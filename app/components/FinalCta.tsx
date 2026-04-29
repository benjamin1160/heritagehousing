'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.22, 1, 0.36, 1] as const

const viewport = { once: true, amount: 0.3 }

export function FinalCta() {
  return (
    <section
      id="cta-form"
      className="relative overflow-hidden bg-[#050b1f] text-white"
    >
      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="blob blob-1"
          style={{
            top: '-10%',
            left: '-10%',
            width: '600px',
            height: '600px',
            background:
              'radial-gradient(circle at 50% 50%, #1d4ed8, transparent 65%)',
            opacity: 0.5,
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="blob blob-2"
          style={{
            bottom: '-15%',
            right: '-10%',
            width: '620px',
            height: '620px',
            background:
              'radial-gradient(circle at 50% 50%, #16a34a, transparent 65%)',
            opacity: 0.4,
            mixBlendMode: 'screen',
          }}
        />
        <div
          className="blob blob-3"
          style={{
            top: '30%',
            left: '40%',
            width: '420px',
            height: '420px',
            background:
              'radial-gradient(circle at 50% 50%, #7c3aed, transparent 65%)',
            opacity: 0.35,
            mixBlendMode: 'screen',
          }}
        />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-blue-100 backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-green-400" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          Reviewing parcels now
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.08 }}
          className="display balance mt-6 text-5xl md:text-7xl font-semibold"
        >
          Got land? Let&apos;s see if it pencils.
          <br className="hidden md:block" />
          <span className="serif-italic text-green-300">
            15 minutes with Jay.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.18 }}
          className="balance mx-auto mt-6 max-w-xl text-lg text-blue-100/90 leading-relaxed"
        >
          Tell us about your land — county, acreage, current zoning. Jay will
          do an honest fit-check on a 15-minute call and tell you straight
          whether a manufactured-home community works there. Or call{' '}
          <a
            href="tel:+14045550123"
            className="font-semibold text-white underline decoration-green-400/60 underline-offset-4 hover:decoration-green-300"
          >
            (404) 555-0123
          </a>
          .
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.26 }}
          className="mx-auto mt-12 w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xl shadow-2xl shadow-blue-950/50"
          action="/api/lead"
          method="post"
        >
          <div className="space-y-3">
            <div>
              <label htmlFor="address" className="sr-only">
                Land address, parcel ID, or county / acreage
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                placeholder="Parcel address, county, or acreage"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white placeholder:text-blue-200/60 transition-colors focus:border-green-400 focus:bg-white/10 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full name"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white placeholder:text-blue-200/60 transition-colors focus:border-green-400 focus:bg-white/10 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Phone number"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white placeholder:text-blue-200/60 transition-colors focus:border-green-400 focus:bg-white/10 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white placeholder:text-blue-200/60 transition-colors focus:border-green-400 focus:bg-white/10 focus:outline-none"
              />
            </div>
          </div>

          <label className="mt-4 flex items-start gap-2 text-xs text-blue-200/80">
            <input
              type="checkbox"
              name="sms_consent"
              required
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 bg-white/5"
            />
            <span className="leading-relaxed">
              I agree to receive texts and calls from Heritage Housing
              Solutions about my parcel. Reply STOP to opt out. Msg &amp; data
              rates may apply.
            </span>
          </label>

          <motion.button
            type="submit"
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            className="shimmer-hover cta-glow relative mt-5 w-full overflow-hidden rounded-full bg-gradient-to-br from-green-500 to-green-700 px-7 py-4 text-base font-semibold text-white"
          >
            <span className="relative z-10">Submit My Parcel →</span>
          </motion.button>

          <p className="mt-3 text-center text-xs text-blue-200/70">
            Free feasibility review. No broker, no fee.
          </p>
        </motion.form>
      </div>
    </section>
  )
}
