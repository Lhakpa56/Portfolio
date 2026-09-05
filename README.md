# Lhakpa Tenji Sherpa — Portfolio

A multi-page personal portfolio built with React, React Router and Tailwind CSS.
All content is drawn directly from the provided CV — see `src/data/content.js`
for the single source of truth.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Project structure

```
src/
  app/            # App shell + route definitions
  pages/          # One component per route (Home, About, Skills, ...)
  components/
    layout/       # Navbar, Footer, Layout, PageTransition
    ui/           # Reusable UI primitives (Button, Tag, ProjectCard, ...)
  data/
    content.js    # All site copy — sourced from the CV, edit here to update content
  lib/
    useSeo.js     # Lightweight per-page title/meta description hook
  assets/         # Profile photo
  styles/
    index.css     # Tailwind layers + design tokens
public/
  Lhakpa-Tenji-Sherpa-Resume.pdf   # Downloadable resume (linked from the nav bar)
```

## Updating content

Everything a recruiter would read — the summary, skills, projects, experience,
education, and contact details — lives in `src/data/content.js`. Edit that file
and every page that uses it updates automatically; no need to touch component
code for a content change.

## Design tokens

Colors, fonts and spacing scale are defined in `tailwind.config.js`:

- **Colors**: `paper` (background), `surface` (cards), `ink` (text), `muted`
  (secondary text), `line` (hairline borders), `accent` (single accent color
  used for links, active nav state, and the primary CTA).
- **Type**: IBM Plex Serif for headings, IBM Plex Sans for body and UI text.

## Deploying

The `dist/` folder produced by `npm run build` is a static site and can be
deployed to Vercel, Netlify, GitHub Pages, or any static host. Because this
uses client-side routing (`react-router-dom`), configure your host to
redirect all paths to `index.html` (a SPA fallback rule).
