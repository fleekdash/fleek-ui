# Fleek UI for packs - authoring guide

**Audience:** humans and agents writing FleekDash extensions without a
build step (Alpine + HTMX packs, PHP-rendered pages).
**Source of truth:** `packages/design-system/css/fleek-ui.css` → built by
`pnpm generate:fleek-ui` → vendored at
`public/vendor/fleek-ui/fleek-ui.css`.
**Copyable snippets:** `packages/design-system/snippets/*.html`.

---

## 1. Loading the stylesheet

One line in your page head - never a CDN link, never `wp_enqueue_*`:

```php
\FleekDash\Extension\ExtensionAssets::renderLinkTags(
    [\FleekDash\Extension\ExtensionAssets::FLEEK_UI]
);
```

`ExtensionAssets::linkTag($handle, $attrs)` returns the tag as a string
(supports `media`, `id`, `nonce`, `integrity`, `referrerpolicy`,
`crossorigin`, `title`, `disabled` - `rel`/`href` are never
caller-settable). `linkTags(array)` joins several; `renderLinkTags`
echoes. Unknown handles degrade to `''` - no 404s.

## 2. The `.fleek-ui` contract

```html
<body class="fleek-ui">
```

(or any wrapper element). Inside `.fleek-ui` the stylesheet provides a
preflight-aligned scoped reset: border-box, normalized form elements,
token-driven font family/size/line-height/foreground/background.
**Outside `.fleek-ui` nothing is reset** - and no rule in the file ever
touches the host page: the only global selectors are `:root` and
`.dark` custom-property declarations (starter-palette *defaults* that
host-injected `[data-theme]`/palette variables always override).

Rules:

- Put the class on `<body>` for full-document pack pages; on a wrapper
  `div` for packs embedded into larger markup.
- `x-cloak` on anything Alpine shows/hides - the base layer ships
  `[x-cloak] { display:none !important }` (inside `.fleek-ui` only).
- `dark:` / `.dark` respond to the class the host applies on the iframe
  `<html>`; `local-dark:` / `.dark-sidebar` to sidebar surfaces.

## 3. Class inventory

### 3.1 `fui-*` component classes (`@layer components`)

| Class | What it is |
|---|---|
| `fui-btn` | Button base: layout, radius-md, text-sm medium, focus ring, disabled state. |
| `fui-btn-sm` / `fui-btn-lg` | Height variants (1.75rem / 2.75rem). |
| `fui-btn-primary` | `var(--primary)` bg, `--primary-foreground` text, `--primary-hover/-active`. |
| `fui-btn-secondary` | `var(--secondary)` pair + hover/active. |
| `fui-btn-outline` | `var(--card)` bg, `var(--border)` border, muted hover. |
| `fui-btn-ghost` | transparent, `--ghost-hover-bg/-text` hover (falls back to muted). |
| `fui-btn-destructive` | `var(--destructive)` pair + hover/active. |
| `fui-btn-link` | Text button, `var(--primary)`, underline on hover. |
| `fui-input` | Border `--input`, bg `--input-bg`, radius-md; `:focus-visible` gets `--field-focus-ring`; `[aria-invalid]` gets the destructive ring. |
| `fui-card` | `var(--card)` bg, `--card-foreground` text, `--border`, `--radius-lg`. |
| `fui-card-header` / `-body` / `-footer` | Padded regions with hairline separators. |
| `fui-badge` | Pill base (`--radius-full`, text-xs). |
| `fui-badge-primary` / `-success` / `-warning` / `-danger` / `-muted` | Soft color-mix tints of the semantic tokens - same contract as the React badge's light appearance. |
| `fui-skeleton` | `var(--skeleton-base)` fill + `--radius-md`; compose with `animate-pulse` / `animate-shimmer`. |

Utilities always override `fui-*` (components layer precedes utilities).

### 3.2 Utilities (Tailwind v4 against the FleekDash `@theme`)

The emitted subset covers whatever the React components, snippets and
starter packs actually use - layout (`flex`, `grid`, `gap-*`, `p-*`,
`m-*`, `size-*`…), typography (`text-{xs..6xl}`, `font-*`, `leading-*`,
`tracking-*`), borders (`rounded-*`, `border-*`), effects
(`shadow-*`, `opacity-*`, `backdrop-blur-*`), transforms, display,
position, z-index, `line-clamp-*`, `break-*`, interactivity
(`cursor-*`, `select-*`, `pointer-events-*`, `resize-*`) and the
`tw-animate-css` set (`animate-in/out`, `fade-in-*`, `slide-in-from-*`,
`zoom-*`, `accordion-*`) plus `animate-pulse`, `animate-shimmer`,
`skeleton-bg`, `skeleton-animate`.

**Color utilities are token-bound** - always prefer the semantic names:

| Utility family | Resolves to |
|---|---|
| `bg-background`, `bg-card`, `bg-popover`, `bg-primary`, `bg-secondary`, `bg-muted`, `bg-accent`, `bg-destructive` (+`-2/-5/-10/-20/-50` surface steps, `/N` opacity) | the matching CSS variable |
| `text-foreground`, `text-card-foreground`, `text-primary`, `text-muted-foreground`, `text-destructive`, `text-success`, `text-warning`… | semantic text vars |
| `border-border`, `border-input`, `border-primary`, `border-destructive`… | border vars |
| `ring-ring` / `ring-offset-*` | `--ring` focus ring |
| `bg-chart-1`…`bg-chart-5` | chart palette vars |
| Tailwind palette (`bg-blue-600`, `text-green-500`…) | `--color-*` defaults - **avoid for semantic use; these don't follow the palette** |

### 3.3 Variants

| Variant | Compiled selector | Use |
|---|---|---|
| `dark:` | `:is(.dark *)` | dark overrides (host applies `.dark` to the iframe `<html>`) |
| `local-dark:` | `:is(.dark-sidebar *)` | local-dark surfaces (sidebars) |
| `container-xs:` … `container-7xl:` | `@container (min-width: 20rem…80rem)` | size-driven layouts |
| `dashboard-short:` / `dashboard-tiny:` | `@container dashboard (max-height: …)` | dashboard-height-aware widgets (needs a `.dashboard-size-container` ancestor) |
| Standard `hover:`, `focus-visible:`, `disabled:`, `aria-invalid:`, `data-[…]:`, `has-[…]:`, `group-*`, `peer-*`, `sm:`…`2xl:` | as usual | |

### 3.4 htmx / Alpine hooks

- `.htmx-indicator` - hidden until its request is in flight;
  `.htmx-request .htmx-indicator { opacity: 1 }`.
- `.htmx-indicator-hide` - dims while its own request runs.
- `[x-cloak]` - `display:none !important` until Alpine initializes.
- `x-data`, `x-show`, `x-transition.*`, `x-on:*`, `x-bind:*`, `x-model`,
  `x-text`, `x-cloak`, `x-teleport` - Alpine 3.15 vendored via
  `ExtensionAssets::ALPINE`.

## 4. Snippet library

`packages/design-system/snippets/` holds the copy-paste blocks (each is
also scanned by the CSS build - every class used there is guaranteed to
exist in `fleek-ui.css`):

| File | Contents |
|---|---|
| `button.html` | `fui-btn` variants, sizes, busy-with-htmx pattern |
| `form.html` | `fui-input` fields, labels, invalid state, field grid |
| `card.html` | cards, list rows, badges, alert surfaces, empty + skeleton states |
| `overlays.html` | Alpine dropdown, modal (`x-teleport`), tabs, tooltip |

Pines-style rules for Alpine islands: `x-data` on the component root,
`x-cloak` on hidden-until-boot nodes, `x-transition.opacity.scale.*` for
entrances, `x-on:click.outside` + `keydown.escape.window` for dismiss,
`role`/`aria-*` attributes included in the markup.

## 5. Hard rules (enforced in review)

1. **No hex colors, ever** - semantic tokens/utilities only. If a value
   isn't expressible as `var(--token)` or a utility, the design system
   is missing a token - file it, don't hardcode it.
2. **No pack stylesheets, no `<style>` blocks, no custom selectors** -
   compose `fui-*` + utilities; emit conditional classes server-side.
3. **No CDN assets** - `ExtensionAssets` is the only loader
   (`linkTag`/`scriptTag` for vendored files).
4. **`class="fleek-ui"` on the app root** - resets and typography are
   scoped to it.
5. **Escape in PHP** - `esc_html`/`esc_attr`/`esc_url` at render time;
   fragments are HTML strings over REST.

## 6. How it stays in sync with the shell

`fleek-ui.css` is *generated*: `scripts/build-fleek-ui-css.mjs`
transforms the theme source files (`src/themes/fleekdash-starter/*`,
`src/themes/skeleton-tokens.css`, `src/theme-provider/index.css`) into
`:root`/`.dark` default blocks and extracts `@custom-variant` +
`@theme inline` verbatim from `src/styles/globals.css`. Tokens,
variants and utility names can therefore never diverge from the host -
editing the shell palette or adding a custom variant automatically
rebuilds into the extension stylesheet. Utility emission is
candidate-driven: only classes present in `packages/design-system/src`,
`packages/design-system/snippets` or the starter packs are emitted.

When embedded in FleekDash, the host's iframe token bridge
(`iframe-tokens.css` + `paletteVarsCss` + `.dark`/`data-theme` on
`<html>`) re-maps the same variables - the pack inherits the active
theme, palette and dark mode with zero pack-side code. Standalone
(outside FleekDash), the `:root` starter defaults render a coherent
light/dark baseline.
