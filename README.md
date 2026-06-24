# Parbat-NY — Next.js + Tailwind + Sanity

Community site for **Parbat Sewa Samaj New York** (the Parbat diaspora in NYC).
Built with **Next.js 14** (App Router, TypeScript), styled with **Tailwind CSS**, and
events are managed in **Sanity CMS** with an embedded Studio.

## Run it

```bash
cd next-site
npm install
cp .env.local.example .env.local   # then fill in your Sanity project ID
npm run dev                        # http://localhost:3000
```

- Site: `http://localhost:3000`
- Sanity Studio (create/edit events): `http://localhost:3000/studio`

`npm run build` / `npm start` for production.

## Structure

```
next-site/
├── tailwind.config.ts          # design tokens (colors, fonts, keyframes)
├── postcss.config.mjs
├── sanity.config.ts            # embedded Studio config (mounted at /studio)
├── .env.local.example          # Sanity env vars to copy into .env.local
├── app/
│   ├── globals.css             # @tailwind layers + reset + .reveal utility
│   ├── layout.tsx              # <html> shell, next/font (Playfair + Work Sans)
│   ├── page.tsx                # HOME
│   ├── about/page.tsx          # ABOUT
│   ├── events/page.tsx         # EVENTS — async, fetches from Sanity
│   └── studio/[[...tool]]/page.tsx   # Sanity Studio route
├── components/                 # all Tailwind, no CSS modules
│   ├── Reveal.tsx              # 'use client' scroll-reveal (IntersectionObserver)
│   ├── Header.tsx  Footer.tsx
│   ├── Hero.tsx  Foundation.tsx  FeaturedWork.tsx  JoinCTA.tsx
│   ├── PageHero.tsx  CTABand.tsx
│   └── EventCard.tsx  TeamMember.tsx
└── sanity/
    ├── env.ts                  # reads NEXT_PUBLIC_SANITY_* (safe when empty)
    ├── schemaTypes/event.ts    # the Event document schema
    └── lib/
        ├── client.ts  image.ts
        ├── queries.ts          # GROQ for events + featured event
        └── api.ts              # getEvents() / getFeaturedEvent() helpers
```

## Tailwind

Tokens live in `tailwind.config.ts` under `theme.extend`:

- **Colors** — `bg`, `bg-soft`, `card`, `card-2`, `ink`, `muted` / `muted-2`, `faint`,
  and `red` / `red-dark` / `red-soft`. Use as `bg-card`, `text-red-soft`, etc.
- **Fonts** — `font-serif` (Playfair Display) and `font-sans` (Work Sans), wired to the
  CSS variables that `next/font` sets in `layout.tsx`.
- **Animation** — `animate-float-up` (entrance) and `animate-kenburns` (hero zoom).

The only non-utility CSS is the `.reveal` scroll transition in `globals.css`, toggled
by the `<Reveal>` client component. Gradients/textures use Tailwind arbitrary values
(`bg-[radial-gradient(...)]`). Respects `prefers-reduced-motion`.

## Sanity — managing events

1. Create a free project at <https://www.sanity.io/manage> (or run `npx sanity init`),
   then put the **Project ID** in `.env.local` (`NEXT_PUBLIC_SANITY_PROJECT_ID`).
2. Visit **`/studio`**, sign in, and add **Event** documents. Fields:
   `title`, `badge`, `theme` (red/amber/green), `location`, `timeframe`, `description`,
   `date`, `image`, and `featured` (toggle to show it in the big "NEXT UP" banner).
3. The **Events** page (`app/events/page.tsx`) fetches with GROQ on the server and
   revalidates every 60s. Card images come straight from the uploaded Sanity image.

**No login on the public site** — the only auth is Sanity's own Studio sign-in for
editors at `/studio`.

### Graceful fallback

Before you connect Sanity (empty `projectId`), the Events page renders a built-in set
of sample events and a default banner, so the site always works. Once events exist in
Sanity, they replace the samples automatically.

## Placeholder images

Gradient placeholders are marked `[ … photo ]`. Real photos:

- **Home hero** (`components/Hero.tsx`) — swap the `.bg` gradient for `bg-[url('/img/hero.jpg')]` (files in `public/img/`).
- **Home featured cards** (`components/FeaturedWork.tsx`) — `media` gradient on each item.
- **About story image / committee photos** (`app/about/page.tsx`, `components/TeamMember.tsx`).
- **Event cards & banner** — handled by Sanity: upload an image on the Event and it shows automatically.
- For optimized images consider swapping `background-image` for `next/image`.

## Content source

Text is summarized from the organization's 2024–2026 annual report (major items only).
Some specifics (exact dates, member names) are placeholders from the report — verify
before publishing.
