import { useId, useRef, type ReactNode } from 'react'
import { Button } from '../ui/Button'
import { ActionLink, Brand, FeatureGrid, Icon, SectionHeading } from './Shared'
import { asset, capabilities, questions } from './design'

type ContentDialogProps = { title: string; label: string; children: ReactNode; icon?: string }

function ContentDialog({ title, label, children, icon }: ContentDialogProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()
  return (
    <>
      <Button className="mb-outline-button" onClick={() => ref.current?.showModal()}>{label}{icon && <Icon name={icon} />}</Button>
      <dialog className="mb-dialog" ref={ref} aria-labelledby={titleId}>
        <h2 id={titleId}>{title}</h2>
        <div>{children}</div>
        <Button className="mb-outline-button" onClick={() => ref.current?.close()}>Close</Button>
      </dialog>
    </>
  )
}

export function AboutAndQuestions() {
  return (
    <section className="mb-section mb-about-questions">
      <div id="faq">
        <SectionHeading eyebrow="We can provide clarity" title="Frequently asked questions" />
        <div className="mb-faq">
          {questions.map(question => (
            <details key={question}><summary>{question}<Icon name="ef6bf.svg" /></summary>
              <p>Ask us about this during your free consultation. Detailed answers will be added once approved by Meridian Bridge.</p>
            </details>
          ))}
        </div>
      </div>
      <div id="about" className="mb-about">
        <SectionHeading eyebrow="Based in Canada. Connected to China." title="About Meridian Bridge" />
        <p>Meridian Bridge was founded to help English-speaking clients access high-quality health screening and diagnostic testing in China with more clarity, confidence and support. Based in Canada, we understand both cultures and work closely with trusted providers in Guangdong.</p>
        <ContentDialog title="Gordon, the Founder" label="More on Gordon the Founder" icon="e1e40.svg">
          <p>The founder’s full biography has not been supplied yet. Book a free consultation to learn more about Meridian Bridge.</p>
          <ActionLink>Book a Free Consultation</ActionLink>
        </ContentDialog>
        <img src={asset('e15cc.png')} alt="A calm, light-filled consultation room" loading="lazy" />
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="inquiry" className="mb-contact">
      <div>
        <h2>Ready to explore your options?</h2>
        <p>Book a free 15-minute consultation, or send us what you’re looking for.</p>
        <div className="mb-actions">
          <ActionLink variant="mb-action-inverse">Book a Free Consultation</ActionLink>
          <ContentDialog title="Send an Inquiry" label="Send an Inquiry" icon="ee954.svg">
            <p>An inquiry destination has not been configured yet. For now, use the consultation booking link to contact Meridian Bridge.</p>
            <ActionLink>Book a Free Consultation</ActionLink>
          </ContentDialog>
        </div>
      </div>
      <div className="mb-contact-pattern" aria-hidden="true"><img src={asset('5878a.png')} alt="" loading="lazy" /></div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="mb-footer">
      <div className="mb-footer-main">
        <Brand /><span>www.meridianbridge.ca</span>
        <div className="mb-legal">
          <ContentDialog title="Privacy" label="Privacy"><p>Privacy policy content is pending. No inquiry form or health-information collection is enabled on this page.</p></ContentDialog>
          <span>·</span>
          <ContentDialog title="Terms" label="Terms"><p>Terms of service are pending. Confirm medical suitability, provider services and costs directly before booking.</p></ContentDialog>
          <span>·</span><a href="#inquiry">Contact</a>
        </div>
      </div>
      <FeatureGrid items={capabilities} />
    </footer>
  )
}
