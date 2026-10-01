# Architecture Decisions

## Decision 001 — Theme + Style Settings

采用 **Obsidian Theme + 可选 Style Settings**，而不是优先开发 Community Plugin。当前需求可以由 CSS 和 Design Token 完成，不引入 TypeScript、Plugin API、DOM patch 或复杂 JavaScript runtime。

## Decision 002 — Semantic Design Token

以 `--theme-*` Semantic Design Token 作为视觉系统基础，再映射到 Obsidian 公共 CSS 变量。组件优先消费语义变量，避免散落硬编码颜色。

## Decision 003 — Modular source and generated artifact

长期维护 `src/*` 模块，通过 Build 生成根目录 `theme.css`。禁止把生成后的巨型单文件作为主要源码直接维护。Build 顺序固定为 `base → workspace → editor → navigation → components → layout → effects → apps`，Style Settings 元数据先于这些模块输出。

## Decision 004 — Reference, not wholesale copying

Composer、Border 等主题仅作为设计、selector 和实现思路参考，不直接复制完整 CSS、Build System 或目录结构。未来如果实际复用 MIT 授权代码，必须保留对应许可证文本和 attribution，并记录来源及复用范围。

## Decision 005 — Current metadata formats

Theme manifest 使用 Obsidian 当前要求的 `name`、`author`、`version`、`minAppVersion` 字段。Style Settings 使用其插件解析的 `/* @settings ... */` YAML 注释，并通过变量型设置覆盖 `--theme-*` Token。

参考：

- [Obsidian Manifest documentation](https://docs.obsidian.md/Reference/Manifest)
- [Official Obsidian sample theme](https://github.com/obsidianmd/obsidian-sample-theme)
- [Style Settings documentation](https://github.com/mgmeyers/obsidian-style-settings)

当前 Working Title 保留在本地 manifest 中，但其名称不满足 Obsidian 社区目录关于不得包含 “Obsidian” 或 “Theme” 的规则；发布命名是后续明确决策，不在 Bootstrap 内擅自决定。

## Decision 006 — Prefer documented Obsidian variables

Foundation 层优先把 Theme Semantic Token 映射到 Obsidian 当前公开的 CSS Variables；只有官方变量不能表达必要状态时，才使用范围受限的 selector。这样可以减少对 DOM 结构和 class 细节的依赖。

当前映射依据包括官方的 Colors、Typography、Radiuses、Tabs、Navigation、Ribbon、Status Bar、Scrollbar、File、Link 和 Code 变量文档。未加入已标记废弃的 RGB/HSL 派生变量；Accent 派生色使用 `color-mix(in oklch, ...)`。

- [Obsidian CSS variables reference](https://docs.obsidian.md/Reference/CSS%20variables/CSS%20variables)
- [Obsidian Colors reference](https://docs.obsidian.md/Reference/CSS%20variables/Foundations/Colors)

## Decision 007 — Style Settings color compatibility workaround

Accent 继续直接覆盖 `--theme-accent`，但暂时使用 `variable-text` 接收 hex 或其他 CSS color 值，不使用 `variable-color` 的颜色选择器。原因是 Style Settings 1.0.9 在 Obsidian 1.13.1 上存在已确认的 Pickr `null.clone` 兼容问题；官方最小复现使用合法的 `variable-color`、`format: hex` 和带引号的 hex 默认值仍会报错。

这是主题侧的最小兼容措施，不改变 Token 链路，也不增加设置。上游问题修复并经真实 Desktop 验证后，可以重新评估恢复颜色选择器。

用于确认问题归属的最小复现如下；将它单独作为 Obsidian CSS snippet 加载即可，不依赖本主题：

```css
/* @settings
name: Variable color reproduction
id: variable-color-reproduction
settings:
  -
    id: accent-color
    title: Accent color
    type: variable-color
    format: hex
    default: '#ff0000'
*/
```

- [Style Settings Issue #216](https://github.com/community-archive/obsidian-style-settings/issues/216)
