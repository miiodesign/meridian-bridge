import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { countries, type CountryCode } from './design'

const optionLabel = (code: CountryCode) => `(${code}) ${countries.find(country => country.code === code)?.name ?? ''}`

export function CountrySelect({ country, onChange, label = 'Compare with:' }: {
  country: CountryCode
  onChange: (country: CountryCode) => void
  label?: string
}) {
  const id = useId()
  const labelId = `${id}-label`
  const listId = `${id}-list`
  const rootRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const options = countries
    .filter(({ code }) => code !== country)
    .sort((a, b) => a.name.localeCompare(b.name))

  useEffect(() => {
    if (!open) return
    listRef.current?.focus()
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) setOpen(false)
    }
    document.addEventListener('pointerdown', closeOutside)
    return () => document.removeEventListener('pointerdown', closeOutside)
  }, [open])

  function openList(index = 0) {
    setActive(index)
    setOpen(true)
  }

  function close() {
    setOpen(false)
    buttonRef.current?.focus()
  }

  function choose(code: CountryCode) {
    onChange(code)
    close()
  }

  function handleButtonKey(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return
    event.preventDefault()
    openList(event.key === 'ArrowUp' ? options.length - 1 : 0)
  }

  function handleListKey(event: KeyboardEvent<HTMLUListElement>) {
    const last = options.length - 1
    const next = {
      ArrowDown: Math.min(last, active + 1),
      ArrowUp: Math.max(0, active - 1),
      Home: 0,
      End: last,
    }[event.key]
    if (next !== undefined) {
      event.preventDefault()
      setActive(next)
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      choose(options[active].code)
    } else if (event.key === 'Escape') {
      event.preventDefault()
      close()
    } else if (event.key === 'Tab') {
      setOpen(false)
    }
  }

  return (
    <div className="mb-country-select" ref={rootRef}>
      <span id={labelId} className="mb-country-select-label">{label}</span>
      <div className={`mb-country-select-field${open ? ' is-open' : ''}`}>
        <button ref={buttonRef} type="button" className="mb-country-select-trigger"
          aria-haspopup="listbox" aria-expanded={open} aria-controls={listId}
          aria-labelledby={`${labelId} ${id}-value`}
          onClick={() => (open ? setOpen(false) : openList())} onKeyDown={handleButtonKey}>
          <span id={`${id}-value`}>{optionLabel(country)}</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M3 5.25L7 9.25L11 5.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <ul ref={listRef} id={listId} className="mb-country-select-list" role="listbox" tabIndex={-1} hidden={!open}
          aria-labelledby={labelId} aria-activedescendant={open ? `${id}-${options[active]?.code}` : undefined}
          onKeyDown={handleListKey} onBlur={event => {
            if (!rootRef.current?.contains(event.relatedTarget)) setOpen(false)
          }}>
          {options.map(({ code }, index) => (
            <li key={code} id={`${id}-${code}`} role="option" aria-selected={false}
              className={index === active ? 'is-active' : undefined}
              onPointerEnter={() => setActive(index)} onClick={() => choose(code)}>
              {optionLabel(code)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
