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
