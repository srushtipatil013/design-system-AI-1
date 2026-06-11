---
name: list-item
description: Use this skill when generating or defining the ListItem component in a design system. Covers the list item anatomy, leading/trailing slot definitions (icon, avatar, checkbox, radio, badge, tag, pill), nested list levels (parent/child/sub-child), all interactive states, density modes, enterprise features, tokens, properties, accessibility, and behavior rules. Applies to settings rows, navigation rows, data rows, action rows, and selection rows.
---

# List Item Skill

## Purpose

This skill defines the complete declarative specification for the **ListItem** component within a design system. It produces a fully resolved, variable-bound, context-aware component model consumable by design tooling, component libraries, documentation systems, and QA pipelines. It describes what a list item is — its anatomy, variant space, variable bindings, slot model, nesting behavior, behavior rules, and accessibility guarantees — not how to construct it in any specific medium.

**Scope:** This skill covers the **ListItem row only** — the individual interactive row element. It does not define a list container, section headers, standalone dividers, or loading skeletons. Those are separate component concerns.

ListItem is the atomic unit that composes into any list-like surface:
- Settings rows, navigation rows, action rows
- Single-select and multi-select rows
- Nested tree rows (parent / child / sub-child — up to 3 levels)
- Rows with rich leading slots (icon, avatar, checkbox, radio, badge, tag, pill)
- Rows with rich trailing slots (icon, badge, tag, pill, metadata text, toggle)

---

## List-Item Variables

List-item variables must be defined and resolved before any aspect of the ListItem component is designed, built, or documented. They form the foundational contract between the ListItem and the global design system. No visual decision — spacing, color, typography, radius, or border — may be made until its corresponding list-item variable has been mapped to a global semantic variable from the variable agent.

List-item variables do not hold raw values. They are a mapping layer only. Each list-item variable points to a global semantic variable, which is where the resolved value lives. When the global variable agent defines or updates the semantic layer, all list-item variable mappings must be verified against it.

**Format**: `component-variable → global-semantic-variable`

> ⚠️ The global semantic variable names on the right side of each mapping are placeholders following the system's slash-based naming convention. They must be reconciled with the exact variable names defined in the variable agent skill before production use.

All variable names conform to the Naming Rules defined in this skill: lowercase, slash-separated, kebab-case for compound words, structured as `component/category/variant/property`.

---

### Typography — Label

Label text is the primary content line. Medium weight maintains legibility without competing with heading hierarchy.

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/typography/label/sm/font-family` | `typography/caption/sm/font-family` |
| `list-item/typography/label/sm/font-size` | `typography/caption/sm/font-size` |
| `list-item/typography/label/sm/font-weight` | `typography/caption/sm/font-weight` |
| `list-item/typography/label/sm/line-height` | `typography/caption/sm/line-height` |
| `list-item/typography/label/sm/letter-spacing` | `typography/caption/sm/letter-spacing` |
| `list-item/typography/label/md/font-family` | `typography/caption/md/font-family` |
| `list-item/typography/label/md/font-size` | `typography/caption/md/font-size` |
| `list-item/typography/label/md/font-weight` | `typography/caption/md/font-weight` |
| `list-item/typography/label/md/line-height` | `typography/caption/md/line-height` |
| `list-item/typography/label/md/letter-spacing` | `typography/caption/md/letter-spacing` |
| `list-item/typography/label/lg/font-family` | `typography/caption/lg/font-family` |
| `list-item/typography/label/lg/font-size` | `typography/caption/lg/font-size` |
| `list-item/typography/label/lg/font-weight` | `typography/caption/lg/font-weight` |
| `list-item/typography/label/lg/line-height` | `typography/caption/lg/line-height` |
| `list-item/typography/label/lg/letter-spacing` | `typography/caption/lg/letter-spacing` |

---

### Typography — Supporting Text

Supporting text is the secondary line beneath the label. Regular weight. Fixed at the smallest scale — does not change with item size. Prefer `md` or `lg` items for descriptive content.

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/typography/supporting/font-family` | `typography/body/xm/font-family` |
| `list-item/typography/supporting/font-size` | `typography/body/xm/font-size` |
| `list-item/typography/supporting/font-weight` | `typography/body/xm/font-weight` |
| `list-item/typography/supporting/line-height` | `typography/body/xm/line-height` |
| `list-item/typography/supporting/letter-spacing` | `typography/body/xm/letter-spacing` |

---

### Typography — Metadata

Trailing text — timestamps, counts, short status strings. Smallest visual weight.

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/typography/metadata/font-family` | `typography/caption/sm/font-family` |
| `list-item/typography/metadata/font-size` | `typography/caption/sm/font-size` |
| `list-item/typography/metadata/font-weight` | `typography/body/xm/font-weight` |
| `list-item/typography/metadata/line-height` | `typography/caption/sm/line-height` |
| `list-item/typography/metadata/letter-spacing` | `typography/caption/sm/letter-spacing` |

---

### Spacing

Comfortable density is the default. Compact and Spacious values are resolved through **variable modes** on the `list-item` collection — switching the density mode automatically adjusts all `list-item/spacing/padding/vertical/*` variables. Horizontal padding and slot gaps are density-invariant. See Theming & Adaptation for the full density scale across all three modes.

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/spacing/padding/horizontal/sm` | `space/4` |
| `list-item/spacing/padding/horizontal/md` | `space/6` |
| `list-item/spacing/padding/horizontal/lg` | `space/8` |
| `list-item/spacing/padding/vertical/sm` | `space/4` |
| `list-item/spacing/padding/vertical/md` | `space/6` |
| `list-item/spacing/padding/vertical/lg` | `space/8` |
| `list-item/spacing/gap/content` | `space/2` |
| `list-item/spacing/gap/slot` | `space/4` |
| `list-item/spacing/nesting/indent/sm` | `space/8` |
| `list-item/spacing/nesting/indent/md` | `space/10` |
| `list-item/spacing/nesting/indent/lg` | `space/12` |

---

### Radius

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/radius/item` | `radius/sm` |

---

### Border

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/border/width/focus-ring` | `stroke-width/focus` |

---

### Icon

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/icon/size/sm` | `icon/size/sm` |
| `list-item/icon/size/md` | `icon/size/md` |
| `list-item/icon/size/lg` | `icon/size/lg` |

---

### Color — Background (Positive Tone)

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/background/item/default` | `surface/bg/default` |
| `list-item/background/item/hover` | `surface/bg/accent/primary/light` |
| `list-item/background/item/pressed` | `surface/bg/accent/primary/subtle` |
| `list-item/background/item/focused` | `surface/bg/default` |
| `list-item/background/item/disabled` | `surface/bg/default` |
| `list-item/background/item/selected` | `surface/bg/accent/primary/light` |
| `list-item/background/item/active` | `surface/bg/accent/primary/medium` |

---

### Color — Background (Danger Tone)

Danger tone marks destructive items (e.g., "Delete account"). Inserts `/danger/` before the state segment in all color paths. Default tone (positive) uses no tone segment.

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/background/item/danger/default` | `surface/bg/default` |
| `list-item/background/item/danger/hover` | `surface/bg/system/danger/light` |
| `list-item/background/item/danger/pressed` | `surface/bg/system/danger/subtle` |
| `list-item/background/item/danger/focused` | `surface/bg/default` |
| `list-item/background/item/danger/disabled` | `surface/bg/default` |
| `list-item/background/item/danger/selected` | `surface/bg/system/danger/light` |

---

### Color — Foreground (Label — Positive Tone)

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/foreground/label/default` | `text/on-surface/strong` |
| `list-item/foreground/label/hover` | `text/on-surface/strong` |
| `list-item/foreground/label/pressed` | `text/on-surface/strong` |
| `list-item/foreground/label/focused` | `text/on-surface/strong` |
| `list-item/foreground/label/disabled` | `text/on-surface/inactive` |
| `list-item/foreground/label/selected` | `text/on-surface/link` |
| `list-item/foreground/label/active` | `text/on-primary/strong` |

---

### Color — Foreground (Label — Danger Tone)

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/foreground/label/danger/default` | `text/on-surface/system/danger` |
| `list-item/foreground/label/danger/hover` | `text/on-surface/system/danger` |
| `list-item/foreground/label/danger/pressed` | `text/on-surface/system/danger` |
| `list-item/foreground/label/danger/focused` | `text/on-surface/system/danger` |
| `list-item/foreground/label/danger/disabled` | `text/on-surface/inactive` |
| `list-item/foreground/label/danger/selected` | `text/on-surface/system/danger` |

---

### Color — Foreground (Supporting Text)

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/foreground/supporting/default` | `text/on-surface/subtle` |
| `list-item/foreground/supporting/hover` | `text/on-surface/subtle` |
| `list-item/foreground/supporting/pressed` | `text/on-surface/subtle` |
| `list-item/foreground/supporting/focused` | `text/on-surface/subtle` |
| `list-item/foreground/supporting/disabled` | `text/on-surface/inactive` |
| `list-item/foreground/supporting/selected` | `text/on-surface/medium` |
| `list-item/foreground/supporting/active` | `text/on-primary/subtle` |

---

### Color — Foreground (Leading Icon — Positive Tone)

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/foreground/icon/leading/default` | `icon/on-surface/medium` |
| `list-item/foreground/icon/leading/hover` | `icon/on-surface/strong` |
| `list-item/foreground/icon/leading/pressed` | `icon/on-surface/strong` |
| `list-item/foreground/icon/leading/focused` | `icon/on-surface/medium` |
| `list-item/foreground/icon/leading/disabled` | `icon/on-surface/inactive` |
| `list-item/foreground/icon/leading/selected` | `icon/on-surface/strong` |
| `list-item/foreground/icon/leading/active` | `icon/on-primary/strong` |

---

### Color — Foreground (Leading Icon — Danger Tone)

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/foreground/icon/leading/danger/default` | `icon/on-surface/system/danger` |
| `list-item/foreground/icon/leading/danger/hover` | `icon/on-surface/system/danger` |
| `list-item/foreground/icon/leading/danger/pressed` | `icon/on-surface/system/danger` |
| `list-item/foreground/icon/leading/danger/focused` | `icon/on-surface/system/danger` |
| `list-item/foreground/icon/leading/danger/disabled` | `icon/on-surface/inactive` |
| `list-item/foreground/icon/leading/danger/selected` | `icon/on-surface/system/danger` |

---

### Color — Foreground (Trailing Icon)

Trailing icons use a subtler treatment than leading icons to preserve label hierarchy.

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/foreground/icon/trailing/default` | `icon/on-surface/subtle` |
| `list-item/foreground/icon/trailing/hover` | `icon/on-surface/medium` |
| `list-item/foreground/icon/trailing/pressed` | `icon/on-surface/medium` |
| `list-item/foreground/icon/trailing/focused` | `icon/on-surface/subtle` |
| `list-item/foreground/icon/trailing/disabled` | `icon/on-surface/inactive` |
| `list-item/foreground/icon/trailing/selected` | `icon/on-surface/medium` |
| `list-item/foreground/icon/trailing/active` | `icon/on-primary/subtle` |

---

### Color — Foreground (Metadata)

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/foreground/metadata/default` | `text/on-surface/subtle` |
| `list-item/foreground/metadata/disabled` | `text/on-surface/inactive` |
| `list-item/foreground/metadata/selected` | `text/on-surface/medium` |
| `list-item/foreground/metadata/active` | `text/on-primary/subtle` |

---

### Color — Border

Border tokens apply only to the individual item row. No container or divider borders are defined in this skill.

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/border/item/focused` | `border/focused` |
| `list-item/border/item/selected` | `border/selected` |
| `list-item/border/item/active` | `border/selected` |

---

### Focus

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/focus-ring/color` | `border/focused` |
| `list-item/focus-ring/width` | `stroke-width/focus` |
| `list-item/focus-ring/offset` | `focus/ring/offset` |

---

### Interaction

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/interaction/cursor/default` | `interaction/cursor/pointer` |
| `list-item/interaction/cursor/disabled` | `interaction/cursor/not-allowed` |
| `list-item/interaction/min-touch-target` | `interaction/touch-target/min` |

---

### Motion

Motion variables are design-to-code documentation references. They define transition behavior for hover/press/focus state changes. Figma does not natively support binding motion values to variables.

| List-Item Variable | Global Semantic Variable (placeholder) |
|---|---|
| `list-item/motion/duration/interaction` | `motion/duration/fast` |
| `list-item/motion/easing/default` | `motion/easing/standard` |

---

## Naming Rules

All list-item component variable names follow an enforced naming system. These rules are not examples — they are the specification.

- **Lowercase only**: all path segments are lowercase; no uppercase characters permitted
- **Slash-separated**: segments are separated by `/` — not dots, underscores, or camelCase
- **Kebab-case for compound names**: multi-word segments use hyphens — `focus-ring`, `font-family`, `border-width`, `list-item`
- **Structure**: `component/category/subcategory/variant/property`

| Segment | Role |
|---|---|
| `component` | Always `list-item` for all variables in this skill |
| `category` | Visual property domain — `background`, `foreground`, `border`, `spacing`, `typography`, `icon`, `radius`, `motion`, `focus-ring`, `interaction` |
| `subcategory` | Sub-domain — `item`, `label`, `supporting`, `metadata`, `leading`, `trailing`, `nesting`, `gap` |
| `variant` | State, size, or tone — `default`, `hover`, `sm`, `danger` |
| `property` | CSS-mapped property — `font-size`, `line-height`, `padding`, `color` |

All variable references throughout this specification conform to this system. Dot notation, camelCase, and PascalCase are not permitted anywhere in variable names.

---

## Inputs (Context)

Inputs are resolved after list-item variables are established. They do not change which variables exist — they determine which variable values are active for a given rendering context.

| Input | Values | Default |
|---|---|---|
| `density` | `compact` / `comfortable` / `spacious` | `comfortable` |
| `theme` | `light` / `dark` | `light` |
| `platform` | `web` / `mobile` | `web` |
| `direction` | `ltr` / `rtl` | `ltr` |
| `size` | `small` / `medium` / `large` | `medium` |
| `type` | `default` / `navigation` | `default` |
| `tone` | `default` / `danger` | `default` |
| `state` | `default` / `hover` / `pressed` / `focused` / `disabled` / `selected` / `active` | `default` |
| `selection-mode` | `none` / `single` / `multi` | `none` |
| `selection-position` | `leading` / `trailing` | `leading` |
| `nesting-level` | `0` / `1` / `2` | `0` |

### How Each Input Affects Output

**`density`** resolves `list-item/spacing/padding/vertical/{size}` through variable collection modes. High density compresses vertical padding; low density expands it. All other spacing tokens are density-invariant.

**`theme`** resolves all semantic color tokens via the `semantics` collection light/dark mode. All visual variable paths are theme-aware and require no component-level logic to switch.

**`platform`** affects minimum touch target sizing and hover availability. Mobile enforces a minimum 44×44pt touch target via `list-item/interaction/min-touch-target`. Hover state is not applicable on mobile.

**`direction`** mirrors the position of leading and trailing slots. In `rtl`, the leading slot is visually right-aligned and the trailing slot is visually left-aligned. Semantic slot identity does not change.

**`size`** resolves spacing, typography, and icon size variables independently. Size values map to abbreviated path segments: `small` → `sm`, `medium` → `md`, `large` → `lg`.

**`type`** governs valid states. `default` enables `selected` state; `navigation` enables `active` state instead. These are mutually exclusive. `type = navigation` with `selection-mode = multi` is an invalid combination and must not be produced.

**`tone`** resolves the semantic color axis. Default tone (positive) uses no tone segment in variable paths (e.g., `list-item/background/item/default`). Danger tone inserts `/danger/` before the state segment in all color paths (e.g., `list-item/background/item/danger/default`). Every variable that differs by tone has explicit rows in the Danger Tone tables.

**`state`** resolves the interactive layer within each type+tone namespace. Drives background, border, and foreground variable resolution. All states — including disabled — render at **100% opacity**; no opacity reduction is applied to any state.

**`selection-mode`** activates a selection control (Checkbox or Radio master component instance). `none` = no selection control; placement is driven by `selection-position`. `type = navigation` with `selection-mode = multi` is an invalid combination.

**`selection-position`** places the selection control in the Leading or Trailing slot when `selection-mode ≠ none`. Has no effect when `selection-mode = none`.

**`nesting-level`** adds `list-item/spacing/nesting/indent/{size}` × level to the item's left padding. Level `0` = parent (no indent); level `1` = child; level `2` = sub-child. Maximum depth is 2.

---

## Output

The resolved output of this skill is a structured component specification containing:

- **Anatomy definition**: named layer structure with role, layout behavior, and variable bindings per layer
- **Variant matrix**: 2 types × 3 sizes × 7 states × 2 tones × 3 nesting levels = **252 variants**
- **State definitions**: per-state variable resolutions for background, border, and foreground — all at 100% opacity
- **Variable bindings**: list-item-level variable references for every visual property — no raw values
- **Slot definitions**: leading and trailing slot contracts including badge, tag, and pill
- **Behavior rules**: slot activation, nesting indent, density adaptation, selection control placement
- **Accessibility guarantees**: contrast ratios, focus visibility, keyboard model, ARIA roles, and screen reader expectations

---

## Anatomy

### ListItem (Component Root)
- **Role**: Outermost boundary of each row. Owns interactive state and focus ring. Establishes all component variant properties. Width is FIXED (fills the parent container at 100%); height is strictly HUG (AUTO) — never a fixed pixel height.
- **Layout behavior**: Block-level. Width 100% of containing block. Height derived entirely from padding plus content — no height override at any size or density.
- **Variable usage**: `list-item/background/item/{state}`, `list-item/radius/item`, `list-item/interaction/cursor/default`

### Interaction Wrapper
- **Role**: Owns focus ring rendering. Sits between the component root and Visual Container so the focus ring does not interfere with background clipping.
- **Layout behavior**: Passthrough — matches ListItem root dimensions exactly. Does not clip content.
- **Variable usage**: `list-item/focus-ring/color`, `list-item/focus-ring/width`, `list-item/focus-ring/offset`

### Visual Container
- **Role**: Renders background fill and item border for the current state. Primary surface layer.
- **Layout behavior**: Fills component root. Clips to `list-item/radius/item`. Does not own padding.
- **Variable usage**: `list-item/background/item/{state}`, `list-item/border/item/{state}`, `list-item/radius/item`

### Content Container
- **Role**: Horizontal flex row owning all padding and aligning all content slots.
- **Layout behavior**: Horizontal flex. Cross-axis alignment is **center by default; shifts to `flex-start` (top) when `has-supporting-text = true`**. Gap between visible siblings: `list-item/spacing/gap/slot`. Padding driven by `list-item/spacing/padding/horizontal/{size}` and `list-item/spacing/padding/vertical/{size}`.
- **Variable usage**: `list-item/spacing/padding/horizontal/{size}`, `list-item/spacing/padding/vertical/{size}`, `list-item/spacing/gap/slot`

### Leading Slot
- **Role**: Left-side element. Conditionally rendered based on `has-leading`. When `selection-mode ≠ none` AND `selection-position = leading`, always active and renders the Checkbox or Radio master component instance.
- **Layout behavior**: Fixed square from `list-item/icon/size/{size}`. Fully absent when inactive — no reserved space, no gap contribution. Cross-axis alignment shifts to `flex-start` when `has-supporting-text = true`.
- **Variable usage**: `list-item/icon/size/{size}`, `list-item/foreground/icon/leading/{state}`

### Content Area
- **Role**: Vertical flex column holding Label and optionally Supporting Text. Grows to fill remaining horizontal space.
- **Layout behavior**: Vertical flex. Flex-grow: 1. Gap between Label and Supporting Text: `list-item/spacing/gap/content`.
- **Variable usage**: `list-item/spacing/gap/content`

### Label
- **Role**: Primary text content. Always present.
- **Layout behavior**: Single line. Truncates with ellipsis on overflow. Tooltip required when truncated.
- **Variable usage**: `list-item/typography/label/{size}/font-family`, `list-item/typography/label/{size}/font-size`, `list-item/typography/label/{size}/font-weight`, `list-item/typography/label/{size}/line-height`, `list-item/typography/label/{size}/letter-spacing`, `list-item/foreground/label/{state}`

### Supporting Text
- **Role**: Secondary descriptive text below the label. Conditionally rendered when `has-supporting-text = true`.
- **Layout behavior**: Up to 2 lines. Ellipsis after line 2. Tooltip recommended on overflow.
- **Variable usage**: `list-item/typography/supporting/font-family`, `list-item/typography/supporting/font-size`, `list-item/typography/supporting/font-weight`, `list-item/typography/supporting/line-height`, `list-item/foreground/supporting/{state}`

### Trailing Slot
- **Role**: Right-side element. Conditionally rendered based on `has-trailing`. When `selection-mode ≠ none` AND `selection-position = trailing`, always active and renders the Checkbox or Radio master component instance.
- **Layout behavior**: Hugs content. Fully absent when inactive. Cross-axis alignment shifts to `flex-start` when `has-supporting-text = true`. Mirrors to the left side in RTL.
- **Variable usage**: `list-item/icon/size/{size}`, `list-item/foreground/icon/trailing/{state}`, `list-item/foreground/metadata/{state}`, `list-item/typography/metadata/font-family`, `list-item/typography/metadata/font-size`, `list-item/typography/metadata/font-weight`, `list-item/typography/metadata/line-height`

### Selection Control (Checkbox / Radio)
- **Role**: A master component instance (Checkbox or Radio) placed inside either the Leading or Trailing slot to represent selection state. Must be a real Figma component instance linked to the master Checkbox or Radio ComponentSet — never a static placeholder shape.
- **Layout behavior**: Matches `list-item/icon/size/{size}` (sm/md/lg). Placement in Leading Slot when `selection-position = leading`; Trailing Slot when `selection-position = trailing`. Both positions are mutually exclusive.
- **Variable usage**: `list-item/icon/size/{size}`. Internal color bindings are owned by the Checkbox/Radio master — no color override from ListItem.

---

## Properties

### Variant Properties

**`type`** — `default` | `navigation`
Governs valid states and selection behavior. `default` enables `selected` state and `selection-mode = multi`. `navigation` enables `active` state only — `selection-mode = multi` is invalid with this type.

**`size`** — `small` | `medium` | `large`
Drives spacing, typography, and icon size variable resolution. Independent of type and tone. Size values map to `sm` / `md` / `lg` path segments.

**`state`** — `default` | `hover` | `pressed` | `focused` | `disabled` | `selected` | `active`
Resolves the interactive layer of all visual variables. `selected` is valid for `type = default` only. `active` is valid for `type = navigation` only. In production, state is driven by interaction events. In design and documentation, exposed as a variant for specification and QA.

**`tone`** — `default` | `danger`
Resolves the semantic color axis. `danger` inserts `/danger/` before the state segment in all color variable paths. Applies uniformly across all types.

**`nesting-level`** — `parent` (0) | `child` (1) | `sub-child` (2)
Determines the left padding indent. Each level adds `list-item/spacing/nesting/indent/{size}` × level to the item's left padding. Maximum depth: 2.

**`selection-position`** — `leading` | `trailing`
Controls which slot hosts the Checkbox or Radio master component instance when `selection-mode ≠ none`. Has no effect when `selection-mode = none`.

---

### Boolean Properties

**`has-leading`** — default: `false`
Activates the Leading Slot. Overridden to `true` when `selection-mode ≠ none` AND `selection-position = leading`.

**`has-trailing`** — default: `false`
Activates the Trailing Slot. Overridden to `true` when `selection-mode ≠ none` AND `selection-position = trailing`.

**`has-supporting-text`** — default: `false`
Renders Supporting Text below the Label in the Content Area. Shifts cross-axis alignment of Content Container, Leading Slot, and Trailing Slot to `flex-start`.

**`is-nested`** — default: `false`
Applies `list-item/spacing/nesting/indent/{size}` × `nesting-level` to the item's left padding.

**`show-chevron`** — default: `false`
Renders a chevron icon in the Trailing Slot to indicate the item has expandable children.

---

### Content Properties

**`label`** — type: `string`
Primary text content. Required. Single-line with ellipsis on overflow.

**`supporting-text`** — type: `string`
Secondary content below the label. Required when `has-supporting-text = true`. Up to 2 lines.

**`leading-content`** — type: `slot`
Any compatible component: icon, avatar, Checkbox master instance (selection-position=leading + multi), Radio master instance (selection-position=leading + single), badge, tag, or pill.

**`trailing-content`** — type: `slot`
Any compatible component: icon, Checkbox master instance (selection-position=trailing + multi), Radio master instance (selection-position=trailing + single), badge, tag, pill, metadata text, toggle, or chevron.

---

## Variant System

The list-item variant space is defined by the intersection of five axes:

**Type × Size × State × Tone × Nesting Level = 2 × 3 × 7 × 2 × 3 = 252 variants**

### Combinatorial Logic

Every valid combination of these axes must produce a fully resolved variable binding. The governing rules are:

1. **Type** governs valid states: `default` → `default/hover/pressed/focused/disabled/selected`; `navigation` → `default/hover/pressed/focused/disabled/active`.
2. **Tone** resolves the color axis. Default tone uses the base path with no tone segment. Danger tone inserts `/danger/` before the state segment in all color variable paths — e.g., `list-item/background/item/danger/hover`.
3. **State** resolves the interactive layer within the type+tone namespace.
4. **Size** resolves independently across all spacing, typography, and icon size variables.
5. **Nesting level** resolves the left padding indent: level 0 = standard horizontal padding; level 1 = + `list-item/spacing/nesting/indent/{size}`; level 2 = + `list-item/spacing/nesting/indent/{size}` × 2.

### State Exclusivity Rules

- `selected` is only valid for `type = default`
- `active` is only valid for `type = navigation`
- `type = navigation` with `selection-mode = multi` is an invalid combination — must not be produced
- `disabled` suppresses all interactive states; all tokens resolve to `/inactive` equivalents
- `active` and `selected` on the same item simultaneously is an invalid configuration
- All states — including disabled — render at **100% opacity**. No opacity reduction is ever applied.

---

## States

> All states render at 100% opacity. No opacity reduction is applied to any state, including disabled. State changes are communicated entirely through token swaps on background, foreground, and border properties.

### Default
- Background: `list-item/background/item/default`
- Label: `list-item/foreground/label/default`; leading icon: `list-item/foreground/icon/leading/default`; trailing: `list-item/foreground/icon/trailing/default`
- No border, no focus ring
- Cursor: `list-item/interaction/cursor/default`
- All transitions ready via `list-item/motion/duration/interaction` and `list-item/motion/easing/default`

### Hover
- Background: `list-item/background/item/hover`
- Leading icon: `list-item/foreground/icon/leading/hover`; trailing: `list-item/foreground/icon/trailing/hover`
- Transition: `list-item/motion/duration/interaction`, `list-item/motion/easing/default`
- Not triggered by keyboard navigation. Suppressed on mobile.

### Pressed
- Background: `list-item/background/item/pressed`
- All foreground tokens resolve to pressed equivalents
- Transition: shorter than hover via `list-item/motion/duration/interaction`

### Focused
- Background: remains at `list-item/background/item/focused` (same as default)
- Focus ring rendered by Interaction Wrapper: `list-item/focus-ring/color`, `list-item/focus-ring/width`, `list-item/focus-ring/offset`
- Always visible — never suppressed by pointer interaction (WCAG 2.4.11)

### Disabled
- Background: `list-item/background/item/disabled`
- All foreground tokens resolve to `/inactive` equivalents: `text/on-surface/inactive`, `icon/on-surface/inactive`
- Opacity: **100%** — no opacity reduction
- Cursor: `list-item/interaction/cursor/disabled`
- No transitions. Removed from tab order.

### Selected
- Valid for `type = default` only
- Background: `list-item/background/item/selected`; label: `list-item/foreground/label/selected`; leading icon: `list-item/foreground/icon/leading/selected`
- Border: `list-item/border/item/selected`
- Selection control in slot transitions to checked/selected state when `selection-mode ≠ none`
- Persistent until cleared programmatically or by another selection

### Active
- Valid for `type = navigation` only
- Background: `list-item/background/item/active`; label: `list-item/foreground/label/active`; leading icon: `list-item/foreground/icon/leading/active`
- Border: `list-item/border/item/active`
- Only one item in a navigation list can be active at a time. Persistent.

---

## Variable Mapping

All variables are semantic or component-level. No raw values are permitted. All variable names conform to the Naming Rules defined in this skill.

### Background Variables
- `list-item/background/item/{state}` — positive tone (default)
- `list-item/background/item/danger/{state}` — danger tone

### Border Variables
- `list-item/border/item/{state}` — focused, selected, and active states
- `list-item/border/width/focus-ring`
- `list-item/radius/item`

### Foreground Variables (Label)
- `list-item/foreground/label/{state}` — positive tone (default)
- `list-item/foreground/label/danger/{state}` — danger tone

### Foreground Variables (Supporting Text)
- `list-item/foreground/supporting/{state}`

### Foreground Variables (Icons)
- `list-item/foreground/icon/leading/{state}` — static leading icon, positive tone
- `list-item/foreground/icon/leading/danger/{state}` — leading icon, danger tone
- `list-item/foreground/icon/trailing/{state}` — trailing icon

### Foreground Variables (Metadata)
- `list-item/foreground/metadata/{state}`

### Icon Variables
- `list-item/icon/size/{size}`

### Spacing Variables
- `list-item/spacing/padding/horizontal/{size}`
- `list-item/spacing/padding/vertical/{size}` — density-sensitive via variable collection modes
- `list-item/spacing/gap/content`
- `list-item/spacing/gap/slot`
- `list-item/spacing/nesting/indent/{size}`

### Typography Variables
- `list-item/typography/label/{size}/font-family`
- `list-item/typography/label/{size}/font-size`
- `list-item/typography/label/{size}/font-weight`
- `list-item/typography/label/{size}/line-height`
- `list-item/typography/label/{size}/letter-spacing`
- `list-item/typography/supporting/font-family`
- `list-item/typography/supporting/font-size`
- `list-item/typography/supporting/font-weight`
- `list-item/typography/supporting/line-height`
- `list-item/typography/supporting/letter-spacing`
- `list-item/typography/metadata/font-family`
- `list-item/typography/metadata/font-size`
- `list-item/typography/metadata/font-weight`
- `list-item/typography/metadata/line-height`
- `list-item/typography/metadata/letter-spacing`

### Radius Variables
- `list-item/radius/item`

### Opacity Variables
- None — all states render at 100% opacity without exception. Disabled state is communicated through token swaps only (`text/on-surface/inactive`, `icon/on-surface/inactive`) — no opacity reduction is ever applied.

### Focus Variables
- `list-item/focus-ring/color` — color of the focus ring outline
- `list-item/focus-ring/width` — thickness of the focus ring
- `list-item/focus-ring/offset` — gap between item edge and focus ring

### Interaction Variables
- `list-item/interaction/cursor/default`
- `list-item/interaction/cursor/disabled`
- `list-item/interaction/min-touch-target`

### Motion Variables
- `list-item/motion/duration/interaction`
- `list-item/motion/easing/default`

### Rules
- Always reference list-item-level then semantic-level variables
- Never use raw values (hex, px, rem, etc.)
- Never reference primitive variables directly
- All variable names must conform to the Naming Rules defined in this skill

---

## Layout Rules

- **Width fixed, height strictly HUG**: ListItem width is always FIXED (fills the parent container at 100%); height is always HUG (AUTO) — never a fixed pixel height on any variant, size, or density.
- **Vertical padding (density-sensitive)**: Resolved through variable collection modes on the `list-item` collection. No component-level logic required — switching the density mode adjusts all `list-item/spacing/padding/vertical/{size}` variables automatically.
- **Horizontal padding**: `list-item/spacing/padding/horizontal/{size}` applied symmetrically. Density-invariant.
- **Slot gap**: `list-item/spacing/gap/slot` applies only between visible siblings. Absent slots contribute no gap.
- **Content gap**: `list-item/spacing/gap/content` applies only between Label and Supporting Text when both are visible.
- **Cross-axis alignment**: Content Container, Leading Slot, and Trailing Slot shift from `center` to `flex-start` when `has-supporting-text = true`.
- **Icon sizing**: Always resolved from `list-item/icon/size/{size}`. Icon assets scale to fit — never overflow.
- **Long label**: Single-line ellipsis. Tooltip required on overflow.
- **Long supporting text**: 2-line clamp with ellipsis. Tooltip recommended.
- **Nesting — Level 0 (Parent)**: Standard left padding from `list-item/spacing/padding/horizontal/{size}`. No additional indent.
- **Nesting — Level 1 (Child)**: Left padding += `list-item/spacing/nesting/indent/{size}` × 1.
- **Nesting — Level 2 (Sub-child)**: Left padding += `list-item/spacing/nesting/indent/{size}` × 2. This is the maximum depth — no further levels are permitted.
- **Nested items inherit** the parent context's `size` and `type`.
- **Expand/collapse** of nested rows is controlled by a chevron icon in the Trailing Slot. This component does not manage tree state.
- **RTL**: Leading and trailing slots swap visual positions. All padding and gap values are direction-aware. Nesting indent applies to the visual right side in RTL.

---

## Slot & Content Behavior

### Label Only (Default)
Only the Content Area is present. Leading and trailing slots are absent — no reserved space, no gap contribution. This is the minimal configuration.

### Leading + Label
The Leading Slot renders before the Content Area, separated by `list-item/spacing/gap/slot`. Trailing slot absent.

### Label + Supporting Text
Supporting Text renders beneath the Label in the Content Area with `list-item/spacing/gap/content` between them. Cross-axis alignment of all slots shifts to `flex-start`.

### Leading + Label + Supporting Text
Leading Slot is active and aligns to the Label row (top). Content Area holds both Label and Supporting Text. `has-supporting-text = true` drives the `flex-start` shift.

### Leading + Label + Trailing
All three slots active. Content Area grows to fill remaining space. Gaps apply between each adjacent pair.

### Full Configuration (All Slots + Supporting Text)
All slots active, Supporting Text present. All gaps apply. Verify at all 3 sizes and all 3 density modes.

### Selection — Position Leading
Leading Slot is forced active. Renders Checkbox master instance (`selection-mode = multi`) or Radio master instance (`selection-mode = single`). Checkbox checked / Radio selected state mirrors `state = selected` of the ListItem.

### Selection — Position Trailing
Trailing Slot is forced active. Same control mapping as above, in the trailing position. Only one position may be active at a time.

### Slot Collapse Behavior
When a slot is inactive, it is fully absent from the layout — no space reserved, no gap contribution, no rendered structure. ListItem dimensions always reflect active content only.

---

### Badge

A numeric or dot indicator for counts, notifications, or status. Placed inside Leading or Trailing slot as a standalone sub-component.

| Property | Value |
|---|---|
| Shape | Pill (full radius) for counts; circle for dot |
| Min-width | `list-item/icon/size/sm` (grows horizontally for multi-digit counts) |
| Max digits | 3 — display `99+` for values ≥ 100 |
| Background | `surface/bg/accent/primary/medium` (default) or contextual semantic token |
| Typography | `list-item/typography/supporting/font-size` |
| Slot fit | Trailing: aligns end; Leading: aligns start |

### Tag

A short keyword label indicating category, status, or classification.

| Property | Value |
|---|---|
| Shape | Rounded rectangle; `list-item/radius/item` |
| Padding | `list-item/spacing/gap/content` horizontal, minimal vertical |
| Typography | `list-item/typography/supporting/font-size`; medium weight |
| Background | Contextual semantic surface token |
| Max chars | 16 — ellipsis on overflow |

### Pill

A status or category indicator. Visually wider than a badge; purely textual or icon+text.

| Property | Value |
|---|---|
| Shape | Full-radius pill |
| Padding | `list-item/spacing/gap/slot` horizontal, minimal vertical |
| Typography | `list-item/typography/supporting/font-size`; medium weight |
| Background | Contextual semantic surface token |
| Max chars | 20 — ellipsis on overflow |
| Leading icon | Optional; `list-item/icon/size/sm` |

### Slot Contract Rules

- Slots use `list-item` collection variables for sizing and spacing; color tokens may come from the slot's own component variable layer or directly from semantics
- Slots are self-contained components — their internal anatomy is not defined by this skill
- Slot frame dimensions are determined by the slot content
- Only one badge, tag, or pill may occupy a single slot at a time
- Badge, tag, or pill co-located with an icon in the Leading Slot: use `list-item/spacing/gap/slot` between them

---

## Interaction Rules

**Hover**: Background transitions to `list-item/background/item/hover` on pointer entry via `list-item/motion/duration/interaction` and `list-item/motion/easing/default`. Not triggered by keyboard navigation. Suppressed on mobile.

**Pressed**: Background transitions to `list-item/background/item/pressed` on pointer down or `Space`/`Enter` key-hold. Returns to default or hover on release.

**Focus**: Focus ring rendered by Interaction Wrapper via `list-item/focus-ring/color`, `list-item/focus-ring/width`, `list-item/focus-ring/offset`. Never suppressed — not by pointer focus, not by any state (WCAG 2.4.11).

**Disabled**: All pointer and keyboard interactions suppressed. Background → `list-item/background/item/disabled`. All foreground tokens → inactive equivalents. Opacity stays at 100%. Cursor: `list-item/interaction/cursor/disabled`. No transitions. Removed from tab order.

**Selected (single)**: One item at a time. Cleared by activating another item or programmatically. Persists until cleared.

**Selected (multi)**: Each item toggles independently. No conflict with other multi-selected items.

**Active**: One navigation item at a time. Persists until another navigation item is activated.

**Keyboard model (web):**

| Key | Action |
|---|---|
| `Tab` / `Shift+Tab` | Move focus in/out of the list |
| `Arrow Down` / `Arrow Up` | Move focus within the list (roving tabindex) |
| `Enter` / `Space` | Activate the focused item |
| `Home` / `End` | Focus first / last item |

Arrow Up from the first item and Arrow Down from the last item do **not** wrap — focus stops at the boundary.

---

## Accessibility Rules

**ARIA Roles**: ListItem: `role="listitem"` (`<li>`). Interactive context overrides: `role="option"` (listbox), `role="menuitem"` (menu), `role="treeitem"` (tree).

**Contrast**: All label, supporting text, and metadata foreground tokens against resolved background tokens must meet WCAG AA — 4.5:1 for normal text, 3:1 for large text. Icon tokens: 3:1 minimum.

**Focus Visibility**: Always visible on keyboard focus. Meets WCAG 2.4.11 — minimum area, contrast ratio, offset. `list-item/focus-ring/color`, `list-item/focus-ring/width`, and `list-item/focus-ring/offset` must resolve to non-zero values.

**State Announcements**:
- `aria-selected="true"` — selected items in listbox context
- `aria-checked="true"` — checked items in multi-select
- `aria-current="page"` or `aria-current="true"` — active navigation items
- `aria-disabled="true"` — disabled items; removed from tab order

**Color Independence**: State changes must never be communicated by color alone. Focus uses focus ring geometry. Selected uses a visible border indicator. Disabled uses inactive color tokens — never opacity — plus `aria-disabled`. Active uses background plus border indicator.

**Screen Reader Labeling**: Visible label is the accessible name. Icon-only trailing content requires `aria-label` or `title`. Parent rows with children must use `aria-expanded` on the chevron control.

**Touch Targets**: `list-item/interaction/min-touch-target` (44pt minimum) enforced on mobile. Visual item may be smaller; the interactive area is padded to meet the minimum.

---

## Responsiveness

**Width**: ListItem always FIXED (fills the containing layout); height always HUG.

**Mobile**: Touch target minimum 44×44pt enforced via `list-item/interaction/min-touch-target`. Hover suppressed. Density defaults to `comfortable` or `spacious`.

**Label overflow**: Single-line ellipsis; tooltip required.

**Supporting text overflow**: 2-line clamp; tooltip recommended.

**Nesting on small screens**: Depth > 1 discouraged on mobile. Verify indent values at mobile viewports before shipping.

**Viewport Width**: The component does not change its size variant in response to viewport width. Responsive adaptation is a layout-level concern.

---

## Theming & Adaptation

### Density → Spacing

`list-item/spacing/padding/vertical/{size}` resolves differently per density mode via the `list-item` variable collection's Density mode dimension. All other spacing tokens are mode-invariant.

| Variable | Compact | Comfortable (default) | Spacious |
|---|---|---|---|
| `list-item/spacing/padding/vertical/sm` | `space/2` | `space/4` | `space/6` |
| `list-item/spacing/padding/vertical/md` | `space/4` | `space/6` | `space/8` |
| `list-item/spacing/padding/vertical/lg` | `space/4` | `space/8` | `space/10` |

- **Compact**: Compressed vertical padding. Appropriate for data-dense admin panels, developer tools.
- **Comfortable**: Standard spacing resolution. Default for most surfaces.
- **Spacious**: Expanded vertical padding. Consumer apps, accessibility-critical surfaces.

### Theme → Color
All semantic color tokens are mode-aware. Switching the `semantics` collection mode (`light` / `dark`) auto-resolves all backgrounds, foregrounds, and borders. No component logic required.

### Tone → Color Axis
`danger` activates the danger semantic tokens for individual items. Other items in the same list retain their positive (default) tone.

### Selection Mode → Slot

| `selection-mode` | Leading Slot |
|---|---|
| `none` | Controlled by `has-leading` |
| `single` | Always active; renders Radio control |
| `multi` | Always active; renders Checkbox control (valid for `type = default` only) |

---

## Content Guidelines

**Label**: 1–6 words. Noun or verb-noun for action items. Ellipsis on overflow. Labels beyond 8 words are strongly discouraged.

**Supporting Text**: One concise sentence or structured string (key: value). Maximum 2 lines. Must clarify, not repeat, the label.

**Metadata / Trailing Text**: Numbers, short dates, timestamps, counts. Immediately parseable. No domain-specific abbreviations.

**Danger Items**: Must be explicit and communicate irreversibility ("Delete account", not "Remove").

**Capitalization**: Sentence case throughout. All-caps forbidden. Title case discouraged.

---

## Do / Don't

### Do
- Map all list-item variables to global semantic variables before any component design begins
- Use `compact` density for data-dense views; `spacious` for accessibility-critical surfaces
- Provide `aria-label` for icon-only leading slot content
- Use `danger` tone only for destructive, irreversible, high-risk items
- Limit nesting depth to 2 levels maximum (parent, child, sub-child)
- Apply consistent density across all list item instances on a single surface
- Provide `aria-expanded` on chevron controls for expandable nested rows
- Shift cross-axis alignment to `flex-start` whenever `has-supporting-text = true`
- Set height to HUG (AUTO) — never fixed pixel heights
- Bind all typography properties to `list-item/typography/*` variables

### Don't
- Do not hardcode any padding, font size, color, border value, or radius
- Do not begin component design before all list-item variables are mapped to semantic variables
- Do not combine `type = navigation` with `selection-mode = multi`
- Do not apply `active` and `selected` states to the same item
- Do not allow label text to wrap — single-line with ellipsis only
- Do not nest list items deeper than 2 levels — redesign the information architecture instead
- Do not rely on color alone to communicate state
- Do not suppress the focus ring under any circumstances
- Do not use raw values anywhere in the component or supporting frames
- Do not reduce opacity for any state, including disabled — use token swaps instead

---

## Edge Cases

**Very long label**: Single-line ellipsis; tooltip required.

**Very long supporting text**: 2-line clamp; tooltip recommended.

**sm item + supporting text**: Supporting text is same font-size as label at `sm` size — avoid; prefer `md` or `lg` items for descriptive content.

**Nested overflow**: Labels truncate before padding reduces. Maximum depth of 2 is always enforced.

**RTL layout**: Leading and trailing slots swap visual positions. All padding and gap values are direction-aware. Nesting indent applies to the visual right side.

**No label**: Invalid configuration — label is always required.

**`type = navigation` + `tone = danger`**: Invalid combination — danger tone applies only to `type = default` destructive actions.

**`type = navigation` + `selection-mode = multi`**: Invalid combination — must not be produced.

**`active` + `selected` on same item**: Invalid — choose the type matching the semantic intent.

**Badge + icon in same leading slot**: Valid — use `list-item/spacing/gap/slot` between them. Total slot width = icon width + gap + badge width.

**Disabled + selection control**: Checkbox/Radio instance in the slot must also be set to `disabled = true`. Neither control receives focus when the ListItem is disabled.

---

## Constraints

- All visual properties must resolve exclusively through the chain: list-item variable → semantic variable → primitive → raw value. No direct primitive aliasing from a list-item variable. The semantic layer is always the intermediate step.
- List-item variables must be mapped to global semantic variables before any component design begins
- No hardcoded values of any kind — all spacing, color, typography, radius, and stroke-width values resolved exclusively through variables
- No opacity reduction — opacity is always 100% on every state including disabled; use token swaps instead
- Fully variable-driven across all axes: type, tone, state, size, density, theme
- Validation state and interactive state are always resolved in combination — both segments must appear in the variable path when both are active
- No layout breakage under any content condition — truncation, minimum padding, and dimension preservation always enforced
- No accessibility regressions — focus visibility, contrast, ARIA roles, and screen reader labeling guaranteed by specification
- Nesting depth hard-limited to 2 levels (parent, child, sub-child)
- All variable names conform to the enforced Naming Rules: lowercase, slash-separated, kebab-case compound names
- Density adaptation via variable collection modes only — no conditional logic in the component

---

## Notes

- This skill specifies the ListItem as a design system component — not as an HTML `<li>` element or any tool-specific object. Implementors in any medium resolve this specification into their medium-specific representation.
- All variable names follow the enforced slash-separated naming system. Implementors map these paths to their system's convention (CSS custom properties, design token JSON, platform-native variables, etc.).
- Global semantic variable names in the List-Item Variables section are placeholders until the variable agent skill is fully authored. At that point, the right-hand column of each mapping table must be reconciled with the exact names defined there.
- **Variable collection structure**: The `list-item/` variable collection has a single Default mode for all non-density tokens plus a **Density** mode dimension with three modes (Compact / Comfortable / Spacious). Only `list-item/spacing/padding/vertical/{size}` tokens are mode-sensitive.
- **Space token naming**: The `semantics` collection uses `space/N` where `N × 2 = pixel value`. For example, `space/4` = 8px, `space/6` = 12px, `space/8` = 16px.
- **Tokens requiring addition to semantics**: `focus/ring/offset`, `interaction/cursor/pointer`, `interaction/cursor/not-allowed`, `interaction/touch-target/min`, and `icon/size/*` are placeholder tokens. Add them to the `semantics` collection before production use.
- **Selection controls are master component instances**: Checkbox and Radio controls inside ListItem slots must be Figma component instances linked to their respective master ComponentSets — not static shapes. When the master is not yet built, use a named placeholder frame (`_checkbox-placeholder` / `_radio-placeholder`) and replace it when the master is ready.
- **Selection control state sync**: The Checkbox/Radio instance's checked/selected state is driven by the ListItem variant's `state` property. In Figma, expose a `checked`/`selected` nested property on the ListItem component that passes through to the embedded instance.
- **Slot components** (badge, tag, pill) follow their own component specifications. This skill defines how they fit inside Leading/Trailing slots and which `list-item` spacing tokens constrain their placement.
- **Motion tokens** exist only in the `primitives` collection. Figma does not support binding motion to variables natively. They are design-to-code reference values only.
- **Dividers**: If rows within a list need visual separation, that is handled at the parent container implementation layer using a separator token from the `semantics` collection (`border/subtle`). This skill does not define divider components.
- **Figma build target**: This component must be built on the `Components` page under a dedicated `↳ list-item` sub-page. All frames — the master ComponentSet, all size/state/nesting preview frames, and all annotation frames — are placed exclusively on `↳ list-item`. No ListItem frame may exist on any other page.
- This specification does not define animation keyframes, gesture thresholds, scroll behavior, virtual rendering, or drag-and-drop. Those are resolved by platform-specific implementation layers consuming this specification.
