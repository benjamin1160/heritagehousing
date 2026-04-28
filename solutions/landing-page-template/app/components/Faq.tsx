const faqs = [
  {
    q: '[THIS IS A PLACEHOLDER FOR FAQ 1 — price question, e.g. "How much does it cost?"]',
    a: '[THIS IS A PLACEHOLDER FOR FAQ 1 ANSWER — be specific about pricing and what is included.]',
  },
  {
    q: '[THIS IS A PLACEHOLDER FOR FAQ 2 — time commitment, e.g. "How much time does this take?"]',
    a: '[THIS IS A PLACEHOLDER FOR FAQ 2 ANSWER — explicit hours/week, onboarding time, etc.]',
  },
  {
    q: '[THIS IS A PLACEHOLDER FOR FAQ 3 — "Will this work for me?" fit question]',
    a: '[THIS IS A PLACEHOLDER FOR FAQ 3 ANSWER — describe who this is a fit for and who it is not.]',
  },
  {
    q: '[THIS IS A PLACEHOLDER FOR FAQ 4 — difficulty / required skill]',
    a: '[THIS IS A PLACEHOLDER FOR FAQ 4 ANSWER — reassure them this is doable and what support is provided.]',
  },
  {
    q: '[THIS IS A PLACEHOLDER FOR FAQ 5 — what happens after I click the CTA?]',
    a: '[THIS IS A PLACEHOLDER FOR FAQ 5 ANSWER — walk through the exact next steps so there are no surprises.]',
  },
  {
    q: '[THIS IS A PLACEHOLDER FOR FAQ 6 — common skepticism / objection]',
    a: '[THIS IS A PLACEHOLDER FOR FAQ 6 ANSWER — address the specific objection head-on with proof.]',
  },
  {
    q: '[THIS IS A PLACEHOLDER FOR FAQ 7 — guarantee / refund question]',
    a: '[THIS IS A PLACEHOLDER FOR FAQ 7 ANSWER — restate the risk reversal in plain terms.]',
  },
];

export function Faq() {
  return (
    <section className="border-b border-neutral-200">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
          Frequently asked questions
        </h2>
        <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((f, i) => (
            <details key={i} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <span className="text-base md:text-lg font-medium">{f.q}</span>
                <span
                  aria-hidden
                  className="mt-1 shrink-0 text-neutral-400 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 pr-8 text-neutral-700 leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
