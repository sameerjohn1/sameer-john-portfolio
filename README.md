# Sameer John Portfolio — Next.js

This portfolio has been converted from Vite + React to Next.js with the App Router while keeping the existing visual design, animations, theme toggle, smooth scrolling, responsive navigation, timeline, and portfolio sections intact.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Main changes

- Added the Next.js App Router in `app/`.
- Added `app/layout.tsx` with metadata and Geist Sans fonts.
- Added `app/page.tsx` as the client entry point for the interactive portfolio.
- Moved global styling into `app/globals.css` while preserving the existing CSS and Lightswind styles.
- Replaced Vite scripts/configuration with Next.js scripts.
- Added the Next.js, PostCSS, and TypeScript configuration required for the project.
