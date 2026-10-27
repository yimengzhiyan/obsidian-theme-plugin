# Phase 5 Feature Completion Plan

<!-- P5 FINAL FIX CURRENT START -->
## Final Fix + Tuning Batch — 2026-10-27 (Asia/Shanghai)

**Final acceptance PASS; PR #13 merged into `main`.** Focused Desktop retest PASS. Implementation commit **a0284df7c4ce961a9c45f00584c59592bc0ac378**, documentation-only status correction **192b7f3304d130f85905f7ecd92d6ab140321e2f**, branch `codex/p5-feature-completion`. [PR #13 — feat: complete Phase 5 Fusion theme experience](https://github.com/yimengzhiyan/obsidian-theme-plugin/pull/13) was merged with regular merge commit **a76770e5949d6ef58a5135bef45f6a8f6d16e661**. This current-status block supersedes pending-review and pre-merge wording retained in historical checkpoints below. No release or tag was created.

| Item | Final focused disposition |
| --- | --- |
| B-01 | **External Style Settings / Obsidian restored-view compatibility limitation**, excluded from Theme B count; no Fusion source fix or workaround code. Normal session metadata loads and no new Theme-side error observed. Workaround: **Close the Style Settings view before restarting Obsidian if this upstream restoration issue occurs.** |
| B-02 | **RESOLVED / PASS**: actual single .is-focused and multi .is-selected share one inward Accent outline, offset -1px. RGB Accent, native user-colored node/group, drag/resize and native Canvas ON/OFF passed. |
| B-03 | **RESOLVED / PASS**: seven documented Graph variables are body-gated; real rendered SVG blue / mixed-green tags, muted unresolved, neutral lines and Accent focus passed in focused checks. Light/Dark, Local Graph smoke, native Graph ON/OFF, pan/zoom/open-note passed. Actual native transient body-child color helper identified; no renderer overrides. |
| C-01 | **KEEP / accepted behavior**: selected Sidebar tab remains the persistent orientation/reveal cue; source unchanged. |
| C-02 | **RESOLVED / PASS**: .01 step; visible .72 default, .71/.73 setting, Reset .72, runtime .72 and closed-settings-view restart .72 all confirmed. No delayed-save issue observed. |

**Current issue inventory: Theme A=0, Theme B=0; C-01 accepted KEEP; C-02 resolved; B-01 external limitation; all original D-01–D-06 limitations retained.** No unsupported cross-platform/full-matrix claim.

Build / Check / diff-check PASS; six negative static variants rejected. Exactly **35 controls / 26 variables / 9 toggles** remain. No new token/toggle/runtime JS/Presets, Decision012/013/014 or 5A/5B source changes. Changed implementation files: src/apps/canvas.css, src/apps/graph.css, settings/style-settings.css, scripts/check.mjs, generated theme.css. This focused-results commit updates only the same five durable docs.

Independent Vault cleanup PASS: fixtures archived then removed, ten backed-up configuration files restored (Dark/Fusion/font16/Style Settings data{}), original two note hashes unchanged, tested CSS/manifest retained and equal to repository artifacts. theme.css SHA256 **7939A0C0AFA1AE20B10F44C25845627F7939523A45D18DB141693689F51BD6B3**. Desktop tool reconnect failure was recovered by reinitialization; remaining tests were subsequently completed.

<!-- P5 FINAL FIX CURRENT END -->

## Prior checkpoint / original observations — retained

## Final integrated Desktop QA — historical checkpoint, 2026-10-22 (superseded)

At this checkpoint, Phase 5 Final Integrated Desktop QA had completed and was awaiting Chat final review. The final focused retest and PR #13 authorization are recorded in the current-status block above.

Tested implementation b5443fe068b84a7358b4fe291d59c3d84cced7bd on codex/p5-feature-completion, following authorized Chat final code review. [Final QA report](P5_FINAL_INTEGRATED_DESKTOP_QA.md): **PASS WITH FIXES, A0/B3/C2/D6 categories**. 5A–5D implementation was present; final product acceptance was pending Chat review at that historical checkpoint. Mid-cycle PASS and prior finalQA-pending wording below are historical.

Actual35control UI and default/plugin-free baseline, all9toggle paths, Minimal/Full/Writing combinations, six nativeReset/restart cases, RainbowON/OFF restart, saved-profile disable/restart, real Embed/Canvas/Global+LocalGraph, Light/Dark, split/nested/narrow/stacked, Source physical stress, reduced-motion routes and bounded regression completed with report qualifications. No source fix, new runtime, preset system, PR or merge was introduced.

### Concentrated Final Fix / Tuning decision

- B-01: optional Style Settings1.0.9 view-restoration exception on Obsidian1.14.4 prevents applying saved overrides/classes when its view is restored open. Saved data remains; closing that tab/restart is the successful comparison. Decide dependency compatibility/upstream handling.
- B-02: actual Canvas single selection uses is-focused, whereas the outline rule targets is-selected; multi-selection works. Review state coverage without overriding user colors or geometry.
- B-03: actual SVG Graph attachment remains native yellow despite host blue-mixed variable; verify renderer consumption/scoping before accepting the category styling. Observed mismatch is evidence; internal cause remains an inference.
- C-01 recommendation **KEEP** selected Sidebar header reveal. C-02 muted.72 default versus native min.4/step.05 display.70 is an optional precision tuning decision.
- D categories remain explicit: autospace unsupported; held press frame, persistent Embed focus-within, arbitrary interspersed sorting, physical1000px text width and broader control/surface/platform/accessibility coverage not certified.

**Next: Chat review → authorize one batch → focused implementation/retest. Do not auto-implement.** No Phase5 Complete until an acceptable final disposition is subsequently accepted. Preserve Decision012/013/014 and all Source/native-width/Card boundaries.

QA cleanup restored backup config/appearance except retained tested artifacts, data{}, originalnotes unchanged, no temporary fixture/class/style, mediaoff. npmcheck passed after CRLF/LF-only generated-content verification; tested artifact hash unchanged. Delivery is exactly five documents, with final diff-check/docs-only commit/push confirmed at closeout.

## Historical plan and implementation checkpoints

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

## 5C implementation checkpoint

Seamless Embed / optional Rainbow Folder / Canvas / Graph: **Phase5C implemented / final integrated QA pending** on baselineeb3bc1805ac5cb2c6226ebcaac1eca6622baaa70. 5A/5B mid-cycle DesktopQA PASS; inventory A=0/B=0/C=1, no mid-cycle fix batch. C-01 Sidebar resting reveal remains Final Tuning Backlog and its source unchanged.

- Embed: rendered Reading/LP markdown/file shell transparent, 1px logical-start neutral identity edge, hover-border/focusAccent; existing radius/no shadow. Title/link muted→normal without hiding or resizing; nested instances inherit same rule, no recursive geometry. Heights, scroll and embedded typography untouched. Non-Markdown media internals (PDF/image/audio/etc.) not redesigned.
- Rainbow: opt-in body.fusion-rainbow-folders, native file-explorer non-root nav-folder nth-child7-cycle; red/orange/yellow/green/cyan/blue/purple mixed with normal text. Folder public nav colors only, no file/background/selected Accent/indent/drag changes. No class producer until5D; file siblings count toward cycle, not a folder sorting engine. Chevron/guide coloring omitted to retain native contracts.
- Canvas: documented background/label variables, node-container radius, selected1px inward Accent outline, controls/menu Fusion surface and hover/active feedback. Native dots/palette/node background/border/user colors retained through existing Foundation public surfaces. No has/geometry/scroll/movement. Separate group border override omitted: no reliable local current-app colored-group state evidence; preserving native group/user-color semantics is preferable to speculative override. Node labels quieter; no label positioning.
- Graph: documented graph-text/line/node/unresolved/focused/tag/attachment variables on graph/localgraph host; primary background, card controls panel, reuse native controls. No invented graph-background variable, engine size/layout/physics or canvas dimensions. Tag green/attachment blue extended native colors, no duplicate palette.

References statically checked: [official Embed variables](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Editor/Embed.md), [Canvas](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Plugins/Canvas.md), [Graph](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Plugins/Graph.md). No local Obsidian app.css accessible. Static class corroboration only (not code reuse): Minimal author source93321bdc23fc879966e1e3aa0cfeda77012f540f, content/embeds-transclusions.scss and Canvas node classes in generatedsrc/css/main.css. Canvas control states require final runtime verification; no Desktop certification claimed.

Zero new tokens/settings/JS/runtime; four modules auto-collected with unchanged build script. Check adds boundary guards (no Canvashas, important/geometry/scroll props, Rainbow gate, four settings). Prior5A/5B/Card/Decision012/013/014/source and C-01 unchanged. Build/Check/diff-check PASS. Next5D Customization, not DesktopQA/PR/merge. Final integratedQA must inspect embed links/nesting/media/LP, opt-in folder states, colored Canvas/group/selection/controls, Graph categories and native interactions. No forced compatibility CSS for third-party views.

## 5D Customization checkpoint

**Phase5D Customization implemented / Final Integrated QA pending. 5A–5D feature implementation complete**, no finalQA/release/PR/main merge. Branch remains codex/p5-feature-completion, baseline6693706e820351cd911313be048045ef67cc3cfc.

35 independent controls (26 variable settings +9 class toggles), grouped as Appearance; Workspace→Chrome/Focus & Effects/Layout; Reading & Writing→Rhythm/Text/Headings→Heading sizes/Advanced weights; PKM→Embeds/Navigation/Canvas & Graph. Original four IDs/types/defaults/ranges/formats preserved; heading organization changes do not rename saved keys. Heading weight CSS defaults remain semantic font references, UI defaults700/700/600/600/500/500. Added only one token: theme-active-line-strength6%.

- Workspace: dim.55/muted.72 sliders, opacity-only full-chrome opt-out; negative gates for native pane shell, active line and workspace motion; active-line strength0–15%. Existing reduced-motion handling retained. C-01 originalSidebar has-active behavior unchanged; full-chrome is independent user opt-out, not its fix.
- Reading: paragraph/heading spacing, indent, prose letter/word spacing, heading spacing/sizes/weights and bold modifier expose existing consumers; original width/line-height preserved. Smart-wrap opt-out gates existing pretty/balance only. No new Source prose consumer/selector.
- PKM: negative gates for native embeds/Canvas/Graph, positive Rainbow toggle(defaultoff, command exposed by optional plugin). No preset, no custom reset, no class-select, no runtime. CJK capability retained for future supporting runtimes; no certified UI yet (mid-cycle Electron supports=false).

Class-absent/plugin-free baseline preserves6693706: Card/chrome reduction/active-line6%/effects/smart-wrap/embed/Canvas/Graph ON, RainbowOFF; all typography defaults unchanged. Native-* means no Fusion module rule matches, not guessed reset values; other baseline Foundation and workspace style inheritance still applies. Existing plugin storage/reset semantics are used unchanged; no P4.1 Reset interception or grouped restoration promise.

Check now verifies approved independent IDs/types/defaults/formats/ranges, token definitions, unique classes, original four mappings, no Preset/CJK UI, negative native gating and existing PKM boundaries. CSS static default/declaration and protected-source comparisons PASS; actual plugin UI persistence/combinations, slider reset behavior and final visual regression remain for Final Integrated DesktopQA. Build/Check/diff-check PASS.

Next: **Chat Final Phase5 Code Review → Phase5 Final Integrated Desktop QA**. C-01 remains Final Tuning Backlog, Decision012/013/014 unchanged. No QA started in5D.
