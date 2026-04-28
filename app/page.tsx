import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Problem } from './components/Problem'
import { Solution } from './components/Solution'
import { Situations } from './components/Situations'
import { Proof } from './components/Proof'
import { PurchasedHomes } from './components/PurchasedHomes'
import { Founder } from './components/Founder'
import { Guarantee } from './components/Guarantee'
import { Faq } from './components/Faq'
import { FinalCta } from './components/FinalCta'
import { Footer } from './components/Footer'

export default function Page() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Problem />
        <Solution />
        <Situations />
        <Proof />
        <PurchasedHomes />
        <Founder />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
