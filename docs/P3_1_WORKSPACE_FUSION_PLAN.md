# P3.1 — Workspace Fusion System Preparation

## Status / baseline / authority

**First milestone implemented locally — workspace tokens + Tabs only; pending Chat implementation review and Desktop QA.** Branch: `codex/p3-1-workspace-fusion`; baseline: main `fbc971d8d034906d1bfd911df5d86e3688cffeaf`, squash merge of Phase 3 planning PR #10. Phase 2 P2.2–P2.7 remains complete and merged; ISSUE-01 is closed and verified.

This plan narrows feature-matrix W01 to the workspace foundation. W02 chrome reduction and other modules remain deferred. The latest instruction authorizes only workspace-tokens.css and tabs.css for the first milestone; remaining modules stop for Chat review. No settings or implementation PR are authorized.

Read alongside [Design Spec](THEME_DESIGN_SPEC.md), [Feature Matrix](FUSION_FEATURE_MATRIX.md), [Source Analysis](SOURCE_THEME_ANALYSIS.md) and existing Foundation / Phase 2 QA contracts.

## Goal and scope

Combine Border's workspace customization direction with Fusion's semantic surfaces, Accent states and restrained geometry. Produce a consistent shell for writing, navigation and everyday switching between panes. Keep existing controls visible and native behavior intact. Border inspiration is README-level evidence from SOURCE_THEME_ANALYSIS; no source code or exact visual design is imported.

| Area | Intended refinement to review | Preserved behavior / boundary |
| --- | --- | --- |
| Tabs | Clear normal/hover/active/focused hierarchy, readable titles and consistent radius/spacing | Existing Accent indicator, tab close/switch/drag and overflow; ordinary and stacked tabs remain native |
| Sidebar | Consistent shell surface, tab/header spacing and separator treatment | Left/right collapse, resize, scrolling and controls; do not change P2.6 File Explorer typography, wrapping or hierarchy |
| Ribbon | Coordinate background, icon states, padding and width with shell rhythm | Existing icons, focus/tooltips and access with sidebar expanded/collapsed; no hiding |
| Status bar | Coordinate typography, background, border/radius and spacing | Native anchoring and status item access; no overlay/card repositioning or hiding |
| View header | Establish title/action surface and spacing consistent with tabs/sidebar | Header visibility, native back/forward/actions/menu and keyboard access; no plugin-dependent controls |
| Shared geometry | Reuse spacing/radius primitives across these five surfaces | Preserve usable hit areas, user fonts and narrow-window layout; avoid arbitrary per-module geometry |

Exact pixel values, title truncation policy and any selector additions are unresolved design choices for Chat review. No full theme redesign or required pixel parity across operating systems.

## CSS module plan — preparation baseline (first milestone changes below)

Allowed future implementation directory is **`src/workspace/` only**. Existing modules already style the shell; this is a bounded refinement, not a replacement of the Foundation.

| Future module | Current state | Proposed responsibility |
| --- | --- | --- |
| `workspace-tokens.css` | Does not exist | Only if reviewed shared workspace meanings have multiple consumers; derive aliases from Foundation spacing/radius/surface tokens |
| `tabs.css` | Exists | Tab states and geometry; retain established Accent chain |
| `sidebar.css` | Exists | Sidebar shell; retain seven Foundation navigation-state mappings in place |
| `ribbon.css` | Exists | Ribbon geometry and existing icon-state contract |
| `statusbar.css` | Exists | Status surface/typography/geometry; native placement |
| `view-header.css` | Does not exist | View header surface/title/action foundation after variable/DOM research |

`scrollbar.css` already exists and remains in place, unchanged. The requested future structure does not remove it. No base/editor/navigation/layout/effects/apps changes are part of P3.1. `theme.css` would be generated only in a later approved implementation; it is rebuilt for the first milestone.

Build currently orders workspace as tabs → sidebar → ribbon → statusbar → scrollbar, then remaining files alphabetically, so `view-header.css` would precede `workspace-tokens.css`. Do not assume the diagram is build order. Simple variable aliases may resolve after consumers if cascade scope is correct; any need for tokens-first emission must be reviewed as a separate tooling-scope decision. Do not change Build/check now or rename files to work around scope.

## Variable inventory and proposed dependencies

The first milestone adds only the two workspace aliases recorded below. Prefer existing semantic tokens and documented public variables. The lists below are research candidates, not an approved declaration allowlist or final values.

| Role | Existing / proposed inputs | Review requirement |
| --- | --- | --- |
| Surfaces and text | Existing `--theme-bg-primary`, `--theme-bg-secondary`, `--theme-bg-sidebar`, `--theme-text-normal`, `--theme-text-muted` | Map to shell consumers without overriding content semantics |
| States and borders | Existing `--theme-hover-bg`, `--theme-active-bg`, `--theme-active-text`, `--theme-indicator`, `--theme-border`, `--theme-border-hover`, `--theme-border-active` | Preserve Accent propagation and visible focused/active distinction |
| Geometry | Existing `--theme-space-xs/sm/md`, `--theme-radius-sm/md/lg` | Reuse radius setting propagation; decide geometry per actual public consumer |
| Tabs | Existing tab colors, container, divider, outline and radius mappings; candidates `--tab-font-size`, `--tab-font-weight`, `--tab-width`, `--tab-max-width` | Public variables documented; preserve overflow/stacked behavior and user interface font |
| Sidebar | Existing split backgrounds / navigation mappings; documented `--sidebar-markdown-font-size`, `--sidebar-tab-text-display` | Inventory only; do not hide labels or alter sidebar Markdown typography by default; no File Explorer restyling |
| Ribbon | Existing `--ribbon-background`, `--ribbon-background-collapsed` and scoped icon colors; candidates `--ribbon-width`, `--ribbon-padding` | Check hit areas and sidebar collapse states |
| Status bar | Existing background, border color, radius and text mappings; candidates `--status-bar-font-size`, `--status-bar-border-width` | Keep native position and scroll padding; do not add position overrides |
| View header | Existing Fusion surface/text/spacing/radius inputs; public header variables and consumers not yet established | Research current Obsidian variables/DOM before proposing exact names or selectors; no invented public-variable contract |

Potential workspace-only aliases for review: `--theme-workspace-control-radius` (tabs and header/action controls) and `--theme-workspace-control-gap` (header/Ribbon control groups). Their exact consumer properties and cascade scopes must be demonstrated; drop aliases if direct Foundation token mapping suffices. These are not new global semantic categories. Do not add aliases merely because a `workspace-tokens.css` filename is planned.

Public-reference inventory consulted during preparation: [Tabs](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Components/Tabs.md), [Ribbon](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Window/Ribbon.md), [Sidebar](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Window/Sidebar.md), [Status bar](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Window/Status%20bar.md). These confirm named variables, not Desktop consumer behavior. Pin revisions before implementation-level research; view-header variable/DOM research is outstanding.

## Style Settings candidates — none added

The existing four settings remain the only implemented settings. Prefer meaningful defaults and reuse Accent/Radius. Do not add an entire Workspace settings catalog.

| Candidate | User purpose | Proposed route / decision |
| --- | --- | --- |
| Workspace control spacing / density | Optional compact vs comfortable control spacing | Only if shared alias consumers are proven; propose baseline-preserving default and bounded values during review |
| Tab title size | Improve title readability without altering content fonts | Consider public tab font size; demonstrate a need beyond the native interface font preference before admission |
| Ribbon width | Adjust shell control space | Consider public Ribbon width; ensure usable icons and accessible controls before admission |

No candidate is approved, implemented or assigned settings metadata. Workspace radius uses the existing Radius setting rather than a duplicate setting. Header/statusbar visibility switches, auto-hide controls, preset selectors and focus toggles are outside P3.1. Any future settings-file change requires explicit scope approval because the current allowed implementation directory is src/workspace only.

## QA requirements for a later implementation

All QA below is **planned / not executed**. Preparation check results do not imply Desktop PASS.

1. Artifact gate: record branch/commit, Obsidian/installer/OS/Style Settings versions and root == installed theme SHA before and after QA; install root artifact, not the V0.1 release package.
2. Light/Dark: all five workspace surfaces readable in Live Preview, Source and Reading contexts; interface font overrides respected; clear normal/hover/active/focused/disabled states where native UI exposes them.
3. Tabs: switch/close, long English/Chinese titles, many tabs/overflow, split panes, ordinary/stacked tabs, active pane vs inactive window, keyboard focus and drag/reorder if actually performed. Record unavailable states as justified N/A; do not redesign native stacks.
4. Sidebars: both sides expanded/collapsed and resized narrow/wide; headers/actions reachable, scrollable long content, File Explorer wrapping/rename/four-level hierarchy and neutral guide/chevrons preserved; Backlinks/Outlinks/Search smoke.
5. Ribbon: icons/hover/focus/tooltips/activation with sidebar expanded/collapsed; native controls remain reachable. Status bar: multiple native items, text legibility, click targets and no editor/scrollbar overlap in constrained windows.
6. View header: title and actions readable with long names, back/forward/menu and focus usable in split panes; native hidden-header behavior, if configured by Obsidian, remains respected without theme-added hiding.
7. Existing settings: red/blue/green Accent propagation, Radius small/medium/large (record values), Content Width at two values, Line Height 1.5/2.0; no fixed purple or clipping, no semantic Callout/Highlight flattening. Any approved new candidate settings require extremes/default/restart/restoration tests.
8. Phase 2 regression: Source caret/Up/Down/Enter/Backspace and every real blank line; typography, links/tags/highlight, quote-tag normal/hover ISSUE-01, code, table, Callout semantic/folding and Navigation contracts. No new content selectors or source geometry changes.
9. Scope/automation: later approved CSS changes require Build/Check/diff-check and strict reviewed declaration/selector scope; no accidental token/settings/deferred-feature expansion. Existing transitions may remain; no new animation is introduced.
10. Restore settings/window/sidebar state, remove only temporary QA data, recheck artifact. Record PASS/ISSUE/justified N/A with actual evidence; review any blocker before changing scope.

## Deferred items / review gate

Full Auto Hide, Focus System, Card Layout, Presets, new Animations, Rainbow folders, Canvas/Graph and Companion Plugin features remain unimplemented and outside P3.1. Reading enhancements, advanced effects, Seamless Embed and extra content tuning remain deferred. No new hide/reveal logic, layout relocation, DOM patch, JS runtime or dependency.

Chat review must settle exact visual proposal and defaults, variable consumers and selector exceptions, necessity of workspace aliases, build-order feasibility, whether any settings merit a later separate authorization, and Desktop coverage. After review, obtain a concrete implementation instruction before writing CSS. No implementation PR is created during this preparation.

## First milestone implementation record

Branch: `codex/p3-1-workspace-fusion`; implementation starts at preparation commit `eb0f5c02148ba17c1cdba84677629fa2f05af51e`. Only workspace-tokens.css and tabs.css are edited as implementation source; theme.css is generated by Build. Historical first milestone was uncommitted; the current P3.1a instruction authorizes committing it together with the refinement. No push or PR.

| Change | Actual route / consumers | Reason / limits |
| --- | --- | --- |
| Control radius | body `--theme-workspace-control-radius: var(--theme-radius-md)` → public tab radius / active radius / curve | Preserve existing Radius linkage; new curve mapping needs Desktop clipping checks |
| Control gap | body `--theme-workspace-control-gap: var(--theme-space-xs)` → ordinary tab inner column-gap / padding-inline | Foundation xs = 0.25rem; two consumers; `.workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner` only |
| Active emphasis | Ordinary active tab header → `font-weight: var(--font-medium)` | Native weight; no font family/size override |
| Highlighted state | Public `--tab-text-color-focused-highlighted: var(--theme-text-normal)` | Existing color semantics; normal/focused/active Accent chain preserved |

Aliases and public consumers share body scope, preserving Radius setting overrides without changing Build order. Variables need not precede their consumers in the stylesheet; browser/Obsidian resolution still requires QA. No new global palette, settings, width/max-width, overflow, position, display, visibility or stack-layout overrides. Stacked inner spacing/weight is excluded, while public radius/curve mappings still apply to stacked tabs and require regression QA. Existing transitions, hover and active indicator rules remain byte-identical. No upstream code is imported.

Validation: Build / Check / diff-check PASS. Baseline comparison confirms protected base/editor/navigation/components/settings/scripts/manifest files unchanged; all existing generated sections except Tabs are byte-identical, with workspace-tokens as the sole new section. Generic Check covers token definition/cycles and Phase 2 contracts, but no exact P3.1 Tabs allowlist is added. No new test dependency or check-script change.

Chat implementation review pending. Desktop/browser QA NOT RUN; no visual PASS claimed. Review/tests must cover Light/Dark, red/blue/green Accent, Radius extremes and computed aliases, curve clipping, focused/highlighted/active states, ordinary/stacked tabs, long Chinese/English titles, many-tabs overflow, close/switch/reorder and keyboard access, split panes/narrow windows, Source blank-line navigation and ISSUE-01 regression. Record exact artifact/version/settings evidence using the QA gate above.

Stop here for Chat review; Sidebar, Ribbon, Status bar and View header remain untouched. Earlier preparation language is the baseline plan, not the current milestone status. No settings candidate is approved by this implementation instruction.

## P3.1a refinement record

Current instruction authorizes Tabs refinement only. Ordinary tab inner receives primary / hover / active surfaces, control radius and gap-derived block padding; title shrinks with min-width:0 and ellipsis/nowrap, icon/close preserves its space. Close states consume muted/normal/active text and hover/active background; focus-visible uses existing Accent. No new tokens, settings, fixed tab dimensions, DOM/runtime, visibility changes or Border code.

Earlier first-milestone no-overflow claim is historical: P3.1a deliberately applies overflow:hidden only to the title for ellipsis, not the tab row or control container. Existing outer hover/active/transition selectors and Phase 2 contracts remain unchanged. Build / Check / diff-check PASS; Desktop QA / final review pending. See CURRENT_STATUS and DECISIONS Log for scope and risks. Sidebar/Ribbon remains stopped.

## P3.1b Sidebar shell implementation record

Baseline: `62789ef45bda6167eea7ae672eae3596aca9205d`; incoming Tabs Desktop QA PASS evidence is [Tabs QA](P3_1A_TABS_DESKTOP_QA.md). Current instruction authorizes Sidebar foundation only. sidebar.css already exists; preserve its complete Foundation prefix, including seven navigation-state mappings and existing split background.

Added only two rule blocks:

- Left/right split → direct workspace-tabs: secondary background and row-gap from existing workspace-control-gap (Foundation xs).
- Same container → direct tab-header-container: primary background, horizontal gap-derived padding, neutral 1px inset bottom divider.

No descendant content selector, inherited font/text color, content padding, fixed width/height, display/overflow/position, resize-handle property, Sidebar token or setting. Native split background remains unchanged. Inset divider avoids adding box dimensions; container row-gap is shell spacing, not a rewrite of tree/leaf geometry. No rounded card or auto-hide behavior. Workspace aliases need no extension.

Build / Check / diff-check PASS. Comparison against 62789ef confirms all source changes limited to sidebar.css; its old prefix is byte-identical and all other generated sections, including Tabs/P2.6, are byte-identical. No new script/dependency/DOM/runtime/upstream code.

Desktop QA NOT RUN; pending implementation review and actual application evidence. Test Light/Dark; both sidebars expanded/collapsed, native vertical split groups and narrow/wide widths; controls/title/tooltip access, drag resize and divider hover; long file/folder wrapping, rename, four-level hierarchy, selected/hover colors, scroll to first/last row; Search/Backlinks/Outlinks/plugin contents unchanged; editor Source/LP/Reading and Tabs stacked/split/narrow smoke. Record artifacts/root == installed hashes and actual settings. Header padding can reduce available horizontal control space; row-gap can affect available scroll height and depends on native layout; direct-child selectors may be inert if native DOM differs. Treat these as QA risks, not current verified blockers.

This milestone is committed locally only; no push/PR or Ribbon implementation.

## P3.1c-1 Ribbon shell implementation record

Baseline `c69bdcf23cc1f756c9a03faee959518a48b98345`; Tabs QA PASS is recorded in its Desktop report, Sidebar QA PASS is maintainer-reported in the current instruction. No additional Sidebar measurements or QA hash is invented. Earlier no-Ribbon instructions are historical; current scoped authorization is Ribbon only.

ribbon.css already exists. Change the documented public expanded background mapping to existing secondary surface; keep collapsed primary mapping. Add left/right Ribbon inset neutral dividers without border-width changes. Standard side-dock-ribbon-action gets workspace gap-derived block margins and existing workspace control radius. Existing muted/normal/Accent icon variables, hover background and active foreground/background rules remain byte-identical; active rule follows hover so active+hover remains compatible.

Selectors are exclusively Ribbon scoped. Native/plugin actions using the standard class receive the same shell geometry; no plugin name/command filtering, icon/SVG/size/visibility/event/DOM changes. No new token, setting, width/padding variable override, runtime, auto-hide, focus mode or animation. No tab/sidebar/editor/navigation/component/source change.

Build / Check / diff-check PASS; comparison confirms all non-Ribbon generated sections and sources unchanged. Push after commit under maintainer's standing instruction; no PR. Generic Check validates token/cycle health and Phase 2 contracts, but actual native layout/interactions need Desktop QA.

Desktop plan (NOT RUN): record correct branch/commit and root == installed CSS hashes; Light/Dark, red/blue/green Accent, Radius 0/20; expanded/collapsed sidebar backgrounds and neutral divider; top/bottom commands and plugin buttons click/hover/tooltip and native active states where exposed; shortest usable window height and narrow window, no clipped or inaccessible bottom actions; workspace/sidebar resize and editor/Tabs/Sidebar/P2.6 smoke. Restore settings/window state and record justified N/A for unavailable native states. Risks: margin behavior depends on actual action container layout, large radius appearance, arbitrary plugin custom controls and native theme cascade. No Desktop PASS claimed now.
