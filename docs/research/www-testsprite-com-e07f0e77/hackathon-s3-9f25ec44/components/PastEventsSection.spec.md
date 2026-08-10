# PastEventsSection Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/PastEventsSection.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-past-events.png`
- **Interaction model:** three full-card external links

## DOM Structure
Section `id="past-events"` → standard bordered container → heading → three event cards in a grid → bottom breathing space. Each entire card is a semantic link.

## Computed Styles
- Desktop total height about `868px`; outer padding `0 128px`; inner `1174px`.
- Heading padding `96px 24px 24px`; h2 `46px/50.6px`, weight 600; bottom border.
- Cards grid: three columns about `390.7px`; shared one-pixel borders; card content padding `12px` after a large square/portrait crop.
- Images are about `366×420px` on desktop, `object-fit:cover`, aligned top.
- Card title Inter `22px/24.2px` weight 400, clamped to two lines. Description mono `14px/19.6px` gray, clamped to two lines.
- Link hover subtly lowers image opacity or lifts contrast over 150ms; no rounded corners.

## Assets / Links / Text
- `images/aws-anthropic-datadog-event.png` → `https://luma.com/n84hk0l9` — `AWS x Anthropic x Datadog GenAI...` — `Join us for an immersive, hands-on hackathon featuring builders shipping with the leading GenAI stack.`
- `images/testsprite-ai-dev-event.png` → `https://luma.com/wz634w2s` — `TestSprite AI Dev Hackathon: Building...` — `Join us for a full-day AI-powered hackathon focused on building production-ready dev tooling.`
- `images/sf-ai-vibe-coding-event.png` → `https://luma.com/f13dwefh` — `SF AI Vibe Coding Hackathon` — `Join us for future of coding — one-day SF event collaborating with the AI builder community.`
All links open in a new tab with safe rel.

## Responsive Behavior
- Desktop: three cards in one row.
- Below 810px stack the cards in the 350px/332px container with a shorter landscape crop around 230px; compact total height about `1062px`.
- Compact heading padding `56px 24px 20px`, h2 `22px/24.2px`, card titles 18–20px.
