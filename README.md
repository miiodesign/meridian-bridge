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

Start `npm run dev` and open the URL printed by Vite. Meridian Bridge is the homepage; the documentation route is `#/docs` and the lab route is `#/lab`. The documentation page includes API guidance, usage examples, and interactive Button and PaletteCard demos.

Hash-based navigation supports direct links, browser history, and refreshes on static hosting without server rewrites. Local development and Vercel use `/`; the GitHub Pages workflow builds with `/miio-design-lab/`.

## GitHub Pages

The public repository is deployed at https://miiodesign.github.io/miio-design-lab/ with documentation at https://miiodesign.github.io/miio-design-lab/#/docs.

The workflow in `.github/workflows/deploy.yml` runs lint and a production build on pushes to `main` and manual runs. The repository variable `PAGES_ENABLED` is set to `true`.

To configure this workflow in another repository:

1. Enable **Settings → Pages → Build and deployment → Source → GitHub Actions**.
2. Under **Settings → Secrets and variables → Actions → Variables**, create `PAGES_ENABLED` with value `true`.
3. Run **Build and deploy to Pages** from the Actions tab, or push to `main`.
4. Confirm that the deployment succeeds before opening the website.


Pages sites are normally publicly accessible even when the source repository is private. Do not include secrets or private content in the frontend.

## Supabase

The local Supabase CLI is linked to the existing `miiodesign's Project` in the `miio design lab` organization. Configuration is in `supabase/config.toml`; linking metadata in `supabase/.temp/` is ignored. No schema, data, or authentication settings were changed during setup.

For a new checkout, copy `.env.example` to `.env.local`, then set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` using the project's browser-safe publishable key (a legacy anon key is also supported). Restart Vite after changing these values.

Import `supabase` from `src/lib/supabase.ts`. It is `null` when either variable is missing, so guard it before using it. The component lab does not issue database requests. Before adding data access, configure Row Level Security and policies; browser keys do not replace authorization. Never expose a service-role key, secret key, or database password in a `VITE_` variable.

Link a new local checkout with `supabase link --project-ref bgadwxohsekhxmrolnsg`. Do not run database push or migration commands unless you intend to change the hosted schema. Local Docker services were not started.

## Vercel

The app is linked locally to the `miio-design-lab` project in the `miio-design-lab` Hobby team. `vercel.json` specifies the Vite build and `dist` output. `.vercel/` is ignored.

Production: https://miio-design-lab.vercel.app/

Documentation: https://miio-design-lab.vercel.app/#/docs

The production alias and its assets were verified accessible without authentication. Vercel may protect individual deployment or preview URLs separately; no protection settings were changed.

The two browser-safe Supabase variables are configured for Vercel production, preview, and development. They are embedded in frontend builds and must never contain privileged credentials. GitHub Pages currently renders the component lab without backend configuration.

Deploy manually from the project directory with `vercel --prod`. The attempted automatic GitHub connection did not succeed, so pushes do not currently trigger Vercel deployments. To enable that later, connect the repository under the Vercel project's Git settings and grant the Vercel GitHub app access. GitHub Pages automatic deployment is separate and remains enabled.

## Meridian Bridge inquiries and content

Both “Send an Inquiry” buttons and the footer Contact link open the owner-supplied Tally form at https://tally.so/r/7Rpe72. The shared URL lives in `src/components/meridian/design.ts`. This direct-link integration works on Vercel and static GitHub Pages without website API keys or a custom backend.

Tally manages submissions. This repository does not configure Tally notifications, forwarding, storage retention, or a Supabase sync. Those integrations must be configured and tested separately in the form owner's account. Do not interpret a reachable form as proof of successful notification delivery. Do not send test inquiries without authorization.

Gordon's supplied biography and portrait are displayed in the founder dialog. FAQs describe coordination without promising specific medical outcomes or report deadlines. The pricing card is an illustrative breakdown, not an interactive estimator; CAD and USD costs are not combined into an unsupported total.

Privacy and Terms dialogs contain explicitly labeled drafts for owner review. Before publishing these changes to production, confirm the legal copy, business/privacy contact, data retention, and actual Tally integrations. No claims of regulatory compliance or specific data residency are made.
