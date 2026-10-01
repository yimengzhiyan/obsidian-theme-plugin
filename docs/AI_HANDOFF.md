# AI Handoff

- **项目**：模块化 Obsidian CSS Theme；`Obsidian Fusion Theme` 只是 Working Title。
- **当前阶段**：V0.1 Theme Foundation 首轮 Desktop Test 为 Conditional Pass / Fix Required；Foundation Fix 已实现，等待 Desktop retest。
- **架构**：编辑 `src/**/*.css` 与 `settings/**/*.css`，通过 `scripts/build.mjs` 按稳定顺序生成根目录 `theme.css`。
- **原则**：Semantic Design Token 优先；同时支持 Light / Dark；Style Settings 可选；不使用 Community Plugin runtime；不直接复制 Composer / Border。
- **现状**：Accent hover / active 状态已从 `--theme-accent` 派生；四个 Style Settings 仍直接写入 Theme Token。Accent 暂用 `variable-text`，规避 Style Settings 1.0.9 / Obsidian 1.13.1 的上游 Pickr `null.clone` 问题。
- **立即下一步**：用 `release/foundation-test/Obsidian Fusion Theme/` 复测四个设置无 console error，并确认 Accent 联动 active tab、selected file、hover、indicator 和 active border。
- **限制**：本阶段不做 Auto Hide、Card、Rainbow Folder、Focus、Canvas、Graph、Preset 等高级功能。
- **验证**：首轮真实 Desktop Test 已完成；修复后的自动验证和 Desktop retest 状态见 `docs/CURRENT_STATUS.md`。不要直接修改 `theme.css`。
- **发布前事项**：Working Title 不符合当前 Obsidian 社区目录的命名约束，且维护者署名仍需确认。
