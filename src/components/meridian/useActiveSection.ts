import { useEffect, useRef, useState, type RefObject } from 'react'
import { navigation } from './design'

const sectionIds: readonly string[] = navigation.map(([, id]) => id)

function currentAnchor() {
  const id = typeof window === 'undefined' ? '' : window.location.hash.slice(1)
  return sectionIds.includes(id) ? id : ''
}

export function useActiveSection(header: RefObject<HTMLElement | null>) {
  const [activeSection, setActiveSection] = useState(currentAnchor)
  const selected = useRef(activeSection)

  function selectSection(id: string) {
    selected.current = id
    setActiveSection(id)
  }

  useEffect(() => {
    let frame = 0
    function update() {
      frame = 0
      const line = Math.max((header.current?.getBoundingClientRect().bottom ?? 92) + 28, 136)
      const candidates = sectionIds.flatMap(id => {
        const element = document.getElementById(id)
        if (!element) return []
        const rect = element.getBoundingClientRect()
        return rect.top <= line && rect.bottom > line ? [{ id, top: rect.top }] : []
      }).sort((a, b) => b.top - a.top)
      const nearest = candidates[0]
      const tiedSelection = nearest && candidates.find(candidate => candidate.id === selected.current && Math.abs(candidate.top - nearest.top) < 4)
      const id = tiedSelection?.id ?? nearest?.id ?? ''
      selected.current = id
      setActiveSection(id)
    }
    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    function onHashChange() {
      const id = currentAnchor()
      selected.current = id
      setActiveSection(id)
      schedule()
    }
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    window.addEventListener('hashchange', onHashChange)
    schedule()
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      window.removeEventListener('hashchange', onHashChange)
    }
  }, [header])

  return [activeSection, selectSection] as const
}
