import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title:
    'Turn Your Land Into a Thriving Community — Land Partnerships for Investors | Heritage Housing Solutions',
  description:
    'Heritage Housing Solutions partners with investors and landowners to develop manufactured-home communities, RV parks, and large-scale residential projects. Led by community-building expert Jay Eben and A&E Zombie House Flipping star Justin Stamper.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
