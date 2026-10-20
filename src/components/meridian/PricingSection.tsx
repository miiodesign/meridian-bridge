import { Icon, SectionHeading } from './Shared'

export function PricingSection() {
  return (
    <section id="pricing" className="mb-section mb-pricing">
      <SectionHeading eyebrow="Clear costs, clear choices" title="What does a trip actually cost?">
        Use the estimator tool to get a realistic total, whether you’re booking a new trip or already going to China.
      </SectionHeading>
      <article className="mb-pricing-card">
        <h3>I’m travelling to China specifically for the<br />health screening</h3>
        <dl>
          <div><dt>Health screening package</dt><dd>$300 - $1,000 USD</dd></div>
          <div className="mb-fee">
            <dt>Meridian Bridge fee</dt><dd>$400 USD</dd>
            <details><summary><Icon name="59113.svg" />What does this fee include?</summary>
              <p>See the process above for coordination support. Confirm the exact service scope during your free consultation.</p>
            </details>
          </div>
          <div><dt>Flights (from Canada, est.)</dt><dd>~$800 – $1,200 CAD</dd></div>
          <div><dt>Accommodation (2–3 nights)</dt><dd>~$300 – $600 USD</dd></div>
          <div><dt>Local transport & meals</dt><dd>~$100 – $300 USD</dd></div>
        </dl>
        <div className="mb-total"><span>Estimated total</span><strong>~$2,220 – $3,120 USD</strong></div>
      </article>
    </section>
  )
}
