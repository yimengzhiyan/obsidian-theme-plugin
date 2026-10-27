# Phase 5 Mid-cycle Integrated Desktop QA

Date: 2026-10-21 (America/Los_Angeles). **Overall disposition: PASS**, bounded to the independent Windows desktop environment below. A = 0, B = 0, C = 1 non-blocking tuning observation. Unsupported/native-unavailable items and evidence limits are explicit; this is not final Phase 5 acceptance or authorization to start 5C/5D.

## 1. Environment

| Item | Tested value |
| --- | --- |
| Branch | `codex/p5-feature-completion` |
| Implementation HEAD / 5B | `aeec39a0f1842406d50afc69fcc132a9635b972a` |
| 5A | `4e85ceecfbde45a85493fb4e6e46a60cbb1479db` |
| Obsidian / Installer | 1.14.4 / 1.10.6, read from the actual About UI |
| Windows | Windows 11 25H2, build 26200.8737 |
| Style Settings | 1.0.9 |
| Independent Vault | `E:\codex-desktop\Codex_workspace\2026-10-11\obsidian-fusion-theme-desktop-qa-p2\work\P415-Preset-Acceptance` |
| Text / Radius | 16px / 8px |
| Modes | Dark and Light |
| Width / Line Height | Real Style Settings: 500 / 1.5, 700 / 1.7, 1000 / 2.0 |
| Accent | Default Light `#6750a4`, default Dark runtime `#b9a1ff`; explicit red `#dc2626`, blue `#2563eb`, green `#16a34a` |

The daily Vault was not used. Obsidian was closed before backup/installation and again before configuration restoration. `.obsidian` was backed up to sibling `p5-backup/obsidian`; original note hashes were recorded before testing. No community plugin was installed for this round. Notebook Navigator was absent and optional compatibility smoke is N/A; its older evidence is not re-certified here.

## 2. Artifact

Repository: sibling `p5-repo`, remote `https://github.com/yimengzhiyan/obsidian-theme-plugin.git`. Root and installed `theme.css` were byte-identical before testing and after cleanup:

```text
FBE0D2223FB9F1BA3582EFF74F45D993B908D61239C4299EEE38870AF268E8F4
```

Installed location: `.obsidian/themes/Obsidian Fusion Theme/theme.css`. The implementation artifact and manifest were retained after cleanup; no source, generated CSS, settings metadata, build/check script or Decision was edited. Temporary DOM styles were used only for the expressly authorized QA token overrides, with no permanent snippet or runtime added.

## 3. Test fixture and evidence

Two temporary notes were created: `Phase 5 Integrated QA.md` and `Phase 5 Second Pane With A Deliberately Long Tab Title 中文长标题.md`. The integrated fixture contained approximately 18.3k characters / 3,950 words, 18 long-form sections, Chinese/English/mixed prose, adjacent CJK/English/numbers/punctuation, H1–H6, consecutive headings, long wrapped headings, bold/italic/both, emphasized links, tags/highlight, inline and fenced code, inline/block math, nested lists, quote, Callout, table and footnote. The beginning included Paragraph A / blank / B / two real blanks / C. Real blanks were also present between H2/H3/H4.

Fixture-only corrections moved emphasis outside wiki-link aliases to valid Markdown and inserted heading-test blank lines. Native LP table interaction subsequently reformatted the temporary Markdown table; this did not touch original notes. Source character-entry/Enter tests were reversed immediately. Neither original note was edited.

Evidence combines actual native UI actions, inspected desktop captures and DevTools CSSOM/computed-style reads. Captures were inspected live; no screenshot archive is claimed. Console accessibility transcripts and final fixtures are retained outside Git under sibling `p5-evidence/` (`console-evidence/` and `fixture/`). Key transcripts include reading-default/override, lp-override, source-override, nested-chrome, stacked, reduced-motion, lp-heading-fallback, active-special-focus and reading-footnote-clean. These local evidence files are not shipped as theme assets.

## 4. 5A Workspace findings

| Scenario | Actual exercise and result |
| --- | --- |
| Focus hierarchy | Two Markdown panes, Markdown + native Graph, and nested three-pane layout; content clicks switched active pane. **Good**: active header Accent boundary, quieter inactive title/actions, fully readable inactive body; Card outer outline remained neutral. |
| Computed Focus | Active ordinary header `0.666667px solid rgb(220, 38, 38)` under red Accent; inactive headers neutral `rgb(57, 56, 63)`. Header/body opacity stayed 1; reduction was on chrome children. Fractional CSS border is the observed runtime value. |
| Header reveal | Pointer enter/leave, active action/menu, view-mode action and keyboard focus. Reading-mode action click followed by Shift+Tab reached More options; visible Accent focus ring remained after pointer moved into content, and Enter opened its native menu. No hidden target or target-size change observed. Disabled Forward remained disabled. |
| Ordinary tabs | Three tabs, long title ellipsis, native active indicator, inactive close reveal on pointer hover, active close, actual close actions and switching worked. Sequential tab/close focus is native-unavailable (`tabIndex=-1`), not a theme failure. |
| Stacked tabs | Native menu enabled stacked mode; horizontal scrolling and Ctrl+Tab switching worked, then ordinary mode restored. Stacked closes computed opacity 1 / transition 0s; Card outline none / radius 0. Existing Focus boundary still followed native active leaf. |
| Ribbon | Rest opacity .55; pointer entry revealed the Ribbon, leaving restored reduction. Quick Switcher and Graph actions worked. Width and hit targets remained usable. .55 is subdued but usable in both modes: **Keep** in this sample, no forced tuning issue. Available icons were in the upper Ribbon; no separate bottom Ribbon action existed in this configuration. |
| Status Bar | Rest .72, hover reveal, live word/character counts and actual editor-mode menu click worked. Native backlink/editor/count/sync items stayed readable, without observed layout shift. No additional community status item installed. |
| Sidebar | File Explorer and Search (three matching results) remained readable; actual resize and tab switching worked. Only direct header chrome was targeted. In the common selected-tab state the header computed opacity 1 even when main content had focus: C-01 below. |
| Scroll / resize / Graph | Actual vertical divider and Sidebar drags, independent long-note scrolling and Graph pan changed native state successfully. No inaccessible pane or scroll/resize regression found. |

Inactive title/action samples were .72/.55 with content opacity 1. When Sidebar Search owned focus, main leaves correctly had no `.mod-active`; neutral main boundaries in that state are not evidence of a Graph Focus failure. No synthetic active class or forced `:hover`/focus was used.

## 5. Effects and Reduced Motion

Actual view-action, ordinary tab close, Ribbon and clickable Status actions produced no obvious jump, blur, flicker or excessive animation in the inspected settled captures. Normal computed transition lists included .18s and .1s. Recommendation: **Keep**, bounded observation.

DevTools' native command palette enabled **Emulate CSS prefers-reduced-motion: reduce**. `matchMedia('(prefers-reduced-motion: reduce)').matches` became true; sampled header/Ribbon/Status/ordinary close transitions computed 0s, transform none. The loaded reduced-motion rules also disabled the new press translation. The command palette then selected **Do not emulate CSS prefers-reduced-motion**, and matchMedia returned false with normal .18s/.1s transitions restored.

The 1px held `:active` frame was not captured reliably by the discrete click API. Reduced-motion media activation and transition suppression are measured PASS; precise held-button displacement is **unverified**, not a fabricated visual PASS. No claim is made about all native Obsidian animations.

## 6. Active line

Ordinary caret lines in Source and LP showed subtle Accent background and followed caret movement. RGB smoke was exercised in Light LP and Dark Source, with Dark LP also observed. The runtime used **`.cm-line.cm-active`**, rather than `.cm-activeLine`; both classes being present is not required. An ordinary red line computed `oklch(0.577069 0.21516 27.3258 / 0.06)`.

Source selection of `Paragraph B.` remained clear over the subtle red line; native Ctrl+F used that selection and displayed its distinct search-match outline, then Escape returned normally. Caret movement remained visible. LP ordinary editing and special-block selection remained usable.

Heading, list, quote, fenced code, Callout editing and table interactions were exercised in Source/LP. No ordinary active-line paint was added to these special blocks. Actual active H1 computed transparent background; the ordinary selector excludes any `HyperMD-*` class. Existing quote background and code/Callout surfaces remain their own component styles, not false positive active-line matches. Reading sampled **zero** `.cm-active`/`.cm-activeLine` descendants and had no active-line paint.

## 7. 5B default baseline

With overrides absent, Reading/LP had no abrupt redesign or conspicuous rhythm regression. This is a real-use comparison, not an exhaustive pixel comparison to a previous artifact. Paragraph↔paragraph/heading/list/quote/code/Callout/table and consecutive H2–H6 remained readable in both modes. Source retained its native geometry.

Restored defaults were indent 0em, paragraph .5rem, heading 1.5rem, prose letter/word spacing 0, heading letter spacing 0 and bold modifier 200. Actual LP heading sizes/weights were H1 28px/700, H2 24px/700, H3 20.8px/600, H4 18.4px/600, H5 16.8px/500 and H6 16px/500. Autospace class was absent. Inline Title was left native.

## 8. Reading selector verification

**Ordinary Reading prose match: YES.** Actual hierarchy was `.markdown-preview-sizer.markdown-preview-section > div.el-p > p`. The loaded combined Reading/LP prose selector matched 15 sampled elements and its inline reset matched six. Default ordinary paragraphs computed indent 0px, letter `normal`, word 0px and text-wrap `pretty`.

Under indent 2em, prose letter .03em and word .08em, ordinary Reading prose computed **32px / .48px / 1.28px** at 16px text. Only the first wrapped line indented visually. List content, quote paragraphs, Callout paragraphs, table content, code blocks and block math retained their ordinary/special-context values. Inline code and actual `.math.math-inline.is-loaded` / `.MathJax` containers reset to 0px indent, normal letter spacing and 0px word spacing. Footnote `li` **and** `p` separately computed 0px / normal / 0px while adjacent ordinary prose still computed 32px / .48px / 1.28px. Properties/metadata prose was not present: N/A.

## 9. Live Preview selector verification

**Ordinary LP prose match: YES**, with actual `.markdown-source-view.mod-cm6.is-live-preview`. Under the same nonzero tokens it computed 32px / .48px / 1.28px. Special HyperMD list/quote/code/header/footnote lines did not become ordinary prose. Native list hanging indents (-23px/-33px) and quote hanging indents (-16px/-11px) were preserved; these are not failures of a zero-prose-indent requirement. Inline code/math spacing resets were effective. Native table/Callout/math widgets remained readable.

## 10. Source preservation

Source had no `.is-live-preview`. With all nonzero QA overrides still installed, **new prose/reset rule matches were `[0, 0]`**. Ordinary Source computed 0px indent / normal letter / 0px word spacing; real blank lines remained **27.2px with min-height 0px** at 16px × 1.7, before and after removing overrides. Source heading letter spacing/wrapping stayed native; public heading size/weight mappings can still affect native headings, which is distinct from adding a scoped Source prose consumer.

Physical Down/Down/Up navigation visited each real blank around A/B/C, including both consecutive blanks. Enter added one native line, Backspace removed it; typed `x` then Backspace restored content. No skipped blank, broken caret or navigation failure was observed. Native readable width remained intact.

## 11. Token override matrix

Overrides were temporary `style#phase5-qa-override`, removed after each sample. The full first set combined the values below; later targeted samples confirmed heading-to-heading fallback and LP size/weight consumers independently.

| Capability | Temporary value | Observed result |
| --- | --- | --- |
| First-line indent | 2em | Reading and LP ordinary 32px; Source 0px; special blocks excluded |
| Paragraph / heading spacing | 1rem / 2rem | Reading public-variable chain visibly responded. LP ordinary blank 8→16px, prose→heading 24→32px, heading→heading **8→16px** (paragraph fallback), heading→prose 8→16px; Source blank stayed 27.2px |
| Prose letter / word | .03em / .08em | Reading/LP .48px / 1.28px, code/math resets and Source exclusion held |
| Heading letter | .04em | Reading/LP H1–H6 responded: H1 1.28px, H2 .96px, H3 1.024px, H4 .736px, H5 .672px, H6 .64px with sampled overridden sizes; no added Source consumer |
| H1 / H3 size | 2em / 1.6em | Reading/LP 32px / 25.6px |
| H1 / H5 weight | 600 / 700 | Reading/LP actual computed weights 600 / 700, returning to 700 / 500 after removal |
| Bold modifier | 100 vs default 200 | Ordinary emphasis strength changed: sampled bold 500 vs default 600; heading bold remained additive to heading weight |

All were capability tests, not proposals for new defaults or a 5D UI. No repository CSS was repaired during QA.

## 12. Bold / Italic

Ordinary, heading and link emphasis were exercised in both modes. Bold retained semantic normal text color and native stronger weight. Italic retained normal semantic text color, including under RGB Accent changes; no unintended Accent replacement. Under the nonzero sample ordinary normal/italic were weight 400 and `rgb(233, 231, 237)`; ordinary bold was 500, H2 bold 800 over heading 700. Link semantic styling remained recognizable; yellow highlight stayed yellow as Accent changed.

## 13. CJK autospace and wrapping

`CSS.supports('text-autospace', 'normal')` returned **false: UNSUPPORTED in tested Electron**. No `fusion-cjk-autospace` class was added; usefulness could not be judged and is **Unsupported**, not FAIL. Do not expose a claimed working switch from this environment's evidence alone.

`CSS.supports` for pretty and balance returned true. Reading ordinary `text-wrap` computed **pretty**; Reading and LP H1–H3 computed **balance**; H4–H6 retained normal wrapping. Long headings wrapped naturally in the sampled wide/narrow layouts without a new pathological short tail. No claim of ideal aesthetics for every text/font/width.

## 14. Width / Line Height and Light / Dark

Real Style Settings controls changed width/line-height to **500/1.5, 700/1.7 and 1000/2.0**, with Chinese, English, mixed prose and long headings inspected in Reading and LP. The large pane was widened sufficiently for actual 1000px content; 700/1.7 was restored before final cleanup. Text wrapped naturally and the native centered readable-width chain remained effective. Source width stayed native. Both Light and Dark received workspace/typography/component smoke; this was not a full Cartesian product of every token and color.

## 15. Split / Narrow

Two-pane and nested three-pane layouts were exercised with actual resizing. A measured Markdown pane was **419.1458435px** wide, within the requested 350–450px range. Long heading, CJK prose, table, code, Callout and math remained accessible in Light/Dark. Controls/long tabs stayed usable, Card neutral and independent scrolling intact. No typography-caused horizontal overflow was observed; native code/table handling is not redefined by this QA.

## 16. Existing component regression smoke

Links, tags, yellow highlight, inline/fenced code, quote, table, semantic Callout, File Explorer, ordinary/stacked tabs, neutral Card shell, native Graph, Ribbon and Status Bar all received bounded smoke without a confirmed regression. This does not repeat full Phase 2/3 certification, validate every Callout type, or extend prior NN/Radius20/header-hidden/pop-out/RTL/DPI/platform/accessibility coverage.

## 17. Issue inventory

| ID | Class | Finding / reproduction | Impact and disposition |
| --- | --- | --- | --- |
| C-01 | C — Tuning | Open File Explorer or Search, focus main content and move pointer out of Sidebar header. The direct header remained opacity 1. Actual selected tab has `.is-active`; `:has(.workspace-tab-header:is(.is-active,:active))` therefore keeps the header revealed in the normal selected-tab state. | Content/control access is unaffected. Reduction is less visible in this common state than the default .72 token suggests. Clarify whether selected-tab reveal is the intended resting policy; only then consider tuning. Not an Electron `:has()` support failure or required source fix. |
| D-01 | D — Unsupported | `text-autospace: normal` unsupported. | No class/effect test fabricated. Reassess on a supporting runtime. |
| D-02 | D — Native unavailable / optional | Independent tab/close sequential focus unavailable; no separate bottom Ribbon action, extra community Status item or Notebook Navigator installed. | Preserve native behavior; no new plugin installation needed for core gate. |
| D-03 | D — Evidence limit | Precise held 1px press frame not captured; metadata fixture absent. | Discrete clicks/media/computed rules verified; do not claim held-frame displacement or metadata visual certification. |

**No A blocker or B needs-fix issue confirmed.** A capture/input geometry problem briefly returned an approximately 306×245 window; manual maximization restored usable capture. It was tooling/window-state recovery, not a theme defect, and unaffected QA continued.

## 18. Phase 5 Mid-cycle Fix Batch

One consolidated follow-up, **not separate new Phase numbers**:

1. Review C-01's resting Sidebar policy. Keep current behavior if selected-tab presence should reveal chrome; otherwise make one scoped adjustment with main-focus/hover/keyboard/selected-tab regression checks. Do not dim Sidebar content or plugin internals.
2. No mandatory typography/active-line/Source/width/Card correction is supported by this QA. Keep the observed .55/.72 hierarchy and 100/180ms effects unless maintainers choose tuning.
3. Carry D-01–D-03 as limits. Revisit autospace only on a supporting runtime; verify held press when a reliable held-input capture is available. No compatibility CSS or runtime workaround is requested.

This report prepares the batch for maintainer review; it does not execute fixes or authorize 5C/5D, PR, merge or release.

## 19. Cleanup and validation

- Temporary override element absent after each targeted sample and at the final runtime read; autospace class absent, reduced-motion emulation off (`matchMedia=false`). No snippet installed.
- Closed DevTools and independent Vault; confirmed no Obsidian process before restoring files.
- Archived both final temporary fixtures outside Vault, then removed only those two files. Vault again contains the two original notes.
- Restored every backed-up `.obsidian` file except the intentionally retained Phase 5 theme CSS/manifest; configuration hash comparison returned **zero differences**. Appearance restored to Dark (`theme: obsidian`), 16px text, Fusion theme; Style Settings data restored to `{}` (700/1.7/8 defaults).
- Original note SHA256 unchanged:

```text
Preset Acceptance.md  944346012DCD0179880F871C9D0DF1386C723E20011F83DA896AA0E649122A50
QA Target.md          6342D3B235282F5B1211F428F1CF89F829F8A632DF6465C99934C03C10913009
```

- Root/installed SHA256 remains the artifact recorded in section 2.
- `npm run check` **PASS** in an isolated writable copy: 24 CSS inputs rebuilt and all contract checks passed. Initial incomplete-copy missing-doc validation and CRLF/LF freshness mismatch were resolved in that copy before the successful run; the tested repository/installed artifact was never rebuilt. All 28 CSS/build/check/package/manifest inputs compared byte-identical, and rebuilt output equals root after CRLF/LF normalization. Lockfile also compared byte-identical.
- Final staged documentation-only diff and `git diff --check` **PASS** (exactly five documents), before the exact commit `test: complete Phase 5 mid-cycle integrated QA`. Delivery is the same branch; no PR/merge.

## 20. Overall disposition

**PASS for bounded 5A + 5B Mid-cycle Integrated Desktop QA.** Core capability consumption, Source preservation, real workspace interaction and prior component smoke worked in the tested environment. C-01 is a non-blocking policy/tuning observation for the single concentrated batch; D items remain unsupported/N/A/unverified. This is neither final Phase 5 completion nor expanded platform/plugin/accessibility certification.
