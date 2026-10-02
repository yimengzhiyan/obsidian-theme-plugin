# Foundation Desktop Test

## Result

- Initial test: Conditional Pass / Fix Required
- Foundation fix QA: NEEDS FIX
- Native controls Accent fix: implemented
- Desktop retest: pending

## Environment

- Obsidian version:
- OS:
- Theme version:
- Commit:

# 1. Installation

- [ ] `manifest.json` 可识别
- [ ] `theme.css` 正常加载
- [ ] Theme 出现在 设置 → 外观 → 主题

问题记录：

```text

```

# 2. Light Mode

## Editor

- [ ] 编辑模式背景
- [ ] 阅读模式背景
- [ ] 正文字体颜色
- [ ] 标题层级

## Workspace

- [ ] Tabs
- [ ] Sidebar
- [ ] Ribbon
- [ ] Status Bar

观察：

```text

```

# 3. Dark Mode

- [ ] 主背景
- [ ] 次级背景
- [ ] Sidebar
- [ ] Card 层级
- [ ] 长时间阅读舒适度

观察：

```text

```

# 4. Style Settings

- [ ] 修改四个设置时均无 console error

## Accent Color

检查：

- [ ] 输入新的 hex / CSS color value 后生效
- [ ] Active Tab
- [ ] Hover
- [ ] Indicator
- [ ] Border

## Border Radius

检查：

- [ ] Tabs
- [ ] UI Card
- [ ] Status Bar

## Content Width

检查：

- [ ] Reading View

## Line Height

检查：

- [ ] Paragraph spacing

## Native Controls Accent

- Code fix: Fixed
- Desktop validation: Pending

检查 Dark mode 与自定义 Accent：

- [ ] 设置 → 外观 → 字体大小 slider fill 跟随 Accent
- [ ] 设置 → 关于 → 已启用 toggle 跟随 Accent
- [ ] Checkbox checked / hover 状态跟随 Accent

# 5. Workspace

## Tabs

- [ ] normal
- [ ] hover
- [ ] active

## Navigation

- [ ] file item
- [ ] folder item
- [ ] active state

## Status Bar

检查：

- [ ] background
- [ ] border
- [ ] text

# 6. Compatibility

- [ ] Obsidian 当前版本
- [ ] Style Settings Plugin
- [ ] 默认插件
- [ ] 第三方插件基础兼容

# 7. Known Issues

记录：

```text
Initial test:
- Style Settings variable-color triggered "Cannot read properties of null (reading 'clone')".
- Accent did not drive every active / selected background.

Foundation fix:
- Accent input temporarily uses variable-text to avoid the upstream Pickr path.
- Hover and active backgrounds now derive from --theme-accent.

Foundation fix Desktop QA:
- Passed: clone error, Accent base linkage, selected file, active tab, indicator, active border.
- Needs fix: native slider fill and enabled toggle stayed purple in Dark mode.

Native controls Accent fix:
- Native Accent mappings now use mode-specific selector specificity.
- Checkbox Accent variables now map to Theme Semantic Tokens.
- Desktop validation is pending; do not mark Foundation PASS yet.

Retest the four settings and Accent state linkage in Obsidian Desktop.
```
