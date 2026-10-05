# P2.3 Links / Tags / Highlight Desktop Test

## Status and artifact

- Implementation: complete; Chat implementation review pending
- Automated validation: see CURRENT_STATUS
- Desktop QA: pending; do not infer PASS from automated checks
- Obsidian / installer version: pending
- OS / build: pending
- Style Settings version: pending
- Tested branch: `codex/p2-3-links-tags-highlight`
- Tested commit: pending
- Desktop root theme.css SHA-256: pending
- Installed theme.css SHA-256: pending
- Root / installed equality: pending (required; no cross-machine fixed SHA requirement)

Install this branch's root `manifest.json` and generated `theme.css`. The existing Foundation release package remains the V0.1 baseline, not the P2.3 artifact.

## Test matrix

Run each applicable check in Light / Dark and Live Preview / Source / Reading. Record per-mode results and any native differences; public variables alone do not prove visual behavior. Source retains native editing behavior, not forced Reading-view spacing parity.

### Links

Create an existing target note and leave another target unresolved:

```markdown
Paragraph with [[Existing note]], [[Missing note]] and [external link](https://example.com).
**[[Existing note|Bold link]]** and *[[Existing note|Italic link]]*.
**[Bold external](https://example.com)** and *[Italic external](https://example.com)*.
## Heading with [[Existing note]] and [external link](https://example.com)
```

- [ ] Resolved internal link preserves existing Theme link color; no default underline, hover underline
- [ ] Unresolved internal link preserves distinct color, subdued opacity, dotted decoration and no filter
- [ ] External link preserves existing color; no default underline, hover underline
- [ ] Links inside normal paragraphs, bold, italic and headings remain readable
- [ ] Light / Dark and all three views tested, including hover states
- [ ] No custom external icons or hover animations introduced

### Tags

```markdown
#tag #project/theme #中文标签
```

- [ ] All three tag samples identifiable as lightweight Accent pills, not oversized buttons
- [ ] Normal / hover states in Light / Dark and all three views
- [ ] Custom Accent changes (e.g. red, blue, green) update tag foreground, background and border immediately
- [ ] Restore previous Accent after testing; no per-tag / rainbow styling

### Highlight

```markdown
Normal text and ==Highlighted text==, including ==中文高亮 English==.
```

- [ ] Light / Dark and all three views tested
- [ ] Highlight remains recognizably yellow and text remains readable
- [ ] Foreground text is not independently overridden
- [ ] Text selection color is unchanged

### Regression

- [ ] P2.2 H1–H6 hierarchy retained
- [ ] Live Preview paragraph / heading spacing retained
- [ ] Source native blank-line keyboard navigation retained
- [ ] Bold / Italic, including inside links, unchanged
- [ ] Inline Code unchanged
- [ ] Code Block unchanged

## Findings and exit result

- Mode-specific observations / screenshots: pending
- Issues / blockers: not yet assessed by Desktop QA
- Final Desktop QA: pending
- Next: Chat implementation review → Desktop QA → fix only if necessary → PR

## Public-variable references

- [Obsidian Link variables](https://docs.obsidian.md/Reference/CSS%20variables/Editor/Link)
- [Obsidian Tag variables](https://docs.obsidian.md/Reference/CSS%20variables/Editor/Tag)
- [Obsidian Colors / highlight variables](https://docs.obsidian.md/Reference/CSS%20variables/Foundations/Colors)

The implementation uses existing Theme link / Accent / radius Tokens and the public yellow color. No new Token, Style Setting or custom selector is introduced; deprecated RGB variables are not used.
