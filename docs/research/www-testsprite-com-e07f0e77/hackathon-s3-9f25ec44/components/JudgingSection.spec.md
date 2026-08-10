# JudgingSection Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/JudgingSection.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-judging.png`
- **Interaction model:** static

## DOM Structure
Section → standard bordered container → heading row → 2×2 score grid → decorative grid band.

## Computed Styles
- Desktop total height about `782px`; heading same `7fr 3fr`, `48px` gap, `96px 24px 24px`, about `213px` high.
- Score grid: two columns (`586px`) × two rows (~206px), shared one-pixel borders, total about `413px`.
- Score card padding `32px`, two-column internal layout with large score at left and copy at right.
- Score: Inter `44px/48.4px` weight 600, green. Title `22px/24.2px` weight 400. Body mono `16px/22.4px` gray.
- Decorative final band about `156px`, shared green-alpha grid and 6px corner markers.

## Text Content
// Judging Criteria
Human Judges.
40 pts — Project Quality — Craft, polish, completeness. Does the live app actually work well?
40 pts — Loop Quality — Did a real loop run, and catch and fix real things? Read from LOOP.md, commits, and runs.
20 pts +5 — Innovation — Creativity of the project or the loop design. Plus 5 for wiring the checker into CI/CD.
∞ Bonus — Engagement — Discord polls, X shares, and long-form write-ups about your loop.

## Responsive Behavior
- Desktop: 2×2 scoring grid.
- Below 810px stack all cards inside the 350px/332px container; compact height about `865px`.
- Compact heading padding 56px 24px 24px; h2 `22px/24.2px`, score ~32px, card padding 24px; decorative band about 47px.
