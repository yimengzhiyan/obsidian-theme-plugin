# Phase 4 Architecture Review — Fusion Experience Layer

## Baseline and review status

Baseline: `main` at `a6a69c22184bb892cd121e210858354c31a0c745`, PR #11 merged with a merge commit. Phase 2 and Phase 3 are complete; P3.1/P3.2 Desktop QA PASS. P3.3 Width and Rhythm reviews conclude **NO NEW CSS REQUIRED** (A=5 / B=3 / C=0).

This document defines candidate scope and review gates only. It does not authorize prototypes, implementation, new tokens/settings, plugins or a release. Technical feasibility below is an architecture assessment, not a new DOM/browser verification. Historical pre-merge status in older documents does not override this Git baseline.

References: [Design Spec](THEME_DESIGN_SPEC.md), [Decisions](DECISIONS.md), [Tasks](TASKS.md), [Focus DOM evidence](P3_2C_FOCUS_DOM_EVIDENCE.md), [Reading DOM evidence](P3_3A_READING_DOM_EVIDENCE.md), [Rhythm audit](P3_3B_READING_RHYTHM_AUDIT.md).

## 1. Phase 4 Vision

**Fusion Experience Layer** means coherent, restrained choices over the existing content and workspace foundation: combine Composer-inspired reading/writing comfort with Border-inspired workspace customization, while preserving native Obsidian interaction.

Success is a comfortable, maintainable personal theme with understandable defaults and reversible choices. Feature count is not an exit gate. A review may conclude that existing contracts already satisfy the need, as Phase 3.3 did. No feature is required merely because it appears in this candidate list.

## 2. Candidate evaluation

### Preset System

- **User value:** reproducible visual configurations reduce manual adjustment and provide an understandable starting point.
- **Technical complexity:** medium for a small declarative set of visual choices; high for coordinated overrides, migration and reliable restoration.
- **Theme-only feasibility:** bounded visual bundles are a candidate for CSS and optional Style Settings. Automatic capture/import/export, workspace snapshots or command-driven switching are outside this no-runtime architecture. No setting type, preset schema or persistence mechanism is assumed verified here.
- **Risk:** preset declarations can override user choices, interfere with light/dark or Accent, and create unclear cascade precedence. Turning a preset off must restore current user overrides, not hard-coded defaults.
- **Decision:** prioritize a separate design review of a minimal declarative model. Require explicit default/preset/user-override precedence, reversible opt-out and a token-gap audit before any prototype. No implementation approval; existing four settings remain unchanged.

### Focus Enhancement

- **User value:** clearer recognition of the active pane in split workspaces, without reducing content readability.
- **Technical complexity:** low for a proven native shell-state refinement; high for header-hidden, pop-out and community-view coverage.
- **Theme-only feasibility:** native `.workspace-leaf.mod-active` already supports the approved boundary cue. Evidence does not establish a need for another cue or certify every view. Application focus (`body.is-focused`) is not pane activation.
- **Risk:** duplicating active-tab signals, weakening contrast, targeting plugin contents or inventing state. Hiding panels, editor opacity/blur and keyboard handling remain excluded.
- **Decision:** retain the completed Focus Foundation. Evaluate an enhancement only after a reproducible usability gap and fresh DOM evidence; no Reading Focus enhancement or Focus Mode. Do not expand selectors simply to increase coverage claims.

### Auto Hide System

- **User value:** potentially more content space while retaining access to workspace controls.
- **Technical complexity:** high because pointer, keyboard, touch, resize and hidden-control discoverability must agree.
- **Theme-only feasibility:** CSS can express presentation based on available states, but a robust system requires evidence that native states cover every access/reveal path. Hover alone is insufficient to establish keyboard or touch accessibility; no such evidence is accepted by this review.
- **Risk:** unreachable controls, hover traps, unexpected geometry changes, resize conflicts and plugin-button regressions. CSS visibility tricks must not substitute for a behavioral state machine.
- **Decision:** defer the system under current constraints. Only reconsider a narrowly specified native-state presentation after a dedicated accessibility/DOM review. If necessary behavior cannot be expressed without runtime code, reject it within this theme scope rather than add JS or a plugin.

### Card Layout

- **User value:** potentially clearer pane separation and grouping in multi-pane workspaces.
- **Technical complexity:** medium for a purely visual shell; high if it changes pane geometry or resize/stacked behavior.
- **Theme-only feasibility:** a decorative shell is a candidate, not a verified design. A layout engine, floating panels or automatic arrangement is outside scope. Existing spacing/radius/border contracts must be audited before proposing anything new.
- **Risk:** lost usable area, clipping, double boundaries, scroll/resize hit-area interference and inconsistent nested splits. Global workspace-leaf or Markdown-container rules are unacceptable shortcuts.
- **Decision:** defer implementation. A later visual prototype may be considered only with explicit scope approval, real split/stacked DOM evidence and unchanged native geometry/interaction. Do not retrofit card styling into Phase 2 content.

### Effects System

- **User value:** subtle shell feedback can clarify hover, press and active state while preserving a quiet reading environment.
- **Technical complexity:** low for static native-state feedback; medium/high for motion, compositing or broad compatibility.
- **Theme-only feasibility:** static visual feedback is the most plausible bounded candidate; existing workspace shells already provide it. Motion requires separate approval and reduced-motion/accessibility validation, not an assumed benefit.
- **Risk:** contrast loss, motion sensitivity, performance cost and cascade conflicts. No blur-based content dimming, decorative runtime behavior or plugin-specific effects.
- **Decision:** review genuine gaps in static feedback first; allow a no-change outcome. Advanced Animation remains deferred. This review approves no animation, effect token or setting.

## 3. Architecture constraints

- **Theme first; Style Settings optional.** Usable defaults must work without the plugin. Settings candidates require a separate scope approval; evaluation does not add settings.
- **No JS, DOM patch or runtime behavior.** Build-time tooling remains separate from the installed theme. No companion plugin, event listeners, keyboard handling or synthetic state.
- **Native Obsidian behavior first.** Preserve caret/navigation, native collapse/resize, tab behavior, plugin controls and user configuration. CSS presentation must not create hidden behavioral obligations.
- **Semantic token first.** Audit existing tokens, then public-variable consumers. New tokens need a demonstrated semantic gap and decision review; no speculative feature-token families.
- **Public variables before scoped selectors.** Require actual DOM/state evidence plus a need that existing public variables cannot express. Preserve modular source and the existing Build order; generated theme.css is never edited directly.
- **Reading contract stays closed.** Decision 012 remains effective; existing reading-width/file-line-width and Phase 2 typography/spacing suffice. Reading/Live Preview/Source stay native; Source visual differences are accepted for caret/keyboard reliability. No src/reading, width/spacing selectors, Reading Boundary or Reading Focus enhancement without a new reproducible public-variable/token gap and independent review.
- **Reference, not copying.** Composer/Border inform product ideas; any future code study must fix a source revision and respect licensing. No wholesale CSS reuse.

No candidate is promoted to implemented status or changes the existing deferred-feature contract. No numbered decision is superseded by this proposal.

## 4. Proposed roadmap — Review → Prototype → QA → Release

This is a conditional sequence, not a delivery commitment or schedule. Any gate may stop, narrow or defer a candidate.

| Gate | Required evidence / output | Exit condition |
| --- | --- | --- |
| Review | Concrete user problem; existing-contract audit; native DOM/states where relevant; settings/token and selector boundaries; explicit risks and rollback | Chat review and explicit approval of one bounded prototype, or documented no-change/defer decision |
| Prototype | Small isolated CSS-only experiment using approved scope; source/generated diff and contract comparison; no automatic promotion to main | Build/Check/diff-check PASS and implementation review before Desktop QA |
| QA | Actual Desktop versions/settings/artifact hash; Light/Dark, Accent/Radius extremes, narrow/nested/stacked panes, pointer/keyboard access, source caret and Phase 2/3 regression; settings off/on/restoration if relevant | No blocker; precise PASS/N/A/limits documented; rollback verified; compatibility claims limited to tested environments |
| Release | Reviewed integration diff, migration/defaults notes, installation/rollback guidance, named supported environments and known limits | Explicit release approval after integration; version decision separate from feature completion |

Suggested review order: declarative Preset model, evidence-driven Focus/static-feedback gaps, then Card shell feasibility. Auto Hide and advanced Effects remain deferred unless their separate gates can be satisfied. This order does not authorize a P4 implementation branch or prototype. A stable-defaults release may proceed without these features after its own review.

## 5. Release consideration — v0.x → v1.0

Keep v0.x as the iteration stage while optional experience choices and compatibility boundaries are unsettled. v1.0 should signal a stable documented contract, not completion of every candidate or the end of Phase 4.

Before proposing v1.0, review:

1. Stable defaults, token/public-variable contracts and any approved settings precedence; documented upgrade and rollback behavior.
2. Integration regression on explicitly supported Obsidian versions/platforms, optional Style Settings enabled/disabled and relevant keyboard/accessibility checks. Existing N/A remains N/A; community views/embeds/pop-outs are not universally certified.
3. Accurate README/install guidance, changelog, known limits, consistent version metadata and reproducible generated artifact. Final theme name and author remain maintainer decisions; consult current distribution requirements when publishing.
4. Attribution/licenses for any actual reuse, packaging readiness, release approval and a maintenance plan for future native-state changes.

No version bump, manifest change, package publication, deadline or v1.0 promise is made here. Candidate features can remain deferred at v1.0 if the supported experience and limitations are clear.
