# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # http://localhost:3000 (dev server + embedded Sanity Studio at /studio)
npm run build     # production build
npm run lint      # ESLint via next lint
npm start         # serve production build
```

No test suite is configured.

## Architecture

This is a **Next.js 14 App Router** site for Parbat Sewa Samaj New York, using **Tailwind CSS** for styling and **Sanity CMS** for content. There is no separate backend — all data fetching happens in React Server Components.

### Data flow: Sanity → pages

`sanity/env.ts` exports `sanityEnabled` (true only when `NEXT_PUBLIC_SANITY_PROJECT_ID` is set in `.env.local`). All data helpers in `sanity/lib/api.ts` check this flag first and return `null`/`[]` if unset, allowing the site to render without a connected Sanity project using the hardcoded fallback data defined at the top of each page file.

When Sanity is connected, pages fetch via `getEvents()` / `getFeaturedEvent()` / `getEventBySlug()` (in `sanity/lib/api.ts`), which call the Sanity client with GROQ queries from `sanity/lib/queries.ts`. All fetches use `next: { revalidate: 86400 }` — ISR with a 24-hour window, declared both on the fetch calls and as `export const revalidate = 86400` at the page level.

### Event separation pattern

On the Events page (`app/events/page.tsx`), events whose `title` starts with `"Partner"` are split into a separate "Partner Flyers" gallery section; all others go into the main highlights grid. This is a title-convention hack — no dedicated schema field.

### Sanity schema

One document type: `event` (`sanity/schemaTypes/event.ts`). Key fields: `title`, `slug`, `badge` (short tag label), `theme` (red/amber/green card color), `location`, `timeframe`, `date`, `description`, `featured` (boolean — puts it in the "NEXT UP" banner instead of the grid), `images` (array, max 10). The embedded Studio is mounted at `/studio` via `app/studio/[[...tool]]/page.tsx`.

### Styling conventions

All styling is Tailwind utility classes — no CSS modules. The only global CSS is in `app/globals.css`: the `.reveal` / `.reveal.is-visible` transition used by the `<Reveal>` component.

Custom design tokens in `tailwind.config.ts`:
- **Colors**: `bg`, `bg-soft`, `card`, `card-2`, `ink`, `muted`, `muted-2`, `faint`, `red`, `red-dark`, `red-soft`
- **Fonts**: `font-serif` (Playfair Display) and `font-sans` (Work Sans) — wired to CSS variables set by `next/font` in `app/layout.tsx`
- **Animations**: `animate-float-up` (entrance) and `animate-kenburns` (hero zoom)

### Client components

Most components are server-compatible. Two are `'use client'`:
- `Reveal` — scroll-triggered fade-in via `IntersectionObserver`; wraps content and adds `.is-visible` when the element enters the viewport
- `EventGallery` — interactive thumbnail grid for event detail pages; manages active image state

### Image handling

Remote images from `cdn.sanity.io` are allowed via `next.config.mjs` `remotePatterns`. Use `next/image` with `fill` + a positioned parent for Sanity images. Gradient placeholders (using Tailwind arbitrary `bg-[radial-gradient(...)]` values) stand in for pages/components that don't yet have real photos.
