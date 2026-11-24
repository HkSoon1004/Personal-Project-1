---
name: "Intercom Editorial — Bootcamp Commerce"
description: "Warm cream editorial canvas with floating white product cards, charcoal primary ink, and restrained Fin Orange AI accents."
---

## Overview

The platform adopts an editorial, calm, and product-focused aesthetic anchored by a soft cream-white canvas (`#f5f1ec`) rather than pure white. White floating cards (`#ffffff`), thin hairline dividers (`#d3cec6`), and crisp charcoal typography (`#111111`) create depth through surface contrast rather than drop shadows.

- **Audience & Personality:** Aspiring developers, designers, and PMs evaluating intensive career bootcamps. Calm, confident, and transparent — letting real curriculum previews, cohort schedules, and graduate outcomes speak without hype.
- **Typography Strategy:** **Inter** (substituting for proprietary Saans) carries the entire UI hierarchy at weight 500 for display and 400 for body, with tight negative tracking on display headlines. **JetBrains Mono** (substituting for SaansMono) is reserved strictly for code snippets and cohort schedule/telemetry data inside product UI previews.
- **Chromatic Restraint:** Charcoal (`#111111`) is the system primary for headlines, body text, and primary CTAs. **Fin Orange** (`#ff5600`) is reserved exclusively for AI/career-coaching highlights and featured status badges — never as a generic section background or decorative fill.

## Colors

Warm cream ground (`canvas`) paired with pure white floating cards (`surface-1`) and charcoal ink (`ink`).

- **Primary (`primary`):** Charcoal `#111111` for primary CTAs, headlines, and featured cards.
- **Fin Orange (`fin-orange`):** `#ff5600` reserved for AI-assisted learning badges and Fin-accented CTAs.
- **Surfaces:** `canvas` (`#f5f1ec`), `surface-1` (`#ffffff`), `surface-2` (`#ebe5dd`), `inverse-canvas` (`#000000`).
- **Hairlines:** `hairline` (`#d3cec6`) for card borders and `hairline-soft` (`#e5e0d8`) for subtle row dividers.
- **Text:** `ink` (`#111111`), `ink-muted` (`#626260`), `ink-subtle` (`#7b7b78`), `ink-tertiary` (`#9c9fa5`).

```yaml
colors:
  canvas: "#f5f1ec"
  on-canvas: "#111111"
  surface-1: "#ffffff"
  on-surface-1: "#111111"
  surface-2: "#ebe5dd"
  on-surface-2: "#111111"
  primary: "#111111"
  on-primary: "#ffffff"
  fin-orange: "#ff5600"
  ink: "#111111"
  ink-muted: "#626260"
  ink-subtle: "#7b7b78"
  ink-tertiary: "#9c9fa5"
  hairline: "#d3cec6"
  hairline-soft: "#e5e0d8"
  inverse-canvas: "#000000"
  inverse-ink: "#ffffff"
  inverse-ink-muted: "#a3a3a3"
  semantic-error: "#dc2626"
  semantic-success: "#15803d"
  report-blue: "#2563eb"
  report-green: "#16a34a"
  report-pink: "#db2777"
  report-lime: "#65a30d"
  report-orange: "#f97316"
  brand-blue: "#0007cb"
```

## Typography

**Inter** (weights 400 and 500) carries display, headings, body, eyebrows, and buttons. **JetBrains Mono** (weight 400) is used inside product UI mockups and code/data readouts. Eyebrows use sentence case at 14px / 500 weight — never all-caps tracked labels.

```yaml
typography:
  display-xl:
    fontFamily: "Inter"
    fontSize: 72px
    fontWeight: 500
    lineHeight: 76px
    letterSpacing: -2.0px
  display-xl-mobile:
    fontFamily: "Inter"
    fontSize: 32px
    fontWeight: 500
    lineHeight: 36px
    letterSpacing: -0.8px
  display-lg:
    fontFamily: "Inter"
    fontSize: 56px
    fontWeight: 500
    lineHeight: 62px
    letterSpacing: -1.4px
  display-lg-mobile:
    fontFamily: "Inter"
    fontSize: 30px
    fontWeight: 500
    lineHeight: 34px
    letterSpacing: -0.6px
  display-md:
    fontFamily: "Inter"
    fontSize: 40px
    fontWeight: 500
    lineHeight: 46px
    letterSpacing: -0.8px
  display-md-mobile:
    fontFamily: "Inter"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 33px
    letterSpacing: -0.4px
  headline:
    fontFamily: "Inter"
    fontSize: 28px
    fontWeight: 500
    lineHeight: 34px
    letterSpacing: -0.5px
  card-title:
    fontFamily: "Inter"
    fontSize: 22px
    fontWeight: 500
    lineHeight: 28px
    letterSpacing: -0.3px
  subhead:
    fontFamily: "Inter"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: -0.2px
  body-lg:
    fontFamily: "Inter"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 27px
    letterSpacing: -0.1px
  body:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 21px
    letterSpacing: 0px
  caption:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 17px
    letterSpacing: 0px
  button:
    fontFamily: "Inter"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: 0px
  eyebrow:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 18px
    letterSpacing: 0px
  mono:
    fontFamily: "JetBrains Mono"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 20px
    letterSpacing: 0px
```

## Layout & Spacing

The layout uses a **Fixed-Max-Width Grid** (1280px max content width) on desktop, collapsing to 2-up at 1024px and 1-up below 768px. An 8px base spacing unit (with a 4px half-step) governs all padding, gaps, and section rhythm (`96px` vertical breathing room between major sections).

```yaml
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px
```

## Elevation & Depth

Drop shadows are deliberately avoided. Depth is communicated exclusively through surface contrast:

- **Level 0 (Flat):** Default body copy, hero text, and footer sit directly on `canvas` (`#f5f1ec`).
- **Level 1 (Lift on Cream):** Feature cards, cohort cards, and product mockup frames use `surface-1` (`#ffffff`) on `canvas`.
- **Level 2 (Hairline Lift):** Interactive tiles and secondary containers pair `surface-1` with a 1px `hairline` (`#d3cec6`) border.
- **Level 3 (Deep Accent):** Testimonial / graduate quote callout strip uses `inverse-canvas` (`#000000`) with `inverse-ink` (`#ffffff`).

## Shapes

Card corners stay modest at `12px` (`lg`) and `16px` (`xl`). CTAs use `8px` (`md`) — never pill-rounded. Pills (`9999px`) are reserved for tab toggles and circular avatars.

```yaml
rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  pill: 9999px
  full: 9999px
```

## Motion & Micro-interaction

Motion is crisp and understated. Interactive state changes (button hover, tab switches) land within 100ms, while surface transitions settle in 200ms. Nothing loops or animates purely for decoration.

```yaml
motion:
  state-change:
    duration: 100ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 200ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
  surface-exit:
    duration: 150ms
    delay: 0ms
    timingFunction: cubic-bezier(0.3, 0, 1, 1)
```

## Voice & Content Strategy

- **Tone of Voice:** Clear, editorial, and grounded. State concrete cohort dates, remaining seats, and tuition in `0,000,000원` format rather than marketing hype.
- **Capitalisation & Labels:** Sentence case for eyebrows and headings. Action buttons use clear verb-first Korean labels (`과정 둘러보기`, `지원하기`, `결제하기`).
- **Formatting:** Currency uses `0,000,000원`, dates use `YYYY.MM.DD` (Asia/Seoul).

## Do's and Don'ts

- **Do:** Keep `canvas` (`#f5f1ec`) as the page ground; lift cards onto `surface-1` (`#ffffff`); use 1px `hairline` borders; pair `Inter` 500 display with 400 body.
- **Don't:** Never use pure white as the page canvas; never add drop shadows to floating cards; never pill-round CTAs; never use all-caps tracked eyebrows; never combine charcoal CTAs and Fin Orange CTAs in the same viewport; never use Fin Orange decoratively.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Badge** → `@components/badge.html`: `badge-numeric`, `badge-dot`
- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Tabs** → `@components/tabs.html`: `tabs-horizontal`, `tabs-with-icon`
