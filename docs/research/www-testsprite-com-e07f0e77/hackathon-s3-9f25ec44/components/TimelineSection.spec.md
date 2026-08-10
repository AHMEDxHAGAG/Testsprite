# TimelineSection Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/TimelineSection.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-timeline.png`
- **Interaction model:** static

## DOM Structure
Section → standard bordered container → heading block → painterly artwork frame → pale timeline card with season label and six vertical entries.

## Computed Styles
- Desktop total height about `1271px`; outer padding `0 128px`; inner `1174px` with border-inline.
- Heading: padding `56px 24px 24px`, height about `172px`; eyebrow mono 16px green; h2 `46px/50.6px` weight 600; `Ship.` green.
- Artwork frame uses `images/hero-bg-light.png` as a cover background, padding `40px`, min-height about `1099px`.
- Timeline card: pale `#f5faf2`, green one-pixel border, inset grid-pattern season strip about 48px, content padding about `48px 52px`.
- Vertical rail: 1px green line with solid 12px green dots. Each entry uses a two-column desktop layout where date/heading align above mono gray copy.
- Date mono `16px/22.4px` green; title Inter `22px/24.2px` weight 400; detail mono `16px/22.4px` gray. Rows have generous 52–58px vertical separation.
- Final ongoing entry uses a small green outlined `ongoing` badge.

## Text Content
// Execution Timeline
One Week to Ship.
// Season 03
Jun 30 · 5:00 PM PDT — Launch & Setup — Install the CLI, onboard your agent, deploy your app.
Jun 30 – Jul 10 — Build & Loop — Run write → verify → fix against your live app.
Jul 10 · 4:59 PM PDT — Submissions Close — Live URL + repo + LOOP.md + account. Extended from Jul 7, three extra days to build.
Jul 11 – Jul 15 — Review — Every entry against the rubric.
Jul 15 — Winners — Top 5 revealed on X & Discord.
No end date — CLI Improvement Bonus, always open — Separate from hackathon clock. The $2,000 improvement bounty runs until pool exhausted. Open a PR improving CLI any time, even after Jul 16. — ongoing

## Responsive Behavior
- Desktop timeline is inset 40px inside the painterly frame.
- Below 810px use the centered 350px/332px container, artwork padding 12px, card content `28px 20px`, and stack date/title/detail naturally.
- Compact section height about `1069px`; h2 `22px/24.2px`, title `18px/21px`, body 12–14px; keep all six entries legible.
