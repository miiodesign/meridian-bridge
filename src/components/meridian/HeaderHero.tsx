import { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/Button'
import { ActionLink, Brand, Icon } from './Shared'
import { asset, capabilities, consultationUrl, inquiryUrl, navigation } from './design'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      headerRef.current?.querySelector<HTMLButtonElement>('.mb-menu-toggle')?.focus()
    }
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(false)
    }
    const desktop = window.matchMedia('(min-width: 1051px)')
    function closeOnDesktop() {
      if (desktop.matches) setMenuOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOutside)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOutside)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [menuOpen])
  return (
    <header className="mb-header" ref={headerRef}>
      <Brand />
      <Button className="mb-menu-toggle" aria-expanded={menuOpen} aria-controls="meridian-nav"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen(open => !open)}>
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d={menuOpen ? 'M5 5L15 15M15 5L5 15' : 'M3 5H17M3 10H17M3 15H17'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </Button>
      <nav id="meridian-nav" className={menuOpen ? 'is-open' : ''} aria-label="Meridian Bridge navigation">
        {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <a className="mb-mobile-consultation" href={consultationUrl} target="_blank" rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}>Book a Free Consultation <span aria-hidden="true">↗</span></a>
      </nav>
      <a className="mb-header-cta" href={consultationUrl} target="_blank" rel="noopener noreferrer">Book a Free 15min Consultation</a>
    </header>
  )
}

export function Hero() {
  const trust = [
    ['caaaa.svg', 'Canadian-led and accountable'],
    ['af9a0.svg', 'Carefully vetted providers'],
    ['9295a.svg', 'Transparent pricing'],
    ['734d2.svg', 'English, Mandarin & Cantonese support'],
  ]
  return (
    <>
      <section className="mb-hero" aria-labelledby="meridian-title">
        <img className="mb-hero-image" src={asset('dff24.png')} alt="Modern hospital campus alongside a river in China" fetchPriority="high" />
        <div className="mb-hero-copy">
          <p className="mb-eyebrow">World class diagnostics. A different kind of journey.</p>
          <h1 id="meridian-title">Your health has<br />been waiting<br /><em>long enough.</em></h1>
          <p>Access comprehensive health screenings and diagnostic testing in China, with Meridian Bridge handling the coordination from Canada.</p>
          <div className="mb-actions">
            <ActionLink>Book a Free 15 min Consultation</ActionLink>
            <ActionLink href={inquiryUrl} variant="mb-action-light" icon="8e1e6.svg">Send an Inquiry</ActionLink>
          </div>
        </div>
      </section>
      <div className="mb-trust">{trust.map(([icon, label]) => <div key={label}><Icon name={icon} /><span>{label}</span></div>)}</div>
    </>
  )
}

export function PatientContext() {
  return (
    <section className="mb-patient-context" aria-label="International patient context">
      <div>
        <div className="mb-metrics">
          <div><strong>1.28 million</strong><p>international patient visits were recorded at China’s key foreign-facing hospitals in 2025.</p></div>
          <div><strong>+73.6%</strong><p>in foreign visits to Chinese hospitals in three years.</p></div>
        </div>
        <p className="mb-source">Source: National Health Commission of China, 2025.</p>
      </div>
      <img className="mb-context-divider" src={asset('c9005.svg')} alt="" />
      <div className="mb-context-features">{capabilities.map(([, title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>
  )
}
