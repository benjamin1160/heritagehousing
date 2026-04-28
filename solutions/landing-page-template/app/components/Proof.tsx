import { CtaButton } from './CtaButton';

const testimonials = [
  {
    quote:
      '[THIS IS A PLACEHOLDER FOR A SPECIFIC TESTIMONIAL — include result, timeframe, and who they are, e.g. "Went from 4 to 27 qualified demos/month in 6 weeks."]',
    name: '[THIS IS A PLACEHOLDER FOR NAME]',
    role: '[THIS IS A PLACEHOLDER FOR ROLE & COMPANY]',
  },
  {
    quote:
      '[THIS IS A PLACEHOLDER FOR A SPECIFIC TESTIMONIAL — include result, timeframe, and who they are.]',
    name: '[THIS IS A PLACEHOLDER FOR NAME]',
    role: '[THIS IS A PLACEHOLDER FOR ROLE & COMPANY]',
  },
  {
    quote:
      '[THIS IS A PLACEHOLDER FOR A SPECIFIC TESTIMONIAL — include result, timeframe, and who they are.]',
    name: '[THIS IS A PLACEHOLDER FOR NAME]',
    role: '[THIS IS A PLACEHOLDER FOR ROLE & COMPANY]',
  },
];

const stats = [
  {
    value: '[THIS IS A PLACEHOLDER FOR A STAT — e.g. "2,400+"]',
    label: '[THIS IS A PLACEHOLDER FOR STAT LABEL — e.g. "customers served"]',
  },
  {
    value: '[THIS IS A PLACEHOLDER FOR A STAT — e.g. "4.9/5"]',
    label: '[THIS IS A PLACEHOLDER FOR STAT LABEL — e.g. "average rating"]',
  },
  {
    value: '[THIS IS A PLACEHOLDER FOR A STAT — e.g. "$42M+"]',
    label: '[THIS IS A PLACEHOLDER FOR STAT LABEL — e.g. "revenue generated"]',
  },
];

export function Proof() {
  return (
    <section id="proof" className="border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
            Proof
          </p>
          <h2 className="balance mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            [THIS IS A PLACEHOLDER FOR THE PROOF SECTION HEADLINE — e.g.
            &quot;Results from real customers&quot;]
          </h2>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-neutral-200 p-6"
            >
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-neutral-500">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-neutral-200 p-6 bg-white"
            >
              <blockquote className="text-neutral-800 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-neutral-200" />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-neutral-500">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* CTA after proof */}
        <div className="mt-14 flex justify-center">
          <CtaButton
            microcopy="[THIS IS A PLACEHOLDER FOR RISK-REVERSAL MICROCOPY]"
          >
            [THIS IS A PLACEHOLDER FOR THE PRIMARY CTA TEXT]
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
