# P2.4 Code / Quote / Table Desktop Test

## Status / Environment

COMPLETE / Chat Review PASS / Desktop QA PASS / pending PR merge. Results below record maintainer-provided real Desktop QA, not an inference from automated checks.

- Obsidian version: 1.13.7
- Installer version: 1.10.6
- OS / Windows build: Windows 25H2 Build 26200.8737
- Style Settings version: 1.0.9
- Theme version: not separately reported; tested artifact identified by commit and hash
- Tested branch: `codex/p2-4-code-quote-table`
- Tested commit: `56ec8599cd3c401e058ee80721d6af8980aa4fa4`
- Root theme.css SHA-256: `CED1A21CA5131111AD39CA057B22D5BC0DBB72B6DEADDDA63738B6D8F836E335`
- Installed theme.css SHA-256: `CED1A21CA5131111AD39CA057B22D5BC0DBB72B6DEADDDA63738B6D8F836E335`
- Root / installed match: YES

Install root `manifest.json` / generated `theme.css`. The Foundation release package remains the V0.1 baseline. Compare root and installed hashes on the test machine, not with a fixed hash from another machine.

## Code

Run in Light / Dark × Live Preview / Source / Reading. Record native view differences rather than forcing pixel parity.

````markdown
Inline `const x = 1;` code inside a paragraph.

Inline 中文 `变量 = 1` English.

```js
// comment
const answer = 42;

function greet(name) {
  return `Hello ${name}`;
}
```

```python
# comment
value = 42

def greet(name):
    return f"Hello {name}"
```
````

- [x] Inline Code Light / Dark: PASS; Code Block Light / Dark: PASS
- [x] Background follows Theme Light / Dark; non-highlighted text readable
- [x] Live Preview syntax / Source syntax and raw editing / Reading syntax: PASS
- [x] User monospace font: PASS; temporary Courier New affected both inline code and code blocks, preserving the user override
- [x] `--code-size: 0.9em`: observed ~14.4px, PASS / readable
- [x] Code block blank lines: PASS, no collapse or compression
- [x] Long code lines: PASS, native wrapping retained, no layout regression

Editing / Reading native syntax-color differences observed; both remain readable, accepted. No syntax-color overrides or code white-space override.

## Blockquote

```markdown
> Simple blockquote.

> Multi-line blockquote
> with **bold**, *italic*, `inline code`,
> [[internal link]], [external link](https://example.com)
> and ==highlight== and #tag.

> Outer quote
>
> > Nested quote

> [!note]
> Callout regression check.
```

Run in Light / Dark × Live Preview / Source / Reading.

- [x] Blockquote Light / Dark: PASS; subtle Accent-derived background: PASS
- [x] Left border: PASS, observed 3px
- [x] Red / blue / green Accent propagation: PASS; border and background follow Accent, fixed-purple residue NONE
- [x] Text style: PASS, normal / not forced italic
- [x] Nested quote: PASS; hierarchy understandable, layered background readable
- [x] Bold / italic / inline code / internal link / external link / highlight / tag: PASS
- [x] Existing Callout regression: PASS; icon, title and content normal, not converted into a plain blockquote; no Callout redesign

## Table

```markdown
| Gene | Species | Description | Status |
| --- | --- | --- | --- |
| GhBEE3 | Cotton | Long descriptive text that should wrap naturally inside the cell | Active |
| Os01g01010 | Rice | `inline code` and ==highlight== | Review |
| AT1G01010 | Arabidopsis | [[Existing note]] and #tag | Done |
```

Run in Light / Dark × Live Preview / Reading; Source retains native raw Markdown editing.

- [x] Table border: PASS, observed 1px
- [x] Header background: PASS; weight: PASS, observed 600
- [x] Body text: PASS; 0.95em observed ~15.2px, readable
- [x] Line height 1.5: PASS, observed ~22.8px
- [x] Long cell wrapping: PASS
- [x] Vertical alignment: PASS; Reading visually middle-aligned, Live Preview differs slightly without abnormal misalignment
- [x] Header hover: PASS / subtle
- Row hover: no obvious full-row change observed; text contrast normal. Accepted native/public-variable view behavior, not a blocker
- [x] Embedded inline code / highlight / link / tag: PASS; highlight stays yellow, Accent pill normal
- [x] Text selection: PASS
- [x] Source raw editing: PASS; caret, ↑ / ↓, character editing and Undo normal
- Native cell selection: N/A — not presented in current test
- Drag handle: N/A — not presented
- Add row / column: N/A — not presented

Unavailable native editing controls are N/A rather than FAIL and do not block P2.4.

No zebra striping, selection / drag / add-control overrides, column max-width override, or responsive transformations.

## Quick Regression

- [x] P2.2 H1–H6: PASS
- [x] Live Preview paragraph spacing / Paragraph → H2: PASS
- [x] Source blank-line navigation: PASS
- [x] P2.3 resolved / external links: PASS
- [x] Tag Accent propagation: PASS
- [x] Highlight remains yellow: PASS
- [x] Existing note Callout regression: PASS

## Automated Contract

Strict single-body contract: all 22 approved public variables must occur exactly once with approved values. Foundation Code background / normal mappings are checked separately. P2.2 and P2.3 contracts remain unchanged.

In-memory negative validation: 24 variants rejected, covering all 20 requested categories plus separate rgb/hsl, margin/padding, animation/transition variants and an unapproved setting variable. Coverage includes selectors, !important, new Tokens, hard-coded colors, duplicated Foundation mappings, syntax / white-space overrides, italic quote, pseudo-elements, table zebra / selection / drag controls, Callout variables, missing / duplicate declarations, margin / padding, animation / transition. Build / Check / diff-check PASS; Desktop QA independently reported PASS above.

Public-variable references: [Code](https://raw.githubusercontent.com/obsidianmd/obsidian-developer-docs/main/en/Reference/CSS%20variables/Editor/Code.md), [Blockquote](https://raw.githubusercontent.com/obsidianmd/obsidian-developer-docs/main/en/Reference/CSS%20variables/Editor/Blockquote.md), [Table](https://raw.githubusercontent.com/obsidianmd/obsidian-developer-docs/main/en/Reference/CSS%20variables/Editor/Table.md).

## Observations / Issues

No blocking issue found. Accepted native differences: Editing / Reading syntax palettes differ while readable; row hover may be subtle or view-dependent; unavailable table cell-selection / drag / add controls are N/A, not theme regressions. No selector-based overrides required.

## Final Result

P2.4 Code / Quote / Table Desktop QA: PASS.

Final result: PASS. No blocking issue found. Next: create / review / merge P2.4 PR. P2.5 not started.
