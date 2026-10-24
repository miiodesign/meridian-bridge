import { SectionHeading } from './Shared'
import { CountrySelect } from './CountrySelect'
import { PricingCard } from './PricingCard'
import type { CountryCode } from './design'

export function PricingSection({ country, onCountryChange }: { country: CountryCode; onCountryChange: (country: CountryCode) => void }) {
  return (
    <section id="pricing" className="mb-section mb-pricing">
      <SectionHeading title="What does a trip actually cost?" aside={<CountrySelect country={country} onChange={onCountryChange} label="I’m flying in from:" />}>
        Explore the costs of travelling for screening or adding a screening to a trip you have already planned. Your quote will depend on the provider, tests, and services you choose.
      </SectionHeading>
      <div className="mb-pricing-cards">
        <PricingCard scenario="travelling" country={country} />
        <PricingCard scenario="already-going" country={country} />
      </div>
    </section>
  )
}
