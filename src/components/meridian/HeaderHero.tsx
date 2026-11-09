import { useEffect, useRef, useState } from 'react'
import { Button } from '../ui/Button'
import { ActionLink, Brand, Icon } from './Shared'
import { asset, consultationUrl, inquiryUrl, navigation } from './design'
import { BrandPattern } from './BrandPattern'
import { useActiveSection } from './useActiveSection'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const [activeSection, selectSection] = useActiveSection(headerRef)

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
      <Brand tone="ivory" />
      <Button className="mb-menu-toggle" aria-expanded={menuOpen} aria-controls="meridian-nav"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen(open => !open)}>
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d={menuOpen ? 'M5 5L15 15M15 5L5 15' : 'M3 5H17M3 10H17M3 15H17'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </Button>
      <nav id="meridian-nav" className={menuOpen ? 'is-open' : ''} aria-label="Meridian Bridge navigation">
        {navigation.map(([label, id]) => (
          <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}
            onClick={() => { selectSection(id); setMenuOpen(false) }}>{label}</a>
        ))}
        <a className="mb-mobile-consultation" href={consultationUrl} target="_blank" rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}>Book a Free 20-Minute Consultation<Icon name="ee954.svg" /></a>
      </nav>
      <a className="mb-header-cta" href={consultationUrl} target="_blank" rel="noopener noreferrer">Book a Free 20-Minute Consultation</a>
    </header>
  )
}

export function Hero() {
  return (
    <section className="mb-hero" aria-labelledby="meridian-title">
      <img className="mb-hero-image" src={asset('guangzhou-lounge.jpg')} alt="A sunlit lounge overlooking the Pearl River and Guangzhou skyline at golden hour" width="1920" height="640" fetchPriority="high" />
      <div className="mb-hero-copy">
        <h1 id="meridian-title">Be proactive about <em className="mb-keep-together">your health.</em></h1>
        <p>Access comprehensive health screenings and diagnostic testing in China, with Meridian Bridge helping you navigate the process.</p>
        <div className="mb-actions">
          <ActionLink>Book a Free 20-Minute Consultation</ActionLink>
          <ActionLink href={inquiryUrl} variant="mb-action-light" icon="8e1e6.svg">Send an Inquiry</ActionLink>
        </div>
      </div>
    </section>
  )
}

const easeInOutCubic = (t: number) => (t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

// Counts up from zero the first time the number scrolls into view, easing in and out.
function CountUp({ to, decimals = 0, prefix = '', suffix = '', duration = 2000 }: {
  to: number
  decimals?: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const ref = useRef<HTMLElement>(null)
  const [value, setValue] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? to : 0)

  useEffect(() => {
    const element = ref.current
    if (!element || value === to) return
    let frame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      const start = performance.now()
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration)
        setValue(to * easeInOutCubic(progress))
        if (progress < 1) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }, { threshold: .6 })
    observer.observe(element)
    return () => { observer.disconnect(); cancelAnimationFrame(frame) }
    // Runs once on mount; the animation drives `value` afterwards.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, duration])

  const final = `${prefix}${to.toFixed(decimals)}${suffix}`
  return (
    <strong ref={ref} className="mb-count-up">
      <span aria-hidden="true">{prefix}{value.toFixed(decimals)}{suffix}</span>
      <span className="mb-visually-hidden">{final}</span>
    </strong>
  )
}

export function PatientContext() {
  return (
    <section className="mb-patient-context" aria-label="International patient context">
      <BrandPattern />
      <img className="mb-context-image" src={asset('clinic-consultation.jpg')} alt="A doctor going over screening results with a patient in a bright consultation room" width="1540" height="1021" loading="lazy" decoding="async" />
      <div className="mb-context-stats">
        <div className="mb-metrics">
          <div><CountUp to={1.28} decimals={2} suffix=" million" /><p>Visits from international patients recorded in Chinese hospitals in 2025.</p></div>
          <div><CountUp to={74} prefix="+" suffix="%" /><p>In foreign visits to Chinese hospitals in the last 3 years.</p></div>
        </div>
        <p className="mb-source">Source: National Health Commission of China, 2025.</p>
      </div>
    </section>
  )
}
