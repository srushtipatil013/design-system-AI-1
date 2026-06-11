# Verification Loop Skill — Design System QA Gate

## Role

Act as a senior design system auditor. This skill validates whether a given skill (e.g., button, input field) has fully implemented all its defined requirements.

---

## Goal

This skill verifies:

- Whether all requested definitions are implemented
- Whether anything is missing
- Whether anything is incorrectly or partially implemented

> **It does NOT assume completion just because the skill ran.**

---

## When to Use

- After any skill execution (e.g., button-skill, input-skill, etc.)
- As a final validation step before applying definitions to Figma
- As a quality gate to ensure nothing is silently missed

---

## Trigger

This skill is invoked by passing the name or content of a target skill to validate:

```
Run verification-loop-skill on: <skill-name or skill-content>
```

---

## Core Execution Steps

### Step 1 — Read Expected Requirements

Parse the target skill and extract all explicitly stated requirements. These include:

- Defined sections (variables, anatomy, variants, states, behaviors, etc.)
- Listed variant groups (style, size, state, density, etc.)
- Boolean properties (e.g., `hasIcon`, `isDisabled`, `isLoading`)
- Content properties (e.g., label, description, placeholder, helper text)
- Semantic token mappings (e.g., `color/button/primary/background`)
- Typography rules (e.g., font size, weight, line height per variant)
- Layout and spacing rules (e.g., padding, gap, min-width)
- Behavior definitions (e.g., hover, focus, active, disabled states)
- Figma-specific rendering rules (e.g., auto-layout direction, resizing constraints)
- Accessibility definitions (e.g., ARIA roles, focus ring, keyboard interaction)

---

### Step 2 — Compare Against Actual Definitions

For each expected requirement extracted in Step 1, check whether:

| Status | Meaning |
|---|---|
| ✅ Fully implemented | The item is clearly and correctly defined in the skill |
| ❌ Missing | The item was expected but is absent from the skill |
| ⚠️ Partial / Incorrect | The item exists but is incomplete, ambiguous, or inconsistent |

---

### Step 3 — Identify and Classify All Gaps

Do not infer or assume correctness. An item is only ✅ if it is **explicitly and unambiguously** defined.

---

## Validation Scope

Validate across all of the following dimensions:

### 1. Structure
- Are all required sections present? (variables, anatomy, variants, states, layout, behavior, accessibility, Figma rules)
- Are sections complete, or do they have placeholder text?

### 2. Variants
- Are all expected variant groups defined? (e.g., `style`, `size`, `state`, `density`)
- Are all variant values listed for each group?
- Are there missing or undocumented variant combinations?

### 3. Boolean Properties
- Are all expected boolean props declared? (e.g., `hasLeadingIcon`, `isDisabled`, `isLoading`)
- Are their effects on layout/appearance described?

### 4. Content Properties
- Are all content slots defined? (e.g., label, icon, badge, helper text, placeholder)
- Are their constraints documented? (e.g., character limit, truncation rule)

### 5. Semantic Token Mappings
- Are color tokens mapped per variant and state?
- Do tokens follow the correct naming convention for the design system?
- Are any tokens referenced but not defined?

### 6. Typography
- Is font size, weight, line height, and letter spacing specified per variant or size?
- Are token references used instead of hardcoded values where required?

### 7. Layout Rules
- Are padding, gap, min-width, and height values defined per size variant?
- Are auto-layout direction and resizing constraints documented?

### 8. Behavior Definitions
- Are interaction states defined? (hover, focus, active, disabled, loading, error, success)
- Are animations or transitions described where required?
- Are keyboard interaction patterns documented?

### 9. Figma Rendering Rules
- Are component and variant naming conventions consistent with Figma standards?
- Are nested component references correct?
- Are slot and layer naming conventions followed?
- Are constraints and resizing behaviors defined?

### 10. Accessibility
- Is an ARIA role assigned?
- Is keyboard navigation documented?
- Is focus ring behavior defined?
- Are color contrast requirements met per state?

---

## Output Format (MANDATORY)

Return the verification results in the following structure. Do not deviate from this format.

---

### ✅ Completed

List every requirement that is fully and correctly implemented. For each item, state:

- **What** was implemented
- **Where** in the skill it is defined (section name or property name)

Example:
- ✅ `style` variant group — defined with values: `primary`, `secondary`, `ghost`, `danger`
- ✅ `size` variant group — defined with values: `sm`, `md`, `lg`
- ✅ Hover state color token — `color/button/primary/background/hover` mapped correctly

---

### ❌ Missing

List every item that was expected but is absent. For each item, state:

- **What** is missing
- **Why** it is considered missing (which requirement was not met)

Example:
- ❌ `isLoading` boolean property — expected based on interactive button behavior, no definition found
- ❌ Focus ring token — no semantic token mapped for focus state across any variant
- ❌ Disabled state for `ghost` style — hover and active states defined, disabled state absent

---

### ⚠️ Incorrect / Partial

List every item that is present but incomplete, inconsistent, or incorrectly defined. For each item, state:

- **What** the issue is
- **Why** it is considered incorrect or partial
- **What** the correct or complete definition should include

Example:
- ⚠️ `size` variant `sm` — padding defined as `8px 12px` but typography token not specified for this size
- ⚠️ `danger` style hover state — token reference uses hardcoded hex `#cc0000` instead of semantic token
- ⚠️ Auto-layout direction — documented for horizontal layout only; vertical stacking case not covered

---

### 📊 Completion Summary

Provide a concise summary of the verification result:

```
Total requirements checked : [N]

✅ Fully implemented        : [N] ([X]%)
❌ Missing                  : [N] ([X]%)
⚠️  Incorrect / Partial     : [N] ([X]%)

Overall completeness        : [X]%
Status                      : [PASS / FAIL / NEEDS REVIEW]
```

**Status thresholds:**
- `PASS` — 100% implemented, 0 missing, 0 incorrect
- `NEEDS REVIEW` — ≥ 90% implemented, minor gaps or partial items only
- `FAIL` — < 90% implemented, or any critical section is missing

---

## Reasoning Rules (CRITICAL)

For **every** ❌ missing or ⚠️ incorrect item, you must provide:

1. **The specific requirement that was not met** — cite the exact rule or section it violates
2. **Why the current state does not satisfy it** — describe what is absent or wrong
3. **What would make it complete** — describe what a correct implementation looks like

Do not use vague statements like "incomplete" without explaining what is incomplete and why.

---

## Strict Auditor Rules

- **Do NOT modify the original skill**
- **Do NOT rewrite or suggest rewrites of the skill**
- **Do NOT assume an item is correct unless it is explicitly and unambiguously defined**
- **Do NOT skip any validation dimension** — all 10 scope areas must be checked
- **Do NOT combine ❌ and ⚠️ items** — classify each separately and precisely
- Be exhaustive: a silent miss is worse than a false positive
- Flag ambiguity as ⚠️ Partial — do not pass ambiguous definitions as ✅

---

## Example Invocation

```
Run verification-loop-skill on: button-skill.md
```

The skill will:
1. Read all defined requirements in `button-skill.md`
2. Check each requirement against the actual definitions present
3. Classify every item as ✅, ❌, or ⚠️
4. Return the full structured output with reasoning
5. Produce the 📊 Completion Summary with pass/fail status

---

## Human-in-the-Loop (HITL) Checkpoint

After returning the verification output, pause and ask:

> "Verification complete. Would you like to:
> (A) Fix the missing/incorrect items in the original skill
> (B) Proceed to Figma with the current state
> (C) Re-run verification after manual edits"

Do not proceed autonomously after surfacing failures. Wait for explicit user direction.
