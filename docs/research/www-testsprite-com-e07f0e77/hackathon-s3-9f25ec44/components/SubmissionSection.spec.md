# SubmissionSection Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/SubmissionSection.tsx`
- **Screenshot:** `docs/design-references/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/original-section-submission.png`
- **Interaction model:** static

## DOM Structure
Section → standard bordered container → decorative grid band → centered heading → LOOP.md explainer/media row → two-step submit preface → two large proof cards with screenshots.

## Computed Styles
- Desktop total height about `1715px`; outer padding `0 128px`; inner width `1174px`.
- Decorative band `156px`, dense 1px green-alpha grid, corner markers.
- Center heading block about `250px`, padding `72px 24px`, centered; h2 `46px/50.6px`.
- LOOP row about `399px`, two equal visual halves, shared borders; copy padding `48px`; image panel centers `s3-loopmd-light.png` at roughly `494×450px`, clipped naturally.
- Card title `29px/31.9px` weight 600; body mono `14px/19.6px`; proof note green.
- Submit preface grid `2fr 3fr`, gap `48px`, padding `24px`, height about `94px`.
- Proof cards grid two columns, each `586×678px`, padding `32px`, shared border. h3 `29px/31.9px`; body mono `16px/22.4px`; screenshot uses negative 32px side/bottom margins and full card width.

## Assets
- `images/s3-loopmd-light.png`
- `images/s3-github-repo-light.png`
- `images/s3-submit-checklist-light.png`

## Text Content
// How to Submit
What Goes Where.
The agent writes LOOP.md.
One plain-English line per iteration: maker first, then what ran, what broke, what got fixed. Your agent writes it as the loop runs. No hand-writing. Judges read this first.
Backed by your commit history + the platform run history, so the log is fast to read and easy to trust.
Two steps to submit
Your repo carries the proof the loop ran. Your Discord post is the entry that registers you. Both need to be in before the deadline.
01 // In your GitHub repo
Your source, an agent-written LOOP.md, and a README with the app and live URL.
02 // Post in Discord #hackathon-submissions
Your live URL, public repo link, and TestSprite account. Demo video optional.

## Responsive Behavior
- Desktop has split LOOP row and two proof cards.
- Below 810px all content stacks in the 350px/332px container; decorative band is shorter, copy uses 24px padding, images stay full-width.
- Compact total height about `1665px`; h2 `22px/24.2px`, h3 `20px/22px`.
