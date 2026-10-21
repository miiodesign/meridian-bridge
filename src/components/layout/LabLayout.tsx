import type { ReactNode } from 'react'
import { asset } from '../meridian/design'

type LabLayoutProps = {
  children: ReactNode
  page?: 'lab' | 'docs'
}

export function LabLayout({ children, page = 'lab' }: LabLayoutProps) {
  return (
    <div className="lab-layout">
      <header className="lab-header">
        <a className="brand" href="#/lab" aria-label="Meridian Bridge component lab">
          <img src={asset('5ae22.svg')} alt="" />
          <span>Meridian Bridge <span className="brand-detail">/ component lab</span></span>
        </a>
        <nav className="lab-nav" aria-label="Main navigation">
          <a href="#/lab" aria-current={page === 'lab' ? 'page' : undefined}>Lab</a>
          <a href="#/">Meridian Bridge</a>
          <a href="#/docs" aria-current={page === 'docs' ? 'page' : undefined}>Documentation</a>
        </nav>
      </header>
      <main id="main-content">{children}</main>
      <footer className="lab-footer">Meridian Bridge · Built with React.</footer>
    </div>
  )
}
