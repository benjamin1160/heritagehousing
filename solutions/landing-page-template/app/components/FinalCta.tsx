import { CtaButton } from './CtaButton';

export function FinalCta() {
  return (
    <section id="cta-form" className="bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <h2 className="balance text-3xl md:text-5xl font-semibold tracking-tight">
          [THIS IS A PLACEHOLDER FOR THE FINAL-CTA HEADLINE — restate the dream
          outcome, e.g. &quot;Ready to book 30 qualified calls in 60
          days?&quot;]
        </h2>
        <p className="balance mx-auto mt-5 max-w-xl text-lg text-neutral-300">
          [THIS IS A PLACEHOLDER FOR THE FINAL-CTA SUBCOPY — 1 sentence that
          reinforces the next step and reduces fear.]
        </p>

        {/* Lean form — essential fields only */}
        <form
          className="mx-auto mt-10 flex w-full max-w-md flex-col gap-3"
          // Replace with your form handler (Vercel Form, Resend, HubSpot, etc.)
          action="[THIS IS A PLACEHOLDER FOR THE FORM ACTION URL]"
          method="post"
        >
          <label htmlFor="email" className="sr-only">
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="w-full rounded-full border border-neutral-700 bg-neutral-900 px-5 py-3.5 text-base text-white placeholder:text-neutral-500 focus:border-white focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-white px-7 py-3.5 text-base font-medium text-black hover:bg-neutral-200 transition-colors"
          >
            [THIS IS A PLACEHOLDER FOR THE PRIMARY CTA TEXT]
          </button>
          <p className="text-xs text-neutral-400">
            [THIS IS A PLACEHOLDER FOR THE RISK-REVERSAL MICROCOPY — e.g.
            &quot;No credit card required. Cancel anytime.&quot;]
          </p>
        </form>

        {/* Optional urgency/scarcity — only if truthful */}
        <p className="mt-8 text-sm text-neutral-400">
          [THIS IS A PLACEHOLDER FOR TRUTHFUL URGENCY/SCARCITY — e.g.
          &quot;Only 12 onboarding slots left this month.&quot; Remove if not
          truthful.]
        </p>

        <div className="mt-10 flex justify-center">
          <CtaButton href="#top" variant="secondary">
            [THIS IS A PLACEHOLDER FOR THE PRIMARY CTA TEXT]
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
