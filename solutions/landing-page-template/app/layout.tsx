import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  // [THIS IS A PLACEHOLDER FOR THE PAGE TITLE — use the hero headline or brand promise]
  title: '[THIS IS A PLACEHOLDER FOR THE PAGE TITLE]',
  // [THIS IS A PLACEHOLDER FOR THE META DESCRIPTION — 1 sentence mirroring the subheadline]
  description: '[THIS IS A PLACEHOLDER FOR THE META DESCRIPTION]',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
