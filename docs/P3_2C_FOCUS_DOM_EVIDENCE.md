# P3.2c-0 Focus State DOM Evidence

# Environment

- Collection date: 2026-10-13 (Asia/Shanghai).
- Obsidian 1.14.4; Installer 1.10.6.
- Windows 25H2 / 26200.8737; Style Settings 1.0.9.
- Fusion Theme baseline: `3cf65addc96a3356eee91861ae485db19b6fd97b`.
- Branch: `codex/p3-1-workspace-fusion`.
- Dark mode. Native DevTools Console / Live Expressions; read-only DOM queries.
- Pane A: existing `Typography QA P2.2`, Live Preview (`data-mode="source"`).
- Pane B: existing `P2.3 Existing Target`, Live Preview (`data-mode="source"`).
- Two independent left/right tab groups. A retained native stacked mode; B used ordinary tabs. Original two-leaf stacked group was also observed.
- No note content, CSS, DOM attributes, event listeners or theme runtime were intentionally modified.
- Collection complete. This document records evidence and selector candidates only; it does not implement Focus System.

# Markdown Active Pane

## Pane A active

```text
app-container: app-container
workspace: workspace is-primary-sidedock-open is-left-sidedock-open
root: workspace-split mod-vertical mod-root
A tab group: workspace-tabs mod-stacked mod-top mod-active
A parent: workspace-tab-container
A leaf: workspace-leaf mod-active
A content: workspace-leaf-content
A content data-type: markdown
A content data-mode: source
A header: view-header
```

The leaf and header have no data attributes in the captured shell. The A leaf also has native geometry style `left: 40px; min-width: 734px; max-width: 734px;`; it is not a focus signal.

## Pane B inactive

```text
B tab group: workspace-tabs mod-top mod-top-right-space
B parent: workspace-tab-container
B leaf: workspace-leaf
B content: workspace-leaf-content
B content data-type: markdown
B content data-mode: source
B header: view-header
```

The B leaf and header have no data attributes in the captured shell.

# Markdown Inactive Pane

Native click in B content switched the active pane without editing text.

## Pane A inactive

```text
A tab group: workspace-tabs mod-stacked mod-top
A leaf: workspace-leaf
A content: workspace-leaf-content [data-type="markdown"] [data-mode="source"]
A header: view-header
```

## Pane B active

```text
B tab group: workspace-tabs mod-top mod-top-right-space mod-active
B leaf: workspace-leaf mod-active
B content: workspace-leaf-content [data-type="markdown"] [data-mode="source"]
B header: view-header
```

App container, workspace, root, content attributes and header attributes did not change. `mod-active` moved between leaves and, for independent splits, between tab groups. Class token order is not meaningful.

## Stacked group observation

Before splitting, both Markdown leaves shared `workspace-tabs mod-stacked ... mod-active`. Only the selected leaf had `workspace-leaf mod-active`. Clicking A moved the leaf class from B to A while both still shared the active tab container. A tab group's active class cannot identify an individual stacked leaf.

# View Header

Both Markdown headers had exactly `class="view-header"`, with no `data-*`, `active`, `focused`, `selected`, `aria-selected` or `aria-current` attribute on the header itself.

Observed element structure (two descendant levels; deeper SVG internals omitted):

```text
workspace-leaf
└─ workspace-leaf-content[data-type="markdown"][data-mode="source"]
   └─ div.view-header
      ├─ div.view-header-left
      │  └─ div.view-header-nav-buttons
      ├─ div.view-header-title-container.mod-at-start.mod-fade.mod-at-end
      │  ├─ div.view-header-title-parent
      │  └─ div.view-header-title[tabindex="-1"][contenteditable="true"]
      └─ div.view-actions.mod-raised
         ├─ button.clickable-icon.view-action.mod-bookmark[aria-label="书签"]
         ├─ button (native reading/editing view toggle)
         └─ button.clickable-icon.view-action[aria-label="更多选项"]
```

No header class/attribute or recorded child structure changed on A/B activation. `mod-raised` and title fade/position classes appeared on both states; these observations do not establish them as focus selectors.

# Window Focus

Before, docked DevTools and Obsidian window focused:

```text
theme-dark mod-windows is-frameless is-hidden-frameless obsidian-app styled-scrollbars show-inline-title is-floating-nav auto-full-screen show-ribbon show-view-header css-settings-manager is-maximized is-focused
```

After, independent DevTools foreground and ordinary Obsidian main window unfocused:

```text
theme-dark mod-windows is-frameless is-hidden-frameless obsidian-app styled-scrollbars show-inline-title is-floating-nav auto-full-screen show-ribbon show-view-header css-settings-manager
```

`is-maximized` changed because the native window was restored while changing the inspection setup; it is a geometry state. `is-focused` was absent when the separate inspector had focus. App container/workspace/root classes stayed unchanged. Active leaf state persisted through loss of application focus.

## Regained focus

After the independent inspector showed the unfocused state, a one-shot delayed read was entered in its Console. The main Obsidian window was activated and held in focus until the read completed. The completed Console result was then inspected:

```text
theme-dark mod-windows is-frameless is-hidden-frameless obsidian-app styled-scrollbars show-inline-title is-floating-nav auto-full-screen show-ribbon show-view-header css-settings-manager is-focused
```

Returning to the separate inspector again produced the live body value without `is-focused`. This verifies loss/regain independently of the inspector's own focus. The focused snapshot was an ordinary window, so it has no `is-maximized`.

The app container, workspace and root classes in the focused/docked snapshot and fresh unfocused/undocked snapshots were identical. Leaf activity remained on the previously active pane; window focus does not select a different leaf. The controlled refocus query sampled the body class only, not a full shell snapshot.

Inspection caveat: background docked Live Expression values remained stale when switching to Explorer. They must not be used as evidence that focus did not change. Separate DevTools produced fresh unfocused values. A one-shot Console delay captured the focused main window without requiring inspection input in it:

```js
await new Promise(r => setTimeout(() => r(document.body.className), 15000))
```

The timer completed once. No application event listener, persistent global helper, DOM mutation or CSS mutation was added. Temporary Live Expressions were removed after collection.

# Plugin View

View type: Graph, the existing Obsidian core Graph plugin, opened through the native Ribbon. No community plugin was installed. Graph replaced the Markdown view in Pane B; A remained Markdown.

```text
Graph tab group: workspace-tabs mod-active mod-top mod-top-right-space
Graph parent: workspace-tab-container
Graph leaf: workspace-leaf mod-active
Graph content: workspace-leaf-content
Graph content data-type: graph
Graph content data-mode: absent
Graph header: view-header
Graph header data attributes: none
```

Observed structure:

```text
workspace-leaf.mod-active
└─ workspace-leaf-content[data-type="graph"]
   └─ div.view-header
      ├─ div.view-header-left
      │  └─ div.view-header-nav-buttons
      ├─ div.view-header-title-container.mod-at-start.mod-fade.mod-at-end
      │  ├─ div.view-header-title-parent
      │  └─ div.view-header-title
      └─ div.view-actions.mod-raised
         ├─ button.clickable-icon.view-action.mod-bookmark[aria-label="书签"]
         └─ button.clickable-icon.view-action[aria-label="更多选项"]
```

Markdown and Graph share the leaf/content/direct-header shell and the leaf `mod-active` state. Graph's title lacks Markdown's `tabindex="-1"` and `contenteditable="true"`; Graph lacks the Markdown editing/reading toggle. Header action counts and editable-title attributes cannot be assumed across view types. This establishes common shell behavior for this core plugin, not arbitrary community views.

# Findings

Observed candidates, bounded to the tested version/platform:

- `.workspace-split.mod-root .workspace-leaf.mod-active` identifies the active main leaf in the observed independent split and stacked layouts.
- `.workspace-split.mod-root .workspace-leaf:not(.mod-active)` identifies other main leaves, but does not itself establish that they are visible. Hidden tabs must be considered in any later design.
- `.workspace-split.mod-root .workspace-leaf > .workspace-leaf-content > .view-header` is the observed main-workspace header chain for Markdown and Graph. Retain the main-workspace boundary; do not broaden to sidebars or view content descendants.
- `body.is-focused` is the observed application-focus marker and is distinct from leaf activity. Both the lost and regained state were read from runtime.

For a later review, `body.is-focused .workspace-split.mod-root .workspace-leaf.mod-active > .workspace-leaf-content > .view-header` is an evidence-supported intersection of window focus, active main pane and its direct header. This is a selector recommendation, not added CSS. Its unfocused counterpart can start at `body:not(.is-focused)` if the later design calls for window-level state. Neither condition proves that the Markdown caret has keyboard focus.

Do not use invented header focus/selected classes, tab container activity as individual stacked pane activity, Markdown data-mode as a focus marker, or geometry styles as focus state. `:focus` / `:focus-within` are element keyboard-focus conditions and are not established by this collection as equivalent to Obsidian's active leaf or application focus.

Compatibility with community custom views, pop-out windows, other Obsidian versions and other platforms has not been established.

# Collection Query

Read-only Live Expression used to enumerate actual attributes and two header descendant levels. Array rows were read from the native DevTools result. Long inline previews were truncated by DevTools; no omitted button attribute or style value was reconstructed from guesses.

```js
(() => {
  const rows = [];
  const walk = (e, name, depth) => {
    if (!e) {
      rows.push(name + ': null');
      return;
    }
    rows.push(name + ': ' + e.tagName.toLowerCase() + ' ' +
      JSON.stringify(Object.fromEntries(
        [...e.attributes].map(a => [a.name, a.value])
      )));
    if (depth) {
      [...e.children].forEach((child, i) =>
        walk(child, name + '/' + i, depth - 1));
    }
  };
  walk(document.body, 'body', 0);
  walk(document.querySelector('.app-container'), 'app', 0);
  walk(document.querySelector('.workspace'), 'workspace', 0);
  walk(document.querySelector('.workspace-split.mod-root'), 'root', 0);
  [...document.querySelectorAll('.workspace-split.mod-root .workspace-leaf')]
    .forEach((leaf, i) => {
      walk(leaf, 'leaf' + i, 0);
      walk(leaf.parentElement, 'leaf' + i + '/parent', 0);
      walk(leaf.parentElement.parentElement, 'leaf' + i + '/grandparent', 0);
      walk(leaf.querySelector(':scope > .workspace-leaf-content'),
        'leaf' + i + '/content', 0);
      walk(leaf.querySelector(
        ':scope > .workspace-leaf-content > .view-header'),
        'leaf' + i + '/header', 2);
    });
  return rows;
})()
```

`document.body.className` was also observed separately to avoid the array preview truncating the body class. Only the targeted application shell and header attributes were collected; Markdown content was not included in the query.

# Validation

- `npm run check`: PASS on an isolated copy of the repository's tracked working files. The check rebuilds generated CSS, so the isolated copy was used to keep repository and installed `theme.css` untouched.
- Repository `theme.css` SHA-256 remained `081012411FC2A02B9D6C21D4FCC2D99AF0A34BA87A63F151274C42C12C847064`.
- Eight existing vault Markdown note hashes matched the pre-QA baseline.
- `git diff --check`: PASS on the final document before committing; the staged diff was checked as well.
- Only this DOM evidence document belongs to the requested commit. Existing uncommitted `docs/CURRENT_STATUS.md` changes are excluded.
