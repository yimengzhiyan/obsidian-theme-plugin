# P4.2a Card Shell Evidence / Design Review

## 1. Goal / Scope

Determine whether an existing main-workspace pane shell can receive restrained visual decoration while Obsidian retains geometry, resizing, scrolling and editing. This is evidence/design work, not a Card implementation, Prototype authorization or Card Desktop QA PASS.

P4.1 is a separate, failed assisted-Preset experiment. The user formally chose Documentation-only on 2026-10-17: Decision 013 records that direction, ends the RESET-01 repair/retry route, and does not immediately commission recipes. Historical implementation/QA/investigation remain intact. P4.2 inherits neither the preset selection class nor the Writer recommendation.

**Final disposition: Needs more research.** A shared shell is established, but safe rounded-boundary painting without clipping or geometry changes is not yet established. The smallest possible future experiment is described below for independent Chat review; none was created.

## 2. Environment

- Date: 2026-10-17, America/Los_Angeles.
- Obsidian 1.14.4, Installer 1.10.6; Windows 25H2 / 26200.8737 retained from prior QA. Current window/starter confirms app1.14.4; the Windows build and Installer were not reinstalled or freshly remeasured this round.
- Style Settings1.0.9 confirmed in the independent Vault's native installed-plugin page; it is the only community plugin there.
- Branch: `codex/p4-preset-prototype`. Start HEAD14c5bc9, clean tree; fetch found remote closeout694ff8c63afe1657cb2887c7acfbfa2954a10ed4. Normal fast-forward adopted it before documentation edits. Theme implementation remains f50040a45c456693b603dc148445b33ea8eca2c1.
- Independent Vault: `work/P415-Preset-Acceptance`, backed up to `work/p42-backup/test-obsidian` before opening. User opened the selected test folder after a concurrent-input interruption. Daily Vault was not used for the experiment.
- Existing installed/root theme SHA-256: `CB30DFB7C0E288EAC9DFEB03D51DD43CB62B6FCCE9957C62C80805C8B537DA90`. No Card CSS was installed. Dark / Fusion Default, no width override; this is the preserved experiment artifact as an evidence baseline, not inheritance of its product architecture.
- Ordinary window captured at1024×800; main root980×800, narrow independent panes488px and stacked leaves408px. No claim of a separately resized800px window or Card resize acceptance.
- Only native commands/settings changed test layout/view modes. Console queries read DOM/classes/attributes/computed style; no mutation, listeners, injected styles or application helpers. Graph inspection stops at its public view-content boundary.
- Task-local raw Console snapshots01–09 are retained outside Git in `work/p42-dom`. Evidence below is normalized from completed queries, not stale eager previews. Console/UIA occasionally lagged or timed out; input/result was reobserved before continuing.
- Native header setting was restored and verified `show-view-header=true`. After closing DevTools and the independent Vault, backed-up app/appearance/workspace/community/core-plugin and Style Settings data files were restored and hashes compared. Installed theme remained unchanged; no Markdown edit was performed.

## 3. DOM evidence

### 3.1 Single Source baseline and common Markdown chain

Actual elements below are DIVs. Shell data attributes absent unless explicitly shown. Ephemeral instance IDs/class ordering are not selector contracts.

```text
.workspace
└─ .workspace-split.mod-vertical.mod-root
   ├─ .workspace-leaf-resize-handle.tappable [data-ignore-swipe=true] (hidden root handle)
   └─ .workspace-tabs.mod-active.mod-top.mod-top-left-space.mod-top-right-space
      ├─ .workspace-tab-header-container
      │  └─ .workspace-tab-header-container-inner > .workspace-tab-header
      └─ .workspace-tab-container
         └─ .workspace-leaf.mod-active
            ├─ .workspace-leaf-resize-handle.tappable (hidden last-leaf handle)
            └─ .workspace-leaf-content [data-type=markdown] [data-mode=source]
               ├─ .view-header
               └─ .view-content
                  ├─ .markdown-source-view.cm-s-obsidian.mod-cm6...
                  │  └─ .cm-editor > .cm-scroller
                  └─ .markdown-reading-view (hidden in editing mode)
                     └─ .markdown-preview-view.markdown-rendered...
```

Single root980×800; tab-container/leaf/content980×760; header980×38; view-content980×722. Leaf and leaf-content are both flex/overflow hidden; content has only class/data-type/data-mode in the final attribute sample. No additional “card” wrapper exists in this chain.

### 3.2 Live Preview / Source / Reading

Same dedicated Markdown file was switched using native commands (Ctrl+E and “切换实时阅览/源码模式”). Source and Live Preview share the shell, including `data-mode=source`; `.is-live-preview` appears on the source-view element only in Live Preview. Reading changes leaf-content to `data-mode=preview`; its direct header and view-content remain.

| Mode | Visible content path below view-content | Other retained path | Scroll observation |
| --- | --- | --- | --- |
| Source | markdown-source-view → cm-editor → cm-scroller | markdown-reading-view display none | cm-scroller overflow auto |
| Live Preview | same path, source-view additionally is-live-preview | markdown-reading-view display none | cm-scroller overflow auto |
| Reading | markdown-reading-view → markdown-preview-view | source-view display none with zero geometry | preview-view overflow auto in the initial retained-container sample |

Computed display alone on a descendant does not prove visibility: cm-editor can still compute flex under a hidden source-view while reporting0×0. Do not expose hidden renderer paths or use mode as a shell visibility signal. Existing Reading limits/Source differences remain closed under Decision012.

### 3.3 Horizontal arrangement / left-right split

Obsidian's native “左右分屏” creates two tabs groups under root.mod-vertical (flex row). Here “horizontal arrangement” means visually side by side; CSS class names are the runtime names, not translated assumptions.

```text
root.mod-vertical [980×800, gap4]
├─ tabs A [488×800]
│  ├─ resize-handle [3×800, display block]
│  └─ tab-container > leaf A > leaf-content
└─ tabs B.mod-active [488×800]
   ├─ resize-handle [display none]
   └─ tab-container > leaf B.mod-active > leaf-content
```

488+4+488=980 in this sample. Divider is attached to the group beside the leaf container, not between Markdown paragraphs or inside leaf-content. Additional leaf handles exist but were hidden. `mod-active` is on the selected leaf and its active tab group; there is no equivalent class on leaf-content or view-header.

### 3.4 Vertical arrangement / top-bottom and nested split

Native “上下分屏” in the right pane creates the requested left-one/right-two layout:

```text
root.mod-vertical [980×800, gap4]
├─ tabs A [488×800]
│  └─ tab-container > leaf A > leaf-content
└─ split.mod-horizontal [488×800, gap4, flex column]
   ├─ tabs B [488×398]
   │  ├─ resize-handle [488×3, display block]
   │  └─ tab-container [488×358] > leaf B > leaf-content
   └─ tabs C.mod-active [488×398]
      ├─ resize-handle [display none]
      └─ tab-container [488×358] > leaf C.mod-active > leaf-content
```

398+4+398=800. This is real top/bottom evidence within a nested split, not a separately isolated two-pane horizontal-root scenario. Both orientations retain the same leaf-content direct shell. Exact parent depth changes: `mod-root > tabs` is insufficient for nested panes.

`src/layout/layout.css` supplies gap4 at root and nested native splits via existing workspace-control-gap. It does **not** add gap to tabs, leaf-content, editor or plugin panes. Its `:not(.workspace-leaf-content *)` exclusion prevents entry into a view's own layouts. No additional gap is needed or authorized.

### 3.5 Ordinary hidden tabs and stacked tabs

A new native Tab followed by core Graph preserved the earlier Markdown leaf in group C. Ordinary state: the retained Markdown leaf is `display:none`,0×0; Graph leaf is flex488×358. Its child header can still compute flex despite its hidden ancestor. Hidden leaf did not require an invented class selector.

Native “堆叠/取消堆叠标签页” produced:

```text
.workspace-tabs.mod-active.mod-stacked
├─ workspace-tab-header-container [488×40]
└─ workspace-tab-container [overflow-x:auto; overflow-y:hidden]
   ├─ workspace-tab-header[data-type=markdown] [40×346]
   ├─ workspace-leaf (Markdown, inactive) [408×346]
   │  └─ workspace-leaf-content > view-header + view-content
   ├─ workspace-tab-header.is-active.mod-active[data-type=graph] [40×346]
   └─ workspace-leaf.mod-active (Graph) [408×346]
      └─ workspace-leaf-content > view-header + view-content
```

Both content shells have nonzero geometry; inactive does not mean hidden. Native CSS uses sticky children and stacked pane-width rules; offscreen coordinates/scroll position were not exhaustively measured. A blanket leaf card could paint multiple adjacent/overlapping native surfaces. Stacked tab headers are siblings of leaves, whereas view headers remain inside leaf-content. One card on tabs/tab-container would encompass an entire stack, not one independent pane.

Exclude stacked groups from any initial candidate. Do not force leaf display/visibility or infer an individual visible pane from tab-group.mod-active. Deep stacked scroll/end-of-stack recovery remains unverified.

### 3.6 Native View Header hidden

Settings → 界面 → 显示标签页标题栏 was temporarily turned off. Body lost show-view-header; all four main headers remained in DOM but computed display none / height0. Markdown/Graph leaf-content shells persisted with dimensions488×760,488×358,408×346,408×346.

Hidden header computed border-bottom still resolved to neutral rgb(57,56,63) or active Graph Accent rgb(185,161,255), but a nonpainted header provides no visible cue. This explains the existing Focus limit without inventing body focus logic. A neutral outer shell could theoretically remain with header hidden; actual card painting was not tested. No case of a removed header node was observed, so absent-header compatibility is an unknown.

The on-setting was restored and a new query confirmed show-view-header=true. Focus was not redesigned.

### 3.7 Core Graph common shell

Observed directly, no Graph canvas inspection:

```text
workspace-leaf.mod-active
└─ DIV.workspace-leaf-content [data-type=graph] (no data-mode)
   ├─ DIV.view-header
   └─ DIV.view-content
```

The public envelope matches Markdown, but Graph lacks Markdown mode attributes and uses its own content implementation. Root-bounded shell selection can share the envelope; editor/renderer-specific selectors cannot. This does not certify arbitrary community views.

## 4. Stable shell candidates

| Candidate | Main/Sidebar boundary | Includes header+content | Geometry/scroll/divider implications | Assessment |
| --- | --- | --- | --- | --- |
| workspace-leaf | Must be root-scoped; global selector hits Sidebar | Yes; may also contain native leaf resize handle | Native contain strict, isolation and overflow hidden. Radius can change clipping even without changing overflow. Stacked leaves retain multiple surfaces | Stable identity, less desirable paint target because of handle/clipping ownership |
| leaf > workspace-leaf-content | Main-only if scoped through native main group; exclude view internals and stacked | Yes; direct children are public header/content | No divider inside this observed node; native flex100%/overflow hidden. Children paint opaque backgrounds; border-width would consume interior geometry, radius may clip them | **Preferred DOM target for further research**, not yet proven safe card painting |
| workspace-tabs | Root scope possible, but includes tab row and resize handle | More than header+content | Native group sizing/overflow; stacks contain several leaves | Reject as per-pane card target |
| workspace-tab-container | Root scope possible; contains ordinary hidden leaves or stacked siblings | Includes all leaves, not exactly one | Owns flex and stacked horizontal scrolling | Reject: decoration changes unit of grouping / scrollbar boundary |
| root/nested workspace-split | Main aggregate only | Multiple groups and dividers | Owns native flex ratios and existing gap | Reject as single pane target; preserve Layout Foundation |

Research selector envelope, **not installed CSS**:

```text
.workspace-split.mod-root
  .workspace-tabs:not(.mod-stacked):not(.workspace-leaf-content *)
  > .workspace-tab-container
  > .workspace-leaf
  > .workspace-leaf-content
```

This accepts nested native splits, leaves ordinary hidden nodes under native visibility, excludes Sidebar and plugin-internal descendants, and avoids selecting divider siblings. Do not add :not(.mod-active) as a visibility test. Runtime matching of this exact combined selector across every supported view is a next review check, not claimed here as exhaustive certification.

## 5. Rejected selectors / layers

Reject global workspace-leaf/content, app-wide body.is-focused, data-mode as shell identity, root > leaf guessed chains, global view-content, Markdown/CodeMirror/sizer blocks, Graph canvas, plugin internal panes, and fake active/header classes. Do not decorate each paragraph/Callout/table/list; no Sidebar cardification. Do not add pseudo-element positioning or change stacking/overflow to rescue an unclear card boundary without renewed design review.

Native CSS static corroboration: actual1.14.4 app.css extracted read-only from the previously verified updated archive, SHA-256 `866e50ac84dd8ad2775e0047ebd3ec5bd03e5af722aff259e6c4ea3cec42d7ba`. Relevant sections: workspace geometry around lines6661–6821; tab-container7061; stacked7371–7460; header hiding4568. It shows native hidden overflow on leaf/content, group handles, flex row/column direction, sticky stack behavior. This is static evidence, not a substitute for the completed runtime samples. Application source is not committed.

## 6. Public-variable / token audit

| Meaning | Existing Fusion value / public route | Conclusion |
| --- | --- | --- |
| Main surface | theme-bg-primary → background-primary | Sufficient; view-content already opaque primary |
| Raised/card surface | theme-bg-card → background-primary-alt | Existing semantic surface; no new card palette required; painting only the parent may be obscured by children |
| Workspace gutter | theme-bg-secondary → tab-container-background | Existing root/nested backgrounds; do not recolor global gutter to fake spacing |
| Sidebar surface | theme-bg-sidebar → background-secondary | Already distinct, leave Sidebar unchanged |
| Neutral boundary | theme-border → background-modifier-border / divider-color | Sufficient color; color availability does not authorize a new layout-consuming border width |
| Active boundary | theme-border-active / theme-accent → background-modifier-border-focus; Focus consumes Accent | No new active-card token; avoid adding another focus signal |
| Radius | theme-radius-md → workspace-control-radius; native radius-m mapping | Existing contract sufficient; extreme radius still needs clipping/hit-area evidence |
| Split gap | theme-space-xs → workspace-control-gap (4px at sampled size) | Already owned by Layout Foundation; no new spacing |

Obsidian's [public color reference](https://docs.obsidian.md/Reference/CSS%20variables/Foundations/Colors) supports primary/alternate/secondary surface and border semantics. The Fusion mapping and consumers were read directly. No documented dedicated “main pane card” switch was established; public variables provide values, not a guarantee that changing them decorates only this shell. A scoped visual consumer would still need separate authorization.

**New token needed: No.** There is no demonstrated new meaning beyond existing surfaces, neutral/active borders, radius and spacing. A missing safe painter is a selector/geometry issue, not evidence for a semantic token.

## 7. Geometry invariants

A future candidate must keep all of these unchanged, measured before/after on the same native state:

| Invariant | Required boundary |
| --- | --- |
| Pane width/height calculations and split ratio | No width/height/min/max/flex/direction/contain overrides |
| Divider width, hit area, position and resize | No handle selectors, clipping or pointer interception |
| Existing pane gap | No additional gap or margin; preserve current root/nested gap |
| Pane/content padding and content width | Add zero padding; preserve file-line-width / readable-line-length behavior |
| Scroll ownership and overflow | Keep cm-scroller / preview and plugin scrollers; do not set overflow on shell or descendants |
| Stacked scrolling/hidden tabs | No visibility, sticky, stacking, transforms, position or scroll-snap changes |
| Header height | No height, padding or border-width changes to existing header |
| Status Bar / Sidebar / Ribbon | No selection or variable mutation affecting these surfaces |
| Editing | Caret, blank lines, selection, native navigation and overlays stay native |

Visual-only candidates are surface color, radius and non-layout boundary paint. A physical new CSS border can change usable interior size even with border-box: “border is visual” is insufficient proof. Outline/inset-shadow might avoid sizing, but require evidence of visibility, clipping and double-boundary interaction. Neither is implemented here. Margin/padding/width/gap/position/overflow changes are behavioral/layout changes and excluded.

Radius itself is not automatically harmless: on a native overflow-hidden node it can tighten the clip at existing scrollbars/content corners. If a rounded card requires extra clipping or extra spacing, that is a blocker under this contract; prefer square/no-change or defer, not a silent overflow:hidden addition.

## 8. Focus interaction

Decision010 remains header-only: leaf.mod-active → Accent header bottom boundary; other leaves → neutral. No application-focus condition is added.

| Option | Selector / visual implications | Hidden header | Regression risk |
| --- | --- | --- | --- |
| Add full neutral card while retaining header-only Focus | Root-scoped shell plus existing rules; may show outer neutral line and an inner Accent line | Neutral grouping only, no new active cue | Lowest behavioral risk, but double neutral/active edge must be reviewed |
| Move active/inactive signal to outer card | New state-dependent painter; must remove/coordinate old header boundary | Could show active shell while header hidden | Highest scope: changes Focus contract, stacking and active clarity; not authorized |
| Minimal neutral shell, current header signal completely unchanged | Same ownership as first option, explicitly no second active edge and no header rework | Existing known Focus limit remains | **Recommended research direction**; avoid visible duplicate bottom lines where possible without altering header |

The first and third are not different runtime state models; the third makes the neutral-only/no-Focus-edit constraint explicit. Do not claim card grouping solves hidden-header Focus. Full-pane Accent is not necessary to test a neutral visual grouping hypothesis.

## 9. Split / stacked / narrow risks

- Nested groups share the direct leaf/content envelope, but root-child selectors miss them; outer split painters would interfere with divider/gutter ownership.
- Stack has multiple real surfaces and sibling tab strips. First candidate should exclude it, with native off-state unchanged; do not certify stacked Card behavior from a plain nested screenshot.
- Narrow408/488px panes preserved shell chain and native wrapping without decoration. No Card clipping, scrollbar, drag/resize, editing or accessibility acceptance has been performed.
- Header children and view-content paint opaque surfaces over a transparent content shell. A parent's background/radius alone may produce no coherent visual card; forcing descendants transparent would violate scope.
- Pop-outs, RTL, zoom/DPI extremes, drag previews, tooltips/selection overlays and absent-header community views are unknown. A sampled computed header border of0.666667px despite a1px CSS contract is a runtime pixel-resolution observation, not justification to change layout.

## 10. Recommended Prototype scope (proposal only)

If remaining questions are resolved and Chat separately approves a prototype: main ordinary-tab shell only, target the direct leaf-content envelope through native groups; preserve Markdown and core Graph interiors; neutral existing surface/border and existing radius only where safe; existing split gap; zero additional spacing; no overflow modification; no physical sizing border; no content selectors, Sidebar cards, plugin-internal cards, preset class-select, new setting/token/JS.

Start with one neutral boundary hypothesis and a native off-state comparison. If its visual effect cannot be made coherent without content transparency, clipping or geometry change, stop/defer. Do not use this report to start that experiment automatically.

## 11. Prototype blockers / unknowns

Before a Proceed recommendation: establish a non-layout boundary painter that remains visible over native opaque children; explain rounded corners without tightening scrollbar/content clipping; select a safe ordinary-only off-state behavior; review duplicate outer/header boundaries. Stacked inclusion requires separate evidence/design. None can be validated by a static build.

No community view compatibility acceptance exists. Notebook Navigator's variables are a promising future compatibility interface, but neither its presence elsewhere nor its documentation proves this test Vault's behavior.

## Notebook Navigator Compatibility

### Evidence levels and actual environment

- **Desktop fact:** independent QA Vault has only Style Settings1.0.9 installed/enabled. Notebook Navigator is **NOT INSTALLED / NOT TESTED**, installed version N/A and actual layout N/A. No new plugin was installed, enabled or modified.
- **Official documentation:** [Theming Guide](https://github.com/johansan/notebook-navigator/blob/667ece262dda7645c78a76812b12a70d788aae24/docs/theming-guide.md), guide date2026-08-01; [project](https://github.com/johansan/notebook-navigator). Reviewed2026-10-17.
- **Static review:** official checkout667ece262dda7645c78a76812b12a70d788aae24, source manifest3.4.3. This is the reviewed source revision/version, **not an installed Desktop version**. GPL-3.0-or-later source was read for interfaces; no plugin source/style code copied into Fusion.
- **Hypotheses:** compatibility/mapping candidates below require separate real Desktop evidence. Notebook Navigator is designated a priority future community compatibility sample, not an expansion of P4.2's card scope.

### Public variables, modes and ownership

The official guide exposes mode-scoped nn-theme variables, while source core-variables.css supplies defaults. Theme-light/theme-dark values must be reviewed together; body-only overrides can lose to a mode-specific default. Desktop background settings can select separate navigation/list surfaces or reuse one for both. User custom item colors/backgrounds take priority; the existing Style Settings manager's saved variable declarations must remain user-owned. No blanket !important rule or promise to override all plugin settings is justified.

This is **not** the failed Preset system's reset contract. No mapping is implemented and no reset behavior is assumed. The guide's three navigation-separator background/height/opacity variables are public even though not exposed in its Style Settings UI; do not invent a new Fusion setting for them.

| Public variables (exact names) | Fusion mapping candidates / current native inheritance |
| --- | --- |
| --nn-theme-foreground, --nn-theme-foreground-muted, --nn-theme-foreground-faded | theme-text-normal/muted/faint; base foreground already inherits text-normal |
| --nn-theme-nav-bg, --nn-theme-list-bg | theme-bg-sidebar / theme-bg-primary through existing background-secondary/primary defaults; first check whether no mapping is needed |
| --nn-theme-navitem-name-color, --nn-theme-file-name-color, --nn-theme-file-preview-color | Existing text tokens; preserve name/preview hierarchy |
| --nn-theme-navitem-hover-bg, --nn-theme-header-button-hover-bg | Existing theme-hover-bg / background-modifier-hover |
| --nn-theme-navitem-selected-bg, --nn-theme-file-selected-bg | theme-active-bg candidate; existing defaults use text-selection, so selected-text and selected-row semantics must be compared before changing |
| --nn-theme-navitem-selected-name-color, --nn-theme-file-selected-name-color | Existing theme-active-text candidate; validate contrast without forcing user custom colors |
| --nn-theme-navitem-selected-inactive-bg, --nn-theme-file-selected-inactive-bg | Existing neutral hover/active semantics; keep plugin's internal active-pane distinction |
| --nn-theme-divider-border-color, --nn-theme-quick-actions-border | theme-border via existing divider-color / background-modifier-border defaults |
| --nn-theme-divider-resize-handle-hover-bg | Already inherits interactive-accent; leave handle geometry alone |
| --nn-theme-navitem-selected-border-color, --nn-theme-file-selected-border-color | theme-border-active candidate only if a demonstrated need; do not add border widths |
| --nn-theme-navitem-border-radius, --nn-theme-file-border-radius, --nn-theme-quick-actions-border-radius | Existing radius tokens can express values; do not automatically couple inner rows to outer card radius or exceed plugin-supported ranges |

Reference ranges: navigation-item radius0–14px, file-row0–16px, quick-actions0–12px. This demonstrates why blindly forwarding the global Radius slider20px is not a proven compatible mapping. No new semantic meaning/token is established.

### Static boundaries / potential conflicts

Source [NotebookNavigatorView.tsx](https://github.com/johansan/notebook-navigator/blob/667ece262dda7645c78a76812b12a70d788aae24/src/view/NotebookNavigatorView.tsx) extends ItemView and mounts its UI in the native view content, adding notebook-navigator there. Its view type is notebook-navigator. That source establishes a host/interface intention, not a runtime DOM sample from the independent Vault.

[layout-panes.css](https://github.com/johansan/notebook-navigator/blob/667ece262dda7645c78a76812b12a70d788aae24/src/styles/sections/layout-panes.css) owns internal navigation/list flex sizing, their divider and resize handle. navigation-scroller.css and list-files.css own separate overflow-y:auto scrollers. The plugin's split container is **not an Obsidian workspace leaf**. These internal selectors are cited as evidence, not proposed override targets.

| Location | Current Fusion / future candidate boundary | Unverified risk |
| --- | --- | --- |
| Sidebar host | Main-root Card target must not match. Existing Sidebar styles stop at native tab shell; P2 navigation variables may still inherit | Adjacent Sidebar divider plus plugin internal divider/background could look heavy; no actual conflict observed here |
| Main Workspace host | Existing direct-header Focus rule can reach a standard plugin host header. Candidate would surround at most one host leaf-content | Outer neutral line plus internal plugin divider; opaque plugin backgrounds can conceal shell surface/radius; clipped overlays/scrollbars if clipping is imposed |
| Plugin internal dual panes | No Fusion Card selectors or Layout Foundation split gap inside view content | Their independent selection/focus, virtualized scrolling and drag/drop must remain plugin-owned; mod-active is not their internal selection state |

### Interaction matrix

| Scenario | Evidence / result |
| --- | --- |
| Dual-column navigation and note list | Official project/source describes separation; Desktop NOT TESTED |
| Navigation/list independent scrolling | Static scroll-container CSS confirmed; Desktop NOT TESTED |
| Selected/inactive states | Public variables and internal focus-dependent fallback present in source; Desktop NOT TESTED |
| Keyboard navigation / pane switching | Project describes support; Desktop NOT TESTED |
| Sidebar vs main Workspace placement | Candidate/static boundary review only; Desktop NOT TESTED |
| Drag/drop, resizing, custom colors, Light/Dark/Radius and user snippets | Desktop NOT TESTED; no PASS claim |

### Design ideas versus engineering work

Design ideas worth evaluating: distinguish navigation context from the note list; give note name, preview and metadata different emphasis; keep selected and keyboard-focused state understandable; let panes scroll independently. These are product observations from documentation/source, not a usability study, implementation requirement or code reuse.

Engineering compatibility is a separate task: inspect a separately authorized installed version, capture host boundaries in Sidebar/main, test public-variable inheritance and saved user overrides first; add only a demonstrated minimal variable mapping if needed. Do not install another plugin for Fusion, alter Notebook Navigator source, restyle internal panes, override its scrollers or enlarge Card scope. Baseline native inheritance/no-change is the first candidate.

## 12. Final disposition

**Needs more research.** Main ordinary-pane leaf-content is a stable research target across the sampled Markdown modes, both split directions, nested layout and core Graph; it also survives native header hiding. That is evidence of an envelope, not proof of safe rounded Card decoration.

No new token or geometry change is needed or approved. The open questions concern boundary painting, native clipping, stacked exclusion and community compatibility. Preserve current neutral/header Focus contract; return to Chat design review for the smallest next evidence question. No Card Prototype, Card CSS, compatibility CSS, PR, merge or release acceptance was produced.

Validation: npm run check PASS on isolated tracked-file copy after its initial freshness rebuild; git diff --check and source/settings/theme/scripts preservation checks recorded in CURRENT_STATUS. Only this report plus DECISIONS/CURRENT_STATUS/TASKS/AI_HANDOFF are part of the documentation checkpoint.
