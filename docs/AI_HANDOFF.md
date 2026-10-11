# AI Handoff

- **项目 / 愿景**：个人长期使用的模块化 Obsidian CSS Theme，结合 Composer 的读写体验方向与 Border 的可配置工作区/布局思路；独立设计，不拼接整份主题。`Obsidian Fusion Theme` 是 Working Title。
- **当前阶段**：P3.1a Tabs implementation refinement 完成并准备提交；Desktop QA / final review pending。
- **分支 / 基线**：`codex/p3-1-workspace-fusion`，main `fbc971d8d034906d1bfd911df5d86e3688cffeaf`；PR #10 已 squash merged，本地与远程 main 已更新。
- **规划入口**：[Design Spec](THEME_DESIGN_SPEC.md) 定义产品合同；[Feature Matrix](FUSION_FEATURE_MATRIX.md) 定义候选来源/优先级/状态；[Source Analysis](SOURCE_THEME_ANALYSIS.md) 定义上游 README 证据与 Fusion 解读。来源未完成固定 revision 的代码级分析，不声称已验证 selector 兼容性。
- **P3.1a refinement**：普通 Tabs default/active/hover surface、close hover/pressed/focus-visible、gap-derived density、title ellipsis 与 icon/close 不 shrink；无新 token/设置，native DOM/visibility 不变。
- **本轮改动**：新增两项 workspace geometry aliases，Tabs curve/radius 联动、普通 tab gap/padding 与 active medium weight、public highlighted state；Build 生成 theme.css。详见 [First milestone record](P3_1_WORKSPACE_FUSION_PLAN.md)。首个 milestone 与 P3.1a 纳入同一实现提交；未 push / PR。
- **已完成基线**：V0.1 Foundation、P2.1 audit、P2.2 Typography、P2.3 Links/Tags/Highlight、P2.4 Code/Quote/Table、P2.5 Callout、P2.6 Navigation/File Explorer；P2.7 integrated Desktop Exit Verification PASS，Phase 2 exit gate satisfied。详见 [Final QA](PHASE2_REGRESSION_TEST.md)。
- **ISSUE-01**：Live Preview ordinary quote-tag foreground fix verified，commit `0068eabc4a8177c8b26afdd8ab72579eafd80fc1`；normal/hover 两条 foreground-only selectors，消费既有 Tag variables。已进入 main，不重做修复。
- **P3.1 范围**：当前仅实现 workspace-tokens.css / tabs.css；其他 workspace 源码保持不变。保留 scrollbar 与 P2.6 Navigation；token 模块已实现，header 尚未创建；body-scoped aliases 沿用 Build 顺序。Full Auto Hide、Focus、Card Layout、Presets、Animations、Rainbow folders、Canvas/Graph、Companion Plugin 均延期。
- **未来模块**：Workspace、Layout、Focus System、Reading Enhancement、Presets、Effects 都仍是未获实现批准、未实现的规划候选。Auto Hide / Card Layout / Focus / Presets 的历史 deferral 不因列入规划而自动解除；Canvas/Graph、Advanced Rainbow Folder、Advanced Animation、Seamless Embed、Companion Plugin 继续 deferred。
- **立即下一步**：P3.1a Desktop QA / final review，覆盖 shell/close/density/long title 与 stacked/Phase 2 regression；停止 Sidebar/Ribbon，后续另行批准。
- **架构合同**：Token-first，Style Settings → `--theme-*` semantic tokens → Obsidian public variables → 有证据才用 scoped selectors。P2.1 无新 global Tokens；新增 token 必须有独立可复用语义与实际消费者。纯 CSS + 可选 Style Settings，不引入 JS runtime / framework / DOM patch。
- **源码与 Build**：编辑 `src/**/*.css` / `settings/**/*.css`，生成 theme.css；metadata-first、base → workspace → editor → navigation → components → layout → effects → apps。当前只编辑 workspace tokens / tabs，并 Build。
- **native behavior**：保留用户字体、Source caret / keyboard / 每个真实空行、selection、rename、folding 与 resizing。P2.2 Source normalization 已撤回，勿重加。接受原生 unresolved-link / syntax palette / table controls 差异；Callout semantic colors 与 yellow Highlight 独立于 Accent，Navigation guide/chevrons 保持中性。
- **现有设置 / workaround**：仅 Accent、Radius、Content Width、Line Height 四项。Accent 使用 `variable-text` 规避 Style Settings 1.0.9 / Pickr `null.clone`；未经 Desktop 复测不恢复 picker。Slider thumb 中性，Checkbox 无独立测试入口 N/A；不扩大 QA claim。
- **验证**：首个 milestone Build / Check / diff-check PASS；Phase 2 源码与生成 sections 不变。既有 Desktop PASS 独立于本轮自动检查；无新 Desktop 测试。详细历史结果见 CURRENT_STATUS 与各 QA 文档。
- **发布前事项**：最终名称与维护者署名待确认；README 状态段仍是旧 Foundation/Phase 2 规划描述，当前阶段维护规划文档，当前执行状态以 CURRENT_STATUS / TASKS / 本文件为准。
