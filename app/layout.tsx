import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title:
    'Manufactured Housing for Real-Estate Investors | Heritage Housing Solutions',
  description:
    'Heritage Housing Solutions walks real-estate investors into manufactured-home communities. Built for small park owners scaling up, fix-and-flip investors graduating to monthly cash flow, and affordable-housing authorities funding the gap. Brand by Justin Stamper (A&E Zombie House Flipping). Operations by Jay Eben.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
