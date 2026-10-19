import { useId, useState } from 'react'
import { Button } from '../ui/Button'

const palettes = [
  { name: 'Soft focus', colors: ['#DDD6FE', '#A78BFA', '#5B21B6'] },
  { name: 'Garden notes', colors: ['#D1FAE5', '#6EE7B7', '#065F46'] },
  { name: 'Golden hour', colors: ['#FEF3C7', '#FBBF24', '#92400E'] },
] as const

export function PaletteCard() {
  const titleId = useId()
  const [paletteIndex, setPaletteIndex] = useState(0)
  const palette = palettes[paletteIndex]!

  return (
    <article className="palette-card" aria-labelledby={titleId}>
      <div className="palette-preview" aria-hidden="true">
        {palette.colors.map((color) => (
          <span key={color} style={{ backgroundColor: color }} />
        ))}
        <span className="preview-caption">A study in color</span>
      </div>
      <div className="palette-content">
        <p className="eyebrow">Color exploration</p>
        <h3 id={titleId}>Find a fresh perspective.</h3>
        <p>A tiny palette, a different mood. Try a new combination and see where it takes you.</p>
        <div className="palette-details" aria-live="polite" aria-atomic="true">
          <p className="palette-name">{palette.name}</p>
          <ul className="swatch-list" aria-label={`${palette.name} color values`}>
            {palette.colors.map((color) => (
              <li key={color}>
                <span className="swatch-dot" style={{ backgroundColor: color }} aria-hidden="true" />
                <code>{color}</code>
              </li>
            ))}
          </ul>
        </div>
        <Button onClick={() => setPaletteIndex((index) => (index + 1) % palettes.length)}>
          Try another palette <span aria-hidden="true">↗</span>
        </Button>
      </div>
    </article>
  )
}
