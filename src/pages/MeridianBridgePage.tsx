import { useRef } from 'react'
import { SiteHeader, Hero, PatientContext } from '../components/meridian/HeaderHero'
import { WhyChina, HowItWorks, HealthScreening, ProviderNetwork } from '../components/meridian/CareSections'
import { PricingSection } from '../components/meridian/PricingSection'
import { AboutAndQuestions, SiteFooter } from '../components/meridian/AboutContact'
import { useScrollReveal } from '../components/meridian/useScrollReveal'
import './MeridianBridge.css'
import './MeridianEditorial.css'

export function MeridianBridgePage() {
  const pageRef = useRef<HTMLDivElement>(null)
  useScrollReveal(pageRef)
  return (
    <div className="meridian" ref={pageRef}>
      <a className="mb-skip-link" href="#meridian-main">Skip to content</a>
      <SiteHeader />
      <main id="meridian-main">
        <Hero />
        <PatientContext />
        <WhyChina />
        <HowItWorks />
        <HealthScreening />
        <PricingSection />
        <ProviderNetwork />
        <AboutAndQuestions />
      </main>
      <SiteFooter />
    </div>
  )
}
