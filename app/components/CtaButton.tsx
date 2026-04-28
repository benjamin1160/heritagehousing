'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  microcopy?: string;
};

export function CtaButton({
  href = '#cta-form',
  children,
  variant = 'primary',
  microcopy,
}: Props) {
  const base =
    'group relative inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600 shimmer-hover';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-to-br from-green-500 to-green-700 text-white cta-glow'
      : 'bg-white text-blue-900 border border-blue-200 hover:bg-blue-50';

  return (
    <div className="flex flex-col items-center gap-3">
      <motion.div
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      >
        <Link href={href} className={`${base} ${styles}`}>
          <span className="relative z-10">{children}</span>
          <motion.span
            aria-hidden
            className="relative z-10 ml-2 inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            →
          </motion.span>
        </Link>
      </motion.div>
      {microcopy ? (
        <p className="text-xs text-neutral-500">{microcopy}</p>
      ) : null}
    </div>
  );
}
