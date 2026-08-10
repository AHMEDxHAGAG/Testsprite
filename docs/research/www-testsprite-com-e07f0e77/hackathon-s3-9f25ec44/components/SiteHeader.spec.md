# SiteHeader Specification

## Overview
- **Target file:** `src/components/sites/www-testsprite-com-e07f0e77/hackathon-s3-9f25ec44/SiteHeader.tsx`
- **Screenshots:** `original-desktop-1440.png`, `original-header-solutions-open.png`, `original-mobile-menu-open.png`
- **Interaction model:** sticky static header; click/hover desktop flyout; click-driven mobile sheet

## DOM Structure
Sticky wrapper → header → `testsprite-container` flex row → logo, desktop nav, desktop actions, compact menu button. Desktop Solutions opens a portalled flyout. Compact menu opens a full navigation panel.

## Computed Styles
### Wrapper/header at 1440px
- wrapper: `position: sticky; top: 0; z-index: 50; width: 1430px; height: 70.5938px`
- header: `padding: 0 128px; background: rgb(245,250,242); border-bottom: 1px solid rgb(77,140,88)`
- inner: `display:flex; align-items:center; gap:24px; padding:14px 0; width:1174px; max-width:1200px; height:69.5938px`
- logo link: `display:flex; align-items:center; width:152px; height:32px`
- desktop nav: `display:flex; gap:4px; width:504.969px; height:39.5938px`
- desktop action group: `margin-left:auto; display:flex; gap:8px; width:411.953px; height:41.5938px`

### Navigation/content
- Labels: Inter, `14px/19.6px`, weight 500; compact horizontal padding.
- Actions: Sign In is text/ghost, Schedule a Call is bordered, Get Started Free is black.
- All controls square (`border-radius:0`) and use the shared 150ms swift transition.

## States & Behaviors
### Desktop Solutions flyout
- **Trigger:** click or pointer hover on Solutions.
- **Open geometry:** fixed portal at `x:304px; y:55px; width:642px; height:288px; z-index:50`.
- **Surface:** `background:#f5faf2; border:1px solid rgba(0,0,0,.1)` plus marketing shadow and four 6×6 green corner markers.
- **Animation:** fade/zoom from 95% and translateY(-8px), approximately 150ms swift easing.
- **Content:** MCP Server — Context-aware test intelligence; Backend Testing — Test APIs & logic; Frontend Testing — Test UI behavior; Data Testing — Validate your data; AI Agent / Model Testing — Check AI responses.

### Sticky state
- At scrollY 0, 200, and 2000 styles are unchanged: background `#f5faf2`, height `70.5938px`, no shadow.

### Compact menu
- **Trigger:** Open menu button below 1200px; toggles to Close menu and `aria-expanded=true`.
- **Content order:** Solutions, Pricing, Docs, Blog, About, Hackathon, Sign In, Schedule a Call, Get Started Free.
- Use a fixed pale-green sheet below/over the header; lock page scrolling while open.

## Assets
- `TestSpriteLogo`, `MenuIcon`, `CloseIcon`, `ArrowUpRightIcon` from shared icons.

## Text Content
Solutions; Pricing; Docs; Blog; About; Hackathon; Sign In; Schedule a Call; Get Started Free.

## Responsive Behavior
- **1440px:** full nav/actions; 128px outer padding; 70.6px tall.
- **768px / 390px:** 24px outer padding, approximately 61px tall, only logo plus Open menu button.
- **Breakpoint:** desktop header begins at approximately 1200px.
