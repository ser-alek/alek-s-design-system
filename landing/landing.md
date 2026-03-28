# Landing page — token usage by section

This document maps each area of `landing/index.html` to the token paths from `tokens.json`. Primitive values are exposed as CSS variables `--primitive-*`; semantic aliases resolve per theme (light/dark) as `--semantic-*`. Runtime layout helpers: `--layout-max-width` (= `calc(space.800 × 18 + space.700)` → 1200px), `--section-padding-y` (= `space.800 + space.400` → 80px), `--hero-bg` (primitive `color.neutral.100` in light, `color.neutral.900` in dark).

**Global**

- **Typography:** `primitive.font-size.*`, `primitive.font-weight.*`, `primitive.line-height.*` (Inter loaded via Google Fonts; family name is not a design token).
- **Motion:** 200ms easing on theme-relevant properties (duration not present in `tokens.json`; specified in the brief). Bar chart fills use `transition: none` so widths do not animate.
- **Structure:** `primitive.space.*` for gaps and padding; `semantic.z-index.navigation` for the sticky nav.

---

## Hero

- **Background:** `--hero-bg` → primitive `color.neutral.100` (light) / `color.neutral.900` (dark).
- **Headline:** `font-size.800`, `font-weight.bold`, `line-height.200`; at ≤375px viewport, `font-size.700` via media query.
- **Tagline:** `semantic.color.text.body`.
- **Pills:** `semantic.color.border.secondary`, `semantic.border-radius.pill`, `primitive.border-width.thin`, `font-size.100`, `font-weight.medium`, `semantic.color.text.secondary`.
- **CTA:** `semantic.color.background.highlight`, `semantic.color.background.button-primary-hover` (hover), `semantic.color.text.button-primary`, `semantic.color.text.button-primary-hover` (hover), `semantic.color.border.button-primary`, `semantic.border-radius.default`, `font-size.200`, `font-weight.semibold`, `space.200` / `space.300` / `space.500` for gaps and padding.
- **Section spacing:** `space.800` vertical padding for the hero block.

---

## Navigation (sticky)

- **Chrome:** `semantic.color.background.secondary`, `semantic.color.border.weak`, `primitive.border-width.thin`, `semantic.z-index.navigation`, `primitive.size.700` min-height.
- **Links:** `font-size.100`, `semantic.color.text.secondary`, `semantic.color.text.active` (hover).
- **Theme toggle:** same border/radius as pills; `semantic.border-radius.default`, `semantic.color.border.secondary`, `semantic.color.text.primary`.

---

## Atomic-driven methodology

- **Surface:** primitive `color.neutral.900`; body copy on columns uses `color.neutral.500`.
- **Labels / titles:** `section-label` pattern uses `font-size.100`, `font-weight.semibold`, `color.indigo.300`, uppercase + letter-spacing (layout spec; not a token); title uses `color.neutral.100`, `font-size.700`, `font-weight.bold`.
- **Icons:** `primitive.color.indigo.400`, `primitive.size.400` icon frame.
- **Dividers:** `primitive.color.neutral.800`, `primitive.border-width.thin`.
- **Column padding:** `space.500`.

---

## Color system — primitives

- **Rows:** one row per group `neutral`, `indigo`, `amber`, `success`, `error`, `warning`; stops sorted by numeric key (light → dark).
- **Swatches:** each stop uses `primitive.color.<group>.<stop>.value`; label `font-size.50`; swatch geometry from `space.500` × `space.700`, `border-radius.300`, `border-width.thin`, `semantic.color.border.weak` (page context).
- **Tooltips:** native `title` with the same hex as the fill (hover tooltip behavior).

---

## Color system — semantic

- **Groups:** `semantic.color.background`, `semantic.color.border`, `semantic.color.text`, `semantic.color.icon` — every child token path `color.<category>.<name>` with resolved hex from `value` / `$extensions.dark`.
- **Layout:** `font-size.100`, `semantic.color.border.weak` row separators, swatch chip sizes from `space` tokens.

---

## Typography

- **Section title:** `font-size.700`, `font-weight.bold`, `semantic.color.text.heading`.
- **Body copy:** `font-size.200`, `semantic.color.text.secondary`.
- **Tables:** all entries from `primitive.font-size` and `primitive.font-weight`.
- **“Aa” specimen:** `font-size.700` only.
- **Type scale:** each line uses one `primitive.font-size` stop (sorted large → small), text color `semantic.color.text.heading`, labels `font-size.50` + `semantic.color.text.weak`.

---

## Spacing and radius

- **Spacing — copy and flow list:** all `primitive.space` entries; display format `#<key> → space.<key> → <value>`.
- **Spacing — bar chart:** bar length proportional to parsed px; bar thickness `primitive.border-width.medium`, fill `primitive.color.indigo.500`, `border-radius.100`; labels `font-size.50`, `semantic.color.text.weak`.
- **Radius — example row:** `border-radius.300` value via resolver.
- **Radius — grid:** every key under `primitive.border-radius` (including `full`); card surface `semantic.color.background.modal`, border `semantic.color.border.secondary`, `border-width.thin`.

---

## Shadow

- **Stage:** `semantic.color.background.weak`, `semantic.border-radius.large`, `space.700` padding.
- **Cards:** identical `primitive.size.800` square, `semantic.color.background.modal`, `semantic.border-radius.default`.
- **Elevation:** `box-shadow: 0 space.200 space.500 space.100 <semantic shadow color>` for each key under `semantic.color.shadow` (resolved color from theme).

---

## Components (button matrix)

- **Layout:** `semantic.color.border.weak` table grid, header `semantic.color.background.weak`, `font-size.50` in cells.
- **Primary column:** `semantic.color.background.highlight`, `semantic.color.background.button-primary-hover`, `semantic.color.background.button-primary-focus`, `semantic.color.background.button-primary-pressed`, `semantic.color.background.inactive` (disabled); matching `semantic.color.text.button-primary*`, `semantic.color.border.button-primary`, `semantic.color.border.focus`, `semantic.color.border.active`, `semantic.color.border.disabled`; focus ring offset `space.100`.
- **Primary + icon:** `semantic.color.icon.button-primary` or `semantic.color.icon.disabled` (disabled row); icon box `semantic.size.icon-button-primary`.
- **Secondary column:** `semantic.color.background.secondary`, `semantic.color.background.button-secondary-hover`, `semantic.color.background.button-secondary-focus`, `semantic.color.background.button-secondary-pressed`, `semantic.color.background.inactive`; `semantic.color.text.button-secondary*`, `semantic.color.border.button-secondary`, `semantic.color.border.hover`, `semantic.color.border.focus`, `semantic.color.border.active`, `semantic.color.border.disabled`; focus text `semantic.color.text.inverse` on focus row (contrast on `button-secondary-focus` background).
- **Borders:** `primitive.border-width.thin` on all variants.

---

## Built with (tech stack)

- **Pills:** `semantic.color.border.secondary`, `semantic.border-radius.pill`, `font-size.100`, `semantic.color.text.secondary`, `semantic.color.background.secondary`, `space.200` / `space.400` padding/gap.

---

## Footer

- **Text:** `font-size.100`, `semantic.color.text.weak`, `semantic.color.border.weak` top border, `space.600` padding.

---

## Regenerating from `tokens.json`

Run `node landing/build-landing.mjs` from the repository root to rebuild `landing/index.html` with an embedded copy of `tokens.json` and the same behaviors.
