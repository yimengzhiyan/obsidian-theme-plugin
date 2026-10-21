# P4.2b Card Boundary Painter Spike

## Environment

- Date: 2026-10-19, America/Los_Angeles. Independent `P415-Preset-Acceptance` Vault; daily Vault not used.
- Obsidian 1.14.4 / Installer 1.10.6 confirmed in native About; installed Style Settings 1.0.9. Windows 25H2 / 26200.8737 retained from the existing QA record, not freshly verified.
- Branch: `codex/p4-preset-prototype`; evidence baseline `1ef5ae658316fe9731b735a7e0ab32b3ada92cbc`.
- Installed theme is the retained experimental artifact from `f50040a45c456693b603dc148445b33ea8eca2c1`, not an accepted Preset release. Root and installed theme SHA-256 before/after: `CB30DFB7C0E288EAC9DFEB03D51DD43CB62B6FCCE9957C62C80805C8B537DA90`.
- Dark mode, existing Radius alias 8px. Stable geometry matrix viewport: 1029 × 805 CSS px; root measured 985.3333740234375 × 805.3333740234375. Fractional values are actual DOM measurements, not rounded screenshots.
- This is a painter spike, not full Card Desktop acceptance, a new product decision, or permission to implement a formal Card module. P4.1 FAIL / Decision013 remain unchanged.

## Temporary test mechanism

A dedicated temporary snippet was enabled only in the test Vault. Its selector was:

`.workspace-split.mod-root .workspace-tabs:not(.mod-stacked):not(.workspace-leaf-content *) > .workspace-tab-container > .workspace-leaf > .workspace-leaf-content`

The final exclusion also prevents selecting nested view-owned tab hosts. Ordinary hidden leaves can match; their native visibility remains untouched. Inactive is not treated as hidden.

Only outline, outline-offset, box-shadow and border-radius were varied. Color used existing `--theme-border`; the normal radius used existing `--theme-workspace-control-radius`. No background, physical border, overflow, sizing, gap, margin, padding, flex, position or descendant rules were added. No token, setting, pseudo-element, overlay, transparency, JS/runtime listener or DOM mutation was introduced. Console expressions only read DOM, computed styles and geometry.

| Trial | Temporary mechanism | Radius |
| --- | --- | --- |
| Baseline | Comment-only snippet, no experimental rules | Native 0px on target |
| A0 | 1px solid neutral outline, offset 0 | 0 |
| A1 | Same outline, offset -1px | 0 |
| A2 | Same outline, offset -1px | Existing alias, computed 8px |
| B1 | Neutral inset shadow, 0 0 0 1px | 0 |
| B2 | Same inset shadow | Existing alias, computed 8px |
| A20 / B20 | Corresponding painter | Temporary 20px extreme |
| R8 / R20 | Radius only, no painter | 8 / 20px |

Zero radius is covered by A1/B1 and the baseline. Extreme radius was supplied as a temporary target-only declaration; no Style Settings saved value or token was changed. This does not certify the Radius setting UI.

Native commands created splits, changed view modes and switched stacking. Native Interface settings temporarily hid/restored View Header. Configuration was backed up before testing and restored after closing the test application.

## Baseline geometry

Rect format is `[x, y, width, height]`, CSS px. The exact baseline appendix below preserves full precision. Summary values here are rounded for readability.

| Scenario / pane | Leaf-content rect | Header height | View-content height | Scroll owner clientHeight / scrollHeight |
| --- | --- | --- | --- | --- |
| Single Markdown Source | [44, 40, 985.333, 765.333] | 38.042 | 727.292 | CM scroller 727 / 1669 |
| Left-right, left Source | [44, 40, 490.667, 765.333] | 38.042 | 727.292 | CM scroller 727 / 1866 |
| Left-right, right Source | [538.667, 40, 490.667, 765.333] | 38.042 | 727.292 | CM scroller 727 / 1858 |
| Nested, left Source | [44, 40, 572.615, 765.333] | 38.042 | 727.292 | CM scroller 727 / 1811 |
| Nested, upper-right Source | [620.615, 40, 408.719, 360.667] | 36.063 | 324.604 | CM scroller 325 / 1772 |
| Nested, lower-right core Graph | [620.615, 444.667, 408.719, 360.667] | 36.063 | 324.604 | No Markdown scroll owner; Graph internals excluded |

The baseline already has leaf-content overflow-x/y `hidden`, view-content overflow `hidden`, CM scroller overflow `auto`, and root/nested split gap `4px`. These are native/existing values, not added by the spike. Header width and view-content width equal shell width in these samples.

Left-right visible divider: `[531.6666870117188,0,3,805.3333740234375]`. After intentional native resizing, nested vertical divider: `[613.6146240234375,0,3,805.3333740234375]`; nested horizontal divider: `[620.6146240234375,397.66668701171875,408.71875,3]`. Hidden/inapplicable divider display/rect records were also compared.

The two Source scrollHeight values in equal-width panes differ slightly in their native baseline. They are compared against their own pane baseline, not forced to be equal to each other.

## Outline results

**A0: FAIL as a credible boundary.** At the shell edge, the outward outline is largely clipped/indistinct next to native surrounding surfaces. A computed outline alone does not prove a visible Card.

**A1/A2: PASS for bounded spike candidacy, with limitations.** Moving the same line inward with offset -1px makes a thin neutral frame visible in single, left-right and nested/narrow contexts, including the core Graph shell. A2 gives subtle curved corners at the existing 8px radius. The frame remains quiet and is not an Accent or active signal. At native header/divider edges it can read as an adjacent parallel seam; no attempt was made to remove native borders/dividers to improve aesthetics.

There was no measured loss of shell/header/content space. A2 divider dragging changed the native pane ratio successfully; the divider rect itself did not change when swapping painters. The intentional user resize was excluded from the fixed-layout comparison.

The declared outline is 1px. Matrix computed samples reported 0.666667px at that capture scale; continuation state checks reported 1px. These separate captures are not treated as identical DPI samples. Each exact geometry comparison uses its own stable-layout matrix baseline; this is not cross-DPI certification.

## Inset-shadow results

**B1/B2: FAIL as the recommended Card painter; geometry PASS.** The shadow exists in computed style, but header/content opaque surfaces obscure the coherent outer frame in the observed single, split, nested and Graph samples. Pairing it with the existing radius does not give a sufficiently clear continuous boundary. A visible scrollbar edge or native header border is not counted as successful inset painting.

B20 also preserved single-pane geometry. It did not establish an advantage sufficient to select inset shadow. Since B is not a credible candidate, its independent full interaction/stacking matrix was not expanded. The tested selector exclusion is shared with A; only A2 received the complete native ordinary→stacked→ordinary interaction cycle.

No descendant transparency, clipping changes or third painter was used to rescue B.

## Radius results

**LIMITATION; 0/8/20 geometry PASS in the recorded single-pane samples.** Radius-only R8/R20 did not create a strong Card boundary on equal-colored surfaces. Radius is not a substitute for a painter.

With inset outline, curvature was actually visible; the 20px extreme was particularly clear at the bottom corners of the upper-right nested pane. Opaque children did not completely erase the observed outline curve. No obvious square child protrusion was observed in those samples.

The shell already has native overflow hidden. No additional clipping rule was needed or added. However, changing border-radius on an already clipped element can round its native clip: unchanged overflow strings and rects do not prove unchanged corner clipping. The spike therefore does not claim that this works on an arbitrary unclipped host, nor that 20px is fully safe for corner selection, scrollbars, overlays or every plugin. Sampled default-radius selection/caret/scrolling showed no obvious interference. Exhaustive extreme-corner accessibility/overlay testing remains outside this spike.

This is not evidence for adding overflow hidden. A future host that requires new clipping must be rejected under the current boundary.

## Stacked off-state

**PASS for A2 native ordinary→stacked→ordinary cycle.** A bottom-right ordinary group containing Graph and QA Target was changed using the native Stack/Unstack command.

| State | Tab-container overflow-x | clientWidth / scrollWidth | scrollLeft | Both stacked shell painter states |
| --- | --- | --- | --- | --- |
| Stacked, before horizontal wheel | auto | 409 / 738 | 329 | outline none 0px; offset 0px; radius 0px |
| Stacked, after horizontal wheel | auto | 409 / 738 | 79 | Still none / 0 / 0 |
| Returned ordinary | hidden | 409 / 409 | 0 | Neutral outline 1px; offset -1px; radius 8px |

Both Graph and Markdown stacked leaves lose the experimental painter completely; other ordinary groups retain A2. Native vertical tab strips remain visible and horizontal scrolling visibly moves the content. Returning ordinary restores matching without stale style. Hidden ordinary Graph still computes the candidate but remains natively hidden. No stacked Card design was attempted.

The stacked group receives no experimental declarations, so the native off-state is preserved; this is not an exhaustive stacked accessibility or performance audit.

## Header hidden

**PASS for the requested boundary check.** Native “Show tab title bar” was switched off. Body lost `show-view-header`; all sampled direct headers computed display `none`, while ordinary shell outline remained neutral 1px / offset -1px / radius 8px.

The frame remains independent of header visibility and does not identify the active leaf. Existing Decision010 header-only Focus limitation remains; no replacement active cue is claimed. The setting was restored: body again contained `show-view-header`, headers computed `flex`, and native header actions were visible before cleanup.

## Interaction smoke

| Interaction | Result / actual observation |
| --- | --- |
| Source caret and blank-line Up/Down | PASS smoke with A1. Existing two empty lines between SOURCE_A/B could be entered with Down/Down and left with Up; caret visible. No text modification. |
| Live Preview selection | PASS smoke with A2. Native mode command, then multi-line English paragraph drag selection; selected text returned by accessibility and visible highlight remained inside editor. |
| Reading scrolling | PASS smoke with A2. Native Ctrl+E, vertical wheel moved left pane from opening paragraphs to headings/list/blockquote/code/callout/table; right panes stayed in place. |
| Split divider resize | PASS smoke with A2. Actual divider drag changed left/right pane ratio; right became about 409px wide. |
| Pane switching / existing Focus | PASS smoke. Clicking Markdown and Graph moved native active state/header Accent; neutral shell was not conditional on active. |
| Graph basic pan | PASS smoke with A20. Drag visibly moved graph nodes in the narrow lower-right pane; no Graph internal investigation. |
| Ordinary tabs | PASS smoke with A2. Graph and existing QA Target switched via Ctrl+Tab and back; native tabs/icons remained. |

These are observed side-effect checks, not a replay of full Phase 2/3 regression or formal Card acceptance. B was visually rejected and did not receive a separate complete smoke certification.

## Geometry comparison

**Geometry unchanged: YES, within the accepted fixed-layout samples.** Twenty accepted records include three baselines and seventeen experimental comparisons. Equality was checked on unrounded JSON values, not screenshot estimates or a tolerance.

Compared fields: viewport, root/nested split rect and gap, leaf rect/display, shell rect/overflow-x/y, direct header rect/display, view-content rect/overflow, visible Markdown scroll owner rect/clientHeight/scrollHeight/overflow, and divider rect/display. Paint-only properties and active class names were excluded from geometry equality.

| Fixed scenario | Experimental comparisons | Exact geometry / overflow / scroll-size equality |
| --- | --- | --- |
| Single Source | A0, A1, A2, B1, B2, A20, B20, R8, R20 | 9 / 9 PASS |
| Left-right Source | A1, A2, B1, B2 | 4 / 4 PASS |
| Nested Source + core Graph + narrow pane | A1, A2, B1, B2 | 4 / 4 PASS |

Early pilot captures mixed maximized/ordinary sizes or stale Console output and were discarded. They are not counted as comparisons. Later native stacking, header visibility, mode changes, scrolling and intentional resizing naturally change native geometry; they are separate state/interaction checks, not evidence of a painter-caused change.

Local raw records and comparison output are kept outside Git under `work/p42b-evidence`; exact baseline values are preserved below so the report does not depend solely on an unavailable screenshot. No measurement helper or temporary CSS is committed.

## Screenshots / observations

Live screenshots were inspected during the spike; no screenshot artifacts are committed. Key visual observations are A0 clipping, A1/A2 thin inward frame, A20 visible nested curvature, B's masked frame, native selection highlight, actual divider movement, Graph movement and stacked horizontal movement. No pixel-diff or independent human preference study is claimed.

Notebook Navigator remains **NOT INSTALLED / NOT TESTED**. No plugin was installed to expand the spike. Light mode, community/custom hosts, pop-outs, RTL, other DPI/platforms and exhaustive overlays are not certified.

## Candidate comparison

| Candidate | Visible neutral boundary | Geometry | Interaction evidence | Recommendation |
| --- | --- | --- | --- | --- |
| A0 | Inadequate at clipped edge | PASS | Limited | Reject offset 0 |
| A1 | Visible thin rectangular frame | PASS | Source smoke | Viable zero-radius form |
| A2 | Visible thin frame with existing 8px curvature | PASS | Native stacking/header/mode/divider/tab smoke | Preferred bounded candidate |
| B1/B2 | Computed shadow, insufficient coherent frame | PASS | Not independently fully certified | Reject as painter |
| 20px extreme | Outline curvature visible | Single geometry PASS | Graph pan sample; corner coverage limited | Limit, not full radius acceptance |

## Final disposition

**Proceed to bounded prototype.** Recommendation only: A2 neutral outline with -1px offset, existing radius, ordinary main direct leaf-content only; A1 for zero radius. It meets the spike threshold in the sampled ordinary/nested/narrow hosts without adding overflow or geometry changes, exits stacked cleanly, and has no observed interaction blocker.

This does not authorize or create that prototype. Return to Chat for bounded scope approval, including real Notebook Navigator host compatibility QA before broader promotion. Preserve native clipping/scroll/dividers, existing Focus, and the stacked off-state; do not add special descendant fixes to force a host to work. Extreme-radius corner/overlay behavior, Light-mode clarity and plugin hosts are remaining acceptance risks. A thin frame is the achieved effect; no floating surface, new spacing or stronger Card styling is inferred.

There is no confirmed blocker to the narrowly bounded next experiment. There is also no formal Card PASS, no new DECISION, no change to Preset closeout, and no initiation of implementation.

## Validation and restoration

- `npm run check`: PASS on second run in a disposable tracked-file copy. First run rebuilt only that copy's CRLF-generated artifact and reported freshness failure; normalized rebuilt CSS equals repository CSS. Repository artifact was never rebuilt/written.
- `git diff --check`: PASS before commit.
- `src/`, `settings/`, `theme.css`, `scripts/` unchanged against baseline; DECISIONS and historical evidence unchanged.
- Test Obsidian/DevTools closed before recovery. All backed-up `.obsidian` files restored and hash-compared; both fixture Markdown hashes unchanged. Dedicated temporary snippet deleted and its enable reference absent in restored appearance configuration. Root/installed theme hashes unchanged.
- Only this report, CURRENT_STATUS, AI_HANDOFF and TASKS comprise the documentation checkpoint. No PR or main merge.

## Exact baseline appendix

The following compact records retain original precision. Each contains scenario, root/splits, pane rects, direct header/content rects, scroll owner dimensions and dividers; painter swaps compared exactly against these records.

```json
{"data":{"viewport":[1029,805],"root":[[44,0,985.3333740234375,805.3333740234375],"4px"],"splits":[],"panes":[{"type":"markdown","mode":"source","group":"workspace-tabs mod-active mod-top mod-top-left-space mod-top-right-space","leaf":[[44,40,985.3333740234375,765.3333740234375],"flex"],"shell":[[44,40,985.3333740234375,765.3333740234375],["hidden","hidden","rgb(233, 231, 237) none 0px","0px","none","0px"]],"header":[[44,40,985.3333740234375,38.04166793823242],"flex"],"content":[[44,78.04167175292969,985.3333740234375,727.2916870117188],"hidden"],"owners":[["cm-scroller",[44,78.04167175292969,985.3333740234375,727.2916870117188],727,1669,"auto"]]}],"dividers":[["workspace-split mod-vertical mod-root",[0,0,0,0],"none"],["workspace-tabs mod-active mod-top mod-top-left-space mod-top-right-space",[0,0,0,0],"none"],["workspace-leaf mod-active",[0,0,0,0],"none"]]},"scenario":"single"}
{"data":{"viewport":[1029,805],"root":[[44,0,985.3333740234375,805.3333740234375],"4px"],"splits":[],"panes":[{"type":"markdown","mode":"source","group":"workspace-tabs mod-top mod-top-left-space","leaf":[[44,40,490.66668701171875,765.3333740234375],"flex"],"shell":[[44,40,490.66668701171875,765.3333740234375],["hidden","hidden","rgb(233, 231, 237) none 0px","0px","none","0px"]],"header":[[44,40,490.66668701171875,38.04166793823242],"flex"],"content":[[44,78.04167175292969,490.66668701171875,727.2916870117188],"hidden"],"owners":[["cm-scroller",[44,78.04167175292969,490.66668701171875,727.2916870117188],727,1866,"auto"]]},{"type":"markdown","mode":"source","group":"workspace-tabs mod-active mod-top mod-top-right-space","leaf":[[538.6666870117188,40,490.66668701171875,765.3333740234375],"flex"],"shell":[[538.6666870117188,40,490.66668701171875,765.3333740234375],["hidden","hidden","rgb(233, 231, 237) none 0px","0px","none","0px"]],"header":[[538.6666870117188,40,490.66668701171875,38.04166793823242],"flex"],"content":[[538.6666870117188,78.04167175292969,490.66668701171875,727.2916870117188],"hidden"],"owners":[["cm-scroller",[538.6666870117188,78.04167175292969,490.66668701171875,727.2916870117188],727,1858,"auto"]]}],"dividers":[["workspace-split mod-vertical mod-root",[0,0,0,0],"none"],["workspace-tabs mod-top mod-top-left-space",[531.6666870117188,0,3,805.3333740234375],"block"],["workspace-leaf",[0,0,0,0],"none"],["workspace-tabs mod-active mod-top mod-top-right-space",[0,0,0,0],"none"],["workspace-leaf mod-active",[0,0,0,0],"none"]]},"scenario":"left-right"}
{"data":{"viewport":[1029,805],"root":[[44,0,985.3333740234375,805.3333740234375],"4px"],"splits":[["workspace-split mod-horizontal",[620.6146240234375,0,408.71875,805.3333740234375],"4px"]],"panes":[{"type":"markdown","mode":"source","group":"workspace-tabs mod-top mod-top-left-space","leaf":[[44,40,572.6146240234375,765.3333740234375],"flex"],"shell":[[44,40,572.6146240234375,765.3333740234375],["hidden","hidden","rgb(233, 231, 237) none 0px","0px","none","0px"]],"header":[[44,40,572.6146240234375,38.04166793823242],"flex"],"content":[[44,78.04167175292969,572.6146240234375,727.2916870117188],"hidden"],"owners":[["cm-scroller",[44,78.04167175292969,572.6146240234375,727.2916870117188],727,1811,"auto"]]},{"type":"markdown","mode":"source","group":"workspace-tabs mod-top mod-top-right-space","leaf":[[620.6146240234375,40,408.71875,360.66668701171875],"flex"],"shell":[[620.6146240234375,40,408.71875,360.66668701171875],["hidden","hidden","rgb(233, 231, 237) none 0px","0px","none","0px"]],"header":[[620.6146240234375,40,408.71875,36.0625],"flex"],"content":[[620.6146240234375,76.0625,408.71875,324.60418701171875],"hidden"],"owners":[["cm-scroller",[620.6146240234375,76.0625,408.71875,324.60418701171875],325,1772,"auto"]]},{"type":"graph","group":"workspace-tabs mod-active","leaf":[[620.6146240234375,444.66668701171875,408.71875,360.66668701171875],"flex"],"shell":[[620.6146240234375,444.66668701171875,408.71875,360.66668701171875],["hidden","hidden","rgb(233, 231, 237) none 0px","0px","none","0px"]],"header":[[620.6146240234375,444.66668701171875,408.71875,36.0625],"flex"],"content":[[620.6146240234375,480.72918701171875,408.71875,324.60418701171875],"hidden"],"owners":[]}],"dividers":[["workspace-split mod-vertical mod-root",[0,0,0,0],"none"],["workspace-tabs mod-top mod-top-left-space",[613.6146240234375,0,3,805.3333740234375],"block"],["workspace-leaf",[0,0,0,0],"none"],["workspace-split mod-horizontal",[0,0,0,0],"none"],["workspace-tabs mod-top mod-top-right-space",[620.6146240234375,397.66668701171875,408.71875,3],"block"],["workspace-leaf",[0,0,0,0],"none"],["workspace-tabs mod-active",[0,0,0,0],"none"],["workspace-leaf mod-active",[0,0,0,0],"none"]]},"scenario":"nested-graph-narrow"}
```
