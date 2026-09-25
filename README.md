# Tattoo studio demo 4: dark conversion (unbranded template)

A neutral demo website for a tattoo studio in a dark, clear, booking-first
style: charcoal and warm white with one signal yellow, extended sans (Syne) with
an italic serif accent (DM Serif Display) and Manrope for text.

It carries **no real studio's branding**. The name ("Your Studio"), address,
phone, hours, artists, reviews, prices and all numbers are placeholders (marked
"sample" on the page), the WhatsApp links carry no phone number on purpose (a
demo must never open a chat with a real person), and the page is `noindex`.

## What's in it

Announcement bar · hero with a **mosaic of photos drifting in opposite
directions** and a yellow "chat for a free consult" button above the fold on
phones · "why travellers choose us" card · **style cards with "tap to open"**
that slide up a gallery sheet with a "Book this style" button · trust ticker ·
stats that count up · "how we work" in three steps · **process stories**: an
auto-advancing, tap-to-skip, hold-to-pause story viewer · reviews · artist
roster · FAQ · final call to action, plus a floating chat button that appears
after the hero. Everything animates transform/opacity only;
`prefers-reduced-motion` is respected (the story viewer stops auto-playing).

## Run

```bash
npm install
npm run dev
```

## Turning it into a real client's site

| What | Where |
|---|---|
| Name, address, phone, WhatsApp link, hours, Instagram | `src/data.js` (`STUDIO`) |
| Wordmark | `src/components/Top.jsx` |
| Reviews, artists, prices in FAQ, stats, styles, stories | `src/data.js` |
| Photos (free-license stock) | `public/images/` (`demo-*.jpg`), `public/img/` (process photos) |
| Colours and fonts | `src/index.css` (`@theme`), `index.html` |
| SEO for launch: remove `noindex` in `index.html`, add real title/description, sitemap, structured data, share image | `index.html`, `public/` |

There is no admin panel in this variant: content lives in `src/data.js`.
See `CREDITS.md` for photo sources.
