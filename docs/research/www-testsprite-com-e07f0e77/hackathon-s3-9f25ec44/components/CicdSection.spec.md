# CicdSection Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/CicdSection.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-cicd.png`
- **Interaction model:** external documentation link

## DOM Structure
Section → standard bordered container → intro heading row → split explanation/code row.

## Computed Styles
- Desktop total height about `568px`; intro grid `7fr 3fr`, gap `48px`, padding `24px`, height about `192px`.
- Eyebrow mono 16px green; h2 `46px/50.6px` weight 600; optional-point label mono 14px green.
- Body row grid `2fr 3fr`, widths about `469px/703px`, height `376px`.
- Explanation panel padding `32px`; h3 `29px/31.9px` weight 400; body mono `16px/26px` gray; link mono 16px green and underlined.
- Code panel padded `24px 64px`; `pre` about `638×312px`, padding `12px 16px`, green border, pale background, mono `16px/26px`, overflow-x auto.

## Text Content
// Go further
Wire the checker into CI/CD.
+5 Innovation points · optional
The loop, on autopilot.
Gate a GitHub Actions pipeline on TestSprite. Every push reruns your tests and fails the build if something breaks. One workflow file, one secret. The stickiest way to keep the checker working long after the hackathon.
Read the CI guide →

Code block:
`# .github/workflows/testsprite.yml`
`on: pull_request`
`env:` with `TESTSPRITE_API_KEY` and `PROJECT_ID`
install `@testsprite/testsprite-cli`, then run `testsprite test run --all --project "$PROJECT_ID" --wait --output json`, with the two explanatory comments shown in the source.

## Link
`https://docs.testsprite.com/cli/integrations/ci-cd` (new tab, safe rel).

## Responsive Behavior
- Desktop: split explanation/code row.
- Below 1200px stack body panels; below 810px standard 350px/332px container.
- Compact total height about `740px`; h2 `22px/24.2px`, h3 `20px/22px`; code panel padding 16px and code `12px/19px`.
