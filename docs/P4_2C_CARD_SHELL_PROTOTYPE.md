# P4.2c Bounded Card Shell Prototype

**Prototype implementation ≠ Card feature accepted**.

## Baseline and runtime isolation

Evidence baseline: `71363e733242b80dbf69e223ce3d97b7d2ed80b7`; branch `codex/p4-card-shell-prototype`.

Isolation commit: `f25a03ece0dd165151f360d672a9fcc5c23d1cf6`. Only this new branch restores settings/style-settings.css byte-for-byte from `abab4f57602254840d082b74b15ed69fe800d0e8`, removes active src/workspace/preset-prototype.css and rebuilds theme.css. The four original settings retain their contracts; no Preset selector/class/section remains in active runtime. Old codex/p4-preset-prototype remains intact at the evidence commit; no rewrite, deletion or force push.

P4.1 implementation history, [report](P4_1_PRESET_PROTOTYPE_REPORT.md), Desktop QA in CURRENT_STATUS, [RESET-01 investigation](P4_1_RESET_01_INVESTIGATION.md), closeout and Decision 013 are preserved. Documentation-only is the confirmed Preset direction; no repair loop is reopened.

## Exact approved implementation

Only src/layout/card-shell.css is added, automatically collected by the existing Build layout group; no build-script change.

```css
.workspace-split.mod-root
  .workspace-tabs:not(.mod-stacked):not(.workspace-leaf-content *)
  > .workspace-tab-container
  > .workspace-leaf
  > .workspace-leaf-content {
  outline: 1px solid var(--theme-border);
  outline-offset: -1px;
  border-radius: var(--theme-workspace-control-radius);
}
```

One selector block, three declarations, no new token or Style Setting. Scope is ordinary main workspace direct leaf-content, including nested native splits; Sidebar and view-owned nested hosts are excluded. Hidden ordinary tabs retain native visibility. Stacked groups are wholly excluded with no fallback.

## Why A2

[P4.2a DOM evidence](P4_2_CARD_SHELL_EVIDENCE.md) establishes the envelope. [P4.2b painter spike](P4_2B_CARD_BOUNDARY_SPIKE.md) at71363e7 recommends A2: inward neutral outline was visible, existing radius gave the tested shell shape, while outward outline was unclear and inset shadows were obscured by opaque children. The spike's fixed-layout samples found unchanged geometry and recorded successful ordinary/stacked transitions and resize smoke. Those observations support a bounded prototype, not feature acceptance or this artifact's Desktop QA.

## Geometry and Focus ownership

No background, physical border, spacing, sizes, flex, position, overflow, clipping, pseudo-elements, shadow, mask, animation or active/inactive Card rules. Existing native geometry, dividers, scroll owners, content width and header structure remain unchanged by declarations. Radius may tighten existing native hidden-overflow corners; no extra clipping is added.

Focus Foundation source stays byte-for-byte unchanged: active header Accent, inactive header neutral. Card outer shell is always neutral. Header-hidden has no added active cue; no second Accent frame is introduced. Existing Layout Foundation and View Header sources also remain byte-identical.

## Validation and pending Desktop QA

Build / Check / diff-check PASS. Static exact-rule/declaration validation PASS; no important/new tokens/geometry or overflow properties. Settings match pre-Preset baseline; all prior generated source sections except restored metadata and removed Preset section are unchanged. Generated output contains only the added Card section beyond the isolated baseline. Decision013 and all historical evidence remain unchanged.

**Desktop QA pending; not started in this task.** Real Light/Dark, Radius0/8/20, ordinary→stacked→ordinary exit/re-entry, single/nested/narrow panes, hidden tabs, header on/off, divider drag, scrollbars/corners/overlays, Source caret/LP selection/Reading scrolling, Graph and Phase2/3 regression need testing against the generated artifact. Spike was Dark-only and not complete regression. Notebook Navigator was not installed/tested; no compatibility CSS or plugin-internal selector is added. Community custom hosts, pop-outs, RTL/DPI and all-platform/accessibility certification remain outside established evidence.

Next: Chat implementation review then separately authorized Desktop QA. No PR, merge, feature acceptance or other Phase4 work is authorized by this implementation checkpoint.
