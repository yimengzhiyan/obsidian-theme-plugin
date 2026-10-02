# AI Handoff

- **项目**：模块化 Obsidian CSS Theme；`Obsidian Fusion Theme` 只是 Working Title。
- **当前阶段**：V0.1 Foundation Fix Desktop QA 为 NEEDS FIX；Native Controls Accent 修复已实现并通过自动验证，等待 Desktop retest。
- **架构**：编辑 `src/**/*.css` 与 `settings/**/*.css`，通过 `scripts/build.mjs` 按稳定顺序生成根目录 `theme.css`。
- **原则**：Semantic Design Token 优先；同时支持 Light / Dark；Style Settings 可选；不使用 Community Plugin runtime；不直接复制 Composer / Border。
- **现状**：clone error、基础 Accent 联动、selected file、active tab、indicator 和 active border 已通过 Desktop QA。Native slider fill 与 enabled toggle 曾被 Dark mode 原生 Accent 覆盖；相关映射已提高 specificity，并补齐 Checkbox 变量。
- **立即下一步**：用测试包在 Dark mode、Accent `#dc2626` 下复测 slider fill、enabled toggle 和 checkbox；不要提前标记 Desktop PASS。
- **限制**：本阶段不做 Auto Hide、Card、Rainbow Folder、Focus、Canvas、Graph、Preset 等高级功能。
- **验证**：首轮真实 Desktop Test 已完成；修复后的自动验证和 Desktop retest 状态见 `docs/CURRENT_STATUS.md`。不要直接修改 `theme.css`。
- **发布前事项**：Working Title 不符合当前 Obsidian 社区目录的命名约束，且维护者署名仍需确认。
