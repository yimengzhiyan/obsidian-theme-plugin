# Phase 5 Feature Completion Plan

Baseline: main `4cb19c4c90a870cbcab3fc145c204d25a2b5266d`; long-lived branch `codex/p5-feature-completion`. Maintainer route: **Feature Completion first → batched implementation → integrated Desktop QA → concentrated fixes**. Pure modular CSS, native interaction and generated artifact remain mandatory; no product runtime/DOM patch/plugin. Actual runtime requirements, unexpressible DOM or stable-contract conflicts stop only the affected subfeature.

## 5A Workspace Experience

W02/F01/F02/E01/E02 implemented at `4e85ceecfbde45a85493fb4e6e46a60cbb1479db`; **bounded integrated Desktop QA PASS** at combined aeec39a. Focus/reduction/reveal touches only header title/action chrome, ordinary tab close controls, Ribbon actions, Status item shells and direct Sidebar header. No content dimming or geometry auto-collapse. Shared opacity tokens .55/.72, four settings unchanged. Existing Focus Accent header boundary and neutral Card remain.

Basic effects use 100/180ms transitions and 1px press with scoped reduced-motion overrides. Real media emulation disabled sampled new transitions, then was cleared. Precise held-press frame remains unverified. Native Header keyboard focus/reveal and Enter activation, tab close/ordinary/stacked switching, Ribbon/Status commands, nested resizing/scrolling and Graph interaction worked. Stacked main tab/header reductions/effects stay excluded. Native independent tab/close sequential focus remains N/A.

Active-line fallback targets ordinary CM6 state lines only, excluding HyperMD special blocks. Runtime supplied `.cm-active`; Source/LP showed subtle 6% RGB Accent and Reading none. Existing selection/caret/search remained usable in bounded smoke. No speculative public variable/native consumer is claimed; implementation supports both native cm-active and upstream CM6 cm-activeLine. C-01 Sidebar policy is the only tuning observation below.

## 5B Reading & Writing

R01/R02 implemented at `aeec39a0f1842406d50afc69fcc132a9635b972a`; **bounded integrated Desktop QA PASS**. Twenty body-scoped semantic controls: paragraph/heading spacing, indent, prose letter/word spacing, heading letter spacing, bold modifier, shared emphasis color and H1–H6 size/weight. Defaults preserve old values. Public mappings and the same three exact LP-only blank rules consume controls; native width unchanged.

editor/reading-writing.css targets main Reading direct section paragraphs and LP ordinary nonempty prose, excluding special contexts/HyperMD. Real renderer selectors matched; 2em indent and nonzero spacing/heading controls responded. Reading code/math/footnote and LP special-block exclusions held. Heading→heading blank fell back to paragraph spacing. Source matched no new scoped prose/reset consumer and retained every real native blank/caret/navigation operation. Source public heading mappings remain native consumers, not scoped prose normalization.

Reading pretty paragraphs and Reading/LP H1–H3 balance were supported and natural in inspected long/narrow text. fusion-cjk-autospace remains opt-in behind @supports, with no setting/class producer; **UNSUPPORTED in tested Electron**, so effect/usefulness is not certified. Inline Title remains native; redundant CJK line-break/word-break/overflow-wrap declarations stay omitted.

P3.3 NO NEW CSS REQUIRED remains the historical no-corrective-rhythm conclusion; 5B adds optional capabilities/default-preserving polish. Decision012/013/014 unchanged. scripts/check.mjs follows token indirection and asserts legacy defaults; Build/settings/5A/Card contracts were not changed by 5B or this QA.

## Mid-cycle Desktop QA — completed 2026-10-21

[Full report](P5_MID_CYCLE_DESKTOP_QA.md): **PASS**, A=0/B=0/C=1, with unsupported/N/A/evidence limits preserved. Obsidian1.14.4 / Installer1.10.6 / Windows11 25H2 build26200.8737 / StyleSettings1.0.9. Independent Vault, matching root/installed SHA256 `FBE0D2223FB9F1BA3582EFF74F45D993B908D61239C4299EEE38870AF268E8F4`.

Actual Light/Dark, two/nested three panes, 419px narrow pane, ordinary/stacked, Graph, native keyboard/reveal, reduced motion, default/nonzero typography, actual inline math/footnote, Source blanks, native width500/700/1000 and line1.5/1.7/2.0 in Reading/LP, and existing component smoke completed. No pixel-parity/full platform/plugin/accessibility certification inferred. NN absent/optional; exact held press frame and unavailable native controls remain limited.

Temporary styles/class absent and media emulation off; fixtures archived/removed, backed-up config restored except tested CSS/manifest, original note hashes and artifact hashes unchanged. Isolated-copy npmcheck PASS; build inputs identical and normalized generated output equal. QA changes only five documents; no onsite fixes, new Phase numbers, PR or merge.

## Phase 5 Mid-cycle Fix Batch

**Next: maintainer review, not automatic implementation.** C-01: direct Sidebar header stays fully revealed under the common selected-tab state because :has(.workspace-tab-header.is-active) matches even outside hover/focus. Confirm the intended resting policy; tune only if chosen, preserving content opacity and direct chrome scope. No mandatory A/B correction found. Keep .55/.72 hierarchy and basic effects based on bounded smoke; carry autospace unsupported/native N/A/held-frame limits rather than adding runtime workarounds.

## 5C PKM Surfaces

Seamless Embed, optional Rainbow Folder, Canvas and Graph: later implementation batch, **not started** here. Native Graph smoke above is regression coverage, not 5C feature completion.

## 5D Customization

Expanded Style Settings, module toggles and parameters remain centralized here and **not implemented** by QA. Existing four settings stay unchanged; Preset remains Documentation-only (Decision013). Unsupported autospace must not be represented as certified in this runtime.

## Final QA

Full integrated acceptance and concentrated fixes follow authorized feature batches. Mid-cycle PASS is not final Phase5 completion. Decision014 ordinary-main neutral Card/stacked exclusion and existing Source/width contracts remain. Full layout engines, companion runtime and product DOM mutation are outside route; no PR/merge/release implied.
