# Phase 5 Feature Completion Plan

Baseline: main `4cb19c4c90a870cbcab3fc145c204d25a2b5266d`; long-lived branch `codex/p5-feature-completion` for 5A/5B. Maintainer authorizes **Feature Completion first → batched implementation → integrated Desktop QA → concentrated fixes**, replacing per-feature evidence/spike/prototype/Desktop/promotion loops for Phase5. Pure modular CSS, native interaction, generated artifact and no runtime/DOM patch/plugin remain mandatory. Actual runtime requirements, unexpressible DOM or direct stable-contract conflicts stop only the affected subfeature.

## 5A Workspace Experience

Focus Enhancement, Chrome Reduction, soft Auto Hide/Reveal, Basic Effects and Active/Hover Line: **Phase 5A implemented / integrated QA pending**. W02/F01/F02/E01/E02 map to this batch, not Desktop PASS. Opacity touches only header title/action chrome, ordinary tab close controls, Ribbon actions, Status Bar item shells and direct Sidebar header chrome. No content dimming. Two shared chrome-opacity tokens; no settings expansion.

Active-line fallback is restricted to ordinary Markdown CM6 state lines, excluding HyperMD special blocks. No hover paint is added to Reading or syntax spans; no speculative public variable is declared. Native active state presence/selection layering is an integrated QA item, not a claim that a variable is consumed. Upstream CM6 documents cm-activeLine in [active-line.ts](https://github.com/codemirror/view/blob/main/src/active-line.ts); Obsidian cm-active compatibility is included but not freshly Desktop-certified. Public-variable search did not establish native active-line-bg consumption.

Static/build checks cover contract preservation; opacity aesthetics, reveal usability, narrow layouts and actual native states await the combined batch QA. Sidebar content controls outside the proven direct header are intentionally not targeted; no whole Sidebar/content opacity. Inactive tab titles retain existing legible muted contract rather than adding title opacity. Stacked main tab/header chrome is excluded from new reduction/effects; old native/Foundation behavior stays.

## 5B Reading & Writing

**Phase 5B implemented / integrated QA pending** (R01/R02). Added20 body-scoped semantic controls: paragraph/heading spacing, indent, prose letter/word spacing, heading letter spacing, bold modifier, shared emphasis color and H1–H6 size/weight. Defaults preserve old values; mappings and three exact LP-only blank rules consume controls directly. Native width unchanged.

New editor/reading-writing.css: main Markdown Reading direct section paragraphs only, excluding nested special contexts; CM6 ordinary nonempty prose lines require is-live-preview and exclude HyperMD classes. Indent/letter/word spacing default0. Heading letter spacing in Reading and LP; inline code/math reset spacing/indent/autospace. fusion-cjk-autospace body class is opt-in behind @supports; no new setting/class producer yet. Reading pretty paragraphs and H1–H3 balance (LP H1–H3 also balanced) are progressive default polish. Inline Title skipped to preserve native hierarchy; native-equivalent CJK line-break/word-break/overflow-wrap declarations skipped as redundant.

P3.3 previous NO NEW CSS REQUIRED = no corrective rhythm CSS required. Phase5B adds optional/configurable capabilities and progressive long-form polish, not new parity/margin normalization. Decision012/013/014 unchanged; no Source consumer or width selector. Body placement lets future user tokens resolve alongside public variables. Actual renderer section/inline math classes, indentation on wrapped paragraphs and selection/caret behavior await mid-cycleQA, not claimed Desktop PASS.

scripts/check.mjs mechanically follows authorized token indirection while retaining exact LP selector/rule/order and direct semantic spacing gates; adds explicit default-value assertions so defaults cannot silently drift. Build script unchanged. Settings stay four;5A files unchanged. Next gate is Phase5A+5B Mid-cycle Integrated Desktop QA; do not start it inside this implementation task.

## Mid-cycle Desktop QA

After 5A + 5B completion, run integrated Desktop QA and concentrate fixes. Include Light/Dark, active/inactive/hover/keyboard reveal, disabled actions, reduced motion, stacked exclusions, native selection/caret/scroll/resize, plugin items, four-setting propagation and prior Phase2/3/Card contracts. Record real PASS/FAIL/N/A; no QA started during5A.

## 5C PKM Surfaces

Seamless Embed, optional Rainbow Folder, Canvas and Graph: later batch, not implemented now.

## 5D Customization

Expanded Style Settings, module toggles and feature parameters centralized here. Existing four settings stay unchanged in5A; Preset remains Documentation-only (Decision013).

## Final QA

Full integrated acceptance and concentrated fixes after the feature batches. Card Decision014 selector/neutral shell remains unchanged; full layout engines, companion runtime and DOM mutation are outside route. No PR/merge or release implied by local feature completion.

## 5A validation checkpoint

Build / Check / diff-check PASS. Two new body chrome tokens only; no JS/runtime, Preset, new setting, geometry auto-hide or editor text opacity. Existing Focus border declarations, Card source, layout foundation, settings, build scripts, Phase2 typography/caret rules and Decision013/014 unchanged. New effects use opacity/color/background/shadow/outline/transform only, scoped reduced-motion disables new transitions and press translation. DOM-dependent visual behavior remains integrated QA pending. Next gate: 5B implementation, not Desktop testing.
