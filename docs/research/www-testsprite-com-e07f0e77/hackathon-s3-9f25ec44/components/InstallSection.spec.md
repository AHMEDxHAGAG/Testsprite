# InstallSection Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/InstallSection.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-install.png`
- **Interaction model:** external GitHub link

## DOM Structure
Section → bordered container → two-column intro → four-column ordered setup grid.

## Computed Styles
- Desktop section about `386px`; outer padding `0 128px`; inner `1174px` with border-inline.
- Intro grid `3fr 2fr`, gap `48px`, padding `24px`, min-height `192px`, bottom border.
- Eyebrow mono 16px green; h2 `46px/50.6px`, weight 600; description mono `16px/26px`, gray.
- Steps grid: four columns of `293px`, height about `194px`.
- Each step has shared borders and `32px` padding; number/label mono `14px/19.6px` green; h3 `22px/24.2px` weight 400; body/link mono `16px/22.4px` gray/green.
- GitHub link is underlined with an arrow and a 150ms opacity transition.

## Text Content
// Start in 3 minutes
Install. Onboard. Loop.
One install, one init, and the CLI installs a verification skill into your agent, so it knows when and how to run the checker. Full commands & docs live in the open-source repo.
01 // Install — Get the CLI — View on GitHub →
02 // Onboard — testsprite setup — API key + agent skill.
03 // Target — Your live URL — The CLI tests in the cloud, point it at your deployed app.
04 // Loop — create · fix · rerun — The agent drives the loop. Every pass banks.

## Link
`https://github.com/TestSprite/testsprite-cli` (new tab, safe rel).

## Responsive Behavior
- Desktop: two-column intro and four equal step cells.
- Below 1200px intro stacks; below 810px all steps stack in the 350px/332px container.
- Compact section height about `740px`; h2 `22px/24.2px`, steps use 24px padding.
