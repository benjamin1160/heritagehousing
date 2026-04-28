import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title:
    'Sell Your Mobile Home Fast for Cash — Free Offer in 24 Hours | Garcia Mobile Home Buyers',
  description:
    'We buy mobile and manufactured homes for cash — any age, any park, any condition. No repairs, no showings, no agent fees. Run by Jose Garcia, founder of Garcia Mobile Home University and Amazon best-selling author.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
