# Miio Design Lab

A workspace for design experiments and prototypes.

## Development

Built with React, TypeScript, and Vite. Use a Node.js version supported by Vite (the installed Node.js 26 works).

- Install dependencies: `npm ci`
- Start the development server: `npm run dev`
- Type-check and build for production: `npm run build`
- Lint with Oxlint: `npm run lint`
- Preview the production build: `npm run preview`

Application code lives in `src/`, and static assets live in `public/`.

## Component structure

- `src/components/layout/` — page shell and shared layout.
- `src/components/ui/` — reusable UI primitives, starting with a typed button.
- `src/components/design/` — design experiments, starting with an interactive palette card.
- `src/App.tsx` — composes the lab page.
- `src/index.css` — global styles; `src/App.css` — lab and component styles.

The sample palette card cycles through three color schemes. Color values are shown as text, and palette changes are announced to screen readers.
