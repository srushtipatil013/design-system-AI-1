---
name: button-documentation
description: >
  Complete Button Documentation Skill for the design system. Covers usage
  guidance, variants, anatomy, formatting, emphasis, alignment, use cases,
  width, button groups, content rules, universal behaviours, and style
  specifications. All values map to button component variables and properties.
  No hardcoded values. No independent styling.
version: 1.0.0
last_updated: 2026-05-20
references:
  - button-skill.md (component specification, variables, properties)
---

# Button Documentation

---

# Usage

---

## Overview

A button is a control that initiates a single, discrete action. It communicates intent through a label, optionally supported by a leading or trailing icon, and resolves its visual presentation entirely through the button variable system. Buttons are the primary interaction primitive across forms, dialogs, toolbars, cards, and navigation surfaces.

Every button instance maps to a combination of `type`, `size`, `state`, and `tone` — four variant properties defined in the button component specification. No visual property is applied outside this variable-driven model.

---

## When to Use

- To trigger a discrete, immediate action (submit a form, save a record, open a dialog, confirm a destructive operation)
- As the primary call-to-action on a surface where one action takes priority over all others
- As a supporting action that is secondary to the primary but still reachable within the same surface
- For actions inside toolbars, data tables, or inline contexts where minimal visual weight is needed
- To initiate a destructive or high-risk action that requires explicit, deliberate user confirmation

---

## When Not to Use

- **Navigation only**: If clicking a control performs only navigation — no side effects, no state change — use a link (`<a>`) instead of a button. Buttons carry action semantics; links carry navigation semantics.
- **Multiple primaries on one surface**: Do not place two `type=primary` buttons at the same hierarchy level. A surface should have at most one high-emphasis button.
- **Reversible routine actions with `tone=danger`**: Danger tone is reserved for irreversible, destructive, or high-risk actions. Routine edits, minor deletions, or cancellations with no destructive impact do not qualify.
- **Inline text flow**: If an action sits within a sentence or paragraph of prose, use a text link, not a button.
- **Form validation substitute**: Do not disable a button as a proxy for form validation feedback. Communicate validation state through field-level error messages; the button should remain enabled to allow re-submission attempts.

---

## Variants

Button variants are defined by the `type` and `tone` properties in the button component specification. The visual hierarchy flows from `primary` (highest emphasis) through `secondary` and `ghost` (lowest emphasis). Danger is a cross-cutting tone, not a standalone variant.

> **Mapping note**: The `type` property in the button component accepts `primary` | `secondary` | `ghost`. There is no `tertiary` type defined in the component. Ghost in a low-emphasis, third-level context serves the role of a tertiary button. The documentation terminology "Tertiary" below always maps to `type=ghost` used at the third position in a button hierarchy.

---

### Primary

- **Property mapping**: `type=primary`, `tone=positive`
- **Role**: The single highest-emphasis action on a surface. Reserved for the one action users are most likely to need or the action the product most wants users to take.
- **Background variable**: `button/background/primary/{state}`
- **Foreground variable**: `button/foreground/primary/{state}`
- **Border variable**: `button/border/primary/{state}` (transparent — no visible border)
- **Rules**: Only one primary button may appear per row or per distinct hierarchy level. Never place two primary buttons side-by-side unless they sit in completely separate visual regions.

---

### Secondary

- **Property mapping**: `type=secondary`, `tone=positive`
- **Role**: A supporting action. Co-present with primary when two actions of different but reasonable importance coexist (e.g., "Save" + "Cancel"). Used alone when a single action needs visible affordance without highest emphasis.
- **Background variable**: `button/background/secondary/{state}`
- **Foreground variable**: `button/foreground/secondary/{state}`
- **Border variable**: `button/border/secondary/{state}` (visible border at default and hover)

---

### Tertiary (Ghost in third position)

- **Property mapping**: `type=ghost`, `tone=positive`
- **Role**: The lowest-emphasis text-level action. Used as a third option in a multi-button row, or for actions in toolbars and dense surfaces where a border or background would add unnecessary visual weight.
- **Background variable**: `button/background/ghost/{state}` (transparent at default)
- **Foreground variable**: `button/foreground/ghost/{state}`
- **Border variable**: `button/border/ghost/{state}` (transparent at default; subtle border on hover)
- **Note**: Ghost in isolation (not in a three-button hierarchy) is used widely in toolbars and card actions and is not labelled "tertiary" in those contexts.

---

### Ghost

- **Property mapping**: `type=ghost`, `tone=positive`
- **Role**: An icon-adjacent or text-adjacent action in toolbars, inline table actions, and card footers. Same component as Tertiary — the label "Ghost" reflects its standalone usage outside a button hierarchy, while "Tertiary" reflects its positional role in a multi-button group.
- **Usage contexts**: Toolbars, data table row actions, card action areas, sidebars.

---

### Danger

- **Property mapping**: `tone=danger` (applied to `type=primary`, `type=secondary`, or `type=ghost`)
- **Role**: Communicates that an action is destructive, irreversible, or carries significant consequence. The tone swaps all color variables to their danger semantic equivalents.
- **Background variable**: `button/background/{type}/danger/{state}`
- **Foreground variable**: `button/foreground/{type}/danger/{state}`
- **Border variable**: `button/border/{type}/danger/{state}`
- **Rules**: Use only for actions the user cannot undo. Make the label explicit ("Delete account", "Remove permanently"). Never use danger tone for routine, reversible, or low-risk actions.

---

## Formatting

---

### Anatomy

A button is composed of a layered set of named frames. Every layer's visual properties resolve exclusively from button variables.

| Layer | Role | Key Variables |
|---|---|---|
| **Component Root** | Outermost boundary. Owns sizing, interactive surface, and all variant properties. | `button/radius/{radius}`, `button/root/min-width`, `button/root/cursor` |
| **Interaction Wrapper** | Renders the focus ring outside the visual container so focus styles do not clip the background. | `button/border/focus-ring`, `button/focus-ring/width`, `button/focus-ring/offset` |
| **Visual Container** | Renders background fill, border, and corner radius. Changes across `type` and `state`. | `button/background/{type}/{state}`, `button/border/{type}/{state}`, `button/border/thickness/{size}`, `button/radius/{radius}` |
| **Content Container** | Horizontal flex row. Owns all padding and aligns leading slot, label, and trailing slot. | `button/spacing/horizontal/{size}`, `button/spacing/vertical/{size}`, `button/spacing/gap/{size}` |
| **Leading Slot** | Conditionally rendered icon to the left of the label. Absent when `has-leading=false`. | `button/icon/size/{size}`, `button/foreground/{type}/{state}` |
| **Label** | Primary text content. Required unless `show-label=false` (icon-only mode). | `button/typography/{size}/font-size`, `button/typography/{size}/font-weight`, `button/typography/{size}/line-height`, `button/foreground/{type}/{state}` |
| **Trailing Slot** | Conditionally rendered icon to the right of the label. Absent when `has-trailing=false`. | `button/icon/size/{size}`, `button/foreground/{type}/{state}` |
| **Spinner Slot** | Replaces label and icons during `state=loading`. Button dimensions preserved. | `button/icon/size/{size}`, `button/foreground/{type}/loading` |

**Cross-axis alignment**: always center. Label never wraps — single line only. Overflow truncates with ellipsis.

---

### Button Sizes

Size is a variant property (`size`) on the button component. It resolves spacing, typography, and icon size variables independently of type, tone, and state.

| Display Name | Property Value | Spacing Variables | Typography Variables | Icon Variable |
|---|---|---|---|---|
| **Small** | `size=small` | `button/spacing/horizontal/sm`, `button/spacing/vertical/sm`, `button/spacing/gap/sm` | `button/typography/sm/*` | `button/icon/size/sm` |
| **Medium** | `size=medium` | `button/spacing/horizontal/md`, `button/spacing/vertical/md`, `button/spacing/gap/md` | `button/typography/md/*` | `button/icon/size/md` |
| **Large** | `size=large` | `button/spacing/horizontal/lg`, `button/spacing/vertical/lg`, `button/spacing/gap/lg` | `button/typography/lg/*` | `button/icon/size/lg` |

- **Height is never fixed**. Button height is always derived from vertical padding (`button/spacing/vertical/{size}`) plus the resolved line-height (`button/typography/{size}/line-height`). No fixed height override is applied at any size.
- **Icon-only** uses square padding from `button/spacing/icon-only/{size}` instead of asymmetric horizontal padding.

---

## Emphasis

---

### Single High-Emphasis Button

When a surface has only one action, use `type=primary`. Do not add a secondary or ghost button simply to fill space. One clear primary action reduces cognitive load and improves task completion.

Examples where a lone primary is correct: a dialog with only "Confirm", a wizard step with only "Next", a success state with only "Done".

---

### Multiple Button Emphasis

When two or more actions coexist:

| Scenario | Recommended Combination |
|---|---|
| One primary + one escape action | `type=primary` + `type=secondary` (e.g., "Save" + "Cancel") |
| One primary + two lower-emphasis | `type=primary` + `type=secondary` + `type=ghost` |
| Two equal-weight supporting actions | `type=secondary` + `type=secondary` (no primary needed if neither is the dominant action) |
| Toolbars with many actions | `type=ghost` repeated (homogeneous weight; no single dominant action) |
| Destructive + escape | `type=primary, tone=danger` + `type=secondary` (e.g., "Delete" + "Cancel") |

**Rules:**
- Never place two `type=primary` buttons at the same hierarchy level.
- Do not mix `tone=danger` and `tone=positive` primaries in the same button group — one primary per group.
- Keep button groups to a maximum of 3 buttons. If more actions are needed, use an overflow menu.

---

## Alignment

Button alignment is a layout-level responsibility. The button component does not encode its own position on a surface. The consuming layout determines alignment based on surface context.

**Guidance placeholders (to be resolved per surface pattern):**

- **Right-aligned**: Forms, dialogs, and wizard footers — primary action on the right end, secondary to its left. Preserves reading flow and puts the dominant action at the natural completion point.
- **Left-aligned**: Inline card actions, contextual toolbars — actions align with the content block they operate on.
- **Center-aligned**: Banners, empty states, and single-CTA promotional surfaces — single button centered beneath content.
- **Full-width stacked**: Mobile form footers and bottom sheets — use `full-width=true` on the button; primary stacked above secondary.

> These are directional defaults. Surface-specific layout specs take precedence.

---

## Use Cases

---

### Banner

Use a single `type=primary` or `type=secondary` button. Banners communicate one message with one action — do not include more than one button. For dismissible banners with no action, use a ghost icon-only close button (`type=ghost`, `has-leading=true`, `show-label=false`, trailing caret icon, `aria-label="Dismiss"`).

---

### Dialog

Dialogs typically contain a two-button footer: one primary confirming the action and one secondary for cancel/close. For destructive operations, the confirm button uses `tone=danger`. Do not add a third button to a dialog footer — if a third action is needed, reconsider the dialog's scope.

| Dialog type | Primary button | Secondary button |
|---|---|---|
| Confirmation | `type=primary, tone=positive` | `type=secondary` |
| Destructive | `type=primary, tone=danger` | `type=secondary` |
| Informational | *(none or one secondary)* | `type=secondary` |

---

### Wizards

Each wizard step has exactly one forward action (`type=primary`) and one backward or cancel action (`type=secondary` or `type=ghost`). The primary label should reflect the step's outcome ("Next", "Review order", "Submit") rather than a generic label. Back/cancel uses secondary weight to visually recede.

---

### Forms

The form submit action uses `type=primary`. If a "Reset" or "Cancel" action is offered alongside it, use `type=secondary`. Avoid placing a reset button unless the use case explicitly demands it — accidental resets are a high-friction failure.

If a form is inside a dialog, follow the dialog button rules above. If the form is a standalone page, right-align (or full-width on mobile) and place the primary on the right.

---

### Cards

Card-level actions typically use `type=ghost` or `type=secondary`. A card rarely carries a primary button unless the card is the only interactive unit on a surface. Icon-only ghost buttons (`type=ghost`, `has-leading=true`, `show-label=false`) are common in card headers for overflow, close, or settings actions.

---

### Toolbars

Toolbar actions use `type=ghost` for all items unless one action is strictly dominant (uncommon). Homogeneous ghost buttons reduce visual noise while maintaining affordance. Group related actions; separate unrelated groups with dividers. Icon-only ghost buttons must always carry `aria-label`.

---

## Width

---

### Fixed (Hug)

The button hugs its content width by default (`full-width=false`). The root width is determined by the label + padding + icon slots. `button/root/min-width` prevents degenerate collapse for very short labels.

Use fixed width in:
- Button groups where buttons sit side-by-side
- Dialogs and wizard footers (aligned to a fixed container edge)
- Toolbars

---

### Fluid (Fill)

Set `full-width=true` to expand the button to 100% of its container width. The label takes remaining flex space and is centered. The button height is unchanged — it is always derived from padding and line-height, never fixed.

Use fluid width in:
- Full-width mobile form footers
- Bottom sheets and drawers on narrow viewports
- Single-CTA banners where the button should span the content block

---

## Button Group

A button group is a set of two or three buttons placed adjacently on a surface to represent a related set of actions at different emphasis levels.

**Rules:**
- Maximum 3 buttons per group. More than 3 actions should collapse into an overflow menu.
- Only one `type=primary` per group. Secondary and ghost may repeat.
- In a horizontal group, order from lowest to highest emphasis left-to-right for left-aligned layouts (secondary or ghost on the left, primary on the right). For right-aligned layouts, reverse: primary is rightmost.
- In a vertical (stacked) group, primary is on top.

---

### Fixed vs Fluid vs Vertical

| Layout | When to Use | `full-width` property |
|---|---|---|
| **Fixed horizontal** | Dialog footers, wizard footers, desktop forms | `false` (default) |
| **Fluid horizontal** | Narrow containers where buttons must fill available width | `true` on all buttons in the group |
| **Vertical stacked** | Mobile bottom sheets, narrow modals | `true` on all; primary stacked first |

---

## Button Group Combinations

Valid patterns based on hierarchy and context:

| Combination | Types | Tones | Notes |
|---|---|---|---|
| Primary + Secondary | `primary` + `secondary` | Both `positive` | Standard confirm + cancel. Most common. |
| Primary + Ghost | `primary` + `ghost` | Both `positive` | When cancel needs minimal visual weight. |
| Primary + Secondary + Ghost | `primary` + `secondary` + `ghost` | All `positive` | Three-action groups; max allowed. |
| Danger Primary + Secondary | `primary` + `secondary` | `danger` + `positive` | Destructive confirm + cancel. |
| Danger Secondary + Secondary | `secondary` + `secondary` | `danger` + `positive` | When two options are offered but the destructive path should not dominate. |
| Ghost + Ghost (toolbar) | `ghost` + `ghost` | Both `positive` | Toolbars; homogeneous weight; no dominant action. |
| Secondary Only (solo) | `secondary` | `positive` | Single action without primary hierarchy — e.g., "Load more" in a list footer. |

---

## Button Group Combinations to Avoid

| Combination | Why to Avoid |
|---|---|
| `primary` + `primary` | Ambiguous hierarchy; user cannot determine the dominant action |
| `primary, tone=danger` + `primary, tone=positive` | Dual primaries; competing visual anchors |
| More than 3 buttons in a group | Cognitive overload; use an overflow menu instead |
| `ghost` as sole action in a dialog footer | Ghost has insufficient affordance for the primary dialog action |
| `tone=danger` on a secondary or ghost without a `positive` escape | Leaves users with no safe path out of a destructive flow |
| Mixing `full-width=true` and `full-width=false` in the same group | Inconsistent widths within a horizontal group break visual alignment |

---

## Content

---

### Main Elements

A button contains up to three visible content elements: a leading icon (optional), a label (required unless icon-only), and a trailing icon (optional). During `state=loading`, all three are replaced by the Spinner Slot. Every element's visual properties resolve from button variables — no overrides are applied.

| Element | Boolean Property | Content Property | Required |
|---|---|---|---|
| Leading icon | `has-leading` | `leading-icon` | No |
| Label | `show-label` (default `true`) | `label` | Yes (unless icon-only) |
| Trailing icon | `has-trailing` | `trailing-icon` | No |

---

### Button Label

- **Length**: 1–4 words. Single verbs preferred ("Save", "Submit", "Continue"). Two-word verb-noun acceptable ("Add item", "Delete file").
- **Voice**: Active, imperative. Label describes the action outcome, not the process.
- **Capitalization**: Sentence case throughout. Title case not recommended. All-caps forbidden.
- **Ambiguity**: Avoid labels that rely on context to be understood ("OK", "Yes", "No"). Destructive actions must be explicit ("Delete account", not "Delete").
- **Truncation**: If the label exceeds available width it truncates with an ellipsis. A tooltip must surface the full label when truncation occurs.
- **Accessible name**: When `show-label=true`, the visible label is the accessible name. When `show-label=false` (icon-only), an `aria-label` must be provided explicitly.

---

### Label Alignment

Label text is always center-aligned within the Content Container. This is a fixed layout rule — no per-variant override is permitted. When `full-width=true`, the label takes remaining flex space and remains centered within the expanded container.

---

### Overflow Content

- **Label overflow**: Single-line only. Truncates with ellipsis at the container boundary. The button never wraps or grows vertically due to label overflow.
- **Tooltip on overflow**: Required when truncation occurs so users can read the full label.
- **Icon overflow**: Icons are sized by `button/icon/size/{size}` and never overflow the slot. Icon assets are scaled to fit within the slot frame.
- **Button minimum width**: `button/root/min-width` prevents the container from collapsing to a degenerate size for very short labels.

---

## Universal Behaviours

These behaviours apply uniformly to all button variants (`type=primary`, `type=secondary`, `type=ghost`) and both tones (`tone=positive`, `tone=danger`). The variables that drive each behaviour are listed alongside each state.

---

### Default

The resting state. All visual variables resolve to their `/{state}=default` equivalents. No overlay, no transition, no augmentation.

- Background: `button/background/{type}/default`
- Foreground: `button/foreground/{type}/default`
- Border: `button/border/{type}/default`
- Cursor: `button/root/cursor` (pointer on web)

---

### Hover

Triggered by pointer entry. Not applicable on mobile (`platform=mobile`). Not triggered by keyboard navigation.

- Background: `button/background/{type}/hover`
- Foreground: `button/foreground/{type}/hover`
- Border: `button/border/{type}/hover`
- Transition: `button/motion/duration/default`, `button/motion/easing/default`

For danger tone, all paths insert `/danger/` before the state segment: `button/background/{type}/danger/hover`.

---

### Pressed (Active)

Triggered on pointer down or `Space`/`Enter` keydown.

- Background: `button/background/{type}/pressed`
- Foreground: `button/foreground/{type}/pressed`
- Border: `button/border/{type}/pressed`
- Scale transform: `button/pressed/transform`
- Transition: `button/motion/duration/pressed` (shorter than hover)

---

### Focused

Rendered on keyboard focus. Never suppressed on pointer click (WCAG 2.4.11). Focus ring rendered by the Interaction Wrapper outside the visual container.

- Visual container variables remain at default values
- Focus ring color: `button/border/focus-ring`
- Focus ring width: `button/focus-ring/width`
- Focus ring offset: `button/focus-ring/offset`

Focus applies to all types and both tones equally. The focus ring is geometry-based, not color-only — satisfies WCAG 2.4.11.

---

### Disabled

All pointer and keyboard interactions suppressed. Removed from tab order. No state transition.

- Background: `button/background/{type}/disabled`
- Foreground: `button/foreground/{type}/disabled`
- Border: `button/border/{type}/disabled`
- Cursor: `not-allowed` (web)
- **Opacity: 100% — no opacity reduction is applied.** Disabled appearance is communicated exclusively through token swaps to `/disabled` semantic equivalents.
- ARIA: `disabled` attribute or `aria-disabled="true"` with `tabindex` removal.

---

### Loading

Activated by `is-loading=true`. Pointer events suppressed. Button dimensions preserved to prevent layout shift.

- Label and icon slots hidden; Spinner Slot rendered in their place
- Background and border remain at default values for current type and tone
- Foreground: `button/foreground/{type}/loading`
- ARIA: `aria-busy="true"`

Loading is a superstate — it overrides hover, pressed, and focused visuals while retaining type and tone variable resolution.

---

---

# Style

---

## Color

All color properties are resolved exclusively from button variables. No raw hex values, no hardcoded color strings, no opacity overrides. State changes are communicated through token swaps, not opacity reduction.

The tables below use pattern notation. Substitute `{type}` with `primary`, `secondary`, or `ghost`; substitute `{state}` with the relevant state. For danger tone, insert `/danger/` before the state segment.

---

### Background Color by Variant and State

| Variant | Property Mapping | Variable Pattern |
|---|---|---|
| Primary (positive) | `type=primary, tone=positive` | `button/background/primary/{state}` |
| Primary (danger) | `type=primary, tone=danger` | `button/background/primary/danger/{state}` |
| Secondary (positive) | `type=secondary, tone=positive` | `button/background/secondary/{state}` |
| Secondary (danger) | `type=secondary, tone=danger` | `button/background/secondary/danger/{state}` |
| Ghost / Tertiary (positive) | `type=ghost, tone=positive` | `button/background/ghost/{state}` |
| Ghost / Tertiary (danger) | `type=ghost, tone=danger` | `button/background/ghost/danger/{state}` |

States: `default` · `hover` · `pressed` · `focused` · `disabled` · `loading`

---

### Foreground Color by Variant and State

| Variant | Property Mapping | Variable Pattern |
|---|---|---|
| Primary (positive) | `type=primary, tone=positive` | `button/foreground/primary/{state}` |
| Primary (danger) | `type=primary, tone=danger` | `button/foreground/primary/danger/{state}` |
| Secondary (positive) | `type=secondary, tone=positive` | `button/foreground/secondary/{state}` |
| Secondary (danger) | `type=secondary, tone=danger` | `button/foreground/secondary/danger/{state}` |
| Ghost / Tertiary (positive) | `type=ghost, tone=positive` | `button/foreground/ghost/{state}` |
| Ghost / Tertiary (danger) | `type=ghost, tone=danger` | `button/foreground/ghost/danger/{state}` |

Foreground variables apply to both the label text and the icon fill. Both resolve from the same variable.

---

### Border Color by Variant and State

| Variant | Property Mapping | Variable Pattern |
|---|---|---|
| Primary (positive) | `type=primary, tone=positive` | `button/border/primary/{state}` (transparent) |
| Primary (danger) | `type=primary, tone=danger` | `button/border/primary/danger/{state}` (transparent) |
| Secondary (positive) | `type=secondary, tone=positive` | `button/border/secondary/{state}` (visible) |
| Secondary (danger) | `type=secondary, tone=danger` | `button/border/secondary/danger/{state}` (visible) |
| Ghost / Tertiary (positive) | `type=ghost, tone=positive` | `button/border/ghost/{state}` (transparent at default) |
| Ghost / Tertiary (danger) | `type=ghost, tone=danger` | `button/border/ghost/danger/{state}` (transparent at default) |

---

### Focus Ring Color

| Property | Variable |
|---|---|
| Focus ring color | `button/border/focus-ring` |
| Focus ring width | `button/focus-ring/width` |
| Focus ring offset | `button/focus-ring/offset` |

The focus ring is rendered by the Interaction Wrapper layer on all variants and both tones. Its color is not type- or tone-specific.

---

## Typography

All typographic properties — `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing` — resolve exclusively from `button/typography/{size}/*` variables. Setting font properties directly on a text layer is forbidden.

| Property | Small | Medium | Large |
|---|---|---|---|
| Font family | `button/typography/sm/font-family` | `button/typography/md/font-family` | `button/typography/lg/font-family` |
| Font size | `button/typography/sm/font-size` | `button/typography/md/font-size` | `button/typography/lg/font-size` |
| Font weight | `button/typography/sm/font-weight` | `button/typography/md/font-weight` | `button/typography/lg/font-weight` |
| Line height | `button/typography/sm/line-height` | `button/typography/md/line-height` | `button/typography/lg/line-height` |
| Letter spacing | `button/typography/sm/letter-spacing` | `button/typography/md/letter-spacing` | `button/typography/lg/letter-spacing` |

Typography variables are size-specific only — they do not vary by type, tone, or state.

---

## Structure

---

### Button Structure

The button's internal layer structure is fixed. Every visual property on every layer resolves from a button variable. The layer order is:

1. **Component Root** — sizing, cursor, radius
2. **Interaction Wrapper** — focus ring (rendered outside Visual Container)
3. **Visual Container** — background, border, border radius
4. **Content Container** — horizontal flex row; owns all padding and gaps
   - **Leading Slot** (conditional on `has-leading=true`)
   - **Label** (conditional on `show-label=true`)
   - **Trailing Slot** (conditional on `has-trailing=true`)
   - **Spinner Slot** (active only when `state=loading`)

Inactive slots are fully absent — no reserved space, no gap contribution.

---

### Button Group Structure

A button group is a horizontal flex container (or vertical stack for stacked layouts) with no gap variable defined at the group level — each button is self-contained. Adjacent buttons in a group inherit the same `size` to maintain consistent height.

- **Horizontal**: buttons laid out in a row; order follows emphasis hierarchy (lowest weight left, primary right in right-aligned layouts)
- **Vertical stacked**: buttons stacked with consistent width (`full-width=true`); primary on top
- **Mixed width**: avoid mixing `full-width=true` and `full-width=false` within the same group

The button group is a layout pattern, not a Figma component in the button skill. Individual button instances compose into the group.

---

## Size

Size is the `size` variant property. It resolves spacing and typography variables. It does not affect color or border variables.

| Property Value | Spacing | Typography | Icon |
|---|---|---|---|
| `size=small` | `button/spacing/horizontal/sm`, `button/spacing/vertical/sm`, `button/spacing/gap/sm`, `button/spacing/icon-only/sm` | `button/typography/sm/*` | `button/icon/size/sm` |
| `size=medium` | `button/spacing/horizontal/md`, `button/spacing/vertical/md`, `button/spacing/gap/md`, `button/spacing/icon-only/md` | `button/typography/md/*` | `button/icon/size/md` |
| `size=large` | `button/spacing/horizontal/lg`, `button/spacing/vertical/lg`, `button/spacing/gap/lg`, `button/spacing/icon-only/lg` | `button/typography/lg/*` | `button/icon/size/lg` |

Within a button group, all buttons must use the same `size` value. Mixing sizes in a single group is not permitted.

---

## Mapping Rule

> **Everything in this documentation maps to button variables and properties. No raw values. No independent styling.**

| Documentation Element | Maps To |
|---|---|
| Variant (Primary, Secondary, Ghost, Tertiary) | `type` property (`primary` / `secondary` / `ghost`) |
| Danger | `tone` property (`danger`) |
| Size (Small, Medium, Large) | `size` property (`small` / `medium` / `large`) |
| Background color | `button/background/{type}/{state}` (or `/danger/` path) |
| Foreground color (label + icon) | `button/foreground/{type}/{state}` (or `/danger/` path) |
| Border color | `button/border/{type}/{state}` (or `/danger/` path) |
| Border thickness | `button/border/thickness/{size}` |
| Corner radius | `button/radius/{radius}` |
| Horizontal padding | `button/spacing/horizontal/{size}` |
| Vertical padding | `button/spacing/vertical/{size}` |
| Slot gap | `button/spacing/gap/{size}` |
| Icon-only padding | `button/spacing/icon-only/{size}` |
| Typography | `button/typography/{size}/*` |
| Icon size | `button/icon/size/{size}` |
| Focus ring | `button/border/focus-ring`, `button/focus-ring/width`, `button/focus-ring/offset` |
| Loading foreground | `button/foreground/{type}/loading` |
| Motion | `button/motion/duration/default`, `button/motion/duration/pressed`, `button/motion/easing/default` |
| Min width | `button/root/min-width` |
| Cursor | `button/root/cursor` |
| Touch target | `button/root/min-touch-target` |
| Press transform | `button/pressed/transform` |

---

## Suggestions

> The following are observations that do not require immediate action. They are surfaced here for consideration. No changes have been applied.

1. **Tertiary as a first-class type**: The button component currently defines `type` as `primary | secondary | ghost`. The documentation refers to "Tertiary" as a usage label for ghost in a three-button hierarchy. Consider adding `tertiary` as an explicit alias or variant label in the component spec to reduce the conceptual gap between documentation language and component properties.

2. **Tertiary/Ghost semantic split**: If ghost buttons appear both as standalone toolbar actions and as the third option in dialogs, a formal split into `ghost` (standalone) and `tertiary` (positional) may reduce misuse. This would require adding a `tertiary` type to the component skill's variant matrix.

3. **Danger tone on Ghost documentation gap**: The button skill defines danger tokens for `ghost/danger` but the documentation does not give a concrete use case for ghost + danger. A note on when ghost danger is appropriate (e.g., a low-prominence destructive option inside a dropdown) would improve clarity.

4. **Button group spacing variable**: The documentation describes a button group as a layout pattern with no gap token. If button groups are frequent, defining a dedicated `button/spacing/group-gap` variable (aliasing a semantic spacing token) would make spacing explicit and adjustable.

5. **Density axis documentation**: The button skill defines a `density` input (`low` / `medium` / `high`) that scales vertical padding. This documentation does not include a density guidance section. Adding a short density section (parallel to the Size section) would document when to use compact vs. spacious density and which variable responds.
