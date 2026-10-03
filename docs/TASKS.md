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
- [ ] **P2.2 Typography（Next active task: pending Chat design review; implementation not started）** — 规划 heading sizes、bold、italic、inline code、line height、paragraph spacing、first-line indent、reading width、letter / word spacing；不得强制覆盖用户字体设置
- [ ] **P2.3 Links / Tags / Highlight** — 规划 inline links、tags 与 highlight / mark
- [ ] **P2.4 Code / Quote / Table** — 规划 code block、blockquote 与 table 的基础样式
- [ ] **P2.5 Callout** — 独立规划 Callout，避免与基础 Markdown block components 混入同一次提交
- [ ] **P2.6 Navigation / File Explorer** — 规划 file / folder typography、selected / hover states、folder weight、wrapping 与基础层级；Rainbow Folder 只预留接口和规划，不实现高级版本
- [ ] **P2.7 Desktop QA / Regression** — 每批组件遵循 Build → Check → Desktop QA → Review → Merge，不等待 Phase 2 全部完成后再测试
