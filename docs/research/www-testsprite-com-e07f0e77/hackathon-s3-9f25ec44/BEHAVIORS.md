# Behaviors

## Interaction model

The page is a static marketing document with normal vertical scrolling. No Lenis, Locomotive Scroll, scroll-snap, CSS scroll timeline, tabs, carousel, or automatic content cycling was detected.

## Scroll sweep

- Header wrapper: `position: sticky; top: 0; z-index: 50`.
- Header height is `70.59375px` at 1440px and approximately `61px` at 768px/390px.
- Comparing `scrollY` 0, 200, and 2000 showed no style or class change: background stays `rgb(245, 250, 242)`, shadow stays `none`, and height stays constant.
- Page length: `10762px` at 1440×1000, `12627px` at 768×1024, and `12647px` at 390×844.
- No scroll-triggered entrance animation was observed. Content remains opacity `1` with transform `none`.

## Header interactions

### Desktop Solutions flyout

- Trigger: click or hover the `Solutions` button.
- Content: MCP Server, Backend Testing, Frontend Testing, Data Testing, AI Agent / Model Testing.
- Open geometry at 1440px: fixed portal at `x: 304px`, `y: 55px`, `642×288px`, `z-index: 50`.
- Surface: `rgb(245, 250, 242)`, `1px solid rgba(0,0,0,0.1)`, marketing multi-layer shadow, four `6×6px` green corner marks.
- Enter/exit: opacity/zoom (`95% → 100%`) plus `translateY(-8px → 0)` using the existing 150ms swift easing.

### Mobile navigation

- At widths below approximately 810px the desktop navigation/actions are replaced by an `Open menu` button.
- Clicking opens a modal navigation panel and changes the control to `Close menu` with `aria-expanded=true`.
- The panel contains Solutions, Pricing, Docs, Blog, About, Hackathon, Sign In, Schedule a Call, and Get Started Free.

## Other controls

- Footer theme control has System, Light, and Dark radio states. The captured target is Light.
- Language button opens a locale selector; English is the selected visible label.
- Main CTA/link clicks navigate to the exact extracted external or same-site URLs. No form or local modal is present in the main page.

## Hover sweep

- Primary buttons: green background darkens `#4d8c58 → #396641` over 150ms.
- Dark buttons: opacity/background adjusts over 150ms.
- Underlined links: opacity `1 → 0.8` over 150ms or text green `#4d8c58 → #030303`.
- Past event cards use a 150ms overlay/background transition and preserve square geometry.
- Header/footer navigation links use a 150ms color or opacity transition.

## Responsive sweep

- 1440px: 1200px-centered desktop canvas, multi-column section grids, three event cards, full navigation.
- 768px: deliberately compact 350px-centered canvas; it does not use the desktop grids because the source `sm` breakpoint is approximately 810px.
- 390px: 332px-wide content canvas, 24px page gutters, one-column stacks, full-width hero buttons, mobile menu.
- The page becomes desktop-like from approximately 1200px; intermediate large/tablet layouts use the target's custom breakpoints rather than Tailwind defaults.
