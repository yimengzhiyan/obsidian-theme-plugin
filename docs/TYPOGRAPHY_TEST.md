# Core Typography Desktop Test

## Result

- Implementation: exit scope correction implemented; spacing normalization limited to Live Preview, Source normalization withdrawn
- Automated validation: recorded in CURRENT_STATUS
- PR review / merge: pending
- Desktop QA Round 1: NEEDS FIX — sole blocker: Editing / Reading paragraph and heading vertical spacing parity
- Desktop QA Round 2: NEEDS FIX — Live Preview ordinary paragraph parity fixed; Source blank-line usability and consecutive-heading spacing remain blockers
- Desktop QA Round 3: NEEDS FIX — only blocker: Source blank lines collapse under runtime `--p-spacing: 0rem`
- Desktop QA Round 4: NEEDS FIX — Source visual geometry restored, but ↑ / ↓ navigation skips real blank lines
- Final Exit Verification: PASS (real Desktop QA; not a Round 5 styling attempt)
- P2.2 Core Typography Desktop QA: PASS; no blocker found

## Environment

- Obsidian version: 1.13.7
- Installer version: 1.10.6
- Windows version / build: 25H2 Build 26200.8737
- Round 1 reported tested commit: `c4b1910b5f52e9cdf3c5994f69355dc97d324786`
- Round 1 reported artifact SHA-256: `C45050AA1FEA1B9AC2FD4B346CAC2EBE2FD162A5B4F963A7B864BA5C35FC1675`
- Round 1 root / installed hash equality: reported by Desktop QA
- Repository baseline `theme.css` SHA-256 at that commit: `a91e18e464ae8c62a763d093f86637f261d41de02a04a2f3d0c5f9552057b411`
- Artifact policy: repository hash above is historical local evidence, not a Desktop acceptance gate. Verify the correct branch / commit and Desktop root hash == installed hash; no cross-machine fixed SHA equality is required.
- Style Settings version: 1.0.9
- User text size: 16px; Line Height: 2.0 (also reproduced at 1.5); Content Width: 500
- Text / Interface / Monospace user font preservation: PASS; exact font names not supplied

Use the current branch's generated root `theme.css` with root `manifest.json`. The existing `release/foundation-test/` package is the V0.1 baseline and has not been updated for this task. Record the exact tested artifact hash and confirm it matches the installed file; a new Typography package is not created in this implementation task.

## Desktop QA Round 1 — recorded results

- NEEDS FIX: Editing / Reading paragraph and heading spacing parity. At 16px body text, Line Height 2.0 and Content Width 500, observed paragraph rhythm was Editing approximately 64px versus Reading approximately 40px.
- The same issue persisted at Line Height 1.5, in Light / Dark and Live Preview / Source modes.
- PASS: H1–H6 hierarchy, Light / Dark, Bold / Italic, Bold / Italic inside Links, all three user font choices, user text size, Line Height and Content Width settings, Accent and Radius regressions, Tabs / Navigation, restart persistence, absence of `null.clone`, and Inline / Block Code regression.
- Reading View is the parity reference. Preserve its variables and selectors, and retain all already-passing Typography design.

CodeMirror keeps Markdown blank lines as real `.cm-line` elements, whereas Reading View represents spacing through rendered paragraphs / headings. Public spacing variables alone cannot normalize that DOM difference. Round 1's fix targeted blank lines containing only `br`; Round 2 confirmed this approach works for ordinary Live Preview paragraphs, but requires empty-line support and a consecutive-heading exception.

## Desktop QA Round 2 — recorded results

- Tested fix commit: `b829589cbf747cca7a3b9786a25cc35d3d9a415e`
- Desktop root SHA-256: `03ADEC594F0F4A7B243E8DC9FDEC0BCE0BC319DE5827AA412FB95EF474B5AF23`
- Desktop installed SHA-256: `03ADEC594F0F4A7B243E8DC9FDEC0BCE0BC319DE5827AA412FB95EF474B5AF23`
- Root / installed match: YES; environment unchanged from Round 1
- NEEDS FIX: Source blank-line distinction / usability and consecutive-heading spacing
- Live Preview ordinary paragraph parity fixed: at LH 2.0, Live Preview ≈40px / Source ≈32px / Reading ≈40px; at LH 1.5, Live Preview ≈32px / Source ≈24px / Reading ≈32px
- Source: one versus two blank Markdown lines had no clear visual distinction
- H2 → H3: Editing ≈52–54px versus Reading ≈35px; H3–H6 also too sparse. Paragraph → H2 already close to Reading
- PASS retained: Lists, Blockquote, Code Block, Callout, Table, Inline Code, Bold / Italic Links, Reading View and H1–H6 hierarchy

The refined fix recognizes both empty `.cm-line` and `br`-only lines. Each ordinary blank line receives `line-height` and `min-height` from `--p-spacing`. The last blank line before a heading uses `--heading-spacing`, except a single blank line directly between two headings reverts to `--p-spacing`. HyperMD lines remain excluded as targets. No margin, padding, hiding, heading-line styling or Reading View changes are introduced.

## Desktop QA Round 3 — recorded results

- Tested branch: `codex/p2-2-typography-core`; commit: `2fc98fa38b2469ad68cc6332efff00a12309fe9b`
- Round 3 artifact hashes: not supplied in this report; do not infer values
- Selector matching: PASS; DOM structure: understood
- Consecutive heading spacing: PASS; Live Preview ordinary spacing: PASS
- Source blank-line rendering: FAIL; sole remaining blocker

Actual Source DOM contains `<div class="cm-line" dir="ltr"><br></div>`; double blank lines are two separate matching elements. Both the br-only and combined blank selectors match. Computed `--p-spacing` is `0rem`, so `line-height`, `min-height` and height are all `0px`. This is a Source-scoped public-variable override, not selector failure.

The final fix preserves all three selectors and the body public-variable contract. Only scoped declarations change: generic and heading→heading blank lines consume `--theme-space-sm`; paragraph→heading consumes `--theme-space-lg`. Each rule sets both line-height and min-height. No new Token, Setting or editor hack is added.

## Desktop QA Round 4 — recorded results

- Tested commit: `e1227b6d91ad85b709b39a7627d91038f04d68c8`
- Source `--theme-space-sm = 0.5rem`; blank line line-height / min-height / height all 8px
- Single / double / triple blank lines: 8px / 16px / 24px
- PASS: selector, spacing Token, visual blank-line distinction, Enter / Backspace
- FAIL: ↑ / ↓ navigation; expected 45 → 46, actual 45 → 47, skipping a real Markdown blank line
- NEEDS FIX: restoring visual height by reducing native Source blank-line geometry caused an editing regression

## Final product decision — Live Preview parity, native Source editing

Source visual spacing parity is no longer a P2.2 exit requirement. Source Mode retains native Obsidian / CodeMirror blank-line geometry and editing behavior. Live Preview remains the editing surface targeted for Reading-view visual parity.

This is an intentional scope decision following real QA, not an unresolved visual blocker. Faithful Markdown editing and stable caret / keyboard navigation take priority over Source visual parity. The three existing rules now require `.is-live-preview`; declarations, body contract and all passed Typography design are unchanged. No Source reset, extra selector or caret hack is added. This is a withdrawal of Source normalization, not a Round 5 CSS tuning attempt.

## Final Exit Verification — PASS

- Environment: Obsidian 1.13.7 / Installer 1.10.6 / Windows 25H2 Build 26200.8737 / Style Settings 1.0.9
- Tested branch: `codex/p2-2-typography-core`
- Tested commit: `b7060e36186b73a6fd4a84e89ce601a20369986b`
- Root SHA-256: `287F100EB13B6FFF038378D885381B452E09F540F47249BA4FCDCF2BF60F9A15`
- Installed SHA-256: `287F100EB13B6FFF038378D885381B452E09F540F47249BA4FCDCF2BF60F9A15`
- Match: YES; no cross-machine fixed SHA requirement

Test Source blank-line behavior using:

```markdown
Paragraph A.

Paragraph B.


Paragraph C.
```

- [x] Source ↓ navigation PASS
- [x] Source ↑ navigation PASS
- [x] Every real blank Markdown line reachable PASS
- [x] Caret PASS; Enter PASS; Backspace PASS
- [x] Source native visual rhythm recorded: approximately 32px blank editor lines at Line Height 2.0; intentional difference from Reading accepted
- [x] Live Preview ordinary paragraph PASS at Line Height 2.0 / 1.5
- [x] Paragraph → H2 PASS; consecutive headings H2 → H6 PASS
- [x] Reading View PASS, no regression
- [x] Lists PASS; Blockquote PASS; Code Block PASS; Callout PASS; Table PASS

Final verification used the existing 16px body / width 500, Line Height 2.0 / 1.5 test conditions. Results above are supplied real Desktop QA, not inferred from automated checks.

### Final exit gate

Source native keyboard / navigation restored + previous Live Preview PASS retained + Reading unchanged + special blocks PASS: exit gate satisfied. P2.2 Core Typography Desktop QA = PASS. Accepted limitation / design decision: Source Mode vertical rhythm may differ from Reading View; this intentionally preserves native editing behavior, and Source visual parity is NOT an exit requirement.

The checklist below remains the original full-test template, not additional pending exit gates. Rounds 1–4 history and previous PASS coverage are retained; final focused exit verification above is complete.

## Light Mode

- [ ] H1–H6 show a clear hierarchy without oversized headings
- [ ] Headings use normal text color rather than a rainbow palette
- [ ] Markdown heading markers are low-distraction
- [ ] Body and heading hierarchy is balanced

## Dark Mode

- [ ] H1–H6 show a clear hierarchy without oversized headings
- [ ] Headings use normal text color
- [ ] Markdown heading markers are low-distraction
- [ ] Body and heading hierarchy is balanced

## Editing View

Test Live Preview and Source mode; record mode-specific differences separately.

- [ ] H1–H6 sizes, weights and line heights
- [ ] Paragraph spacing, including adjacent paragraphs
- [ ] Bold, including bold text inside headings
- [ ] Italic
- [ ] Visible Markdown heading syntax uses faint text color
- [ ] Chinese / English mixed content and long wrapped headings
- [ ] User text-size changes keep the relative heading hierarchy usable

## Reading View

- [ ] H1–H6 sizes, weights and line heights
- [ ] Paragraph spacing
- [ ] Bold, including bold text inside headings
- [ ] Italic
- [ ] Heading syntax renders as headings without stray markers
- [ ] Chinese / English mixed content and long wrapped headings
- [ ] Compare hierarchy with Editing View in Light and Dark modes

Public spacing variables can behave differently between rendered paragraphs and editor lines. Record any visual parity issue rather than declaring PASS from variable presence alone.

## Existing Style Settings Regression

- [ ] Line Height remains adjustable and affects body text
- [ ] Content Width remains adjustable
- [ ] Setting values persist after restart
- [ ] Accent input and interaction linkage show no regression
- [ ] Border Radius shows no regression

## Font Preservation

Change each Obsidian user font independently, then restore it. Use visibly different installed fonts; no particular Chinese font is required.

- [ ] Text font is honored for body text and headings
- [ ] Interface font is honored in the workspace
- [ ] Monospace font is honored in inline / block code
- [ ] Font choices remain effective after restart
- [ ] Clearing a user override restores Obsidian/theme fallback behavior

## Regression

- [ ] Tabs normal / hover / active states
- [ ] Navigation normal / hover / selected states
- [ ] Native slider active fill follows Accent in Light / Dark
- [ ] Enabled toggle follows Accent in Light / Dark
- [ ] No `null.clone` console error when changing the four existing settings
- [ ] No unintended Inline Code / Code Block visual redesign

## Deferred features

First-line indent remains off (no theme indentation rule). Letter spacing and word spacing remain Obsidian/browser defaults. Granular heading settings and bold / italic settings are not added. Code font size, background tuning, syntax colors, code block spacing and inline code decoration remain for P2.4.

## Issues and final decision

- Round 1 blocker: Editing / Reading paragraph and heading vertical spacing parity (approximately 64px / 40px paragraph rhythm)
- Round 2: NEEDS FIX; ordinary Live Preview paragraph parity fixed; Source usability and consecutive-heading spacing remain blockers
- Round 3: NEEDS FIX; selectors confirmed correct, Source public spacing override collapses blank lines
- Round 4: NEEDS FIX; Source ↑ / ↓ navigation skips real blank lines despite restored visual height
- Exit scope correction: implemented; Live Preview normalization retained, Source normalization withdrawn by product decision
- Final Exit Verification: PASS; no blocker found; P2.2 complete / ready for PR review and merge
- P2.2 Core Typography Desktop QA = PASS; native Source rhythm intentionally accepted, no Round 5 styling attempt
