# NewColorGame Website

A Vite + React + Tailwind CSS website for NewColorGame, the color + alphabet board game
invented and made in Nigeria.

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
```

The production files will be in `dist/`. Upload that folder's contents to any static host
(Netlify, Vercel, GitHub Pages, cPanel, etc).

## Project structure

```
src/
├── components/     Reusable UI pieces (Navbar, Hero, cards, footer, etc.)
├── pages/          Home, Gallery, Contact — one file per route
├── data/           Editable content: game rules, contact info, gallery images
└── assets/images/  Game photos
```

## Editing content

- **Contact details, rules, features** → `src/data/gameInfo.js`
- **Gallery photos** → `src/data/gallery.js` (add new images to `src/assets/images/` and import them here)
- **Colors/fonts** → `tailwind.config.js`

## Design notes

The visual language is built from the game's own materials: the rainbow logotype, the black
"CardDice" card labels, and the red board border. That thicker ink-bordered, offset-shadow
treatment is now reserved for the CardDice-style pieces themselves (the hero's fanned color
cards, the brand badge) so it reads as a deliberate signature rather than a template applied to
every box. General UI surfaces (feature cards, mode cards, contact cards) use a lighter
`soft-border` + soft drop-shadow for a calmer, more professional finish.

## Motion

Animations are built with [Framer Motion](https://www.framer.com/motion/):

- **Hero** — headline, copy, and buttons stagger in on load; the CardDice fan spring in with a
  slight delay after.
- **Scroll reveals** — sections fade/slide up into view once, via the reusable `FadeIn`
  component (`src/components/FadeIn.jsx`).
- **Hover micro-interactions** — cards lift slightly on hover (feature cards, mode cards, gallery
  tiles, contact links); buttons lift and spring back on tap.
- **Page transitions** — route changes cross-fade via `AnimatePresence` in `App.jsx`.
- **Gallery lightbox** — scales and fades in/out with `AnimatePresence`.

Framer Motion respects the user's `prefers-reduced-motion` setting automatically for the
transitions used here.
