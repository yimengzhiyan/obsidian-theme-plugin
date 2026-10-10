# P2.7 — Phase 2 Final Desktop QA / Regression

## Status / Frozen Scope

Round 1: **NEEDS FIX**. Chat classified ISSUE-01 as BLOCKER and approved a minimal Live Preview integration exception; fix implemented / pending Chat implementation review and targeted Desktop verification. Automated validation does not imply Desktop PASS. Initial tested CSS was the merged P2.2–P2.6 state, based on main `f00e67108bece2b0a4cede9a687c7ee2da7cbc6e`; retest must install the current fix artifact and record branch/commit and matching hashes.

Freeze all other CSS, Semantic Tokens, Style Settings, runtime/plugin behavior and build tooling. The sole approved exception is two foreground-only Live Preview Blockquote Tag rules and their dedicated strict check. Other potential visual issues are recorded only, not fixed without real Desktop evidence and Chat review.

## Artifact / Environment Gate

- Branch: pending (expected `codex/p2-7-phase2-regression`)
- Tested commit: pending; record the exact installed revision
- Root theme.css SHA-256: pending
- Installed theme.css SHA-256: pending
- Hash match: pending
- Obsidian version (Round 1): 1.14.4
- Installer version (Round 1): 1.10.6
- Windows version/build (Round 1): 25H2 Build 26200.8737
- Style Settings version (Round 1): 1.0.9
- Theme: pending

Install root `manifest.json` and `theme.css`, not the old V0.1 release package. Require correct branch/commit and **root theme.css == installed theme.css** on the Desktop test machine; otherwise **FAIL — wrong artifact**. Do not require an old milestone hash or another machine's hash. Record actual versions at test time and recheck artifact after QA.

## Accepted Historical Differences

These are not new blockers unless behavior deteriorates beyond the accepted state:

- P2.2: Source visual rhythm may differ from Reading. Native caret/keyboard navigation takes priority. Do not reintroduce Source blank-line normalization.
- P2.3: Source unresolved-link presentation may differ from rendered views; Reading unresolved dotted decoration may be mainly hover-visible.
- P2.4: Editing/Reading syntax palettes may differ if both remain readable; table row hover may be subtle/view-dependent; native table controls may be N/A when not exposed.
- P2.5: Callout semantic colors/icons/aliases/blending/folding remain native. Accent must not flatten semantic colors.
- P2.6: Folder-only weight selector is intentionally unnecessary; native chevrons, indentation and structure provide hierarchy. Drag/drop may remain N/A/non-blocking without a reliable real move; do not claim a successful drop.

## Integrated Test Note

Create a temporary Vault note, not repository implementation. Create an actual `Existing note` target and leave `Missing note` unresolved. Preserve the single and double blank lines below for Source navigation.

````markdown
# H1 Heading

Normal paragraph with [[Existing note]], [[Missing note]],
[external link](https://example.com), #tag and ==highlight==.

## H2 with [[Existing note]] and [external link](https://example.com)

**Bold text**, *italic text*,
**[[Existing note|Bold internal link]]**,
*[external italic link](https://example.com)*,
and inline `const x = 1;`.

> Blockquote with **bold**, *italic*, `code`,
> [[Existing note]], #tag and ==highlight==.
>
> > Nested quote.

> [!note] Integrated Callout
> Callout with **bold**, *italic*, `inline code`,
> [[Existing note]], [external](https://example.com),
> ==highlight== and #tag.

> [!warning]+ Folding Callout
> Expanded content.

```js
const value = 42;

function test() {
  return value;
}
```

| Item | Content | Status |
| --- | --- | --- |
| Links | [[Existing note]] | Active |
| Style | `code` ==highlight== #tag | Review |
| Long | Long table content used to verify wrapping behavior | Done |

Paragraph before heading.

## Heading after paragraph

## Consecutive H2

### Consecutive H3

#### H4 Heading

##### H5 Heading

###### H6 Heading

Paragraph A.

Paragraph B.


Paragraph C.

#project/theme #中文标签

==Normal highlight== **==Bold highlight==** *==Italic highlight==*

Inline 中文 `变量 = 1` English.
````

Supplement with long code lines, nested and consecutive Callouts, a long Chinese/English Callout title, a title-only Callout and note/warning/error/success/question/quote types. Reuse the [P2.5](CALLOUT_TEST.md) and [P2.6](NAVIGATION_FILE_EXPLORER_TEST.md) fixtures as needed, including long English/Chinese/mixed filenames, long folder names, four levels and rename cases.

## View / Mode Matrix

Record each result as PASS / ISSUE / justified N/A, with actual setting values. Cover Light and Dark, Live Preview, Source and Reading. Rendered views must remain readable; Source must remain editable. Previously accepted native differences do not require pixel equality.

- [ ] Light global: background hierarchy, text contrast, sidebar/editor/rendered readability; no disappearing components or fixed-purple residue
- [ ] Dark global: same observations
- [ ] Workspace smoke: active tab, inactive-tab hover, left sidebar, right sidebar if available, Ribbon, Status Bar, Scrollbar, divider/border; no aggregate regression
- [ ] Constrained window/sidebar: navigation wrapping, long Callout title, table, code block, headings, links and tabs; no obvious layout break (no responsive redesign)

## Existing Four Style Settings — Integrated Gates

Record actual tested values and restore original settings after QA. Do not add settings.

- [ ] Accent: red `#dc2626`, blue `#2563eb`, green `#16a34a`; active tab, selected/active file, Blockquote, Tag, native Accent controls, active border/indicator follow the setting
- [ ] Accent separation: Highlight stays yellow; Callout semantic types stay distinct; normal navigation text, indentation guide and chevrons stay neutral; no fixed purple, semantic flattening or Rainbow Folder
- [ ] Radius: small/medium/large (record numeric values); Callout, tabs and existing radius consumers follow where designed, no residue or broken clipping; no new File Explorer radius
- [ ] Content Width: at least two distinct values, e.g. 500/700; Reading width changes and paragraphs/headings/table/Callout/code remain usable; no demand for identical block widths
- [ ] Line Height: 1.5/2.0; ordinary paragraphs, paragraph→heading, consecutive headings, links/tags/highlight, inline code, Blockquote, Callout and table remain readable; Source editing usable
- [ ] Existing settings persist after restart; no `null.clone` console error

## Component Regression Gates

### P2.2 Core Typography

- [ ] H1–H6 hierarchy, paragraph spacing, paragraph→heading, consecutive headings, bold/italic in Live Preview and Reading
- [ ] Source raw editing: caret, Up/Down, Enter, Backspace; **every real single/double blank Markdown line independently reachable**
- [ ] User-selected text/interface/monospace fonts remain respected; no forced font introduced

### P2.3 Links / Tags / Highlight

- [ ] Resolved/unresolved internal links and hover; external normal/hover
- [ ] Links in headings, bold/italic, Blockquote, Callout and table where applicable
- [ ] Normal/nested/Chinese tags readable and follow Accent
- [ ] Highlight normal/bold/italic readable, remains yellow independently of Accent; selection usable

### P2.4 Code / Quote / Table

- [ ] Inline code readable, mixed Chinese/English, user monospace respected
- [ ] Code block Light/Dark readability, retained blank lines, Source editing and long-line native behavior; both syntax palettes readable
- [ ] Blockquote Accent-derived background/3px left border, nested quote and rich inline content usable
- [ ] Table border/header, long-cell wrapping, inline code/highlight/link/tag in Light/Dark and Editing/Reading; exposed native controls usable or justified N/A

### P2.5 Callout

- [ ] Note/warning/error/success/question/quote semantic colors distinct and icons intact
- [ ] Border/radius, long title, title-only, folding, rich content, nested and consecutive Callouts usable
- [ ] Accent changes do not flatten Callout semantics; raw Source syntax editable

### P2.6 Navigation / File Explorer

- [ ] Normal file/folder readability, active/hover, long English/Chinese/mixed filenames and long folder wrapping
- [ ] Rename, four-level hierarchy, indentation guide, expanded/collapsed chevrons
- [ ] Folder/file distinction still clear without folder-specific selector; no Rainbow Folder
- [ ] File Explorer controls usable; optional drag/drop only reported PASS if an actual move is confirmed, otherwise justified N/A
- [ ] Backlinks/Outlinks/Search: readable, usable wrapping, no severe density regression; justified N/A if unavailable

## Cross-component Composition — Required

- [ ] Heading + links
- [ ] Bold/italic + links
- [ ] Blockquote + links/tags/highlight/code
- [ ] Callout + links/tags/highlight/code
- [ ] Table + links/tags/highlight/code
- [ ] Narrow sidebar + long navigation names
- [ ] High Line Height + heading spacing
- [ ] Small Content Width + table/Callout/code
- [ ] Accent changes + Tag/Blockquote/Nav alongside semantic Callout/Highlight

Passing components individually is insufficient: combinations must not break one another.

## No Scope Creep / Exit Gate

All results below remain pending until real Desktop QA. Required final PASS gate:

1. Correct artifact / hash match
2. Build PASS
3. Check PASS
4. Light global PASS
5. Dark global PASS
6. Workspace smoke PASS
7. Red Accent PASS
8. Blue Accent PASS
9. Green Accent PASS
10. No fixed purple residue
11. Radius integration PASS
12. Content Width integration PASS
13. Line Height 1.5 PASS
14. Line Height 2.0 PASS
15. P2.2 typography PASS
16. Source keyboard / real blank-line navigation PASS
17. P2.3 Links PASS
18. Tags PASS
19. Highlight PASS
20. P2.4 Code PASS
21. Blockquote PASS
22. Table PASS
23. P2.5 Callout PASS
24. Semantic Callout colors remain distinct
25. P2.6 Navigation PASS
26. Folder/file distinction remains clear
27. No Rainbow Folder
28. Backlinks / Outlinks / Search smoke PASS or justified N/A
29. Cross-component composition PASS
30. Constrained-space smoke PASS
31. No new blocker
32. No deferred feature accidentally implemented

Auto Hide, Card Layout, Focus Mode, Canvas/Graph redesign, advanced animation, Preset System, Seamless Embed, Advanced Rainbow Folder and Companion Plugin remain deferred. P2.7 does not implement these features.

## Evidence / NEEDS FIX Policy

Only real Desktop evidence can trigger a fix. For each ISSUE record mode, view, actual settings, exact content/component, reproduction steps, expected/actual behavior, and whether it is an accepted historical difference or a new regression. Desktop testing must not modify CSS. Chat determines real regression vs accepted native difference vs out-of-scope enhancement; aesthetic improvement alone is not an exit blocker.

### Issue Template

- Mode / view / settings: pending
- Content / reproduction: pending
- Expected / actual: pending
- Evidence / historical comparison: pending
- Chat classification / blocking decision: pending

## Round 1 Evidence / ISSUE-01

Round 1 Desktop QA: **NEEDS FIX**. Chat classification: **BLOCKER — real cross-component regression** (P2.3 Tag × P2.4 Blockquote × Live Preview), not an accepted historical view difference.

Reproduction: Dark / Live Preview / Accent `#16a34a`, using the ordinary Blockquote with `#tag` in the integrated note. Expected: Tag foreground follows Accent. Actual:

- Normal Tag `.cm-hashtag`: computed color `rgb(22, 163, 74)`.
- Blockquote Tag `.cm-hashtag.cm-quote.cm-quote-1`, parent `.cm-line.HyperMD-quote.HyperMD-quote-1`: computed color `rgb(233, 231, 237)`.
- `--tag-color` inside both: `#16a34a`; background in both: Accent-derived and correct.
- Reading Blockquote Tag: PASS. Callout Tag: PASS.
- Same foreground conflict also observed in Light with blue Accent.

Root cause interpretation: Live Preview quote syntax color wins over Tag foreground on a span carrying both quote and hashtag classes. Public variables propagate correctly, but cannot alone resolve the overlapping property specificity.

P2.7 docs commit `72538caa364811a5928e7ea508661325f25d60a7` introduced no CSS change. Integrated regression exposed a pre-existing cross-component interaction in the merged Phase 2 artifact; it was not introduced by test-plan documentation.

Approved fix: `src/editor/live-preview-composition.css`, exactly two Live Preview-only rules restoring `color: var(--tag-color)` and hover `color: var(--tag-color-hover)`. No Source/Reading overrides, backgrounds/borders, new Tokens or Settings; historical component contracts unchanged.

### Partial Gates — Still Pending

- Inactive tab hover
- Highlight text selection
- Code Block long-line behavior
- Code Block actual Source editing
- Main-window constrained-space smoke

These were not fully verified in Round 1 and are not ISSUE-01 itself. Do not mark them PASS; complete them during targeted Desktop exit verification.

### CRLF/LF Observation

Desktop independent-copy check initially failed freshness comparison because of CRLF/LF rebuilding, not semantic CSS differences. Normalized text before/after rebuild was identical; original repository and installed artifact remained unchanged. Chat classification: **non-blocking platform/tooling line-ending observation**. Build/check line-ending behavior is unchanged; cross-platform tooling hardening may be considered separately.

### Targeted Desktop Verification — Pending

- Install correct fix branch/commit; root SHA == installed SHA.
- Ordinary Blockquote Tag normal/hover foreground follows current Tag variables in Light/Dark with red/blue/green Accent; background/border remain unchanged.
- Normal paragraph, Reading Blockquote and Callout Tags retain previous behavior; non-Tag quote text stays normal.
- Source native editing, semantic Callout/Highlight and other component styling do not regress.
- Complete all five partial gates above and record evidence; classify any new issue through Chat, not ad hoc CSS tuning.

Automated fix validation: Build / Check / diff-check PASS; dedicated exact two-rule contract, 20 in-memory negative variants rejected; six historical contract functions byte-for-byte unchanged. Desktop fix verification and Phase 2 exit decision remain pending.

## Restoration / Final Decision

- Original settings / sidebar width restored: pending
- Temporary Vault data cleanup: pending
- Final artifact recheck: pending
- Chat test-plan / ISSUE classification Review: completed; ISSUE-01 BLOCKER, minimal fix approved
- Real Desktop QA: Round 1 NEEDS FIX; targeted fix verification pending
- Phase 2 exit decision: pending

Allowed outcomes after evidence review: **PASS — Phase 2 exit gate satisfied**; **NEEDS FIX — blocking regression found**; or **CONDITIONAL / N/A** only for approved non-blocking items. No Desktop PASS is claimed now.

Workflow: Chat Review → real Desktop QA → fix only with blocking evidence → final QA docs → PR → final Review / Merge.
