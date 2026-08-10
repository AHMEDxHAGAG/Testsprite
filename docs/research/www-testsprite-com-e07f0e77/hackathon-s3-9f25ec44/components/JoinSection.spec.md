# JoinSection Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/JoinSection.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-join.png`
- **Interaction model:** two external CTA links

## DOM Structure
Section `id="how-to-join"` → standard bordered container → left heading panel plus right two-row instruction cards → decorative grid strip.

## Computed Styles
- Desktop total height about `568px`; upper grid has two equal columns and height about `393px`.
- Left panel padding `96px 24px`; eyebrow mono 16px green; h2 `46px/50.6px` weight 600, three lines; `in.` green.
- Right column has two equal bordered cards, each padding `32px`.
- Card title Inter `22px/24.2px` weight 400; description mono `16px/22.4px` gray, margin-top 12px; emphasized snippets use black.
- CTA is black square-cornered, mono 14px, padding `12px 16px`, margin-top 20px; hover opacity/background transition 150ms.
- Decorative bottom band about `175px`, green-alpha grid with corner markers.

## Text Content
// Join
Two steps and you're in.
Step 1 // Follow @TestSprite on X
Announcements, countdowns, and winner reveals go out on X first.
Follow on X
Step 2 // Join the Discord
Rules, submissions, polls, Q&A. CLI quickstart pinned in #hackathon-info.
Join Discord

## Links
- X: `https://x.com/test_sprite`
- Discord: `https://discord.com/invite/GXWFjCe4an`
Both open in a new tab with safe rel.

## Responsive Behavior
- Desktop: equal heading/instructions columns.
- Below 810px stack heading and two cards inside the 350px/332px container; compact total height about `547px`.
- Compact heading padding `48px 24px`, h2 `22px/24.2px`; card padding 24px; decorative band about 47px.
