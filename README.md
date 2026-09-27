# TCF Blanc Simulateur — pixel-perfect clone (Next.js 16)

A pixel-by-pixel recreation of the TCF Blanc Simulateur landing page (screenshots
provided by you), built with **Next.js 16 (App Router) + React 19 + TypeScript** and
plain hand-written CSS (no UI framework).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
# or production:
npm run build && npm start
```

> Note: on this sandbox the Turbopack build was OOM-killed, so build with
> `npm run build -- --webpack` if you hit the same limit.

## What's implemented

- **Fixed sidebar** (247 px + 1 px border): audio-bar logo, "TCF / BLANC SIMULATEUR",
  active "Accueil" item, amber "Guide TCF" item, "Contact", footer link list.
- **Hero**: eyebrow, 3-line Manrope ExtraBold headline with blue accent, lead paragraph.
- **4 test cards** (TCF TP / TCF DAP / TCF CANADA / Expression Écrite):
  glowing icon circles, watermark graphics (audio bars, file icons, world-map —
  the map is embedded as a pixel-extracted PNG data-URI), per-card blue/orange
  gradient footers with "Commencer" buttons, "✨ Nouveau" badge on the orange card.
- **Stats band** with emoji markers (👥 📝 ⭐ ), absolute-positioned columns and
  hairline dividers at the exact measured x-positions.
- **Decor layer**: vertical sky-blue gradient, soft globe SVG with dashed orbit,
  4 dot-grid patches, dark 14 px custom scrollbar.
- **"Créer un compte" modal** — opens when any **Commencer** button is clicked
  (Esc / backdrop / × closes it, body scroll locks, first field auto-focuses with
  the blue focus ring, exactly as in your third screenshot): name, e-mail, country
  select, Homme/Femme toggle buttons, password + confirm with eye icon, helper
  rule, consent checkbox with links, submit button and login footer.

## Responsive behaviour

The ≥1363 px layout stays pixel-identical to the screenshots; below that the page
adapts gracefully:

| Breakpoint   | Layout |
|--------------|--------|
| ≤1180 px     | cards 2-up, card min-height released |
| ≤900 px      | sidebar becomes an off-canvas drawer (fixed top bar with burger + scrim), stats switch to a 2×2 grid with hairline separators, globe/dots repositioned, fluid paddings |
| ≤640 px      | cards 1-up, smaller headline (27/32 px), compact top-bar buttons |
| ≤360 px      | stats 1-col, tagline hidden in the mobile bar |
| ≤600 px      | signup modal becomes a scrollable sheet `min(340px, 100vw − 32px)` |

The drawer closes on scrim tap, any nav tap, or the burger; the modal keeps its
Esc / backdrop / × behaviours and body scroll-lock on every viewport.

## Fidelity notes

- Every colour, radius, gap and font size was sampled from your screenshots
  (e.g. primary `#1b6bff`, ink `#14213d`, borders `#e8eef7`, guide amber
  `#f5d27a → #ffe9ac`, card-footer gradients per card).
- Typography: **Manrope** (400–800) via `next/font`, identified by template-matching
  glyph masks against the screenshots; per-element letter-spacing / `font-kerning`
  calibrated so line widths and wrap points match the originals.
- Verified by automated screenshot diffing at the exact capture viewports
  (1363×633 page, 1358×585 modal): document height 906 px vs 903 px original,
  element positions within ±1–2 px. Residual pixel diff is mostly LCD sub-pixel
  anti-aliasing present in the originals (headless Chrome renders grayscale AA).
- `shot.mjs` (playwright-core) re-captures `shots/top.png`, `shots/bottom.png`
  and `shots/modal.png` for future diffing.
