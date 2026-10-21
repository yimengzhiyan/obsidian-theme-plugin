# Phase 4 Feature Decisions

## Authority and baseline

Architecture baseline: `b9462ae230684fea28ee63d6aa1632be22cc0a3c`, [Phase 4 Architecture Review](P4_ARCHITECTURE_REVIEW.md). Phase 3 was merged through PR #11 at `a6a69c22184bb892cd121e210858354c31a0c745`.

This is a feature decision review only. **No feature is accepted for implementation in this review.** A Prototype candidate is eligible for a separately approved design/prototype scope; it is not permission to write CSS or add settings. Feasibility statements are bounded architectural assessments, not new plugin-version or DOM verification. Existing numbered [decisions](DECISIONS.md) remain effective, including Decision 012. Older pre-merge status text is historical relative to the Git baseline.

## 1. Preset System

**Decision: Prototype candidate**, limited to a small declarative visual configuration model.

- **Theme-only feasibility:** CSS can define predetermined token combinations. A usable selection mechanism must be specified; CSS alone does not provide configuration capture, arbitrary preset storage, automatic restoration of prior values or workspace snapshots. No automatic preset switching is proposed.
- **Style Settings feasibility:** optional Style Settings is the candidate selection surface, consistent with the current theme route. Before a prototype, verify the installed plugin's supported setting mechanism, emitted class/variable scope, persistence and reset behavior. This review does not assert a working preset schema or add a setting. With the plugin absent/disabled, the theme must retain baseline defaults.
- **Plugin requirement:** no new companion plugin is required for the bounded declarative concept; optional Style Settings remains a community plugin. Runtime capture, command switching, file I/O, migration and workspace-state management would need capabilities outside theme CSS and are excluded, not delegated to a new plugin task.
- **Token architecture impact:** reuse existing semantic tokens and public-variable mappings. Specify the conceptual precedence baseline defaults → chosen preset → explicit user overrides, then prove it with actual cascade evidence. Avoid preset-specific color families or duplicate public-variable mappings. An unresolved override conflict blocks prototype approval; disabling a preset must expose retained user values rather than overwrite them.
- **Maintenance cost:** medium even for a small set: preset × Light/Dark × user overrides × plugin enabled/disabled, reset/restart and upgrade paths multiply QA. More presets multiply support burden; cap count in a later scope decision. Export/schema migration is excluded from the minimal model.
- **v1.0 suitability:** optional, not a prerequisite. A validated, reversible model could suit v1.0; an unproven override/restoration contract should remain deferred. Stable defaults can ship without presets.

**Next gate:** Chat design review of exact user need, small preset set, verified Style Settings mechanism, precedence/restoration table and regression plan. Only explicit subsequent approval allows a prototype.

## 2. Card Layout

**Decision: Prototype candidate**, restricted to a decorative workspace shell; content block cardification is **Reject** within this scope.

- **Fusion fit:** restrained pane grouping could support the Border-inspired workspace half of Fusion, provided Composer-inspired continuous reading/writing remains intact. A pervasive dashboard/card aesthetic is not a substitute for content comfort.
- **Content block cardification risk:** wrapping or decorating each paragraph, heading, list, Callout or code block would fragment reading flow, consume width and reopen Phase 2 spacing/typography. Reading and editable CodeMirror use different structures; visual parity would invite renderer/Source hacks. Do not cardify Markdown blocks or plugin internals.
- **Shell-level acceptability:** potentially acceptable as an optional visual treatment with an unchanged native baseline. No new padding/gap, pane sizing, hit-area, scrolling or layout behavior is approved here. If the intended card effect requires geometry changes, return to design review rather than silently broaden the prototype.
- **Selector complexity:** medium/high due to root vs sidebar, nested splits, stacked tabs, hidden leaves, headers and plugin shells. Require actual DOM evidence and a public-variable gap audit; no global workspace-leaf styling or guessed descendant chains. State interactions with the existing active-pane boundary must be explicit.
- **Live Preview risk:** clipping decorations, cursor/selection layers, scrollbars, embeds and long code/table content may fail if shell radius or overflow is imposed. Do not target CodeMirror/Markdown content or change overflow as a shortcut. Verify caret, selection, blank-line navigation and readable-width toggling in QA.

This promotes only the narrowly defined shell concept to a prototype candidate; the full Card Layout feature remains unimplemented. Layout engines, floating panels and auto-arrangement remain outside scope.

**Next gate:** Chat review of shell-only mockup, verified DOM/variable route, exact geometry invariants, off-state restoration and split/stacked/narrow-window QA. No prototype yet.

## 3. Focus Enhancement

**Decision: Defer.**

Existing Focus Foundation already distinguishes active/inactive main-pane header boundaries using native `.workspace-leaf.mod-active`. It is CSS only, without runtime behavior; `body.is-focused` remains application focus rather than a pane signal. No reproducible unmet user need is established by this review.

Theme territory is visual presentation of an existing native state without changing content readability or interaction. Focus Mode, keyboard/command handling, automatic pane selection, panel collapse, app-state orchestration or restoring a focus session enters plugin/runtime territory and is excluded. Inactive editor opacity/blur and Reading Focus enhancement remain disallowed. A hidden header's lack of a cue is a known scope limit, not evidence that a new state mechanism is approved.

**Next gate:** a concrete reproducible usability gap, fresh DOM evidence and independent scope review. Preserve the completed foundation until then.

## 4. Auto Hide System

**Decision: Defer.**

**Theme boundary:** styling existing native visibility/focus/hover states, only where all reveal/recovery paths remain usable. A hover rule can express a visual condition; it does not establish a complete accessible auto-hide system. This review approves no hiding or geometry changes.

**Plugin boundary:** timers, command/keyboard listeners, focus tracking beyond native states, panel-collapse orchestration, persisted behavior or guaranteed recovery require runtime capabilities outside the theme contract. No plugin implementation is proposed or authorized.

Primary risks are invisible yet focusable controls, inability to reach hidden controls by keyboard/touch, pointer traps, resize interference and plugin-button access. Require proof of native-state keyboard and pointer recovery before reconsidering any bounded presentation. If that proof needs runtime behavior, the system cannot proceed under current constraints.

**Next gate:** dedicated native-state/accessibility feasibility review; retain native visible controls meanwhile.

## 5. Effects System

**Decision: Defer.**

Existing hover/press/active shells already provide static feedback. This review identifies no required missing feedback and therefore no reason to introduce an Effects subsystem. Animation, blur, decorative compositing and plugin-specific effects remain deferred; runtime effects are outside scope. Token availability alone does not establish user value or authorize motion.

**Next gate:** documented feedback gap, minimal static alternative first, then explicit motion scope review only if needed; contrast, reduced-motion behavior, performance and keyboard visibility must be included in QA. No effect token/setting is created.

## Final feature matrix

| Feature | Decision | Reason | Next gate |
| --- | --- | --- | --- |
| Preset System — bounded declarative model | Prototype candidate | Useful coherent choices, but selection/precedence/restoration need proof | Chat design review; verify Style Settings mechanism and override/reset contract before separately approving prototype |
| Card Layout — workspace shell only | Prototype candidate | Could clarify panes while preserving continuous content; DOM/geometry safety unproven | Shell-only design and DOM review; approve exact prototype scope and QA |
| Card Layout — content block cardification | Reject | Fragments content and reopens Phase 2/Source/renderer contracts | No implementation gate; a different future product proposal would need independent review |
| Focus Enhancement | Defer | Existing native boundary suffices absent a proven gap; behavioral focus exceeds theme scope | Reproducible need and fresh native-state evidence |
| Auto Hide System | Defer | Accessible recovery/state coverage not proven; behavior may exceed CSS-only boundary | Native-state/accessibility feasibility review |
| Effects System | Defer | Existing static feedback suffices; new motion/blur lacks demonstrated need | Real feedback gap and independent scope/accessibility review |

Decision vocabulary is limited to **Prototype candidate**, **Accept for implementation**, **Defer**, **Reject**. No row uses Accept for implementation. Review → explicitly approved Prototype → QA → Release remains the gate sequence; this document adds no source, token, setting, plugin, version bump or release commitment. Reading Width/Rhythm stays closed under Decision 012 and the Phase 3.3 final contract.
