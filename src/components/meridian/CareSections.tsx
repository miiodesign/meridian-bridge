import type { MouseEvent } from 'react'
import { ActionLink, FeatureGrid, Icon, SectionHeading } from './Shared'
import { CountrySelect } from './CountrySelect'
import { asset, comparisons, countries, expectations, processSteps, providers, screeningTests, type CountryCode } from './design'
import { PackageNote, ScreeningPackages } from './ScreeningPackages'
import { MobileCardRail } from './MobileCardRail'

function ChinaCell({ wait, cost }: { wait: readonly string[]; cost: string }) {
  return (
    <div className="mb-country">
      <strong>In China</strong>
      <p className="mb-country-label"><Icon name="6b9ed.svg" />Wait time</p>
      <p>{wait.map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</p>
      <hr />
      <p className="mb-country-label"><Icon name="3436b.svg" />Cost</p>
      <p aria-live="polite">{cost}</p>
    </div>
  )
}

function HomeCell({ home, options }: { home: string; options: readonly string[] }) {
  return (
    <div className="mb-country mb-country-home" aria-live="polite">
      <strong>In {home}</strong>
      {options.map((option, index) => (
        <div key={option}>
          {index > 0 && <p className="mb-country-or">OR</p>}
          <p>{option}</p>
        </div>
      ))}
    </div>
  )
}

type CountryProps = { country: CountryCode; onCountryChange: (country: CountryCode) => void }

export function WhyChina({ country, onCountryChange }: CountryProps) {
  const homeName = countries.find(({ code }) => code === country)?.name ?? 'Canada'
  return (
    <section id="why-china" className="mb-section mb-why">
      <SectionHeading title="China is the new healthcare destination of the world." aside={<CountrySelect country={country} onChange={onCountryChange} label="Compare with:" />}>
        Shorter wait times, more accessible pricing, and access to comprehensive{'\u00a0'}screening.
      </SectionHeading>
      <MobileCardRail name="comparisons" className="mb-comparisons" label="Treatment comparisons">
        {comparisons.map((item, index) => (
          <article key={item.title}>
            <h3><Icon name={item.icon} />{item.title}</h3>
            <div className={`mb-comparison-body mb-comparison-${index}`}>
              <div className="mb-comparison-image"><img src={asset(item.image)} alt={item.imageAlt} width={item.imageWidth} height={item.imageHeight} loading="lazy" decoding="async" /></div>
              <ChinaCell wait={item.china.wait} cost={item.china.cost[country]} />
              <HomeCell home={homeName} options={item.home[country]} />
            </div>
          </article>
        ))}
      </MobileCardRail>
      <p className="mb-footnote">* Prices and wait times are approximate and may vary by provider and location. China pricing reflects private clinic rates in major cities.</p>
    </section>
  )
}

function showAlreadyGoingPricing(event: MouseEvent<HTMLAnchorElement>) {
  const card = document.getElementById('pricing-already-going')
  if (!card) return
  event.preventDefault()
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  card.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'center' })
  history.replaceState(null, '', '#pricing')
  if (reducedMotion) return
  let done = false
  function pulse() {
    if (done || !card) return
    done = true
    window.removeEventListener('scrollend', pulse)
    card.animate(
      [{ transform: 'scale(1)' }, { transform: 'scale(1.035)', offset: .4 }, { transform: 'scale(1)' }],
      { duration: 900, easing: 'cubic-bezier(.22, 1, .36, 1)' },
    )
  }
  window.addEventListener('scrollend', pulse, { once: true })
  window.setTimeout(pulse, 1100)
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mb-section mb-process">
      <SectionHeading title="How it works">A clear, straightforward process from first question to follow-up.</SectionHeading>
      <div className="mb-steps">
        {processSteps.map(([number, title, text]) => (
          <article key={number}>
            <span className="mb-step-number">{number}</span>
            <div className="mb-step-copy"><h3>{title}</h3><p>{text}</p></div>
          </article>
        ))}
      </div>
      <div className="mb-travel">
        <div>
          <h2>Already going to China?</h2>
          <p className="mb-travel-subtitle">Make the screening part of your trip</p>
          <p>Many screening packages can be completed in a <strong>single morning,</strong> making it easy to include a full health check during a family visit, business trip or vacation.</p>
          <ActionLink href="#pricing" variant="mb-action-sand" icon="efa88.svg" onClick={showAlreadyGoingPricing}>Add a screening to your trip</ActionLink>
        </div>
        <img src={asset('yong-qing-fang-aerial.webp')} alt="Aerial view of Yong Qing Fang's historic rooftops and canal in Guangzhou" width="1600" height="1067" loading="lazy" decoding="async" />
      </div>
    </section>
  )
}

export function HealthScreening() {
  return (
    <section id="screening" className="mb-section mb-screening">
      <SectionHeading title="A clear picture of your health in one visit.">
        Comprehensive health screenings bring multiple assessments, blood tests, and diagnostic imaging together into a single experience. You can establish a broader view of your health and take a proactive approach to monitoring it.
      </SectionHeading>
      <div className="mb-screening-layout">
        <div className="mb-screening-aside">
          <article className="mb-screening-card">
            <h3>What it includes</h3>
            <p>Tests vary by provider and package, but can include (and are not limited to):</p>
            <ul>{screeningTests.map(([icon, text]) => <li key={text}><Icon name={icon} /><span>{text}</span></li>)}</ul>
            <p className="mb-screening-addons">Specific tests can be requested as “add-ons” at any time.</p>
          </article>
          <PackageNote />
        </div>
        <ScreeningPackages />
      </div>
    </section>
  )
}

export function ProviderNetwork() {
  return (
    <section id="providers" className="mb-section mb-providers">
      <SectionHeading title="Our provider network">
        A thoughtfully curated network of established hospitals and healthcare providers in Guangdong, China.
      </SectionHeading>
      <div className="mb-provider-cards">
        {providers.map(([image, title, text]) => (
          <article key={title}><img src={asset(image)} alt={title} loading="lazy" /><div><h3>{title}</h3><p>{text}</p></div></article>
        ))}
      </div>
      <div className="mb-expectations"><h3>What you can expect</h3><FeatureGrid items={expectations} /></div>
    </section>
  )
}
