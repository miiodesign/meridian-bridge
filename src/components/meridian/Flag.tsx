import { useId } from 'react'
import type { CountryCode } from './design'

// Simplified national flags, sized by CSS (.mb-flag) so they sit beside country names.
export function Flag({ code }: { code: CountryCode }) {
  const id = useId()
  if (code === 'CA') {
    return (
      <svg className="mb-flag" viewBox="0 0 40 20" aria-hidden="true">
        <rect width="40" height="20" fill="#fff" />
        <rect width="10" height="20" fill="#d52b1e" />
        <rect x="30" width="10" height="20" fill="#d52b1e" />
        <path fill="#d52b1e" d="M20 3.2l-1.3 2.4c-.15.27-.42.24-.69.1l-.95-.49.71 3.75c.15.69-.33.69-.57.39l-1.65-1.85-.27.94c-.03.12-.16.25-.36.22l-2.09-.44.55 2c.12.44.21.63-.13.75l-.75.35 3.62 2.94c.14.11.21.31.16.49l-.32 1.04c1.25-.14 2.37-.36 3.62-.5.11-.01.3.17.3.3l-.17 3.82h.61l-.1-3.81c0-.13.17-.32.28-.31 1.25.14 2.37.36 3.62.5l-.32-1.04a.43.43 0 01.16-.49l3.62-2.94-.75-.35c-.34-.12-.25-.31-.13-.75l.55-2-2.09.44c-.2.03-.33-.1-.36-.22l-.27-.94-1.65 1.85c-.24.3-.72.3-.57-.39l.71-3.75-.95.49c-.27.14-.54.17-.69-.1z" />
      </svg>
    )
  }
  if (code === 'US') {
    return (
      <svg className="mb-flag" viewBox="0 0 38 20" aria-hidden="true">
        <rect width="38" height="20" fill="#fff" />
        <path stroke="#b22234" strokeWidth="1.54" d="M0 .77h38M0 3.85h38M0 6.92h38M0 10h38M0 13.08h38M0 16.15h38M0 19.23h38" />
        <rect width="15.2" height="10.77" fill="#3c3b6e" />
        <g fill="#fff">
          {[1.6, 4.3, 7, 9.7].flatMap(y => [1.9, 4.7, 7.6, 10.5, 13.3].map(x => <circle key={`${x}-${y}`} cx={x} cy={y} r=".55" />))}
        </g>
      </svg>
    )
  }
  return (
    <svg className="mb-flag" viewBox="0 0 60 30" aria-hidden="true">
      <clipPath id={`${id}-s`}><path d="M0 0v30h60V0z" /></clipPath>
      <clipPath id={`${id}-t`}><path d="M30 15h30v15zv15H0zH0V0zV0h30z" /></clipPath>
      <g clipPath={`url(#${id}-s)`}>
        <path d="M0 0v30h60V0z" fill="#012169" />
        <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
        <path d="M0 0l60 30m0-30L0 30" clipPath={`url(#${id}-t)`} stroke="#c8102e" strokeWidth="4" />
        <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
        <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
      </g>
    </svg>
  )
}
