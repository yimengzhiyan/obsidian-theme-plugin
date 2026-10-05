# P2.4 Code / Quote / Table Desktop Test

## Status / Environment

Implementation complete / pending Chat Review and Desktop QA. No Desktop PASS is inferred from automated checks.

- Obsidian version: pending
- Installer version: pending
- OS / Windows build: pending
- Style Settings version: pending
- Theme version: pending
- Tested branch: `codex/p2-4-code-quote-table`
- Tested commit: pending; record the exact implementation SHA used
- Root theme.css SHA-256: pending
- Installed theme.css SHA-256: pending
- Root / installed match: pending

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

- [ ] Inline code and Code Block readable in all views / modes
- [ ] Background follows Theme Light / Dark; non-highlighted text readable
- [ ] Native syntax colors remain readable
- [ ] User monospace font respected
- [ ] 0.9em not too small
- [ ] Code block blank lines retain normal geometry / navigation
- [ ] Long code lines retain native behavior

Accepted: Editing syntax palette != Reading syntax palette is not automatically a blocker if both remain readable. No syntax overrides or code-white-space override are implemented.

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

- [ ] Subtle Accent background
- [ ] Visible 3px left border; Accent changes propagate
- [ ] Normal text style, not forced italic
- [ ] Readable text and understandable nested quote
- [ ] Links / tags / inline code / highlight remain readable
- [ ] Native differences across views recorded
- [ ] Existing note Callout functional and readable (smoke test only, no redesign)

## Table

```markdown
| Gene | Species | Description | Status |
| --- | --- | --- | --- |
| GhBEE3 | Cotton | Long descriptive text that should wrap naturally inside the cell | Active |
| Os01g01010 | Rice | `inline code` and ==highlight== | Review |
| AT1G01010 | Arabidopsis | [[Existing note]] and #tag | Done |
```

Run in Light / Dark × Live Preview / Reading; Source retains native raw Markdown editing.

- [ ] Borders visible but not heavy
- [ ] Header background distinct; semibold header readable
- [ ] Body text readable; 0.95em not too small
- [ ] Long cell text wraps naturally; middle vertical alignment acceptable
- [ ] Row / header hover visible but subtle
- [ ] Inline code / highlight / links / tags inside cells work
- [ ] Source raw Markdown editing remains native
- [ ] Native cell selection works if visible
- [ ] Native drag handle works if visible
- [ ] Native add row / column controls work if visible

No zebra striping, selection / drag / add-control overrides, column max-width override, or responsive transformations.

## Quick Regression

- [ ] P2.2 H1–H6
- [ ] Live Preview paragraph / heading spacing
- [ ] Source blank-line ↑ / ↓ navigation
- [ ] P2.3 resolved / external links
- [ ] Tags follow Accent
- [ ] Highlight remains yellow
- [ ] Existing note Callout remains readable / functional

## Automated Contract

Strict single-body contract: all 22 approved public variables must occur exactly once with approved values. Foundation Code background / normal mappings are checked separately. P2.2 and P2.3 contracts remain unchanged.

In-memory negative validation: 24 variants rejected, covering all 20 requested categories plus separate rgb/hsl, margin/padding, animation/transition variants and an unapproved setting variable. Coverage includes selectors, !important, new Tokens, hard-coded colors, duplicated Foundation mappings, syntax / white-space overrides, italic quote, pseudo-elements, table zebra / selection / drag controls, Callout variables, missing / duplicate declarations, margin / padding, animation / transition. Build / Check / diff-check PASS; Desktop checks above remain pending.

Public-variable references: [Code](https://raw.githubusercontent.com/obsidianmd/obsidian-developer-docs/main/en/Reference/CSS%20variables/Editor/Code.md), [Blockquote](https://raw.githubusercontent.com/obsidianmd/obsidian-developer-docs/main/en/Reference/CSS%20variables/Editor/Blockquote.md), [Table](https://raw.githubusercontent.com/obsidianmd/obsidian-developer-docs/main/en/Reference/CSS%20variables/Editor/Table.md).

## Observations / Issues

Pending real Desktop QA. Record mode / view, reproduction, severity, and evidence here.

## Final Result

Desktop QA: pending. Next: Chat implementation review → Desktop QA → fix only if necessary → PR → Review / Merge. P2.5 not started.
