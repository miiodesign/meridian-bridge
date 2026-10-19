import { useSyncExternalStore } from 'react'
import { LabLayout } from './components/layout/LabLayout'
import { PaletteCard } from './components/design/PaletteCard'
import { DocumentationPage } from './pages/DocumentationPage'
import './App.css'
function subscribeToHash(callback: () => void) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}

function App() {
  const hash = useSyncExternalStore(subscribeToHash, () => window.location.hash, () => '#/')
  const page = hash === '#/docs' ? 'docs' : 'lab'
  return (
    <LabLayout page={page}>
      {page === 'docs' ? (
        <DocumentationPage />
      ) : (
        <>
          <section className="intro" aria-labelledby="lab-title">
            <p className="eyebrow">A space for small experiments</p>
            <h1 id="lab-title">Good ideas start<br />with a little play.</h1>
            <p>Explore color, shape, and interaction. One thoughtful detail at a time.</p>
          </section>
          <section className="showcase" aria-labelledby="showcase-title">
            <div className="section-heading">
              <h2 id="showcase-title">On the workbench</h2>
              <span>Experiment 001</span>
            </div>
            <PaletteCard />
          </section>
        </>
      )}
    </LabLayout>
  )
}

export default App