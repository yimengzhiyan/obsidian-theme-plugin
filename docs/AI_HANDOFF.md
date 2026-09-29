# AI Handoff

- **项目**：模块化 Obsidian CSS Theme；`Obsidian Fusion Theme` 只是 Working Title。
- **当前阶段**：V0.1 Theme Foundation 已在 `codex/theme-foundation` 建立，等待 Chat Review 与真实 Obsidian Desktop 验证。
- **架构**：编辑 `src/**/*.css` 与 `settings/**/*.css`，通过 `scripts/build.mjs` 按稳定顺序生成根目录 `theme.css`。
- **原则**：Semantic Design Token 优先；同时支持 Light / Dark；Style Settings 可选；不使用 Community Plugin runtime；不直接复制 Composer / Border。
- **现状**：Semantic Token → Light/Dark → Obsidian Variables → Basic Workspace → 4 个 Style Settings → generated `theme.css` 链路已完成自动校验。
- **立即下一步**：Review Foundation；通过后在真实 Obsidian Desktop 安装 `manifest.json` 与 `theme.css`，验证两个模式、四个设置和基础 Workspace 状态。
- **限制**：本阶段不做 Auto Hide、Card、Rainbow Folder、Focus、Canvas、Graph、Preset 等高级功能。
- **验证**：`npm run build` 与增强后的 `npm run check` 已通过；真实 Obsidian 视觉验证仍待进行。不要直接修改 `theme.css`。
- **发布前事项**：Working Title 不符合当前 Obsidian 社区目录的命名约束，且维护者署名仍需确认。
