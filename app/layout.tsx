import './globals.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title:
    'Turn Your Land Into a Manufactured-Home Community | Heritage Housing Solutions',
  description:
    'Got land? Heritage Housing Solutions partners with landowners to build out and operate manufactured-home communities. Brought to you by A&E Zombie House Flipping star Justin Stamper and community operator Jay Eben.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
