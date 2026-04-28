import Link from 'next/link';

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  microcopy?: string;
};

// The page's single primary conversion goal is represented by this button.
// Use the SAME label for every primary CTA on the page.
export function CtaButton({
  href = '#cta-form',
  children,
  variant = 'primary',
  microcopy,
}: Props) {
  const base =
    'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-medium transition-transform duration-150 will-change-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black';
  const styles =
    variant === 'primary'
      ? 'bg-black text-white hover:bg-neutral-800'
      : 'bg-white text-black border border-neutral-300 hover:border-neutral-900';

  return (
    <div className="flex flex-col items-center gap-2">
      <Link href={href} className={`${base} ${styles}`}>
        {children}
        <span aria-hidden className="ml-2">
          →
        </span>
      </Link>
      {microcopy ? (
        <p className="text-xs text-neutral-500">{microcopy}</p>
      ) : null}
    </div>
  );
}
