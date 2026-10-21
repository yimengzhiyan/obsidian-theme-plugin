# P4.1.6 RESET-01 Mechanism Investigation

## Outcome / scope

**Root cause: CONFIRMED for Style Settings 1.0.9 + Obsidian 1.14.4. P4.1.5 remains FAIL; prototype promotion remains blocked.** The slider Reset calls a programmatic setter that schedules a delayed save of the metadata default. `clearSetting` deletes the key, but that pending save then creates it again. This is not a failure of the Writer CSS recommendation or of the user-override precedence rule.

Investigation only. No Prototype CSS, Style Settings metadata, generated theme, token, plugin, live setting or daily Vault was changed. No RESET-01 fix was implemented. Existing research and UX Contract are preserved as historical inputs; the corrections below supersede their unverified Reset inference, without silently changing acceptance criteria or DECISIONS.md.

## Environment / provenance

- Investigation date: 2026-10-15, America/Los_Angeles.
- Prior Desktop observation: Obsidian 1.14.4, Installer 1.10.6, Style Settings 1.0.9, Windows 25H2 / 26200.8737; dedicated P4.1.5 Vault and backups retained.
- Branch: `codex/p4-preset-prototype`; implementation `f50040a45c456693b603dc148445b33ea8eca2c1`; preserved Desktop QA commit `7d89f34108beffea8ac4f30842e1f44c37ea6273`.
- This investigation combines the recorded Desktop failure, installed executable-code inspection and an offline replay. It does **not** claim a new live DevTools call trace, new Desktop acceptance, or actual adapter write timing.
- Plugin source: fixed 1.0.9 tag, commit `4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c`, cloned from the [upstream repository](https://github.com/community-archive/obsidian-style-settings/tree/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c).
- The [official 1.0.9 release main.js](https://github.com/community-archive/obsidian-style-settings/releases/download/1.0.9/main.js) is an exact prefix of the installed dedicated-Vault file. The installed file only appends the nonexecuting 18-character comment suffix `\n/* nosourcemap */`. SHA-256: official `1828ABAACDAB4C5578B705A625C585B30512F8EFAD4C7CFC5A18E70CC3557468`; installed `74915FF1DB38058AAD73A29A34706F8CC8E7C930C4CDF69FF5C6928BEC7E0FE7`.
- Actual updated runtime inspected: `%APPDATA%/obsidian/obsidian-1.14.4.asar`, SHA-256 `146EF8470D8CBB4A6DB209BDC19BF2BAD13350444186C0FD93C31087B142B92F`. Its `app.js` is 3,942,126 bytes, SHA-256 `958CE57FE22F87FDF121546E46DFCCD9C8EE971CE3FD8F801D60D4ECE39A2DF9`. The installer resources archive contains 1.10.6 and was **not** used as evidence for the 1.14.4 behavior.

## Source evidence

All plugin links below are pinned to the inspected commit, rather than a changing branch.

| Evidence | Source | Finding |
| --- | --- | --- |
| Slider render/change/reset | [VariableNumberSliderSettingComponent.ts, lines 34–60](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/src/settingsView/SettingComponents/VariableNumberSliderSettingComponent.ts#L34) | Change handler uses Obsidian `debounce(callback, 250, true)`. Initial `setValue` precedes handler registration. Reset instead calls `setValue(default)` after registration, then `clearSetting`. |
| Stored-key emission | [SettingsManager.ts, lines 216 onward](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/src/SettingsManager.ts#L216) | Variable generation iterates stored keys. Numeric values append `format`, here px. An absent ordinary width key does not automatically emit metadata default 700. |
| Persistence | [SettingsManager.ts, line 397](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/src/SettingsManager.ts#L397), [lines 559–590](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/src/SettingsManager.ts#L559) | `setSetting` assigns; `clearSetting` deletes; each calls async `save()` without awaiting. `save()` awaits `plugin.saveData(this.settings)` then regenerates variables. `clearSection` deletes all matching section keys. |
| Supported metadata | [SettingHandlers.ts, lines 90–115](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/src/SettingHandlers.ts#L90) | Slider requires numeric default, min, max, step; optional format. No supported resetBehavior, resetValue, clearOnReset or conditional default configuration. |
| Numeric text control | [VariableNumberSettingComponent.ts, lines 34–59](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/src/settingsView/SettingComponents/VariableNumberSettingComponent.ts#L34) | Same 250 ms trailing debounce; parseInt/parseFloat with no range or NaN validation in this handler. Reset sets text then clears; pending input is not cancelled. |
| Select control | [VariableSelectSettingComponent.ts, lines 49–63](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/src/settingsView/SettingComponents/VariableSelectSettingComponent.ts#L49) | Dropdown change writes synchronously without debounce; Reset sets dropdown then clears. Different mechanism from slider. |
| Whole-theme reset | [SettingsMarkup.ts, lines 180–202](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/src/settingsView/SettingsMarkup.ts#L180) | Generated top-level heading reset calls `clearSection(s.id)` then rerenders. The internal Heading `resetFn` function is not a supported YAML callback hook. |

### Actual Obsidian component behavior

The local proprietary application bundle is not reproduced or committed. The following are semantic descriptions of inspected functions. Locations are zero-based character offsets in the exact `app.js` identified above, not line numbers or offsets in the whole archive.

| Runtime function | Symbol / offset | Observed semantics |
| --- | --- | --- |
| SliderComponent setter | `kT`, `setValue` at 1279996 | If current numeric slider value differs, assign new value, update display, and invoke registered change callback. A programmatic call can therefore save. |
| Debounce | `Gl` at 545069 | Third parameter is resetTimer: true restarts the timeout. Invocation is trailing, not a lodash-style leading call. Pending work has cancel/run methods, but the plugin Reset does not use them. |
| Text setter | TextBase `dT`, `setValue` at 1274694; TextComponent inherits it | Assigning text does not invoke the registered change callback. Native input events do. |
| Dropdown setter | `bT.setValue` | Assigns select value and resizes; does not invoke change callback. Native change events do. |
| Plugin persistence | `Plugin.saveData` at 2950715 | Delegates to `app.vault.writePluginData` with data and updated mtime. Disk serialization/completion order was not instrumented. |

The slider defaults to `instant=false`. Its native input handler updates the display; committed native change invokes the callback. Style Settings does not turn instant on. Mouse slider adjustment and keyboard adjustment therefore reach the same debounced save route when their native change event commits. Mouse-click or keyboard activation of Reset executes the same plugin Reset callback; neither avoids the programmatic setter.

### Root-cause sequence

Own pseudocode, not a replacement implementation:

```text
Writer selected; stored width = 500; slider displays 500
Reset:
  slider.setValue(metadata.default = 700)
    value differs -> registered onChange(700)
    -> schedule trailing setSetting(width, 700), approximately 250 ms
  clearSetting(width)
    -> delete saved width; request save
Later:
  pending onChange runs -> setSetting(width, 700); request another save
  stored override 700px outranks Writer recommendation 640px
```

The key is genuinely deleted at the synchronous clear step; its absence is not stable. Metadata default participates by supplying the value to the setter, not by globally filling every missing setting. The first render's default is silent because the callback has not yet been registered.

There are two async save requests. No claim is made that the user sees a 640px frame between them, that a specific disk write finishes first, or that Desktop latency is exactly 250 ms. Those details are unnecessary to explain the confirmed settled result observed in P4.1.5.

## Reproduction / isolated verification

### Existing real Desktop reproduction retained

1. In the independent QA Vault, enable Fusion and Style Settings 1.0.9; choose Writer.
2. Save Content Width 500; verify stored numeric width and computed width are 500.
3. Activate the individual Content Width Reset; wait for changes to settle.
4. Observe selection still Writer, width key present with value 700, effective token / native width 700px instead of 640px.

The P4.1.5 report recorded two Dark mouse reproductions and a Light native-keyboard reproduction: focus slider, Home to 480, Right to 500, Tab to Reset, Enter. The latter excludes a mouse-targeting or automation-setter-only explanation. See [P4.1.5 checkpoint](CURRENT_STATUS.md#p415-desktop-preset-acceptance-qa--2026-10-15) and QA commit `7d89f34` for the original observations.

### New offline minimum reproduction

Extracted the exact 1.14.4 debounce, Slider.setValue and Text.setValue functions into an isolated Node VM. Only those small functions executed, on plain object components. The manager model mirrors assignment/delete/save ordering; persistence uses snapshots and resolved promises, and modeled CSS resolves saved width or 640. No app bundle execution, live DOM hooks, Vault writes, plugin replacement or product runtime was introduced.

Local analysis files remain outside the repository under `work/`: `p416-mechanism-harness.mjs` and `p416-harness-results.json`. These are diagnostic tools, not a proposed JS implementation or shipped dependency. Source hashes, offsets and scenarios here allow independent reproduction without committing application code.

| Scenario | Result after timer settles | Interpretation |
| --- | --- | --- |
| Slider 500 → Reset | Delete followed by setSetting(700); saved700 | Reproduces RESET-01 mechanism. Latest replay callback occurred about 254 ms after Reset; offline timing only. |
| Same slider, second Reset after first settles | Saved key absent | Slider is already700; setter equality check suppresses new callback. Not a robust single-Reset solution. |
| Slider starts700, no pending change → Reset | Saved key absent | Confirms value-dependent behavior and that clearSetting itself works. |
| Numeric text starts500, no pending input → Reset | Saved key absent | Silent text setter avoids the slider's self-generated700 write. |
| Numeric text with input save pending → immediate Reset | Delete followed by old queued setSetting(500); saved500 | Switching to text alone cannot guarantee the existing Reset contract. |

Five assertions across four harness cases passed (the first case includes both first and second Reset). Manager disk I/O, native event delivery and real computed CSS are deliberately outside this offline test. The second-Reset and alternate-control cases are source/replay evidence, **not newly Desktop-verified workarounds**.

## Corrections to previous research / assumptions

| Prior assumption | Verdict / correction |
| --- | --- |
| Mechanism research “Reset individual control: saved key is deleted”, followed by variant fallback | Incomplete. [Mechanism research](P4_1_PRESET_MECHANISM_RESEARCH.md) Reset table and precedence paragraph stopped at clearSetting; they did not check SDK setter callbacks or pending timers. Deletion occurs, but the conclusion that it stays deleted is false for slider500→700. |
| UX Contract / Prototype help can promise single Reset always exposes recommendation | Disproved for the implemented width slider. The desired UX remains legitimate; the current mechanism does not fulfill it. Text-only reinterpretation of700 is not acceptance. |
| `debounce(...,250,true)` means immediate leading save | False for the inspected Obsidian helper; true resets a trailing timer. |
| Metadata default always emits a saved override | False. Initial display can show700 while key is absent; variable generation iterates stored keys. |
| CSS specificity prevents the recommendation working | Disproved as root cause. Saved700 correctly wins; absence of override already yields640 in Desktop QA. |
| Mouse event or automation-only problem | Disproved by native keyboard reproduction and programmatic setter mechanism. |
| Any input control will solve it | Unsupported. Text removes one callback source, but does not cancel older queued input. Select has different semantics and compatibility costs. |

The initial research explicitly left actual Desktop lifecycle unverified, but that caveat did not justify promoting its Reset table to a guaranteed UX promise. P4.1.5 correctly blocked promotion rather than treating source-level deletion as success.

## Options / architecture feasibility

### A — Native delete-key operations in the current configuration

- `clearSetting` is a real deletion operation. However, there is no separate robust single-action “delete only this override and cancel pending writes” route in this slider UI.
- Reset when the slider already equals700 and all callbacks have drained can delete; a second Reset after the failed first one is therefore a source/replay-supported conditional workaround. It is timing/value dependent, not the agreed user interaction, and not Desktop-validated here.
- Whole-theme Reset all invokes `clearSection`: it deletes other user settings **and preset selection** too. It cannot preserve Writer and all unrelated overrides as the single-width Reset requires. Rerender/destroy does not cancel already queued component saves, so it is not a general pending-write remedy either.
- Import merges settings; omitting a key is not deletion. Disabling the plugin removes output/classes but retains stored data. Editing plugin data with the app closed is a diagnostic recovery operation, not a native per-setting product UX.

**Assessment:** actual deletion exists, but no reliable current one-click per-width route meets the contract. Do not promote based on double Reset or whole-theme Reset.

### B — Supported metadata Reset configuration

No supported slider metadata field changes Reset ordering, callback cancellation or dynamic default. The numeric default is required; null, CSS expressions, an out-of-range sentinel, or a YAML function is not a legal supported solution. Heading.resetFn is an internal generated function, not a theme-configurable escape hatch.

Changing metadata default700→640 still writes a saved640 on Reset and cannot express “delete override; Writer640 or Default700 depending on selection”. Raising CSS priority or treating saved700 as unset would break explicit user ownership of700. CSS cannot remove a storage key or cancel an application callback.

**Assessment:** no metadata-only or CSS-only repair of the existing slider contract established for these versions.

### C — Change one existing variable / control type (future review only)

| Candidate | Mechanism advantage | Costs / unresolved issues | Assessment |
| --- | --- | --- | --- |
| Keep width key; replace slider with variable-number | Numeric saved values and px format can remain compatible; idle Reset uses silent Text.setValue | Pending typing can rewrite after Reset; no slider range/step enforcement; parser accepts invalid/out-of-range input without a guard in this handler; UX and focused Desktop tests required | Not a demonstrated complete fix. |
| Width variable-select | Dropdown setter is silent and change save has no debounce | Options need px strings; existing numeric500 becomes unitless500 in select CSS output because select does not support numeric format. Existing saved values/UI selection need compatibility handling; narrowing choices changes product capability | Mechanically promising for a fresh experiment, not a drop-in migration or approved fix. |
| Different existing slider axis, e.g. Radius or Line Height | No new token | Same Slider.setValue/debounce mechanism | Does not avoid root cause. |
| Existing unitless variable with select, e.g. Line Height | String options can produce valid unitless values without px migration | Changes a protected Typography control; existing values outside options can leave selection blank even when CSS remains valid. Requires full existing-option coverage, compatibility/UX review and regression QA; no such test performed | Possible separate architecture experiment, materially changes this Prototype's width-only objective. |
| Existing text/color axis | Silent text setter can avoid self-generated default save | Pending input issue remains; changes visual scope and protected Phase 2 setting contract | No automatic safe escape. |

A select-based experiment could remain Theme-first without a new token or runtime, but that possibility does not establish a compatible solution for this existing width prototype. It requires Chat-approved scope, honest user-data handling and fresh acceptance criteria. No candidate was installed or implemented in this task.

### D — Stop promotion of current assisted prototype; retain documentation-only recipes

Freeze the current experiment as failed evidence; use documentation-only recommended settings rather than promise an assisted Reset behavior that cannot currently be guaranteed. This has no runtime/CSS migration cost and preserves the user's native configuration ownership, but gives up the assisted selection convenience. It requires a product direction decision, not a fabricated PASS.

**Recommendation:** keep promotion blocked and use **D as the conservative next direction**, subject to Chat's decision. Preserve the present branch/artifacts for evidence; do not autonomously remove them. If Chat wants to continue an assisted experiment, authorize one bounded C investigation with explicit compatibility and pending-input tests before implementation. Neither “all Theme-first presets are impossible” nor “changing control type fixes everything” follows from this evidence.

## UX Contract impact / decisions reserved for Chat

- Do not weaken “user saved value > recommendation > theme default” or redefine saved700 as cleared. RESET-01 remains FAIL under the existing contract.
- The old mechanism explanation needs correction in an approved contract revision; current report records the correction without rewriting the historical contract.
- D requires an explicit documentation-only scope decision. C requires a revised control/compatibility plan and separately authorized implementation/QA; it is not approval to change Typography or Reading now.
- Chat must choose D versus a specifically bounded C research path, and decide whether/when to update the UX Contract and feature/gate documents. DECISIONS.md is unchanged because no new product decision has been made here.

## Validation / remaining unknowns

- Exact-function offline replay: PASS, five assertions / four cases; not a replacement for Desktop acceptance.
- `npm run check`: PASS on a separate tracked-file validation copy. First copy check rebuilt the artifact for freshness/line endings; second passed. All regeneration occurred only in that disposable copy. The working repository's theme.css bytes stayed unchanged, SHA-256 `CB30DFB7C0E288EAC9DFEB03D51DD43CB62B6FCCE9957C62C80805C8B537DA90`.
- Final `git diff --check` and implementation-scope comparison are recorded in the status checkpoint / commit validation. Only this investigation and CURRENT_STATUS / AI_HANDOFF are intended for commit.
- Not newly verified: live second-Reset recovery; alternate-control Desktop behavior/fast input; complete select migration and accurate display of all saved values; exact adapter save ordering; all section-reset races; other Obsidian/plugin versions; availability of a future upstream fix. No claim of whole-platform certification.
- No new live UI sampling was needed to explain the already reproduced Desktop failure. Existing Vault and backups were left untouched this turn.

**Disposition: mechanism investigation complete; RESET-01 unresolved; P4.1.5 FAIL / promotion blocked; await Chat design decision.**
