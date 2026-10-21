import { SectionHeading } from './Shared'
import { PricingCard } from './PricingCard'

export function PricingSection() {
  return (
    <section id="pricing" className="mb-section mb-pricing">
      <SectionHeading eyebrow="Clear costs, clear choices" title="What does a trip actually cost?">
        Explore the costs of travelling for screening or adding a screening to a trip you have already planned. Your quote will depend on the provider, tests, and services you choose.
      </SectionHeading>
      <div className="mb-pricing-cards">
        <PricingCard scenario="travelling" />
        <PricingCard scenario="already-going" />
      </div>
    </section>
  )
}
