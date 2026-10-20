import { useId, useState } from 'react'
import { Button } from '../ui/Button'
import { Icon, SectionHeading } from './Shared'
const feeInclusions = [
  'Provider and package research',
  'Booking coordination',
  'Pre-trip preparation',
  'Payment and practical guidance',
  'In-trip logistical support',
  'Results and follow-up coordination',
]

export function PricingSection() {
  const [feeExpanded, setFeeExpanded] = useState(false)
  const panelId = useId()
  return (
    <section id="pricing" className="mb-section mb-pricing">
      <SectionHeading eyebrow="Clear costs, clear choices" title="What does a trip actually cost?">
        Explore an illustrative cost breakdown for a screening trip. Your quote will depend on the provider, tests, travel dates, and services you choose.
      </SectionHeading>
      <article className={`mb-pricing-card${feeExpanded ? ' mb-pricing-card-expanded' : ''}`}>
        <h3>I’m travelling to China specifically for the<br />health screening</h3>
        <dl>
          <div><dt>Health screening package</dt><dd>$300 - $1,000 USD</dd></div>
        </dl>
        <div className="mb-fee">
          {!feeExpanded && <div className="mb-fee-price"><p>Meridian Bridge fee</p><strong>$400 USD</strong></div>}
          <Button className="mb-fee-toggle" aria-expanded={feeExpanded} aria-controls={panelId}
            onClick={() => setFeeExpanded(expanded => !expanded)}
            onKeyDown={event => {
              if (event.key === 'Escape') setFeeExpanded(false)
            }}>
            <span className="mb-fee-toggle-icon" aria-hidden="true">
              <span className="mb-fee-icon-default"><Icon name="59113.svg" /></span>
              <span className="mb-fee-icon-hover"><Icon name="902e8.svg" /></span>
            </span>
            What does this fee include?
          </Button>
        </div>
        <div className="mb-fee-card-content" onKeyDown={event => {
          if (event.key === 'Escape') setFeeExpanded(false)
        }}>
          <section id={panelId} className="mb-facilitation-panel" hidden={!feeExpanded} aria-label="Meridian Bridge facilitation fee">
            <div className="mb-facilitation-heading">
              <p>Meridian Bridge</p>
              <h4>$400 USD</h4>
              <strong>Flat facilitation fee</strong>
            </div>
            <ul>{feeInclusions.map(inclusion => <li key={inclusion}><span aria-hidden="true">✓</span>{inclusion}</li>)}</ul>
          </section>
          {!feeExpanded && (
            <>
              <dl className="mb-travel-costs">
                <div><dt>Flights (from Canada, est.)</dt><dd>~$800 – $1,200 CAD</dd></div>
                <div><dt>Accommodation (2–3 nights)</dt><dd>~$300 – $600 USD</dd></div>
                <div><dt>Local transport & meals</dt><dd>~$100 – $300 USD</dd></div>
              </dl>
              <div className="mb-total"><span>Planning your total</span><strong>Request a personalized quote</strong></div>
            </>
          )}
        </div>
        <p className="mb-pricing-note">Amounts are illustrative, not a quote. Flights are shown in CAD; other items are in USD. Convert all costs to one currency using current exchange rates before adding them. Provider prices, travel costs, and availability may change.</p>
      </article>
    </section>
  )
}
