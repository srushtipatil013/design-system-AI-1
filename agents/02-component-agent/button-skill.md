---
name: button
description: Use this skill when generating or defining button components in a design system. Covers structure, variants, states, tokens, properties, accessibility, and behavior rules.
---

# Button Skill

## Purpose

This skill defines the complete declarative specification for the Button component within a design system. It produces a fully resolved, variable-bound, context-aware component model that is consumable by design tooling, component libraries, documentation systems, and QA pipelines. It describes what a button is — its anatomy, variant space, variable bindings, behavior rules, and accessibility guarantees — not how to construct it in any specific medium.

---

## Button Variables

Button variables must be defined and resolved before any aspect of the button component is designed, built, or documented. They form the foundational contract between the button and the global design system. No visual decision — spacing, color, typography, radius, or border — may be made until its corresponding button variable has been mapped to a global semantic variable from the variable agent.

Button variables do not hold raw values. They are a mapping layer only. Each button variable points to a global semantic variable, which is where the resolved value lives. When the global variable agent defines or updates the semantic layer, all button variable mappings must be verified against it.

**Format**: `component-variable → global-semantic-variable`

> ⚠️ The global semantic variable names on the right side of each mapping are placeholders following the system's slash-based naming convention. They must be reconciled with the exact variable names defined in the variable agent skill before production use.

All variable names conform to the Naming Rules defined in this skill: lowercase, slash-separated, kebab-case for compound words, structured as `component/category/variant/property`.

---

### Typography

> **Enforcement**: All button text properties — `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing` — must be resolved exclusively from `button/typography/*` variables. No raw values, no direct primitive references, and no hardcoded font properties are permitted on any text layer.

> **`font-size/sm`, `font-size/md`, `font-size/lg` and `line-height/sm`, `line-height/md`, `line-height/lg` live in the `primitives` collection.** `font-size/lg` (18px) was added to `primitives` — no semantic alias exists yet. If semantic wrappers are created later, update the button variable aliases to point to them instead.

| Button Variable | Primitive / Semantic Variable | Resolved Value |
|---|---|---|
| `button/typography/sm/font-family` | `font/family/body` | Inter |
| `button/typography/sm/font-size` | `font-size/sm` | 14px |
| `button/typography/sm/font-weight` | `font/weight/body/sm` | 500 (Medium) |
| `button/typography/sm/line-height` | `line-height/sm` | 20px |
| `button/typography/sm/letter-spacing` | `font/letter-spacing/body/sm` | 0% |
| `button/typography/md/font-family` | `font/family/body` | Inter |
| `button/typography/md/font-size` | `font-size/md` | 16px |
| `button/typography/md/font-weight` | `font/weight/body/md` | 500 (Medium) |
| `button/typography/md/line-height` | `line-height/md` | 24px |
| `button/typography/md/letter-spacing` | `font/letter-spacing/body/md` | 0% |
| `button/typography/lg/font-family` | `font/family/body` | Inter |
| `button/typography/lg/font-size` | `font-size/lg` | 18px |
| `button/typography/lg/font-weight` | `font/weight/body/lg` | 500 (Medium) |
| `button/typography/lg/line-height` | `line-height/lg` | 28px |
| `button/typography/lg/letter-spacing` | `font/letter-spacing/body/lg` | 0% |

---

### Spacing

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/spacing/horizontal/sm` | `spacing/component/inline/sm` |
| `button/spacing/horizontal/md` | `spacing/component/inline/md` |
| `button/spacing/horizontal/lg` | `spacing/component/inline/lg` |
| `button/spacing/vertical/sm` | `space/4` |
| `button/spacing/vertical/md` | `space/6` |
| `button/spacing/vertical/lg` | `space/8` |
| `button/spacing/gap/sm` | `spacing/component/gap/sm` |
| `button/spacing/gap/md` | `spacing/component/gap/md` |
| `button/spacing/gap/lg` | `spacing/component/gap/lg` |
| `button/spacing/icon-only/sm` | `spacing/component/square/sm` |
| `button/spacing/icon-only/md` | `spacing/component/square/md` |
| `button/spacing/icon-only/lg` | `spacing/component/square/lg` |

---

### Radius

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/radius/default` | `radius/component/control/md` |
| `button/radius/rounded` | `radius/component/control/full` |
| `button/radius/none` | `radius/none` |

---

### Border

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/border/thickness/sm` | `border/width/sm` |
| `button/border/thickness/md` | `border/width/md` |
| `button/border/thickness/lg` | `border/width/lg` |

---

### Color — Background

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/background/primary/default` | `Component/Button/bg/strong` |
| `button/background/primary/hover` | `color/bg/primary/hover` |
| `button/background/primary/pressed` | `color/bg/primary/pressed` |
| `button/background/primary/focused` | `color/bg/primary/default` |
| `button/background/primary/disabled` | `color/bg/disabled` |
| `button/background/secondary/default` | `color/bg/surface/default` |
| `button/background/secondary/hover` | `color/bg/primary/subtle/hover` |
| `button/background/secondary/pressed` | `color/bg/primary/subtle/pressed` |
| `button/background/secondary/focused` | `color/bg/surface/default` |
| `button/background/secondary/disabled` | `color/bg/disabled` |
| `button/background/ghost/default` | `color/bg/transparent` |
| `button/background/ghost/hover` | `color/bg/primary/ghost/hover` |
| `button/background/ghost/pressed` | `color/bg/primary/ghost/pressed` |
| `button/background/ghost/focused` | `color/bg/transparent` |
| `button/background/ghost/disabled` | `color/bg/transparent` |

---

### Color — Foreground (Label + Icon)

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/foreground/primary/default` | `color/text/on-primary` |
| `button/foreground/primary/hover` | `color/text/on-primary` |
| `button/foreground/primary/pressed` | `color/text/on-primary` |
| `button/foreground/primary/focused` | `color/text/on-primary` |
| `button/foreground/primary/disabled` | `color/text/disabled` |
| `button/foreground/primary/loading` | `color/text/on-primary` |
| `button/foreground/secondary/default` | `color/text/primary/default` |
| `button/foreground/secondary/hover` | `color/text/primary/hover` |
| `button/foreground/secondary/pressed` | `color/text/primary/pressed` |
| `button/foreground/secondary/focused` | `color/text/primary/default` |
| `button/foreground/secondary/disabled` | `color/text/disabled` |
| `button/foreground/secondary/loading` | `color/text/primary/default` |
| `button/foreground/ghost/default` | `color/text/primary/default` |
| `button/foreground/ghost/hover` | `color/text/primary/hover` |
| `button/foreground/ghost/pressed` | `color/text/primary/pressed` |
| `button/foreground/ghost/focused` | `color/text/primary/default` |
| `button/foreground/ghost/disabled` | `color/text/disabled` |
| `button/foreground/ghost/loading` | `color/text/primary/default` |

---

### Color — Border

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/border/primary/default` | `color/border/transparent` |
| `button/border/primary/hover` | `color/border/transparent` |
| `button/border/primary/pressed` | `color/border/transparent` |
| `button/border/primary/focused` | `color/border/transparent` |
| `button/border/primary/disabled` | `color/border/transparent` |
| `button/border/secondary/default` | `color/border/primary/default` |
| `button/border/secondary/hover` | `color/border/primary/hover` |
| `button/border/secondary/pressed` | `color/border/primary/pressed` |
| `button/border/secondary/focused` | `color/border/primary/default` |
| `button/border/secondary/disabled` | `color/border/disabled` |
| `button/border/ghost/default` | `color/border/transparent` |
| `button/border/ghost/hover` | `color/border/primary/subtle` |
| `button/border/ghost/pressed` | `color/border/primary/subtle` |
| `button/border/ghost/focused` | `color/border/transparent` |
| `button/border/ghost/disabled` | `color/border/transparent` |

---

### Motion

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/motion/duration/default` | `motion/duration/fast` |
| `button/motion/duration/pressed` | `motion/duration/instant` |
| `button/motion/easing/default` | `motion/easing/standard` |

---

### Color — Background (Danger Tone)

Danger tone inserts `/danger/` before the state segment in all color paths. Positive tone (the default) uses no tone segment.

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/background/primary/danger/default` | `color/bg/danger/default` |
| `button/background/primary/danger/hover` | `color/bg/danger/hover` |
| `button/background/primary/danger/pressed` | `color/bg/danger/pressed` |
| `button/background/primary/danger/focused` | `color/bg/danger/default` |
| `button/background/primary/danger/disabled` | `color/bg/disabled` |
| `button/background/secondary/danger/default` | `color/bg/surface/default` |
| `button/background/secondary/danger/hover` | `color/bg/danger/subtle/hover` |
| `button/background/secondary/danger/pressed` | `color/bg/danger/subtle/pressed` |
| `button/background/secondary/danger/focused` | `color/bg/surface/default` |
| `button/background/secondary/danger/disabled` | `color/bg/disabled` |
| `button/background/ghost/danger/default` | `color/bg/transparent` |
| `button/background/ghost/danger/hover` | `color/bg/danger/ghost/hover` |
| `button/background/ghost/danger/pressed` | `color/bg/danger/ghost/pressed` |
| `button/background/ghost/danger/focused` | `color/bg/transparent` |
| `button/background/ghost/danger/disabled` | `color/bg/transparent` |

---

### Color — Foreground (Danger Tone)

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/foreground/primary/danger/default` | `color/text/on-danger` |
| `button/foreground/primary/danger/hover` | `color/text/on-danger` |
| `button/foreground/primary/danger/pressed` | `color/text/on-danger` |
| `button/foreground/primary/danger/focused` | `color/text/on-danger` |
| `button/foreground/primary/danger/disabled` | `color/text/disabled` |
| `button/foreground/primary/danger/loading` | `color/text/on-danger` |
| `button/foreground/secondary/danger/default` | `color/text/danger/default` |
| `button/foreground/secondary/danger/hover` | `color/text/danger/hover` |
| `button/foreground/secondary/danger/pressed` | `color/text/danger/pressed` |
| `button/foreground/secondary/danger/focused` | `color/text/danger/default` |
| `button/foreground/secondary/danger/disabled` | `color/text/disabled` |
| `button/foreground/secondary/danger/loading` | `color/text/danger/default` |
| `button/foreground/ghost/danger/default` | `color/text/danger/default` |
| `button/foreground/ghost/danger/hover` | `color/text/danger/hover` |
| `button/foreground/ghost/danger/pressed` | `color/text/danger/pressed` |
| `button/foreground/ghost/danger/focused` | `color/text/danger/default` |
| `button/foreground/ghost/danger/disabled` | `color/text/disabled` |
| `button/foreground/ghost/danger/loading` | `color/text/danger/default` |

---

### Color — Border (Danger Tone)

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/border/primary/danger/default` | `color/border/transparent` |
| `button/border/primary/danger/hover` | `color/border/transparent` |
| `button/border/primary/danger/pressed` | `color/border/transparent` |
| `button/border/primary/danger/focused` | `color/border/transparent` |
| `button/border/primary/danger/disabled` | `color/border/transparent` |
| `button/border/secondary/danger/default` | `color/border/danger/default` |
| `button/border/secondary/danger/hover` | `color/border/danger/hover` |
| `button/border/secondary/danger/pressed` | `color/border/danger/pressed` |
| `button/border/secondary/danger/focused` | `color/border/danger/default` |
| `button/border/secondary/danger/disabled` | `color/border/disabled` |
| `button/border/ghost/danger/default` | `color/border/transparent` |
| `button/border/ghost/danger/hover` | `color/border/danger/subtle` |
| `button/border/ghost/danger/pressed` | `color/border/danger/subtle` |
| `button/border/ghost/danger/focused` | `color/border/transparent` |
| `button/border/ghost/danger/disabled` | `color/border/transparent` |

---

### Focus

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/border/focus-ring` | `color/border/focus` |
| `button/focus-ring/width` | `focus/ring/width` |
| `button/focus-ring/offset` | `focus/ring/offset` |

---

### Icon

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/icon/size/sm` | `icon/size/sm` |
| `button/icon/size/md` | `icon/size/md` |
| `button/icon/size/lg` | `icon/size/lg` |

---

### Root & Misc

| Button Variable | Global Semantic Variable (placeholder) |
|---|---|
| `button/root/min-width` | `component/min-width/control` |
| `button/root/cursor` | `interaction/cursor/pointer` |
| `button/root/min-touch-target` | `interaction/touch-target/min` |
| `button/pressed/transform` | `interaction/transform/pressed` |

---

## Naming Rules

All component variable names follow an enforced naming system. These rules are not examples — they are the specification.

- **Lowercase only**: all path segments are lowercase; no uppercase characters permitted
- **Slash-separated**: segments are separated by `/` — not dots, underscores, or camelCase
- **Kebab-case for compound names**: multi-word segments use hyphens — `font-family`, `border-radius`, `min-width`, `focus-ring`
- **Structure**: `component/category/variant/property`

| Segment | Role |
|---|---|
| `component` | Always `button` for variables in this skill |
| `category` | Visual property domain — `background`, `border`, `foreground`, `spacing`, `typography`, `icon`, `radius`, `motion`, `focus-ring`, `root`, `pressed` |
| `variant` | Type, size, or sub-category — `primary`, `sm`, `horizontal`, `icon-only` |
| `property` | The resolved property — `color`, `width`, `offset`, `duration`, `font-size` |

All variable references throughout this specification conform to this system. Dot notation, camelCase, and PascalCase are not permitted anywhere in variable names.

---

## Inputs (Context)

Inputs are resolved after button variables are established. They do not change which variables exist — they determine which variable values are active for a given rendering context.

| Input | Values | Default |
|---|---|---|
| `density` | `low` / `medium` / `high` | `medium` |
| `guidance` | `low` / `medium` / `high` | `medium` |
| `visual_intensity` | `low` / `medium` / `high` | `medium` |
| `platform` | `web` / `mobile` | `web` |
| `theme` | `light` / `dark` | `light` |
| `direction` | `ltr` / `rtl` | `ltr` |
| `size` | `small` / `medium` / `large` | `medium` |
| `type` | `primary` / `secondary` / `ghost` | `primary` |
| `tone` | `positive` / `danger` | `positive` |
| `state` | `default` / `hover` / `pressed` / `focused` / `disabled` / `loading` | `default` |
| `width_mode` | `hug` / `fill` | `hug` |

### How Each Input Affects Output

**`density`** scales vertical and horizontal padding. High density compresses spacing; low density expands it. Drives resolution of `button/spacing/vertical/{size}` and `button/spacing/horizontal/{size}` variables.

**`guidance`** controls affordance strength. High guidance produces more visible borders, stronger focus rings, and higher-contrast state overlays. Low guidance produces minimal visual differentiation. Drives resolution of `button/border/focus-ring` and `button/border/thickness/{size}` variables.

**`visual_intensity`** controls saturation and contrast of background, border, and foreground variables. High intensity resolves to fully saturated brand values; low intensity resolves to muted, near-neutral values.

**`platform`** affects minimum touch target sizing, cursor behavior, and hover availability. Mobile enforces a minimum 44×44pt touch target. Hover state is not applicable on mobile.

**`theme`** resolves the entire variable set to its light or dark surface context. All visual variable paths are theme-aware and require no component-level logic to switch.

**`direction`** mirrors the layout of leading and trailing slots. In `rtl`, leading is visually right-aligned and trailing is visually left-aligned. Semantic slot identity does not change.

**`size`** resolves spacing, typography, and icon size variables independently of type and tone. Size values map to abbreviated path segments: `small` → `sm`, `medium` → `md`, `large` → `lg`.

**`type`** resolves the visual hierarchy namespace. All background, border, and foreground variable paths include type as a segment — `button/background/primary/*`, `button/background/secondary/*`, etc.

**`tone`** resolves the semantic color axis. Positive tone (`positive`) is the default — it uses no tone segment in variable paths (e.g., `button/background/primary/default`). Danger tone (`danger`) inserts `/danger/` before the state segment in all color paths (e.g., `button/background/primary/danger/default`). Every variable that differs by tone has explicit rows in the Danger Tone tables.

**`state`** resolves the interactive layer within each type+tone namespace. Drives background, border, foreground, and overlay variable resolution.

**`width_mode`** determines whether the button hugs its content or expands to fill its container.

---

## Output

The resolved output of this skill is a structured component specification containing:

- **Anatomy definition**: named layer structure with role, layout behavior, and variable bindings per layer
- **Variant matrix**: the combinatorial space of type × size × state × tone and its governing rules
- **State definitions**: per-state variable resolutions for background, border, foreground, and overlay layers
- **Variable bindings**: semantic or component-level variable references for every visual property — no raw values
- **Behavior rules**: layout, slot activation, loading override, truncation, and width-mode behavior
- **Accessibility guarantees**: contrast ratios, focus visibility, keyboard model, and screen reader expectations

---

## Anatomy

### Component Root
- **Role**: Outermost boundary. Owns sizing behavior and exposes all component properties to the variant system. Establishes the interaction surface.
- **Layout behavior**: Inline-flex, direction-aware. Width is `hug` by default; expands to `fill` when `width_mode = fill`. Height is derived entirely from padding — no fixed height is set.
- **Variable usage**: `button/radius/{radius}`, `button/root/min-width`, `button/root/cursor`

### Interaction Wrapper
- **Role**: Owns focus ring rendering. Sits between the root and visual container so focus styles do not interfere with background clipping.
- **Layout behavior**: Passthrough — matches root dimensions exactly. Does not clip content.
- **Variable usage**: `button/border/focus-ring`, `button/focus-ring/width`, `button/focus-ring/offset`

### Visual Container
- **Role**: Renders background fill, border, and border-radius. The primary surface that changes across types and states.
- **Layout behavior**: Fills the component root. Clips to border-radius. Does not own padding.
- **Variable usage**: `button/background/{type}/{state}`, `button/border/{type}/{state}`, `button/border/thickness/{size}`, `button/radius/{radius}`

### Content Container
- **Role**: Horizontal flex row that owns padding and aligns all content slots.
- **Layout behavior**: Horizontal flex, center-aligned on the cross axis. Gap applies only between visible siblings. Padding is symmetric.
- **Variable usage**: `button/spacing/horizontal/{size}`, `button/spacing/vertical/{size}`, `button/spacing/gap/{size}`

### Leading Slot
- **Role**: Container for a leading icon. Conditionally rendered — visible when `has-leading = true`. Fully collapsed (no space reserved) when inactive.
- **Layout behavior**: Fixed square dimensions from the size variable. No auto layout — children are positioned absolutely inside the slot frame.
- **Figma layer structure**: Contains one child `_icon-placeholder` ellipse (solid circle) sized to the full slot square (`button/icon/size/{size}`). Fill is bound to `button/foreground/{type}/{state}`. Replace this ellipse with a real icon component instance (INSTANCE_SWAP) when an icon library is connected.
- **Variable usage**: `button/icon/size/{size}`, `button/foreground/{type}/{state}`

### Label
- **Role**: Primary text content. Conditionally rendered based on content configuration.
- **Layout behavior**: Hugs content by default. In `fill` width mode, takes remaining flex space. Single-line only. Truncates with ellipsis on overflow.
- **Variable usage**: `button/typography/{size}/font-size`, `button/typography/{size}/font-weight`, `button/typography/{size}/line-height`, `button/foreground/{type}/{state}`

### Trailing Slot
- **Role**: Container for a trailing icon or indicator (e.g., dropdown caret). Conditionally rendered when `has-trailing = true`.
- **Layout behavior**: Matches Leading Slot sizing and collapse behavior. Mirrors position in RTL. No auto layout — children positioned absolutely.
- **Figma layer structure**: Contains one child `_icon-placeholder` ellipse (solid circle) sized to the full slot square (`button/icon/size/{size}`). Fill is bound to `button/foreground/{type}/{state}`. Replace with a real icon instance when an icon library is connected.
- **Variable usage**: `button/icon/size/{size}`, `button/foreground/{type}/{state}`

### Spinner Slot
- **Role**: Replaces the label (and optionally icons) during the `loading` state. Present only in `state=loading` variants.
- **Layout behavior**: Fixed square sized to `button/icon/size/{size}`. The `label` layer is `visible=false` in loading variants. All other content slots are hidden when the spinner is active.
- **Figma layer structure**: Contains a single `_spinner-arc` ellipse node with `arcData` — a 270° visible arc with `innerRadius = 0.56` (giving ~22% ring width). Fill bound to `button/foreground/{type}/loading`. Self-contained; no inner cutout frame required.
- **Variable usage**: `button/icon/size/{size}`, `button/foreground/{type}/loading`

---

## Properties

### Variant Properties

**`type`** — `primary` | `secondary` | `ghost`
Resolves the visual hierarchy of the button. Drives the background, border, and foreground variable namespace. Cannot be combined with another type simultaneously.

**`size`** — `small` | `medium` | `large`
Drives spacing, typography, and icon size variable resolution. Independent of type and tone.

**`state`** — `default` | `hover` | `pressed` | `focused` | `disabled` | `loading`
Resolves the interactive layer of all visual variables. In production, state is driven by interaction events. In design and documentation, it is exposed as a variant for specification and QA.

**`tone`** — `positive` | `danger`
Resolves the semantic color axis. Applies uniformly across all types — a `ghost` button in `danger` tone uses danger variables for ghost surfaces.

**`radius`** — `default` | `rounded` | `none`
Resolves the corner shape of the button. `default` uses `button/radius/default` (standard rounded corners per the design system scale), `rounded` uses `button/radius/rounded` (pill / full-radius shape), `none` uses `button/radius/none` (sharp, square corners). Independent of type, size, tone, and state — does not alter any color, spacing, or typography variable path.

---

### Boolean Properties

**`show-label`** — default: `true`
Controls label visibility. When `true`, the label text is visible. When `false`, the label is hidden — use in combination with `has-leading = true` to achieve icon-only mode. This property is linked to the label layer's `visible` attribute via `componentPropertyReferences` (default `true` means the label is shown by default; setting it to `false` hides it). Mutually exclusive usage: `show-label = false` requires `has-leading = true` to ensure visible content exists.

**`has-leading`** — default: `false`
Activates the Leading Slot. The `_icon-placeholder` frame (and any icon swapped in) becomes visible before the label.

**`has-trailing`** — default: `false`
Activates the Trailing Slot. The `_icon-placeholder` frame (and any icon swapped in) becomes visible after the label.

**`icon-only`** — default: `false`
Convenience documentation alias. In Figma, icon-only mode is achieved by setting `has-leading = true` and `show-label = false`. There is no separate `icon-only` component property linked to layer visibility — use the two-property combination instead.

**`full-width`** — default: `false`
Sets `width_mode` to `fill`. The button expands to 100% of its container. The label takes remaining flex space.

---

### Content Properties

**`label`** — type: `string`
Visible text content. Required unless `show-label = false` (icon-only mode). Used as the accessible name when visible. Should be concise (1–4 words). When `show-label = false`, an `aria-label` must be provided for accessibility.

**`leading-icon`** — type: `slot`
Icon asset passed into the Leading Slot. Rendered only when `has-leading` or `icon-only` is `true`. Icon size is resolved from `button/icon/size/{size}` — the slot does not override it.

**`trailing-icon`** — type: `slot`
Icon asset passed into the Trailing Slot. Rendered only when `has-trailing` is `true`. Follows the same sizing rules as the leading icon.

---

## Variant System

The button variant space is defined by the intersection of four axes:

**Type × Size × State × Tone**

### Combinatorial Logic

Every valid combination of these four axes must produce a fully resolved variable binding. The governing rules are:

1. **Type** establishes the variable namespace — `button/background/primary/*`, `button/background/secondary/*`, `button/background/ghost/*`.
2. **Tone** resolves the semantic color axis. Positive tone uses the base path with no tone segment. Danger tone inserts `/danger/` before the state segment — e.g., `button/background/primary/danger/hover`.
3. **State** resolves the interaction layer within the type+tone namespace — e.g., `button/background/primary/hover`.
4. **Size** resolves independently — `button/spacing/*/{size}`, `button/typography/{size}/*`, and `button/icon/size/{size}` are not segmented by type or tone.
5. **Radius** resolves the corner shape independently — `button/radius/{radius}` does not interact with type, tone, state, or size variable paths. All three options (`default`, `rounded`, `none`) are valid with every other variant combination.

### Superstate Rules

- `loading` is a superstate that overrides `hover`, `pressed`, and `focused` visually while retaining type and tone variable resolution.
- `disabled` suppresses all interactive states. Background, foreground, and border tokens resolve to their `/disabled` semantic equivalents — no opacity reduction is applied. Disabled appearance is communicated entirely through token swaps.

---

## States

### Default
- Variables resolved: `button/background/{type}/default`, `button/border/{type}/default`, `button/foreground/{type}/default`
- For danger tone, paths include `/danger/` before the state segment: `button/background/{type}/danger/default`
- No overlay, no visual augmentation
- Cursor: `pointer` (web), standard touch affordance (mobile)
- All interactive properties are transition-ready via `button/motion/duration/default` and `button/motion/easing/default`

### Hover
- Background resolves to `button/background/{type}/hover`
- Border resolves to `button/border/{type}/hover`
- Foreground resolves to `button/foreground/{type}/hover`
- Surface tint overlay may be applied — particularly for secondary and ghost types
- Transition: `button/motion/duration/default`, `button/motion/easing/default`
- Not applicable on mobile

### Pressed
- All variables resolve to `button/background/{type}/pressed`, `button/border/{type}/pressed`, `button/foreground/{type}/pressed`
- Overlay intensity increases relative to hover — communicates physical depression
- Scale transform may be applied via `button/pressed/transform` variable (a scale factor, not a raw value)
- Transition: shorter duration via `button/motion/duration/pressed`

### Focused
- Visual container variables remain at `default` values
- Focus ring rendered by the Interaction Wrapper using `button/border/focus-ring`, `button/focus-ring/width`, `button/focus-ring/offset`
- Focus ring is always visible — not suppressed by pointer interaction (WCAG 2.4.11)
- In high-guidance mode, `button/focus-ring/width` and `button/focus-ring/offset` resolve to larger values
- Applies on both keyboard and pointer focus

### Disabled
- Background resolves to `button/background/{type}/disabled`
- Foreground resolves to `button/foreground/{type}/disabled`
- Border resolves to `button/border/{type}/disabled`
- All tokens swap to their `/disabled` semantic equivalents — **no opacity reduction is applied**
- No hover, pressed, or focused transitions occur
- Cursor: `not-allowed` (web), non-interactive (mobile)
- Removed from tab order programmatically

### Loading
- `is-loading = true` activates this state
- Label and icon slots hidden; Spinner Slot rendered in their place
- Button dimensions are preserved — no layout shift
- Background and border variables remain at `default` values for the current type and tone
- Foreground resolved from `button/foreground/{type}/loading`
- Pointer events suppressed; `aria-busy = true` set on the component

---

## Variable Mapping

All variables are semantic or component-level. No raw values are permitted. All variable names conform to the Naming Rules defined in this skill.

### Background Variables
- `button/background/{type}/{state}` — positive tone (default)
- `button/background/{type}/danger/{state}` — danger tone

### Border Variables
- `button/border/{type}/{state}`
- `button/border/{type}/danger/{state}`
- `button/border/thickness/{size}`
- `button/radius/{radius}`

### Foreground Variables (Label + Icon)
- `button/foreground/{type}/{state}` — positive tone (default)
- `button/foreground/{type}/danger/{state}` — danger tone

### Icon Variables
- `button/icon/size/{size}`

### Spacing Variables
- `button/spacing/horizontal/{size}`
- `button/spacing/vertical/{size}`
- `button/spacing/gap/{size}`
- `button/spacing/icon-only/{size}`

### Radius Variables
- `button/radius/{radius}` — resolved by the `radius` variant property
  - `button/radius/default` — standard rounded corners (`radius/component/control/md`)
  - `button/radius/rounded` — pill / full-radius shape (`radius/component/control/full`)
  - `button/radius/none` — sharp, square corners (`radius/none`)

### Typography Variables
- `button/typography/{size}/font-family`
- `button/typography/{size}/font-size`
- `button/typography/{size}/font-weight`
- `button/typography/{size}/line-height`
- `button/typography/{size}/letter-spacing`

### Focus Variables
- `button/border/focus-ring` — color of the focus ring outline
- `button/focus-ring/width` — thickness of the focus ring
- `button/focus-ring/offset` — gap between button edge and focus ring

### Root & Misc Variables
- `button/root/min-width`
- `button/root/cursor`
- `button/root/min-touch-target`
- `button/pressed/transform`

### Motion Variables
- `button/motion/duration/default`
- `button/motion/duration/pressed`
- `button/motion/easing/default`

### Rules
- Always reference semantic or component-level variables
- Never use raw values (hex, px, rem, etc.)
- Never reference primitive variables directly
- All variable names must conform to the Naming Rules defined in this skill

---

## Layout Rules

- **No fixed height**: Button height is always derived from `button/spacing/vertical/{size}` plus the resolved value of `button/typography/{size}/line-height`. No height override is applied at any size.
- **Horizontal padding**: `button/spacing/horizontal/{size}` applied symmetrically on both sides. Does not vary by type or tone.
- **Vertical padding**: `button/spacing/vertical/{size}` varies by size and is influenced by the `density` input. Both `medium` and `large` size buttons resolve vertical padding from `button/spacing/vertical/md` (`space/6`); `button/spacing/vertical/lg` (`space/8`) is defined but not consumed in the standard size scale.
- **Gap**: `button/spacing/gap/{size}` applies only between visible siblings in the Content Container.
- **Icon sizes**: Always resolved from `button/icon/size/{size}`. The icon asset scales to fit — it does not overflow the slot.
- **Full-width**: When `is-full-width = true`, the root becomes 100% width. The label takes remaining flex space and is centered within it.
- **Content-width**: When `is-full-width = false`, the root hugs the content. `button/root/min-width` prevents degenerate rendering.
- **Long text**: The label truncates with an ellipsis on overflow. The button never wraps or grows in height due to label overflow.
- **Icon-only**: Square padding from `button/spacing/icon-only/{size}`. The root aspect ratio is always 1:1.

---

## Icon & Content Behavior

### Text-Only (Default)
Only the Label is present in the Content Container. Leading and trailing slots are fully absent. Padding is applied symmetrically. This is the minimal and default configuration.

### Leading Icon + Label
The Leading Slot is rendered before the Label, separated by `button/spacing/gap/{size}`. The trailing slot is absent and contributes no space. Communicates additional semantic context before the action label.

### Label + Trailing Icon
The Label is rendered before the Trailing Slot, separated by `button/spacing/gap/{size}`. The leading slot is absent. Common for expandable or navigational actions.

### Both Icons + Label
Leading Slot, Label, and Trailing Slot are all rendered. Gaps apply between each adjacent pair. The label remains the primary semantic element.

### Icon-Only
Only the Leading Slot is rendered. The label is visually hidden but must be provided as an accessible label. Square padding from `button/spacing/icon-only/{size}` is applied. Trailing slot is absent in this configuration.

### Slot Collapse Behavior
When a slot is inactive, it is fully absent from the layout — no space reserved, no gap contribution, no rendered structure. Button dimensions always reflect active content only.

---

## Interaction Rules

**Hover**: Visual container transitions to hover variables on pointer entry via `button/motion/duration/default` and `button/motion/easing/default`. Not triggered by keyboard navigation. Not applicable on mobile.

**Pressed**: On pointer down or `Space`/`Enter` keydown, transitions to pressed variables via `button/motion/duration/pressed`. On pointer up or key release, returns to default or hover depending on pointer position.

**Focus**: Focus ring is rendered on keyboard focus. Not suppressed on mouse click (WCAG 2.4.11). Rendered outside the button boundary via `button/focus-ring/offset`. Does not affect adjacent layout.

**Disabled**: All pointer and keyboard interactions suppressed. Removed from tab order. No state transition occurs. Cursor is `not-allowed` on web.

**Loading**: Pointer interactions suppressed. Type and tone appearance retained. Spinner replaces label slot. `aria-busy` signals loading to assistive technology.

**Cursor**: `pointer` in default, hover, and focused states (web). `not-allowed` in disabled. Resolved from `button/root/cursor` in loading state.

---

## Accessibility Rules

**Contrast**: All foreground variables against their resolved background variables must meet WCAG AA minimum — 4.5:1 for normal text, 3:1 for large text and graphical elements. The variable system guarantees this; the button skill enforces that all visual properties are variable-driven with no bypass.

**Focus Visibility**: The focus ring must always be visible on keyboard focus. It must satisfy WCAG 2.4.11 — minimum area, contrast, and offset. `button/border/focus-ring`, `button/focus-ring/width`, and `button/focus-ring/offset` variables must be defined to meet this requirement.

**Keyboard Interaction**:
- `Tab` / `Shift+Tab` — moves focus to/from the button
- `Enter` — activates the button
- `Space` — activates the button
- No other keys are consumed

**Screen Reader Labeling**:
- Visible label serves as the accessible name
- `icon-only = true` requires an explicit `aria-label` — the icon alone is not sufficient
- Loading state must set `aria-busy="true"`
- Disabled state must communicate non-interactability via `disabled` attribute or `aria-disabled="true"` with tabindex removal

**Color Independence**: State changes must never be communicated by color alone. Focus uses focus ring geometry. Disabled uses token-swapped `/disabled` semantic values plus `aria-disabled` — no opacity is applied. Loading uses spinner plus `aria-busy`. No state relies solely on a color shift.

---

## Responsiveness

**Cross-Device Behavior**: The button does not change type, tone, or size variables in response to viewport width. Responsive adaptation is a layout-level concern. The consuming layout is responsible for toggling between `hug` and `fill` width modes at relevant breakpoints.

**Mobile vs Desktop**:
- On `platform = mobile`, the minimum touch target is 44×44pt enforced via `button/root/min-touch-target`. The visual button may be smaller; the interactive area is padded to meet the minimum.
- On `platform = web`, hover state is available. On mobile, hover is not applicable — pressed state is the primary interactive feedback.
- Touch targets are achieved through invisible padding or an expanded hit area, not by increasing the visual button size.

---

## Theming & Adaptation

### Density → Spacing
- `low`: `button/spacing/vertical/{size}` variables resolve to larger values — taller buttons with more breathing room.
- `medium`: Standard spacing resolution.
- `high`: `button/spacing/vertical/{size}` variables resolve to smaller values — compact buttons with reduced vertical padding.

### Visual Intensity → Styling
- `low`: Variables resolve to muted, desaturated values. Backgrounds are near-neutral. Borders are subtle. Contrast is maintained at minimum sufficient levels.
- `medium`: Standard brand-aligned variable resolution.
- `high`: Fully saturated, high-contrast variable values. Primary buttons use maximum brand saturation. Secondary and ghost buttons have stronger borders.

### Guidance → Affordance
- `low`: Minimal affordance — reduced border visibility on secondary/ghost, subtle hover overlay, thinner `button/focus-ring/width` values.
- `medium`: Standard affordance.
- `high`: Maximum affordance — visible borders on all types, high-contrast `button/border/focus-ring` and `button/focus-ring/width`, stronger hover and pressed overlay values. Appropriate for first-time users, accessibility-critical contexts, or low-familiarity environments.

---

## Content Guidelines

**Label Length**: 1–4 words. Single verbs are preferred for primary actions ("Save", "Submit", "Continue"). Two-word verb-noun constructions are acceptable ("Add item", "Delete file"). Labels beyond 4 words are strongly discouraged.

**Tone of Language**: Active, imperative voice. The label should describe the action outcome, not the process. Prefer "Save changes" over "Click to save". Prefer "Delete" over "Remove this item permanently".

**Verb Usage**: Always lead with a verb. Avoid nouns alone ("Settings", "Profile") unless the button is clearly navigational and the action is contextually implicit.

**Ambiguous Labels**: Avoid labels that rely on surrounding context for meaning ("OK", "Yes", "No"). Destructive actions should be explicit ("Delete account", "Cancel subscription").

**Capitalization**: Sentence case for all labels. Title case is not recommended. All-caps is not permitted.

---

## Do / Don't

### Do
- Resolve all button variables against global semantic variables before any design work begins
- Use `primary` for the single most important action on a surface
- Use `secondary` for supporting actions that are co-equal in frequency but lower in hierarchy
- Use `ghost` for actions in toolbars, dense UIs, or as a tertiary option
- Provide an explicit `aria-label` for every icon-only button
- Use `danger` tone for destructive, irreversible, or high-risk actions
- Keep button groups to a maximum of 3 buttons with clear hierarchy
- Preserve button dimensions during the loading state to prevent layout shift
- Use `fill` width mode in stacked mobile layouts and form footers
- Apply density adjustments consistently across all interactive components on a surface

### Don't
- Do not begin component design before button variables are mapped to global semantic variables
- Do not place two `primary` buttons at the same hierarchy level on a surface
- Do not use `danger` tone for routine or reversible actions
- Do not rely on color alone to communicate state
- Do not hardcode any padding, font size, border radius, or color value
- Do not allow text wrapping — buttons are always single-line
- Do not use icon-only buttons without an accessible label (`aria-label` when `show-label = false`)
- Do not suppress the focus ring under any circumstances
- Do not use a button where an anchor is semantically correct (pure navigation with no side effects)
- Do not apply custom colors outside the variable system
- Do not disable a button as a substitute for form validation feedback

---

## Edge Cases

**Very Long Text**: The label truncates with an ellipsis when it exceeds available width. The button never wraps or grows vertically. A tooltip should surface the full label when truncation occurs. `button/root/min-width` prevents collapse to a degenerate size.

**Icon-Only**: Set `has-leading = true` and `show-label = false`. The slot's `_icon-placeholder` frame becomes visible; the label is hidden. Replace `_icon-placeholder` with a real icon via INSTANCE_SWAP when an icon library is available. Square padding from `button/spacing/icon-only/{size}` is enforced. An `aria-label` must be provided. No trailing slot is permitted in this configuration.

**Loading + Icon Combinations**: When `is-loading = true`, all visible content slots (label, leading icon, trailing icon) are replaced by the spinner. Icons do not co-render with the spinner. Button dimensions are unchanged.

**Disabled + Focus**: A button with `disabled = true` is removed from the tab order. If the experience requires focus to communicate a reason for disablement (e.g., a tooltip), `aria-disabled = true` with `tabindex="0"` may be used — the visual state is identical to `disabled` but keyboard focus is permitted.

**RTL Layout**: Leading and trailing slots swap visual positions. `button/spacing/horizontal/{size}` and `button/spacing/gap/{size}` values are unchanged. Icon glyphs that are directionally meaningful (arrows) are handled by the icon asset specification, not this skill.

**No Label, No Icon**: An invalid configuration. A label is required unless `icon-only = true` with an icon provided.

**Simultaneous State Conflicts**: If `is-loading = true` and `state = hover`, loading takes precedence as a superstate. Type and tone variable resolution is retained.

---

## Figma Component Notes

- **Page**: All button components must reside on a dedicated page named **`Button`**. Reuse this page if it already exists — do not create a duplicate.
- **Update, do not recreate**: When applying updates from this skill, modify the existing ComponentSet and its variants in place. Do not duplicate frames, pages, or component sets.

- **Variant count**: The full variant matrix is **type × size × state × tone × radius = 3 × 3 × 6 × 2 × 3 = 324 variants**. The `radius` axis (`default` | `rounded` | `none`) is a first-class variant property on the ComponentSet — not a boolean or style override. Every component name must include all five dimensions, e.g. `type=primary, size=medium, state=default, tone=positive, radius=default`. Producing only 108 variants (omitting the `radius` dimension) is a build error.

- **Radius variant property**: When creating the ComponentSet, `radius` must be included as a variant property alongside `type`, `size`, `state`, and `tone`. Each of the three radius variants binds `cornerRadius` to a different variable:
  - `radius=default` → `button/radius/default`
  - `radius=rounded` → `button/radius/rounded`
  - `radius=none` → `button/radius/none`
  Do not use a separate "radius" frame or style — it must be a variant dimension on the ComponentSet.

- **Boolean properties — linkage is mandatory**: `addComponentProperty` alone is not sufficient. After creating each boolean property on the ComponentSet, the property key returned (a plain string like `'has-leading#306:0'`) must be assigned to the `componentPropertyReferences` map of the target layer inside **every** component variant. Without this linkage, toggling the property in the panel produces no visual change.

  Four boolean properties must be registered and linked:

  | Property | Default | Target layer | `componentPropertyReferences` field |
  |---|---|---|---|
  | `has-leading` | `false` | `_leading-slot` | `visible` |
  | `has-trailing` | `false` | `_trailing-slot` | `visible` |
  | `show-label` | `true` | `label` | `visible` |
  | `full-width` | `false` | *(no layer reference — layout override)* | — |

  > **Critical: `show-label` uses default `true`.** This is what makes the label visible by default. Setting it to `false` hides the label — which, combined with `has-leading = true`, produces icon-only mode. Do NOT name this property `icon-only` (that name implies `true = hide label`, which is the wrong logical direction for `componentPropertyReferences`; `true` means visible).

  ```js
  // addComponentProperty returns the key string directly (e.g. 'has-leading#306:0')
  const pkLeading  = cs.addComponentProperty('has-leading',  'BOOLEAN', false);
  const pkTrailing = cs.addComponentProperty('has-trailing', 'BOOLEAN', false);
  const pkLabel    = cs.addComponentProperty('show-label',   'BOOLEAN', true);  // default TRUE
  cs.addComponentProperty('full-width', 'BOOLEAN', false);

  for (const comp of cs.children) {
    if (comp.type !== 'COMPONENT') continue;
    const leadingSlot  = comp.findOne(n => n.name === '_leading-slot');
    const trailingSlot = comp.findOne(n => n.name === '_trailing-slot');
    const labelNode    = comp.findOne(n => n.name === 'label');
    if (leadingSlot)  leadingSlot.componentPropertyReferences  = { visible: pkLeading };
    if (trailingSlot) trailingSlot.componentPropertyReferences = { visible: pkTrailing };
    if (labelNode)    labelNode.componentPropertyReferences    = { visible: pkLabel };
  }
  ```

  **Resulting icon-only workflow in Figma:**
  - Text button (default): `show-label = true`, `has-leading = false`
  - Icon + label: `show-label = true`, `has-leading = true`
  - **Icon-only: `show-label = false`, `has-leading = true`**
  - Label + trailing icon: `show-label = true`, `has-trailing = true`

- **Typography — all five properties must be variable-bound**: Every text layer in every variant must have all five typography properties resolved exclusively from `button/typography/{size}/*` variables via `setBoundVariable`. Setting any property directly on the text node (hardcoded `fontName`, raw `fontSize`, raw `lineHeight`, raw `letterSpacing`) is a build error. Use the following binding pattern for every label text node:
  ```js
  label.setBoundVariable('fontSize',      varMap[`button/typography/${sa}/font-size`]);
  label.setBoundVariable('lineHeight',    varMap[`button/typography/${sa}/line-height`]);
  label.setBoundVariable('letterSpacing', varMap[`button/typography/${sa}/letter-spacing`]);
  label.setBoundVariable('fontFamily',    varMap[`button/typography/${sa}/font-family`]);
  label.setBoundVariable('fontStyle',     varMap[`button/typography/${sa}/font-weight`]);
  ```
  `font-family` is a STRING variable. `font-weight` is a FLOAT variable that Figma maps to a font style string internally — bind it to the `fontStyle` property, not `fontWeight`. Set `label.fontName` only as a fallback seed before binding; the variable binding overrides it at render time.

- **Spacing**: All padding and gap values must be bound to `button/spacing/*` variables. No hardcoded spacing values. Vertical padding for both `medium` and `large` size variants must resolve from `button/spacing/vertical/md`.
- **Disabled state**: Disabled button variants must use `/disabled` semantic color tokens on background, foreground, and border layers. No layer opacity or fill opacity may be applied. Disabled appearance is achieved exclusively through token swaps.
- **Semantic enforcement**: Every variable binding in Figma must point to a `button/` component variable — never to a semantic or primitive variable directly. The `button/` → `semantics/` → `primitives/` chain must be intact for all properties.
- **Post-update check**: After applying any change, verify all variant/state combinations render correctly and that no variables appear unresolved (shown in red) in the Figma variable panel.

---

## Figma Plugin API — Implementation Rules

This section defines the exact patterns the Figma Plugin API execution layer must follow. Deviating from these patterns is the direct cause of missing radius variants, non-functional boolean properties, and unbound typography. These rules are non-negotiable and override any conflicting general pattern.

---

### Rule 1 — Variant Matrix Must Include Radius

The variant matrix is **type × size × state × tone × radius = 324 variants**. The build loop must have five nested dimensions:

```js
const TYPES   = ['primary', 'secondary', 'ghost'];
const SIZES   = ['small', 'medium', 'large'];
const STATES  = ['default', 'hover', 'pressed', 'focused', 'disabled', 'loading'];
const TONES   = ['positive', 'danger'];
const RADII   = ['default', 'rounded', 'none'];

for (const type of TYPES)
  for (const size of SIZES)
    for (const state of STATES)
      for (const tone of TONES)
        for (const radius of RADII) {
          const comp = figma.createComponent();
          comp.name = `type=${type}, size=${size}, state=${state}, tone=${tone}, radius=${radius}`;
          // Bind cornerRadius to the matching variable
          comp.setBoundVariable('cornerRadius', varMap[`button/radius/${radius}`]);
          // ... all other bindings
        }
```

Producing 108 variants without the `radius` loop is a build error and must not be done.

---

### Rule 2 — Boolean Properties Must Be Linked via componentPropertyReferences

`addComponentProperty` returns **the property key string directly** (e.g. `'has-leading#306:0'`) — NOT an object. Do not wrap it in `Object.keys()`. Assign the returned string value directly to `componentPropertyReferences`.

Four properties must be registered. Three are linked to layer visibility. `show-label` **must default to `true`** — this is what makes the label visible by default and enables icon-only mode via `show-label = false`.

```js
// addComponentProperty returns the property key string directly
const pkLeading  = cs.addComponentProperty('has-leading',  'BOOLEAN', false);
const pkTrailing = cs.addComponentProperty('has-trailing', 'BOOLEAN', false);
const pkLabel    = cs.addComponentProperty('show-label',   'BOOLEAN', true);  // ← default TRUE
cs.addComponentProperty('full-width', 'BOOLEAN', false); // layout-only, no layer ref

for (const comp of cs.children) {
  if (comp.type !== 'COMPONENT') continue;
  const leadingSlot  = comp.findOne(n => n.name === '_leading-slot');
  const trailingSlot = comp.findOne(n => n.name === '_trailing-slot');
  const labelNode    = comp.findOne(n => n.name === 'label');
  if (leadingSlot)  leadingSlot.componentPropertyReferences  = { visible: pkLeading };
  if (trailingSlot) trailingSlot.componentPropertyReferences = { visible: pkTrailing };
  if (labelNode)    labelNode.componentPropertyReferences    = { visible: pkLabel };
}
```

**Why `show-label` not `icon-only`**: `componentPropertyReferences` maps `true → visible`. Naming the property `icon-only` would make `icon-only=true` show the label and `icon-only=false` hide it — the inverse of intended behaviour. `show-label=true` (default) shows the label; `show-label=false` hides it. Icon-only mode = `has-leading=true` + `show-label=false`.

---

### Rule 3 — Typography: All Five Properties Bound via setBoundVariable

Every label text node in every variant must have all five typography properties bound. Do NOT set any property directly on the node as a raw value. The binding pattern is:

```js
const sa = { small: 'sm', medium: 'md', large: 'lg' }[size];

// Seed the fontName first so Figma has a valid font to render before variables resolve
label.fontName = { family: 'Inter', style: 'Medium' };

// Then bind all five — variable bindings override the seed at render time
label.setBoundVariable('fontSize',      varMap[`button/typography/${sa}/font-size`]);
label.setBoundVariable('lineHeight',    varMap[`button/typography/${sa}/line-height`]);
label.setBoundVariable('letterSpacing', varMap[`button/typography/${sa}/letter-spacing`]);
label.setBoundVariable('fontFamily',    varMap[`button/typography/${sa}/font-family`]);
label.setBoundVariable('fontStyle',     varMap[`button/typography/${sa}/font-weight`]);
```

**Property name mapping:**
| Typography variable | `setBoundVariable` property name | Variable type |
|---|---|---|
| `button/typography/{size}/font-size` | `'fontSize'` | FLOAT |
| `button/typography/{size}/line-height` | `'lineHeight'` | FLOAT |
| `button/typography/{size}/letter-spacing` | `'letterSpacing'` | FLOAT |
| `button/typography/{size}/font-family` | `'fontFamily'` | STRING |
| `button/typography/{size}/font-weight` | `'fontStyle'` | FLOAT (maps to style string internally) |

Setting `label.lineHeight = { unit: 'PIXELS', value: 16 }` or similar raw assignments is forbidden. Every property goes through `setBoundVariable`.

---

### Rule 4 — Variable Cache Must Cover All Collections

Before any component is created, load all local variable collections into a single flat map:

```js
const varMap = {};
for (const col of await figma.variables.getLocalVariableCollectionsAsync())
  for (const id of col.variableIds) {
    const v = await figma.variables.getVariableByIdAsync(id);
    if (v) varMap[v.name] = v;
  }
```

All `setBoundVariable` and `setBoundVariableForPaint` calls must use entries from this map. Never pass `undefined` — log a warning and skip the binding if a variable is missing.

---

### Rule 5 — Icon Placeholders and Spinner Must Contain Visual Content

Slot frames and spinner frames are **not** empty. Each must contain a child element with foreground color bound to the correct variable. Without content, toggling `has-leading = true` reveals an empty transparent frame.

**Leading and Trailing slot — `_icon-placeholder` (solid circle ellipse):**
```js
// After creating the slot frame (ls or ts), add a solid circle as the icon placeholder:
const iconPh = figma.createEllipse();
iconPh.name = '_icon-placeholder';
iconPh.resize(SS[size], SS[size]);   // SS = { small:16, medium:20, large:24 }
const fgPaint = figma.variables.setBoundVariableForPaint(
  { type: 'SOLID', color: { r:0.5, g:0.5, b:0.5 } }, 'color', fgVar
);
iconPh.fills = [fgPaint];
slotFrame.appendChild(iconPh);
iconPh.x = 0; iconPh.y = 0;
```
A solid circle is visually distinct from the spinner arc and clearly communicates "icon goes here". Replace with a real icon component instance (INSTANCE_SWAP) when an icon library is available.

**Loading state — `_spinner-arc` (arc ellipse, 270° donut ring):**
```js
// Inside the _spinner frame, add a single arc ellipse:
const arc = figma.createEllipse();
arc.name = '_spinner-arc';
arc.resize(ss, ss);
arc.arcData = {
  startingAngle: 0,             // 3 o’clock position
  endingAngle: Math.PI * 1.5,   // 270° clockwise — leaves 90° gap
  innerRadius: 0.56             // ~22% ring width at all sizes
};
const loadPaint = figma.variables.setBoundVariableForPaint(
  { type: 'SOLID', color: { r:0.5, g:0.5, b:0.5 } }, 'color', fgVar
);
arc.fills = [loadPaint];
spinnerFrame.appendChild(arc);
arc.x = 0; arc.y = 0;
```
The `arcData.innerRadius = 0.56` produces a ring with outer/inner radii ratio of 56%, giving ~22% stroke width at 16px/20px/24px sizes. No separate background-colored inner frame is needed.

**Seed cornerRadius before binding**: Always set `node.cornerRadius = <seed>` before calling `setBoundVariable(‘cornerRadius’, v)`. The Plugin API requires the property to have a numeric value before a variable can be attached.

---

## Final Validation

After applying any update to the button component or its variable bindings, verify all of the following:

**Variable bindings**
- All `button/` variables resolve correctly through the semantic chain with no unresolved (red) entries in the Figma panel
- No raw hex, pixel, or font values exist anywhere in the component tree

**Spacing**
- All padding and gap properties are bound to `button/spacing/*` variables
- Both `medium` and `large` size buttons use `button/spacing/vertical/md` for vertical padding
- No hardcoded spacing values of any kind

**Radius**
- Corner radius on every button variant resolves from `button/radius/default`, `button/radius/rounded`, or `button/radius/none`

**Typography**
- Every text layer has all five properties (`font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`) bound to `button/typography/{size}/*` variables — no exceptions

**Disabled state**
- Disabled variants use `/disabled` semantic color tokens on background, foreground, and border
- No opacity overrides exist on any disabled layer or component group

**Accessibility**
- Focus ring is visible and resolves from `button/border/focus-ring`, `button/focus-ring/width`, `button/focus-ring/offset`
- Disabled state communicates via `aria-disabled` and token swaps — no opacity

**Radius variant**
- All three radius values (`default`, `rounded`, `none`) are present as a variant dimension
- Total variant count is 324 (3 × 3 × 6 × 2 × 3) — a count of 108 means radius was omitted and is a build error
- `cornerRadius` on every variant resolves from `button/radius/default`, `button/radius/rounded`, or `button/radius/none`

**Boolean properties**
- `has-leading`, `has-trailing`, `show-label`, `full-width` exist as component properties on the ComponentSet
- `has-leading` and `has-trailing` are linked via `componentPropertyReferences` to the `visible` property of `_leading-slot` and `_trailing-slot` respectively in every variant
- `show-label` (default `true`) is linked via `componentPropertyReferences` to the `visible` property of `label` in every variant
- Icon-only mode = `has-leading = true` + `show-label = false`; toggling these two properties in the Figma panel visibly shows the icon and hides the label
- `_leading-slot` and `_trailing-slot` contain an `_icon-placeholder` child frame with foreground color bound to the correct `button/foreground/{type}/{state}` variable
- `_spinner` in loading-state variants contains a `_arc-outer`/`_arc-inner` donut shape, not an empty frame

**Consistency**
- All type × size × state × tone × radius combinations are present and fully resolved
- No broken references, missing instances, or structural inconsistencies across the ComponentSet

---

## Constraints

- Button variables must be mapped to global semantic variables before any component design begins
- No hardcoded values of any kind — all spacing, color, typography, and radius values resolved exclusively from variables
- Disabled state communicated through `/disabled` semantic token swaps only — no opacity reduction permitted on any layer or component
- Fully variable-driven across all axes: type, tone, state, size, theme, density, guidance, visual_intensity
- Context-aware output — the same specification resolves differently based on input context without structural change
- Consistent across all valid variant combinations — no combination produces an unresolved or partial variable binding
- No layout breakage under any content condition — truncation, minimum width, and dimension preservation rules always enforced
- No accessibility regressions — focus visibility, contrast, and screen reader labeling guaranteed by specification
- All variable names conform to the enforced Naming Rules: lowercase, slash-separated, kebab-case compound names

---

## Notes

- This skill specifies the button as a design system component — not as an HTML element or any tool-specific object. Implementors in any medium resolve this specification into their medium-specific representation.
- All variable names follow the enforced slash-separated naming system. Implementors map these paths to their system's convention (CSS custom properties, design token JSON, platform-native variables, etc.).
- Global semantic variable names in the Button Variables section are placeholders until the variable agent skill is fully authored. At that point, the right-hand column of each mapping table must be reconciled with the exact names defined there.
- This specification does not define animation keyframes, gesture thresholds, or platform-native interaction APIs. Those are resolved by platform-specific implementation layers consuming this specification.
- **Disabled state uses no opacity**: The `button/opacity/disabled` variable has been removed from this specification. Disabled appearance is achieved entirely through `/disabled` semantic color token swaps on background, foreground, and border. No layer, group, or component opacity is applied at any level.

---

## Figma Layout & Organization Rules

This section defines how button components must be arranged when generated. All rules in this section are automatically applied when the skill is executed — no additional layout instructions from the user are required.

---

### Page Structure

- Always create or reuse a page named **"Button"** — the page defined in Figma Component Notes above
- Do **not** create duplicate pages; check for an existing "Button" page before creating one
- All frames produced by this skill must exist exclusively within this page

---

### Layout Rules (CRITICAL)

- Use **auto layout** for all frames and containers — manual (`absolute`) positioning is forbidden
- Do **not** allow overlapping or stacked components under any condition
- Every frame must have defined horizontal and vertical padding and a consistent gap value

---

### Grid Organization

Arrange button variants in a structured grid with the following hierarchy:

- **Top-level sections** = radius variants (`default`, `rounded`, `none`) — one labelled frame per radius value
- **Within each radius section — sub-sections** = sizes (`small`, `medium`, `large`) — one labelled frame per size
- **Within each size sub-section — rows** = type × tone (`primary/positive`, `primary/danger`, `secondary/positive`, `secondary/danger`, `ghost/positive`, `ghost/danger`) — one horizontal auto-layout row per combination
- **Within each row — columns** = states (`default`, `hover`, `pressed`, `focused`, `disabled`, `loading`) — one variant per column

Each row is a horizontal auto-layout frame. Each size sub-section is a vertical auto-layout frame stacking rows. Each radius section is a vertical auto-layout frame stacking size sub-sections. All three radius sections are placed side-by-side horizontally on the page with a minimum 80px gap between them.

Total variants per radius section: 3 types × 2 tones × 3 sizes × 6 states = 108. Three sections × 108 = 324 variants total.

---

### Section Separation

Each section — Variants, States, Sizes — must:

- Be placed in its own named frame
- Use **vertical auto layout**
- Carry a section label as a text layer above the frame (e.g., "Small", "Medium", "Large")
- Maintain **consistent gap** between sections (minimum 48px recommended)

---

### Spacing & Alignment

- Maintain consistent spacing between rows, columns, and sections
- All elements must be left-aligned or center-aligned — choose one and apply it consistently across the entire page
- No visual misalignment is permitted — verify alignment after every frame is placed

---

### Component Grouping

- All `primary` button instances occupy one row; all `secondary` instances occupy one row; and so on
- Each row is clearly labelled (text layer above or beside the row frame)
- Visual hierarchy must be apparent: size sections separate → variant rows within each section → state columns within each row

---

### Constraints

- No overlapping elements
- No duplicate component instances
- No unstructured (free-floating) placement
- The resulting canvas must resemble a clean design system documentation page: labelled sections, uniform spacing, aligned grid
