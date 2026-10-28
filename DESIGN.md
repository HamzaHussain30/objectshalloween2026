---
name: Objects Halloween
description: Shopify app sale on the original forest design foundation.
colors:
  ink: "#0f0a1f"
  surface: "#1c172b"
  line: "#423c50"
  foreground: "#faf8fc"
  muted: "#c3becb"
  pumpkin: "#fd6817"
  pumpkin-hot: "#ff8b50"
  action: "#ba4209"
  action-hover: "#a83806"
  white: "#ffffff"
typography:
  display:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    letterSpacing: "-0.025em"
  title:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.875rem"
    lineHeight: 1.625
rounded:
  compact: "0.375rem"
  icon: "0.5rem"
  card: "0.75rem"
  pill: "9999px"
spacing:
  grid: "1.25rem"
  card: "1.5rem"
  button-inline: "1.75rem"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "0.875rem 1.75rem"
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.white}"
  app-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.card}"
---

# Design System: Objects Halloween

## Overview

The original centered forest design is the foundation. Direct sale copy and actual app screenshots support practical product browsing. DM Sans, dark surfaces and restrained orange emphasis carry the page; the user preferred this foundation over the rejected theatrical campaign redesign.

This record describes current source. Rendered layout, cropping, overflow and browser interactions remain unverified because no browser was available.

## Colors

### Primary

Pumpkin highlights the offer and decorative details; pumpkin-hot highlights reduced prices. Darker action orange supports white CTA text and darkens on hover. Preserve that accessible backing rather than using the brighter brand accent behind small white text.

### Neutral

Ink anchors the page, surface raises cards, and line defines borders. Foreground is primary reading text; muted supports descriptions and metadata. CTA labels remain white. Legacy violet/slime CSS names alias the current orange and muted palette; they do not introduce additional brand colors.

## Typography

DM Sans is the sole loaded family, with system-ui and sans-serif fallbacks. The hero uses a sentence-case, semibold sale headline. Section headings begin at the headline size and increase to (3rem) from the small breakpoint. App titles are bold; descriptions are smaller with relaxed leading. Introductory copy uses (1.125rem), increasing to (1.25rem) in the hero on wider screens. Do not reintroduce condensed all-caps slogans.

## Layout

Composition: linked announcement, centered forest hero with original navigation, concise app overview, featured apps, merchant brands, complete app collection, setup steps, three merchant reviews, FAQ, contact cards and illustrated closing CTA/footer. Repeated use-case and persuasion sections have been removed.

The hero uses `public/hero/forest.png` with a dark overlay (62% opacity), cover sizing and centered positioning. Its minimum height follows the small viewport height less the announcement (2.5rem), changing to (760px) from (1440px). The headline caps at (1100px).

Main sections cap at (80rem); narrower introductions, FAQ and contact sections use smaller centered containers. Horizontal padding steps from (1.5rem) to (3rem) at (768px), then (4rem) at (1024px). Larger sections generally use vertical padding (6rem).

Source responsive rules use Tailwind defaults: small (640px), medium (768px), large (1024px), extra large (1280px). Navigation links appear from medium; logo and Browse apps remain on mobile. Collection cards use one/two/three columns at base/medium/large. Featured, setup and contact grids become three columns at medium. Review columns follow one/two/three. CTA groups stack below small. Footer links become a five-column arrangement at medium. These are source rules, not verified rendered outcomes.

## Elevation & Depth

Flat tonal layering and thin borders provide the main separation. Cards do not rely on shadows. The forest overlay protects text; a subtle orange wash supports reviews. Featured and contact cards lift slightly on hover, while collection cards change border emphasis only.

## Shapes

Cards and general buttons use softly rounded corners. The hero CTA is more compactly rounded; navigation CTA and badges are pills. Preview images clip inside their parent cards. Circular numbered steps, initials and the floating WhatsApp control provide small secondary shapes.

## Components

**Navigation and CTAs.** Original Apps, Pricing, Blog and Contact links sit between the logo and Browse apps action on wider screens. Filled CTA text is white over action orange; outlined actions use a translucent white border. Global focus uses a pumpkin-hot outline (2px) offset (3px).

**App cards.** Every collection card includes its real preview screenshot, app logo, category, description, original crossed-out price, reduced price and unit. Free-plan information follows app data. Whole-card links open real product pages in a new tab. The collection displays all apps without goal filters. Featured cards use wider video-shaped previews and a small offer badge.

**FAQ and contact.** Native details/summary disclosures open independently; the first begins open. A plus rotates (45deg) when open. Contact cards provide WhatsApp, meeting and email links; WhatsApp also has a fixed circular shortcut.

**Seasonal decoration and motion.** The forest remains the hero image. The closing section contains stars, webs, pumpkins and a graveyard; contact has a dangling spider. Used animation is limited to spider dangle (4s) and pumpkin brightness flicker (3s). Featured previews scale to (1.05) on hover. Hover transitions use (200–500ms). Reduced-motion rules stop decorative animations and smooth scrolling; existing utility hover transitions remain in source. No generated ghost raster is part of this page.

## Do's and Don'ts

- **Do** build from the original centered forest composition, direct copy and practical screenshot-led product presentation.
- **Do** retain Objects ink/orange branding, white CTA labels and clear pricing hierarchy.
- **Do** keep the (26%) sale and October 29 start consistent with sale data; no coupon is needed.
- **Don't** add a ghost mascot, oversized discount stamp, ticker, staggered cards or condensed slogans.
- **Don't** restore repeated use-case/WHY/friction sections, invent an end date or add an ending countdown.
- **Don't** claim rendered verification without browser evidence.

