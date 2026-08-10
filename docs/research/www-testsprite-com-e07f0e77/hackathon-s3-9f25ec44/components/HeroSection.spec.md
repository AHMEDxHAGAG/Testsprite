# HeroSection Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/HeroSection.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-hero.png`
- **Interaction model:** static; standard link hover transitions

## DOM Structure
Section → bordered container → two-column intro grid (copy + framed CLI image) → four-stat grid.

## Computed Styles
### Section/container at 1440px
- section: `padding:0 128px; width:1430px; height:607.688px`
- container: `width:1174px; max-width:1200px; height:607.688px; border-inline:1px solid rgba(0,0,0,.06)`
- intro grid: `display:grid; grid-template-columns:586px 586px; width:1172px; height:450.703px`
- copy panel: `display:flex; flex-direction:column; justify-content:center; padding:48px`
- media frame: `padding:12px; border-inline/bottom:1px solid rgb(77,140,88); width:586px`
- media inner: painterly `frontend-content.png` background, min-height 320px desktop, centered CLI screenshot in a white 6px frame with marketing shadow and +18px translateY.

### Copy
- status chip: mono `14px/19.6px`, green text, 12px × 6px padding, green-alpha grid background, square green border.
- h1: `46px/50.6px`, weight 600, letter-spacing `-1.15px`, color `#030303`, margin-top 24px.
- paragraph: mono `16px/22.4px`, letter-spacing `-0.64px`, color `#859189`, margin-top 16px.
- CTA row: margin-top 32px, `display:flex; gap:12px`.
- Primary and dark CTA desktop: 16px/22.4px mono, 16px 20px padding; primary `#4d8c58`, dark `#030303`.
- Past-project link: mono 16px, green, underlined, margin-top 24px.

### Stats
- grid: `display:grid; grid-template-columns:repeat(4,293px); width:1172px; height:156.984px`
- cell: `display:flex; flex-direction:column; justify-content:center; padding:40px`, one-pixel shared borders.
- values: `44px/48.4px` semibold on desktop; first value green.
- captions: mono 14px, secondary, margin-top 8px.

## States & Behaviors
- Primary hover `#4d8c58 → #396641`; dark CTA uses 150ms background/opacity transition.
- Underlined link opacity `1 → .8`, 150ms swift.
- Links remain real: Discord, `#how-to-join`, and Discover.

## Assets
- `images/frontend-content.png` background.
- `images/cli-verify-light.png` foreground; keep dark image available but light is the captured state.

## Text Content
Season 3 · Closed · Winners Announced
Build the Loop.
Your agent writes the code. The open-source TestSprite CLI checks it: real tests against your live app, with verdicts your agent acts on. Write, verify, fix, verify.
Join Discord; See How It Works; View Past Projects
$5,000 / Prize Pool; 10 / Days to Build; 5 / Winners; Open Source / CLI · Apache 2.0

## Responsive Behavior
- **1440px:** 2-column intro, 4-column stats, section height about 608px.
- **768px:** centered 350px canvas, one-column intro, buttons stacked/full-width, stats 2×2, section height about 856px.
- **390px:** 332px canvas, copy padding 24px, h1 24px/26.4px, image under copy, stats 2×2, section height about 885px.
- **Breakpoints:** compact below ~810px; 2-column hero begins near 1200px.
