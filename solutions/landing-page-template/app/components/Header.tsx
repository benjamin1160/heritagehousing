import Link from 'next/link';

// Intentionally minimal — no navigation links that pull visitors off-page.
// The only action is the primary CTA.
export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="font-semibold tracking-tight">
          [THIS IS A PLACEHOLDER FOR THE BRAND / COMPANY NAME]
        </Link>
        <Link
          href="#cta-form"
          className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
        >
          [THIS IS A PLACEHOLDER FOR THE PRIMARY CTA TEXT]
        </Link>
      </div>
    </header>
  );
}
