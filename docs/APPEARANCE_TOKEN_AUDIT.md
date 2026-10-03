# Appearance Token Gap Audit / Contract Freeze

## Result and scope

P2.1 audit completed. No new global Semantic Tokens are currently required or added. The existing V0.1 Foundation contract remains authoritative and is sufficient for Phase 2 basic component implementation. This is a contract assessment, not a claim that future components are implemented or visually validated.

Audit baseline: `main` at `f2f26e23edc7c216d0348c7823f9b98ccc1d281e` (PR #2 merged). Evidence: `src/base/{variables,light,dark,colors,typography}.css` and `src/workspace/sidebar.css`, plus the Obsidian official public variable references linked below. No palette, mappings, settings or source code change is part of this audit.

## Existing global contract

### Surface

- `--theme-bg-primary`
- `--theme-bg-secondary`
- `--theme-bg-sidebar`
- `--theme-bg-card`
- `--theme-bg-hover`
- `--theme-bg-active`

### Text

- `--theme-text-normal`
- `--theme-text-muted`
- `--theme-text-faint`
- `--theme-text-on-accent`

### Accent / interaction

- `--theme-accent`
- `--theme-accent-hover`
- `--theme-active-bg`
- `--theme-active-text`
- `--theme-hover-bg`
- `--theme-indicator`

### Border

- `--theme-border`
- `--theme-border-hover`
- `--theme-border-active`

### Existing component-supporting tokens

- Links: `--theme-link`, `--theme-link-hover`, `--theme-link-external`, `--theme-link-unresolved`
- Code: `--theme-code-bg`, `--theme-code-text`
- Radius: `--theme-radius-{xs,sm,md,lg,xl}`
- Spacing: `--theme-space-{xs,sm,md,lg,xl}`
- Motion: `--theme-transition-{fast,normal,slow}`
- Fonts: `--theme-font-interface`, `--theme-font-text`, `--theme-font-monospace`
- Line height: `--theme-line-height`
- Reading width: `--theme-reading-width`

Brace notation above lists existing suffixes; it does not declare new CSS variables. Light / Dark share the color contract; mode-neutral dimensions and typography live in `variables.css`. Hover / active surfaces derive from Accent, and Obsidian mappings consume these tokens.

## Gap audit by stage

### P2.2 Typography

Obsidian provides H1–H6 color, size, weight and line-height variables, bold / italic variables, and paragraph / heading spacing variables. Examples include `--h1-color`, `--h1-size`, `--h1-weight`, `--h1-line-height`, `--bold-color`, `--bold-modifier`, `--italic-color`, `--p-spacing` and `--heading-spacing`.

Decision: do not add heading-specific Theme Tokens in P2.1. P2.2 must first settle the typography design, preserve user font settings, and demonstrate any property that needs an independent Theme Token. Typography implementation has not started. Sources: [Headings](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Editor/Headings.md), [Typography](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Foundations/Typography.md).

### P2.3 Links / Tags / Highlight

Links already have Theme Tokens. Tags expose public color, background, border and radius variables; Highlight exposes `--text-highlight-bg`.

Decision: do not pre-create `--theme-tag-*` or `--theme-highlight-*`. Add a component-specific token only if the reviewed component requires configurable visual semantics independent of Accent / Surface / Border. Sources: [Tag](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Editor/Tag.md), [Colors](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Foundations/Colors.md).

### P2.4 Code / Quote / Table

Code already has background and normal text tokens. Obsidian provides syntax-highlighting variables, Blockquote background / border / text variables, and Table surface / text / border / selection variables.

Decision: do not pre-create syntax palette tokens, table-specific global tokens or blockquote-specific global tokens. Prefer existing Surface / Text / Border / Accent tokens through public variables. Sources: [Code](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Editor/Code.md), [Blockquote](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Editor/Blockquote.md), [Table](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Editor/Table.md).

### P2.5 Callout

Obsidian provides Callout public variables for color, borders, radius, title and content, plus callout-type color variables.

Decision: no `--theme-callout-*` family may be introduced in P2.1. P2.5 will assess actual design needs against public variables and the frozen contract. Source: [Callout](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Editor/Callout.md).

### P2.6 Navigation / File Explorer

Foundation already maps nav text, hover and active / selected states. Obsidian also exposes size, weight, white-space, indentation-guide and collapse-icon variables.

Decision: prefer mapping existing Theme Tokens or using official numeric variables. A folder-specific scoped selector is allowed only when public variables cannot express the required behavior. Advanced Rainbow Folder remains deferred. Source: [Navigation](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Components/Navigation.md).

## Contract Freeze gate

A proposed Semantic Token must satisfy all five conditions:

1. It expresses a clear visual semantic, rather than a temporary value for one selector.
2. Existing Theme Tokens cannot express that semantic.
3. Obsidian public CSS variables combined with existing tokens cannot simply express it.
4. It has an identified consumer.
5. It is required by actual work, rather than a hypothetical future need.

Component-specific tokens additionally require independent, reusable visual semantics. Contract freeze prevents speculative expansion; a demonstrated need can be reviewed in its component stage. It does not require all native syntax or callout-type colors to follow Accent.

Next step: P2.2 Typography — pending Chat design review. No P2.2 implementation is authorized by this audit.
