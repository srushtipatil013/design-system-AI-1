// =============================================================================
// Button Component Builder — Figma Plugin
// Source specification: agents/02-component-agent/button-skill.md
//
// HOW TO USE
// ----------
// 1. Open your Figma file (https://www.figma.com/design/xK0cEsLK7lh6LvLoZXrr22/...)
// 2. Menu → Plugins → Development → Import plugin from manifest…
// 3. Select this folder's manifest.json
// 4. Plugins → Development → Button Component Builder → Run
//
// WHAT IT BUILDS
// --------------
// • A new page named "Button"
// • One ComponentSet named "Button" with 324 variants:
//     3 Type  × 3 Size × 6 State × 2 Tone × 3 Width Type
// • An annotation frame documenting the variable mapping contract
//
// COLOR VALUES
// ------------
// All fill / stroke RGB values are placeholder approximations of the semantic
// variable system defined in button-skill.md.  They must be replaced with
// actual Figma Variables bound to the global semantic variable layer once the
// variable-agent skill has been reconciled.
//
// LAYER ANATOMY (per variant, matches button-skill.md § Anatomy)
// --------------------------------------------------------------
//  [Component root]          ← Visual Container + Component Root collapsed;
//    ├── Leading Slot         owns fill, stroke, corner-radius, opacity, effects
//    ├── Label / Spinner      text node; fills from foreground variable
//    └── Trailing Slot        both icon slots hidden by default (visible=false)
// =============================================================================

async function main() {

  // ── Font loading ────────────────────────────────────────────────────────
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });

  // ── Page: create or reuse "Button" ──────────────────────────────────────
  let page = figma.root.children.find(n => n.name === "Button");
  if (!page) {
    page = figma.createPage();
    page.name = "Button";
  }
  figma.currentPage = page;

  // ============================================================
  // SIZE TOKENS
  // Maps to button-skill.md variable names:
  //   pH  → button/spacing/horizontal/{size}   (sm:12  md:16  lg:20)
  //   pV  → button/spacing/vertical/{size}     (sm:6   md:8   lg:10)
  //   gap → button/spacing/gap/{size}          (sm:6   md:8   lg:10)
  //   fs  → button/typography/{size}/font-size (sm:12  md:14  lg:16)
  //   r   → button/radius/default              (uniform: 6)
  //   sw  → button/border/thickness/{size}     (sm:1   md:1.5 lg:2 )
  // ============================================================
  const SIZE = {
    small:  { pH: 12, pV: 6,  gap: 6,  fs: 12, r: 6, sw: 1   },
    medium: { pH: 16, pV: 8,  gap: 8,  fs: 14, r: 6, sw: 1.5 },
    large:  { pH: 20, pV: 10, gap: 10, fs: 16, r: 6, sw: 2   },
  };

  // ============================================================
  // COLOR PALETTE  (placeholder RGB → global semantic variable)
  //
  // positive / primary background:
  //   button/background/primary/default    → Component/Button/bg/strong
  //   button/background/primary/hover      → color/bg/primary/hover
  //   button/background/primary/pressed    → color/bg/primary/pressed
  //   button/background/primary/focused    → color/bg/primary/default
  //   button/background/primary/disabled   → color/bg/disabled
  //
  // positive / primary foreground:
  //   button/foreground/primary/*          → color/text/on-primary
  //   button/foreground/primary/disabled   → color/text/disabled
  //
  // (danger paths insert /danger/ before the state segment)
  //   button/background/primary/danger/default → color/bg/danger/default
  //   etc.
  //
  // Full mapping table: button-skill.md § Button Variables
  // ============================================================
  const rgb = (r, g, b) => ({ r: r / 255, g: g / 255, b: b / 255 });

  //  Each entry: { bg, fg, bd }
  //    bg = fill color (null → transparent, fills:[])
  //    fg = foreground / text color
  //    bd = border stroke color (null → strokes:[])
  const COL = {

    // ── Primary · Positive ──────────────────────────────────────────────
    primary_positive: {
      default:  { bg: rgb( 59, 91,219), fg: rgb(255,255,255), bd: null              },
      hover:    { bg: rgb( 48, 74,185), fg: rgb(255,255,255), bd: null              },
      pressed:  { bg: rgb( 37, 57,151), fg: rgb(255,255,255), bd: null              },
      focused:  { bg: rgb( 59, 91,219), fg: rgb(255,255,255), bd: null              },
      disabled: { bg: rgb(224,224,224), fg: rgb(160,160,160), bd: null              },
      loading:  { bg: rgb( 59, 91,219), fg: rgb(255,255,255), bd: null              },
    },

    // ── Secondary · Positive ────────────────────────────────────────────
    secondary_positive: {
      default:  { bg: rgb(255,255,255), fg: rgb( 59, 91,219), bd: rgb( 59, 91,219) },
      hover:    { bg: rgb(234,237,252), fg: rgb( 48, 74,185), bd: rgb( 48, 74,185) },
      pressed:  { bg: rgb(221,225,250), fg: rgb( 37, 57,151), bd: rgb( 37, 57,151) },
      focused:  { bg: rgb(255,255,255), fg: rgb( 59, 91,219), bd: rgb( 59, 91,219) },
      disabled: { bg: rgb(224,224,224), fg: rgb(160,160,160), bd: rgb(192,192,192) },
      loading:  { bg: rgb(255,255,255), fg: rgb( 59, 91,219), bd: rgb( 59, 91,219) },
    },

    // ── Ghost · Positive ────────────────────────────────────────────────
    ghost_positive: {
      default:  { bg: null,             fg: rgb( 59, 91,219), bd: null              },
      hover:    { bg: rgb(234,237,252), fg: rgb( 48, 74,185), bd: rgb(148,158,220) },
      pressed:  { bg: rgb(221,225,250), fg: rgb( 37, 57,151), bd: rgb(148,158,220) },
      focused:  { bg: null,             fg: rgb( 59, 91,219), bd: null              },
      disabled: { bg: null,             fg: rgb(160,160,160), bd: null              },
      loading:  { bg: null,             fg: rgb( 59, 91,219), bd: null              },
    },

    // ── Primary · Danger ────────────────────────────────────────────────
    primary_danger: {
      default:  { bg: rgb(224, 49, 49), fg: rgb(255,255,255), bd: null              },
      hover:    { bg: rgb(192, 38, 38), fg: rgb(255,255,255), bd: null              },
      pressed:  { bg: rgb(159, 26, 26), fg: rgb(255,255,255), bd: null              },
      focused:  { bg: rgb(224, 49, 49), fg: rgb(255,255,255), bd: null              },
      disabled: { bg: rgb(224,224,224), fg: rgb(160,160,160), bd: null              },
      loading:  { bg: rgb(224, 49, 49), fg: rgb(255,255,255), bd: null              },
    },

    // ── Secondary · Danger ──────────────────────────────────────────────
    secondary_danger: {
      default:  { bg: rgb(255,255,255), fg: rgb(224, 49, 49), bd: rgb(224, 49, 49) },
      hover:    { bg: rgb(254,230,230), fg: rgb(192, 38, 38), bd: rgb(192, 38, 38) },
      pressed:  { bg: rgb(252,211,211), fg: rgb(159, 26, 26), bd: rgb(159, 26, 26) },
      focused:  { bg: rgb(255,255,255), fg: rgb(224, 49, 49), bd: rgb(224, 49, 49) },
      disabled: { bg: rgb(224,224,224), fg: rgb(160,160,160), bd: rgb(192,192,192) },
      loading:  { bg: rgb(255,255,255), fg: rgb(224, 49, 49), bd: rgb(224, 49, 49) },
    },

    // ── Ghost · Danger ──────────────────────────────────────────────────
    ghost_danger: {
      default:  { bg: null,             fg: rgb(224, 49, 49), bd: null              },
      hover:    { bg: rgb(254,230,230), fg: rgb(192, 38, 38), bd: rgb(224, 49, 49) },
      pressed:  { bg: rgb(252,211,211), fg: rgb(159, 26, 26), bd: rgb(224, 49, 49) },
      focused:  { bg: null,             fg: rgb(224, 49, 49), bd: null              },
      disabled: { bg: null,             fg: rgb(160,160,160), bd: null              },
      loading:  { bg: null,             fg: rgb(224, 49, 49), bd: null              },
    },
  };

  // button/border/focus-ring → color/border/focus (placeholder)
  // button/focus-ring/width  → simulated as drop-shadow spread: 3
  // button/focus-ring/offset → simulated as drop-shadow offset: {0,0}
  const FOCUS_RING = rgb(49, 130, 234);

  // ============================================================
  // VARIANT AXES (button-skill.md § Variant System)
  // ============================================================
  const TYPES  = ["primary", "secondary", "ghost"];
  const SIZES  = ["small", "medium", "large"];
  const STATES = ["default", "hover", "pressed", "focused", "disabled", "loading"];
  const TONES  = ["positive", "danger"];
  const WTS    = ["fixed", "fluid", "fluid-grid"];

  // ============================================================
  // BUILD COMPONENTS
  // ============================================================
  const components = [];

  for (const type of TYPES) {
    for (const size of SIZES) {
      for (const tone of TONES) {
        for (const state of STATES) {
          for (const wt of WTS) {

            const sc  = SIZE[size];
            const col = COL[`${type}_${tone}`][state];

            // ── Component root ──────────────────────────────────────────
            // Corresponds to: Component Root + Visual Container (collapsed
            // into one layer for simplicity — owner of fill, border, radius)
            const comp = figma.createComponent();
            comp.layoutMode            = "HORIZONTAL";
            comp.primaryAxisAlignItems = "CENTER";
            comp.counterAxisAlignItems = "CENTER";
            comp.paddingLeft           = sc.pH;
            comp.paddingRight          = sc.pH;
            comp.paddingTop            = sc.pV;
            comp.paddingBottom         = sc.pV;
            comp.itemSpacing           = sc.gap;
            comp.cornerRadius          = sc.r;
            comp.counterAxisSizingMode = "AUTO";   // height always hugs content
            comp.primaryAxisSizingMode = "AUTO";   // start as hug; overridden for fluid

            // ── Background (button/background/{type}/{tone-segment}{state}) ──
            comp.fills = col.bg
              ? [{ type: "SOLID", color: col.bg }]
              : [];

            // ── Border (button/border/{type}/{tone-segment}{state}) ──────
            if (col.bd) {
              comp.strokes      = [{ type: "SOLID", color: col.bd }];
              comp.strokeWeight  = sc.sw;
              comp.strokeAlign   = "INSIDE";
            } else {
              comp.strokes = [];
            }

            // ── Disabled opacity (button/opacity/disabled → ~0.5) ────────
            comp.opacity = state === "disabled" ? 0.5 : 1;

            // ── Focus ring (Interaction Wrapper simulation) ───────────────
            // Renders outside boundary via drop shadow — matches:
            //   button/border/focus-ring color
            //   button/focus-ring/width   (spread: 3px)
            //   button/focus-ring/offset  (no gap: offset 0,0)
            comp.effects = state === "focused"
              ? [{
                  type:      "DROP_SHADOW",
                  color:     { ...FOCUS_RING, a: 0.9 },
                  offset:    { x: 0, y: 0 },
                  radius:    0,
                  spread:    3,
                  visible:   true,
                  blendMode: "NORMAL",
                }]
              : [];

            // ── Leading Slot ─────────────────────────────────────────────
            // Placeholder square frame for icon asset (hidden by default).
            // Sized from button/icon/size/{size}. Foreground color from
            //   button/foreground/{type}/{tone-segment}{state}.
            const leadingSlot = figma.createFrame();
            leadingSlot.name    = "Leading Slot";
            leadingSlot.resize(sc.fs, sc.fs);
            leadingSlot.fills   = [];
            leadingSlot.visible = false;   // hidden in text-only (default) config
            leadingSlot.layoutMode = "NONE";
            comp.appendChild(leadingSlot);

            // ── Label / Spinner ───────────────────────────────────────────
            // Corresponds to the Label layer (or Spinner Slot when loading).
            // button/typography/{size}/font-size drives fontSize.
            // button/foreground/{type}/{tone-segment}{state} drives fill.
            const label = figma.createText();
            label.name           = state === "loading" ? "Spinner" : "Label";
            label.characters     = state === "loading" ? "⟳  Loading" : "Button";
            label.fontSize       = sc.fs;
            label.fontName       = { family: "Inter", style: "Medium" };
            label.fills          = [{ type: "SOLID", color: col.fg }];
            label.textAutoResize = "WIDTH_AND_HEIGHT";
            comp.appendChild(label);

            // ── Trailing Slot ─────────────────────────────────────────────
            // Mirror of Leading Slot. Hidden by default.
            const trailingSlot = figma.createFrame();
            trailingSlot.name    = "Trailing Slot";
            trailingSlot.resize(sc.fs, sc.fs);
            trailingSlot.fills   = [];
            trailingSlot.visible = false;
            trailingSlot.layoutMode = "NONE";
            comp.appendChild(trailingSlot);

            // ── Width-type layout behavior ────────────────────────────────
            // fixed      → AUTO (root hugs label + padding)
            // fluid      → FIXED 240px  (label fills; representative of a 50%
            //              container width — actual % is a layout-layer concern)
            // fluid-grid → FIXED 320px  (label fills; representative of a
            //              multi-column grid span)
            if (wt !== "fixed") {
              const w = wt === "fluid" ? 240 : 320;
              // Approximate height: paddingV×2 + fontSize × 1.2 line-height
              const h = sc.pV * 2 + Math.ceil(sc.fs * 1.2);
              comp.primaryAxisSizingMode = "FIXED";
              comp.resizeWithoutConstraints(w, h);
              // Label fills available horizontal space and centers its text
              label.layoutGrow          = 1;
              label.textAlignHorizontal = "CENTER";
              label.textAutoResize      = "HEIGHT";
            }

            // ── Variant name (parsed by Figma into property panel) ────────
            comp.name = `Type=${type}, Size=${size}, State=${state}, Tone=${tone}, Width Type=${wt}`;
            components.push(comp);
          }
        }
      }
    }
  }

  // ── Combine into one ComponentSet ────────────────────────────────────────
  const set  = figma.combineAsVariants(components, figma.currentPage);
  set.name   = "Button";
  set.x      = 100;
  set.y      = 100;

  // ── Annotation frame ─────────────────────────────────────────────────────
  // Documents the variable contract so consumers know what to replace.
  await buildAnnotation(set, rgb);

  figma.closePlugin(
    "✅ Done — Button page created with 324-variant component set " +
    "(3 Type × 3 Size × 6 State × 2 Tone × 3 Width Type)."
  );
}

// =============================================================================
// ANNOTATION FRAME
// Placed below the component set; documents the variable mapping contract.
// =============================================================================
async function buildAnnotation(set, rgb) {
  const PAD   = 24;
  const INNER = 600;

  const frame = figma.createFrame();
  frame.name                  = "⚙ Variable Mapping Contract";
  frame.layoutMode             = "VERTICAL";
  frame.itemSpacing            = 12;
  frame.paddingLeft            = PAD;
  frame.paddingRight           = PAD;
  frame.paddingTop             = PAD;
  frame.paddingBottom          = PAD;
  frame.primaryAxisSizingMode  = "AUTO";
  frame.counterAxisSizingMode  = "FIXED";
  frame.resizeWithoutConstraints(INNER + PAD * 2, 10);
  frame.fills                  = [{ type: "SOLID", color: rgb(248,249,250) }];
  frame.cornerRadius           = 8;
  frame.strokes                = [{ type: "SOLID", color: rgb(222,226,230) }];
  frame.strokeWeight           = 1;
  frame.strokeAlign            = "INSIDE";

  const lines = [
    { text: "Button Component — Variable Mapping Contract", size: 15, style: "Medium",  color: rgb(33,37,41)   },
    { text: "─────────────────────────────────────────────────────────────────────────────────────────────────────────", size: 11, style: "Regular", color: rgb(206,212,218) },
    { text: "All color, spacing, typography, radius, and motion values in this component set are PLACEHOLDER values.", size: 12, style: "Regular", color: rgb(108,117,125) },
    { text: "Replace with Figma Variables bound to the global semantic variable layer (variable-agent skill).", size: 12, style: "Regular", color: rgb(108,117,125) },
    { text: " ", size: 6, style: "Regular", color: rgb(255,255,255) },
    { text: "VARIANT AXES", size: 11, style: "Medium", color: rgb(73,80,87) },
    { text: "Type          primary | secondary | ghost", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "Size          small | medium | large", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "State         default | hover | pressed | focused | disabled | loading", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "Tone          positive | danger", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "Width Type    fixed | fluid | fluid-grid", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "Total         324 variants", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: " ", size: 6, style: "Regular", color: rgb(255,255,255) },
    { text: "BACKGROUND VARIABLE PATHS", size: 11, style: "Medium", color: rgb(73,80,87) },
    { text: "button/background/{type}/{state}              → positive tone (no tone segment)", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "button/background/{type}/danger/{state}       → danger tone", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: " ", size: 6, style: "Regular", color: rgb(255,255,255) },
    { text: "FOREGROUND VARIABLE PATHS", size: 11, style: "Medium", color: rgb(73,80,87) },
    { text: "button/foreground/{type}/{state}              → positive tone", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "button/foreground/{type}/danger/{state}       → danger tone", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: " ", size: 6, style: "Regular", color: rgb(255,255,255) },
    { text: "BORDER VARIABLE PATHS", size: 11, style: "Medium", color: rgb(73,80,87) },
    { text: "button/border/{type}/{state}                  → positive tone", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "button/border/{type}/danger/{state}           → danger tone", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "button/border/thickness/{size}                → stroke weight per size", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: " ", size: 6, style: "Regular", color: rgb(255,255,255) },
    { text: "FOCUS RING  (rendered as drop shadow on the focused variant)", size: 11, style: "Medium", color: rgb(73,80,87) },
    { text: "button/border/focus-ring                      → drop shadow color", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "button/focus-ring/width                       → spread: 3px (placeholder)", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "button/focus-ring/offset                      → shadow offset: 0,0 (placeholder)", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: " ", size: 6, style: "Regular", color: rgb(255,255,255) },
    { text: "SPACING  (all sizes use button/spacing/* variables)", size: 11, style: "Medium", color: rgb(73,80,87) },
    { text: "button/spacing/horizontal/sm|md|lg            → 12 | 16 | 20  (placeholder px)", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "button/spacing/vertical/sm|md|lg              →  6 |  8 | 10  (placeholder px)", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "button/spacing/gap/sm|md|lg                   →  6 |  8 | 10  (placeholder px)", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: " ", size: 6, style: "Regular", color: rgb(255,255,255) },
    { text: "ICON SLOTS  (Leading Slot + Trailing Slot hidden by default)", size: 11, style: "Medium", color: rgb(73,80,87) },
    { text: "Show the slot layer, drop in an icon asset, resize to button/icon/size/{size}.", size: 12, style: "Regular", color: rgb(108,117,125) },
    { text: "Icon-only config: show Leading Slot only, set square padding from button/spacing/icon-only/{size}.", size: 12, style: "Regular", color: rgb(108,117,125) },
    { text: " ", size: 6, style: "Regular", color: rgb(255,255,255) },
    { text: "WIDTH TYPE NOTES", size: 11, style: "Medium", color: rgb(73,80,87) },
    { text: "fixed      Component auto-sizes to label + padding. No width variable.", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "fluid      Component width set to 240px as a placeholder (50% of 480px container).", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "           Real width is a layout-layer concern — set by consuming frame, not the button.", size: 12, style: "Regular", color: rgb(108,117,125) },
    { text: "fluid-grid Component width set to 320px as a placeholder (grid column span).", size: 12, style: "Regular", color: rgb(73,80,87) },
    { text: "           Real width spans a defined number of 2x grid columns — set by layout layer.", size: 12, style: "Regular", color: rgb(108,117,125) },
  ];

  for (const line of lines) {
    const t = figma.createText();
    t.characters            = line.text;
    t.fontSize              = line.size;
    t.fontName              = { family: "Inter", style: line.style };
    t.fills                 = [{ type: "SOLID", color: line.color }];
    t.textAutoResize        = "HEIGHT";
    t.layoutSizingHorizontal = "FILL";
    frame.appendChild(t);
  }

  frame.x = set.x;
  frame.y = set.y + set.height + 64;
}

// =============================================================================
main().catch(err => figma.closePlugin("❌ Error: " + err.message));
