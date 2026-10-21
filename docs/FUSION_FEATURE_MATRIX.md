# Fusion Feature Matrix

## Status vocabulary

Planning documents reviewed by Chat, as reported by the maintainer. Planning review alone does not authorize implementation. Source means design inspiration or evidence, not copied code. `Complete` describes the existing verified baseline; `Candidate` means documented but unapproved and unimplemented; `Deferred` remains outside current implementation scope. Current authority: Phase5 batched feature completion; W02/F01/F02/E01/E02 implemented pending integrated QA. Earlier per-feature deferrals are historical for these bounded5A capabilities.

Priorities: **Baseline** = preserve existing capability; **P1** = first review candidate; **P2** = evaluate after baseline/shell contracts; **P3** = later optional investigation; **Deferred** = no implementation commitment. Priorities are proposals, not deadlines. Composer/Border references are summarized in [source analysis](SOURCE_THEME_ANALYSIS.md); detailed upstream selector analysis remains pending.

## Completed capabilities

| ID | Capability | Source / rationale | Priority | Status / evidence |
| --- | --- | --- | --- | --- |
| B01 | Foundation semantic tokens, Light/Dark and public-variable chain | Fusion Foundation / Obsidian native variables | Baseline | Complete — [audit](APPEARANCE_TOKEN_AUDIT.md) |
| B02 | Four settings and basic tabs/sidebars/Ribbon/Status Bar/Scrollbar/native Accent controls | Fusion Foundation | Baseline | Complete — [QA](FOUNDATION_TEST.md) |
| B03 | Core typography with native Source editing | Fusion; Composer reading/writing inspiration, no code reuse claim | Baseline | Complete P2.2 — [QA](TYPOGRAPHY_TEST.md) |
| B04 | Links, Accent tags, independent yellow Highlight | Fusion / native variables | Baseline | Complete P2.3 — [QA](LINKS_TAGS_HIGHLIGHT_TEST.md) |
| B05 | Code, Accent quotes and neutral tables | Fusion; Composer content presentation inspiration | Baseline | Complete P2.4 — [QA](CODE_QUOTE_TABLE_TEST.md) |
| B06 | Callout shell with native semantic types/folding | Fusion / native semantics | Baseline | Complete P2.5 — [QA](CALLOUT_TEST.md) |
| B07 | Navigation/File Explorer wrapping, states and hierarchy | Fusion / native navigation | Baseline | Complete P2.6 — [QA](NAVIGATION_FILE_EXPLORER_TEST.md) |
| B08 | Cross-component regression and Live Preview quote-tag fix | Fusion Desktop ISSUE-01 | Baseline | Complete P2.7 — [QA](PHASE2_REGRESSION_TEST.md) |

## Phase 3 candidates

| ID | Module / feature | Source / confidence | Priority | Status | Dependency / review gate |
| --- | --- | --- | --- | --- | --- |
| W01 | Workspace: shell density and hierarchy refinement | Fusion baseline; Border customization documented | P1 | P3.1a Tab Shell refinement implemented; Desktop QA / final review pending; other modules untouched | [P3.1 plan](P3_1_WORKSPACE_FUSION_PLAN.md); preserve active/hover states and resizing |
| W02 | Workspace: optional chrome reduction | Border auto-hide documented; Fusion design interpretation | P2 | Phase 5A implemented / integrated QA pending | [Phase5 batch plan](P5_FEATURE_COMPLETION_PLAN.md); combined5A+5B Desktop QA, no per-feature gate |
| L01 | Layout: optional card/panel separation | Border Card Layout documented | P2 | Candidate; historically deferred | W01 contract; split/stacked panes and constrained-window QA; baseline fallback |
| F01 | Focus System: reversible content emphasis | Fusion synthesis; not asserted as an upstream named feature | P2 | Phase 5A implemented / integrated QA pending | [Phase5 batch plan](P5_FEATURE_COMPLETION_PLAN.md); combined5A+5B Desktop QA, no per-feature gate |
| F02 | Focus System: optional auto-hide/reveal | Border auto-hide documented | P3 | Phase 5A implemented / integrated QA pending | [Phase5 batch plan](P5_FEATURE_COMPLETION_PLAN.md); combined5A+5B Desktop QA, no per-feature gate |
| R01 | Reading Enhancement: opt-in mixed Chinese/English typography | Composer comfort goal documented; Fusion-specific interpretation | P2 | Phase 5B implemented / integrated QA pending | [Phase5 plan](P5_FEATURE_COMPLETION_PLAN.md); optional controls/progressive polish, native Source preserved |
| R02 | Reading Enhancement: first-line indent / granular spacing and emphasis | Fusion P2.2 deferred follow-up; upstream ownership unverified | P3 | Phase 5B implemented / integrated QA pending | [Phase5 plan](P5_FEATURE_COMPLETION_PLAN.md); optional controls/progressive polish, native Source preserved |
| P01 | Presets: semantic combinations and restoration model | Border preset mechanism and Composer color schemes documented | P2 | Candidate; historically deferred | Stable reviewed module contracts; define schema, override precedence and persistence first |
| E01 | Effects: restrained optional feedback / surfaces | Border motion inspiration credits; Fusion-specific interpretation | P3 | Phase 5A implemented / integrated QA pending | [Phase5 batch plan](P5_FEATURE_COMPLETION_PLAN.md); combined5A+5B Desktop QA, no per-feature gate |
| E02 | Effects: hover-line indication | Border Hover line indicator documented | P3 | Phase 5A implemented / integrated QA pending | [Phase5 batch plan](P5_FEATURE_COMPLETION_PLAN.md); combined5A+5B Desktop QA, no per-feature gate |

Future module candidates do not lift existing deferrals automatically. Promote a candidate only through Chat review and update TASKS with a bounded scope; keep the other candidates unimplemented. Presets follow the selected stable module contracts, not every candidate in this table.

## Continued deferrals

| ID | Feature | Source / rationale | Priority | Status |
| --- | --- | --- | --- | --- |
| D01 | Advanced Rainbow Folder | Fusion earlier roadmap; unnecessary for completed native hierarchy | Phase5C | Phase 5C implemented / integrated QA pending (historically Deferred; current maintainer batch authority) |
| D02 | Canvas / Graph redesign | Fusion earlier roadmap; separate application surfaces | Phase5C | Phase 5C implemented / integrated QA pending (historically Deferred; current maintainer batch authority) |
| D03 | Advanced Animation | Fusion scope boundary | Deferred | Deferred; E01 does not authorize it |
| D04 | Seamless Embed | Fusion earlier roadmap; source/selector feasibility unverified | Phase5C | Phase 5C implemented / integrated QA pending (historically Deferred; current maintainer batch authority) |
| D05 | Companion Plugin / runtime UI | Fusion architecture excludes runtime | Deferred | Deferred; not a CSS implementation route |
| D06 | Wholesale source-theme CSS, settings or preset import | Conflicts with independent token/module contract | Deferred | Excluded approach |

## Maintenance rule

Phase5 follows batched implementation and integrated QA under the maintainer instruction; implementation completion does not mean Desktop PASS. Update status only with evidence: source revision for upstream behavior, commit/check evidence for implementation, real Desktop results for QA and actual remote evidence for merge. New work must map to an existing ID or add a reviewed row; do not expand scope solely because a source theme contains a feature.

Phase5A scope: chrome-only Focus hierarchy, soft reveal without collapse, static/native active-line indication and reduced-motion-aware feedback. Decision013/014 remain effective.

Phase5C authority restores D01 optional native-folder palette, D02 Canvas/Graph presentation and D04 seamless embed shells. Historical deferrals remain provenance; no data/interaction engine or plugin patch implied.
