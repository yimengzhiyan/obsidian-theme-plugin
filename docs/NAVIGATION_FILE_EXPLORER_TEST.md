# P2.6 Navigation / File Explorer Desktop Test

## Status / Environment

COMPLETE / Chat Review PASS / Desktop QA PASS / pending PR merge. Automated PASS and Desktop PASS are independent; Desktop results below were supplied by the maintainer, not inferred from automated checks.

- Obsidian: 1.14.4; Installer: 1.10.6
- OS / Windows build: Windows 25H2 Build 26200.8737
- Style Settings version: 1.0.9
- Theme: Obsidian Fusion Theme
- Tested branch: `codex/p2-6-navigation-file-explorer`
- Tested implementation commit: `2945b00b21718b0bf0bc517ecc6fb317e03af6d1`
- Root theme.css SHA-256: `86616AB8CBACEDC74E4EEF57931776A2692F0F3F917E4D06C6E8EFDA3408A29B`
- Installed theme.css SHA-256: `86616AB8CBACEDC74E4EEF57931776A2692F0F3F917E4D06C6E8EFDA3408A29B`
- Root / installed hash match: YES; checked again at the end of QA and remained identical

Install root `manifest.json` / generated `theme.css`. Foundation release package remains V0.1 baseline. Require correct branch / commit and root hash == installed hash on the test machine, not a fixed hash from another machine.

## Contract / Boundary

13 Navigation public variables only: 0.9em normal item typography, normal hover / medium active weight, xs/sm item and parent padding, md/xs children indentation, normal white-space, 1px neutral guide, faint/muted native chevron colors.

Existing Foundation hover / active / selected color and background mappings stay in `src/workspace/sidebar.css`, exactly once. No new Tokens / Settings / custom selectors. Navigation public variables may also affect other navigation surfaces; smoke-test them below.

Folder-only weight is intentionally unimplemented: real Desktop QA confirmed sufficient folder/file distinction without a selector. No Rainbow Folder, per-folder/level/file-type colors, icons/SVG replacements, width/ellipsis hacks, animations, drag/drop redesign or workspace layout changes. No navigation-heading or highlighted-color override. P2.7 not started.

Official reference: [Navigation public variables](https://raw.githubusercontent.com/obsidianmd/obsidian-developer-docs/main/en/Reference/CSS%20variables/Components/Navigation.md).

## Test Vault Tree

Create temporarily in a test Vault, not in this repository; remove test data when finished if desired.

```text
P2.6 Navigation QA/
├── 01 Short/
│   ├── short.md
│   └── another-note.md
├── 02 中文文件夹/
│   ├── 中文文件.md
│   └── 中文 English mixed filename.md
├── 03 Very Long Folder Name Used To Verify Wrapping Behavior/
│   ├── A very long English file name used to verify navigation wrapping behavior.md
│   ├── 非常非常长的中文文件名称用于测试文件浏览器多行换行.md
│   └── 中文 English mixed very long filename 用于测试.md
└── 04 Deep/
    └── Level 2/
        └── Level 3/
            └── Level 4/
                └── deep-file.md
```

Also prepare empty folder, one-child folder and many-sibling folder.

## Typography / Density / State

The unchecked procedure boxes below are retained as a reusable test matrix, not pending results; completed outcomes appear under Observations / Final Result. Run in Light / Dark, normal and narrow sidebar widths.

- [ ] File / folder text 0.9em / normal weight readable in Chinese, English and mixed text; not too small or dense
- [ ] Item / parent padding xs/sm (~4px vertical / 8px horizontal at 16px root) compact but comfortable; click targets and multi-line items usable
- [ ] Open different Markdown files: existing active background/text readable, medium weight acceptable, no layout jump or fixed purple residue
- [ ] Hover file / folder / active file / deep item: readable background/text, no new bolding or layout shift; active-file hover still understandable

## Wrapping / Rename

- [ ] Narrow sidebar: long English, Chinese, mixed filenames and long folder names wrap naturally
- [ ] No unusable clipping or horizontal layout break; second/third lines readable
- [ ] Wrapped item click target correct; active background sensibly covers item
- [ ] Rename short file / long wrapped file / folder: field usable, text selectable, Enter and Esc/cancel work
- [ ] Rename has no wrap/padding regression or text hidden behind collapse chevron

Do not alter rename CSS, width/max-width, overflow, text-indent, line-clamp or custom ellipsis selectors.

## Hierarchy / Guide / Chevron

- [ ] Four-level nesting understandable; each offset clear, not excessive; narrow sidebar usable
- [ ] Children md padding-start / xs margin-start (~16px / 4px) convey hierarchy
- [ ] Indentation guide 1px visible in Light / Dark, subtle, not confused with active indicator, no excessive deep-level noise
- [ ] Expanded / collapsed and nested expanded / collapsed chevrons visible and clickable
- [ ] Collapsed chevron slightly clearer; neutral, not Accent-colored; icon unchanged, no animation regression
- [ ] Folder / file hierarchy sufficiently clear using chevron, nesting, guide and structure without folder-only bold
- [ ] Empty / one-child / many-sibling folders have consistent spacing, no strange parent padding or oversized gaps

Hierarchy decision gate: if PASS, retain 0 selectors. If folders and files are genuinely too difficult to distinguish, record evidence and FAIL; do not modify CSS from Desktop QA. Chat Review must decide whether a minimal folder-only selector is warranted.

## Native Interaction / Other Navigation

- [ ] Drag a disposable test file to a test folder if convenient: native target visible, drop works, item readable, no theme regression
- Drag/drop may be N/A if unavailable; not automatically a blocker. `--nav-item-color-highlighted` remains untouched
- [ ] New note / New folder / Sort / Collapse all or related visible controls remain usable
- [ ] Backlinks / Outlinks / Search results or other available navigation lists readable, not overly dense, no severe wrapping regression

Do not add surface-specific selectors or redesign navigation headings / controls.

## Accent / Radius / Prior-Milestone Smoke

- [ ] Red `#dc2626`, blue `#2563eb`, green `#16a34a`: active/selected file and existing Accent controls, Blockquote, Tag follow Foundation Accent chain
- [ ] Normal file/folder text, folder levels, indentation guide and chevrons stay neutral; no Rainbow behavior
- [ ] Existing native/theme radius behavior unchanged; no new File Explorer radius declaration/setting
- [ ] P2.2 H1–H6 / paragraph spacing / Source blank-line navigation
- [ ] P2.3 links / Tag Accent / yellow Highlight
- [ ] P2.4 Code / Blockquote / Table
- [ ] P2.5 Callout / folding / semantic colors

Restore original settings after tests; record any restoration performed. These are quick local regression checks, not P2.7 total regression.

## Automated Contract

`assertNavigationFileExplorerContract()` checks one body and exactly 13 unique approved names/values. It rejects selectors/pseudo-elements, !important, colors, Tokens/Settings, state-color duplication, headings/highlighted color, animations, property styling, Rainbow and icon overrides.

`assertFoundationNavigationMappings()` checks seven original sidebar mappings exactly once with exact values; sidebar source is unchanged. P2.2–P2.5 contract functions are byte-for-byte unchanged. Build / Check / diff-check PASS; 36 in-memory negative variants rejected (34 navigation-source + 2 Foundation-sidebar variants), covering all 32 requested categories including Foundation duplication/hover override. Independent real Desktop QA is PASS as recorded below.

## Desktop PASS Gate

- [ ] 1. Artifact hash match
- [ ] 2. File/folder text readable
- [ ] 3. 0.9em size acceptable
- [ ] 4. Compact padding acceptable
- [ ] 5. Active state readable
- [ ] 6. Active weight acceptable
- [ ] 7. Hover no layout shift
- [ ] 8. Long English name wraps
- [ ] 9. Long Chinese name wraps
- [ ] 10. Mixed name wraps
- [ ] 11. Folder name wraps
- [ ] 12. Rename works
- [ ] 13. Four-level hierarchy understandable
- [ ] 14. Indentation guide readable
- [ ] 15. Collapse chevron readable
- [ ] 16. Folder/file hierarchy clear without selector
- [ ] 17. Empty/many-sibling structure usable
- [ ] 18. Drag/drop PASS or N/A
- [ ] 19. File Explorer controls regression PASS
- [ ] 20. Other navigation smoke PASS
- [ ] 21. Accent propagation correct
- [ ] 22. No Rainbow Folder behavior
- [ ] 23. P2.2 regression PASS
- [ ] 24. P2.3 regression PASS
- [ ] 25. P2.4 regression PASS
- [ ] 26. P2.5 regression PASS

## Observations / Final Result

P2.6 Navigation / File Explorer Desktop QA: **PASS**. No blocking theme issue found. The checklist above is retained as the test procedure; final outcomes are recorded below. Only drag/drop is N/A / non-blocking. Next: P2.6 PR review / merge; P2.7 not started.

### Typography / Density / State — PASS

File/folder text in Light / Dark, Chinese / English / mixed text and 0.9em readability: PASS. Visual size acceptable; computed px was not separately measured. Item padding / density: PASS, compact but usable, comfortable click targets and no excessively compressed multi-line names.

Active file state: PASS; background and text readable, no fixed purple residue. Active medium weight: PASS, visually slightly stronger than normal items; implementation maps active weight to medium. Hover file / folder / active item and hover layout stability: PASS; no sudden bolding or wrapping/layout jump observed.

### Wrapping / Rename — PASS

Long English, Chinese and mixed filenames and long folder names: PASS. Narrow sidebar wrapping remained usable, with no unusable clipping, correct click targets and no folder text/chevron overlap. Wrapped active background: PASS, covers the full multi-line item sensibly.

Rename short file / long wrapped file / folder: PASS. Enter confirmation, Esc cancel and selection / caret: PASS. No chevron/input collision observed.

### Hierarchy / Guide / Chevron — PASS

Four-level hierarchy, deep-file readability, indentation amount and narrow-sidebar usability: PASS. Indentation guides in Light / Dark: PASS, visible but subtle, not confused with active indication and without excessive deep-level noise. Expanded / collapsed chevrons, clickability and neutrality: PASS; no icon replacement.

Folder vs file distinction: PASS. Collapse chevrons, indentation, child structure and guides provide sufficient hierarchy. Folder-only selector necessary: **NO**. Decision: retain **0 custom selectors**, no folder-only weight rule.

Empty / one-child / many-sibling folders: PASS. Twelve sibling files remained consistently spaced and easy to scan, without oversized gaps or spacing collapse.

### Native Interaction / Other Navigation

Drag/drop: **N/A / non-blocking** according to the approved QA gate. Automated drag/drop did not complete an actual move; the attempted action was cancelled and the file remained in its original location. No successful drop is claimed.

New Note / New Folder / Sort / Collapse All: PASS. Z–A sorting worked and was restored to A–Z after QA. Backlinks / Outlinks / Search / other navigation: PASS; groups, targets, long paths and result content remained readable, with usable wrapping.

### Accent / Rainbow / Radius — PASS

Red `#dc2626`, blue `#2563eb` and green `#16a34a` Accent: PASS. Active / selected file state follows the existing Accent chain. Normal file/folder names, indentation guides and chevrons remain neutral; no fixed purple residue.

No Rainbow Folder behavior: PASS. No per-folder or level colors, hue rotation, Accent-colored hierarchy or file-type colors. Advanced Rainbow Folder remains deferred. Radius regression: PASS; no new File Explorer radius redesign observed.

### P2.2–P2.5 Regression — PASS

- P2.2: headings / paragraph behavior normal; Source double blank lines remained independently reachable with Up/Down navigation.
- P2.3: internal / external links normal; Tag follows Accent; Highlight remains yellow.
- P2.4: Inline Code, Code Block including blank lines, Blockquote and Table: PASS.
- P2.5: normal Callout, Warning / Error semantic colors, Radius and folding: PASS.

### Restoration / Cleanup — PASS

Settings restored to Dark mode, Accent `#dc2626`, Radius `20`, body text `16px`, Content Width `500`, Line Height `2.0` and original sidebar width. Settings restoration: PASS.

Temporary P2.6 Navigation QA folder was removed from the test Vault after testing. Existing P2.2–P2.5 QA note hashes remained unchanged; this does not refer to repository QA documents being edited by Desktop.

All Desktop exit gates are satisfied, including the approved non-blocking drag/drop N/A. Implementation complete / Chat Review PASS / Desktop QA PASS / ready for PR merge.
