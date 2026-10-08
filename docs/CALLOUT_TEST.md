# P2.5 Callout Desktop Test

## Status / Environment

Implementation complete / pending Chat Review and Desktop QA. Automated checks do not establish Desktop PASS.

- Obsidian / installer version: pending
- OS / Windows build: pending
- Style Settings version: pending
- Theme version: pending
- Tested branch: `codex/p2-5-callout`
- Tested commit: pending; record exact implementation SHA
- Root theme.css SHA-256: pending
- Installed theme.css SHA-256: pending
- Root / installed hash match: pending

Install root `manifest.json` / generated `theme.css`. Foundation release package remains V0.1 baseline. Require correct branch / commit and root hash == installed hash on the test machine, not a fixed hash from another machine.

## Architecture / Approved Shell

Only 8 public variables: border 1px / opacity 0.28, outer padding 0, radius from `--theme-radius-md`, title padding from existing sm/md spacing, title size 0.95em / semibold, content padding 0/md/sm.

No new Tokens / Settings / custom selectors. Native type colors, icons, aliases, title color, content background, folding and nested blend mode remain untouched. No full-row color system or icon redesign.

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

- [ ] All eight base types: native icons / semantic colors retained; title and content readable
- [ ] Warning != error; success != info; quote Callout != plain blockquote
- [ ] Aliases retain native mappings: danger → error, help → question, done → success, cite → quote

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

- [ ] Title readable; 0.95em not too small, semibold appropriate
- [ ] Icon alignment normal; long title wraps, no fold-indicator overlap
- [ ] Title-only shell: no broken empty space / content padding artifact; border / radius normal
- [ ] Fold indicator visible; click target usable; collapse / expand work
- [ ] Title padding does not break folding; expanded content spacing normal

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

- [ ] Bold / italic / inline code / Code Block / internal and external links / yellow highlight / tag remain readable and functional

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

- [ ] Nested shell readable; semantic color retained; native blending usable
- [ ] Nested borders / radius intact; spacing not excessively large
- [ ] Consecutive Callouts: sensible vertical rhythm; no visual merge / spacing collapse

## Blockquote Distinction / Accent / Radius

```markdown
> Plain blockquote.

> [!note]
> Note callout.
```

- [ ] Plain Blockquote retains 3px left Accent border / subtle Accent background without icon/title shell
- [ ] Callout has full rounded container / semantic icon / semantic title / 1px full border; clearly distinguishable from Blockquote
- [ ] Accent red `#dc2626`, blue `#2563eb`, green `#16a34a`: Blockquote and Tags follow Accent, Callout types do NOT all become Accent
- [ ] Warning / error / success / info retain type semantics after Accent changes
- [ ] Theme Radius small / medium / larger: Callout follows `--theme-radius-md`, no fixed residue, border remains correct
- [ ] Restore original Accent and Radius after tests

## Source / Quick Regression

- [ ] Raw Callout Markdown and folding syntax editable; rendered shell is not required
- [ ] Caret, ↑ / ↓, Enter / Backspace normal
- [ ] P2.2 headings / Live Preview paragraph spacing / Source blank-line navigation
- [ ] P2.3 links / Tag Accent propagation / yellow Highlight
- [ ] P2.4 Inline Code / Code Block / Blockquote / Table

## Automated Validation

Strict `assertCalloutContract()` requires one body rule and exactly 8 unique approved declarations with exact values. Extra selectors/properties, semantic overrides, Tokens, Settings, colors, icon replacements, animation and !important are rejected. Previous P2.2–P2.4 contract functions are byte-for-byte unchanged. Build / Check / diff-check PASS; 29 in-memory variants rejected, covering all 26 required negative categories plus separate rgb/hsl, margin/padding and a setting variable. Desktop QA remains pending.

## Desktop PASS Gate

- [ ] 1. Artifact hash match
- [ ] 2. Core types readable
- [ ] 3. Semantic colors retained
- [ ] 4. Native icons retained
- [ ] 5. Title readability
- [ ] 6. Long-title wrapping
- [ ] 7. Title-only Callout
- [ ] 8. Folding
- [ ] 9. Rich content
- [ ] 10. Nested Callout
- [ ] 11. Consecutive Callouts
- [ ] 12. Blockquote / Callout distinction
- [ ] 13. Accent does not flatten type semantics
- [ ] 14. Radius follows Theme Radius
- [ ] 15. Source raw editing
- [ ] 16. P2.2 regression
- [ ] 17. P2.3 regression
- [ ] 18. P2.4 regression

## Observations / Final Result

Desktop QA: pending. Record view/mode, evidence and any blocker here. Next: Chat implementation review → Desktop QA → fix only if necessary → PR → Review / Merge. P2.6 not started.
