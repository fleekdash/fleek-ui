# Fleek UI

The design system for FleekDash extensions — and any project that wants the
same visual language. One stylesheet, one token contract, copy-paste
components for HTML + Alpine.js + htmx, and a shadcn-compatible registry.

**Registry-only, like shadcn/ui and ReUI**: nothing here is an npm runtime
dependency — you copy the CSS and markup into your project and own it.

```
tokens (CSS custom properties, shadcn-compatible names)
   └─ fleek-ui.css        → :root/.dark palette + utilities + fui-* primitives
   └─ snippets/*.html     → Alpine-friendly markup patterns (Pines-style)
   └─ registry/*.json     → npx shadcn add @fleek/<item>
```

## The token contract

Everything resolves through shared custom properties — never hardcode hex:

`--background --foreground --card --card-foreground --primary
--primary-foreground --secondary --secondary-foreground --muted
--muted-foreground --accent --accent-foreground --destructive
--destructive-foreground --border --input --ring --radius` (plus
`--card-2/5/10/20/50`, `--skeleton-*`, chart & sidebar tokens).

- The bundle ships **starter-theme defaults** on `:root` and `.dark`, so a
  standalone page looks right out of the box.
- A host (FleekDash, or your own theme file) overrides them via
  `[data-theme]` blocks or the `--palette-light-*`/`--palette-dark-*`
  hooks — the component layer never changes.
- Dark mode = a `.dark` class on any ancestor (`<html class="dark">` for
  the whole page).

## Use it

**FleekDash extension (PHP / Alpine / htmx)** — the plugin vendors
everything; never CDN, never your own stylesheet:

```php
\FleekDash\Extension\ExtensionAssets::renderLinkTags([
    \FleekDash\Extension\ExtensionAssets::FLEEK_UI,
]);
\FleekDash\Extension\ExtensionAssets::renderScriptTags(['htmx', 'alpinejs']);
```

```html
<body class="fleek-ui">…</body>
```

Then compose `fui-*` classes + Tailwind utilities — see
[`snippets/`](./snippets) and
[`docs/packs-authoring-guide.md`](./docs/packs-authoring-guide.md).

**Any web project** — copy the CSS (or install via the registry below),
wrap your app root in `.fleek-ui`:

```html
<link rel="stylesheet" href="vendor/fleek-ui/fleek-ui.css" />
<div class="fleek-ui">…</div>
```

The scoped base resets/normalizes under `.fleek-ui` only — it never touches
the surrounding admin or host page.

## Install via the registry (shadcn CLI)

Register the `@fleek` namespace in `components.json`:

```json
{
  "registries": {
    "@fleek": "https://raw.githubusercontent.com/fleekdash/fleek-ui/main/registry/{name}.json"
  }
}
```

```bash
npx shadcn@latest add @fleek/fleek-ui   # stylesheet → vendor/fleek-ui/fleek-ui.css
npx shadcn@latest add @fleek/button     # snippet     → fleek-ui/snippets/button.html
```

Browse every item in [`registry.json`](./registry.json) or
[`registry/`](./registry).

## Class inventory (v1)

| Class | Purpose |
|---|---|
| `fleek-ui` | root scope — required for the base reset + fui-* components |
| `fui-btn` + `fui-btn-{primary,secondary,outline,ghost,destructive,link}` | buttons (`fui-btn-sm`, `fui-btn-lg`) |
| `fui-input` | text inputs & textareas (`[aria-invalid]` destructive ring) |
| `fui-card` | bordered card surface |
| `fui-badge` + `fui-badge-{default,secondary,outline,success,warning,destructive}` | status pills |
| `fui-skeleton` | loading placeholder (`animate-shimmer`) |
| Tailwind utilities | spacing, flex/grid, typography, `dark:` / `local-dark:` / `container-*` variants — all compiled from the real candidate surface |

Alpine & htmx conventions are built in: `[x-cloak]` is hidden, and
`.htmx-indicator` / `.htmx-request` / `.htmx-indicator-hide` request states
work out of the box.

## Source of truth

This repo is a **generated mirror** of `packages/design-system` inside the
private `fleekdash/fleekdash` monorepo — don't hand-edit files here, send
changes upstream. Regenerate with:

```bash
pnpm sync:fleek-ui        # monorepo: mirror + commit + push
pnpm generate:fleek-ui    # monorepo: rebuild css/fleek-ui.css
```

## License

MIT — see [LICENSE](./LICENSE).
