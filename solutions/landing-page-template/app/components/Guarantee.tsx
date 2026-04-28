export function Guarantee() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200 bg-white">
          <span aria-hidden className="text-2xl">
            ★
          </span>
        </div>
        <h2 className="balance mt-6 text-2xl md:text-3xl font-semibold tracking-tight">
          [THIS IS A PLACEHOLDER FOR THE GUARANTEE HEADLINE — e.g. &quot;Our
          no-risk guarantee&quot;]
        </h2>
        <p className="balance mx-auto mt-4 max-w-xl text-neutral-700">
          [THIS IS A PLACEHOLDER FOR THE GUARANTEE COPY — state the specific
          promise in plain language. Examples: &quot;30-day refund, no
          questions asked,&quot; &quot;Cancel anytime,&quot; &quot;No credit
          card required,&quot; or a performance guarantee.]
        </p>
      </div>
    </section>
  );
}
