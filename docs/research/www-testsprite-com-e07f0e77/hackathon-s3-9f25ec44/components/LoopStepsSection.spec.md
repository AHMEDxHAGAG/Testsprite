# LoopStepsSection Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/LoopStepsSection.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-loop.png`
- **Interaction model:** static

## DOM Structure
Section `id="how-it-works"` → bordered container → eyebrow/headline row → 2×2 numbered step grid → compact maker/checker legend and note. Do not include the following decorative spacer.

## Computed Styles
- Desktop section: outer padding `0 128px`, height about `656px`; inner `1174px`, border-inline.
- Header: grid `7fr 3fr`, gap `48px`, padding `112px 24px 24px`, bottom border, height about `167px`.
- h2: `46px/50.6px`, weight 600, letter spacing `-1.15px`; eyebrow mono 16px green.
- Step grid: two columns, two rows, `586px` cells, total height about `308px`; shared one-pixel borders.
- Step: relative, min-height `154px`, padding `32px`; role mono 14px green, h3 `29px/31.9px` weight 400, body mono `16px/22.4px` gray, max-width `420px`.
- Large step numbers: absolute right/bottom, Inter roughly `88px`, weight 600, pale green/10%, decorative and non-interactive.
- Footer row: padding `24px 32px`, mono `14px/19.6px`; legend left, warning note right in gray.

## Text Content
// The Loop
Four Steps. One Repeats.
01 Maker — Write — Your coding agent ships code. Claude Code, Codex, Antigravity, whatever you build with.
02 Checker — Verify — The TestSprite CLI runs real tests against your live app and returns verdicts.
03 Maker — Fix — Agent reads the failure bundle and fixes the root cause.
04 Checker — Verify Again — Rerun. Pass banks. Then back to the top.
Maker: your coding agent; Checker: TestSprite CLI
a loop with no real checker doesn't fail loudly. It hallucinates progress.

## Responsive Behavior
- At 1440px use the two-column heading and 2×2 steps.
- Below 1200px use a single-column heading; below 810px stack all four steps in one column inside the 350px/332px container.
- Compact section height is about `784px`; use 24px card padding, h2 `22px/24.2px`, h3 `20px/22px`, smaller `56px` numbers, and stack legend/note.
