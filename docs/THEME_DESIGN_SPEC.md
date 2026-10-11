# Fusion Theme Design Specification

## Status and authority

Phase 3 planning draft — pending Chat review. No Phase 3 feature is implemented or authorized by this document. This specification defines product intent; [feature matrix](FUSION_FEATURE_MATRIX.md) defines candidate scope and status; [source analysis](SOURCE_THEME_ANALYSIS.md) records external evidence. TASKS tracks execution, CURRENT_STATUS tracks the actual branch and validation, and DECISIONS retains architecture decisions.

Before implementation, reconcile these documents through Chat review. A feature listed as a candidate is not an implementation task. Changes to scope must update the matrix and TASKS together; stable architecture changes must also be recorded in DECISIONS.

## Vision

Combine Composer's reading and writing emphasis with Border's configurable workspace and layout ideas into a personal, long-term Obsidian theme. Fusion should make daily writing, reading and navigation comfortable while remaining maintainable as Obsidian evolves. The goal is a coherent design system with deliberate defaults and optional enhancements.

Composer contributes inspiration for content presentation; Border contributes inspiration for workspace customization. These roles are Fusion's design interpretation of the upstream references, not a claim that their code or full feature sets should be imported. Evidence and adoption boundaries are in SOURCE_THEME_ANALYSIS.

The theme remains pure modular CSS with optional Style Settings. A default installation must remain useful without that plugin. Personal configuration should refine the same visual contract across Light and Dark rather than create independent themes with incompatible component behavior. `Obsidian Fusion Theme` remains a working title; final naming and maintainer attribution are release decisions.

## Completed baseline to preserve

Phase 2 exit gate is satisfied; P2.2–P2.7 are complete. Existing evidence is authoritative for detailed QA and accepted native differences.

| Capability | Completed contract | Evidence |
| --- | --- | --- |
| Foundation / P2.1 | Semantic colors, spacing, radius, typography, motion and width; Light/Dark; public-variable mappings; four optional settings: Accent, Radius, Content Width, Line Height; no Phase 2 global Token expansion | [Audit](APPEARANCE_TOKEN_AUDIT.md), [Foundation QA](FOUNDATION_TEST.md) |
| P2.2 Typography | H1–H6, paragraph/heading spacing and emphasis; Live Preview normalization; native Source caret and real blank-line navigation; user fonts respected | [Typography QA](TYPOGRAPHY_TEST.md) |
| P2.3 Links / Tags / Highlight | Link states, Accent-derived tag pills, yellow highlight independent of Accent | [Links QA](LINKS_TAGS_HIGHLIGHT_TEST.md) |
| P2.4 Code / Quote / Table | Code size and user monospace, native syntax colors; Accent-derived quotes; neutral readable tables and native editing | [Component QA](CODE_QUOTE_TABLE_TEST.md) |
| P2.5 Callout | Unified shell geometry and title/content spacing; native semantic colors, icons, aliases, blending and folding | [Callout QA](CALLOUT_TEST.md) |
| P2.6 Navigation | File Explorer typography, density, wrapping and hierarchy; Foundation hover/active/selected colors; native rename and chevrons | [Navigation QA](NAVIGATION_FILE_EXPLORER_TEST.md) |
| P2.7 Composition | Integrated regression PASS; ISSUE-01 normal/hover foreground fix for Live Preview quote tags verified at `0068eabc4a8177c8b26afdd8ab72579eafd80fc1`; Source and Reading unaffected | [Final QA](PHASE2_REGRESSION_TEST.md) |

Source rhythm, unresolved-link presentation, syntax palette and some table controls remain accepted native differences as recorded in Phase 2 QA. No new requirement may silently reopen those decisions. Desktop PASS and automated checks remain separate evidence.

## Future Phase 3 modules

All six modules are planning candidates. The order below is proposed for review, not a release commitment or permission to implement.

| Module | Purpose / candidate scope | Boundaries and acceptance questions |
| --- | --- | --- |
| Workspace | Refine tabs, sidebars, Ribbon and Status Bar into a consistent shell; investigate density and optional chrome reduction | Preserve tab switching, visible active state, resize/dividers and access to controls; evaluate constrained windows and keyboard use before hiding anything |
| Layout | Investigate optional panel separation / card layout and spacing across split panes | Keep normal native layout as the fallback; preserve resizing, stacked tabs, scrolling and long content; no DOM relocation or runtime |
| Focus System | Investigate reversible visual de-emphasis and optional auto-hide/reveal behavior | Off by default as a proposed rule; preserve discoverability, keyboard focus, pointer access and recovery; CSS feasibility must be established first |
| Reading Enhancement | Evaluate opt-in reading typography, Chinese/English text rhythm and embedded-content presentation | Respect fonts and width/line-height settings; no Source navigation hacks, syntax concealment or mandatory paragraph indent; Seamless Embed remains deferred pending separate review |
| Presets | Define a small set of coherent semantic-token combinations and a restoration contract | Decide persistence/export mechanism before implementation; no preset files or settings now; do not assume upstream preset schemas are compatible |
| Effects | Evaluate restrained optional surface/motion feedback using existing motion semantics | Baseline readable without effects; reduced-motion behavior and clipping/performance require QA; advanced animation remains deferred |

Detailed candidate IDs, source confidence, priorities and dependencies are maintained only in FUSION_FEATURE_MATRIX to avoid competing roadmaps.

## Development principles

1. **Token-first:** reuse existing `--theme-*` semantic tokens; add a token only for a reviewed independent, reusable meaning with actual consumers. Prefer Obsidian public variables, then narrowly scoped selectors when evidence proves a gap. Keep Accent separate from yellow Highlight and native Callout semantics.
2. **Modular CSS:** edit source modules, generate `theme.css`; preserve metadata-first output and `base → workspace → editor → navigation → components → layout → effects → apps` order. Create modules only when approved work needs them. No JavaScript runtime, framework, DOM patch or companion plugin.
3. **Native behavior preservation:** caret/navigation, folding, rename, selection, scrolling and panel resizing take precedence over visual parity. Reading and Source need not match pixel for pixel. Scope rendered-view styling explicitly.
4. **Optional complexity:** proposed layout/focus/effects features must have a reversible baseline. New settings require a reviewed purpose and token chain; do not generate a full settings catalog before consumers exist.
5. **Light/Dark and accessibility:** require legible text and focus states, semantic distinction, user font compatibility and reduced-motion handling for any motion feature. Narrow-window checks and real keyboard access are mandatory for shell changes. Mobile support is a separate review question, not a current QA claim.
6. **Reference with provenance:** study Composer/Border, design independently, pin source revisions before selector-level analysis. Any future code reuse requires license and attribution review. No wholesale CSS/settings/build imports.

## Admission and exit process

A candidate can become approved work only after Chat review records its user problem, source evidence or Fusion rationale, exact scope/non-goals, token/public-variable route, optional settings, native interaction risks and Desktop test plan. Select one bounded module at a time. CSS feasibility limits scope; a runtime-dependent idea remains deferred.

Implementation then requires repository checks, generated-artifact consistency and real Desktop QA across applicable Light/Dark and Live Preview/Source/Reading combinations. Include Phase 2 composition, four-setting propagation, Source navigation and narrow-layout regression where relevant. Record accepted N/A explicitly; automated validation does not establish visual PASS.

## Planning review questions

- Which Workspace improvement is useful enough to become the first bounded implementation task?
- Should Layout, Focus and Reading candidates proceed, remain deferred or be dropped after source/feasibility review?
- What minimal preset model preserves user overrides and supports return to baseline?
- Which shell states and platform combinations must be covered before opting into layout/focus behavior?

No implementation begins until these documents pass Chat review and a concrete task is approved. No PR is created for this planning branch before Chat review.
