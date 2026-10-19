import type { ReactNode } from 'react'

type LabLayoutProps = {
  children: ReactNode
}

export function LabLayout({ children }: LabLayoutProps) {
  return (
    <div className="lab-layout">
      <header className="lab-header">
        <a className="brand" href="#main-content" aria-label="Miio Design Lab home">
          <span className="brand-mark" aria-hidden="true">m.</span>
          <span>miio <span className="brand-detail">/ design lab</span></span>
        </a>
        <span className="lab-label">A work in progress</span>
      </header>
      <main id="main-content">{children}</main>
      <footer className="lab-footer">Made for curiosity. Built with React.</footer>
    </div>
  )
}
