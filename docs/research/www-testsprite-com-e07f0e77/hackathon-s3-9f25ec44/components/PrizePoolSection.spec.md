# PrizePoolSection Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/PrizePoolSection.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-prize-pool.png`
- **Interaction model:** static

## DOM Structure
Section → container → bordered centered intro with decorative connector → two-column award grid. Each award card has copy plus its original full-width diagram.

## Computed Styles
### Section/container at 1440px
- section: `padding:0 128px; width:1430px; height:1023.48px`
- container: `width:1174px; max-width:1200px`
- intro border box: `width:1174px; height:313.375px; border:1px solid rgba(0,0,0,.06)`
- centered intro: `display:flex; flex-direction:column; align-items:center; gap:16px; padding:80px 24px 0; height:263.375px; text-align:center`
- awards grid: `display:grid; grid-template-columns:586px 586px; height:710.109px; border-inline/bottom:1px solid rgba(0,0,0,.06)`
- each award card: `padding:32px; width:586px; height:709.109px`; first has a right divider.

### Typography
- eyebrow: mono 16px/22.4px green.
- h2: `46px/50.6px`, weight 600, letter-spacing `-1.15px`; `$5,000` portion green.
- subtitle: mono 16px/22.4px secondary.
- pill: mono 16px, green-alpha grid background, green border.
- card h3: `29px/31.9px`, weight 600.
- green meta: mono 16px/22.4px.
- body: mono 16px/22.4px, secondary, margin-top 12px.

## States & Behaviors
N/A beyond static light/dark asset selection.

## Assets
- Project Awards layers: `images/hero-bg-light.png` behind `images/s3-prize-tiers-light.png`.
- CLI Improvement Bonus: `images/s3-cli-bonus-light.png`.
- Keep dark equivalents in the local namespace but light is the captured state.

## Text Content
// Prize Pool
$5,000 total.
Build the best loop, or make the CLI better while you build.
Two ways to win
Project Awards — $3,000 · 5 winners
Best projects built with the CLI in a real testing loop. Judged on the loop, not polish or pitch.
CLI Improvement Bonus — $2,000 pool · standing bounty
Separate from judging. Cash for merged improvements, doesn't affect your Project Award score.

## Responsive Behavior
- **1440px:** two equal award cards; section about 1023px tall.
- **768px / 390px:** centered 350px/332px canvas, intro padding 32px, award cards stack, padding 24px, diagrams full width, section about 1191px/1158px tall.
- **Breakpoint:** two-card layout begins at approximately 810px.
