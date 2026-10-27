# Phase 5 Final Integrated Desktop QA

<!-- P5 FINAL FIX CURRENT START -->
## Final Fix + Tuning Batch — 2026-10-27 (Asia/Shanghai)

**Final Fix implemented — focused Desktop retest pending. Phase 5 is not yet complete.** Baseline bc181f0befb869a6695b7b33f50605a9afb94215, branch codex/p5-feature-completion. This checkpoint records the user's Chat final review disposition and supersedes the prior pending-review process instructions, without rewriting the original QA observations/counts.

| Item | Current disposition |
| --- | --- |
| B-01 | **External Style Settings / Obsidian restored-view compatibility limitation**; no Fusion source fix. Saved data remains intact. Workaround: **Close the Style Settings view before restarting Obsidian if this upstream restoration issue occurs.** Fusion remains usable without Style Settings. A saved-open-view restart PASS is not required. |
| B-02 | Canvas selector now covers native single .is-focused and multi .is-selected with the same inward outline/offset; implementation complete, focused retest pending. |
| B-03 | Seven documented Graph semantic variables moved to body:not(.fusion-native-graph); Graph/Local Graph background and controls remain host-scoped. No direct renderer override. Implementation complete, focused retest pending. |
| C-01 | **KEEP / accepted behavior**: selected Sidebar tab remains a persistent orientation/reveal cue. Source unchanged. |
| C-02 | Muted opacity step tuned .05→.01, preserving default.72/min.4/max1/token.72; focused display/Reset/restart retest pending. |

Build / Check / diff-check PASS. Static contracts enforce Canvas selection-only inward outline, global gated Graph semantics plus host-scoped presentation, and muted .01 step. Six in-memory regressions (lost focus selector, physical border, geometry addition, host-only Graph variables, global background, renderer override) are rejected. Exactly35controls/26variables/9toggles remain; no new token, toggle, JS/runtime, Preset, Decision012/013/014 or 5A/5B source change.

Next, within the already authorized batch: focused existing independent-Vault retest of B-02/B-03/C-02 and immediate regression only. Inspect actual Graph consumer/helper, body and host, real colors in Light/Dark, native toggles and Local Graph. If global variable scope still fails, collect exact evidence and return to Chat without speculative selectors. Preserve all original D limitations. No PR, main merge or release authorization.

<!-- P5 FINAL FIX CURRENT END -->

## Prior checkpoint / original observations — retained

**Phase 5 Final Integrated Desktop QA completed — awaiting Chat final review**

Disposition: **PASS WITH FIXES** within the recorded desktop scope. **A=0; B=3; C=2; D=6 coverage/unsupported categories.** B items include one optional-plugin integration failure and one Graph rendering discrepancy whose implementation cause still needs review. No implementation fix was made. This is not Phase 5 acceptance, release approval, a PR, or a main merge.

## 1. Environment

| Item | Tested value |
| --- | --- |
| QA dates | 2026-10-21–22, America/Los_Angeles |
| Obsidian / installer | 1.14.4 / 1.10.6, actual About UI |
| Windows | Windows 11 25H2, build 26200.8737 |
| Style Settings | Existing installation 1.0.9, mgmeyers |
| Repository / branch | yimengzhiyan/obsidian-theme-plugin / codex/p5-feature-completion |
| Implementation HEAD | b5443fe068b84a7358b4fe291d59c3d84cced7bd |
| Vault | Independent P415-Preset-Acceptance; not a daily Vault |
| Display scope | Restored window approximately 1062×838; single main content about 718px, split panes about 356–357px |

The existing `.obsidian` directory and both original Markdown files were backed up before installation/testing. All new notes, folder trees, image and Canvas data were confined to `P5 Final QA/`. Native Windows UI actions exercised the real application. DevTools queries only read DOM/CSSOM/computed styles or used native media-emulation controls; no product DOM/class/style injection or application-runtime automation was used.

Window maximization/coordinate recovery and intermittent Windows lock screens interrupted earlier sessions. Testing resumed from saved evidence after the user restored a large normal window/unlocked the desktop. No result was inferred from a failed capture or stale accessibility tree.

## 2. Artifact and validation

| Artifact | Root and installed SHA256, before and after cleanup |
| --- | --- |
| theme.css | EB33196C6805B8B954050E60A61D3068F034F17E59A12F4E27E60D5700A25DD5 |
| manifest.json | B810490B4E3C4DCAFF1C5DB0A23BF3718CDD0C0E044AB7C5F9321A406816887E |

The implementation checkout was clean at b5443fe before documentation work. No source, settings metadata, generated artifact, manifest, package, or DECISIONS changes are included in this QA delivery.

`npm run check` passed against 28 build inputs. An isolated copy also passed; its 33 relevant source/settings/script/package/manifest inputs were byte-identical, and generated CSS matched after newline normalization. On the Windows checkout, the first direct check reported an out-of-date generated file because checkout `theme.css` was CRLF while the generator emitted LF. Normalized contents were verified exactly equal, the subsequent direct check passed, and the tested CRLF artifact bytes were restored and hash-checked. An initial sandbox EPERM was an execution-permission limitation, not a CSS result. Final `git diff --check` and the five-document scope check are required at commit closeout.

Local evidence includes compact JSON computed-style samples, UI accessibility transcripts, an execution checkpoint, saved nondefault data, cleanup verification, and an archive of the tested fixtures. These environment artifacts remain outside Git. References below name those evidence files; screenshots were inspected during native UI testing and are not committed as a portable screenshot suite.

## 3. No-plugin baseline

Style Settings was disabled before the first baseline. Body had neither `css-settings-manager` nor any `fusion-*` class, no plugin style overrides, and only native zoom/font/indent inline properties. The later saved-nondefault → disable → restart comparison repeated this state rather than assuming plugin unload behavior.

Observed baseline: ordinary neutral Card with 8px radius; Focus Accent header boundary; quiet chrome .55/muted .72; 6% ordinary active line; regular 180/100ms effects; smart wrapping; seamless embeds; native-interactive Fusion Canvas/Graph; Rainbow absent. The correct Card painter is `.workspace-leaf-content`; an initial sample of its parent `.workspace-leaf` was discarded, not counted as failure.

Typography defaults: width700px, line1.7, paragraph .5rem, heading1.5rem, indent0, prose letter/word0. Reading H1–H6 28/24/20.8/18.4/16.8/16px with weights700/700/600/600/500/500; LP defaults independently confirmed, including all six headings. Reading paragraphs `pretty`; Reading/LP H1–H3 `balance`; Source true blanks remained native. Real PKM embeds, Canvas and Global Graph opened and worked without the optional settings plugin.

Evidence: `no-plugin-workspace.txt`, `no-plugin-reading.txt`, `no-plugin-pkm.txt`, `no-plugin-default-lp.json`, `plugin-disabled-restart.json`. **The settings plugin is not required to run the default Fusion experience.**

## 4. Style Settings UI and 35 controls

Actual UI search returned **35 Results: 25 sliders + one text input + nine toggles = 26 variable settings + nine class settings**. Appearance, Workspace, Reading & Writing and PKM, with the expected nested headings, rendered normally. Native heading/chevron structure and grouped search worked. Not every nested heading was separately keyboard-certified; see D-06. No Preset, Writer profile, CJK autospace control or duplicate metadata ID was found. No metadata parsing error or Pickr `null.clone` occurred.

Every control was changed through native UI during the matrix; `writing-profile-saved-data.json` provides the consolidated saved-key record. UI availability and individual consumer behavior are separate from the B/D qualifications below.

| Variable control | Values actually exercised / outcome |
| --- | --- |
| Accent | RGB red(210,45,55), blue(35,100,210), green(35,140,85); controls/tabs/Focus/active line and Graph focus responded; links retain their existing semantic palette, tags follow Accent. Canvas multi-selection responds; single-selection B-02. |
| Radius | 0 / 8 / 20; workspace/controls/Card/Canvas/Embed consumers respond, without pane geometry mutation. |
| Quiet chrome | .25 / .55 / 1; native Reset .55, restart retained. |
| Muted chrome | .4 / requested .72 / 1; Reset stores/applies .72 but native range displays .70, C-02. |
| Active line strength | 0 / 6 / 15%; ordinary editor response, independent opt-out. |
| Line height | 1.5 / 1.7 / 2.0; Reading/LP and Source native mapping retained. |
| Content width | 500 / 700 / 1000; native readable-width variable chain retained, viewport limits D-05. |
| Paragraph spacing | 0 / .5 / 1.5rem; additionally1 and Source stress2; Reading/LP response. |
| Heading spacing | .5 / 1.5 / 3rem; scoped LP blank rules/fallback retained. |
| First-line indent | 0 / 1 / 2em, stress3; ordinary Reading/LP only. |
| Prose letter spacing | -.03 / 0 / .08em; -0.48 / normal / 1.28px at16px prose. |
| Prose word spacing | -.05 / 0 / .20em; -0.8 / 0 / 3.2px at16px prose. |
| Bold strength | 0 / 200 / 300; additive semantic weight, not a replacement absolute weight. |
| Heading letter spacing | -.03 / 0 / .10em; real heading consumer responds. |
| H1 size | 1.2 / 1.75 / 2.5em, plus hierarchy2.1; Reading/LP response. |
| H2 size | default1.5 → hierarchy1.6em. |
| H3 size | 1 / 1.3 / 2em, plus hierarchy1.4; Reading/LP response. |
| H4 size | default1.15 → hierarchy1.2em. |
| H5 size | default1.05 → hierarchy1.1em. |
| H6 size | .85 / 1 / 1.5em; Reading/LP response. |
| H1 weight | 400 / 700 / 800. |
| H2 weight | 700 → 600; attempted650 rounds to700 under native step100, then valid600 applied. |
| H3 weight | 400 / 600 / 800; native Reset600 + restart. |
| H4 weight | 600 → 500. |
| H5 weight | 500 → 400. |
| H6 weight | 400 / 500 / 800. |

Nine toggles: full workspace controls, disable active line, disable workspace motion, native pane shell, disable smart wrapping, native embeds, Rainbow folders, native Canvas and native Graph. All were enabled and disabled; class persistence, global Reset and final restart were inspected. Their detailed surface results follow.

## 5. Original four compatibility

RGB inputs immediately recolored native input focus/toggle/slider fill, selected tab and Focus boundary. Tags/active-line derived colors remained readable; preexisting link colors remained semantic. Real Graph node hover/focus and connected lines responded to red, blue and green; deep-color mode also retained the configured green. Canvas multi-selected outlines followed all three colors while the red node and green group retained user colors. B-02 prevents a blanket Canvas-selection PASS.

Radius0/8/20 propagated to surfaces, including actual Canvas nodes and embedded-note shells. Width500 visibly constrained text; 700 and1000 mapped to the same native readable-line chain, adapting to pane width. Line1.5/1.7/2 yielded24/27.2/32px prose line boxes. Source retains native width/line-height mappings, not the new prose normalizer. Actual1000px text-box width was not possible in the final718px content viewport (D-05).

Evidence: low/high/middle Reading/LP samples, `source-extreme.json`, `canvas-multiselect-red.json`, `ordinary-restored-light-apps.json` and native screenshot observations.

## 6. Workspace controls

Opacity changes affected resting chrome rather than Markdown/embedded content. Minimal Fusion/full-chrome sampling returned opacity1 for Ribbon and View Header actions, while text remained1. Full visibility did not remove Focus semantics or introduce geometry changes; turning it off restored .55/.72. Inactive title, tab-close, Status and direct Sidebar chrome were visually checked within the bounded workspace smoke; no all-control keyboard/accessibility certification is implied.

Native pane shell removed the ordinary main Card outline; Focus header remained. Actual ordinary → native ON →356px split → stacked → ordinary → native OFF restored the ordinary Card. Separate Fusion ordinary/stacked samples showed stacked outline0/radius0 and ordinary neutral hairline/radius20 restored. No stale geometry or clipping was observed.

Active-line strength0/6/15 and the disable toggle were exercised. Ordinary Source/LP state lines responded; special HyperMD blocks were excluded, Reading had no active-line consumer. Actual caret movement, search match and text selection remained readable. Source stress operations are in section17.

Motion toggle alone, actual `prefers-reduced-motion: reduce` alone, and their combination each returned sampled transition0s/transform none. Media emulation was explicitly removed and verified false. After default Reset/restart, transitions returned to .18/.1s. The exact continuously held 1px press frame is D-02.

**C-01 recommendation: KEEP.** With a selected Sidebar tab, main content used and pointer outside the Sidebar, both direct header containers computed opacity1 with hover=false/focus-within=false. Light and Dark observations remained usable; the selected-tab persistence is a reasonable orientation cue. This is a tuning recommendation for Chat acceptance, not a source change. Evidence: `default-motion-c01-dark.json`, earlier Light PKM/sidebar sample, three `reduced-motion-*.json` files.

## 7. Reading/Writing controls

Low/high Reading measurements verified prose indent/spacing and H1/H3/H6 extremes. High Reading: indent32px, letter1.28px, word3.2px, line32px; H1/H3/H6 40/32/24px at800. Low Reading: indent0, letter-.48px, word-.8px, line24px; headings19.2/16/13.6px at400. Code/math remained zero-indent/normal spacing. Lists, quote, code blocks, Callout and table smoke retained native/special-context layout.

LP high profile showed ordinary blank min-height24px, paragraph→heading48px and heading fallback24px. Low profile showed collapsed ordinary blank spacing and heading8px behavior; Source was explicitly excluded. LP H3/H6 extremes were revisited at their actual viewport: 32px/800 and24px/800, then16px/400 and13.6px/400. H1 extreme evidence came from its own inspected viewport; no truncated mixed-mode query was used as complete proof. Default LP confirmed all six heading sizes/weights.

A combined hierarchy was constructed: sizes2.1/1.6/1.4/1.2/1.1/1em and weights700/600/600/500/400/500. Reading computed33.6/25.6/22.4/19.2/17.6/16px with correct weights, balanced H1–H3 and ordinary H4–H6 wrap. This demonstrates configurable hierarchy, not a promise that arbitrary independent maxima preserve hierarchy.

Bold modifier300 produced prose/link700 and bold heading1000 when the surrounding heading was700; italic remained its semantic surrounding weight/color. Default200 and low0 were exercised. The font's actual available weight faces were not independently certified. Smart-wrap disable restored `wrap`; OFF restored Reading `pretty` and H1–H3 `balance`, including long/narrow text. LP ordinary prose itself remains native `wrap` by design.

`CSS.supports("text-autospace", "normal")` returned false again. D-01: unsupported, no hidden capability activated and no UI invented.

Evidence: `low-reading.json`, bounded `low-lp.txt`, `high-reading.json`, `high-lp.json`, `middle-red-reading.json`, `middle-red-lp.json`, `lp-high-h3-h6.json`, `lp-low-h3-h6.json`, `no-plugin-default-lp.json`.

## 8. Reset, persistence and plugin-disabled behavior

Six individual native Reset cases returned and persisted: quiet1→.55, active15→6, paragraph2→.5, indent3→0, H1 size2.5→1.75, H3 weight800→600. Settings view was closed before the successful control restart. `reset-six-rainbow-restart.json` verified the six runtime defaults and Rainbow ON; remaining deliberate nondefaults also persisted. No delayed old-value resave was observed. Retaining an explicit default in plugin storage is normal and is not an old-value resave.

Full-chrome/native-pane/disable-active/native-Canvas were ON in Minimal Fusion, then OFF and absent after restart. Rainbow ON/restart and OFF/restart both passed. The later writing profile persisted green RGB,700/1.7/r8, paragraph1/heading1.5/indent1, custom hierarchy and effects-disabled, with other eight toggles off. Actual runtime classes/styles, saved keys and visible folder baseline agreed.

**B-01 exception:** restarting while the Style Settings view itself was saved open produced two `view.setSettings is not a function` errors, a restored `No style settings found` view and loss of applied saved classes/variables. Data remained intact. Closing that tab before restarting restored the same saved profile correctly. This is an Obsidian1.14.4/Style Settings1.0.9 view-restoration integration failure, not a theme metadata parse failure or unrelated console noise.

With saved nondefault data still present, disabling the plugin through its actual native toggle immediately removed all plugin classes/style overrides; restarting kept them absent. Theme defaults and actual LP stayed usable. Re-enabling reapplied the saved profile. Finally the plugin's native theme-wide Reset produced `{}`; a further restart retained defaults, all nine Fusion setting classes absent and only the plugin's empty CSS manager style. Reduced-motion emulation remained false.

Evidence: restart-with/without-style-tab JSON, `restart-console.txt`, `reset-six-rainbow-restart.json`, `writing-profile-saved-data.json`, `writing-rainbow-off-restart.json`, `plugin-disabled-immediate.json`, `plugin-disabled-restart.json`, `default-reset-restart.json`.

## 9. Seamless Embed

Real fixtures covered full note, section, block, nested section, SVG file, list and quote embeddings. Reading and LP scrolled through them in both theme modes and narrow panes. Fusion shells were transparent with a neutral logical-start hairline and configured radius, no forced max-height; embedded text retained native typography rather than consuming main prose indentation/spacing. Titles/links were muted at rest and remained visible/actionable. Actual jump icon opened Embed Target, and native Back returned to PKM. Images, nested content and Callouts remained accessible without clipping.

Native-embed ON restored the native Accent left border (2px measured in Reading), including nested instances; OFF restored the Fusion neutral edge. LP nested native appearance was explicitly revisited in Dark and narrow panes. Hover/title behavior was observed; the persistent `:focus-within` state was not independently captured through a reliable native focus entry, so that branch remains D-03, not an inferred visual PASS.

Evidence: `minimal-pkm.json`, `full-light-reading-pkm.json`, baseline PKM transcript and native LP/nested observations.

## 10. Rainbow Folder

Default/class-absent explorer was neutral. ON colored12 sibling folders plus nested folders in the native cycle; ordinary mixed-file names stayed neutral and selected-file Accent semantics remained. Light/Dark hover/readability, scrolling, expansion/collapse and native Rename were exercised. `01 Folder` was renamed to `01 Folder renamed` only inside the temporary fixture. No original note/folder was renamed.

ON restart retained class/color; OFF restart restored neutral folders and absent class. Native folders-first sorting kept mixed files below folders, so genuinely interspersed folder/file visual skipping was not observed. Files participate in nth-child indexing by implementation; arbitrary-sort UX is D-04, not a folder-only counting certification. Within the tested sorting the cycle was acceptable.

## 11. Canvas

Real Canvas contained a red user-colored text card, note card, SVG card, connecting edges and green user-colored group. Native pan, zoom/fit, node drag, resize, selection, context menu and adding a connection worked. Canvas JSON confirmed two edges after the actual connection operation. Opening the note card via its native context menu opened Embed Target in a new tab. Changes stayed in the temporary Canvas.

Light/Dark grid/background/labels/controls remained usable; actual Canvas radius8/20 samples responded and user colors were preserved. Radius0 was exercised on the main workspace/Markdown surface, not separately sampled on every PKM surface. Multi-selection supplied `is-selected` and the expected inward Accent outline (computed hairline with outline-offset -1px), following RGB changes without geometry mutation. The native group border/color remained intact.

**B-02:** ordinary single selection of the colored text node supplied `is-focused` rather than `is-selected`; Fusion outline was none/0px. The source only targets `.canvas-node.is-selected .canvas-node-container`. This is a confirmed single-selection selector gap; do not generalize it to multi-selection, which passed. Evidence: `canvas-single-selection-state.json` versus `canvas-multiselect-red.json`.

Native Canvas ON preserved interactive/native appearance; OFF restored Fusion radius/control styling. A separate group redesign was neither required nor performed.

## 12. Global and Local Graph

Real Global Graph included resolved notes, unresolved targets, tags and the SVG attachment. Actual pan/zoom/node drag, hover/focus, opening a note and filter/settings controls worked. Tags and attachments were enabled via native controls. Actual focused node/connected-line RGB smoke passed red/blue/green in Light and green in Dark. Ordinary/muted nodes, lines, controls and background remained readable.

Real Local Graph opened through the native command; pan/zoom/focus worked, and opening Embed Target updated the linked Markdown pane and local center/title. Graph and Local Graph host variable contracts were inspected in the split/stacked run.

**B-03, rendering discrepancy requiring final review:** the Graph host's attachment variable was Fusion blue-mixed while the rendered SVG attachment stayed native yellow in Light/Dark. The host also had a mixed tag value while tags looked native bright green. `graph-category-scope.json` records body attachment `#e0ac00`, host attachment `color-mix(in oklch, #086ddd 65%, #242329)`, and native `.graph-view.color-fill-attachment { color: var(--graph-node-attachment) }`. The visible attachment mismatch is observed; a renderer lookup/scoping explanation is an inference, not a proven internal renderer diagnosis. Do not certify painted categories solely from correct host computed variables. Graph navigation/physics remain functional.

Native Graph ON/OFF was exercised in Minimal/Full combinations and actual Graph operation; this does not resolve or waive the category-paint discrepancy. Evidence: `stacked-light-apps.json`, `ordinary-restored-light-apps.json`, `default-light-graph-host.json`, `graph-category-scope.json` and actual Graph interaction observations.

## 13. Native fallback toggles

| Toggle | Observed exit and return |
| --- | --- |
| Native pane | Ordinary outline removed; Focus retained; split/stacked/ordinary remained native; OFF restored Card. |
| Disable active line | Ordinary highlighting exited; OFF restored configured strength; Reading/special blocks unaffected. |
| Disable motion | Sampled new transitions0s/transform none; OFF/default restart restored .18/.1s; media route independent. |
| Disable smart wrap | Native `wrap`; OFF restored targeted pretty/balance. |
| Native embeds | Reading/LP and nested native Accent border; OFF seamless neutral edge, functional jump/scroll. |
| Native Canvas | Native interaction and user colors preserved; OFF Fusion radius/control rules return; B-02 remains. |
| Native Graph | Native-useable surface/controls; OFF host Fusion variables return; B-03 remains. |
| Full chrome | Opacity1; OFF reduction .55/.72; no content dimming. |
| Rainbow | Positive opt-in only; OFF/class absent and restart return neutral baseline. |

Native-* removes the module selector match; existing Foundation and other baseline styling still applies. It is not a promise to remove the whole theme.

## 14. Toggle combinations

| Combination | Actual configuration and result |
| --- | --- |
| Minimal Fusion | All four native switches ON; active/effects/smart-wrap disabled; full chrome ON; Rainbow OFF. Usable native surfaces, outline absent, controls1, motion0s, content1. Successful persistence required closing the Style Settings view; B-01. |
| Full Fusion | All native/disable switches OFF, Rainbow ON. Complete custom Light/Dark workspace/PKM smoke; user colors/functions preserved, B-02/B-03 retained. |
| Writing-focused | Card/active/smart-wrap ON, effects OFF, Rainbow OFF; paragraph1/heading1.5/indent1, width700/line1.7, custom hierarchy. Real LP caret/Enter/Backspace and restart passed. |

No nine-toggle full permutation or heading Cartesian product was attempted, as requested.

## 15. Light/Dark

Default Fusion and at least one customized configuration were observed in both modes across Markdown, chrome, headings, embeds, Canvas, Graph and navigation. Default Rainbow remained OFF; opt-in Rainbow was separately observed in both modes. Defaults were revisited after plugin-free and plugin-enabled restarts. Native semantic Callout/code/highlight/user colors remained readable. This is bounded visual smoke, not quantitative contrast/accessibility or pixel-parity certification.

## 16. Narrow, split and stacked

Single, two-pane and nested three-pane layouts were exercised, with narrow panes about356–357px. Markdown, Graph/Local Graph and Canvas were present in the workspace. Actual ordinary→stacked→ordinary sequences were run under Fusion and native-pane modes. Long headings/prose/embeds wrapped; native stacked horizontal scrolling remained available; Card styling stayed excluded from stacked leaves and restored in ordinary leaves. No theme-introduced resize/scroll break or stale outline was observed. Width1000 remains a maximum contract within available native space, D-05.

## 17. Source editing protection

Actual Source operations traversed Paragraph A / blank / Paragraph B / two blanks / Paragraph C with Down/Up, typed character/IME commit, Enter and Backspace. Under paragraph2rem/heading3rem/indent3em/letter.08/word.2 and line2/width1000, ordinary Source still computed indent0, letter normal and word0. Real blank line boxes were32px with min-height0; no scoped LP blank normalization consumed Source. Native caret/navigation remained usable.

The Writing fixture was restored after physical editing; SHA256 `30C7FDEDC4D8A612E9854C991F54D6D5FA54B1DABDE4EE44653ED7462E2F8782` matched staging. `source-extreme.json` records actual non-LP Source mode. Later writing-profile LP Enter/Backspace also restored the same hash.

## 18. Regression and Console

Bounded Phase2/3 smoke covered resolved/unresolved/external links, bold/italic links, tags, yellow highlight, inline/block code, quote, nested lists, table, semantic Callout and math; explorer/tab/sidebar/Ribbon/Status/Header, Focus/Card/readable width, Source navigation, Graph and Canvas interactions remained usable. Native selection/search were visually checked. No source edits or additional component redesign were made.

Console showed no theme metadata parse error, `null.clone`, CSS-related obvious exception or individual Reset exception. B-01's two Style Settings view-restoration errors were relevant and recorded separately. Native app.js non-passive-wheel/forced-reflow/key-handler warnings and DevTools breaking-change notices were not counted as Theme failures. Fresh successful restarts without the saved settings tab showed only normal startup output. There is no claim of automated full-console telemetry or every native control being separately exercised.

## 19. Final issue inventory

| ID | Class | Trigger / observed result | Proposed review action, no onsite implementation |
| --- | --- | --- | --- |
| B-01 | Needs fix: optional-plugin integration | Save Style Settings view open with nondefaults, quit/relaunch: `a.view.setSettings` / `t.view.setSettings is not a function`; settings view empty, saved classes/variables not applied. Data intact. Close view/restart comparison restores them. | Decide dependency compatibility handling/upstream route. Keep a documented close-view workaround; do not call this a metadata/Pickr failure or erase saved data. |
| B-02 | Needs fix: Canvas selector | Single colored-node selection gives `is-focused`, outline none; source selection rule only `is-selected`. Multi-select works. | Review native single-focus state coverage while preserving user colors and inward geometry. |
| B-03 | Needs review/fix: Graph category paint | Host blue attachment variable but actual SVG node remains yellow; native body/host scope evidence recorded. | Verify Graph renderer color lookup and intended category palette before accepting the override. Root cause is not asserted from host CSS alone. |
| C-01 | Tuning, recommendation KEEP | Selected Sidebar direct header stays1 outside hover/focus. | Accept current selected-state reveal; no change recommended from this desktop run. |
| C-02 | Tuning/UI precision | Muted default .72, range min.4/step.05; user set.72 clamps.70, Reset applies/stores.72 while UI shows.70. No delayed overwrite. | Align range/display/default precision if chosen in final tuning; preserve intended .72 until decision. |
| D-01 | Unsupported | `text-autospace: normal` unsupported. | No effect PASS/no UI. |
| D-02 | Coverage limit | Exact held press-transform frame not captured; transitions and disabled transforms measured. | Retain bounded motion claim. |
| D-03 | Coverage limit | Embed persistent focus-within Accent branch not independently held/captured through a reliable native focus entry. | Do not infer state coverage from CSS; jump/hover/native fallback are separately tested. |
| D-04 | Coverage limit | Folders-first native sort did not interleave file/folder siblings. | nth-child file counting remains an acknowledged arbitrary-sort limitation. |
| D-05 | Coverage limit | Available main viewport718px; configured width1000 could not become a physical1000px box. | Native maximum-width/token chain verified; no full-width pixel claim. |
| D-06 | Scope/N/A | One Windows/runtime/DPI/Vault; bounded native controls/fold headers and surface/value combinations (e.g. no separate Canvas radius0 sample), no exhaustive keyboard/screen-reader, font-face, plugin/popout/RTL/platform certification. | Carry limits forward; do not promote them to PASS. |

No A blocker was observed. A=0 is bounded to the exercised environment and operations, not an assertion about all environments. C-01 is a recommendation awaiting acceptance. B-01 is a relevant integration problem; unrelated community-plugin noise was not added to this inventory.

## 20. Final disposition and concentrated batch

**PASS WITH FIXES: A=0, B=3, C=2, D=6 categories.** Default usability, independent settings, editing protection, PKM interaction, fallback combinations, individual Reset and successful control restarts have evidence. B-01/B-02 and the observed B-03 rendering discrepancy prevent an unconditional PASS. Coverage limits remain explicit rather than invented successes.

Next is **Chat final review of this report and a single Final Fix / Tuning decision**. Suggested batch scope is B-01 dependency compatibility, B-02 Canvas single-selection coverage, B-03 Graph category consumption verification/correction, and an optional C-02 precision decision. C-01 recommendation KEEP. Do not start implementation automatically. Retest affected behavior plus Reset/restart/default and relevant regression after an authorized batch. No Phase5 Complete/release/PR/main merge is declared.

## 21. Cleanup

The native theme-wide Reset yielded `{}` and default restart was inspected before closing the independent Vault. All temporary body/class/style interventions were absent; no injected product style existed; actual reduced-motion emulation was off. The existing empty CSS manager style is normal plugin output, not a temporary override.

With Obsidian fully stopped, tested fixtures and changed JSON settings were archived outside Git. Only the resolved exact independent-Vault `P5 Final QA/` directory was removed. Backup `.obsidian` files were restored byte-for-byte except the retained tested theme.css/manifest artifacts. Fusion/Dark (`theme: obsidian`), text16, Style Settings enabled and data{} match the backup. No new test note remains in the Vault.

| Original note | Unchanged SHA256 |
| --- | --- |
| Preset Acceptance.md | 944346012DCD0179880F871C9D0DF1386C723E20011F83DA896AA0E649122A50 |
| QA Target.md | 6342D3B235282F5B1211F428F1CF89F829F8A632DF6465C99934C03C10913009 |

`cleanup-verification.json` confirms fixture removal, archived location, restored settings, both note hashes and matching root/installed CSS+manifest. The validation rebuild subsequently restored the same tested artifact bytes/hash. This delivery changes exactly this report plus CURRENT_STATUS, AI_HANDOFF, TASKS and P5_FEATURE_COMPLETION_PLAN. Commit: `test: complete Phase 5 final integrated QA`; destination branch `codex/p5-feature-completion`, explicitly authorized by the QA request. Obtain the exact documentation commit and confirmed push state from Git closeout, not from the implementation HEAD above.
