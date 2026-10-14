# P4.1.3 Preset Prototype Gate Review

## Baseline and authority

Baseline: `df742b1e1da889a73922fe24e3b2cea5a4fbd761`, `codex/p4-architecture-review`. Inputs: [Feature Decisions](P4_FEATURE_DECISIONS.md), [Preset Design](P4_1_PRESET_SYSTEM_DESIGN.md), [Mechanism Research](P4_1_PRESET_MECHANISM_RESEARCH.md), [UX Contract](P4_1_PRESET_UX_CONTRACT.md).

Preset remains a Prototype candidate; mechanism is Theme-only feasible with limitations; product direction is Style Settings assisted. This document evaluates whether a bounded experiment is worthwhile. **This task creates no prototype and authorizes no file changes beyond this document.** A later explicit task must approve the experiment's exact files, token axis, values and test environment. No gate below is marked PASS based on documentation alone.

## 1. Prototype scope

Validate only **Style Settings assisted preset feasibility**, not a complete Preset System. The question is whether a visible declarative recommendation can coexist with saved user values and recover predictably without a theme runtime.

The proposed experiment is limited to neutral Default plus one experimental recommendation and one existing semantic appearance variable with an existing user-setting/public-variable consumer. These are test identities, not shipped Writer/Research/Minimal profiles. No exact variable or value is approved here; selecting a safe axis and its bounded values is a prerequisite to the subsequent experiment task.

This is enough to falsify precedence, preservation and UI assumptions. Adding four named presets, palettes, per-profile settings, import/export, migration or workspace sessions would obscure the mechanism question. A successful experiment would establish feasibility for its tested axis/environment only, not accept the full system for implementation or v1.0.

## 2. Allowed prototype — conditional future scope

A separately authorized experiment may contain:

- A minimal CSS variable experiment using the selected existing semantic token and its existing public-variable route; no new token, duplicate consumer contract or content selector.
- A minimal Style Settings configuration test providing explicit neutral Default and one mutually exclusive recommendation choice. Preserve existing setting IDs and saved user values; no batch assignment of controls.
- Normal manual use of the optional plugin UI, recording selected choice, saved values, effective consumer values and recovery evidence in an isolated test environment. Inspect native/plugin state without modifying it through custom code.

Forbidden: new plugin, Fusion JS, DOM mutation helpers, listeners, command/hotkey switching, auto-detection, timers, runtime modes, snapshots or hidden state. The optional Style Settings plugin's existing configuration class/stylesheet application is the mechanism under test, not permission to write theme DOM code. If all dependency class mutation were prohibited, this assisted route would not qualify; return to documentation-only review.

No scope for typography/spacing redesign, Card Layout, Focus enhancement, Auto Hide, Effects or Reading selectors. Decision 012 and Phase 2/3 contracts remain intact. No production changes, new token families or full preset implementation are authorized by this gate review.

## 3. Acceptance criteria

### UI — understandable configuration profile

The intended user must be able, using the proposed labels/help alone, to explain and predict these four scenarios before seeing the result:

1. Choosing a recommendation supplies defaults, not a runtime mode or exact configuration.
2. An explicit personal value still wins, so choosing a recommendation may produce no change on that axis.
3. Selecting Default retains personal values; it does not reset all settings.
4. Resetting an individual setting removes its override, while resetting a section clears values; neither is an undo history.

Record actual answers and misunderstandings, not an inferred usability PASS from a screenshot. No silent mismatch between displayed metadata default and effective recommendation value: static guidance must make the distinction clear without JS. A selected profile label must not falsely certify an exact look. Configuration must remain visible and reachable through the normal plugin UI and keyboard access.

### Override — prove priority at the consumer

Required contract: **User override > Preset recommendation > Theme default**.

| Test state | Required outcome |
| --- | --- |
| No saved individual override, Default | Theme baseline at token and native consumer |
| No saved individual override, recommendation selected | Recommendation at token and consumer |
| Distinct saved user value, recommendation selected | User value at token and consumer |
| Saved user value equals theme default, recommendation differs | Saved value still wins; no intent inferred from value equality |
| Change user value while selected, then return to Default | New user value remains; no per-profile storage illusion |

Record selected key, saved-key presence/value, computed token and actual public-variable consumer, applicable mode/class and stylesheet cascade evidence. Check Light/Dark and relevant body-scoped alias resolution. No !important, increased preset specificity or descendant assignments that bypass user scope. Do not assume plugin variables are inline: fixed-version source shows generated stylesheet rules.

### Recovery — preserve rather than snapshot

Verify Default → recommendation → Default and repeated selection without loss of user keys or stale option influence. With one recommendation there is no A/B profile assertion; cross-recommendation behavior remains unproven until a separately reviewed extension adds a second test option.

Verify selection reset, individual reset and section reset with their distinct meanings; plugin disable/re-enable and application restart with retained state clearly explained. Plugin absent/disabled must leave a usable baseline. Re-enable may restore stored selection: it must not be advertised as neutral Default unless evidence shows that behavior.

Record pre/post saved configuration and effective values. Back up the isolated test configuration and restore it after QA; no destructive resets in the user's working environment. Success means current values survive recommendation changes, not recovery of an arbitrary overwritten history.

### Maintenance — bounded declarative cost

Require zero new semantic tokens, zero per-profile duplicates of the existing four setting definitions, zero consumer-specific preset branches and zero duplicated Light/Dark palettes. One recommendation should need only the approved variable assignment and selection metadata; neutral Default adds no recommendation override.

Report declaration/setting/token counts and enumerate touched consumers. If this single-axis test requires parallel user/preset/effective token families, replicated selectors throughout modules or special-case runtime synchronization, it fails the current maintenance gate. Do not extrapolate support for four presets or all tokens from one successful axis.

### Regression and evidence integrity

Any future experiment must pass Build / Check / diff-check, generated synchronization and approved-scope review. Desktop evidence must name app/plugin versions, artifact hash, settings and isolation/restoration method. Preserve Phase 2 content, native width toggle/responsiveness, Source caret/blank-line navigation and P3 workspace/Focus contracts. PASS, FAIL, N/A and untested must remain separate; no universal plugin/pop-out/platform certification.

## 4. Failure conditions and disposition

**Reject the bounded assisted preset design** if an intrinsic problem cannot be resolved within existing tokens, truthful static UX and the no-runtime constraints:

- Saved user values are overwritten, masked by required preset specificity, or mistaken for unset when equal to defaults.
- Neutral Default cannot remove recommendation influence while keeping user overrides; configuration loss or irrecoverable stale selection occurs.
- Users cannot understand recommendation versus override/reset using truthful static guidance, and resolving it requires dynamic UI/runtime code.
- Selection/recovery needs a companion plugin, JS, DOM patch, automatic switching, snapshots or hidden behavioral state.
- A minimal axis requires extensive duplicate tokens/settings/consumer branches or protected content/geometry changes.
- Meaningful user value cannot be demonstrated beyond manually editing the existing setting; maintenance/confusion exceeds the benefit.

An isolated fixable defect is a failed prototype, not automatically proof every preset concept is impossible. Stop promotion, revise the bounded design through review and retest only with explicit scope. Missing environment evidence, unavailable Desktop QA or ambiguous observations mean **Needs more research**, not fabricated PASS or rejection of all variants. Rejecting the assisted design leaves documentation recipes eligible for independent review.

## 5. Decision gate

**Proceed to prototype**.

A small experiment is worthwhile because source research establishes selection/persistence mechanisms while the remaining uncertainties—actual cascade, UI meaning and recovery—are empirical. Repeating architecture prose alone cannot resolve them. This is a recommendation for the next explicitly authorized task, **not execution permission in this documentation-only task**.

Before that task, Chat must review this gate and approve the exact existing variable, values, minimal metadata/CSS scope and isolated Desktop protocol. No prototype is created now. Any acceptance failure blocks implementation; passing the experiment leads to a separate decision review, not automatic full-preset development or release. Earlier Needs more research describes unverified design behavior; this gate permits testing that uncertainty without declaring it solved.
