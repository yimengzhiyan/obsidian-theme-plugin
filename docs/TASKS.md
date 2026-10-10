# Tasks

## Milestone: V0.1 Foundation

- [x] **Bootstrap** — Git、项目结构、manifest、文档、Build / Check 和 baseline
- [x] **Semantic Token** — 确认颜色、圆角、间距、Motion、字体、行高和阅读宽度合同
- [x] **Light Theme** — 完成基础视觉层级和 Accent 派生关系；最终视觉未定稿
- [x] **Dark Theme** — 完成基础视觉层级和 Accent 派生关系；最终视觉未定稿
- [x] **Obsidian Variable Mapping** — 核对并映射首批官方 Foundation、Editor 与 Workspace 变量
- [x] **Typography Foundation** — 尊重用户字体覆盖，映射字体、基础行高和阅读宽度
- [x] **Basic Workspace** — Tabs、Sidebar、Ribbon、Status Bar、Scrollbar 的基础状态统一
- [x] **Minimal Style Settings** — Accent、Radius、Content Width、Line Height 均通过 Theme Token 生效
- [x] **Build** — 无框架、确定性合并并生成 `theme.css`
- [x] **Validation** — manifest、生成同步、Token contract、Style Settings 链路和 CSS 基础健康检查

## After Bootstrap Review

- [x] 审阅并确定 V0.1 Token 命名、层级和覆盖策略
- [x] 准备 Foundation Desktop 测试清单与最小安装包
- [x] 完成首轮真实 Obsidian Foundation 测试并记录 Conditional Pass / Fix Required
- [x] 修复 Accent active / hover 状态未完整进入 Semantic Token 链路的问题
- [x] 为 Style Settings `variable-color` / Pickr `null.clone` 上游问题提供主题侧最小兼容措施
- [x] 在真实 Obsidian 中复测四个 Style Settings 与 Accent 联动状态
- [x] 扩展首批 Obsidian 公共变量映射并记录兼容策略
- [x] 建立尊重用户字体设置的 Typography Foundation；中文高级排版仍延后

## Future / Non-blocking Follow-up

- [ ] 规划完整 Style Settings 分组，但保持逐项落地
- [ ] 增加适度的官方 Stylelint 校验（评估依赖成本后决定）

## Explicitly deferred

Auto Hide system、Card Layout、Focus Mode、Advanced Rainbow Folder、Canvas、Graph、Advanced Animation、Preset System、Seamless Embed、Companion Plugin。

## Foundation Exit Gate

- [x] Automated Build / Check / generated output validation
- [x] Style Settings Desktop QA：Accent、Border Radius、Content Width、Line Height、restart persistence
- [x] Accent / Workspace Desktop QA：Active Tab、Selected File、Indicator、Active Border
- [x] Native Controls Desktop QA：Slider active fill、enabled Toggle；Checkbox N/A 且不阻塞
- [x] Regression PASS
- [x] V0.1 Foundation Desktop Validation PASS
- [x] Merge `codex/theme-foundation` → `main` via PR #1（merge commit `f8e37f459589ec37a1f8cf5a2dd9f305b9a3a1b9`）

## Milestone: Phase 2 — Appearance & Core Components

- [x] **V0.1 Foundation merged** — Foundation exit gate 完成并进入 `main`
- [x] **P2.0 Planning** — Chat Review PASS；规划状态经 PR #2 合并到 `main`
- [x] **P2.1 Appearance Token Gap Audit / Contract Freeze** — audit completed；无需新增 global Semantic Tokens，现有 Foundation contract 继续作为依据；详见 [Token audit](APPEARANCE_TOKEN_AUDIT.md)
- [x] **P2.2 Core Typography — complete / Desktop QA PASS / merged** — PR #4 MERGED，merge commit `4671678`；Live Preview-only normalization 保留，Source 原生编辑行为恢复。最终产品决策与 Rounds 1–4 历史见 [Desktop QA](TYPOGRAPHY_TEST.md)
- [x] **P2.3 Links / Tags / Highlight — complete / Desktop QA PASS / merged** — MERGED via PR #5，merge commit `ad96df320fcb9724d4895b2032a72deb192fb175`；public-variable-only，无新 Tokens / Settings / custom selectors。Source unresolved-link 原生配色与 Reading dotted decoration 主要 hover 可见均接受为 native differences，详见 [Desktop QA](LINKS_TAGS_HIGHLIGHT_TEST.md)
- [x] **P2.4 Code / Quote / Table — complete / Desktop QA PASS / merged** — PR #6 MERGED，merge commit `80fc6e61a6ffd82bbac2c2b744a066a1cc3b4538`；保留 Code 映射、syntax colors 与用户 monospace，Blockquote Accent 联动、Table 可读性及 P2.2/P2.3 regression PASS。无新 Tokens / Settings / selectors；native syntax / hover differences 与未暴露控件 N/A 已记录，详见 [Desktop QA](CODE_QUOTE_TABLE_TEST.md)
- [x] **P2.5 Callout — complete / Desktop QA PASS / merged** — PR #7 MERGED，merge commit `06eb5641793d04be1b78563b7fd0fb532b1967a3`；原生 semantic colors / icons / aliases / blending / folding 保留，Accent independence、Radius 与 P2.2–P2.4 regression PASS；详见 [Desktop QA](CALLOUT_TEST.md)
- [x] **P2.6 Navigation / File Explorer — complete / Desktop QA PASS / merged** — PR #8，merge commit `f00e67108bece2b0a4cede9a687c7ee2da7cbc6e`；13 公共变量，Foundation 状态色保留；wrapping / rename / hierarchy / folder-file distinction PASS，folder-only selector 不必要；drag/drop N/A / non-blocking。0 new Tokens / Settings / selectors，无 Rainbow Folder；详见 [Desktop QA](NAVIGATION_FILE_EXPLORER_TEST.md)
- [ ] **P2.7 Phase 2 Final Desktop QA / Regression — Round 1 NEEDS FIX / targeted fix implemented / pending Desktop exit verification** — ISSUE-01 LP Blockquote Tag foreground conflict 经 Chat 判为 BLOCKER，批准两条 foreground-only integration selectors；其余合同不变，五项 partial gates 待补齐，不标 complete，见 [Integrated QA plan](PHASE2_REGRESSION_TEST.md)

### P2.2 follow-up deferred

First-line indent（默认 off）、letter spacing、word spacing、granular heading settings、bold / italic settings。Core Typography Desktop QA 后再评估是否需要；当前未实现。Inline Code 的视觉设计与 Code tuning 留给 P2.4。
