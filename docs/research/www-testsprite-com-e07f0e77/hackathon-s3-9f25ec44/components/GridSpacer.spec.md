# GridSpacer Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/GridSpacer.tsx`
- **Screenshot reference:** bottom strip in `original-section-loop.png`
- **Interaction model:** static/decorative

## DOM Structure
Decorative section → standard container → one empty grid-pattern panel with square green corner markers. Mark the artwork `aria-hidden="true"`.

## Computed Styles
- Desktop: outer padding `0 128px`, inner width `1174px`, height `138px`, one-pixel border.
- Use the shared `.testsprite-grid-bg` pattern, pale green surface, border color `rgba(0,0,0,.06)` and four 6px `.testsprite-marker` squares at the corners.
- Compact: standard centered 350px/332px container and `47px` height.

## Responsive Behavior
Height switches from `47px` to roughly `138px` at the 1200px breakpoint. No content or behavior.
