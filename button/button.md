# Button component

## What was built

A single-file demo and implementation at [`index.html`](./index.html): plain HTML, embedded CSS, and a short script. It defines a reusable **`.ds-button`** with **`ds-button--primary`** and **`ds-button--secondary`** variants, optional **leading Font Awesome icon** (inline `<i>` before the label), and documented states:

| State | How it is implemented |
| --- | --- |
| Default | Base modifier classes |
| Hover | `:hover` on real `<button>`s; static preview rows use `.is-sim-hover` |
| Focus | `:focus-visible` with a **focus ring** (`box-shadow` using `semantic.color.border.focus` and `primitive.border-width.medium`); static previews use `.is-sim-focus` |
| Pressed | `:active` maps to **`semantic.color.background.button-*-pressed`** tokens |
| Disabled | `disabled` attribute: `pointer-events: none`, colors from inactive / disabled text / border / icon tokens; static previews use `.is-sim-disabled` |

The page includes a **state matrix** (primary vs secondary columns, text + leading-icon examples) and an **interactive** strip that logs clicks only for enabled buttons so you can confirm disabled controls are not activated.

## Default fills and `tokens.json` gaps

`tokens.json` does **not** define `semantic.color.background.button-primary` or `semantic.color.background.button-secondary` as standalone keys. The implementation aliases them for clarity:

- **`--semantic-color-background-button-primary`** → same resolved color as **`semantic.color.background.highlight`** (`{color.indigo.600}`).
- **`--semantic-color-background-button-secondary`** → **`semantic.color.background.secondary`** (`{color.neutral.100}`).

All other button background tokens used (`button-primary-hover`, `button-primary-focus`, `button-primary-pressed`, and the secondary equivalents) exist under `semantic.color.background` in `tokens.json`.

## Tokens used (by category)

### Primitive — `primitive.color`

- `neutral.100`, `neutral.200`, `neutral.300`, `neutral.400`, `neutral.600`, `neutral.700`, `neutral.900`, `neutral.1000`
- `indigo.100`, `indigo.200`, `indigo.300`, `indigo.500`, `indigo.600`, `indigo.700`

### Primitive — space, radius, border, type, size

- `space.100`, `space.200`, `space.300`, `space.400`, `space.500`
- `border-radius.300` (via semantic default below)
- `border-width.thin`, `border-width.medium`
- `font-size.200`, `font-size.600` (page title)
- `font-weight.semibold`
- `line-height.300`
- `size.200` (icon sizing; also exposed as semantic icon-button sizes)

### Semantic — `semantic.color.background`

- `secondary` (page + secondary button default)
- `highlight` (same resolution as primary default fill)
- `inactive` (disabled background)
- `button-primary` (alias in CSS only — see above)
- `button-secondary` (alias in CSS only — see above)
- `button-primary-hover`, `button-primary-focus`, `button-primary-pressed`
- `button-secondary-hover`, `button-secondary-focus`, `button-secondary-pressed`

### Semantic — `semantic.color.border`

- `button-primary`, `button-secondary`
- `focus` (focus ring)
- `disabled`

### Semantic — `semantic.color.text`

- `inverse` (secondary button text/icon on focused background)
- `button-primary`, `button-primary-hover`, `button-primary-disabled`
- `button-secondary`, `button-secondary-hover`, `button-secondary-disabled`

### Semantic — `semantic.color.icon`

- `button-primary`, `button-secondary`
- `disabled`

### Semantic — `semantic.border-radius`

- `default` (`{border-radius.300}`)

### Semantic — `semantic.size`

- `icon-button-primary`, `icon-button-secondary` (both `{size.200}`)

## Not used (but related in `tokens.json`)

- `semantic.color.background.button-primary-active` / `button-secondary-active` — lighter “active” surfaces intended for other patterns (e.g. selection), not mapped to `:active` press state here.
- Dark-mode `$extensions` — this file implements the default (light) resolution only.

## External assets

- [Font Awesome 6.5.1](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css) on CDN for icons.
