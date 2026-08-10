# Design Tokens

All values below were read from the live page with `getComputedStyle()` in light mode.

## Palette

- Page/header/footer background: `rgb(245, 250, 242)` / `#f5faf2`
- Lifted/card background: `rgb(251, 254, 251)` / `#fbfefb`
- Primary text: `rgb(3, 3, 3)` / `#030303`
- Secondary text: `#859189`
- Muted/icon text: `#6b776e`
- Highlight green: `rgb(77, 140, 88)` / `#4d8c58`
- Green hover: `#396641`
- Green pressed: `#28402c`
- Default border: `#d9d9d059`
- Strong border: `#396641`
- Green alpha surface: `#54b3651a`

## Typography

- Marketing sans: `Inter, sans-serif`
- Monospace UI: `"Geist Mono", "IBM Plex Mono", ui-monospace, monospace`
- Desktop hero/section headline: `46px / 50.6px`, weight `600`, letter spacing `-1.15px`
- Compact hero headline at 768px and 390px: `24px / 26.4px`, weight `600`, letter spacing `-0.6px`
- Compact section headline: `22px / 24.2px`, weight `600`, letter spacing `-0.55px`
- Desktop card title: `29px / 31.9px`, weight `600`, letter spacing `-0.725px`
- Compact card title: `20px / 22px`, weight `600`, letter spacing `-0.5px`
- Body/label copy: `16px / 22.4px`, letter spacing `-0.64px`
- Small body/label copy: `14px / 19.6px`, letter spacing `-0.56px`
- Compact CTA copy: `12px / 16.8px`, weight `500`, letter spacing `-0.48px`

## Layout

- Desktop outer section padding at 1440px: `128px` per side.
- Compact outer section padding: `24px` per side.
- Main inner maximum width: `1200px`; observed content width at 1440px is `1174px` after the vertical scrollbar and outer padding.
- Compact inner maximum width: `350px`; observed width is `332px` at a 390px viewport and exactly `350px` at 768px.
- The target's responsive aliases switch at approximately `810px` and `1200px`; 768px intentionally uses the centered compact layout.
- Common desktop grid gap: `48px`; compact grid gap: `32px`.
- Borders are square with `border-radius: 0px` throughout the event page.
- Section art uses one-pixel grid lines and square green corner markers.

## Primary button

- Desktop: `display: flex`, `padding: 16px 20px`, `gap: 8px`, `font: 500 16px/22.4px Geist Mono`, `background: #4d8c58`, `color: #f5faf2`, `border-radius: 0px`.
- Compact: `padding: 8px 12px`, `font-size: 12px`, `line-height: 16.8px`, and full available width in the hero.
- Hover: background `#4d8c58 → #396641`.
- Active: background `#396641 → #28402c`.
- Transition: color/background/border/shadow/opacity, `150ms cubic-bezier(0.5, 0, 0, 1)`.

## Assets and fonts

- Inter weights 400/500/600/700 are stored under the page namespace and loaded with `next/font/local`.
- Geist Mono is loaded with `next/font/google` for the monospaced interface labels.
- All original light/dark screenshots, event artwork, painterly backgrounds, SEO assets, and hackathon diagrams are stored under `public/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/`.
