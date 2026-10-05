# AI Handoff

- **项目**：模块化 Obsidian CSS Theme；`Obsidian Fusion Theme` 只是 Working Title。
- **V0.1 Foundation**：已通过 PR #1 合并到 `main`；merge commit 为 `f8e37f459589ec37a1f8cf5a2dd9f305b9a3a1b9`，最终 Desktop QA PASS。
- **当前阶段**：P2.3 Links / Tags / Highlight implementation complete / pending Chat Review and Desktop QA；当前分支 `codex/p2-3-links-tags-highlight`。
- **Token contract**：P2.1 未新增任何 global Semantic Token；现有 Foundation contract 继续作为依据。Component-specific tokens 必须证明独立、可复用的语义与实际消费者；详见 [Token audit](APPEARANCE_TOKEN_AUDIT.md)。
- **P2.2 Core Typography**：COMPLETE / Desktop QA PASS / MERGED via PR #4，merge `4671678ccc2ab759a93557b36e568016d6c7367a`。Live Preview-only normalization 保留；Source normalization 因 keyboard regression 撤回，native rhythm 主动接受。历史与最终 PASS 见 TYPOGRAPHY_TEST；勿重新加入 Source spacing hacks。
- **P2.3 implementation**：`src/editor/links-tags-highlight.css` 仅一个 body 公共变量 block，保留 colors.css 现有 link colors；Tags 从 Accent 派生，Highlight 使用 public yellow。0 custom selectors / new Tokens / Style Settings；strict allowlist check 与 Desktop checklist 已准备。
- **架构链路**：Style Settings → Semantic Theme Tokens → Obsidian Public CSS Variables → 必要时才使用 scoped selectors。
- **源码与 Build**：编辑 `src/**/*.css` 与 `settings/**/*.css`，通过 `scripts/build.mjs` 按稳定顺序生成根目录 `theme.css`；不要直接修改 `theme.css`。
- **原则**：Semantic Design Token 优先；同时支持 Light / Dark；Style Settings 可选；不使用 Community Plugin runtime；Composer / Border 仅作为设计与实现思路参考，不直接复制。
- **现状**：Semantic Tokens、Light/Dark、公共变量映射、基础 Workspace、四项 Style Settings、兼容 workaround 和 Native Controls Accent 均已通过 Foundation exit gate。Slider thumb 保持中性，不属于 Accent linkage；Checkbox 在 Desktop 环境中无独立测试入口，记录为 N/A，公开映射由自动检查覆盖。
- **Style Settings workaround**：Accent 暂用 `variable-text` 接收 CSS color，规避 Style Settings 1.0.9 / Pickr 的 `null.clone` 问题；不要在未经 Desktop 复测时恢复 `variable-color`。
- **立即下一步**：Chat implementation review → [P2.3 Desktop QA](LINKS_TAGS_HIGHLIGHT_TEST.md) → fix only if necessary → PR；不开始 P2.4。QA 使用当前根目录安装文件并记录 root / installed matching SHA，现有 Foundation release 包仍是 V0.1 baseline。
- **Typography deferred**：First-line indent（off）、letter / word spacing、granular heading settings、bold / italic settings；Inline Code 视觉设计留给 P2.4。
- **限制**：Auto Hide、Card Layout、Focus Mode、Advanced Rainbow Folder、Canvas、Graph、Advanced Animation、Preset System、Seamless Embed、Companion Plugin 继续 deferred。
- **验证**：V0.1 / P2.2 Desktop QA PASS；P2.3 automated validation PASS、Desktop QA pending，不推断真实视觉 PASS；详情见 CURRENT_STATUS。
- **发布前事项**：Working Title 不符合当前 Obsidian 社区目录的命名约束，且维护者署名仍需确认。
