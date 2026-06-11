---
name: input-field
description: >
  Use this skill when generating or defining the Input Field component in a
  design system. Covers anatomy, variables, states, validation, accessibility,
  and behavior rules. Applies to text, password, email, search, number, and
  URL input types.
version: 2.0.0
last_updated: 2026-05-25
outputs:
  - input variable collection (input/ — single collection, ~135 variables)
  - InputField component set (Figma ComponentSet — 2 styles × 3 sizes × 7 states = 42 variants)
---

# Input Field Skill

## Purpose

This skill defines the complete declarative specification for the Input Field component within a design system. It produces a fully resolved, variable-bound, context-aware component model consumable by design tooling, component libraries, documentation systems, and QA pipelines. It describes what an input field is — its anatomy, variant space, variable bindings, validation model, behavior rules, and accessibility guarantees — not how to construct it in any specific medium.

---

## ⚠️ Variable Enforcement Rule

> **All values MUST be resolved through variables. No raw values — hex codes, pixel values, hardcoded font weights, hardcoded font sizes, or literal radius numbers — are permitted anywhere in the Input Field component.**
>
> Every visual property resolves exclusively through the three-layer chain:
>
> `input component variable` → `global semantic variable (semantics collection)` → `primitive variable (primitives collection)` → `raw value`
>
> **Direct aliasing from a component variable to a primitive variable is forbidden.** The semantic layer must always be the intermediate step.
>
> **Typography is included.** Every typographic property on every text layer must be bound to an `input` variable that aliases a semantic typography variable — no exceptions:
>
> - `font-family` → `input/typography/{role}/{size}/font-family` (STRING)
> - `font-size` → `input/typography/{role}/{size}/font-size` (FLOAT)
> - `font-style` → `input/typography/{role}/{size}/font-style` (STRING — Figma `fontStyle` binding, e.g. "Medium" / "Regular")
> - `line-height` → `input/typography/{role}/{size}/line-height` (FLOAT)
> - `letter-spacing` → `input/typography/{role}/{size}/letter-spacing` (FLOAT)
>
> `font-weight` variables (FLOAT, e.g. 400/500) also exist in the collection for code/token-export consumers. They are **not** bound to Figma text nodes — Figma does not accept FLOAT variables for `fontStyle`. Use the STRING `font-style` variables for all Figma bindings.
>
> This rule applies without exception to every variant, state, size, and validation combination. Setting any typographic property directly on a text layer is forbidden.

---

## Figma Build Target

The Input Field component lives on the dedicated **`Input Field`** page in the design system Figma file.

| Property | Value |
|---|---|
| Page name | `Input Field` |
| Variable collection | `input` (~135 variables, all aliasing the `semantics` collection) |
| ComponentSet name | `InputField` |
| Variant count | 42 (2 styles × 3 sizes × 7 states) |
| ComponentSet layout | `HORIZONTAL WRAP`, `FIXED` width (1000px), 32px padding, 24px gap |
| Variant sizing | `WIDTH = FIXED (280px)`, `HEIGHT = AUTO (HUG)` — never set a fixed height on variants |

> All frames and documentation for this component must be placed exclusively on the `Input Field` page.

---

## Input Variables

Input variables must be defined and resolved before any aspect of the input field component is designed, built, or documented. They form the foundational contract between the input field and the global design system.

**Input variables are a mapping layer only.** Each input variable points to a global semantic variable from the `semantics` collection. The `semantics` collection is where resolved (mode-aware) values live. When the `semantics` collection is updated, all input variable mappings must be re-verified.

> The semantic variable names in the right column are drawn from the `semantics` variable collection. All input component variables alias tokens from the **`semantics` collection** — never from the `primitives` collection directly.

> **Space token naming**: The `semantics` collection uses `space/N` where `N × 2 = pixel value` — e.g., `space/4` = 8px, `space/6` = 12px, `space/8` = 16px.

**Format**: `input-component-variable → global-semantic-variable → resolved value`

All variable names conform to the Naming Rules defined in this skill: lowercase, slash-separated, kebab-case for compound words, structured as `component/category/variant/property`.

---

### Typography — Label

Label text appears above the input container. It scales with the input's size.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/typography/label/sm/font-family` | `typography/caption/sm/font-family` | Inter |
| `input/typography/label/sm/font-size` | `typography/caption/sm/font-size` | 12px |
| `input/typography/label/sm/font-style` | `typography/caption/sm/font-style` *(STRING)* | "Medium" |
| `input/typography/label/sm/font-weight` | `typography/caption/sm/font-weight` *(FLOAT — code use only)* | 500 |
| `input/typography/label/sm/line-height` | `typography/caption/sm/line-height` | 16px |
| `input/typography/label/sm/letter-spacing` | `typography/caption/sm/letter-spacing` | 0% |
| `input/typography/label/md/font-family` | `typography/caption/md/font-family` | Inter |
| `input/typography/label/md/font-size` | `typography/caption/md/font-size` | 14px |
| `input/typography/label/md/font-style` | `typography/caption/md/font-style` *(STRING)* | "Medium" |
| `input/typography/label/md/font-weight` | `typography/caption/md/font-weight` *(FLOAT — code use only)* | 500 |
| `input/typography/label/md/line-height` | `typography/caption/md/line-height` | 16px |
| `input/typography/label/md/letter-spacing` | `typography/caption/md/letter-spacing` | 0% |
| `input/typography/label/lg/font-family` | `typography/caption/lg/font-family` | Inter |
| `input/typography/label/lg/font-size` | `typography/caption/lg/font-size` | 16px |
| `input/typography/label/lg/font-style` | `typography/caption/lg/font-style` *(STRING)* | "Medium" |
| `input/typography/label/lg/font-weight` | `typography/caption/lg/font-weight` *(FLOAT — code use only)* | 500 |
| `input/typography/label/lg/line-height` | `typography/caption/lg/line-height` | 20px |
| `input/typography/label/lg/letter-spacing` | `typography/caption/lg/letter-spacing` | 0% |

---

### Typography — Value & Placeholder

Value text is the entered content. Placeholder text appears when the field is empty. Both share the same typography scale.

> Value and placeholder text is always Regular weight regardless of size.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/typography/value/sm/font-family` | `typography/body/xm/font-family` | Inter |
| `input/typography/value/sm/font-size` | `typography/body/xm/font-size` | 12px |
| `input/typography/value/sm/font-style` | `typography/body/xm/font-style` *(STRING)* | "Regular" |
| `input/typography/value/sm/font-weight` | `typography/body/xm/font-weight` *(FLOAT — code use only)* | 400 |
| `input/typography/value/sm/line-height` | `typography/body/xm/line-height` | 20px |
| `input/typography/value/sm/letter-spacing` | `typography/body/xm/letter-spacing` | 0% |
| `input/typography/value/md/font-family` | `typography/caption/md/font-family` | Inter |
| `input/typography/value/md/font-size` | `typography/caption/md/font-size` | 14px |
| `input/typography/value/md/font-style` | `typography/body/xm/font-style` *(STRING)* | "Regular" |
| `input/typography/value/md/font-weight` | `typography/body/xm/font-weight` *(FLOAT — code use only)* | 400 |
| `input/typography/value/md/line-height` | `typography/caption/md/line-height` | 16px |
| `input/typography/value/md/letter-spacing` | `typography/caption/md/letter-spacing` | 0% |
| `input/typography/value/lg/font-family` | `typography/body/sm/font-family` | Inter |
| `input/typography/value/lg/font-size` | `typography/body/sm/font-size` | 16px |
| `input/typography/value/lg/font-style` | `typography/body/xm/font-style` *(STRING)* | "Regular" |
| `input/typography/value/lg/font-weight` | `typography/body/xm/font-weight` *(FLOAT — code use only)* | 400 |
| `input/typography/value/lg/line-height` | `typography/body/sm/line-height` | 20px |
| `input/typography/value/lg/letter-spacing` | `typography/body/sm/letter-spacing` | 0% |

---

### Typography — Helper, Error & Success

Supporting text below the input container. Fixed at the small scale — does not change with input size.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/typography/helper/font-family` | `typography/body/xm/font-family` | Inter |
| `input/typography/helper/font-size` | `typography/body/xm/font-size` | 12px |
| `input/typography/helper/font-weight` | `typography/body/xm/font-weight` *(FLOAT — code use only)* | 400 |
| `input/typography/helper/line-height` | `typography/body/xm/line-height` | 20px |
| `input/typography/helper/letter-spacing` | `typography/body/xm/letter-spacing` | 0% |

---

### Spacing

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/spacing/horizontal/sm` | `space/4` | 8px |
| `input/spacing/horizontal/md` | `space/6` | 12px |
| `input/spacing/horizontal/lg` | `space/8` | 16px |
| `input/spacing/vertical/sm` | `space/3` | 6px |
| `input/spacing/vertical/md` | `space/4` | 8px |
| `input/spacing/vertical/lg` | `space/5` | 10px |
| `input/spacing/label-gap` | `space/4` | 8px |
| `input/spacing/helper-gap` | `space/2` | 4px |
| `input/spacing/icon-gap/sm` | `space/2` | 4px |
| `input/spacing/icon-gap/md` | `space/2` | 4px |
| `input/spacing/icon-gap/lg` | `space/3` | 6px |

---

### Radius

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/radius/default` | `radius/component/md` | 6px |
| `input/radius/none` | `radius/none` | 0px |

---

### Border

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/border/thickness/default` | `stroke-width/default` | 1px |

---

### Color — Background

The background of the input container per interactive state. Validation state variables (`error/`, `success/`) insert their segment before the interactive state segment and override the base path when a validation state is active.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/background/default` | `surface/bg/default` | white |
| `input/background/hover` | `surface/bg/default` | white |
| `input/background/focus` | `surface/bg/default` | white |
| `input/background/disabled` | `surface/bg/inactive` | neutral/100 |
| `input/background/readonly` | `surface/bg/inactive` | neutral/100 |
| `input/background/error/default` | `surface/bg/default` | white |
| `input/background/error/hover` | `surface/bg/default` | white |
| `input/background/error/focus` | `surface/bg/default` | white |
| `input/background/success/default` | `surface/bg/default` | white |
| `input/background/success/hover` | `surface/bg/default` | white |
| `input/background/success/focus` | `surface/bg/default` | white |

---

### Color — Border

The border of the input container per interactive state. When a validation state (`error`, `success`) is active, it inserts its segment before the interactive state segment and overrides the base interactive-state border path entirely. For example, when focused with an error, `input/border/color/error/focus` is used — not `input/border/color/focus`.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/border/color/default` | `border/medium` | neutral/400 |
| `input/border/color/hover` | `border/hover` | neutral/500 |
| `input/border/color/focus` | `border/focused` | primary/500 |
| `input/border/color/disabled` | `border/disabled` | neutral/200 |
| `input/border/color/readonly` | `border/disabled` | neutral/200 |
| `input/border/color/error/default` | `border/system/strong/danger` | danger/500 |
| `input/border/color/error/hover` | `border/system/strong/danger` | danger/500 |
| `input/border/color/error/focus` | `border/system/strong/danger` | danger/500 |
| `input/border/color/success/default` | `border/system/strong/success` | success/500 |
| `input/border/color/success/hover` | `border/system/strong/success` | success/500 |
| `input/border/color/success/focus` | `border/system/strong/success` | success/500 |

> **Readonly border**: `input/border/color/readonly` resolves to the same token as `input/border/color/disabled` (`border/disabled`, neutral/200). Visual distinction between disabled and readonly relies on the background color differences (`input/background/disabled` vs `input/background/readonly`). Add a `border/readonly` or `border/subtle` semantic token if a distinct readonly border is required.

> **Error / success border sub-states**: All three interactive sub-states (`default`, `hover`, `focus`) map to the same danger or success token — the validation border is always at full intensity. The 6 error/success sub-state variables exist to reserve slots for future tinted differentiation.

---

### Color — Foreground (Value Text)

The color of entered text inside the input field.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/foreground/value/default` | `text/on-surface/strong` | neutral/900 |
| `input/foreground/value/hover` | `text/on-surface/strong` | neutral/900 |
| `input/foreground/value/focus` | `text/on-surface/strong` | neutral/900 |
| `input/foreground/value/disabled` | `text/on-surface/inactive` | neutral/400 |
| `input/foreground/value/readonly` | `text/on-surface/medium` | neutral/700 |

---

### Color — Foreground (Placeholder Text)

The color of placeholder text. Placeholder shares typography sizing with value text but uses a distinct color to signal emptiness.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/foreground/placeholder/default` | `text/on-surface/subtle` | neutral/500 |
| `input/foreground/placeholder/hover` | `text/on-surface/subtle` | neutral/500 |
| `input/foreground/placeholder/focus` | `text/on-surface/subtle` | neutral/500 |
| `input/foreground/placeholder/disabled` | `text/on-surface/inactive` | neutral/400 |

---

### Color — Foreground (Label)

The color of the label text. Changes only on disabled and error validation states. In the success validation state, label color is unchanged from default — the success signal is carried by the border and supporting text only.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/foreground/label/default` | `text/on-surface/medium` | neutral/700 |
| `input/foreground/label/disabled` | `text/on-surface/inactive` | neutral/400 |
| `input/foreground/label/error` | `text/on-surface/system/danger` | danger/700 |
| `input/foreground/label/required-indicator` | `text/on-surface/system/danger` | danger/700 |

---

### Color — Foreground (Supporting Text)

Colors for the helper text, error message, and success message rows below the input container.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/foreground/helper/default` | `text/on-surface/subtle` | neutral/500 |
| `input/foreground/helper/disabled` | `text/on-surface/inactive` | neutral/400 |
| `input/foreground/error` | `text/on-surface/system/danger` | danger/700 |
| `input/foreground/success` | `text/on-surface/system/success` | success/700 |

---

### Color — Icon (Decorative / Static)

The color of static leading and trailing icons within the input container. Both slots share these variables. These do not apply to interactive icons (clear button, password toggle) — see Color — Icon (Interactive) below.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/icon/color/default` | `icon/on-surface/medium` | neutral/700 |
| `input/icon/color/hover` | `icon/on-surface/strong` | neutral/900 |
| `input/icon/color/focus` | `icon/on-surface/strong` | neutral/900 |
| `input/icon/color/disabled` | `icon/on-surface/inactive` | neutral/400 |
| `input/icon/color/readonly` | `icon/on-surface/medium` | neutral/700 |
| `input/icon/color/error` | `icon/on-surface/system/danger` | danger/600 |
| `input/icon/color/success` | `icon/on-surface/system/success` | success/600 |

---

### Color — Icon (Interactive)

The color of interactive icon-buttons within the Trailing Slot — specifically the clear button and the password visibility toggle. These elements receive their own hover and pressed states independent of the surrounding input container state.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/icon/interactive/color/default` | `icon/on-surface/medium` | neutral/700 |
| `input/icon/interactive/color/hover` | `icon/on-surface/strong` | neutral/900 |
| `input/icon/interactive/color/pressed` | `icon/on-surface/strong` | neutral/900 |
| `input/icon/interactive/color/disabled` | `icon/on-surface/inactive` | neutral/400 |

> **Hover/pressed parity**: `input/icon/interactive/color/hover` and `input/icon/interactive/color/pressed` both resolve to `icon/on-surface/strong` — there is no distinct pressed feedback for interactive icons. Add an `icon/on-surface/stronger` semantic token if pressed-state differentiation is required.

---

### Color — Warning

Warning state colors. Warning is a distinct validation signal between default and error — used for non-blocking advisories where the user can still proceed. When `state = warning`, the border and label foreground resolve to warning tokens and the warning message slot activates in the Supporting Text Row.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/background/warning` | `surface/bg/default` | white |
| `input/border/color/warning` | `border/system/strong/warning` *(placeholder — add to semantics)* | warning/500 |
| `input/foreground/label/warning` | `text/on-surface/system/warning` *(placeholder — add to semantics)* | warning/700 |
| `input/foreground/warning` | `text/on-surface/system/warning` *(placeholder — add to semantics)* | warning/700 |
| `input/icon/color/warning` | `icon/on-surface/system/warning` *(placeholder — add to semantics)* | warning/600 |

> Add `border/system/strong/warning`, `text/on-surface/system/warning`, and `icon/on-surface/system/warning` to the `semantics` collection before production use, following the same pattern as the existing `danger` and `success` system tokens.

---

### Color — Skeleton

Skeleton state renders a non-interactive loading placeholder. No label, value, placeholder text, or supporting text is shown. The Input Container renders a flat or shimmer fill to indicate content is loading.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/background/skeleton` | `surface/bg/skeleton` *(placeholder — add to semantics)* | neutral/100 |
| `input/border/color/skeleton` | `border/disabled` | neutral/200 |

> Add `surface/bg/skeleton` to the `semantics` collection and bind it to the skeleton shimmer primitive if one exists. If no shimmer is defined, `surface/bg/inactive` (neutral/100) is an acceptable static fallback.

---

### Style — Inline Layout

Variables that govern the `inline` style variant, where the label floats inside the Input Container at reduced size. The value text sits below the inline label within the same container boundary.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/style/inline/label/font-size` | `typography/caption/sm/font-size` | 12px |
| `input/style/inline/label/line-height` | `typography/caption/sm/line-height` | 16px |
| `input/style/inline/label/color/default` | `text/on-surface/subtle` | neutral/500 |
| `input/style/inline/label/color/focus` | `text/on-surface/medium` | neutral/700 |
| `input/style/inline/label/color/error` | `text/on-surface/system/danger` | danger/700 |
| `input/style/inline/label/color/warning` | `text/on-surface/system/warning` *(placeholder)* | warning/700 |
| `input/style/inline/padding/top` | `space/2` | 4px |
| `input/style/inline/padding/bottom` | `space/2` | 4px |

> In the `inline` style, `input/spacing/label-gap` is not applied — the label is inside the container. The Input Container height increases to accommodate both the inline label row and value row. Use `input/style/inline/padding/top` and `input/style/inline/padding/bottom` to control the container's top and bottom inset in addition to `input/spacing/vertical/{size}`.

---

### Icon Sizes

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/icon/size/sm` | `icon/size/sm` | 14px |
| `input/icon/size/md` | `icon/size/md` | 16px |
| `input/icon/size/lg` | `icon/size/lg` | 20px |

---

### Icon Stroke

Icon stroke weight scales with icon size to preserve consistent visual weight. These variables must be applied to all icon vector paths inside Leading and Trailing slots — no raw stroke values are permitted.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/icon/stroke/sm` | `stroke-width/icon/sm` *(placeholder)* | 1px |
| `input/icon/stroke/md` | `stroke-width/icon/md` *(placeholder)* | 1.5px |
| `input/icon/stroke/lg` | `stroke-width/icon/lg` *(placeholder)* | 2px |

> Add `stroke-width/icon/sm` (1px), `stroke-width/icon/md` (1.5px), and `stroke-width/icon/lg` (2px) to the `semantics` collection before production use.
>
> **Scale reference**: 12–14px icons → 1px stroke; 16px icons → 1.5px stroke; 20–24px icons → 2px stroke; 32px+ icons → 3px stroke. This component uses the sm/md/lg columns only.

---

### Opacity

One opacity variable exists in this component: `input/focus-ring/opacity` applies 50% transparency to the focus ring stroke.

The **disabled state renders at 100% opacity** — no opacity modifier is applied to the Component Root. State is communicated entirely through inactive foreground token swaps (`input/background/disabled`, `input/border/color/disabled`, `input/foreground/value/disabled`, `input/icon/color/disabled`, `input/foreground/helper/disabled`). Readonly visual subduing uses the same approach: color variable differences only, no opacity modifier.

---

### Focus

> ⚠️ **WCAG 2.4.11 verification required**: With `stroke-weight = 1px` and `opacity = 0.5`, the rendered focus ring may not satisfy the minimum-area (perimeter × 2px) or 3:1 contrast ratio requirements of WCAG 2.4.11 Focus Appearance. Verify against your resolved background color before production use. If the ring fails, increase `input/focus-ring/width` to 2px and/or raise `input/focus-ring/opacity` to 1.0 in the `input` variable collection.

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/border/focus-ring` | `border/focused` | primary/500 |
| `input/focus-ring/width` | `stroke-width/default` | 1px |
| `input/focus-ring/offset` | `focus/ring/offset` | 2px |
| `input/focus-ring/opacity` | `opacity/focus-ring` *(placeholder)* | 0.5 |

---

### Motion

`input/motion/duration/default` governs hover ↔ default transitions. `input/motion/duration/focus` governs the focus ring appearance on focus entry/exit. `input/motion/duration/validation` governs the entrance animation of the Supporting Text Row when an error or success message first appears. `input/motion/easing/enter` is used for elements that animate into view (validation messages, clear button).

> Motion tokens reference primitives directly; Figma does not natively support variable bindings for motion properties.

| Input Variable | Primitive Reference | Resolved Value |
|---|---|---|
| `input/motion/duration/default` | `duration/fast` | 100ms |
| `input/motion/duration/focus` | `duration/instant` | 50ms |
| `input/motion/duration/validation` | `duration/moderate` | 200ms |
| `input/motion/easing/default` | `easing/standard` | cubic-bezier(0.4, 0, 0.2, 1) |
| `input/motion/easing/enter` | `easing/decelerate` | cubic-bezier(0, 0, 0.2, 1) |

---

### Root & Misc

| Input Variable | Global Semantic Variable | Resolved Value |
|---|---|---|
| `input/root/min-width` | `size/component/control/min-width` *(placeholder)* | 120px |
| `input/root/cursor/default` | `interaction/cursor/text` *(placeholder)* | text |
| `input/root/cursor/disabled` | `interaction/cursor/not-allowed` *(placeholder)* | not-allowed |
| `input/root/cursor/readonly` | `interaction/cursor/default` *(placeholder)* | default |
| `input/root/min-touch-target` | `interaction/touch-target/min` *(placeholder)* | 44px |

> All five tokens in this table are placeholder semantic tokens. Add them to the `semantics` collection before production use.

---

## Naming Rules

All component variable names follow an enforced naming system. These rules are not examples — they are the specification.

- **Lowercase only**: all path segments are lowercase; no uppercase characters permitted
- **Slash-separated**: segments are separated by `/` — not dots, underscores, or camelCase
- **Kebab-case for compound names**: multi-word segments use hyphens — `font-family`, `letter-spacing`, `focus-ring`, `min-touch-target`, `required-indicator`
- **Structure**: `component/category/variant/property`

| Segment | Role |
|---|---|
| `component` | Always `input` for variables in this skill |
| `category` | Visual property domain — `background`, `border`, `foreground`, `typography`, `icon`, `spacing`, `radius`, `opacity`, `motion`, `focus-ring`, `root` |
| `variant` | Role, size, validation sub-category, or interactivity — `label`, `value`, `placeholder`, `helper`, `error`, `success`, `interactive`, `sm`, `md`, `lg`, `color`, `thickness` |
| `property` | The resolved property — `font-size`, `color`, `width`, `offset`, `duration` |

All variable references throughout this specification conform to this system. Dot notation, camelCase, and PascalCase are not permitted anywhere in variable names.

---

## Inputs (Context)

Inputs are resolved after input variables are established. They determine which variable values are active for a given rendering context — not which variables exist.

| Input | Values | Default |
|---|---|---|
| `style` | `default` / `inline` | `default` |
| `size` | `small` / `medium` / `large` | `medium` |
| `state` | `default` / `focus` / `error` / `warning` / `disabled` / `read-only` / `skeleton` | `default` |
| `input-type` | `text` / `password` / `number` / `email` / `search` / `tel` / `url` | `text` |
| `density` | `low` / `medium` / `high` | `medium` |
| `guidance` | `low` / `medium` / `high` | `medium` |
| `visual-intensity` | `low` / `medium` / `high` | `medium` |
| `platform` | `web` / `mobile` | `web` |
| `theme` | `light` / `dark` | `light` |
| `direction` | `ltr` / `rtl` | `ltr` |

### How Each Input Affects Output

**`size`** resolves vertical and horizontal padding, label typography, value typography, icon size, and icon-gap variables. The supporting text (helper/error/success) does not change size. Size values map to abbreviated path segments: `small` → `sm`, `medium` → `md`, `large` → `lg`.

**`style`** controls the label position and container layout model. `default` renders the label above the Input Container (standard stacked layout). `inline` renders the label inside the Input Container at reduced size at the top — used in toolbars, data tables, and contained form surfaces. In `inline` style, `input/spacing/label-gap` is not applied and the container height increases to accommodate both label and value rows. Style is orthogonal to all other axes.

**`state`** is a unified axis covering both interactive states and validation states. `default` is the resting state. `focus` is the keyboard or pointer focus state. `error` is the validation failure state — uses danger border and activates the error message slot. `warning` is the advisory state — uses warning border and activates the warning message slot without blocking submission. `disabled` suppresses all interactions. `read-only` retains focus and value selectability without editability. `skeleton` is the non-interactive loading placeholder — the Input Container renders a flat or shimmer fill with no label, value, or supporting text. At runtime, `hover` and `active` (mousedown) are handled imperatively — they are not variant states in the ComponentSet.

**`input-type`** determines the input element behavior and keyboard mode. `password` activates the visibility toggle in the Trailing Slot. `number` activates step controls. `search` may activate a clear button in the Trailing Slot. This input does not change visual variable resolution — it is a behavioral classifier.

**`density`** scales vertical padding. High density compresses spacing; low density expands it. Resolved through **variable collection modes** on the `input` collection. Density-sensitive tokens and their values per mode:

| Variable | Low (spacious) | Medium (default) | High (compact) |
|---|---|---|---|
| `input/spacing/vertical/sm` | `space/4` (8px) | `space/3` (6px) | `space/2` (4px) |
| `input/spacing/vertical/md` | `space/5` (10px) | `space/4` (8px) | `space/3` (6px) |
| `input/spacing/vertical/lg` | `space/6` (12px) | `space/5` (10px) | `space/4` (8px) |
| `input/spacing/label-gap` | `space/5` (10px) | `space/4` (8px) | `space/3` (6px) |
| `input/spacing/helper-gap` | `space/3` (6px) | `space/2` (4px) | `space/1` (2px) |

All other spacing tokens (`input/spacing/horizontal/{size}`, `input/spacing/icon-gap/{size}`) are density-invariant.

**`guidance`** controls affordance strength. High guidance produces more visible borders in the default state, stronger focus rings, and more prominent validation indicators. Low guidance produces minimal visual differentiation for interfaces with expert-level users. Drives resolution of `input/border/thickness/default` and `input/focus-ring/offset`. Note: `input/focus-ring/width` is fixed at 1px via `stroke-width/default` and does not scale with guidance level.

**`visual-intensity`** controls the contrast and saturation of background and border variables. High intensity produces clearly delineated input containers with elevated surface contrast. Low intensity produces near-flat surfaces with minimal background fill. All foreground contrast ratios are preserved at any visual intensity setting.

**`platform`** affects minimum touch target sizing and cursor behavior. Mobile enforces a minimum 44×44pt touch target and uses no hover state. Hover state is not applicable on mobile.

**`theme`** resolves the entire variable set to its light or dark surface context. All visual variable paths are theme-aware and require no component-level logic to switch.

**`direction`** mirrors the position of leading and trailing icon slots. In `rtl`, the leading slot is visually right-aligned and the trailing slot is visually left-aligned. Semantic slot identity does not change.

---

## Output

The resolved output of this skill is a structured component specification containing:

- **Anatomy definition**: named layer structure with role, layout behavior, and variable bindings per layer
- **Variant matrix**: the combinatorial space of size × state × validation-state and its governing rules
- **State definitions**: per-state variable resolutions for background, border, foreground, and icon layers
- **Validation behavior**: error/success message activation, message priority rules, and trigger model
- **Variable bindings**: semantic or component-level variable references for every visual property — no raw values
- **Behavior rules**: layout, slot activation, focus ring rendering, cursor behavior, and width behavior
- **Accessibility guarantees**: contrast ratios, focus visibility, keyboard model, ARIA roles, and screen reader expectations

---

## Anatomy

### Component Root
- **Role**: Outermost boundary. A block-level container that owns the full width of its parent by default. Exposes all component properties to the variant system and establishes the vertical stacking of all child layers.
- **Layout behavior**: Block-level flex column. Width is 100% of the containing block by default. Height is derived from child content — no fixed height is set at the root level.
- **Variable usage**: `input/root/min-width`

### Label Row
- **Role**: Contains the label text and the required indicator. Sits above the Input Container. Conditionally rendered based on `has-label`.
- **Layout behavior**: Horizontal flex row. Label text takes available width. Required indicator follows the label text inline without a gap. Separated from the Input Container below by `input/spacing/label-gap`.
- **Variable usage**: `input/typography/label/{size}/*`, `input/foreground/label/default`, `input/foreground/label/required-indicator`, `input/spacing/label-gap`

> **All five typography properties are mandatory bindings** on the label text layer: `font-family`, `font-size`, `font-style` (STRING), `line-height`, `letter-spacing`. Setting any of these directly on the text layer is forbidden. Use `input/typography/label/{size}/font-style` (STRING) for the Figma `fontStyle` binding — not the FLOAT `font-weight` variable.

### Focus Wrapper
- **Role**: Owns focus ring rendering. Wraps the Input Container so that the focus ring does not interfere with background clipping.
- **Layout behavior**: Passthrough — matches Input Container dimensions exactly. `clipsContent = false` — required so the Focus Ring (which extends 2px outside the wrapper bounds) is not clipped.
- **Variable usage**: `input/border/focus-ring`, `input/focus-ring/width`, `input/focus-ring/offset`, `input/focus-ring/opacity`

#### Focus Ring placement spec (ABSOLUTE-positioned child inside Focus Wrapper)
The Focus Ring RECTANGLE must be placed so it surrounds the Input Container with a uniform 2px offset (`input/focus-ring/offset`) on all four sides:

| Property | Value | Formula | Notes |
|---|---|---|---|
| `layoutPositioning` | `ABSOLUTE` | — | Must be ABSOLUTE inside Focus Wrapper auto-layout |
| `x` | `−2` | `−offset` | Counter-axis (horizontal): standard top-left offset. 2px left of IC left edge. |
| `y` | `IC.height + 2` | `ring.height − 2` | **Primary-axis (vertical): Figma bottom-anchors ABSOLUTE children in a VERTICAL layout.** `relY` sets `ring.bottom = FW.top + relY`, not `ring.top`. Setting `relY = IC.h + 2` → `ring.top = FW.top − 2`. |
| `width` | `IC.width + 4` | `IC.width + 2 × offset` | Extends 2px right of IC right edge |
| `height` | `IC.height + 4` | `IC.height + 2 × offset` | Extends 2px below IC bottom edge |
| `strokeAlign` | `CENTER` | — | Stroke straddles the ring rect edge exactly at the −2px position. **OUTSIDE shifts the stroke 1px further out (3px gap instead of 2px).** |
| `constraints` | `{ horizontal: MIN, vertical: MIN }` | — | TOP-LEFT offset semantics. Do not use CENTER — see warning below. |

> ⚠️ **Figma ABSOLUTE-in-VERTICAL-layout primary axis quirk (critical).** When a RECTANGLE is ABSOLUTE-positioned inside a VERTICAL auto-layout frame, Figma treats the `y` coordinate as the **bottom edge** of the item measured from the container's **top edge** — not the top edge as expected. The formula is: `ring.absY = FW.absY + relY − ring.height`. Setting `y = −2` places the ring's *bottom* 2px above the FW top (ring renders entirely above the Input Container). The correct value is `y = IC.height + 2`, so that `ring.bottom = IC.bottom + 2` and `ring.top = IC.top − 2`. The **horizontal (counter) axis behaves normally** — `x = −2` correctly places the ring's left edge 2px to the left.
>
> ⚠️ **Do not use `OUTSIDE` strokeAlign.** OUTSIDE extends the 1px stroke beyond the ring rectangle edge, rendering the ring 3px from the IC instead of 2px — violating the `input/focus-ring/offset` contract.
>
> ⚠️ **Do not use `CENTER` or `STRETCH` constraints on the Focus Ring.** CENTER constraints do not fix the primary-axis bottom-anchor behavior. Use `MIN/MIN` (TOP-LEFT). STRETCH stores raw inset offsets corrupted on resize.
>
> The Focus Wrapper's `clipsContent = false` ensures the ring renders outside the wrapper area without clipping.

### Input Container
- **Role**: The primary interactive surface. Renders the background fill, border, border-radius, and contains all inline slots in a horizontal row.
- **Layout behavior**: Horizontal flex row, center-aligned on the cross axis. Height is derived entirely from `input/spacing/vertical/{size}` plus the resolved value of `input/typography/value/{size}/line-height` — no fixed height is set.
- **Variable usage**: `input/background/{state}`, `input/border/color/{state}`, `input/border/thickness/default`, `input/radius/default`, `input/spacing/horizontal/{size}`, `input/spacing/vertical/{size}`

#### Border spec (Input Container)

| Property | Required value | Rationale |
|---|---|---|
| `strokeAlign` | `CENTER` | Straddles the frame edge — border renders at the exact boundary, no inset shift. `INSIDE` shifts the visible border 1px into the frame, causing the top border to appear elevated relative to the frame edge. |
| `strokeWeight` | `input/border/thickness/default` (1px) | Constant across **all** states including focus. Border thickness must **never** change on focus. |
| State-driven property | `strokeColor` only | Only the stroke color changes between states via `input/border/color/{state}`. Thickness and alignment are state-invariant. |

> ⚠️ **Focus state must NOT change the border.** Do not alter `strokeWeight`, `strokeAlign`, or add any inner/outer border modification on focus. Focus is communicated exclusively by the Focus Ring (see Focus Wrapper above). Any border change on focus causes layout shift and violates the no-shift constraint.
>
> ⚠️ **Do not use `INSIDE` strokeAlign.** INSIDE renders the stroke within the frame bounds, making the top border appear 1px below the frame's top edge — this is visually inconsistent with CENTER alignment used in adjacent elements.

### Leading Slot
- **Role**: Container for a static leading icon. Provides semantic or type context before the text entry area (e.g., a search icon, a calendar icon). Conditionally rendered based on `has-leading-icon`.
- **Layout behavior**: Fixed square from the icon size variable. Center-aligned vertically with the Text Field on the cross axis. Separated from the Text Field by `input/spacing/icon-gap/{size}`. Fully collapsed — no space reserved — when inactive.
- **Variable usage**: `input/icon/size/{size}`, `input/icon/color/{state}`, `input/icon/stroke/{size}`

> **Icon stroke binding is mandatory.** All icon vector paths inside this slot must have their stroke weight bound to `input/icon/stroke/{size}`. No raw stroke values permitted.

### Text Field
- **Role**: The native text input element where the user types. Renders value text or placeholder text depending on emptiness. Grows to fill all remaining horizontal space within the Input Container.
- **Layout behavior**: Flex-grow: 1. Single-line. Overflowing text scrolls horizontally — the field never grows taller or wraps.
- **Variable usage**: `input/typography/value/{size}/*`, `input/foreground/value/{state}`, `input/foreground/placeholder/{state}`, `input/root/cursor/default`

> **All five typography properties are mandatory bindings** on both the value text layer and the placeholder text layer: `font-family`, `font-size`, `font-style` (STRING), `line-height`, `letter-spacing`. Setting any of these directly on a text layer is forbidden. Use `input/typography/value/{size}/font-style` (STRING) for the Figma `fontStyle` binding — not the FLOAT `font-weight` variable.

### Trailing Slot
- **Role**: Contains one or more contextual trailing elements — a clear button, a password visibility toggle, a validation status icon, or a custom static icon. Conditionally rendered based on `has-trailing-icon` or activated by `input-type` rules. Interactive trailing elements (clear, password toggle) use `input/icon/interactive/color/*`; static validation icons use `input/icon/color/error` or `input/icon/color/success`.
- **Layout behavior**: Matches Leading Slot sizing. Center-aligned vertically with the Text Field on the cross axis. Separated from the Text Field by `input/spacing/icon-gap/{size}`. In RTL, mirrors to the left side.
- **Variable usage**: `input/icon/size/{size}`, `input/icon/color/{state}`, `input/icon/color/error`, `input/icon/color/success`, `input/icon/interactive/color/{state}`, `input/icon/stroke/{size}`

> **Icon stroke binding is mandatory.** All icon vector paths inside this slot must have their stroke weight bound to `input/icon/stroke/{size}`. No raw stroke values permitted.

### Supporting Text Row
- **Role**: Container for exactly one of: helper text, error message, or success message. Sits below the Input Container. Only one message type is visible at a time — priority order is error > success > helper.
- **Layout behavior**: Block-level. Full width of the Component Root. Separated from the Input Container above by `input/spacing/helper-gap`. Text wraps across multiple lines if necessary — this row may grow in height.
- **Variable usage**: `input/typography/helper/*`, `input/foreground/helper/default`, `input/foreground/error`, `input/foreground/success`, `input/spacing/helper-gap`

> **All five typography properties are mandatory bindings** on the supporting text layer. Setting any of these directly on the text layer is forbidden.

---

## Properties

### Variant Properties

**`style`** — `default` | `inline`
Controls the label position and container layout model. `default` renders the label above the Input Container (standard stacked layout). `inline` renders the label inside the Input Container at reduced size at the top — the value text sits below it within the same container. Style is orthogonal to all other axes.

**`size`** — `small` | `medium` | `large`
Resolves spacing, label typography, value typography, and icon size variable paths. All size-sensitive variables use the abbreviated segment (`sm` / `md` / `lg`).

**`state`** — `default` | `focus` | `error` | `warning` | `disabled` | `read-only` | `skeleton`
Unified axis covering both interactive states and validation states. `error` and `warning` are first-class states — not overlays. Each state resolves its own complete set of background, border, and foreground variables. `hover` and `active` are runtime-only states handled imperatively; they do not appear as variant properties in the ComponentSet.

**`input-type`** — `text` | `password` | `number` | `email` | `search` | `tel` | `url`
Classifies the semantic purpose of the text entry. Drives browser keyboard mode on mobile, autocomplete behavior, and activation of type-specific Trailing Slot elements. Does not change visual variable resolution.

---

### Boolean Properties

**`has-label`** — default: `true`
Renders the Label Row above the Input Container. In `inline` style, the label renders inside the container regardless of this value. When `false` in `default` style, no label space is reserved and `aria-label` or `aria-labelledby` must be provided.

**`is-required`** — default: `false`
Renders the required indicator in the Label Row and sets `aria-required="true"` on the Text Field.

**`has-text`** — default: `false`
Indicates whether the Text Field currently contains a value. When `true`, value text (`input-text`) is rendered. When `false`, placeholder text is shown. In `inline` style, the label floats to its compact top position when `has-text = true` even without focus. Also controls visibility of the clear button when `is-clearable = true`.

**`has-toggle-tip`** — default: `false`
Renders a toggle-tip trigger icon adjacent to the label. The toggle-tip provides additional contextual guidance accessible on demand. Uses `input/icon/size/sm` at all input sizes. Toggle-tip content is associated via `aria-describedby` on the label.

**`has-helper`** — default: `false`
Renders the Supporting Text Row. When `state = default` or `state = focus`, shows helper text. When `state = error` or `state = warning`, shows the respective message. Only one message is visible at a time.

**`has-count`** — default: `false`
Renders a character or word count indicator at the trailing end of the Supporting Text Row. Content provided via `count-text`. Requires `has-helper = true` to be visible.

**`has-leading-icon`** — default: `false`
Activates the Leading Slot with a static decorative icon.

**`has-trailing-icon`** — default: `false`
Activates the Trailing Slot with a static custom icon. Overridden by type-specific interactive elements when `input-type = password` or `is-clearable = true`.

**`is-clearable`** — default: `false`
When `true`, a clear button appears in the Trailing Slot when `has-text = true`. Uses `input/icon/interactive/color/*` variables.

**`is-disabled`** — default: `false`
Suppresses all interactions. Component Root opacity remains at **100%** — disabled state is communicated entirely through inactive token swaps (`input/background/disabled`, `input/border/color/disabled`, `input/foreground/value/disabled`, `input/icon/color/disabled`). Removes from tab order.

**`is-readonly`** — default: `false`
Value is selectable but not editable. Renders with `input/background/readonly` and subdued color variables. Visual subduing is achieved through color variable differences only — no opacity modifier is applied.

---

### Content Properties

**`label-text`** — type: `string`
Visible text content of the label. Required unless `has-label = false` in `default` style. In `inline` style, this is the floating label inside the container.

**`placeholder-text`** — type: `string`
Text displayed inside the Text Field when `has-text = false`. Provides a format hint — not a substitute for the label.

**`input-text`** — type: `string`
The current value shown inside the Text Field when `has-text = true`. When `has-text = false`, `placeholder-text` is shown instead.

**`helper-text`** — type: `string`
Persistent instructional text shown in the Supporting Text Row when `state = default` or `state = focus`. Superseded by the warning or error message when those states are active.

**`count-text`** — type: `string`
Character or word count string shown at the trailing end of the Supporting Text Row when `has-count = true`. Format: `current/max` (e.g., `0/100`). Styled with `input/typography/helper/*` and `input/foreground/helper/default`.

**`leading-icon`** — type: `slot`
Icon asset passed into the Leading Slot. Size resolved from `input/icon/size/{size}`.

**`trailing-icon`** — type: `slot`
Icon asset passed into the Trailing Slot for static custom use. Inactive when a type-specific interactive element is present.

---

## Variant System

**2 styles × 3 sizes × 7 states = 42 valid variant combinations.**

| Axis | Values | Variable segment |
|---|---|---|
| `style` | `default` / `inline` | Layout axis — governs label position |
| `size` | `small` / `medium` / `large` | `sm` / `md` / `lg` |
| `state` | `default` / `focus` / `error` / `warning` / `disabled` / `read-only` / `skeleton` | Unified interactive + validation layer |

### Combinatorial Rules

1. **Style** is orthogonal to all other axes. `default` and `inline` each produce the full 3 × 7 = 21 variants. `inline` style uses `input/style/inline/*` variables for label placement inside the container.
2. **Size** resolves independently — spacing, typography, and icon size change; colors do not.
3. **State** is a unified axis. `error` and `warning` are first-class states — not overlays. Each state resolves its own complete set of background, border, and foreground variables. For `error` state, `input/border/color/error/default` and `input/background/error/default` are used. For `warning`, use `input/border/color/warning` and `input/foreground/warning`.
4. **Hover and active** are runtime interaction states handled imperatively. They do not appear as variant properties in the ComponentSet.
5. **Disabled** suppresses all interactions. `read-only` retains focus and value selectability. `skeleton` renders the container as a non-interactive loading placeholder.
6. **Variable path note**: Existing `error/` family variable paths (e.g., `input/border/color/error/default`) continue to be used for the `error` state variant. Warning uses the new flat `input/border/color/warning` path.

---

## States

### Default
- Variables resolved: `input/background/default`, `input/border/color/default`, `input/foreground/value/default`, `input/foreground/placeholder/default`, `input/icon/color/default`
- Border thickness: `input/border/thickness/default`
- Cursor: text cursor (`input/root/cursor/default`)
- No focus ring visible
- All transitions ready via `input/motion/duration/default` and `input/motion/easing/default`

### Hover
- Background: `input/background/hover`
- Border color: `input/border/color/hover` — strengthened to communicate interactivity
- Text and icon foreground: unchanged from default
- Transition: `input/motion/duration/default`, `input/motion/easing/default`
- Not applicable on `platform = mobile`

### Focus
- Background: `input/background/focus`
- Border color: `input/border/color/focus` — resolves to brand color
- Border thickness: `input/border/thickness/default` — **unchanged from default; no thickness increase on focus**
- Focus ring rendered by the Focus Wrapper: `input/border/focus-ring` (color), `input/focus-ring/width` (1px stroke), `input/focus-ring/offset`, `input/focus-ring/opacity` (0.5 — 50% transparent). The focus ring is an ABSOLUTE-positioned outer stroke and is the **sole visual focus indicator** — no layout shift occurs
- Focus ring always visible — never suppressed (WCAG 2.4.11)
- In high-guidance mode, `input/focus-ring/offset` resolves to a larger value

### Active
- `active` (mousedown or touchdown before the cursor enters the Text Field) resolves to the same variable values as `focus`. No distinct variable path exists for this state — variable resolution is identical to focus.

### Disabled
- Component Root opacity: **100%** — no opacity modifier applied
- Background: `input/background/disabled`; border: `input/border/color/disabled`
- Label: `input/foreground/label/disabled`; value text: `input/foreground/value/disabled`; icon: `input/icon/color/disabled`; helper: `input/foreground/helper/disabled`
- Cursor: `input/root/cursor/disabled`
- No hover, focus, or any state transitions
- Removed from tab order
- **Text must remain readable** — label and value text are always rendered and visible; the disabled state must never hide, remove, clip, or render text unreadable. Using opacity on the Component Root is forbidden.

> **Design note**: Disabled state is communicated entirely through inactive token swaps — no opacity reduction on the Component Root. The `text/on-surface/inactive` token (neutral/400) against `surface/bg/inactive` (neutral/100) meets the minimum readability threshold. WCAG AA does not require 4.5:1 for disabled components, but text must remain perceptible. If the resolved contrast falls below 3:1 in your theme, replace `text/on-surface/inactive` with a higher-contrast inactive token.

### Read-Only
- Background: `input/background/readonly` — distinct from default to signal non-editability
- Border: `input/border/color/readonly` — subdued
- Value text: `input/foreground/value/readonly`; icon: `input/icon/color/readonly`
- Cursor: `input/root/cursor/readonly`
- No opacity modifier applied — visual subduing is achieved entirely through color variable differences
- Value is selectable and copyable; not editable
- Remains in tab order; focus ring applies when keyboard-focused
- Hover state does not strengthen the border

### Error (Validation Overlay)
- Applied when `validation-state = error`. Layered over the current interactive state.
- Border color: `input/border/color/error/{state}` — e.g., `input/border/color/error/focus` when focused
- Label color: `input/foreground/label/error`; label color in the success state is unchanged from default
- Trailing Slot shows status icon using `input/icon/color/error`
- Supporting Text Row activates the error message using `input/foreground/error`; entrance animated via `input/motion/duration/validation` and `input/motion/easing/enter`
- `aria-invalid="true"` set on the Text Field; error message associated via `aria-describedby`

### Success (Validation Overlay)
- Applied when `validation-state = success` and `has-error = false`
- Border color: `input/border/color/success/{state}`
- Label color: unchanged from default — success signal is carried by the border and supporting text only
- Trailing Slot shows status icon using `input/icon/color/success`
- Supporting Text Row activates the success message using `input/foreground/success`; entrance animated via `input/motion/duration/validation` and `input/motion/easing/enter`

> **Note**: `success` is not included in the Figma ComponentSet variant matrix (it is not one of the 7 standard states). It remains supported as a runtime-only state and its variables are preserved for code consumers.

### Warning
- Variables resolved: `input/background/warning`, `input/border/color/warning`, `input/foreground/label/warning`
- Border color: `input/border/color/warning` — resolves to warning/500; always at full intensity
- Label color: `input/foreground/label/warning`
- Trailing Slot shows a warning status icon using `input/icon/color/warning`
- Supporting Text Row activates the warning message using `input/foreground/warning`; entrance animated via `input/motion/duration/validation` and `input/motion/easing/enter`
- Warning does **not** set `aria-invalid="true"` — it is advisory, not a blocking error
- Warning message slot uses `role="alert"` or `aria-live="polite"` for screen reader announcement
- Focus ring still renders when the field is keyboard-focused in warning state

### Skeleton
- Non-interactive loading placeholder state
- Background: `input/background/skeleton` — flat fill or shimmer surface
- Border: `input/border/color/skeleton` — subdued
- All text layers hidden: no label, no value, no placeholder, no supporting text
- No focus ring; excluded from tab order
- Component Root opacity: **100%** — the skeleton surface token provides visual indication; no opacity reduction
- Used during initial data fetch or async load of pre-filled form values

---

## Validation Behavior

### Validation State Model
Validation is an independent axis from the interactive state. An input may simultaneously be `focus` (interactive state) and `error` (validation state). In this case, both axes appear in the variable path: `input/border/color/error/focus`.

### Error Handling
When `has-error = true`:
1. `validation-state` resolves to `error`
2. Border color path transitions to the `error/` family
3. Label color transitions to `input/foreground/label/error`
4. Supporting Text Row activates the error message using `input/foreground/error`; entrance transition uses `input/motion/duration/validation` and `input/motion/easing/enter`
5. A status icon using `input/icon/color/error` is shown in the Trailing Slot
6. `aria-invalid="true"` is set on the Text Field
7. The error message element ID is set as `aria-describedby` on the Text Field

### Success Handling
When `has-success = true` and `has-error = false`:
1. `validation-state` resolves to `success`
2. Border color path transitions to the `success/` family
3. Label color remains at default — no label color change for success
4. Supporting Text Row activates the success message using `input/foreground/success`; entrance transition uses `input/motion/duration/validation` and `input/motion/easing/enter`
5. A status icon using `input/icon/color/success` is shown in the Trailing Slot

### Message Priority
Only one message is visible in the Supporting Text Row at a time:
1. **Error message** — highest priority; overrides helper and success
2. **Success message** — shown when no error is active
3. **Helper text** — shown when no validation message is active

### Validation Triggers
- **On blur** (default): Validation evaluated when the user leaves the field. Errors do not appear during typing.
- **On input** (optional): Real-time validation as the user types. Only activates after the first character to avoid premature errors.
- **On submit**: The containing form drives error state. The input field receives its `has-error` or `has-success` value from the form layer.

---

## Variable Mapping

All variables are semantic or component-level. No raw values are permitted. All variable names conform to the Naming Rules defined in this skill.

### Background Variables
- `input/background/{state}` — default states (no validation segment)
- `input/background/error/{state}` — error state (existing paths, used by `state = error` variant)
- `input/background/success/{state}` — success state (runtime-only; not a ComponentSet variant)
- `input/background/warning` — warning state
- `input/background/skeleton` — skeleton state

### Border Variables
- `input/border/color/{state}` — default states
- `input/border/color/error/{state}` — error state (existing paths used by `state = error` variant)
- `input/border/color/success/{state}` — success state (runtime-only)
- `input/border/color/warning` — warning state
- `input/border/color/skeleton` — skeleton state
- `input/border/thickness/default`
- `input/radius/default`
- `input/radius/none`

### Foreground Variables
- `input/foreground/value/{state}` — entered text color per state
- `input/foreground/placeholder/{state}` — placeholder text color per state
- `input/foreground/label/default`
- `input/foreground/label/disabled`
- `input/foreground/label/error` — label color in error state
- `input/foreground/label/warning` — label color in warning state
- `input/foreground/label/required-indicator`
- `input/foreground/helper/default`
- `input/foreground/helper/disabled`
- `input/foreground/error` — error message text color
- `input/foreground/warning` — warning message text color
- `input/foreground/success` — success message text color (runtime-only)

### Icon Variables (Decorative)
- `input/icon/color/{state}` — static icon color per state
- `input/icon/color/error` — static icon color in error state
- `input/icon/color/warning` — static icon color in warning state
- `input/icon/color/success` — static icon color in success state (runtime-only)
- `input/icon/size/{size}` — icon dimensions, scale with input size
- `input/icon/stroke/{size}` — icon stroke weight, scales with icon size

### Icon Variables (Interactive)
- `input/icon/interactive/color/default` — clear button and password toggle default color
- `input/icon/interactive/color/hover` — color on pointer hover
- `input/icon/interactive/color/pressed` — color on press
- `input/icon/interactive/color/disabled` — color when input is disabled

### Spacing Variables
- `input/spacing/horizontal/{size}`
- `input/spacing/vertical/{size}`
- `input/spacing/label-gap`
- `input/spacing/helper-gap`
- `input/spacing/icon-gap/{size}`

### Typography Variables
- `input/typography/label/{size}/font-family` (STRING)
- `input/typography/label/{size}/font-size` (FLOAT)
- `input/typography/label/{size}/font-style` (STRING — Figma `fontStyle` binding)
- `input/typography/label/{size}/font-weight` (FLOAT — code/token export only, not bound in Figma)
- `input/typography/label/{size}/line-height` (FLOAT)
- `input/typography/label/{size}/letter-spacing` (FLOAT)
- `input/typography/value/{size}/font-family` (STRING)
- `input/typography/value/{size}/font-size` (FLOAT)
- `input/typography/value/{size}/font-style` (STRING — Figma `fontStyle` binding)
- `input/typography/value/{size}/font-weight` (FLOAT — code/token export only, not bound in Figma)
- `input/typography/value/{size}/line-height` (FLOAT)
- `input/typography/value/{size}/letter-spacing` (FLOAT)
- `input/typography/helper/font-family` (STRING)
- `input/typography/helper/font-size` (FLOAT)
- `input/typography/helper/line-height` (FLOAT)
- `input/typography/helper/letter-spacing` (FLOAT)

### Radius Variables
- `input/radius/default`
- `input/radius/none`

### Opacity Variables
- `input/focus-ring/opacity` — opacity of the focus ring stroke; resolves to 0.5 (50%)

> `input/opacity/disabled` does **not** exist in this component. Disabled state uses 100% opacity with token swaps only.

### Focus Variables
- `input/border/focus-ring` — color of the focus ring outline
- `input/focus-ring/width` — stroke weight of the focus ring; resolves to 1px
- `input/focus-ring/offset` — gap between input container edge and focus ring
- `input/focus-ring/opacity` — transparency of the focus ring stroke; resolves to 0.5

### Motion Variables
- `input/motion/duration/default` — hover ↔ default transitions
- `input/motion/duration/focus` — focus ring appearance transition on focus entry/exit
- `input/motion/duration/validation` — Supporting Text Row entrance on error/success activation
- `input/motion/easing/default` — standard state transitions
- `input/motion/easing/enter` — elements animating into view (validation messages, clear button)

### Root & Misc Variables
- `input/root/min-width`
- `input/root/cursor/default`
- `input/root/cursor/disabled`
- `input/root/cursor/readonly`
- `input/root/min-touch-target`

### Rules
- Always reference semantic or component-level variables
- Never use raw values (hex, px, rem, etc.)
- Never reference primitive variables directly
- All variable names must conform to the Naming Rules defined in this skill

### Style Variables (Inline Layout)
- `input/style/inline/label/font-size` — inline label font size (12px)
- `input/style/inline/label/line-height` — inline label line height
- `input/style/inline/label/color/default` — inline label color at rest
- `input/style/inline/label/color/focus` — inline label color on focus
- `input/style/inline/label/color/error` — inline label color in error state
- `input/style/inline/label/color/warning` — inline label color in warning state
- `input/style/inline/padding/top` — container top inset for inline style
- `input/style/inline/padding/bottom` — container bottom inset for inline style

---

## Layout Rules

- **No fixed height**: Input Container height is always derived from `input/spacing/vertical/{size}` plus the resolved value of `input/typography/value/{size}/line-height`. No height override is applied.
- **Full-width default**: The Component Root occupies 100% of its containing block. `input/root/min-width` prevents degenerate rendering at narrow widths.
- **Vertical stacking order**: Label Row → Focus Wrapper (wrapping Input Container) → Supporting Text Row. Each layer is separated by its corresponding gap variable: `input/spacing/label-gap` between Label Row and Input Container; `input/spacing/helper-gap` between Input Container and Supporting Text Row. Both gap values must be variable-bound — never hardcoded.
- **Horizontal padding**: `input/spacing/horizontal/{size}` applied symmetrically. Does not vary by validation state.
- **Icon placement**: Leading Slot is leftmost; Trailing Slot is rightmost. Both are separated from the Text Field by `input/spacing/icon-gap/{size}`. Absent slots contribute no space.
- **Icon vertical alignment**: Icons in Leading and Trailing slots are center-aligned on the cross axis with the Input Container. `counterAxisAlignItems = CENTER` on the Input Container auto-layout enforces this — never manually offset icons.
- **Icon stroke binding**: Icon stroke weight must always be bound to `input/icon/stroke/{size}`. The scale: sm (14px) → 1px; md (16px) → 1.5px; lg (20px) → 2px. No raw stroke values on icon vector paths.
- **Icon sizing**: Icon slot frame dimensions exactly match `input/icon/size/{size}`. Icons are resized to fit the slot frame — never overflow it.
- **Label alignment**: Left-aligned (right-aligned in RTL). Never centered. Never inline with the input container.
- **Supporting text alignment**: Left-aligned (right-aligned in RTL). Wraps across multiple lines. Does not truncate.
- **Required indicator**: Immediately follows the label text inline. Color: `input/foreground/label/required-indicator`.

---

## Figma Rendering Rules

These rules prevent the layout issues encountered during the initial build of this component in Figma.

### Component Variant Sizing

- **HEIGHT must always be AUTO (HUG)** on every variant frame. Never set a fixed height on a variant. Setting `primaryAxisSizingMode = 'FIXED'` with a small initial value causes content to overflow its container, creating visual overlap.
- **WIDTH must be FIXED** (e.g. 280px). The component has a defined width; height is derived from content.
- **Layout mode**: VERTICAL auto-layout on the variant root.

### Layer Order (top to bottom)

1. Label Row (`has-label = true`)
2. Focus Wrapper (wraps Input Container; `layoutMode = 'NONE'`)
3. Supporting Text Row (`has-helper-text / has-error / has-success = true`)

### Focus Wrapper

- Use `layoutMode = 'NONE'` so the focus ring (rendered outside the Input Container boundary) is not clipped by the wrapper.
- Resize the Focus Wrapper explicitly to match the Input Container dimensions. `primaryAxisSizingMode` is irrelevant for `NONE` layout.

### Critical Figma Plugin API Order

- Set `layoutMode` **before** setting `primaryAxisSizingMode` or `counterAxisSizingMode`.
- Call `node.appendChild(child)` **before** setting `child.layoutSizingHorizontal = 'FILL'` or `child.layoutSizingVertical = 'FILL'`. FILL sizing requires the child to already be inside its parent.
- `counterAxisAlignItems` does not accept `'STRETCH'`. Use `layoutSizingVertical = 'FILL'` on individual children after appending them.

### ComponentSet Layout

| Property | Value |
|---|---|
| `layoutMode` | `HORIZONTAL` |
| `layoutWrap` | `WRAP` |
| `primaryAxisSizingMode` | `FIXED` (1000px) |
| `counterAxisSizingMode` | `AUTO` (height grows to fit wrapped rows) |
| `itemSpacing` | 24px |
| `counterAxisSpacing` | 24px |
| `padding` | 32px all sides |

### Typography Binding (Mandatory)

All text layers in the component must have **every** typographic property bound to an `input/typography/*` variable. Setting these properties directly on a text node is forbidden.

| Text Layer | Required Variable Bindings |
|---|---|
| Label text | `font-family` (STRING), `fontSize` (FLOAT), `fontStyle` (STRING → `font-style`), `lineHeight` (FLOAT), `letterSpacing` (FLOAT) |
| Value text | `font-family` (STRING), `fontSize` (FLOAT), `fontStyle` (STRING → `font-style`), `lineHeight` (FLOAT), `letterSpacing` (FLOAT) |
| Placeholder text | Same as value text — shares the same typography variables |
| Helper / Error / Success text | `font-family` (STRING), `fontSize` (FLOAT), `lineHeight` (FLOAT), `letterSpacing` (FLOAT) |

In Figma, bind each property via `node.setBoundVariable('fontFamily', varRef)`, `node.setBoundVariable('fontSize', varRef)`, `node.setBoundVariable('fontStyle', varRef)`, etc. The Figma API accepts STRING variables for `fontFamily` and `fontStyle`, and FLOAT variables for `fontSize`, `lineHeight`, `letterSpacing`. **`fontWeight` (FLOAT) cannot be bound to a Figma text node** — use the STRING `font-style` variable with `setBoundVariable('fontStyle', var)` instead.

### Icon Stroke Binding (Mandatory)

Every icon vector path inside Leading Slot and Trailing Slot must have its stroke weight bound to `input/icon/stroke/{size}`. Setting stroke weight directly on a vector node as a raw value is forbidden.

In Figma, apply via `node.setBoundVariable('strokeWeight', iconStrokeVar)` on each vector child. If the Figma API does not support `strokeWeight` binding for a specific node type (e.g., a GROUP), iterate into its vector children and bind there. Document any API limitation as an inline code comment.

---

## Interaction Rules

**Hover**: Input Container transitions to hover background and border variables on pointer entry via `input/motion/duration/default` and `input/motion/easing/default`. Not triggered by keyboard navigation. Not applicable on mobile.

**Focus / Active**: On keyboard or pointer focus (including mousedown active state), the Input Container transitions to focus border color. Border thickness remains at `input/border/thickness/default` — it does **not** change on focus. The Focus Wrapper renders the focus ring outside the Input Container boundary via `input/focus-ring/offset`. The focus ring is the sole visual indicator of focus state and must not cause layout shift. Focus ring never suppressed.

**Typing**: Cursor is the text insertion cursor (`input/root/cursor/default`) while the Text Field is focused and editable. Typed characters render using `input/foreground/value/focus`.

**Clear**: When `is-clearable = true` and the field has a value, a clear button appears in the Trailing Slot on hover or focus. Its color uses `input/icon/interactive/color/*`. Activating it removes the value, hides the clear button, and returns keyboard focus to the Text Field. Does not trigger validation.

**Password Toggle**: When `input-type = password`, a visibility toggle is always present in the Trailing Slot. Its color uses `input/icon/interactive/color/*`. Activating it switches text rendering between obscured and visible modes. It is an accessible button with a descriptive `aria-label` and `aria-pressed` reflecting the current visibility state.

**Disabled**: All pointer and keyboard interactions suppressed. Removed from tab order. No state transitions. Cursor: `input/root/cursor/disabled`.

**Readonly**: Value selectable and copyable; not editable. Tab focus retained. Focus ring rendered when keyboard-focused. Hover state does not strengthen the border.

**Blur**: When focus leaves, the interactive state returns to default (or hover if pointer remains over the element). On-blur validation may trigger here, activating the validation entrance animation via `input/motion/duration/validation` and `input/motion/easing/enter`.

---

## Accessibility Rules

**Label Association**: The label must be programmatically associated with the Text Field via `for`/`id` or `aria-labelledby`. A visible label is required unless `has-label = false`, in which case `aria-label` must be provided. Placeholder text alone is never a sufficient accessible name.

**Required Indication**: When `is-required = true`, `aria-required="true"` is set on the Text Field. The meaning of the required indicator must be explained on the page — the visual asterisk alone is not sufficient.

**Error Announcements**: When `has-error = true`:
- `aria-invalid="true"` is set on the Text Field
- The error message element has a unique `id` referenced by `aria-describedby` on the Text Field
- The error message container uses `role="alert"` or `aria-live="polite"` to announce dynamically to screen readers

**Helper Text Association**: The helper text element ID is set as `aria-describedby` on the Text Field when no error is active. Multiple `aria-describedby` IDs may be chained — helper text and error message use separate element IDs.

**Focus Visibility**: The focus ring must always be visible on keyboard focus. ⚠️ With `input/focus-ring/width = 1px` and `input/focus-ring/opacity = 0.5`, WCAG 2.4.11 compliance must be verified before production use — the minimum-area requirement (perimeter × 2px) and 3:1 contrast ratio against resolved background colors must both be met. If the ring fails verification, increase `input/focus-ring/width` to `stroke-width/focus` (2px) and/or raise `input/focus-ring/opacity` to 1.0 in the `input` variable collection.

**Interactive Icon-Buttons**: The clear button and password visibility toggle are keyboard-operable with `Space` / `Enter`. The password visibility toggle must expose `aria-pressed` reflecting the current show/hide state (WCAG 4.1.2). The clear button must have a descriptive `aria-label` (e.g., "Clear input"). Neither element receives focus when the input is disabled.

**Keyboard Navigation**:
- `Tab` / `Shift+Tab` — moves focus to/from the input and its interactive trailing elements
- Standard text editing keys — typing, selection, deletion, cursor movement
- Clear button and password toggle operable with `Space` / `Enter`

**Color Independence**: Validation state must never be communicated by color alone. Error state uses border color change AND an error message AND `aria-invalid`. Success uses border color AND a message or icon. No state relies solely on a color shift.

**Contrast**: All foreground variables against their resolved background variables must meet WCAG AA — 4.5:1 for text, 3:1 for graphical elements (icons, borders used as indicators).

**Disabled vs. Readonly Semantics**: Disabled fields are excluded from tab order and their values are not submitted with forms. Readonly fields retain focus and their values are submitted. These are semantically distinct and must not be used interchangeably.

---

## Responsiveness

**Full-Width Default**: The input field is a block-level component. It fills 100% of its container width by default.

**Mobile Behavior**: On `platform = mobile`:
- Minimum interactive touch target is 44×44pt enforced via `input/root/min-touch-target`. The Input Container may be visually smaller; the tap target is extended invisibly.
- Hover state is not applicable — the input moves directly from default to focus on tap. Active state resolves to focus variables.
- `input-type` drives the mobile keyboard mode: `number` → numeric keypad, `email` → email keyboard, `tel` → telephone keypad.

**Viewport Width**: The component does not change its size variant in response to viewport width. Responsive adaptation is a layout-level concern.

---

## Theming & Adaptation

### Density → Spacing
- `low`: `input/spacing/vertical/{size}` and gap variables resolve to larger values — taller inputs with more breathing room.
- `medium`: Standard spacing resolution.
- `high`: Compressed vertical padding. Appropriate for data-dense forms, dashboards, and enterprise tables.

### Visual Intensity → Border & Background
- `low`: Minimal background fill and very subtle default borders. Near-flat surface appearance.
- `medium`: Standard visible border and slight background fill.
- `high`: Clearly delineated borders at rest and elevated background contrast. Appropriate for form-heavy interfaces.

### Guidance → Affordance Strength
- `low`: Subtle default borders, thinner focus rings. Suitable for expert users.
- `medium`: Standard guidance — visible borders, standard focus ring, helper text shown when provided.
- `high`: Strong default borders, thicker focus ring with larger offset, labels always visible, error messages prominent. Appropriate for onboarding flows or accessibility-critical contexts.

---

## Content Guidelines

**Label Clarity**: Short noun phrases describing what the field captures. "Email address" is correct; "Please enter your email" is not. Use sentence case. Do not end labels with a colon.

**Placeholder Usage**: Provides examples or format hints — not instructions. "you@example.com" is correct for an email field. "Enter your email" is not — that is a label's job. Placeholders disappear on input and must not carry critical information.

**Helper Text**: Persistent guidance visible before and during input. Explains constraints, formats, or contextual caveats. One sentence maximum. Not a substitute for a label.

**Error Message Tone**: Specific, non-blaming, and actionable. State what is wrong and how to fix it. "Enter a valid email address" is correct. "Invalid input" is not.

**Success Message**: Used sparingly — only when confirmation provides genuine user value (e.g., "Username is available"). Not required for routine field completion.

**Required vs. Optional**: Mark required fields with the required indicator. If most fields are required, consider marking the few optional ones with "(optional)" instead.

---

## Do / Don't

### Do
- Map all input variables to global semantic variables before any design work begins
- Always provide a visible label or an equivalent `aria-label`
- Use `helper-text` to proactively explain format requirements — before errors occur
- Show error messages only after the user has had a chance to interact (on blur or on submit)
- Use `readonly` when a value is relevant context but not user-editable
- Use `disabled` only when interaction is genuinely unavailable in the current context
- Preserve focus ring visibility at all times for keyboard users
- Use validation icons in the Trailing Slot to reinforce error/success beyond color alone
- Associate error messages via `aria-describedby` for screen reader support
- Apply density adjustments consistently across all form controls on a surface
- Set `aria-pressed` on the password visibility toggle to reflect the current show/hide state

### Don't
- Do not use placeholder text as a substitute for a label
- Do not rely on color alone to communicate validation state
- Do not show error messages before the user has touched the field
- Do not use generic error messages ("Invalid", "Error") — be specific and actionable
- Do not hardcode any padding, font size, border width, radius, or color value
- Do not suppress the focus ring under any circumstances
- Do not render both error and success messages simultaneously — error always wins
- Do not use `readonly` when `disabled` is semantically correct (or vice versa)
- Do not allow the input to grow vertically due to typed content — value text scrolls horizontally
- Do not omit `aria-required` from required fields
- Do not apply an opacity modifier to readonly inputs — use color variable differences only

---

## Edge Cases

**Long Value Text**: The Text Field scrolls horizontally when the entered value exceeds the visible width. The Input Container never grows vertically. No truncation occurs.

**Long Labels**: Labels wrap to a second line when they exceed the container width. The Input Container does not move — the Label Row expands upward. Use short labels and move guidance to helper text.

**Long Error Messages**: The Supporting Text Row wraps to multiple lines. The Input Container is unaffected. The component grows downward.

**No Label**: When `has-label = false`, no label space is reserved. `aria-label` is mandatory. `input/spacing/label-gap` is not applied.

**No Supporting Text**: When all supporting text properties are inactive, the Supporting Text Row is fully absent. No bottom gap is reserved.

**Leading Icon + Error**: Trailing Slot shows the error status icon. Leading Slot remains unchanged. Both slots coexist.

**Clearable + Validation Icon**: In a non-focused state with an active validation, the validation icon takes the Trailing Slot. On focus with a value present, the clear button takes priority. Interactive clear button uses `input/icon/interactive/color/*`; validation icon uses `input/icon/color/error` or `input/icon/color/success`.

**Password Toggle + Error Icon**: Error icon occupies the Trailing Slot in default/hover states when validation is active. On focus, the visibility toggle returns to allow the user to read the entered password. `aria-pressed` state is preserved across this slot swap.

**Active State**: Mousedown or touchdown before cursor focus resolves to focus variables — no distinct variable path or visual treatment is defined for the active state.

**Disabled + Required**: The required indicator is hidden when `is-disabled = true` to avoid misleading the user.

**Readonly + Validation**: Validation state can be applied to a readonly input (e.g., to surface a server-side result for a pre-filled value). All validation variable paths apply normally. No opacity modifier is applied regardless of validation state.

---

## Constraints

- Input variables must be mapped to global semantic variables before any component design begins
- No hardcoded values of any kind — all spacing, color, typography, radius, border, and icon stroke values resolved exclusively from variables
- Icon stroke weight must scale with icon size via `input/icon/stroke/{size}` — never hardcoded on icon vector paths
- Typography binding is mandatory on every text layer — all five properties (font-family, font-size, font-weight, line-height, letter-spacing) bound to `input/typography/*` variables; no direct text layer overrides permitted
- Fully variable-driven across all axes: size, state, validation-state, theme, density, guidance, visual-intensity
- Validation state and interactive state are always resolved in combination — both segments must appear in the variable path when both are active
- Only one message (helper / error / success) may be visible in the Supporting Text Row at any time; priority order is enforced
- Readonly visual subduing is achieved through color variable differences only — no opacity modifier is applied to readonly inputs
- One opacity variable exists in this component: `input/focus-ring/opacity` (applied to focus ring stroke, 0.5). The disabled state uses 100% opacity with token swaps only — no `input/opacity/disabled` variable is applied to the Component Root
- No accessibility regressions — focus visibility, contrast, label association, `aria-invalid`, `aria-required`, `aria-pressed` (password toggle), and `aria-describedby` requirements are guaranteed by specification
- All variable names conform to the enforced Naming Rules: lowercase, slash-separated, kebab-case compound names

---

## Notes

- This skill specifies the input field as a design system component — not as an HTML `<input>` element or any tool-specific object. Implementors in any medium resolve this specification into their medium-specific representation.
- All variable names follow the enforced slash-separated naming system. Implementors map these paths to their system's convention (CSS custom properties, design token JSON, platform-native variables, etc.).
- All semantic variable names in the Input Variables section reflect the current state of the `semantics` collection in the Figma file. If the `semantics` collection is updated, the right-hand column of each mapping table must be re-verified and updated to match.
- The `input-type` input is a behavioral classifier. It does not introduce new visual variable paths — it changes which Trailing Slot element is activated and what keyboard mode is used on mobile.
- Textarea (multi-line text entry) is a separate component. This specification covers single-line input fields only. The two components share the variable schema for spacing, typography, and color but differ in height model, overflow behavior, and resize behavior.
- This specification does not define animation keyframes, gesture thresholds, or platform-native interaction APIs. Those are resolved by platform-specific implementation layers consuming this specification.