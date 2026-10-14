# P4.1 Preset System Architecture Design Review

## Scope and evidence

Baseline: Architecture Review `b9462ae230684fea28ee63d6aa1632be22cc0a3c` and Feature Decision `58dd713b85934a38a7cd9df3f7dfbd790523ed90` on `codex/p4-architecture-review`. Phase 3 integration baseline is `a6a69c22184bb892cd121e210858354c31a0c745`.

References: [Architecture Review](P4_ARCHITECTURE_REVIEW.md), [Feature Decisions](P4_FEATURE_DECISIONS.md), [Design Spec](THEME_DESIGN_SPEC.md), [Decisions](DECISIONS.md). This document is design only, not an implementation plan or prototype authorization. The existing Prototype candidate classification remains conditional. No CSS, token, setting, plugin or version change is proposed for immediate execution.

Repository evidence: `src/base/variables.css`, `src/base/typography.css`, `src/workspace/workspace-tokens.css` and `settings/style-settings.css` establish tokens, public-variable consumers and four variable-based settings. A preset selector, mutual-exclusion mechanism, plugin reset/persistence behavior and runtime override precedence have not been verified by this review. Older status documents describe the pre-merge checkpoint; the above Git baseline determines this design context.

## 1. Problem Definition

Fusion may benefit from presets as understandable starting points for different personal workflows, rather than asking users to understand every token. Writing may favor sustained reading comfort; research may favor readable multi-pane comparison; a minimal experience may favor restrained chrome. These are hypotheses about preference, not measured requirements or new modes.

A preset would name a coherent configuration of the existing visual system. It must not capture workspace state, choose files, change editing behavior or turn deferred features on. Experience variants should preserve the same Foundation, Light/Dark and native behavior contracts.

The current four controls already allow individual configuration. A preset is justified only if users find named combinations easier to choose and can still override them. It is optional for v1.0; if selection and restoration add more confusion than value, keeping documented configuration recipes is a valid outcome.

## 2. Candidate Architecture

### Option A — Style Settings based preset

**Feasibility:** preferred research direction, not yet proven. Optional Style Settings could provide a named choice, but its exact supported mechanism and emitted class/variable scope must be verified against a fixed plugin version before claiming a working design. The existing four variable settings prove individual configuration only, not a multi-token preset system.

**Advantages:** a familiar configuration surface, no new companion plugin, potential explicit Default choice and mutually exclusive selection. The installed theme could remain CSS-only while the optional plugin supplies configuration state.

**Limits:** plugin-disabled fallback, persistence/reset, theme switching and mutual exclusion are unverified. Selecting a preset must not imperatively rewrite the four saved user settings. A selection class alone does not prove that user variables will win the cascade. Preset removal must reveal preserved overrides, not restore hard-coded values. No import/export or preset schema is assumed.

### Option B — CSS variable variant

**Selector/class source:** CSS cannot create a persistent user-selected class. A variant needs an external state source: a verified optional Style Settings class (therefore shared with Option A), an explicitly enabled snippet's declarations, or another native mechanism with evidence. Light/Dark classes describe appearance, not Writer/Research/Minimal intent; native active-pane state is not a preset selector. No new class or native preset state is assumed to exist.

**Theme-only feasibility:** variable bundles can express appearance once selection state exists. This is a presentation architecture, not a complete selector UX. A theme-only install without a state source stays Fusion Default; auto-detecting workflow or creating DOM classes would violate scope.

**Advantages/limits:** reuse existing consumers without new content selectors, but inheritance, scope and user override priority need proof. Merely increasing specificity could break overrides; consuming preset variables directly in components could bypass the semantic contract. Option B complements a selection surface rather than resolving selection/persistence by itself.

### Option C — CSS snippet / manual mode

**Feasibility and UX:** manual configuration recipes can use existing controls without shipping code. An optional user-managed snippet could supply overrides, but this task creates none. Snippets offer a route without Style Settings dependency, at the cost of file editing, enabling/disabling and understanding competing overrides.

Users could accidentally enable multiple snippets or keep overrides after switching themes. Theme loading order, snippet scope and conflict handling must be verified before recommending a snippet route. A snippet is not a saved-state snapshot and disabling it does not guarantee restoration of settings it previously caused the user to change. Prefer documentation recipes as a fallback concept, not a second simultaneously active preset system.

### Option D — Plugin (boundary reference only)

A plugin could own commands, capture/export/import, workspace restoration or migrations. Those are runtime/configuration-management responsibilities outside CSS. No plugin design, API, storage schema or implementation is included. If the desired preset requires those capabilities, narrow the theme feature or reject it under current constraints; do not introduce a companion plugin by implication. Optional Style Settings is the already accepted configuration dependency, not authorization for a new plugin.

## 3. Token Architecture

| Existing contract | How it could support a concept | Boundary |
| --- | --- | --- |
| Semantic colors and Accent | Maintain a coherent Light/Dark visual identity through existing public-variable mappings | Do not create preset palettes, override Callout semantics or yellow Highlight; user Accent remains authoritative |
| Radius / reading width / line height | Existing four settings already express personal appearance preferences | No new setting or value is chosen here; native readable-line-width switch and Source behavior remain unchanged |
| Workspace control radius/gap aliases | Existing consumers derive geometry from Foundation radius and xs spacing | No independent preset alias family; body-scoped derivation and actual consumer propagation need validation |
| Foundation spacing tokens | Existing spacing relationships describe consistent content and workspace rhythm | Changing a shared spacing token can affect multiple Phase 2 components; concept labels do not authorize those changes |

No token is added. Existing capability does not mean every token should be preset-controlled. The smallest useful preset may leave most tokens unchanged. Content spacing/typography, layout geometry and navigation are protected contracts, not free configuration axes.

The intended conceptual priority is **baseline defaults → selected variant → explicit user overrides**. This is a requirement, not a verified CSS ordering. Body-scoped aliases, descendant declarations, inline/user-injected variables and Light/Dark declarations can defeat simple source ordering. If this priority cannot be achieved with current architecture without new tokens or bypassing public variables, the present no-new-token design remains unresolved.

Restoration requirements:

- Default means no preset overrides; retain the user's existing values.
- Switching A → B removes A's influence, without writing over user settings.
- Disabling optional Style Settings must leave usable theme defaults; handling any retained plugin state needs evidence.
- User-authored snippets can override theme presentation; do not promise control over arbitrary CSS or attempt to defeat it with specificity/important.

## 4. Candidate Presets — concepts only

| Concept | Intended experience | Explicit non-goals |
| --- | --- | --- |
| Fusion Default | Existing balanced, tested Fusion baseline; users keep their settings | No reset of saved choices; no new visual design |
| Fusion Writer | Sustained writing/reading comfort using existing configurable appearance axes | No typography/spacing rewrite, Source parity, Zen Mode or auto-hide |
| Fusion Research | Readable comparison and navigation across native split panes | No workspace snapshots, auto-layout, plugin views or cardification |
| Fusion Minimal | Quiet, restrained shell presentation with visible, accessible controls | No panel hiding/collapse, content dimming or feature removal |

These names do not commit to four shipped presets, numeric values, tokens owned by each concept or distinct implementations. If existing contracts cannot produce meaningfully distinct variants without protected changes, reduce the set or retain recipes rather than invent capabilities.

## 5. Risks and open research questions

- **Style Settings limitations:** exact selection type, mutual exclusion, state scope, persistence/reset and disable/re-enable behavior remain unverified. Current variable-text Accent workaround stays intact.
- **Cascade/restoration:** the user-priority requirement may conflict with declarations closer to consumers; an apparent working preset can silently mask saved values. No guarantee follows from token names alone.
- **Maintenance cost:** variants multiply Light/Dark, overrides, Radius/Accent extremes, plugin on/off and upgrade/restoration checks. The four concepts are an upper conceptual list, not a promised support matrix.
- **User confusion:** Default versus reset, selected preset versus custom values, and simultaneous snippet/plugin state require clear language. Do not display a fixed preset name as proof of an exact configuration after user customization.
- **Theme/plugin boundary:** visual bundles may remain CSS-only, but automated capture, commands and migrations do not. Narrow scope instead of adding behavior.
- **Contract drift:** shared spacing and aliases can affect Phase 2/3 indirectly. Decision 012 remains effective: no Reading width/spacing selectors or Reading Focus/Boundary enhancement. Native width behavior and Source caret/navigation take priority.

## 6. Decision

**Needs more research**.

A bounded declarative concept is plausible, but the selection mechanism and baseline/preset/user precedence with reversible restoration are not evidenced. Therefore this review cannot conclude Prototype viable. The concept is not rejected: the prior Prototype candidate status remains conditional, with no implementation acceptance.

The missing evidence is a fixed-version Style Settings mechanism assessment, actual emitted state/cascade/restoration observations and confirmation that the concepts have distinct user value within existing tokens and protected contracts. These are design questions, not implementation tasks approved by this document. No implementation plan, new setting, token or plugin is produced.
