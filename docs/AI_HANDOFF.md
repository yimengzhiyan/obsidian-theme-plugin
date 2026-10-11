# AI Handoff

- **项目 / 愿景**：个人长期使用的模块化 Obsidian CSS Theme，结合 Composer 的读写体验方向与 Border 的可配置工作区/布局思路；独立设计，不拼接整份主题。`Obsidian Fusion Theme` 是 Working Title。
- **当前阶段**：Phase 3 planning draft，pending Chat review；未开始任何 Phase 3 实现。
- **分支 / 基线**：`codex/phase-3-planning`，从 Phase 2 已合并的 main `882709c83add9677b69eedf05fe5fdfaea366df6` 创建；PR #9 MERGED。使用 `git rev-parse HEAD` 获取当前提交。
- **规划入口**：[Design Spec](THEME_DESIGN_SPEC.md) 定义产品合同；[Feature Matrix](FUSION_FEATURE_MATRIX.md) 定义候选来源/优先级/状态；[Source Analysis](SOURCE_THEME_ANALYSIS.md) 定义上游 README 证据与 Fusion 解读。来源未完成固定 revision 的代码级分析，不声称已验证 selector 兼容性。
- **本轮改动**：只新增上述三份文档并更新 CURRENT_STATUS / TASKS / 本文件；不修改 CSS、theme.css、scripts/check.mjs、设置、manifest 或源码。
- **已完成基线**：V0.1 Foundation、P2.1 audit、P2.2 Typography、P2.3 Links/Tags/Highlight、P2.4 Code/Quote/Table、P2.5 Callout、P2.6 Navigation/File Explorer；P2.7 integrated Desktop Exit Verification PASS，Phase 2 exit gate satisfied。详见 [Final QA](PHASE2_REGRESSION_TEST.md)。
- **ISSUE-01**：Live Preview ordinary quote-tag foreground fix verified，commit `0068eabc4a8177c8b26afdd8ab72579eafd80fc1`；normal/hover 两条 foreground-only selectors，消费既有 Tag variables。已进入 main，不重做修复。
- **未来模块**：Workspace、Layout、Focus System、Reading Enhancement、Presets、Effects 都是待 review、未批准、未实现的候选。Auto Hide / Card Layout / Focus / Presets 的历史 deferral 不因列入规划而自动解除；Canvas/Graph、Advanced Rainbow Folder、Advanced Animation、Seamless Embed、Companion Plugin 继续 deferred。
- **立即下一步**：Chat review 规划文档；review 前不创建 PR。review 后先确定一个有用户问题、范围、来源证据、token/变量路线与 Desktop 验收条件的任务；不要从候选表直接开始实现。
- **架构合同**：Token-first，Style Settings → `--theme-*` semantic tokens → Obsidian public variables → 有证据才用 scoped selectors。P2.1 无新 global Tokens；新增 token 必须有独立可复用语义与实际消费者。纯 CSS + 可选 Style Settings，不引入 JS runtime / framework / DOM patch。
- **源码与 Build**：编辑 `src/**/*.css` / `settings/**/*.css`，生成 theme.css；metadata-first、base → workspace → editor → navigation → components → layout → effects → apps。当前规划任务不编辑这些文件。
- **native behavior**：保留用户字体、Source caret / keyboard / 每个真实空行、selection、rename、folding 与 resizing。P2.2 Source normalization 已撤回，勿重加。接受原生 unresolved-link / syntax palette / table controls 差异；Callout semantic colors 与 yellow Highlight 独立于 Accent，Navigation guide/chevrons 保持中性。
- **现有设置 / workaround**：仅 Accent、Radius、Content Width、Line Height 四项。Accent 使用 `variable-text` 规避 Style Settings 1.0.9 / Pickr `null.clone`；未经 Desktop 复测不恢复 picker。Slider thumb 中性，Checkbox 无独立测试入口 N/A；不扩大 QA claim。
- **验证**：规划任务 `npm run check` / `git diff --check` PASS；Check 内部验证 Build/生成同步，未单独运行 Build，无非文档改动。既有 Desktop PASS 独立于本轮自动检查；无新 Desktop 测试。详细历史结果见 CURRENT_STATUS 与各 QA 文档。
- **发布前事项**：最终名称与维护者署名待确认；README 状态段仍是旧 Foundation/Phase 2 规划描述，本轮限六份文档，当前执行状态以 CURRENT_STATUS / TASKS / 本文件为准。
