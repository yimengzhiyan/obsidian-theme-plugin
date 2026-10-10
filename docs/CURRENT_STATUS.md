# Current Status

## Current Milestone

Phase 2 — Appearance & Core Components：P2.7 Round 1 NEEDS FIX；targeted composition fix implemented / pending Chat implementation review and Desktop verification

## Foundation

V0.1 Theme Foundation — Complete / Merged to `main`

## Current Branch

`codex/p2-7-phase2-regression`

## Current Commit

P2.7 test-plan docs commit；冻结 CSS 基线为 merged main `f00e67108bece2b0a4cede9a687c7ee2da7cbc6e`。本文件不嵌入其所在 commit 的 hash，以避免自引用导致 hash 永远变化；使用 `git rev-parse HEAD` 获取精确值。

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
- Round 4 NEEDS FIX：Source 空行高度 8px，单双三空行 8 / 16 / 24px、Enter / Backspace PASS，但 ↑ / ↓ 从 45 跳到 47 而非 46
- Exit scope correction 已实现：三条规则仅增加 `.is-live-preview` scope，撤回 Source normalization；原 body、spacing declarations 与已 PASS 设计不变
- P2.2 Final Desktop Exit Verification PASS（tested commit `b7060e36186b73a6fd4a84e89ce601a20369986b`）：Source ↑ / ↓、每个真实空行可进入、caret / Enter / Backspace 均 PASS
- Live Preview ordinary spacing 在 Line Height 2.0 / 1.5、paragraph → H2 与 consecutive headings H2 → H6 PASS；Reading View 与 Lists / Blockquote / Code Block / Callout / Table regression PASS
- P2.2 无新增 Semantic Tokens / Style Settings；最终环境与 root / installed matching SHA 详见 TYPOGRAPHY_TEST
- PR #4 MERGED：P2.2 complete / Desktop QA PASS / merged to main；merge commit `4671678ccc2ab759a93557b36e568016d6c7367a`
- P2.3 公共变量实现完成：保留现有 link colors，增加 link decoration、Accent-derived lightweight tags 和 yellow highlight；0 custom selectors、0 new Tokens / Settings
- P2.3 exact contract check 与 [Desktop QA checklist](LINKS_TAGS_HIGHLIGHT_TEST.md) 已建立，P2.2 contract 保持不变
- P2.3 Chat Review PASS / Desktop QA PASS；tested commit `55742cc0fc54c85a431b7271722ce1a168fd6131`，环境与 matching root / installed SHA 见 LINKS_TAGS_HIGHLIGHT_TEST
- Resolved / unresolved / external links 与 bold / italic / heading links PASS；Tags Light / Dark / all views 及红 / 蓝 / 绿 Accent propagation PASS，无 fixed purple residue
- Highlight 在 Accent 变化后仍保持黄色，Selection regression PASS；P2.2 Typography、Source blank-line navigation 与 Inline / Block Code regression PASS
- P2.3 无新 Semantic Tokens / Style Settings / custom selectors，未发现 blocker
- P2.3 MERGED via PR #5；merge commit `ad96df320fcb9724d4895b2032a72deb192fb175`
- P2.4 公共变量实现完成：Code size、Accent-derived Blockquote、neutral Table；既有 Code background / text 映射与原生 syntax colors 保留
- P2.4 exact contract check 与 [Desktop QA checklist](CODE_QUOTE_TABLE_TEST.md) 已建立；0 new Tokens / Settings / custom selectors，无 Callout 实现变化
- P2.4 Chat Review PASS / Desktop QA PASS：Code Light / Dark、Editing / Reading syntax 可读、用户 monospace override、0.9em readability 均 PASS
- Blockquote 红 / 蓝 / 绿 Accent propagation、nested quote、rich content 与 Callout regression PASS，无紫色残留
- Table readability / wrapping / embedded content / Source raw editing PASS；未暴露 native cell-selection / drag / add 控件记录 N/A，不阻塞
- P2.2 Typography / Source navigation 与 P2.3 links / tags / highlight regression PASS；无新增 Tokens / Settings / custom selectors，无 Callout implementation changes
- P2.4 PR #6 MERGED，merge commit `80fc6e61a6ffd82bbac2c2b744a066a1cc3b4538`
- P2.5 Callout shell 公共变量实现完成：1px border / 0.28 opacity、既有 radius / spacing Tokens、0.95em semibold title；只增加批准的 8 项声明
- P2.5 保留原生 semantic colors / icons / aliases / title color / content background / blend mode / folding；0 new Tokens / Settings / custom selectors
- P2.5 strict contract check 与 [Desktop QA checklist](CALLOUT_TEST.md) 已建立；P2.2 / P2.3 / P2.4 合同保持不变
- P2.5 Chat Review PASS / Desktop QA PASS：note / info / tip / warning / error / success / question / quote 全部 PASS；native semantic colors / icons 与 danger / help / done / cite aliases 保留
- Shell border / opacity / radius / title / content spacing、long title / title-only、folding、rich content、nested / consecutive Callout 均 PASS
- Blockquote distinction、红 / 蓝 / 绿 Accent independence 与 Radius propagation PASS；Callout semantic colors 不被 Accent 替换，nested blending 保持原生
- Light / Dark / Live Preview / Reading、Source editing 与 P2.2 / P2.3 / P2.4 regression PASS；0 new Semantic Tokens / Style Settings / custom selectors，无 blocker
- P2.5 PR #7 MERGED，merge commit `06eb5641793d04be1b78563b7fd0fb532b1967a3`
- P2.6 13 项 Navigation 公共变量实现完成：0.9em、compact spacing / hierarchy、normal wrapping、active medium weight、neutral guide / chevron；七项 Foundation 状态映射原位保留
- P2.6 strict contract 与 [Desktop QA checklist](NAVIGATION_FILE_EXPLORER_TEST.md) 已建立；0 new Tokens / Settings / custom selectors，无 Rainbow Folder，P2.2–P2.5 合同保持不变
- P2.6 Chat Review / Desktop QA PASS：Obsidian 1.14.4，root / installed SHA 一致且 QA 结束再次核对一致；typography / density、active / hover、long-name wrapping、rename 均 PASS
- Four-level hierarchy、guide、chevron、folder/file distinction、empty / one-child / many-sibling folders PASS；原生层级已足够清晰，folder-only selector 不必要
- 红 / 蓝 / 绿 Accent propagation PASS；普通名称 / guide / chevron 保持中性，无 Rainbow Folder 或紫色残留
- Drag/drop N/A / non-blocking：尝试取消，未完成移动，文件留在原位；File Explorer controls、Backlinks / Outlinks / Search 与 P2.2–P2.5 regression PASS
- Settings restoration PASS；测试 Vault 临时 P2.6 文件夹已清理，既有 P2.2–P2.5 QA note hashes 不变；无 blocking theme issue
- P2.6 PR #8 MERGED，merge commit `f00e67108bece2b0a4cede9a687c7ee2da7cbc6e`
- [P2.7 integrated regression plan](PHASE2_REGRESSION_TEST.md) prepared；覆盖最终 artifact、Foundation / P2.2–P2.6、四项设置与跨组件交互；无 theme implementation changes
- 针对性 Core Typography contract check 与 [Typography Desktop QA checklist](TYPOGRAPHY_TEST.md) 已建立
- GitHub remote 已配置为 `https://github.com/yimengzhiyan/obsidian-theme-plugin.git`；`main` 与 `codex/theme-foundation` 均已推送并设置 upstream

## In Progress

- P2.7 Round 1 NEEDS FIX；ISSUE-01 基于真实 Desktop evidence，经 Chat classified BLOCKER；批准的两条 Live Preview-only foreground rules 已实现，待 targeted Desktop exit verification
- First-line indent、letter / word spacing、granular heading settings、bold / italic settings 继续 deferred

## Next Step

Chat implementation review → targeted Desktop verification → complete remaining partial P2.7 gates → Phase 2 exit decision。当前不创建 PR，不开始 Phase 3。

## Known Issues / Blockers

- Known decision：Source Mode visual rhythm may differ from Reading View；这是为保留原生 caret / keyboard navigation 而主动接受的 scope decision，不是 unresolved visual blocker
- P2.2 无已知 blocker；撤回 Source normalization 后导航已由真实 Desktop 验证恢复
- P2.3 无 unresolved blockers；Source unresolved-link presentation 可不同于 rendered views，Reading unresolved dotted decoration 主要 hover 可见，均接受为 native/public-variable differences，不增加 selector 覆盖
- P2.4 无 blocking issue；Editing / Reading syntax palette differences 已接受（两者可读）；Table row hover 可 subtle / view-dependent；未暴露 native table controls 记录 N/A，不视为 theme regression，不新增 selector 覆盖
- P2.5 无 blocker；Callout semantic type colors / icons / aliases 保持原生，Theme Accent 有意不替换其语义颜色；nested blending 与 folding 保持原生，无需 selector-based redesign
- P2.6 无 blocker；folder-only weight intentionally unimplemented，因为真实 Desktop QA 确认 folder/file hierarchy 足够清晰；drag/drop N/A 按批准 gate 为 non-blocking，不声称成功移动
- P2.7 ISSUE-01：Live Preview ordinary Blockquote Tag foreground 被 quote syntax color 覆盖，而非跟随 --tag-color；真实 Desktop evidence / Chat blocking classification / minimal selector exception approved，修复后 Desktop 未验证
- Remaining partial gates：inactive tab hover、Highlight text selection、Code Block long-line / actual Source editing、main-window constrained-space smoke；均待补齐，不标 PASS
- Desktop 独立副本 CRLF/LF freshness observation：normalized text identical，原仓库与 installed artifact unchanged；non-blocking platform/tooling observation，本轮不改 line-ending behavior
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
- P2.2 exit adjustment Automated validation：Build / Check / diff-check PASS；body / declarations 不变，严格检查三条 Live Preview-only selectors 与顺序；12 项内存负向变体均被拒绝
- P2.2 Desktop QA Round 1–4：NEEDS FIX（历史结果保留）；Final Exit Verification PASS（真实 Desktop），P2.2 Core Typography Desktop QA PASS
- P2.2 PR #4：MERGED（`4671678`）
- P2.3 automated validation：Build / Check / diff-check PASS；15 项内存负向变体均被拒绝；generated theme.css 由 Build 生成
- P2.3 Desktop QA：PASS（真实 Desktop），root / installed SHA 一致；V0.1 release 包不代表本轮 artifact
- P2.3 PR #5：MERGED（`ad96df320fcb9724d4895b2032a72deb192fb175`）
- P2.4 automated validation：Build / Check / diff-check PASS；严格检查 22 个公共变量与 Foundation Code 映射，24 项内存负向变体均被拒绝；P2.2 / P2.3 contract 函数逐字保持不变；theme.css 仅由 Build 生成
- P2.4 real Obsidian Desktop QA：PASS；Obsidian 1.13.7 / Windows 25H2 Build 26200.8737 / Style Settings 1.0.9，root / installed SHA 一致；详见 CODE_QUOTE_TABLE_TEST
- P2.4 PR #6：MERGED（`80fc6e61a6ffd82bbac2c2b744a066a1cc3b4538`）
- P2.5 automated validation：Build / Check / diff-check PASS；严格 single-body / 8-declaration contract；29 项内存负向变体全部拒绝（覆盖要求的 26 类），P2.2–P2.4 合同函数逐字不变；theme.css 仅由 Build 生成
- P2.5 real Obsidian Desktop QA：PASS；Obsidian 1.13.7 / Windows 25H2 Build 26200.8737 / Style Settings 1.0.9，tested implementation 与 root / installed matching SHA 详见 CALLOUT_TEST
- P2.5 PR #7：MERGED（`06eb5641793d04be1b78563b7fd0fb532b1967a3`）
- P2.6 automated validation：Build / Check / diff-check PASS；严格 single-body / 13-declaration contract + 七项 Foundation 映射验证；36 项内存负向变体全部拒绝（覆盖要求的 32 类），P2.2–P2.5 合同函数逐字不变；theme.css 仅由 Build 生成
- P2.6 real Obsidian Desktop QA：PASS；Obsidian 1.14.4 / Installer 1.10.6 / Windows 25H2 Build 26200.8737 / Style Settings 1.0.9；matching root / installed SHA、具体结果与恢复状态见 NAVIGATION_FILE_EXPLORER_TEST；独立于 automated validation
- P2.6 PR #8：MERGED（`f00e67108bece2b0a4cede9a687c7ee2da7cbc6e`）
- P2.7 automated preparation validation：Build / Check / diff-check PASS；仅四份文档，theme.css / src / settings / scripts unchanged；最终 Desktop QA 与 Phase 2 exit decision pending，不从自动验证推断 PASS
- 现有 release/foundation-test 包保留 V0.1 baseline；P2.2 QA 使用本分支根目录安装文件并记录 hash
