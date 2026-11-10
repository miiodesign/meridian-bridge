import { useEffect, useId, useState } from 'react'
import { Button } from '../ui/Button'
import { Icon } from './Shared'
import { screeningPackages, type ScreeningPackage } from './screeningPackageData'
import { MobileCardRail } from './MobileCardRail'

// Matches the breakpoint where packages become a swipeable rail (MobileCardRail.css).
const mobileQuery = '(max-width: 760px)'

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.matchMedia(mobileQuery).matches)
  useEffect(() => {
    const query = window.matchMedia(mobileQuery)
    const update = () => setMobile(query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])
  return mobile
}

const detailsId = (baseId: string, packageId: string) => `${baseId}-${packageId}-details`

function ScreeningPackageCard({ screeningPackage, baseId, mobile, allExpanded }: {
  screeningPackage: ScreeningPackage
  baseId: string
  mobile: boolean
  allExpanded: boolean
}) {
  const [ownExpanded, setOwnExpanded] = useState(false)
  const expanded = mobile ? ownExpanded : allExpanded
  const headingId = `${baseId}-${screeningPackage.id}-heading`
  const detailsElementId = detailsId(baseId, screeningPackage.id)
  return (
    <article
      className={`mb-screening-package${screeningPackage.popular ? ' mb-screening-package-popular' : ''}`}
      data-package={screeningPackage.id}
      aria-labelledby={headingId}
      onKeyDown={event => {
        if (mobile && event.key === 'Escape' && ownExpanded) {
          setOwnExpanded(false)
          event.currentTarget.querySelector('button')?.focus()
        }
      }}>
      <div className="mb-package-badge-slot">
        {screeningPackage.popular && <span className="mb-package-badge">Most popular</span>}
      </div>
      <div className="mb-package-overview">
        <h4 id={headingId}>{screeningPackage.title}</h4>
        <p className="mb-package-price"><span>From approximately</span><strong>{screeningPackage.price}</strong></p>
        <p className="mb-package-summary">{screeningPackage.summary}</p>
      </div>
      <div className="mb-package-details" id={detailsElementId} hidden={!expanded}>
        {screeningPackage.builds && <p className="mb-package-builds">{screeningPackage.builds}, plus:</p>}
        <ul>
          {screeningPackage.inclusions.map(inclusion => (
            <li key={inclusion}><Icon name={screeningPackage.checkIcon} /><span>{inclusion}</span></li>
          ))}
        </ul>
      </div>
      {mobile && (
        <Button
          className="mb-package-toggle"
          aria-expanded={ownExpanded}
          aria-controls={detailsElementId}
          aria-label={`${ownExpanded ? 'Read less' : 'Read more'} about ${screeningPackage.title}`}
          onClick={() => setOwnExpanded(value => !value)}>
          {ownExpanded ? 'Read less' : 'Read more'}
        </Button>
      )}
    </article>
  )
}

export function PackageNote() {
  return <p className="mb-package-note">Package contents and prices vary by provider. These are illustrative options, not a personalized medical recommendation. Confirm test suitability with a qualified clinician and request a quote before booking. Meridian Bridge’s facilitation fee is separate.</p>
}

export function ScreeningPackages() {
  const headingId = useId()
  const baseId = useId()
  const mobile = useIsMobile()
  const [allExpanded, setAllExpanded] = useState(false)
  return (
    <section className={`mb-package-options${mobile ? '' : ' mb-package-options-shared'}`} aria-labelledby={headingId}>
      <div className="mb-package-introduction">
        <h3 id={headingId}>Health Screening Package Options</h3>
        <p>Every provider offers different packages. Meridian Bridge helps you navigate which ones are best suited for your needs. Typical options price ranges include:</p>
      </div>
      <MobileCardRail name="packages" className="mb-package-grid" label="Screening packages">
        {screeningPackages.map(screeningPackage => (
          <ScreeningPackageCard key={screeningPackage.id} screeningPackage={screeningPackage}
            baseId={baseId} mobile={mobile} allExpanded={allExpanded} />
        ))}
      </MobileCardRail>
      {!mobile && (
        <Button
          className="mb-package-toggle mb-package-toggle-all"
          aria-expanded={allExpanded}
          aria-controls={screeningPackages.map(({ id }) => detailsId(baseId, id)).join(' ')}
          aria-label={allExpanded ? 'Read less about all screening packages' : 'Read more about all screening packages'}
          onClick={() => setAllExpanded(value => !value)}>
          {allExpanded ? 'Read less' : 'Read more'}
        </Button>
      )}
      <aside className="mb-specific-scan" aria-labelledby={`${baseId}-specific-scan`}>
        <h4 id={`${baseId}-specific-scan`}><Icon name="074ae.svg" />Looking for a specific scan?</h4>
        <p>MRI, CT and other diagnostic imaging may be available as standalone tests or additions to selected packages, subject to provider availability and clinical assessment.</p>
      </aside>
    </section>
  )
}
