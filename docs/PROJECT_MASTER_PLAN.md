# Obsidian Fusion Theme — 项目总规划与接手指南

> 本文是新 AI、Codex CLI、维护者接手项目时的**产品级总入口**。它汇总产品目标、架构边界、功能设计、完成状态、未完成事项、决策约束和协作流程。它不替代具体实现/QA报告，也不自动授权任何候选功能实施。
>
> **状态基准：** 2026-10-27；远端 `main` 已合并 Phase 5 PR #13，merge commit `a76770e5949d6ef58a5135bef45f6a8f6d16e661`。本文在 `codex/project-master-plan` 上新增，创建时基于 main `4701522427388fd6e8feecace1cc0db5fb02ca1b`。提交/分支的最新状态以 Git 为准。

## 1. 项目是什么

Obsidian Fusion Theme 是面向 Obsidian 的长期维护型主题工程。它不是简单拼接 Composer 和 Border 两个现成主题，而是借鉴其设计方向、结合 Obsidian 原生能力，建立独立、模块化、语义化、可配置的 Design System。

- **Composer 提供的启发：** 阅读与写作舒适度、内容层级、排版节奏。
- **Border 提供的启发：** 工作区自定义、面板视觉层次、可选的布局与交互呈现。
- **Fusion 自己负责：** 统一视觉语言、语义 Token、明暗模式、原生交互兼容、可选设置、可验证的 CSS 架构。
- **产品定位：** 一套适合长期日用、在写作/阅读/知识管理/工作区之间保持一致的 Obsidian 主题，而非仪表盘式的卡片堆叠，也不是依赖运行时的完整插件。

参考项目是设计证据，不代表复制其源码或声称 Fusion 拥有其全部功能。若未来复用第三方代码，须先确认许可证、保留许可文本和 attribution，并记录复用范围。

## 2. 最终目标与产品体验

### 2.1 用户体验目标

1. **写作舒服：** 段落与标题有清晰节奏；字体尊重用户设置；Live Preview 的视觉优化不破坏 Source 中的光标、空行、上下移动和编辑行为。
2. **阅读清晰：** 明暗主题、内容宽度、行高、链接、代码、引用、表格、Callout 等有一致层级，不为视觉统一牺牲可读性。
3. **工作区有层次：** Tabs、侧栏、Ribbon、View Header、Status Bar 和原生分栏协调一致；活动区域容易辨认；可选弱化不应让控件不可发现。
4. **PKM 内容融合：** Embed、Rainbow Folder、Canvas、Graph 在需要时采用 Fusion 视觉，在用户关闭相应增强时回到原生外观。
5. **可配置但不脆弱：** Style Settings 是可选插件；无插件时主题仍可用。设置默认值、原有 ID/type/range、原生 fallback 和 Reset 行为必须受合同检查。
6. **可维护：** 通过模块化 CSS、明确 Token、确定性 Build 和静态检查来控制复杂度；不以大量高特异性 selector 或复制上游大段代码换取短期视觉效果。

### 2.2 成功标准

- 默认安装即完整可用，Light/Dark 均有可读性。
- 原生编辑、光标导航、折叠、重命名、选择、滚动、面板拖动/缩放优先于像素级视觉模仿。
- 每项可选增强都有明确关闭路径和原生回退。
- 新功能通过 Build / Check / diff-check，生成的 `theme.css` 与源码一致。
- 真正的视觉与交互验收必须有 Obsidian Desktop 实测证据；自动化通过不能替代 Desktop QA。
- 只报告实际验证过的版本、插件、平台、交互和覆盖范围，不将局部通过写成全平台/全插件认证。

## 3. 技术架构与不可越过的边界

### 3.1 当前技术路线

**Obsidian Theme（纯 CSS）+ 可选 Style Settings；不是 Community Plugin。**

- 无 JavaScript runtime、DOM patch、插件 API、框架或运行时依赖。
- Style Settings 通过 `settings/style-settings.css` 中的 `@settings` 元数据暴露变量/开关。
- 主题不依赖 Style Settings 才能加载。
- CSS 源码在 `src/`；根目录 `theme.css` 是生成文件，禁止手工直接编辑。
- Build 顺序由 `scripts/build.mjs` 定义：Settings metadata → base → workspace → editor → navigation → components → layout → effects → apps。
- `scripts/check.mjs` 维护 Token、Style Settings 合同、变量消费者、opt-out/negative gate 和生成同步检查；新增设置时应扩充检查，而不是削弱已有检查。

### 3.2 Token 与 selector 原则

1. 优先使用现有 `--theme-*` 语义 Token。
2. 优先映射 Obsidian 已公开的 CSS variables；只有公共变量确实无法表达需求且有 DOM/计算样式证据时，才增加范围受限的 selector。
3. 新 Token 必须有独立、可复用语义和实际消费者；不为“未来可能有用”预建 Token 家族。
4. Accent、黄色 Highlight、Callout 语义色互不混淆。
5. selector 限定在已验证的原生边界，不随意进入 Markdown 内容、CodeMirror 编辑结构、社区插件内部节点或 SVG renderer 内部。
6. 默认保持现有视觉；新增选项不使用时不得无意改变当前合同。
7. 尊重 `prefers-reduced-motion`；不得以 opacity/blur 隐藏仍可聚焦的控件。
8. 不为圆角而擅自增加 overflow clipping、改变 pane 几何、divider hit area 或原生交互。

### 3.3 目录地图

| 路径 | 责任 |
|---|---|
| `src/base/` | 全局变量、颜色、Light/Dark、基础排版 |
| `src/workspace/` | Tabs、Sidebar、Ribbon、Status Bar、Scrollbar、View Header、workspace aliases |
| `src/editor/` | Typography、Links/Tags/Highlight、Code/Quote/Table、Callout、Live Preview composition、Embed |
| `src/navigation/` | File Explorer 与 Rainbow Folders |
| `src/layout/` | native split spacing 与 bounded Card shell |
| `src/effects/` | Focus/chrome、workspace feedback、active-line |
| `src/apps/` | Canvas / Graph 集成 |
| `settings/style-settings.css` | 全部 Style Settings UI 元数据 |
| `scripts/build.mjs` | 按固定模块顺序生成 `theme.css` |
| `scripts/check.mjs` | 合同、Token、设置、fallback 与生成文件静态检查 |
| `theme.css` | 发布/安装用生成产物，不直接编辑 |
| `manifest.json` | Theme 元数据 |
| `docs/DECISIONS.md` | 有效架构决定与历史决策记录 |
| `docs/TASKS.md` | 任务状态和历史检查点 |
| `docs/CURRENT_STATUS.md` | 当前事实状态与最新验证 |
| `docs/AI_HANDOFF.md` | 精简接手摘要 |
| `docs/FUSION_FEATURE_MATRIX.md` | 功能全集与状态矩阵 |
| `docs/P5_FEATURE_COMPLETION_PLAN.md`、各 QA 文件 | 历史实现范围、验收证据、限制 |

## 4. 当前事实快照

### 4.1 仓库 / 交付状态

- 公开仓库：[`yimengzhiyan/obsidian-theme-plugin`](https://github.com/yimengzhiyan/obsidian-theme-plugin)
- Phase 5 PR：[#13 feat: complete Phase 5 Fusion theme experience](https://github.com/yimengzhiyan/obsidian-theme-plugin/pull/13)，已合并。
- Phase 5 merge commit：`a76770e5949d6ef58a5135bef45f6a8f6d16e661`。
- Phase 5 implementation：`a0284df7c4ce961a9c45f00584c59592bc0ac378`；focused QA/status documentation commit：`192b7f3304d130f85905f7ecd92d6ab140321e2f`。
- 最后记录的 Phase 5 验收：**PASS**；Focused Desktop retest PASS；Build / Check / diff-check PASS；Theme A=0、Theme B=0。
- B-01 是 Obsidian 1.14.4 / Style Settings 1.0.9 恢复已打开设置视图时的外部兼容限制，不计作 Theme B 缺陷。Workaround：遇到该问题时重启前先关闭 Style Settings 视图。
- C-01：接受保留选中 Sidebar tab 的持续方向提示（KEEP）。
- C-02：滑块 .01 精度、默认 .72、Reset 和重启持久化已通过聚焦复测。
- 原 D-01–D-06 覆盖限制仍然存在；不能声称全平台、全插件或全可访问性认证。
- 未创建发布 tag；Phase 5 合并不等于发布。
- 当前总规划文档分支为 `codex/project-master-plan`，其基点为 `main` 的 `4701522427388fd6e8feecace1cc0db5fb02ca1b`。本分支是文档整理工作，不是 Phase 6 功能实现分支。开始后续工作前必须重新检查远端 main 与本分支状态。

### 4.2 一个重要的文档一致性问题

仓库历史文档存在过时状态：README 的当前状态仍写 Phase 2 尚未实现；Feature Matrix / TASKS / 部分 AI handoff 仍保留 Phase 5 QA pending 的历史措辞。Phase 5 当前状态应以 2026-10-27 的 Final Fix + Tuning checkpoint 和 PR #13 merge 记录为准。旧内容应保留为历史证据，但需明确标为 superseded，不可再作为当前待办。

## 5. 已完成的功能总览

下表中的“完成”指实现/验收有现有仓库证据；具体环境和 N/A 限制请阅读链接报告。不能仅因 CSS 文件存在就推断所有环境均已通过。

### 5.1 Foundation / Phase 2 — 核心外观

| 功能域 | 当前能力 |
|---|---|
| Semantic Design Tokens | 颜色、文本、边框、圆角、间距、Motion、字体、行高、阅读宽度的语义体系 |
| Light / Dark | 两套模式共享一致的 Token 合同 |
| Obsidian public variables | Accent、原生控件、Typography、Tabs、Navigation、Ribbon、Status Bar、Scrollbar 等映射 |
| 基础工作区 | Tabs、Sidebar、Ribbon、Status Bar、Scrollbar |
| Typography | H1–H6、段落/标题节奏、粗体与强调；尊重用户字体 |
| Links / Tags / Highlight | 链接状态、Accent 派生 Tag、独立黄色 Highlight |
| Code / Quote / Table | 代码尺寸与用户等宽字体、Accent 引用块、中性表格、原生语法色 |
| Callout | 统一外壳与间距；保留原生语义颜色、图标、别名、折叠 |
| Navigation | File Explorer 字体/密度/换行/层级与交互状态 |
| Regression | P2.7 跨组件回归及 Live Preview quote-tag 修复 |

对应报告：`APPEARANCE_TOKEN_AUDIT.md`、`FOUNDATION_TEST.md`、`TYPOGRAPHY_TEST.md`、`LINKS_TAGS_HIGHLIGHT_TEST.md`、`CODE_QUOTE_TABLE_TEST.md`、`CALLOUT_TEST.md`、`NAVIGATION_FILE_EXPLORER_TEST.md`、`PHASE2_REGRESSION_TEST.md`。

### 5.2 Phase 3 — Workspace / Layout / Focus foundation

- Tabs：统一圆角、间距、标题截断、关闭按钮反馈；保持原生切换和状态规则。
- Sidebar / Ribbon / Status Bar：外壳层次、分隔与间距细化。
- View Header：main workspace view header 范围内的视觉细化。
- Layout foundation：原生 split 容器的间距，保留 Obsidian 对 pane sizing / resize 的所有权。
- Focus foundation：用原生 `.workspace-leaf.mod-active` 区分活动 pane header；不是完整 Focus Mode。
- Reading Width：经 Decision012 决定继续使用原生 `--theme-reading-width → --file-line-width` 合同，无需额外 scoped CSS。

注意：历史阶段有部分旧文档曾写 Desktop QA pending；以 CURRENT_STATUS 和对应阶段关闭记录为准。不得从基础层实现推导出完整 Layout Engine、Auto Hide 或 Focus Mode 已完成。

### 5.3 Phase 4 — bounded Card shell；Preset experiment closed

- Decision014 接受的 Card shell 仅为普通 main workspace pane 的中性 inward outline + 既有 radius。
- 不包括 Sidebar Card、Markdown 内容卡片、stacked card、floating panels 或 layout engine。
- P4.1 assisted Preset prototype 验收失败，RESET-01 根因已确认；实验与证据保留，失败 runtime 已隔离。不得把它描述为已完成 Preset。
- Phase 4 Card shell 的 Desktop acceptance 有限定范围和覆盖限制，见 `P4_2D_CARD_SHELL_DESKTOP_QA.md`。

### 5.4 Phase 5A–5D — 功能批次完成

**Phase 5 的实现、聚焦复测与合并均已完成；当前可维护设置共 35 项：26 个变量控件 + 9 个 class toggles。**

- **Appearance：** Accent、Radius 等原始设置与新控件合同。
- **Workspace / Focus / Effects：** Chrome opacity、always-show controls、native pane shell、active-line strength/disable、workspace motion disable。
- **Reading & Writing：** 段落/标题间距、首行缩进、字距/词距、粗体强度、H1–H6 字号/字重、smart-wrap opt-out。
- **PKM：** native embeds、Rainbow folders、native Canvas、native Graph。
- 原四项设置的 ID/type/default/range 保持兼容。
- 新增 `--theme-active-line-strength: 6%`；CJK autospace 保留能力代码但当前没有 UI，因当前 Electron 支持受限。
- Native-* 和功能 opt-out 采用 selector gating；静态检查确认 class absent 时维持默认合同。
- 无 Preset、无自定义 reset runtime、无 JavaScript/runtime/plugin。

详细实现与验证：`P5_FEATURE_COMPLETION_PLAN.md`、`P5_FINAL_INTEGRATED_DESKTOP_QA.md`、`CURRENT_STATUS.md`。

## 6. 当前 35 项设置合同

设置定义以 `settings/style-settings.css` 和 `scripts/check.mjs` 为准。以下按产品功能域列出，数值精确范围请直接查源码，避免复制后过期。

### Appearance
- Accent color
- Border radius

### Workspace / Focus / Effects / Layout
- Quiet chrome opacity
- Muted chrome opacity
- Always show workspace controls
- Active line strength
- Disable active line highlight
- Disable workspace motion
- Use native pane shell

### Reading & Writing
- Line height
- Content width
- Paragraph spacing
- Heading spacing
- First-line indent
- Prose letter spacing
- Prose word spacing
- Bold strength
- Disable smart text wrapping
- Heading letter spacing
- H1–H6 size（6）
- H1–H6 weight（6）

### PKM
- Use native embed appearance
- Rainbow folders
- Use native Canvas appearance
- Use native Graph appearance

合计 35 项。控件总数是当前可见设置条目计数（26 variable controls + 9 toggles），heading/category 本身不计为独立设置。未来每加一个设置都要同时检查 ID、type、default、range、实际 consumer、开关关闭后的 fallback、Reset/重启，以及现有四项兼容性。

## 7. 完整剩余功能与优先级

下表是基于当前 Feature Matrix、Decision 记录和用户最新方向的**规划建议**，不是所有项目都已授权实现。

### 7.1 Phase 6A 候选：Surface Customization（建议先做）

1. **Workspace pane surface：** 在现有 neutral outline/radius 默认基础上，评估 opt-in 的面板分离强度/阴影。必须沿用 Decision014 的 ordinary main pane boundary，不改变 pane geometry、resize、scroll、overflow、hit areas 或 stacked tabs；`fusion-native-pane-shell` 必须仍可恢复原生外观。
2. **Rainbow Folder strength：** 让文件夹标题色强度和 hover 色强度可配置，保留现有七色序列、opt-in gate 和默认视觉。不得把颜色扩散到文件、选择背景或插件内部；交错排序行为未实测前不能承诺。
3. **Canvas selection outline strength：** 独立控制已存在的选中/聚焦 inward outline 强度；保留用户自定义节点/分组颜色、拖拽/缩放与 native opt-out。
4. **Graph category color mix：** 独立控制 tag node 与 attachment node 混色比例，默认保留 65%；保留七个已记录的 Graph variable mapping、明暗模式、Local Graph 和 native opt-out，不覆盖 SVG renderer 内部。

这是建议的第一个批次，不是已实现功能。执行前应核对 main 基点、更新 Feature Matrix/TASKS，确认没有后续变更已覆盖这些功能。

### 7.2 后续候选

- **Layout expansion：** 更完整的 pane separation 视觉选项；完整 Card Layout、浮动面板、自动排布和布局引擎不在现有授权内。
- **Focus / visibility：** 评估 CSS 能安全实现的原生可见性增强；真正 panel collapse、timers、command/keyboard listeners、持久化行为和恢复状态需要架构审查。
- **CJK autospace：** 只有当 Electron/Obsidian 运行环境支持并有真实 Desktop 证据时，才开放设置 UI。
- **阅读排版进一步优化：** 必须先证明具体缺口；尊重 Decision012、Phase 2 Source navigation 和已接受的 native reading/source rhythm 差异，不能为追求视觉一致重开已关闭的问题。
- **文档化推荐配置 recipes：** Decision013 只允许继续保持 documentation-only 方向；是否编写 recipe 可另行决定，不等于实现 preset selector。
- **Advanced effects/animation：** 当前 Defer；需证明真实反馈缺口，先考虑静态替代，并单独审查 reduced motion、对比度、性能和键盘可见性。
- **Companion plugin / runtime：** 目前不是主题功能待办；若产品目标发生变化，需单独提出架构升级方案，不在 Phase 6A 混入。

## 8. 决策约束——新 AI 必须遵守

### Decision 001–008：架构基线
- Theme + optional Style Settings；不引入 plugin runtime。
- Semantic Token first，模块化源码与生成文件分离。
- 参考主题只作设计证据，不整体复制。
- 优先 Obsidian public CSS variables。
- Accent 的 `variable-text` 是已知兼容 workaround；未经真实上游修复验证不得随意改回 `variable-color`。
- Phase 2 token-first 原则持续有效。

### Decision 012：Preserve native Reading Width
Decision011 已被 Decision012 明确 supersede。继续使用原生 `--theme-reading-width → --file-line-width` 链路；不要新增重复的 Reading Width selector/Build group。只有新的真实 public-variable gap 证据才可重新评审。

### Decision 013：Preset experiment closed
P4.1 assisted Preset 路线已关闭，Desktop acceptance FAIL。保留失败实现、报告和历史；不得重开 RESET-01 修复/换控件循环，不得将其写成成功。后续只保留 documentation-only 推荐配置方向；即便想重新做 Preset，也必须先重新取得明确产品决定。

### Decision 014：bounded neutral Card shell
只接受 ordinary main workspace direct host 的 neutral inward outline + radius。不是完整 Card Layout 系统。不得顺手扩展到 Sidebar、Markdown block、stacked cards、floating panels、layout engine、geometry 或 overflow hacks。

### 其他仍有效的边界
- Decision010 的 Focus foundation 只使用原生 active leaf signal，不等于 Focus Mode。
- 已接受的 Source caret/navigation、native width、Callout semantic colors、Highlight 独立黄色、原生 Canvas/Graph 数据/交互合同不可回归。
- 不因为 Feature Matrix 列出某项，就把 Candidate/Deferred 自动升级为批准实现。

## 9. QA、验收与交付工作流

### 实现阶段
1. 重新读取 `AGENTS.md`、本文件、`AI_HANDOFF.md`、`CURRENT_STATUS.md`、`TASKS.md`、`DECISIONS.md` 和相关 QA。
2. 检查 `git status`、当前分支、main HEAD、近期提交、AGENTS 和目标模块。
3. 确定任务范围、默认行为、token/variable 路线、opt-out 和 negative cases。
4. 修改源码与 Style Settings；更新 `scripts/check.mjs`；重新 Build。
5. 更新 Feature Matrix、TASKS、CURRENT_STATUS、AI_HANDOFF 等相关文档；不改写历史 QA 报告。
6. 执行 `npm run build`、`npm run check`、`git diff --check`；检查生成 CSS 与源码一致。
7. 记录 commit、测试结果、未覆盖项和工作区状态。

### 综合 Desktop QA
- 主题默认、Style Settings 未安装/禁用、所有新增控件、Reset/重启持久化。
- Light / Dark；适用的 Source / Live Preview / Reading。
- 原生 fallback / opt-out、现有 35 控件回归。
- Pane resize、split/nested/stacked/narrow layout。
- Canvas / Graph / Rainbow Folder / Embed 实际交互。
- Keyboard/focus/reduced motion 与内容可读性。
- 测试结束恢复 Vault 配置和临时 fixtures，确认原始笔记无变化，核对根目录与安装产物哈希。
- 将已测试环境、通过项、失败项和 N/A 明确写入报告。不能把自动化 Check 等同于 Desktop QA。

### 合并/发布
- 实现、review、Desktop QA、PR merge、版本升级、release/tag 是不同的状态。
- 没有明确授权，不创建 PR、不合并、不发布、不打 tag。
- 发布前需单独决定最终主题名称、manifest 元数据、版本号、安装包和发布检查。

## 10. Chat 与 CLI 的分工

- **Chat（规划/评审）：** 理解用户问题、对齐目标、设计架构、拆解任务、审查差异、识别风险、批准/拒绝范围并生成 CLI 提示词。
- **Codex CLI / 其他 CLI Agent（执行）：** 检查仓库真实状态、实现代码、运行测试、管理 Git、更新状态文件和提交、准备 PR。
- 长任务以仓库文件、Git 和可复现证据为准，不把聊天记忆当作唯一事实。
- 切换 Agent/API/服务器前创建 checkpoint；handoff 至少记录 branch、commit、working tree、当前任务、已验证事实、未解决问题、下一步。
- 用户偏好批次式节奏：先实现一个有边界的功能批次，再集中 QA/修复；但涉及架构变更或明确决策禁区时仍需先获得批准。

## 11. 新 AI 接手 checklist

- [ ] 先读 `AGENTS.md`、本文件、`README.md`、`docs/AI_HANDOFF.md`、`docs/CURRENT_STATUS.md`、`docs/DECISIONS.md`、`docs/TASKS.md`。
- [ ] 核对远端 `main` HEAD、当前 branch、working tree 和 PR 状态。
- [ ] 读 `docs/FUSION_FEATURE_MATRIX.md` 及与目标功能有关的设计/QA报告。
- [ ] 将“已实现”“已验收”“已合并”“已发布”视为不同状态。
- [ ] 不复活 Decision013 的 Preset prototype；不扩展 Decision014 的 Card shell；不绕过 Decision012。
- [ ] 如继续 Phase 6，先检查是否已有授权/实现；建议从 6A Surface Customization 候选开始，先确认准确基点与 scope。
- [ ] 修改源码后运行 Build / Check / diff-check，并明确报告 Desktop QA 是否真正执行。
- [ ] 更新文档，保留历史证据；未获授权不 merge/release/tag。

## 12. 主要项目文档索引

- [README](../README.md) — 项目简介、安装、开发入口
- [AGENTS.md](../AGENTS.md) — 仓库工作规则
- [Current Status](CURRENT_STATUS.md) — 当前事实与验证
- [AI Handoff](AI_HANDOFF.md) — 精简交接摘要
- [Tasks](TASKS.md) — 当前/历史任务清单
- [Decisions](DECISIONS.md) — 架构决策和历史记录
- [Theme Design Spec](THEME_DESIGN_SPEC.md) — 产品愿景与设计原则
- [Fusion Feature Matrix](FUSION_FEATURE_MATRIX.md) — 功能全集与状态
- [Source Theme Analysis](SOURCE_THEME_ANALYSIS.md) — Composer / Border 参考证据
- [Phase 5 Feature Completion Plan](P5_FEATURE_COMPLETION_PLAN.md) — Phase 5 实现合同
- [Phase 5 Final Integrated Desktop QA](P5_FINAL_INTEGRATED_DESKTOP_QA.md) — Phase 5 测试证据及覆盖限制

---

**本文的维护原则：** 每次功能批次完成后更新“当前事实”“已完成功能”“未完成事项”和接手 checklist；不要把计划改成事实，不要覆盖历史决策，不要删除失败实验的证据。若本文件与 Git/最新 QA 证据冲突，以可复现仓库与实际验证为准，并在更新时明确说明冲突。
