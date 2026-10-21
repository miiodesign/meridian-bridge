import { ActionLink, FeatureGrid, Icon, SectionHeading } from './Shared'
import { asset, comparisons, expectations, processSteps, providers, screeningTests } from './design'
import { ScreeningPackages } from './ScreeningPackages'

function CountryCell({ canada, wait, cost }: { canada?: boolean; wait: string; cost: string }) {
  return (
    <div className={`mb-country${canada ? ' mb-country-canada' : ''}`}>
      <strong>{canada ? 'In Canada' : 'In China'}</strong>
      <p className="mb-country-label"><Icon name={canada ? 'e69fe.svg' : '6b9ed.svg'} />Wait time</p>
      <p>{wait}</p>
      <hr />
      <p className="mb-country-label"><Icon name={canada ? '11c05.svg' : '3436b.svg'} />Cost</p>
      <p>{cost}</p>
    </div>
  )
}

export function WhyChina() {
  return (
    <section id="why-china" className="mb-section mb-why">
      <SectionHeading eyebrow="Why China" title="Why China is becoming the destination?">
        Shorter wait times, more accessible pricing, and access to comprehensive screening.
      </SectionHeading>
      <div className="mb-comparisons">
        {comparisons.map((item, index) => (
          <article key={item.title}>
            <h3><Icon name={item.icon} />{item.title}</h3>
            <div className={`mb-comparison-body mb-comparison-${index}`}>
              <div className="mb-comparison-image"><img src={asset(item.image)} alt={item.title.replace(' *', '')} loading="lazy" /></div>
              <CountryCell wait="Typically 1 – 7 days" cost="From ~$100 USD (¥700+)" />
              <CountryCell canada wait={item.wait} cost={item.cost} />
            </div>
          </article>
        ))}
      </div>
      <p className="mb-footnote">* Prices and wait times are approximate and may vary by provider and location. China pricing reflects private clinic rates in major cities.</p>
    </section>
  )
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mb-section mb-process">
      <SectionHeading eyebrow="Your next steps" title="How it works">A clear, straightforward process from first question to follow-up.</SectionHeading>
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
          <ActionLink variant="mb-action-sand" icon="efa88.svg">Add a screening to your trip</ActionLink>
        </div>
        <img src={asset('145ea.png')} alt="Traditional Chinese pavilion and gardens beside a lake" loading="lazy" />
      </div>
    </section>
  )
}

export function HealthScreening() {
  return (
    <section id="screening" className="mb-section mb-screening">
      <SectionHeading eyebrow="Understand your options" title="What is a complete health check?" />
      <div className="mb-screening-layout">
        <article className="mb-screening-card">
          <h3>What can it include?</h3>
          <p>Tests vary by provider and package, but can include (and are not limited to):</p>
          <ul>{screeningTests.map(([icon, text]) => <li key={text}><Icon name={icon} /><span>{text}</span></li>)}</ul>
        </article>
        <ScreeningPackages />
      </div>
    </section>
  )
}

export function ProviderNetwork() {
  return (
    <section id="providers" className="mb-section mb-providers">
      <SectionHeading eyebrow="Carefully selected care" title="Our provider network">
        A thoughtfully curated network of established hospitals and healthcare providers in Guangdong.
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
