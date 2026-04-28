const benefits = [
  '[THIS IS A PLACEHOLDER FOR BENEFIT 1 — specific life/business improvement tied to outcome]',
  '[THIS IS A PLACEHOLDER FOR BENEFIT 2 — specific life/business improvement tied to outcome]',
  '[THIS IS A PLACEHOLDER FOR BENEFIT 3 — specific life/business improvement tied to outcome]',
  '[THIS IS A PLACEHOLDER FOR BENEFIT 4 — specific life/business improvement tied to outcome]',
  '[THIS IS A PLACEHOLDER FOR BENEFIT 5 — specific life/business improvement tied to outcome]',
];

const steps = [
  {
    n: '01',
    title: '[THIS IS A PLACEHOLDER FOR STEP 1 TITLE]',
    body: '[THIS IS A PLACEHOLDER FOR STEP 1 DESCRIPTION — one short sentence]',
  },
  {
    n: '02',
    title: '[THIS IS A PLACEHOLDER FOR STEP 2 TITLE]',
    body: '[THIS IS A PLACEHOLDER FOR STEP 2 DESCRIPTION — one short sentence]',
  },
  {
    n: '03',
    title: '[THIS IS A PLACEHOLDER FOR STEP 3 TITLE]',
    body: '[THIS IS A PLACEHOLDER FOR STEP 3 DESCRIPTION — one short sentence]',
  },
];

export function Solution() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
            Here&apos;s what you get
          </p>
          <h2 className="balance mt-3 text-3xl md:text-4xl font-semibold tracking-tight">
            [THIS IS A PLACEHOLDER FOR THE SOLUTION HEADLINE — plain-language
            summary of the offer]
          </h2>
          <p className="mt-5 text-lg text-neutral-700">
            [THIS IS A PLACEHOLDER FOR THE OFFER DESCRIPTION — 1–2 sentences
            explaining what they get in plain language.]
          </p>
        </div>

        {/* Benefit bullets */}
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-5"
            >
              <span
                aria-hidden
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-xs text-white"
              >
                ✓
              </span>
              <span className="text-neutral-800">{b}</span>
            </li>
          ))}
        </ul>

        {/* How it works — 3 steps */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
            How it works
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div className="text-sm font-mono text-neutral-400">{s.n}</div>
                <h4 className="mt-2 text-lg font-semibold">{s.title}</h4>
                <p className="mt-2 text-neutral-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
