import type { ReactNode } from 'react'
import { asset, consultationUrl } from './design'

export function Icon({ name }: { name: string }) {
  return <img className="mb-icon" src={asset(name)} alt="" aria-hidden="true" />
}

export function Brand() {
  return (
    <a className="mb-brand" href="#/" aria-label="Meridian Bridge home">
      <Icon name="5ae22.svg" />
      <span><strong>Meridian</strong><small>BRIDGE</small></span>
    </a>
  )
}

export function ActionLink({ children, href = consultationUrl, variant = '', icon = 'ee954.svg' }: {
  children: ReactNode
  href?: string
  variant?: string
  icon?: string
}) {
  const external = href.startsWith('https://')
  return (
    <a className={`mb-action ${variant}`} href={href}
      target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
      {children}<Icon name={icon} />
    </a>
  )
}

export function SectionHeading({ eyebrow, title, children }: {
  eyebrow: string
  title: string
  children?: ReactNode
}) {
  return (
    <div className="mb-section-heading">
      <p className="mb-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  )
}

export function FeatureGrid({ items }: { items: readonly (readonly [string, string, string])[] }) {
  return (
    <div className="mb-feature-grid">
      {items.map(([icon, title, text]) => (
        <article key={title}><Icon name={icon} /><h3>{title}</h3><p>{text}</p></article>
      ))}
    </div>
  )
}
