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
| Focus System | F01–F02 | F01 native boundary foundation complete / Desktop QA PASS; Focus Mode / Auto Hide deferred |
| Reading Enhancement | R01–R02 | P3.3 Width/Rhythm review COMPLETE；NO NEW CSS REQUIRED；Boundary/Focus enhancement 未实现 |
| Presets | P01 | Candidate; schema / persistence / restoration 待设计 |
| Effects | E01–E02 | Candidate; Advanced Animation 继续 deferred |

## P3.1 — Workspace Fusion COMPLETE / Final Checkpoint

- [x] 从更新后的 main 创建 `codex/p3-1-workspace-fusion`
- [x] 建立 [P3.1 plan](P3_1_WORKSPACE_FUSION_PLAN.md)：五个 shell areas、workspace 模块、共享 geometry、变量路线、设置候选与 QA
- [x] 按后续 scoped instructions 完成五项 P3.1 能力；无新增设置
- [x] 后续独立 scope 已完成 P3.2a View Header review / implementation / Desktop QA；P3.1 Build 顺序保持
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
- [x] 后续明确 scoped instruction 已批准 P3.2a View Header（不属于 P3.1 完成范围）

P3.1 已完成的实现范围限 src/workspace，五项能力不含 View header；现有 scrollbar 保留不变。Full Auto Hide、Focus、Card Layout、Presets、Animations、Rainbow folders、Canvas/Graph、Companion Plugin 均在本阶段之外。首个 milestone 新增两项 workspace geometry aliases；无新 global palette / Style Settings。

## Remaining limitations

Native Tab/close 独立 sequential focus N/A；Tabs drag/reorder、screen-reader audit 未执行，不将其改写为 PASS。P2.6 drag/drop 与 Foundation Checkbox N/A 保留。模块 ALL PASS 为维护者最终结论，不意味着完整平台/插件覆盖。

## P3.2a — View Header Shell

- [x] 收到独立 scoped instruction，新增 workspace/view-header.css
- [x] 完成公共 main leaf header background/divider/spacing/title/action shell
- [x] Build / Check / diff-check PASS；旧 source/generated sections 与 P3.1 checkpoint 字节不变
- [x] P3.2a Desktop QA PASS（维护者本轮报告）

无新 token/settings；禁止 Breadcrumb/Path、Sticky/Floating/Auto Hide、view/plugin-specific styling、JS/DOM 修改。QA 与 scope 详见 CURRENT_STATUS。

## P3.2b-1 — Layout Foundation

- [x] Token audit：现有 workspace gap / border 足够，无新 token/settings
- [x] 新增 src/layout/layout.css；main native split spacing / separation contract
- [x] Build / Check / diff-check PASS；所有既有 source/generated sections 不变
- [x] Layout Desktop QA PASS（维护者报告）

仅 foundation，不实现 Card Layout、Floating Panel、Auto Layout、Responsive breakpoints、Focus Mode、JS/DOM 修改；无全局 workspace-leaf 几何规则。

## P3.2c-1 — Focus Foundation

- [x] 读取实际 DOM evidence f31119b：native leaf mod-active、main direct header chain
- [x] 新增 effects/focus.css，两条 active Accent / inactive neutral 1px header boundary
- [x] Build / Check / diff-check PASS；所有既有source/generated sections不变
- [x] Focus Foundation COMPLETE / Desktop QA PASS（维护者 final checkpoint 报告）

只有 native active leaf visual hierarchy；不是 Focus Mode。body.is-focused不使用；无 token/setting/runtime、content opacity、blur/animation/hide/collapse 或 geometry变化。

## Phase 3.2 Final Documentation Checkpoint

- [x] View Header Shell COMPLETE / Desktop QA PASS — `0a60fa0985c5c7dc3fb6e1951535b5d19fe171ae`
- [x] Layout Foundation COMPLETE / Desktop QA PASS — `3cf65addc96a3356eee91861ae485db19b6fd97b`
- [x] Focus Foundation COMPLETE / Desktop QA PASS — `7827734ba95c837bf45b9516616142d408149da9`
- [x] Phase 3.2 COMPLETE；final checkpoint 仅四份文档

Focus System：CSS only；based on native `.workspace-leaf.mod-active`；no runtime behavior。header hidden 无额外cue；community custom views/pop-out/全平台与 WCAG/screen-reader 审计未作认证，既有 N/A 保留。PASS 依据维护者指令，不补造逐项结果。

## P3.3a — Reading Width Evidence / Architecture Review COMPLETE

- [x] 完整Reading DOM evidence保留，已证明native 500/700/centering/responsive/on-off正常
- [x] Independent implementation review NEEDS FIX：52d06ea增加冗余selector，无public-variable gap
- [x] 新corrective commit删除reading-width.css，撤回Build group并Build移除生成section
- [x] Decision012 supersedes011；P3.3a review COMPLETE，无需新增CSS implementation
- [x] Build / Check / diff-check PASS；旧module/source/generated sections与evidence不变

既有theme-reading-width→file-line-width足够；Reading / Live Preview / Source均保留native public-variable行为。不加high-specificity width selectors、token、setting或其他Reading CSS。embed/community contexts保持未认证边界；不声称新Desktop QA PASS。

## P3.3b — Reading Rhythm / Spacing Gap Audit COMPLETE

- [x] [Desktop audit](P3_3B_READING_RHYTHM_AUDIT.md)：A=5、B=3、C=0，NO NEW CSS REQUIRED
- [x] Phase 2 typography/spacing 足够；Source native rhythm difference 接受，caret / keyboard navigation 优先
- [x] Phase 3.3 final documentation close；Width Decision 012 保持有效
- [x] Build / Check / diff-check；无新增 Reading CSS/token/Style Setting

不创建 src/reading、reading-width.css、reading-spacing.css、Reading Boundary 或 Reading Focus enhancement。Reading / Live Preview / Source 均保留 native width behavior；embed/community contexts 未认证。

## P4.1 Preset Prototype — Experiment Closed / Acceptance FAIL

- [x] Architecture / feature / mechanism / UX / gate 文档完成；仅 candidate 与实验授权，不是正式 feature
- [x] Writer Prototype 实现 `f50040a` 与静态验证保留
- [x] P4.1.5 Desktop QA `7d89f34` 完成：整体 FAIL / RESET-01 blocker
- [x] P4.1.6 调查 `14c5bc9` 完成：root cause CONFIRMED，未实施修复
- [x] 实验记录 closeout、完整证据链与当前 disposition 已写入 CURRENT_STATUS；实现/报告保留
- [x] 用户正式确认 Documentation-only，Decision013已落盘；结束assisted路线/RESET-01修复循环。失败证据保留；不立即编写recipes，不重开implementation。

当前 assisted Prototype 未达验收门槛，不标记成功/正式功能。RESET-01 unresolved，promotion blocked；不自动修复、换控件、增profile或重开实验。缺陷保留为已收尾实验的未解决限制，不作为自动执行的修复待办。

## Next Step

P4.2a独立Evidence / Design Review已执行，见下方checkpoint。结论Needs more research，等待Chat选择下一最小证据问题；没有Card Prototype/implementation授权。Focus Enhancement、Auto Hide、Effects继续Defer；Reading Decision012保持。不得创建PR/合并main。

## P4.2a — Card Shell Evidence / Design Review

- [x] 同步远端closeout694ff8c，记录P4.1正式Documentation-only决策013
- [x] 独立Desktop采集三种Markdown模式、双向/nested split、hidden/stacked、header hidden及core Graph公共shell
- [x] 审查Layout/View Header/Focus源码与现有surface/border/Radius/gap合同；无新token/geometry需求
- [x] [Evidence report](P4_2_CARD_SHELL_EVIDENCE.md)：候选main ordinary leaf-content；neutral-only Card建议；**Needs more research**
- [x] Notebook Navigator公开变量/官方source固定revision审查；作为重点后续兼容样本，当前独立Vault未安装，Desktop交互NOT TESTED
- [x] Check/diff-check与implementation preservation；原生header恢复、测试Vault关闭后配置备份恢复
- [ ] Chat选择后续最小证据问题；仅在另行明确授权后才可Prototype

不要将以上checkbox写成Card实现/验收通过。边界绘制/圆角裁切/stacked/社区host兼容仍需研究；本轮无Card CSS、兼容CSS、preset继承、新设置/token/runtime、PR或main合并。
