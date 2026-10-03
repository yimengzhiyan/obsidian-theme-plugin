# Core Typography Desktop Test

## Result

- Implementation: complete
- Automated validation: recorded in CURRENT_STATUS
- Chat code review: pending
- Real Obsidian Desktop QA: pending
- No Desktop PASS is inferred from automated checks. Complete this checklist before deciding the P2.2 exit result.

## Environment

- Obsidian version: pending
- Windows version / build: pending
- Tested commit: pending (record `git rev-parse HEAD`)
- Test package `theme.css` SHA-256: pending
- Installed `theme.css` SHA-256: pending
- Style Settings version: pending
- Text / Interface / Monospace user fonts: pending

Use the current branch's generated root `theme.css` with root `manifest.json`. The existing `release/foundation-test/` package is the V0.1 baseline and has not been updated for this task. Record the exact tested artifact hash and confirm it matches the installed file; a new Typography package is not created in this implementation task.

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

- Issues / reproduction steps: pending
- Editing / Reading differences: pending
- Regression result: pending
- Final Desktop QA result: pending
