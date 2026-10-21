# P4.1.2 Preset UX Contract Review

## Scope

Baseline: mechanism research `d85fcd39eddc676f7ae440085e33fea076c5717d` on `codex/p4-architecture-review`. Inputs: [Feature Decisions](P4_FEATURE_DECISIONS.md), [Preset Design](P4_1_PRESET_SYSTEM_DESIGN.md), [Mechanism Research](P4_1_PRESET_MECHANISM_RESEARCH.md), [Decisions](DECISIONS.md).

This is a proposed product contract, not a settings specification or prototype approval. The mechanism conclusion remains Theme-only feasible with limitations; source-backed findings do not establish Desktop QA. No numbered architecture decision is superseded, and no implementation is accepted.

## 1. Preset definition

A Preset is a **configuration profile**: a named recommendation for a bounded set of existing appearance values. It is **not a runtime mode**. It does not change application behavior, workspace contents, navigation, pane visibility, editing commands or keyboard handling.

Fusion Default represents the tested theme baseline with retained user choices. Writer, Research and Minimal remain conceptual recommendations, not four promised products or exact appearances. A profile name describes a starting point; individual overrides can change the resulting appearance.

Selecting a profile, if separately approved later, must choose declarative recommendations only. It must not write a bundle over saved user values, snapshot an environment, infer workflow from active panes or initiate a mode transition. No commands, timers or automatic switching are included.

## 2. Ownership and priority

**User override > Preset recommendation > Theme default**.

| Layer | Ownership | Product meaning |
| --- | --- | --- |
| User override | User; optional Style Settings stores individual saved values | Explicit choices remain authoritative across profile selection; a saved default-equivalent value is still an override |
| Preset recommendation | Theme defines the profile; optional Style Settings may store the selected profile key | Supplies only values not explicitly overridden; selection must be visible and reversible |
| Theme default | Theme | Usable without presets or optional Style Settings; Default contributes no profile override |

This priority is normative, not a claim that the current CSS cascade already implements it. Profile selection must not rename or overwrite the existing four setting keys. No per-profile user-value database is promised: changing an individual value while a profile is selected creates a global user override that follows the user to another profile.

The user's optional CSS remains outside a universal ordering guarantee. Conflicting snippets must be disclosed as external customization, not defeated with specificity or important. A profile must never bypass semantic tokens to force public-variable consumers.

## 3. UX options review

| Option | User experience | Advantages | Limits / disposition |
| --- | --- | --- | --- |
| Documentation preset | Read a named recipe and manually adjust existing controls | No new selection state, plugin requirement or cascade mechanism | Applying a recipe manually replaces values the user edits; no automatic off/restore. Suitable fallback, clearly described as guidance rather than managed preset selection |
| Style Settings selector | Explicit optional configuration choice with recommendations subordinate to user values | Familiar UI; source-confirmed class-select route; selected key can persist without overwriting other keys | Needs computed cascade, UI default accuracy and lifecycle QA. Preferred assisted route if acceptance gates pass; no selector added here |
| Plugin switcher | Commands, snapshots or coordinated runtime transitions | Could address a different behavioral product | Outside Theme + optional Style Settings scope; no plugin design or development. Not selected |

The assisted route must present Default as **use theme defaults while keeping your overrides**, never as reset all. Selecting Writer/Research/Minimal must not imply exact values after customization. If an automatic Custom indicator cannot be provided without new runtime code, explain in static text that individual settings take priority; do not promise an indicator.

Settings must not silently display metadata defaults as if they were effective profile values. A future bounded design must either make the distinction understandable with truthful static guidance or choose axes whose UI accurately represents their effect. If a usable explanation is impossible, prefer documentation-only rather than add runtime UI synchronization.

## 4. Boundary rules

- No runtime switching: no command/hotkey switcher, automatic workflow detection, timers, session transition or application-state orchestration. An explicit optional configuration selection is distinct from such behavioral mode switching.
- No Fusion JS or DOM mutation: the theme only consumes declared configuration state. The existing optional Style Settings plugin applies its own source-confirmed classes/stylesheet as part of its normal configuration mechanism; this contract authorizes no new plugin, event listener or theme DOM patch. If the requirement becomes no class mutation by any dependency, the assisted route must be dropped in favor of documentation-only.
- No hidden state: profile key and individual settings must be inspectable through the configuration UI; persistence after restart/re-enable must be explained. No undocumented snapshots, per-profile overrides, auto-restoration history or app-focus-dependent profile state.
- No capture/import/export/rollback engine. Preserving current user keys is the recovery model; it is not restoration of arbitrary prior configurations.
- No auto-hide, Focus Mode, Card Layout, Effects or deferred-feature activation bundled into a profile. No protected content/Source/geometry behavior changes.
- Decision 012 stays effective: native Reading/Live Preview/Source width and Phase 2 rhythm remain; no Reading width/spacing selector, Boundary or Focus enhancement.

## 5. Recovery semantics

| User action | Required result |
| --- | --- |
| Select profile A, then B | Replace only recommendation selection; user values remain unchanged and authoritative |
| Select Default / remove recommendation | Remove recommendation influence and retain all current individual overrides; no reset-all |
| Edit an individual setting | Change that user value globally; profile selection remains a recommendation, not exact-state certification |
| Reset an individual setting | Clearly remove that override; explain the resulting profile/default fallback. Never call this undo to the previous value |
| Reset a whole settings section | Clearly distinguish destructive clearing from selecting Default; do not use this as preset-off recovery |
| Disable optional Style Settings | Usable theme baseline remains; saved plugin values may be inactive rather than erased |
| Re-enable / restart | Document that retained selection/overrides may return; verify actual behavior before promising it |

No silent loss of values is acceptable. Unexpected interaction with reset, profile removal or plugin lifecycle blocks acceptance even if the profile looks correct in one screenshot.

## 6. Acceptance criteria and future prototype gate

These are acceptance requirements, not an implementation plan. None is recorded as passed merely by this document.

**Before authorizing a prototype:** Chat must approve a bounded profile set and exact existing appearance axes, source-backed state ownership, explicit default/override semantics and a QA protocol. No new token/setting follows automatically from candidate status. Need a credible cascade route under existing tokens; if not, return to review. Any temporary configuration changes require a separately approved prototype scope.

**For an authorized prototype to pass review:**

- Prove user override > recommendation > default at actual consumers, including saved values equal to defaults and workspace alias resolution; no specificity tricks that mask user values.
- Show selection changes only its key; A → B → Default preserves individual values and removes previous recommendation influence.
- Verify truthful UI language and displayed/default/effective-value distinctions; no unexplained hidden profile state. Selection must be accessible through the optional plugin's normal UI without custom keyboard handling.
- Verify individual reset, section reset, restart, disable/re-enable and return to baseline on the recorded plugin/app versions; document failure/limits instead of inferring PASS from source code.
- Preserve Light/Dark, Accent semantics, native content width toggle/responsiveness, Source caret/blank-line navigation and Phase 2/P3 contracts. Record artifact hash and native QA/N/A boundaries.
- Build / Check / diff-check and generated-artifact consistency pass; source scope remains approved, no JS/DOM patch/plugin or unapproved token/settings additions.

A passing prototype does not authorize release. Implementation/release decisions remain separate. If user priority, recovery or truthful UI cannot be met, use documentation-only or reject the proposed assisted scope.

## Decision

**Style Settings assisted**.

This selects a conditional product direction: the theme owns recommendations; optional Style Settings owns visible configuration selection and saved user overrides. It requires no new companion plugin. Documentation is the fallback when the optional plugin is absent or when assisted UX cannot meet the contract.

The decision is not acceptance for implementation and does not reverse the design's outstanding research/QA requirements. No runtime mode, hidden state, prototype, CSS or setting is created by this review.
