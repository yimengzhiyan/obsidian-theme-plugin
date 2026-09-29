# AI Handoff

- **项目**：模块化 Obsidian CSS Theme；`Obsidian Fusion Theme` 只是 Working Title。
- **当前阶段**：Bootstrap / V0.1 Foundation preparation；只建立工程 baseline，不实现高级功能。
- **架构**：编辑 `src/**/*.css` 与 `settings/**/*.css`，通过 `scripts/build.mjs` 按稳定顺序生成根目录 `theme.css`。
- **原则**：Semantic Design Token 优先；同时支持 Light / Dark；Style Settings 可选；不使用 Community Plugin runtime；不直接复制 Composer / Border。
- **现状**：已有 Token、Obsidian 变量映射、排版与基础 Workspace 样式，以及 4 个最小 Style Settings 控件。
- **立即下一步**：Review Bootstrap baseline；获准后从 `main` 创建 `codex/theme-foundation`，再推进 V0.1 Foundation。
- **限制**：本阶段不做 Auto Hide、Card、Rainbow Folder、Focus、Canvas、Graph、Preset 等高级功能。
- **验证**：运行 `npm run build` 和 `npm run check`；不要直接修改 `theme.css`。
- **发布前事项**：Working Title 不符合当前 Obsidian 社区目录的命名约束，且维护者署名仍需确认。
