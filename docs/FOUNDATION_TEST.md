# Foundation Desktop Test

## Result

- Initial test: Conditional Pass / Fix Required
- Foundation fix QA: NEEDS FIX (historical; native controls Accent issue identified)
- Native controls Accent fix: implemented
- Desktop retest: PASS
- V0.1 Foundation Desktop Validation: PASS

## Environment

- Obsidian version: 1.13.7
- OS: Windows 25H2 Build 26200
- Theme version: 0.1.0 (`Obsidian Fusion Theme`)
- Commit: `6f2ba42eb38020eaca9c6d2793269f90428dd101`
- Installed `theme.css` and release test package hash: identical

# 1. Installation

- [x] `manifest.json` 可识别
- [x] `theme.css` 正常加载
- [x] Theme 出现在 设置 → 外观 → 主题

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

- [x] 修改四个设置时均无 console error
- [x] Restart persistence
- [x] `null.clone` error 未出现

## Accent Color

检查：

- [x] 输入新的 hex / CSS color value 后生效
- [x] Active Tab
- [x] Hover
- [x] Indicator
- [x] Border
- [x] Selected File

## Border Radius

检查：

- [x] Tabs
- [x] UI Card
- [x] Status Bar

## Content Width

检查：

- [x] Reading View

## Line Height

检查：

- [x] Paragraph spacing

## Native Controls Accent

- Code fix: Fixed
- Desktop validation: PASS

检查 Dark mode 与自定义 Accent：

- [x] 设置 → 外观 → 字体大小 slider active fill 跟随 Accent
- [x] Slider 在 Light / Dark 下随红、蓝、绿 Accent 即时变化
- [x] 设置 → 关于 → 已启用 toggle 跟随 Accent
- [x] Toggle 在 Light / Dark 下无固定紫色残留
- Slider thumb 保持白色中性控件，不属于 Accent linkage failure
- Checkbox：N/A — Desktop 测试环境无独立可验证入口；公共 Accent mappings 由 automated check 覆盖

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
- Slider active fill follows red, blue, and green Accent immediately in Light and Dark modes.
- Enabled toggle follows Accent in Light and Dark modes; the fixed purple residue is gone.
- White slider thumb is a neutral control part and is not an Accent linkage blocker.
- Checkbox is N/A in this Desktop environment and is not a Foundation blocker; automated mapping checks pass.

Final regression: PASS.
V0.1 Foundation Desktop Validation: PASS.
```
