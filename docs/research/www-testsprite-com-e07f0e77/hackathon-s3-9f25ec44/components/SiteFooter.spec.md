# SiteFooter Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/SiteFooter.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-footer.png`
- **Interaction model:** navigation/social links plus presentational theme and locale controls

## DOM Structure
Footer → standard bordered container → five-column link grid → bottom utility row → oversized faint TestSprite wordmark. Use the shared logo/icon primitives where appropriate.

## Computed Styles
- Desktop footer begins around page y `10073px`; outer padding `0 128px`; inner width `1174px` with border-inline.
- Link grid columns: `235px` update panel plus four equal categories; min-height about `386px`, one-pixel shared borders.
- Update panel/card padding `24px 16px`; title `29px/31.9px`; black full-width Discord link; SOC2 image centered below at about `98px` square.
- Category cells padding `80px 24px 32px`; heading mono 16px green; links Inter 16px with 18–20px vertical gaps and 150ms opacity transitions.
- Utility row min-height `84px`, border-top/bottom; social squares left, theme/locale/copyright right. Controls use 48–50px square border boxes, mono 14px. Captured theme is light; controls may remain accessible presentational buttons without persisting settings.
- Oversized outlined/faint `TestSprite` wordmark occupies the final ~220px and may be implemented as text with transparent fill, thin border-like text stroke, opacity around .08; `aria-hidden`.

## Link Content
Stay Updated → Join Discord (`https://discord.com/invite/GXWFjCe4an`)
Solutions: MCP Server `/solutions/mcp`; Backend Testing `/solutions/backend`; Frontend Testing `/solutions/frontend`; Data Testing and AI Agent/Model Testing may point to `https://calendly.com/contact-hmul/schedule`.
Resources: Docs `https://docs.testsprite.com/`; Changelog `/changelog`; Hackathon `/hackathon-s3`; Discover `/discover`.
Company: About `/about`; Blog `/blog`; Use Cases `/use-cases`.
Legal: Terms & Conditions `/terms`; Privacy Policy `/privacy`.
Social: YouTube `https://youtube.com/@testsprite`; X `https://x.com/test_sprite`; GitHub `https://github.com/testsprite`; LinkedIn `https://linkedin.com/company/testsprite`.
Utility text: English; Copyright © 2026 TestSprite.

## Assets
- `images/soc2-light.png` for the captured light theme.

## Responsive Behavior
- Desktop: five-column links and horizontal utility row.
- Below 810px use the 350px/332px standard container, stack the update panel and all four category cells in one column, then stack/wrap utilities. Keep borders shared.
- Footer should visually continue the page's pale background; compact typography 12–14px and oversized mark scaled to fit.
