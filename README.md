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

## Component documentation

Start `npm run dev`, open the URL printed by Vite, and choose **Documentation** in the header. The documentation route is `#/docs`; the lab route is `#/`. The page includes API guidance, usage examples, and interactive Button and PaletteCard demos.

Hash-based navigation supports direct links, browser history, and refreshes on static hosting without server rewrites. Vite serves this project under `/miio-design-lab/`, including local development and preview.

## GitHub Pages

Deployment is prepared but not live: GitHub rejected Pages setup because the current account plan does not support Pages for this private repository. The source repository remains private.

The workflow in `.github/workflows/deploy.yml` runs lint and a production build on pushes to `main` and manual runs. Deployment is disabled unless the repository Actions variable `PAGES_ENABLED` equals `true`.

After upgrading to a plan supporting Pages for private repositories (or explicitly choosing to make the repository public):

1. Enable **Settings → Pages → Build and deployment → Source → GitHub Actions**.
2. Under **Settings → Secrets and variables → Actions → Variables**, create `PAGES_ENABLED` with value `true`.
3. Run **Build and deploy to Pages** from the Actions tab, or push to `main`.
4. Confirm that the deployment succeeds before opening the website.

Expected site URL after successful deployment: https://miiodesign.github.io/miio-design-lab/

Expected documentation URL: https://miiodesign.github.io/miio-design-lab/#/docs

Pages sites are normally publicly accessible even when the source repository is private. Do not include secrets or private content in the frontend.
