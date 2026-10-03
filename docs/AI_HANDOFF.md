# AI Handoff

- **项目**：模块化 Obsidian CSS Theme；`Obsidian Fusion Theme` 只是 Working Title。
- **V0.1 Foundation**：已通过 PR #1 合并到 `main`；merge commit 为 `f8e37f459589ec37a1f8cf5a2dd9f305b9a3a1b9`，最终 Desktop QA PASS。
- **当前阶段**：P2.1 已经 PR #3 合并至 `main`（`412dafc2c2c225cd6fe16922c0e2761c58c4d516`）；当前分支为 `codex/p2-2-typography-core`。
- **Token contract**：P2.1 未新增任何 global Semantic Token；现有 Foundation contract 继续作为依据。Component-specific tokens 必须证明独立、可复用的语义与实际消费者；详见 [Token audit](APPEARANCE_TOKEN_AUDIT.md)。
- **P2.2 Core Typography**：Chat Design Review APPROVED，公共变量层级已实现；无新增 Semantic Token / Style Setting，未覆盖用户字体，Desktop QA pending。
- **架构链路**：Style Settings → Semantic Theme Tokens → Obsidian Public CSS Variables → 必要时才使用 scoped selectors。
- **源码与 Build**：编辑 `src/**/*.css` 与 `settings/**/*.css`，通过 `scripts/build.mjs` 按稳定顺序生成根目录 `theme.css`；不要直接修改 `theme.css`。
- **原则**：Semantic Design Token 优先；同时支持 Light / Dark；Style Settings 可选；不使用 Community Plugin runtime；Composer / Border 仅作为设计与实现思路参考，不直接复制。
- **现状**：Semantic Tokens、Light/Dark、公共变量映射、基础 Workspace、四项 Style Settings、兼容 workaround 和 Native Controls Accent 均已通过 Foundation exit gate。Slider thumb 保持中性，不属于 Accent linkage；Checkbox 在 Desktop 环境中无独立测试入口，记录为 N/A，公开映射由自动检查覆盖。
- **Style Settings workaround**：Accent 暂用 `variable-text` 接收 CSS color，规避 Style Settings 1.0.9 / Pickr 的 `null.clone` 问题；不要在未经 Desktop 复测时恢复 `variable-color`。
- **立即下一步**：Chat code review → [Typography Desktop QA](TYPOGRAPHY_TEST.md)；不提前开始 P2.3。测试使用当前 root 安装文件，现有 Foundation release 包仍是 V0.1 baseline。
- **Typography deferred**：First-line indent（off）、letter / word spacing、granular heading settings、bold / italic settings；Inline Code 视觉设计留给 P2.4。
- **限制**：Auto Hide、Card Layout、Focus Mode、Advanced Rainbow Folder、Canvas、Graph、Advanced Animation、Preset System、Seamless Embed、Companion Plugin 继续 deferred。
- **验证**：V0.1 的 Obsidian 1.13.7 / Windows 25H2 Build 26200 Desktop QA 和 release hash 验证 PASS；P2.2 Build / Check / 生成同步通过，真实 Desktop QA 尚未完成。
- **发布前事项**：Working Title 不符合当前 Obsidian 社区目录的命名约束，且维护者署名仍需确认。
