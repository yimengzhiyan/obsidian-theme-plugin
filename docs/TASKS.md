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

Auto Hide、Card Layout、Focus Mode、Preset System 可作为 Phase 3 规划候选研究，仍未获实现批准。Advanced Rainbow Folder、Canvas、Graph、Advanced Animation、Seamless Embed、Companion Plugin 继续 deferred；详见 [Feature Matrix](FUSION_FEATURE_MATRIX.md)，规划不自动解除实现 deferral。

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
- [x] **P2.7 Phase 2 Final Desktop QA / Regression — complete / Desktop Exit Verification PASS** — ISSUE-01 fix verified at `0068eabc4a8177c8b26afdd8ab72579eafd80fc1`；Phase 2 exit gate satisfied，P2.2–P2.7 complete；见 [Integrated QA](PHASE2_REGRESSION_TEST.md)。已通过 PR #9 合并至 main，merge commit `882709c83add9677b69eedf05fe5fdfaea366df6`。

### P2.2 follow-up deferred

First-line indent（默认 off）、letter spacing、word spacing、granular heading settings、bold / italic settings。Core Typography Desktop QA 后再评估是否需要；当前未实现。P2.4 已统一 Code size；额外 Inline Code 装饰与 syntax palette system 仍 deferred。

## Milestone: Phase 3 — Planning (Chat reviewed / merged; historical planning)

- [x] 从已合并 Phase 2 的 main 创建 `codex/phase-3-planning`
- [x] 建立 [Theme Design Spec](THEME_DESIGN_SPEC.md)：长期愿景、已完成基线、六个模块、开发原则与 review gate
- [x] 建立 [Fusion Feature Matrix](FUSION_FEATURE_MATRIX.md)：来源、优先级、状态、依赖与继续延期的功能
- [x] 建立 [Source Theme Analysis](SOURCE_THEME_ANALYSIS.md)：Composer / Border README 证据、Fusion 解读与未完成的代码级研究
- [x] Chat review 规划文档完成（维护者报告）；不代表候选功能获得实现批准
- [ ] 对选定候选项固定来源 revision，研究 public-variable / selector 可行性和 native behavior 风险
- [x] 选择 W01 的 P3.1 workspace foundation，建立范围与 Desktop QA 草稿；后续 scoped instructions 已授权并完成下列五项 P3.1 能力
- [x] PR #10 squash merged（`fbc971d8d034906d1bfd911df5d86e3688cffeaf`）

### Future module candidates — no implementation authorization

| Module | Matrix IDs | Planning state |
| --- | --- | --- |
| Workspace | W01–W02 | W01 P3.1 five-module scope complete / Desktop QA ALL PASS; W02 deferred |
| Layout | L01 | Candidate; Card Layout 未实现 |
| Focus System | F01–F02 | Candidate; Focus / Auto Hide 未实现 |
| Reading Enhancement | R01–R02 | Candidate; 保留 Phase 2 Typography / Source navigation |
| Presets | P01 | Candidate; schema / persistence / restoration 待设计 |
| Effects | E01–E02 | Candidate; Advanced Animation 继续 deferred |

## P3.1 — Workspace Fusion COMPLETE / Final Checkpoint

- [x] 从更新后的 main 创建 `codex/p3-1-workspace-fusion`
- [x] 建立 [P3.1 plan](P3_1_WORKSPACE_FUSION_PLAN.md)：五个 shell areas、workspace 模块、共享 geometry、变量路线、设置候选与 QA
- [x] 按后续 scoped instructions 完成五项 P3.1 能力；无新增设置
- [ ] 下一阶段 architecture review：View header 来源/变量/DOM 研究留待独立批准；P3.1 Build 顺序已保持
- [x] 获首个 milestone 指令，实现 workspace-tokens.css / tabs.css；Build / Check / diff-check PASS
- [x] 收到 Chat review 后 P3.1a refinement 指令；完成 default/active/hover、close、density、long-title 源码
- [x] P3.1a Desktop QA PASS after fix 62789ef；详见 P3_1A_TABS_DESKTOP_QA.md
- [x] Tabs milestone Desktop gate 完成；独立 Tab/close focus N/A 原生保留
- [x] P3.1b Sidebar shell 完成 / Desktop QA PASS（维护者本次报告）
- [x] Sidebar Desktop QA 已完成（维护者报告）
- [x] 获 P3.1c-1 Ribbon scoped instruction，源码完成，Build / Check / diff-check PASS
- [x] Ribbon Desktop QA PASS（维护者在 P3.1c-2 指令报告）
- [x] 获 P3.1c-2 指令，实现 Status Bar shell；Build / Check / diff-check PASS
- [x] Status Bar Desktop QA PASS（维护者 final checkpoint 报告）
- [x] Workspace Tokens / Tabs / Sidebar / Ribbon / Status Bar COMPLETE
- [x] P3.1 Desktop QA all modules PASS / final documentation checkpoint
- [ ] View header 等后续模块另行批准

P3.1 已完成的实现范围限 src/workspace，五项能力不含 View header；现有 scrollbar 保留不变。Full Auto Hide、Focus、Card Layout、Presets、Animations、Rainbow folders、Canvas/Graph、Companion Plugin 均在本阶段之外。首个 milestone 新增两项 workspace geometry aliases；无新 global palette / Style Settings。

## Remaining limitations

Native Tab/close 独立 sequential focus N/A；Tabs drag/reorder、screen-reader audit 未执行，不将其改写为 PASS。P2.6 drag/drop 与 Foundation Checkbox N/A 保留。模块 ALL PASS 为维护者最终结论，不意味着完整平台/插件覆盖。

## Next Step

下一阶段 pending architecture review。定义明确的 scope、来源证据、变量/selector/settings 方案与 QA gate 后再获实现指令。View header 与 deferred features 不自动开始；本轮仅 checkpoint commit / push，不创建 PR/merge。
