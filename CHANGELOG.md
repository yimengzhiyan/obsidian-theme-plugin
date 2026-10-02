# Changelog

All notable project changes will be documented in this file.

## [Unreleased]

### Added

- Added a Foundation Desktop test checklist for recording real Obsidian validation.
- Added a minimal Foundation test package containing only `manifest.json` and `theme.css`.

### Changed

- Aligned native slider, toggle, and checkbox Accent states with Theme Semantic Tokens using mode-specific Obsidian variable mappings.
- Changed Accent input to a text-based CSS color value as a compatibility workaround for the Style Settings `variable-color` / Pickr `null.clone` issue.
- Derived hover and active background Semantic Tokens from Accent in both Light and Dark modes.
- Extended Foundation checks to detect duplicate setting IDs, verify setting types/defaults, and enforce Accent-derived interaction backgrounds.
- Established the V0.1 Semantic Token contract and shared Light/Dark mode structure.
- Expanded mappings to documented Obsidian color, typography, radius, and workspace variables.
- Made Accent, Radius, Content Width, and Line Height settings flow through Theme Tokens.
- Replaced forced font families with system-level theme fallbacks that preserve Obsidian user overrides.
- Strengthened Foundation checks for generated output, token contracts, references, cycles, and CSS health.

## [0.1.0] - 2026-09-29

### Added

- Initial Obsidian theme project bootstrap.
- Semantic token, light/dark, typography, and basic workspace foundations.
- Deterministic CSS build and lightweight validation.
- Minimal Style Settings metadata and long-term project context documents.
