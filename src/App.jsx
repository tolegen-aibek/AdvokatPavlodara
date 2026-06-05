import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Trust from './components/Trust'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div>
      <Nav />
      <Hero
        heroLine1="Ваш надёжный"
        ctaText="Связаться с юристом"
        showOrbs={true}
        showBadges={true}
        doParallax={true}
      />
      <Services />
      <Features />
      <Trust />
      <Testimonials />
      <FAQ />
      <CtaSection />
      <Footer />
      <a href="https://wa.me/77066060600" className="wa" target="_blank" rel="noopener" title="WhatsApp">💬</a>
    </div>
  )
}
