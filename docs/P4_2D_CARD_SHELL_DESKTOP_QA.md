# P4.2d Bounded Card Shell — Desktop Acceptance QA

**Overall: PASS for the bounded Desktop acceptance scope, with the limitations below.** This certifies the tested ordinary main host shell, not automatic feature promotion, release readiness, all plugins/platforms, or a new design decision. No implementation fix was made.

## Tested artifact and environment

| Item | Evidence |
| --- | --- |
| Dates | 2026-10-20 initial execution; continuation/closeout 2026-10-21, America/Los_Angeles |
| Branch | `codex/p4-card-shell-prototype` |
| Tested implementation | `935c8ed5b3cc24e74ad90c0134eb20e7f02b0bfe` |
| No-Card comparison | `f25a03ece0dd165151f360d672a9fcc5c23d1cf6`, the isolated runtime parent; not failed Preset f50040a |
| Obsidian / Installer | 1.14.4 / 1.10.6; About UI verified in initial execution |
| Windows | 25H2 / 26200.8737; initial environment record |
| Style Settings | 1.0.9, installed manifest and UI |
| Notebook Navigator | 3.4.3, Johan Sanneblad; installed manifest and UI; minAppVersion 1.11.0 |
| NN source | Official Obsidian community catalog installation; [release 3.4.3](https://github.com/johansan/notebook-navigator/releases/tag/3.4.3); installed version, not a moving main-branch manifest |
| Vault | Independent `work/P415-Preset-Acceptance`; no daily Vault used |
| Root and installed SHA256 | Both `2C87962A15A04DBBC75744F28CCA43432644619193F4E9CDF3EA3E14BFB70357`, checked on continuation and after cleanup |
| f25 comparison SHA256 | `837631335528D807B4808E7EC9F723BD2E02D0B709F327CF2F5CA80F75D918BA` |

Initial settings: Dark, font 16, Style Settings data `{}`, Radius 8, width 700, line height 1.7, Accent #6750a4. Full `.obsidian` backup and two original-note hashes existed before testing. The user explicitly authorized NN installation in this Vault and manually moved its view into the main workspace; main-host QA is therefore **tested**, not N/A.

## Acceptance matrix

Results combine the preserved initial P4.2d observations and the resumed Desktop run. Previous P4.2b spike results are not substituted for this artifact's acceptance.

| Gate | Actual execution / result |
| --- | --- |
| Preset isolation | **PASS.** Real Style Settings UI has only Accent, Radius, Line Height and Content Width; no Fusion Preset selector or Writer Prototype. |
| Single Markdown | **PASS.** Light Source/LP/Reading and Dark Source/LP/Reading observed across this run. Neutral host shell joins header/content without added body inset, obvious broken/double frame, or full-card Accent. |
| Light / Dark | **PASS.** Boundary stays neutral and distinguishable from surrounding workspace. Active header remains a separate Accent line; inactive header neutral. Both visual observation and read-only computed samples used. |
| Radius 0 | **PASS.** Native slider set to 0; Markdown and NN main hosts become rectangular neutral frames. No new internal NN frame or blocking clipping observed. |
| Radius 8 | **PASS.** Primary state checked on Markdown, Graph, NN, nested/narrow panes, header on/off, editor/Reading scrollbars and LP selection/caret. Native content insets keep text away from the physical shell corners. |
| Radius 20 | **PASS with bounded extreme-state limitation.** Native slider confirmed 20; host radius also queried as 20px. Markdown/NN corners, long Reading scroll to final section, scrollbar travel and Graph controls observed. No blocked content/control, unusable scrollbar or unacceptable square-child protrusion found in inspected states. Large curvature consumes corner pixels inside existing native overflow; this is not certification of every overlay or text-selection position against the curve. No overflow fix added. |
| Left/right Markdown | **PASS.** Two real Markdown panes; both frames continuous and native split separation retained. |
| Top/bottom Markdown | **PASS.** Two real Markdown panes; horizontal divider dragged from about y387 to y552. |
| Nested | **PASS.** Left one plus right top/bottom; horizontal divider moved about y529→686→386. No extra margin/padding or duplicated frame observed. |
| Narrow / resize | **PASS.** Vertical divider moved about x721→1048, leaving roughly 353px right panes. Text/quote/callout/table wrap; scrollbar and controls usable. Graph/NN external divider also moved about x724→947 and x944→421; Graph narrow pane remained usable. Missed first drag hit positions are not counted as successes. |
| Geometry | **PASS.** Three same-state Card/f25 pairs compare equal for recorded rects, gap, dividers, overflow and relevant scroll-owner metrics; details below. Different viewport sessions are not compared against one another. |
| Stacked | **PASS, formal gate.** Actual ordinary→stacked→horizontal scroll→ordinary. Vertical strips usable; click NN changes active leaf. Stacked Markdown and NN both outline none/0px, radius 0. Horizontal scrollLeft sampled 473.3333, scrollWidth 1480/clientWidth 1007; visible horizontal movement observed. Return ordinary has no stacked group, solid neutral outline/radius 8 and no duplicate/stale frame. |
| Header hidden | **PASS.** Native Interface switch disabled then restored. With hidden headers, three visible hosts retained solid outline/radius 8; read-only header display `none`; bottom Markdown scrolled independently. Header-visible layout restored. No added pane Focus cue while hidden, an accepted existing limitation. |
| Source | **PASS.** Initial Dark fixture: Ctrl+Home, Down through each of two real empty lines, Up; Enter adds a line and Backspace restores it. Caret visible. No editing of the original two notes. |
| Live Preview | **PASS.** Initial Light multi-line selection, collapse, temporary x/Backspace editing and actual long scrolling; resumed Dark multi-line English selection/caret. Headings, links, code, quote, callout, table, tags and highlight smoke retained. |
| Reading | **PASS.** Resolved P42D Target link opened and native Back returned to Main with scroll restoration. Width 500 and 700 set through real sliders; Dark Reading visibly changes centered content width. Native readable line length off expands content to available width; on restores bounded width. Scroll/long content and special blocks remain usable. Alt+Left did not navigate and is not counted as a successful Back action. |
| Core Graph | **PASS.** Ordinary main host at Radius 20 Light and Radius 8 Dark. Actual wheel zoom, canvas pan, filter-panel expansion, split resize and node click opening Fixture01-1. Controls remain within their native panel; no Graph-specific styling. |
| Focus | **PASS.** Actual Markdown↔Markdown, Markdown↔Graph and Markdown↔NN activation. Header Accent moves; inactive header neutral, outer host stays neutral. Graph line is thin at the sampled scale, visibly clear after resize; final computed evidence below confirms the actual border, not only a custom property. |
| Phase 2 / 3 smoke | **PASS for smoke scope.** Typography, headings, links/tags/yellow highlight, quote/code/callout/table; ordinary tab switching, Sidebar outline/bookmarks, navigation/note opening, Ribbon commands, Status Bar counts, split resize and scrolling. No complete historical P2/P3 suite, Tab accessibility or platform certification is claimed. |

## Notebook Navigator compatibility

| Context | Result |
| --- | --- |
| Sidebar | **PASS.** Installed 3.4.3, tutorial dismissed with Later. Read-only host evidence: main=false, Card selector=false, outline none/radius 0. Narrow list and expanded dual-column mode; external divider342→742, internal handle245→355; Folder01, click note and Down keyboard navigation open notes. Untagged74 list actually scrolls without moving editor; Light/Dark basic readability checked. |
| Ordinary main host | **PASS.** User moved NN into main; native splits give Markdown+NN. Both host shells match Card, Sidebar hosts do not. Hidden NN tab retains zero rect. Internal navigation/list/divider do not acquire Card; no blocking clipping/conflict with selected backgrounds or divider. Light internal resize1814→1905 succeeded; main 74-note list independently scrolled (04/03 rows→06/05 while Markdown stays put). Narrow NN switches to supported navigation/list presentation. Dark ordinary and stacked UI inspected. |
| Interactions | Folder navigation, file/list rows, selected row, Down navigation, independent scrolling, internal/external resize and note opening/switching **PASS**. Clicking NN notes reused the Markdown pane while retaining NN. |
| Drag/drop | **UNVERIFIED, non-blocking coverage limitation.** Two safe fixture drag attempts did not confirm a move; files remained in Folder01. Not a PASS and not evidence of a Card-caused failure; no DOM hack or plugin repair attempted. |
| Public variables | Current baseline inheritance observed only. **No compatibility CSS required for the tested scope.** No `--nn-theme-*` mapping, source edits or plugin-specific Fusion CSS added. |

## Geometry evidence

Each pair used the same layout, mode, settings and scroll content. Comparison removes only painter fields from shell style, preserving shell rect and overflow; it compares the remaining recorded data exactly. All three comparisons returned true. Baseline samples were accepted only after fresh output confirmed outline none and radius 0; stale solid output was discarded.

| Pair | Viewport / visible hosts `[x,y,w,h]` | Header / view-content | Divider / gap / scroll owner |
| --- | --- | --- | --- |
| Single Source, Dark, Radius8 | 2560×1439; shell `[344,40,2216,1399]` | Header h38.921875; content `[344,78.921875,2216,1360.078125]` | Gap4px; no visible split divider. `.cm-scroller`: clientHeight1360, scrollHeight6678, overflow auto, same rect. |
| Markdown+NN, Light | 2560×1439; `[743.5,40,756.25,1399]`, `[1503.75,40,756.25,1399]`; hidden NN `[0,0,0,0]` | Each header h38.921875, content h1360.078125 | Vertical handle `[1496.75,0,3,1439]`; gap4px. Reading scroll owner clientHeight/scrollHeight1360/1360, auto. NN content retains auto overflow; internal scrolling separately exercised. |
| Nested Markdown, Dark, Radius8 | 1707×1066; left `[44,40,679.6666870117188,1026]`; right-top `[727.6666870117188,40,679.6666870117188,349]`; right-bottom `[727.6666870117188,433,679.6666870117188,633]` | Header heights38.520835876464844 /35.94791793823242 /37.65625; content heights987.4791870117188 /313.0520935058594 /595.34375; all rects exactly equal in pair | Root/nested gap4px. Handles `[720.6666870117188,0,3,1066]`, `[727.6666870117188,386,679.6666870117188,3]`. Reading owners clientHeight/scrollHeight987/6122,313/6107,595/6122; all auto, equal. |

Root/installed artifact was restored to Card after each f25 comparison. The resumed viewport differs from the initial session; this is recorded, not interpreted as a Card layout difference. At the resumed display scale a specified 1px outline/header can compute to 0.666667px; same-state pair equality is the relevant geometry check.

Final Graph-active sample, header visible:

```text
Markdown inactive: border-bottom 0.666667px solid rgb(57,56,63)
Graph mod-active: border-bottom 0.666667px solid rgb(185,161,255)
Both host outline colors: rgb(57,56,63)
```

A provisional visual concern about Graph Focus was withdrawn after fresh full output and resize showed the actual Accent border. No Focus defect or fix is claimed. Console input/state staleness and occasional window restore-to-small behavior were handled by re-observation; erroneous unsubmitted text was replaced before query execution. They are automation observations, not CSS regressions.

## Cleanup and validation

- Closed the independent Vault and DevTools; verified no Obsidian process before filesystem restoration.
- Archived end-of-run config and 74 fixture notes under `work/p42d-backup/post-qa-20261021/`; removed `P42D-Fixtures` from the Vault. Original `Preset Acceptance.md` and `QA Target.md` SHA256 match the pre-test manifest.
- Restored `.obsidian` from the pre-test backup **except the approved installed Card theme.css**. All other backup files compared by hash with no mismatch. This distinction is intentional: the old backup contained an earlier Preset artifact and must not overwrite the tested Card.
- Appearance restored Dark/font16/theme Fusion; Style Settings data `{}` restores Radius8/width700/line-height1.7/Accent#6750a4. Original plugin enable list contains only Style Settings; test NN installation was removed with config restoration and retained in the local QA archive. No daily Vault operation.
- Final root and installed theme.css retain the matching SHA256 above. Repository `src`, `settings`, `scripts`, `theme.css`, manifest and DECISIONS remain unchanged from935c8ed.
- `npm run check`: PASS in existing isolated `work/p42d-check` (21 sources). Initial sandbox execution could not write that external copy; normal approved execution succeeded. All26 tracked build inputs match the real repo byte-for-byte; normalized generated CSS equals root. No rebuild of real repo artifact.
- `git diff --check`: PASS before the documentation commit. Only this report, CURRENT_STATUS, AI_HANDOFF and TASKS are intended changes. No PR or main merge.
- GitHub Connector independently confirmed implementation935c8ed. Live `git ls-remote` confirmed Card branch935c8ed before documentation changes; tracking alone was not used as remote proof. QA commit/push hash is obtained from Git after commit, not embedded as a self-referential hash here.

Local raw evidence: `work/p42d-evidence/measurements.json`, `geometry-query.txt`, `nn-sidebar-dom.txt`, `nn-main-dom.txt`, initial observations and resumed nested/stacked/Focus records. No saved screenshot artifact exists; visual observations used live screenshots. Tables and samples above preserve the material acceptance facts in Git.

## Remaining limitations and next action

NN drag/drop is unverified; Radius20 inspection is bounded, not every overlay/selection-at-curve combination. Header-hidden Focus has no extra cue by accepted contract. Pop-outs, RTL, other DPI/scales/platforms, all community plugins and accessibility/screen-reader audit are not certified. Existing Phase2/3 N/A items remain unchanged. No new blocker requiring clipping, geometry changes or compatibility CSS was found.

Return this bounded Desktop PASS to Chat for the subsequent acceptance/promotion decision. Do not expand Card, change implementation/DECISIONS, reopen Preset, create a PR or merge automatically.
