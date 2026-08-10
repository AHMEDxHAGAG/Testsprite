# ChecklistSection Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/ChecklistSection.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-checklist.png`
- **Interaction model:** GitHub link inside the first card

## DOM Structure
Section → standard bordered container → heading row → six-card checklist grid.

## Computed Styles
- Desktop total height about `733px`; heading grid `7fr 3fr`, gap `48px`, padding `96px 24px 24px`, height about `213px`.
- h2 `46px/50.6px` weight 600; eyebrow mono 16px green.
- Cards: three columns (`390.7px`) × two rows (~260px), one-pixel shared borders.
- Card padding `32px`; badge mono 12–14px green in a subtle green-alpha grid box; h3 `29px/31.9px` weight 400; body/link mono `16px/22.4px` gray/green.
- Square corners throughout; GitHub link underlined, 150ms opacity transition.

## Text Content
// Prerequisites
The Checklist.
TestSprite CLI — Required — Install from GitHub · Node ≥ 20 · paid plan via promo code.
Public URL — Required — The CLI tests in the cloud, no localhost. Deploy early, keep it live the whole build.
Public Repo — Required — Source in a public repo. Commit history is the proof the loop ran.
LOOP.md — Required — Agent-written, one line per iteration. No log = invalid submission.
README — Required — App, live URL, and what the loop covered.
Demo Video — Optional — Encouraged. Link it in Discord. Boosts ranking.

## Link
`https://github.com/TestSprite/testsprite-cli` (new tab, safe rel).

## Responsive Behavior
- Desktop: 3×2 grid.
- Tablet can use 2 columns; below 810px one column in 350px/332px container.
- Compact total height about `1191px`; heading padding 56px 24px 24px; h2 `22px/24.2px`, h3 `20px/22px`, cards padding 24px.
