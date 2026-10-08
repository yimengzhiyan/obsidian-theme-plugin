# P2.5 Callout Desktop Test

## Status / Environment

COMPLETE / Chat Review PASS / Desktop QA PASS / pending PR merge. Results record maintainer-provided real Desktop QA, not an inference from automated checks.

- Obsidian version: 1.13.7
- Installer version: 1.10.6
- OS / Windows build: Windows 25H2 Build 26200.8737
- Style Settings version: 1.0.9
- Theme version: not separately reported; artifact identified by tested commit and hash
- Tested branch: `codex/p2-5-callout`
- Tested commit: `dfce4c2061cd899648e26d394aef515bf6373b39`
- Root theme.css SHA-256: `750F2BE96CB3E7C2976310054A7C8E57AB1A5CFE3309202B8372F2A5492428B7`
- Installed theme.css SHA-256: `750F2BE96CB3E7C2976310054A7C8E57AB1A5CFE3309202B8372F2A5492428B7`
- Root / installed hash match: YES

Install root `manifest.json` / generated `theme.css`. Foundation release package remains V0.1 baseline. Require correct branch / commit and root hash == installed hash on the test machine, not a fixed hash from another machine.

## Architecture / Approved Shell

Only 8 public variables: border 1px / opacity 0.28, outer padding 0, radius from `--theme-radius-md`, title padding from existing sm/md spacing, title size 0.95em / semibold, content padding 0/md/sm.

No new Tokens / Settings / custom selectors. Native type colors, icons, aliases, title color, content background, folding and nested blend mode remain untouched. No full-row color system or icon redesign.

Shell geometry QA: border PASS (observed 1px), border opacity PASS (0.28), outer padding 0 PASS. Radius follows Theme Radius: PASS.

Official reference: [Callout public variables](https://raw.githubusercontent.com/obsidianmd/obsidian-developer-docs/main/en/Reference/CSS%20variables/Editor/Callout.md).

## Base Types / Aliases

Run Light / Dark × Live Preview / Reading; Source checks native raw editing only.

```markdown
# P2.5 Callout QA

> [!note]
> Note callout content.

> [!info]
> Info callout content.

> [!tip]
> Tip callout content.

> [!warning]
> Warning callout content.

> [!error]
> Error callout content.

> [!success]
> Success callout content.

> [!question]
> Question callout content.

> [!quote]
> Quote callout content.

> [!danger]
> Danger alias.

> [!help]
> Help alias.

> [!done]
> Done alias.

> [!cite]
> Cite alias.
```

- [x] Note / Info / Tip / Warning / Error / Success / Question / Quote: each PASS
- [x] Semantic colors PASS: blue / cyan / orange / red / green / gray families remain distinct; Callouts did not flatten into Theme Accent
- [x] Native icons PASS: type-specific icons visible and undistorted
- [x] Warning != error; success != info; quote Callout != plain blockquote
- [x] danger PASS → Error; help PASS → Question; done PASS → Success; cite PASS → Quote semantics

## Title / Empty / Folding

```markdown
> [!note] Custom title
> Content.

> [!warning] 一个很长的中文标题 English mixed title used to verify wrapping behavior
> Content.

> [!note] Title only

> [!note]- Collapsed by default
> Hidden content.

> [!warning]+ Expanded by default
> Visible content.
```

- [x] Title size PASS: 15.2px / 0.95em under 16px body; weight PASS: observed 600
- [x] Icon / title alignment PASS
- [x] Long Chinese + English mixed title PASS: normal wrapping, no overflow or overlap with icon / fold indicator
- [x] Title-only PASS: no large empty content area or content-padding artifact
- [x] Collapsed-by-default `-` PASS; expanded-by-default `+` PASS
- [x] Click fold / unfold PASS; fold indicator PASS; expanded content spacing PASS
- [x] Title padding does not break native folding behavior

## Rich Content

````markdown
> [!info] Rich content
> **Bold**
>
> *Italic*
>
> `inline code`
>
> [[Existing note]]
>
> [external](https://example.com)
>
> ==highlight==
>
> #tag
>
> ```js
> const x = 1;
> ```
````

- [x] Bold / Italic / Inline Code / Code Block / Internal Link / External Link / Highlight / Tag: each PASS
- [x] Highlight remains yellow; Tag continues to follow Theme Accent

## Nested / Consecutive

```markdown
> [!note] Parent
> Parent content
>
> > [!warning] Nested warning
> > Nested content

> [!note]
> First.

> [!warning]
> Second.

> [!success]
> Third.
```

- [x] Nested Callout PASS: parent / child semantic colors distinguishable, native mixed background usable
- [x] Nested borders / radius / spacing intact
- [x] Consecutive Callouts PASS: no visual merge, overlap or spacing collapse

## Blockquote Distinction / Accent / Radius

```markdown
> Plain blockquote.

> [!note]
> Note callout.
```

- [x] Plain Blockquote PASS: 3px left Accent border / subtle Accent-derived background, no Callout semantic icon/title shell
- [x] Callout PASS: full rounded container / semantic icon / semantic title / full 1px border
- [x] Blockquote vs Callout distinction: PASS / clear
- [x] Red `#dc2626` / blue `#2563eb` / green `#16a34a` Accent independence: each PASS
- [x] Blockquote and Tag follow Theme Accent; Callout retains native semantic type colors; Highlight remains yellow
- [x] Radius propagation PASS: small observed 1px, medium 10px, large 20px
- [x] No fixed radius residue; border correct at all tested values

After tests, the maintainer reported restoring Dark mode, Accent `#dc2626`, and Radius `20`.

## Source / Quick Regression

- [x] Light / Dark / Live Preview / Reading: each PASS
- [x] Source PASS: raw Markdown editable, `+` / `-` folding and nested `>` syntax editable; rendered shell not required
- [x] Source caret / ↑ / ↓ / Enter / Backspace normal
- [x] P2.2 Headings / Paragraph spacing / Paragraph → H2 / Source blank-line navigation: each PASS
- [x] P2.3 Links / Tag Accent / Highlight yellow: each PASS
- [x] P2.4 Inline Code / Code Block / Blockquote / Table: each PASS

## Automated Validation

Strict `assertCalloutContract()` requires one body rule and exactly 8 unique approved declarations with exact values. Extra selectors/properties, semantic overrides, Tokens, Settings, colors, icon replacements, animation and !important are rejected. Previous P2.2–P2.4 contract functions are byte-for-byte unchanged. Build / Check / diff-check PASS; 29 in-memory variants rejected, covering all 26 required negative categories plus separate rgb/hsl, margin/padding and a setting variable. Desktop QA independently reported PASS above.

## Desktop PASS Gate

- [x] 1. Artifact hash match
- [x] 2. Core types readable
- [x] 3. Semantic colors retained
- [x] 4. Native icons retained
- [x] 5. Title readability
- [x] 6. Long-title wrapping
- [x] 7. Title-only Callout
- [x] 8. Folding
- [x] 9. Rich content
- [x] 10. Nested Callout
- [x] 11. Consecutive Callouts
- [x] 12. Blockquote / Callout distinction
- [x] 13. Accent does not flatten type semantics
- [x] 14. Radius follows Theme Radius
- [x] 15. Source raw editing
- [x] 16. P2.2 regression
- [x] 17. P2.3 regression
- [x] 18. P2.4 regression

## Observations / Final Result

P2.5 Callout Desktop QA: PASS. Final result: PASS. No blocking issue found.

Design decision: Callout semantic type colors / icons / aliases remain native; Theme Accent intentionally does not replace Callout semantic colors. Nested blending and folding remain native. No selector-based Callout redesign required.

Next: create / review / merge P2.5 PR. P2.6 not started.
