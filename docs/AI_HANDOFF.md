# AI Handoff

- **项目**：模块化 Obsidian CSS Theme；`Obsidian Fusion Theme` 只是 Working Title。
- **当前阶段**：V0.1 Theme Foundation 已通过最终 Desktop QA，等待将 `codex/theme-foundation` 合并到 `main`。
- **架构**：编辑 `src/**/*.css` 与 `settings/**/*.css`，通过 `scripts/build.mjs` 按稳定顺序生成根目录 `theme.css`。
- **原则**：Semantic Design Token 优先；同时支持 Light / Dark；Style Settings 可选；不使用 Community Plugin runtime；不直接复制 Composer / Border。
- **现状**：Semantic Tokens、Light/Dark、公共变量映射、基础 Workspace、四项 Style Settings、兼容 workaround 和 Native Controls Accent 均已通过 Foundation exit gate。Slider thumb 保持中性，不属于 Accent linkage；Checkbox 在 Desktop 环境中无独立测试入口，记录为 N/A，公开映射由自动检查覆盖。
- **立即下一步**：Review 并合并 `codex/theme-foundation` → `main`；合并前后都不要提前开始 Phase 2。
- **限制**：本阶段不做 Auto Hide、Card、Rainbow Folder、Focus、Canvas、Graph、Preset 等高级功能。
- **验证**：Obsidian 1.13.7 / Windows 25H2 Build 26200 最终 Desktop QA PASS；Build、Check、生成同步与 release hash 均通过。不要直接修改 `theme.css`。
- **发布前事项**：Working Title 不符合当前 Obsidian 社区目录的命名约束，且维护者署名仍需确认。
