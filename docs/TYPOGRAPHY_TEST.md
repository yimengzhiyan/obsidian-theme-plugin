# Core Typography Desktop Test

## Result

- Implementation: core hierarchy complete; editor spacing parity fix implemented
- Automated validation: recorded in CURRENT_STATUS
- Chat fix review: pending
- Desktop QA Round 1: NEEDS FIX — sole blocker: Editing / Reading paragraph and heading vertical spacing parity
- Desktop QA Round 2: pending (focused retest below)
- No Desktop PASS is inferred from automated checks. Complete this checklist before deciding the P2.2 exit result.

## Environment

- Obsidian version: 1.13.7
- Installer version: 1.10.6
- Windows version / build: 25H2 Build 26200.8737
- Round 1 reported tested commit: `c4b1910b5f52e9cdf3c5994f69355dc97d324786`
- Round 1 reported artifact SHA-256: `C45050AA1FEA1B9AC2FD4B346CAC2EBE2FD162A5B4F963A7B864BA5C35FC1675`
- Round 1 root / installed hash equality: reported by Desktop QA
- Repository baseline `theme.css` SHA-256 at that commit: `a91e18e464ae8c62a763d093f86637f261d41de02a04a2f3d0c5f9552057b411`
- Artifact provenance: the reported Desktop hash differs from the repository baseline; cause unconfirmed. Do not assume byte-identical artifacts across environments. Record both actual hashes again for Round 2.
- Style Settings version: 1.0.9
- User text size: 16px; Line Height: 2.0 (also reproduced at 1.5); Content Width: 500
- Text / Interface / Monospace user font preservation: PASS; exact font names not supplied

Use the current branch's generated root `theme.css` with root `manifest.json`. The existing `release/foundation-test/` package is the V0.1 baseline and has not been updated for this task. Record the exact tested artifact hash and confirm it matches the installed file; a new Typography package is not created in this implementation task.

## Desktop QA Round 1 — recorded results

- NEEDS FIX: Editing / Reading paragraph and heading spacing parity. At 16px body text, Line Height 2.0 and Content Width 500, observed paragraph rhythm was Editing approximately 64px versus Reading approximately 40px.
- The same issue persisted at Line Height 1.5, in Light / Dark and Live Preview / Source modes.
- PASS: H1–H6 hierarchy, Light / Dark, Bold / Italic, Bold / Italic inside Links, all three user font choices, user text size, Line Height and Content Width settings, Accent and Radius regressions, Tabs / Navigation, restart persistence, absence of `null.clone`, and Inline / Block Code regression.
- Reading View is the parity reference. Preserve its variables and selectors, and retain all already-passing Typography design.

CodeMirror keeps Markdown blank lines as real `.cm-line` elements, whereas Reading View represents spacing through rendered paragraphs / headings. A full-height blank editor line adds space beyond the text line height; public spacing variables alone cannot normalize that DOM difference. The fix sets ordinary blank editor line height to `--p-spacing`, or `--heading-spacing` when immediately preceding a heading. It excludes lines with HyperMD classes, does not style the heading itself, and adds no Reading View rule or `!important`.

## Desktop QA Round 2 — pending

- Tested fix commit: pending
- Prepared repository fix `theme.css` SHA-256: `33b781a091afc7f917b48be8428f64df1a028f13bdf8becd0994e7decef07e29` (automated artifact, not a Desktop result)
- Root / installed `theme.css` SHA-256: pending; confirm equality before retesting
- Environment changes from Round 1: pending

Run the focused checks in Light and Dark, Live Preview and Source, with 16px body text / Content Width 500 at Line Height 2.0 and 1.5. Keep Reading View as the reference. Record measured spacing and any residual differences; do not infer PASS from the CSS contract.

- [ ] Ordinary paragraph blank-line spacing matches the Reading reference
- [ ] Blank line immediately before H1–H6 uses heading spacing
- [ ] Live Preview tested at both line heights in both color modes
- [ ] Source mode tested at both line heights in both color modes
- [ ] Reading View spacing remains unchanged
- [ ] Editing / Reading paragraph and heading spacing parity accepted
- [ ] Multiple blank lines and caret navigation remain usable

Minimal regression for the scoped exception:

- [ ] Lists, including nested lists / blank lines
- [ ] Code blocks, including blank lines / widgets
- [ ] Callouts
- [ ] Tables / widgets
- [ ] Inline code
- [ ] Bold / Italic inside Links
- [ ] No unintended change to quote blocks, embeds or heading lines

The checklist below remains the original full-test template. The Round 1 summary records the reported PASS coverage; Round 2 requires only the focused retest and minimal regressions above, unless a new failure appears.

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
- Spacing fix: implemented; Chat fix review pending
- Round 2 differences / regression result: pending
- Final Desktop QA result: pending focused Desktop retest; P2.2 is not complete
