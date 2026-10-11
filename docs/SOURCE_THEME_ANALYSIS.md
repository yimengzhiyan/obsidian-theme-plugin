# Source Theme Analysis

## Scope and evidence level

Phase 3 planning reference, pending Chat review. Sources were consulted on 2026-10-11 through upstream repository README pages. This is a README-level design analysis, not a selector audit, source-code compatibility claim or Desktop evaluation. Upstream branches are mutable; exact source revisions must be pinned before implementation-level research. No upstream code, settings, presets or assets are imported.

The Fusion roles below are design interpretations. They do not imply that Composer or Border exclusively owns a feature or that Fusion already implements it.

## Composer

Primary source: [vran-dev/obsidian-composer README](https://github.com/vran-dev/obsidian-composer#readme).

Documented observations: Composer emphasizes comfortable reading/writing and presents text formatting, table and Callout styling. It documents three color schemes configurable through Style Settings. Its current development notes separate settings metadata from CSS and generate the final theme artifact.

Fusion interpretation: use content comfort as a reference when judging reading hierarchy and mixed text. Phase 2 already provides Fusion typography, tables and Callouts; comparison should identify a concrete gap before changing them. Color schemes can inform preset research, while Fusion retains its own semantic contract and override model.

Transfer boundary: do not adopt source-specific component/plugin dependencies, full CSS, settings catalog, color values or build structure by default. Pure CSS feasibility and native behavior are assessed separately. No claim of completed code-level analysis.

## Border

Primary source: [Akifyss/obsidian-border README](https://github.com/Akifyss/obsidian-border#readme).

Documented observations: Border describes configurable appearance with Style Settings, including Auto Hide, Card Layout, Hover line indicator and presets. Its credits identify other themes as sources of motion/layout ideas. These are feature references, not evidence that Fusion can reuse their implementation safely.

Fusion interpretation: study shell customization and opt-in layout separation for Workspace, Layout and Focus candidates. Presets suggest a way to coordinate optional presentation without unrelated per-component overrides. Effects remain restrained and independently reviewed.

Transfer boundary: no wholesale selector/settings/preset import. Auto-hide must retain keyboard and pointer recovery; card layout must preserve native panel resizing. Compatibility, cross-platform limitations and detailed selectors remain unverified for Fusion.

## Synthesis and gaps

| Area | Source evidence | Fusion planning conclusion | Missing evidence before implementation |
| --- | --- | --- | --- |
| Reading comfort | Composer README goal and component examples | Preserve Phase 2 baseline; investigate R01 only for a defined usability gap | Pinned source revision, comparable Light/Dark samples, Source interaction exclusions |
| Workspace / layout | Border named auto-hide and card-layout features | W01/W02/L01 candidates; native baseline remains available | Actual property/selector route, split-pane behavior, constrained-window and keyboard tests |
| Focus | Border auto-hide is documented; general Focus System is Fusion synthesis | F01/F02 candidates, no inherited behavior promise | Activation/recovery specification and CSS feasibility |
| Presets | Both document configurable schemes; Border documents presets | P01 candidate with Fusion-owned token model | Schema, persistence, override precedence and restoration design |
| Effects | Border hover indicator and motion/layout credits | E01/E02 optional candidates | Reduced-motion, selection/caret, clipping and performance evidence |

## Research protocol for later approved work

1. Select a reviewed matrix row; record the exact upstream commit, relevant file/section and license before selector analysis.
2. Describe the user-facing strength independently of its upstream CSS implementation. Mark inference, demonstrated source behavior and Fusion goals separately.
3. Map the goal to existing Fusion tokens and Obsidian public variables; justify any selector or new token with actual consumers.
4. Record native interaction risks, optional activation and regression cases. Compare against Phase 2 accepted differences.
5. If code is reused later, retain required license notices and attribution, including relevant third-party provenance. Do not assume repository-level licensing alone resolves nested credits.
6. Obtain Chat review before creating an implementation task. Neither source observation nor a screenshot is implementation authorization.

Source revisions, selector compatibility, detailed Desktop behavior and platform support remain open research items. This planning task performs no code-level source-theme port.
