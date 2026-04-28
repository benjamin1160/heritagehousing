import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Proof } from './components/Proof';
import { Guarantee } from './components/Guarantee';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function Page() {
  return (
    <div id="top">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Proof />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
