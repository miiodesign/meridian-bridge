import { SiteHeader, Hero, PatientContext } from '../components/meridian/HeaderHero'
import { WhyChina, HowItWorks, HealthScreening, ProviderNetwork } from '../components/meridian/CareSections'
import { PricingSection } from '../components/meridian/PricingSection'
import { AboutAndQuestions, ContactSection, SiteFooter } from '../components/meridian/AboutContact'
import './MeridianBridge.css'

export function MeridianBridgePage() {
  return (
    <div className="meridian">
      <a className="mb-skip-link" href="#meridian-main">Skip to content</a>
      <SiteHeader />
      <main id="meridian-main">
        <Hero />
        <PatientContext />
        <WhyChina />
        <HowItWorks />
        <PricingSection />
        <HealthScreening />
        <ProviderNetwork />
        <AboutAndQuestions />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
