import { useId, useState } from 'react'
import { Button } from '../ui/Button'
import { Icon } from './Shared'
import { consultationUrl, countries, type CountryCode } from './design'

const feeInclusions = [
  'Personalised hospital and package recommendation (2–3 tailored options)',
  'Appointment coordination with the hospital’s international department',
  'Pre-trip preparation guide — VPN, Alipay, dietary prep, what to expect',
  'Emergency contact sheet',
  'Pre-trip check-in call (48 hours before departure)',
  'WhatsApp availability throughout your trip',
  'On-trip coordination if anything needs resolving',
  'Post-trip debrief call',
  'Results follow-up when your English report arrives',
]

export function PricingCard({ scenario, country }: { scenario: 'travelling' | 'already-going'; country: CountryCode }) {
  const [feeExpanded, setFeeExpanded] = useState(false)
  const home = countries.find(({ code }) => code === country) ?? countries[0]
  const panelId = useId()
  const headingId = `${panelId}-heading`
  const alreadyGoing = scenario === 'already-going'
  return (
    <article className={`mb-pricing-card${feeExpanded ? ' mb-pricing-card-expanded' : ''}`}
      id={alreadyGoing ? 'pricing-already-going' : undefined} data-scenario={scenario} aria-labelledby={headingId}
      onKeyDown={event => { if (event.key === 'Escape') setFeeExpanded(false) }}>
      <h3 id={headingId}>{alreadyGoing ? 'I’m already going to China' : 'I’m travelling to China specifically for the health screening'}</h3>
      {alreadyGoing && <p className="mb-pricing-subtitle">(add the screening to my trip)</p>}
      <dl>
        <div><dt>Health screening package</dt><dd>{home.screeningPackage}</dd></div>
      </dl>
      <div className="mb-fee">
        {!feeExpanded && <div className="mb-fee-price"><p>Meridian Bridge fee</p><strong>{home.fee}</strong></div>}
        <Button className="mb-fee-toggle" aria-expanded={feeExpanded} aria-controls={panelId}
          aria-label={`What does the ${home.fee} Meridian Bridge fee include? ${alreadyGoing ? 'Already going to China' : 'Travelling for screening'}`}
          onClick={() => setFeeExpanded(expanded => !expanded)}>
          <span className="mb-fee-toggle-icon" aria-hidden="true">
            <span className="mb-fee-icon-default"><Icon name="59113.svg" /></span>
            <span className="mb-fee-icon-hover"><Icon name="902e8.svg" /></span>
          </span>
          What does this fee include?
        </Button>
      </div>
      <div className="mb-fee-card-content">
        <section id={panelId} className="mb-facilitation-panel" hidden={!feeExpanded} aria-label={`${home.fee} facilitation fee inclusions`}>
          <div className="mb-facilitation-heading">
            <p>Meridian Bridge</p>
            <h4>{home.fee}</h4>
            <strong>Flat facilitation fee</strong>
          </div>
          <ul>{feeInclusions.map(inclusion => <li key={inclusion}><span aria-hidden="true">✓</span>{inclusion}</li>)}</ul>
        </section>
        {!feeExpanded && (
          <>
            {!alreadyGoing && <dl className="mb-travel-costs">
              <div><dt>Flights (From {home.flightsFrom})</dt><dd>{home.flights}</dd></div>
              <div><dt>Accommodation (2–3 nights)</dt><dd>{home.accommodation}</dd></div>
              <div><dt>Local transport & meals (2–3 days)</dt><dd>{home.localCosts}</dd></div>
            </dl>}
            {alreadyGoing ? (
              <div className="mb-total">
                <span>Screening + facilitation fee</span>
                <strong>{home.alreadyGoingTotal}</strong>
              </div>
            ) : (
              <a className="mb-total mb-total-link" href={consultationUrl} target="_blank" rel="noopener noreferrer">
                <span>Planning your total</span>
                <strong>Request a Personalized Quote<Icon name="ee954.svg" /></strong>
              </a>
            )}
          </>
        )}
      </div>
      <p className="mb-pricing-note">{alreadyGoing
        ? `Includes the illustrative screening package and ${home.fee} facilitation fee only. Existing travel costs and any extra tests or services are not included. Confirm your personalized quote before booking.`
        : `Amounts are illustrative, not a quote. All amounts are shown in ${home.currency}. Provider prices, travel costs, and availability may change.`}</p>
    </article>
  )
}
