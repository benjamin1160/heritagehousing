import { CtaButton } from './CtaButton';

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200">
      <div className="mx-auto max-w-5xl px-6 pt-12 pb-20 md:pt-20 md:pb-28 text-center">
        {/* Ideal avatar callout */}
        <p className="mb-5 inline-block rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium tracking-wide text-neutral-700 uppercase">
          [THIS IS A PLACEHOLDER FOR THE IDEAL CUSTOMER AVATAR — e.g. &quot;For
          B2B founders doing $1M–$10M&quot;]
        </p>

        {/* Headline: specific, benefit-driven, number/timeframe */}
        <h1 className="balance text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
          [THIS IS A PLACEHOLDER FOR THE HEADLINE — dream outcome with a number
          and timeframe, e.g. &quot;Book 30 Qualified Sales Calls in the Next
          60 Days&quot;]
        </h1>

        {/* Subheadline: who it's for, how it works, why different */}
        <p className="balance mx-auto mt-6 max-w-2xl text-lg md:text-xl text-neutral-600">
          [THIS IS A PLACEHOLDER FOR THE SUBHEADLINE — 1–2 sentences clarifying
          who this is for, how it works, and the unique mechanism that makes it
          different.]
        </p>

        {/* Primary CTA above the fold */}
        <div className="mt-10 flex flex-col items-center">
          <CtaButton
            microcopy="[THIS IS A PLACEHOLDER FOR RISK-REVERSAL MICROCOPY — e.g. &quot;No credit card required. 2-minute setup.&quot;]"
          >
            [THIS IS A PLACEHOLDER FOR THE PRIMARY CTA TEXT — e.g. &quot;Book
            Your Demo&quot;]
          </CtaButton>
        </div>

        {/* Hero visual — replace with <Image /> of the "after" state */}
        <div className="mt-14 mx-auto aspect-[16/9] max-w-4xl rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-100 to-neutral-50 p-8 flex items-center justify-center">
          <p className="text-center text-sm text-neutral-500">
            [THIS IS A PLACEHOLDER FOR THE HERO IMAGE OR VIDEO — a visual of
            the &quot;after&quot; state / dream outcome. Replace this block
            with &lt;Image /&gt; or &lt;video /&gt;.]
          </p>
        </div>

        {/* Credibility line */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-sm font-medium text-neutral-700">
            [THIS IS A PLACEHOLDER FOR THE CREDIBILITY LINE — e.g. &quot;Trusted
            by 2,400+ teams. 4.9/5 average rating.&quot;]
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 opacity-60">
            {[1, 2, 3, 4, 5].map((n) => (
              <div
                key={n}
                className="h-7 w-24 rounded bg-neutral-200 flex items-center justify-center text-[10px] text-neutral-500"
              >
                [LOGO {n}]
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
