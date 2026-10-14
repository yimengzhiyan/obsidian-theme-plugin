# P4.1.1 Preset Mechanism Research

## Scope, provenance and evidence limits

Fusion baseline: `b58fcf6297b5fa4cf246233ee0ba6dca030f997e`; [Architecture](P4_ARCHITECTURE_REVIEW.md), [Feature Decisions](P4_FEATURE_DECISIONS.md), [Preset Design](P4_1_PRESET_SYSTEM_DESIGN.md), [Decisions](DECISIONS.md).

Read-only upstream source research, 2026-10-14. Style Settings **1.0.9**, matching the version recorded in project Desktop evidence, resolves to commit **`4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c`**. Cloned into a temporary directory outside the project; no upstream code copied into Fusion, no plugin installed/executed, no prototype or Desktop state observation performed. This is source evidence and cascade analysis, not Desktop QA PASS. Other versions/pop-outs are not certified.

Primary source links below are pinned to that commit. The current repository redirects from mgmeyers to community-archive; this research does not assume the latest branch matches 1.0.9.

## 1. Style Settings capability

| Need | Source-confirmed capability | Limit |
| --- | --- | --- |
| Preset-like selection | `class-select` dropdown persists one option value and adds that value as a body class; old configured option classes are removed before reinitialization | A selection switch, not a transaction that assigns multiple settings or snapshots a workflow |
| Grouped configuration | Heading levels organize nested sections; top-level section reset calls clearSection | UI grouping is not atomic preset application; section reset deletes settings rather than restores a previous session |
| User-selectable modes | class-select selects a visual class; variable-select chooses one CSS variable value | A single variable value does not automatically expand into a bundle of independent declarations |
| Saved user configuration | SettingsManager stores section/setting keys, saves plugin data, reloads it, emits saved variables | Values belong to plugin storage; no theme-owned configuration database |

Evidence: [1.0.9 README](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/README.md), [ClassMultiToggleSettingComponent](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/src/settingsView/SettingComponents/ClassMultiToggleSettingComponent.ts), [SettingsManager](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/src/SettingsManager.ts).

Source is authoritative where wording is ambiguous: class-select is handled as a body class, not as the CSS variable described by one README sentence. UI render requires a string default; allowEmpty adds a none choice. A future design must specify default explicitly rather than rely on optional-default prose alone. No metadata is added here.

The class dropdown calls setSetting for its own key. SettingsManager removes/reinitializes configured classes, leaving other stored keys intact. Variable output is a generated stylesheet, with ordinary variables scoped to **body.css-settings-manager** and themed values scoped to body.theme-light/dark.css-settings-manager. These are not inline variables. Source does not establish that every displayed default is an emitted override: ordinary variable generation iterates stored settings, while controls can display a metadata default without a stored key. A saved value equal to the default remains a saved override.

## 2. CSS variable strategy without DOM state

Variables can hold numeric/string appearance values; they do not themselves create persistent selection state or let CSS branch on an arbitrary named string as a multi-token configuration. Without a class/other verified state source, a manual override sheet can supply values but cannot offer an automatic named preset UI. Multiple manual sheets become an order/conflict problem; a theme alone cannot capture which values the user intended to preserve.

With optional Style Settings, there *is* a source-confirmed body class route. A bounded class-driven CSS bundle is maintainable only with an explicit cascade contract:

- Normal declarations on the **same element** compare cascade priority, specificity and then order. A body+variant-class rule and body.css-settings-manager both have specificity (0,1,1), so stylesheet order can decide. A more specific preset selector can mask user settings even if those settings load later.
- A declaration on body wins over an inherited :root value regardless of the ancestor selector's specificity. Writing preset values on descendants can similarly mask body-level user values; never solve this by assigning presets directly to editor/component contents.
- A low-specificity variant condition is a possible design direction for letting saved body-level user variables win, but is not an implemented or runtime-tested Fusion route. Avoid !important, consumer-specific token bypasses or new token families.
- Runtime style insertion order, mode-specific declarations and actual alias consumption still require Desktop evidence before prototype acceptance. Arbitrary user snippets cannot be universally controlled by the theme.

Existing body-scoped workspace aliases must continue resolving against Foundation values at their consumers. Reading Width uses the existing theme-reading-width/file-line-width chain; no new width selector or Source rule is justified by presets. Spacing changes remain subject to Phase 2 regression and are not approved by this mechanism finding.

## 3. State ownership

| Owner | Responsibility | Excluded responsibility |
| --- | --- | --- |
| Theme | Declarative variant definitions, usable Default and public-variable/token consumers | Creating classes, saving selection, commands, snapshots or rewriting user settings |
| Optional Style Settings | User selection key, body class lifecycle, individual saved overrides and configuration UI | A Fusion-specific transactional preset/snapshot engine is not provided by class-select |
| New plugin | None in the accepted project route | Capture/restore arbitrary histories, workspace sessions or custom runtime orchestration would cross this boundary |

Thus a named selection's persistent state should belong to **optional Style Settings**, while its visual meaning belongs to the theme. Theme-only here means the Fusion deliverable remains CSS, with no new companion plugin or theme runtime; optional Style Settings still performs its own documented runtime class application. This does not authorize Fusion DOM patching. Without that plugin, Default remains usable; a manual recipe can be a fallback, not a second state owner.

## 4. Override model candidates

| Model | Meaning | Risk / assessment |
| --- | --- | --- |
| Preset → User override | Defaults, then variant defaults, then explicitly saved user values | Preferred bounded model; requires lower-priority preset declarations at the same token scope, verified alias propagation and transparent Custom semantics |
| User override → Preset | Variant masks saved user values while active | Values can survive in storage yet appear ignored; moving away changes appearance unexpectedly. Does not satisfy the existing user-priority design requirement |
| Preset writes many setting values | Apply a configuration by overwriting saved individual values | class-select does not do this; destroys prior choices without a separate snapshot/history mechanism. Outside the selected theme route |
| Manual configuration recipe | User edits existing controls deliberately | Simple fallback, but no one-click variant selection or automatic restoration; should not be marketed as a managed preset system |

Preferred inference: choose **defaults → preset defaults → saved user overrides**, with Default contributing no variant overrides. A saved value equal to a default is still user-owned; do not infer intent from equality. A UI label naming a selected variant must not promise an exact look after individual overrides. Resetting an individual setting removes its saved override and may expose variant defaults, even if the control displays a fixed metadata default; dynamic UI explanation remains an unresolved design/QA issue.

No model changes settings or CSS in this research. If clear precedence and UI meaning cannot be achieved under existing-token constraints, narrow the preset scope rather than add runtime state or secretly reverse precedence.

## 5. Recovery behavior

[SettingsManager](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/src/SettingsManager.ts) distinguishes selecting a class, clearing one key and clearing a whole section. [main.ts](https://github.com/community-archive/obsidian-style-settings/blob/4ebec6ae0131a9d5e8307bb5e26d59db5ba2e81c/src/main.ts) calls cleanup on unload. These establish source-level expectations:

| Action | Source-backed expectation | Recovery boundary |
| --- | --- | --- |
| Variant A → B | Only selection key changes; configured classes are rebuilt; saved individual values remain | Appearance recovery depends on the approved cascade, not storage alone |
| Choose Default/none | No variant declarations should participate under the proposed theme design; retained saved overrides remain | Default is not reset-all; no historical snapshot is restored |
| Reset selection control | clearSetting deletes selection key; configured default is reapplied | It must resolve to neutral Default/none in a future design; no metadata added now |
| Reset individual control | Saved key is deleted; control returns to its metadata default | Does not recover its previous user value; variant fallback may differ from displayed default |
| Reset section | clearSection deletes all stored keys for that section | Destructive reset to defaults, not return-to-user-configuration; must not be presented as preset off |
| Disable plugin | Cleanup removes generated stylesheet and configured classes; unload removes manager class | Theme baseline remains; stored settings are not deleted by this path |
| Reload/re-enable plugin | load restores saved plugin data; class initialization can reapply selection and values | Re-enable may reapply the selected preset, not neutral Default; real Desktop lifecycle QA still required |

Switching should therefore **preserve**, rather than snapshot/restore, existing user keys. Users who edit values while a preset is selected create current global overrides; they do not gain separate per-preset profiles. Recovering an arbitrary older configuration after overwritten values, imports or section resets is not guaranteed by CSS or class-select.

Source also prunes stored setting keys removed from an existing section definition in setConfig. Keeping stable setting IDs matters for upgrades; removing/renaming options or IDs needs separate migration review. No upgrade plan is implemented here.

## Decision

**Theme-only feasible with limitations**.

This applies only to a predetermined declarative visual variant selected through optional Style Settings, preserving individual saved overrides. It does **not** mean standalone CSS supplies a selection UI, nor that a full preset snapshot/import/session system is feasible without runtime capabilities. No new companion plugin is required for this bounded mechanism.

The mechanism research resolves the existence of a class-selection/state-storage route, but not Fusion's actual computed cascade, UI default accuracy or lifecycle behavior. Those require independent review and actual Desktop evidence before any authorized prototype or implementation. Candidate status remains conditional; no prototype is created. Four conceptual preset names remain hypotheses, not approved token bundles. Decision 012 and all Phase 2/3 contracts remain unchanged.
