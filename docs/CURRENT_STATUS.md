# Current Status

## Current Milestone

Phase 2 — Appearance & Core Components：P2.2 Round 3 NEEDS FIX; root cause confirmed as Source-scoped public spacing variable override; final Semantic Token spacing fix implemented; pending Round 4 final focused retest

## Foundation

V0.1 Theme Foundation — Complete / Merged to `main`

## Current Branch

`codex/p2-2-typography-core`

## Current Commit

P2.2 Core Typography commit。本文件不嵌入其所在 commit 的 hash，以避免自引用导致 hash 永远变化；使用 `git rev-parse HEAD` 获取精确值。

## Completed

- Bootstrap baseline 已在 `main` 完成并通过 Review
- Semantic Token contract 已覆盖颜色、圆角、间距、Motion、字体、行高和阅读宽度
- Light / Dark 使用同一套模式 Token，并由 Accent 派生 hover、active text、indicator 和 active border
- 已核对并映射当前公开的 Obsidian Foundation、Typography、Tabs、Navigation、Ribbon、Status Bar、Scrollbar 变量
- Basic Workspace 已覆盖 tabs、sidebar/navigation、ribbon、status bar 和 scrollbar 的基础状态
- 4 个 Style Settings 均通过 Theme Token 再映射至 Obsidian 变量
- Check 已覆盖模式合同、未定义 Token、循环引用、Style Settings 链路、生成文件同步与基础 CSS 健康
- Foundation Architecture Review 已通过
- Foundation Desktop 测试清单与最小安装包已准备完成
- 首轮 Foundation Desktop Test 完成，结果为 Conditional Pass / Fix Required
- Accent hover / active 背景已改为从 `--theme-accent` 派生
- Accent 设置已避开 Style Settings 1.0.9 在 Obsidian 1.13.1 上的 `variable-color` / Pickr `null.clone` 上游兼容问题
- Foundation Fix Desktop QA 已通过 clone error、基础 Accent 联动、selected file、active tab、indicator 和 active border；同时识别出 Native Controls Accent 未联动问题
- Native Controls Accent 映射已提高到 mode-specific selector，并补齐 Checkbox 公开变量
- Obsidian 1.13.7 / Windows 25H2 Build 26200 最终 Desktop QA PASS
- Slider active fill 与 enabled toggle 在 Light / Dark 下均随红、蓝、绿 Accent 即时变化；原紫色残留已消失
- Slider thumb 已确认为中性控件部分，不属于 Accent linkage blocker；Checkbox 无独立测试入口，记录为 N/A，不阻塞 Foundation
- Foundation exit gate 已全部完成，V0.1 Desktop Validation PASS
- PR #1 `feat: establish V0.1 theme foundation` 已通过 merge commit 合并到 `main`
- Foundation merge commit：`f8e37f459589ec37a1f8cf5a2dd9f305b9a3a1b9`
- P2.0 Planning Chat Review PASS；PR #2 已合并，merge commit 为 `f2f26e23edc7c216d0348c7823f9b98ccc1d281e`
- P2.1 Token Gap Audit / Contract Freeze complete；无需新增 global Semantic Tokens，现有 Foundation contract 保持不变；详见 [Token audit](APPEARANCE_TOKEN_AUDIT.md)
- P2.1 经 PR #3 合并至 `main`，merge commit 为 `412dafc2c2c225cd6fe16922c0e2761c58c4d516`
- P2.2 Core Typography Chat Design Review APPROVED；初始 H1–H6 与基础 spacing、bold / italic 公共变量实现完成，无新增 Semantic Token / Style Setting
- Desktop QA Round 1：NEEDS FIX；唯一 blocker 为 Editing / Reading vertical spacing parity，其余提供的测试结果均 PASS
- Round 2 Desktop QA NEEDS FIX：Live Preview ordinary paragraph parity 已修复，剩余 Source 空行可见性与连续 heading spacing
- refined spacing fix 已实现：三条精确 scoped rules，兼容 empty / br-only 空行，通过 min-height 保留逐行高度，并为 heading→heading 回退 p-spacing；body 公共变量合同及已 PASS 设计保持不变
- Round 3：selectors / DOM 已确认，连续 heading 与 Live Preview ordinary spacing PASS；唯一 blocker 为 Source computed `--p-spacing: 0rem` 导致空行 0px
- 最终 spacing fix 已实现：三条规则直接消费既有 `--theme-space-sm` / `--theme-space-lg`，移除 scoped public spacing 依赖；body / selectors 完全不变
- 针对性 Core Typography contract check 与 [Typography Desktop QA checklist](TYPOGRAPHY_TEST.md) 已建立
- GitHub remote 已配置为 `https://github.com/yimengzhiyan/obsidian-theme-plugin.git`；`main` 与 `codex/theme-foundation` 均已推送并设置 upstream

## In Progress

- P2.2 final Semantic Token spacing fix implemented；Chat final fix review 与 Round 4 final focused Desktop retest pending，整个 P2.2 未标记最终完成
- First-line indent、letter / word spacing、granular heading settings、bold / italic settings 继续 deferred

## Next Step

Chat final fix review → Round 4 final focused Desktop retest。重点 Source 单/双空行非零高度与键盘 / caret，快速回归已 PASS spacing、Reading 与特殊块；不开始 P2.3。Round 4 若仍 NEEDS FIX 则停止，由 Chat 决定接受 limitation 或撤回 normalization，不自动 Round 5 修复。

## Known Issues / Blockers

- P2.2 Round 3 唯一 blocker：Source 空行 selector 命中，但 computed `--p-spacing = 0rem`，line-height / min-height / height 均为 0px；最终 Theme spacing 修复待 Round 4 验证
- Desktop artifact gate：正确 branch / commit、root hash == installed hash；Round 2 已一致，不要求其他机器固定 SHA 相等
- Working Title 同时包含 “Obsidian” 与 “Theme”，不符合当前社区主题目录命名规范；正式发布前必须确定合规名称。
- manifest 的 author 当前是项目级临时署名，正式发布前需由维护者确认。
- Accent 当前使用文本颜色值输入，以规避 Style Settings 1.0.9 / Obsidian 1.13.1 的上游颜色选择器问题；恢复 color picker 取决于上游修复和后续实测。

## Validation State

- Automated validation：完成；`npm run build` 和 `npm run check` 均通过
- Check 范围：manifest、关键文件、Build、生成文件同步、Semantic Token、Light/Dark contract、Style Settings 链路和 CSS 基础健康
- Desktop 测试安装包：`release/foundation-test/Obsidian Fusion Theme/`，仅包含 `manifest.json`、`theme.css`
- 首轮 Desktop Visual Test：Conditional Pass / Fix Required（历史结果，问题均已处理）
- Foundation Fix automated validation：完成；增强后的 `npm run build` 和 `npm run check` 均通过
- Foundation Fix Desktop QA：NEEDS FIX（历史结果，Native Controls Accent 问题已处理）
- Native Controls Accent fix automated validation：完成；`npm run build`、`npm run check`、`git diff --check` 均通过
- Final Desktop QA：PASS（Obsidian 1.13.7 / Windows 25H2 Build 26200）
- Theme 与 release 测试包 hash：一致
- Regression：PASS
- V0.1 Foundation Desktop Validation：PASS
- PR #1：MERGED；merge commit `f8e37f459589ec37a1f8cf5a2dd9f305b9a3a1b9`
- P2.2 final spacing fix Automated validation：Build / Check / diff-check PASS；原 body 与三条 selectors 不变，严格检查 Theme spacing declarations / 顺序及 scoped public variable independence；15 项内存负向变体均被拒绝
- P2.2 Desktop QA Round 1–3：NEEDS FIX（历史结果）；Round 4：pending，不能自动判定 PASS
- 现有 release/foundation-test 包保留 V0.1 baseline；P2.2 QA 使用本分支根目录安装文件并记录 hash
