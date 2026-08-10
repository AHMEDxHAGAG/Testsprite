# FinalCtaSection Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/FinalCtaSection.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-final-cta.png`
- **Interaction model:** Discord and X external CTAs

## DOM Structure
Section → standard container → painterly artwork frame → centered pale CTA panel.

## Computed Styles
- Desktop section about `685px`; outer padding `0 128px`; inner `1174px`, top/bottom border.
- Artwork frame height about `514px`, background `images/hero-bg-light.png` cover, padding `46px 80px 78px`.
- CTA panel roughly `1015×390px`, pale background, centered flex column, padding `64px`, marketing shadow.
- h2 `46px/50.6px` weight 600; `Whole Loop.` green. Body mono `16px/22.4px` gray, max-width `620px`, text-centered, margin-top 16px.
- Buttons row margin-top 34px, gap 12px. Primary green and secondary pale with 1px green border; both mono 16px and `16px 20px` padding, 150ms hover transitions.
- Leave the lower section area pale to create the target's shadow/breathing space before footer.

## Text Content
Build the Whole Loop.
Including the half most people skip. Install the CLI, wire it in as your checker, then let your agent loop. Follow on X and join Discord, where everything happens.
Join Discord Now
Follow @TestSprite on X

## Links
- Discord: `https://discord.com/invite/GXWFjCe4an`
- X: `https://x.com/test_sprite`
Both open in a new tab with safe rel.

## Responsive Behavior
- Compact 350px/332px container; section about `377px`.
- Artwork padding 20px 12px, panel padding `40px 20px`, h2 `24px/26.4px`, body `12px/18px`; buttons stack full-width.
- Preserve square corners and visible painterly frame on every side.
