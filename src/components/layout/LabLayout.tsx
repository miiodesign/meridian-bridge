import type { ReactNode } from 'react'

type LabLayoutProps = {
  children: ReactNode
  page?: 'lab' | 'docs'
}

export function LabLayout({ children, page = 'lab' }: LabLayoutProps) {
  return (
    <div className="lab-layout">
      <header className="lab-header">
        <a className="brand" href="#/" aria-label="Miio Design Lab home">
          <span className="brand-mark" aria-hidden="true">m.</span>
          <span>miio <span className="brand-detail">/ design lab</span></span>
        </a>
        <nav className="lab-nav" aria-label="Main navigation">
          <a href="#/" aria-current={page === 'lab' ? 'page' : undefined}>Lab</a>
          <a href="#/docs" aria-current={page === 'docs' ? 'page' : undefined}>Documentation</a>
        </nav>
      </header>
      <main id="main-content">{children}</main>
      <footer className="lab-footer">Made for curiosity. Built with React.</footer>
    </div>
  )
}
