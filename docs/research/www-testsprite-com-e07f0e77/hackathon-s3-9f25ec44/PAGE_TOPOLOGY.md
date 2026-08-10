# Page Topology

The root `.testsprite-hackathon-page` owns the pale-green background and Inter typography. A sticky header overlays the normal-flow main document; the footer follows the final CTA.

| Order | Component | Desktop top/height | Mobile top/height | Interaction model |
| --- | --- | ---: | ---: | --- |
| 0 | SiteHeader | `0 / 71px` | `0 / 61px` | sticky; flyout/menu controls |
| 1 | HeroSection | `71 / 608px` | `61 / 885px` | static links with hover |
| 2 | PrizePoolSection | `678 / 1023px` | `946 / 1158px` | static |
| 3 | LoopStepsSection | `1702 / 656px` | `2105 / 784px` | static four-step diagram |
| 4 | GridSpacer | `2358 / 138px` | `2888 / 47px` | static decorative spacer |
| 5 | InstallSection | `2496 / 386px` | `2936 / 740px` | static plus external GitHub link |
| 6 | SubmissionSection | `2882 / 1715px` | `3675 / 1665px` | static layered diagram/images |
| 7 | ChecklistSection | `4597 / 733px` | `5340 / 1191px` | static cards plus GitHub link |
| 8 | JudgingSection | `5330 / 782px` | `6531 / 865px` | static scoring grid |
| 9 | CicdSection | `6112 / 568px` | `7396 / 740px` | static code panel plus docs link |
| 10 | TimelineSection | `6680 / 1271px` | `8136 / 1069px` | static vertical timeline |
| 11 | JoinSection | `7951 / 568px` | `9205 / 547px` | two external CTA links |
| 12 | PastEventsSection | `8519 / 868px` | `9752 / 1062px` | three external event cards |
| 13 | FinalCtaSection | `9388 / 685px` | `10814 / 377px` | two external CTA links |
| 14 | SiteFooter | starts `10073px` | starts `11191px` | links, theme radios, locale menu |

## Dependencies

- Every section uses a shared `HackathonContainer` width model and the shared color/typography tokens.
- Hero, prize pool, submission, timeline, past events, and final CTA depend on namespaced local assets.
- Header and footer share logo/icon primitives.
- No section owns cross-section state. Header menu/flyout state and footer locale state are local to their components.
