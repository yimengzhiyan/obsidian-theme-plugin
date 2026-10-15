# Current Status

## Current Milestone

P4.1.5 Desktop Acceptance QA EXECUTED — FAIL / promotion blocked。Prototype f50040a 的 recommendation/override/Default/persistence 与 regression smoke 通过；单项 Content Width Reset 未删除保存覆盖，实际为 700px 而非 Writer 640px。详见本页 P4.1.5 checkpoint。

## Foundation

V0.1 Theme Foundation — Complete / Merged to `main`

## Current Branch

`codex/p4-preset-prototype`

## Current Commit

Tested implementation：`f50040a45c456693b603dc148445b33ea8eca2c1`。本次仅 Desktop QA 文档；QA commit 使用 `git rev-parse HEAD`。

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
- P2.7 targeted Desktop Exit Verification PASS；ISSUE-01 fix verified at `0068eabc4a8177c8b26afdd8ab72579eafd80fc1`；Phase 2 exit gate satisfied，P2.2–P2.7 complete，详见 [Final QA](PHASE2_REGRESSION_TEST.md)

- Phase 2 PR #9 MERGED；merge commit `882709c83add9677b69eedf05fe5fdfaea366df6`；实现修复与最终回归文档均已进入 main
- Phase 3 planning：已建立 [Design Spec](THEME_DESIGN_SPEC.md)、[Feature Matrix](FUSION_FEATURE_MATRIX.md)、[Source Analysis](SOURCE_THEME_ANALYSIS.md)；仅文档，未实现新功能

- Phase 3 planning PR #10 squash MERGED：`fbc971d8d034906d1bfd911df5d86e3688cffeaf`；本地 / 远程 main 已更新
- [P3.1 Workspace Fusion plan](P3_1_WORKSPACE_FUSION_PLAN.md) 已准备：范围、模块、变量、设置候选、QA 与延期项；仅文档

## In Progress

- P4.1.5 Desktop acceptance 已执行，Reset gate FAIL；等待独立设计 review，未实施修复。
- 无进行中的 P3.3a CSS 实现；evidence / architecture review COMPLETE，结论是无需新增 CSS。
- P3.3b audit COMPLETE；C=0，无 Reading Spacing implementation；详见 [Rhythm Audit](P3_3B_READING_RHYTHM_AUDIT.md)。
- First-line indent、letter / word spacing、granular heading settings、bold / italic settings 继续 deferred

## Next Step

返回独立 Chat Design Review，处理 P4.1.5 RESET-01 的实测行为与 UX 承诺冲突。当前不建议进入正式 Phase 4；不修改 Preset 架构、不新增 preset/runtime/token，也不改 Phase 2/3 或 Reading。

## Known Issues / Blockers

- P4.1.5 RESET-01：Content Width Reset保留700覆盖而非删除，Writer实际700而非640；Desktop acceptance FAIL，promotion blocked。详见最新checkpoint。
- Known decision：Source Mode visual rhythm may differ from Reading View；这是为保留原生 caret / keyboard navigation 而主动接受的 scope decision，不是 unresolved visual blocker
- P2.2 无已知 blocker；撤回 Source normalization 后导航已由真实 Desktop 验证恢复
- P2.3 无 unresolved blockers；Source unresolved-link presentation 可不同于 rendered views，Reading unresolved dotted decoration 主要 hover 可见，均接受为 native/public-variable differences，不增加 selector 覆盖
- P2.4 无 blocking issue；Editing / Reading syntax palette differences 已接受（两者可读）；Table row hover 可 subtle / view-dependent；未暴露 native table controls 记录 N/A，不视为 theme regression，不新增 selector 覆盖
- P2.5 无 blocker；Callout semantic type colors / icons / aliases 保持原生，Theme Accent 有意不替换其语义颜色；nested blending 与 folding 保持原生，无需 selector-based redesign
- P2.6 无 blocker；folder-only weight intentionally unimplemented，因为真实 Desktop QA 确认 folder/file hierarchy 足够清晰；drag/drop N/A 按批准 gate 为 non-blocking，不声称成功移动
- P2.7 ISSUE-01：Live Preview ordinary Blockquote Tag foreground 被 quote syntax color 覆盖，而非跟随 --tag-color；历史 BLOCKER；修复 `0068eabc4a8177c8b26afdd8ab72579eafd80fc1` 已通过 targeted Desktop verification，ISSUE-01 closed
- Round 1 partial gates（已关闭）：inactive tab hover、Highlight text selection、Code Block long-line / actual Source editing、main-window constrained-space smoke；已由维护者报告的 final Desktop Exit Verification PASS 关闭；详细逐项记录未在本次指令中提供
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
- P2.7 automated preparation validation：Build / Check / diff-check PASS；仅四份文档，theme.css / src / settings / scripts unchanged；历史 preparation 结果；最终 Desktop Exit Verification PASS 与 Phase 2 exit gate satisfied 依据维护者本次指令，独立于自动检查
- 现有 release/foundation-test 包保留 V0.1 baseline；P2.2 QA 使用本分支根目录安装文件并记录 hash
- Phase 2 final documentation closeout：Build / Check / diff-check PASS；仅更新四份文档，CSS / theme.css / scripts/check.mjs 不变；Desktop PASS 为维护者报告结果。

- Phase 3 planning / finalization validation：`npm run check` / `git diff --check` PASS；AGENTS 要求 Check，且 Check 内部验证 Build/生成同步；未单独执行 `npm run build`，无 CSS 源码变化；六份文档以外无修改。无新 Desktop QA claim。

- P3.1 preparation：`npm run check` / `git diff --check` PASS；仅文档，src / settings / scripts / theme.css / manifest unchanged；未执行新 Desktop QA。

- P3.1 first milestone：Build / Check / diff-check PASS；仅两份 workspace 源码 + generated theme.css；Phase 2 源码/生成 sections 不变。Desktop/browser QA 未运行；历史 first-milestone 本地验证结果，现纳入 P3.1a 提交。

- P3.1a Tabs：Build / Check / diff-check PASS；generated theme.css 与 source 同步，无 hardcoded colors；对 main baseline 的比较确认 Phase 2 与其他 workspace 源码/生成 sections 不变。只使用已有 tokens 和两项已批准 workspace aliases，无新设置/Plugin/JS/DOM 修改。Desktop QA 未运行，不能据自动检查认定无运行时 regression。

- P3.1a real Windows Desktop QA：PASS after targeted fixes；Obsidian 1.14.4 / installer 1.10.6 / Windows 25H2 build 26200.8737 / Style Settings 1.0.9。Light/Dark x red/blue/green active indicator/border、Radius 0/20、close、long title、keyboard switching、split/stacked、749 px narrow window 与 Phase 2 smoke PASS；native independent Tab/close focus N/A。Source edits restored by SHA, temporary QA data removed, original notes/settings/window restored. Full evidence: [P3.1a Desktop QA](P3_1A_TABS_DESKTOP_QA.md).

- P3.1b automated validation：Build / Check / diff-check PASS；仅 sidebar.css 追加两条直属 shell/header rules，theme.css 由 Build 同步。原 sidebar/Foundation mappings 与其他生成 sections（含 Tabs/P2.6）字节不变；无 token/settings/script/runtime 变化。
- P3.1b Desktop QA：未运行。selector 不直接匹配内容、editor 或 resize handle；实际 header padding/row-gap 对窄窗控件与 scroll 高度的影响仍须真实 Desktop 验证，不由源码比较推断 PASS。

- P3.1b Desktop QA：PASS（维护者在 P3.1c-1 指令中报告）；无新增测试环境/hash/逐项结果主张，历史 pending 记录保留。
- P3.1c-1：Build / Check / diff-check PASS；源码仅 ribbon.css，theme.css 由 Build 同步。无 token/settings/script/runtime 变化；现有 hover/active rules 与非 Ribbon 源码/生成 sections 字节不变。
- Ribbon Desktop QA：未运行。标准按钮保留 native 尺寸/事件/可见性；需要确认 margin 在实际 native 容器的布局效果、Radius 极值、底部控件可达性与 plugin action shell 兼容性。新增 divider 不改变尺寸；resize 实际交互仍须 QA。

- P3.1c-1 Ribbon Desktop QA：PASS（维护者本轮指令报告）；此前 pending 条目为历史记录。
- P3.1c-2：Build / Check / diff-check PASS；源码仅 statusbar.css，theme.css 由 Build 同步；native secondary background / border color / muted text 保留，radius 复用既有 workspace alias，gap 与直属 mod-clickable hover shell。无新 token/settings/runtime。
- Protected scope：相对 baseline，所有非 Status Bar source/generated sections 字节不变；不覆盖 native position/width/height/scroll padding/wrap/visibility 或 plugin descendants。
- Status Bar Desktop QA：未运行。实际 column-gap 的空间占用、长插件内容/窄窗 overflow、hover 颜色与插件语义兼容性及 editor 底部遮挡仍需检查，不能从源码比较推断 PASS。

## P3.1 Final Checkpoint — 2026-10-13

P3.1 Workspace Fusion **COMPLETE**，限 Workspace Tokens、Tabs、Sidebar、Ribbon、Status Bar。Desktop QA **ALL PASS**，依据维护者 final checkpoint 指令；Tabs 详细证据见 [Desktop QA](P3_1A_TABS_DESKTOP_QA.md)，其他模块未提供独立环境/hash/逐项日志，不补造数据。上方 pending / NOT RUN 与实现风险条目为历史过程记录，当前状态以本 checkpoint 为准。

| Module | Implementation / verified fix | Final status |
| --- | --- | --- |
| Workspace Tokens | `144e5e31c02234421c3f7c2f4ed1d46b96155d08` | COMPLETE；两项 geometry aliases，由模块集成验证 |
| Tabs | `62789ef45bda6167eea7ae672eae3596aca9205d` | COMPLETE / Desktop QA PASS |
| Sidebar | `c69bdcf23cc1f756c9a03faee959518a48b98345` | COMPLETE / Desktop QA PASS |
| Ribbon | `22e47efb06e6e3451807ad71a1d6990297e440fd` | COMPLETE / Desktop QA PASS |
| Status Bar | `3953aabe934f5cc35a13ff6ae4273231c546c031` | COMPLETE / Desktop QA PASS |

Remaining limitations：Tabs/close `tabIndex=-1`，独立 sequential keyboard focus N/A，不添加 DOM/focus hacks，不声称 close focus-visible 独立验证；Tabs drag/reorder 与 screen-reader audit 未执行。P2.6 drag/drop N/A、Foundation Checkbox N/A 和既有 accepted native differences 保留，非本轮新增 blocker。ALL PASS 不扩展为全插件/全平台认证，也不从自动检查推断 Desktop PASS。

此前 Build / Check / diff-check PASS。本次 documentation checkpoint `npm run check` / `git diff --check` PASS；Check 按 AGENTS 要求运行，内部 Build 保持生成内容不变。仅四份允许文档更新；src / theme.css / settings / scripts / manifest 未变，无新增 token。下一阶段 pending architecture review；View header 未实现，Auto Hide / Focus / Card Layout / Presets / advanced features 继续 deferred。没有未提交源码或临时 QA 工作；commit 后按持续授权 push，未创建 PR/merge。

## P3.2a View Header Shell — Implementation

最新 scoped instruction 授权独立 View Header Shell，不重开 P3.1。新增 src/workspace/view-header.css；Build 生成 theme.css。所有 selectors 以 `.workspace-split.mod-root .workspace-leaf-content > .view-header` 为根；直属 title/actions 子节点限定避免污染 Sidebar、Tabs 或 view contents，不按 data-type/plugin 名称分支。

公共变量：header scope 的 file-header-border → 1px solid theme-border、file-header-font-weight → native medium。header primary 背景与 gap-derived column-gap / horizontal padding；直属 title normal text；actions gap；直属 public view-action 的 muted/hover/active icon variables、受 existing space-sm cap 的 workspace radius、hover/active backgrounds，disabled/aria-disabled 不附加 shell 背景。

无新 token/setting/runtime/DOM 修改；没有 path/breadcrumb/pseudo-element、position/sticky/floating/hide、font-size/family 或 view-specific styling。官方变量依据 [File reference](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Editor/File.md)，DOM 子节点匹配须 Desktop 验证。

Validation：Build / Check / diff-check PASS；source 只新增 view-header.css，全部既有 generated sections 字节不变。原模块源码/Phase 2/P3.1 contracts 保留；Check 为基础健康与旧合同验证，不代替新的 selector/native UI Desktop QA。

Desktop QA NOT RUN：记录 branch/commit/root==installed hash 与实际版本/设置；Light/Dark、red/blue/green Accent、Radius 0/20；native header on/off、short/long Chinese/English title、rename/tooltip/title scrolling、back/forward/menu/actions clicks/hover/active/disabled；split/stacked/narrow 窗口、Sidebar/Tabs不受影响、Source/LP/Reading typography/caret 与 components smoke。N/A 依据实际 native controls，不强制 focus/DOM。不声称全平台或全插件兼容。

Remaining risks：public variables/DOM class 的实际消费与 native specificity、1px divider/header padding 对窄窗空间、标题字重与原生 editing 继承、action shell 与特殊控件。没有新 Desktop PASS；提交后按持续授权推送，不创建 PR。

## P3.2b-1 Layout Geometry Foundation

Token audit：现有 workspace-control-gap → theme-space-xs 与 theme-border 足够表达均匀 pane 间距和 neutral divider。无语义缺口，无新 layout token/settings；不使用 radius，避免将 spacing foundation 变成 Card shell。

新增 src/layout/layout.css，Build 自动按既有 layout group 收集。主 root split：gap 使用 workspace-control-gap，divider-color 保持 Foundation border。主 root 下 native horizontal/vertical split：同一 gap；`:not(.workspace-leaf-content *)` 排除 editor/plugin 内容内的同名 split。无全局 workspace-leaf rule，无 tabs/sidebar/ribbon/statusbar/header/navigation/editor/components 修改。

不设置 pane margin/padding、尺寸、flex-direction/比例、display、position、overflow、圆角、divider width/hover hit area 或 breakpoint；不是 Layout Engine。原生 resize/stacked scroll/持久化行为由 Obsidian 控制。divider hover 继续继承 Foundation 映射。官方参考 [Divider variables](https://github.com/obsidianmd/obsidian-developer-docs/blob/main/en/Reference/CSS%20variables/Window/Divider.md)。

Validation：Build / Check / diff-check PASS。基线比较确认全部既有源文件和 generated sections 字节不变，仅新 layout section；无 hardcoded colors、新 token 或脚本变化。P3.2a Desktop PASS 为维护者报告，不从自动检查推断。

Layout Desktop QA NOT RUN：记录版本/branch/commit 与 root==installed hash；Light/Dark、单 pane 与左右/上下/混合 nested splits、增删 pane、拖动所有 divider 到极值、resize hover/hit area、保存/重开 pane 比例；stacked tabs 内部滚动和拖拽/切换；真实窄窗与 split+sidebar expanded/collapsed、header/Status Bar 不遮挡；Source/LP/Reading 的 width/line-height、caret/blank lines、heading/Callout/Navigation regression。不强制 pixel equality，N/A 记录实际原因，恢复设置/window。

Remaining risks：gap 会参与 native flex available-space 计算；native percentage/flex sizing、min-size 与 divider offsets 在混合/极窄 splits 可能出现 overflow 或拖动偏差。匹配 native split DOM 及 complex :not scope 须 Desktop 验证。未声称 pane sizing/编辑体验已 PASS。无 Card/Floating/Auto Layout/Responsive/Focus/JS/DOM 修改；提交后 push，不创建 PR。

## P3.2c-1 Native Active Leaf Visual Hierarchy

DOM evidence：已读取 [P3_2C_FOCUS_DOM_EVIDENCE](P3_2C_FOCUS_DOM_EVIDENCE.md)，提交 f31119b；Obsidian 1.14.4 / Windows 实测确认 main root 中 leaf `.mod-active` 切换，header 无独立 active/focused/selected 状态，Markdown 与 core Graph 共享 leaf/content/direct-header chain。body.is-focused 仅 application focus，本实现不使用。

新增 src/effects/focus.css，恰好两条规则：main root active leaf 直属 content/header 的 file-header-border → 1px solid theme-accent；inactive leaf 相同链 → 1px solid theme-border。Inactive de-emphasis 为相对 active Accent boundary 的 neutral shell，不降低标题/内容/按钮的颜色或 opacity。边界宽度与 P3.2a 原 1px 相同；背景/尺寸/spacing/定位/overflow不改，无新 token/settings。效果模块晚于 workspace 输出，state selector 局部优先级解决边界颜色覆盖，不用 important。

CSS only / no runtime behavior；无 JS/DOM/keyboard/focus handler、body focus condition、auto-hide/Zen/collapse/panel hiding/blur/animation。没有修改其他 source；所有 prior generated sections 字节不变。只作用公共 header，plugin contents 未匹配；Core Graph 是 evidence-supported shell，不能扩大为任意 community plugin 兼容证明。

Validation：Build / Check / diff-check PASS；额外静态核对 exact two rules/允许的两个 border 值与 prior section 同步。Generic Check 不新增 Focus strict gate，不代替实际视觉测试。

Desktop QA NOT RUN：记录 branch/commit/版本/实际设置与 root==installed hash；Light/Dark x red/blue/green Accent，A/B split active 来回切换（native mouse/keyboard）与 stacked 同组 leaf；Markdown Source/LP/Reading 和 Core Graph 激活/失活，hidden tabs 不被显示；window 失焦/回焦保持最后 active leaf signal。header hidden 的 native 配置下没有额外 boundary，这是有意 scope 限制，不强制显示。验证 header divider可见/无double width、标题/actions/rename/disabled 与 native keyboard focus outlines 保留；active tab/selected file原有状态、Sidebar/Ribbon/Status Bar、split resize/geometry/scroll、content字色/selection/caret/Callout/Code/Navigation无回归。N/A/限制作真实记录。

Remaining risks：Accent vs neutral boundary 在部分色值的可见性未验证，不声称 WCAG/screen-reader 审计；公共 file-header-border 的实际 cascade/消费、隐藏header无额外cue；pop-outs/其他平台/社区自定义header未由 evidence覆盖。Graph contents不改，任意community header兼容仍需测试。无新 Desktop PASS，提交后 push，不创建 PR。

## Phase 3.2 Final Checkpoint

**Phase 3.2 COMPLETE / Desktop QA ALL PASS**，依据维护者 final checkpoint 指令。历史 pending / NOT RUN 是实施过程记录，当前结论以此 checkpoint 为准；本轮未重新执行 Desktop QA，不补造独立测试环境/hash/逐项日志。

| Module | Commit | Final status |
| --- | --- | --- |
| View Header Shell | `0a60fa0985c5c7dc3fb6e1951535b5d19fe171ae` | COMPLETE / Desktop QA PASS |
| Layout Foundation | `3cf65addc96a3356eee91861ae485db19b6fd97b` | COMPLETE / Desktop QA PASS |
| Focus Foundation | `7827734ba95c837bf45b9516616142d408149da9` | COMPLETE / Desktop QA PASS |

Focus System：**CSS only，based on native `.workspace-leaf.mod-active`，no runtime behavior**。仅 main root leaf 直属公共 header 的 active Accent / inactive neutral 1px boundary；不用 body.is-focused，不改变内容 opacity、布局几何、键盘处理或 panel visibility。

Remaining limitations：native header 隐藏时无额外 focus cue；DOM evidence覆盖测试版本的 Markdown/Core Graph，不等于所有 community custom views、pop-outs、平台兼容。ALL PASS 不代表 WCAG/screen-reader 审计。既有 Tab/close 独立 focus N/A、Tabs drag/reorder 未执行、P2.6 drag/drop/Foundation Checkbox N/A 继续保留。不重新扩展实现或以这些限制暗示新的 blocker。

既有 Build/Check/diff-check PASS；本 checkpoint Check/diff-check PASS，src/theme.css/settings/scripts/manifest 内容不变，无新 token。只更新允许的四份文档；checkpoint commit 后按持续授权 push，不创建 PR或合并。下一阶段 pending architecture review，不开始 deferred features。

## P3.3a Reading Width — Evidence / Architecture Review COMPLETE

Independent implementation review: **NEEDS FIX** for redundant scoped width selectors in `52d06ea07072498083b28a415b0023b38bd35af0`. Evidence already proves there is no public-variable gap. The corrective commit deletes reading-width.css, restores the original Build group contract and rebuilds theme.css without the Reading section. No force push or history rewrite; Decision 012 supersedes Decision 011.

Final contract: existing **`--theme-reading-width → --file-line-width` is sufficient**. Reading preview-sizer, Live Preview cm-sizer and Source continue consuming Obsidian native public-variable behavior. Content Width 500/700, centering, narrow-pane responsiveness and Readable line length disabled/enabled behavior remain native. No high-specificity width selectors, new token/setting or other Reading CSS; Typography/Content Width/Phase 2/3 source remains unchanged.

[Reading DOM evidence](P3_3A_READING_DOM_EVIDENCE.md) is preserved byte-for-byte. Embed/community contexts remain unverified/N/A, not certified. No new Desktop QA is claimed; this is an evidence-driven architecture conclusion. If a real public-variable gap appears later, gather evidence and review the smallest scoped exception first. Do not start Reading Spacing under this correction.

Validation: Build / Check / diff-check PASS. reading-width.css absent; build.mjs and theme.css byte-identical to pre-implementation baseline b693656; file-line-width mapping remains; all existing source/generated sections and evidence unchanged. Corrective commit is pushed normally on the current branch, no PR.

## P3.3b Reading Rhythm / Spacing Gap Audit — 2026-10-14

真实 Desktop audit COMPLETE：Obsidian 1.14.4 / Installer 1.10.6 / Windows 25H2 26200.8737 / Style Settings 1.0.9。Baseline `865dcfda7b84ddb37606b3868808949e5d6bd692`；独立临时长文，未修改既有 QA 笔记。

Reading / Live Preview 的 ordinary paragraphs、heading transitions、consecutive headings 及 List / Quote / Code / Callout / Table 前后分组正常。Dark 完成 Line Height 1.5/2.0 × Width 500/700；Light / 窄 pane smoke 通过。Source caret、双真实空行 ↑/↓、Enter / Backspace 与长文末尾导航通过；不要求 Source visual parity。

分类：A=5 个 sufficient 场景组，B=3 个 accepted native difference 组，C=0。**NO NEW CSS REQUIRED**；现有 Phase 2 spacing contract 足够，不新增 CSS/token/settings，也不调整任何内容层 spacing。详情及测试边界见 [Reading Rhythm Audit](P3_3B_READING_RHYTHM_AUDIT.md)。

Validation：隔离副本 npm run check PASS；提交前 git diff --check。原仓库和 installed theme artifact 不变，临时笔记清理、既有笔记 hashes 不变，Dark / Line Height 2 / Width 500 与原 workspace 恢复。无后续 implementation / PR。

## Phase 3.3 Final Checkpoint — 2026-10-14

**Phase 3.3 COMPLETE / NO NEW CSS REQUIRED**。P3.3a [DOM evidence](P3_3A_READING_DOM_EVIDENCE.md) 与 P3.3b [Rhythm audit](P3_3B_READING_RHYTHM_AUDIT.md) 保留；A=5、B=3、C=0。

- Width：既有 `--theme-reading-width → --file-line-width` 足够，Decision 012 继续有效，Decision 011 已被 supersede。Reading / Live Preview / Source 保留 Obsidian native 限宽、居中、窄 pane 响应及 Readable line length 开关。
- Rhythm：Phase 2 typography/spacing contract 已足够。Source native visual rhythm difference 是已接受产品决策，继续优先 caret / keyboard navigation，不要求视觉 parity。
- 不创建 `src/reading`、`reading-width.css`、`reading-spacing.css`、Reading Boundary 或 Reading Focus enhancement；不增加 high-specificity width/spacing selectors、token 或 Style Setting。
- Future gate：只有新的、可复现且现有 public variable/token 无法表达的真实 gap，才重新开启 Reading implementation review。

Limitations：embed/community contexts 未认证；audit 限已记录版本、fixture、字体和参数，Light 为 smoke，不扩大为全平台/全部 Markdown 或 accessibility 认证。Phase 3.1 / 3.2 Desktop QA PASS 与既有 N/A 保留；本次未重跑 Desktop QA。

Working tree reconciliation：同步 audit 后本机 `git status` 干净，`CURRENT_STATUS.md` 无历史未提交 diff，因此没有可整合或丢弃的本地 QA 日志。远端 durable evidence / audit 已保留；其他 checkout 的未提交记录不在本机验证范围。仅清理已撤回实现留下的空 `src/reading` 目录，无源码删除或新实现。

Integration validation：`npm run build` / `npm run check` / `git diff --check` PASS；generated theme.css 与 source 同步且内容不变。相对本次 baseline，Phase 2 / P3.1 / P3.2 source、settings、scripts、manifest 与 evidence 均未修改，无 Reading Width/Spacing selectors。文档 checkpoint 正常 commit/push，后续 integration review，不自动 merge/P4。

## P4.1.5 Desktop Preset Acceptance QA — 2026-10-15

**Overall: FAIL — RESET-01 blocks acceptance and promotion.** 这是现有 Prototype 的验收记录，不改变架构，也不批准正式 Preset System。此前 P4.1.4 报告的 Desktop PENDING 由本记录更新；Phase 2/3 PASS 和既有 N/A 保留。

### Environment / isolation

- 测试日期：2026-10-15，America/Los_Angeles（本次客户端日期/时区）。
- Obsidian 1.14.4 / Installer 1.10.6：本轮原生 About 界面确认。
- Windows 25H2 / 26200.8737：本轮注册表确认。Style Settings 1.0.9：安装 manifest 与原生插件页确认。
- Branch `codex/p4-preset-prototype`；tested commit `f50040a45c456693b603dc148445b33ea8eca2c1`。
- 独立 checkout：`E:\codex-desktop\Codex_workspace\2026-10-11\obsidian-fusion-theme-desktop-qa-p2\work\p415-repo`。
- 独立 Vault：同级 `P415-Preset-Acceptance`，仅含专用 `Preset Acceptance.md` / `QA Target.md`；日常 Vault 中不安装 Prototype、不执行 Reset。
- 安装：手动复制该 checkout 的 manifest.json / theme.css 至测试 Vault `.obsidian/themes/Obsidian Fusion Theme/`。仅复制环境原有 Style Settings 1.0.9；无新插件或 Fusion runtime。
- Root / installed theme.css SHA256 同为 `CB30DFB7C0E288EAC9DFEB03D51DD43CB62B6FCCE9957C62C80805C8B537DA90`，结束再次一致。
- 字体大小 16，Line Height 默认 1.7，默认 Accent / Radius，无启用 snippets；原生 readable line length 开启。未重新设计 Reading 系统。
- 启动前备份日常 app / appearance / workspace / community-plugins / Style Settings data、全局 Vault 注册配置，并备份独立测试 Vault 初始配置；备份位于同级 `p415-backup`，不入 Git。
- 新 Vault 信任提示由用户手动处理；自动化没有代操作安全授权。窗口初始裁切，经用户手动调整后继续；不把裁切状态作为主题问题。

### Pre-result UI understanding

实际测试者为项目维护者，已经阅读当前 UX Contract；回答先于运行时结果展示，**不是盲测新手研究**。

第一次原答：

> 推荐。然后用户保存值 > Preset 推荐值 > 主题默认值。

补充问题后明确回答（原意记录）：

1. 保存 Content Width=500，选择 Writer 后仍为 500，因为用户保存值优先于 640 推荐。
2. 随后选 Default 仍为 500；Default 仅取消推荐，不清除用户保存值。
3. Reset 应删除单项覆盖；Writer 下应为 640，Default 下应为 700。Reset 不是关闭 Preset，也不是撤销。
4. 测试者注明“以上均为测试前预期，尚未依据实际 UI 行为验证”。

**Understanding PASS for this informed participant.** recommendation / override / Default / Reset 的理解正确。实际 Reset 未符合这份理解，不能因此推断产品 UI 已整体验收通过。

### Method / runtime evidence

选择、slider、Reset、停用/启用、模式切换均使用原生 Obsidian / 插件 UI。通过专用 Vault 的 DevTools Console 只读查询 body class、getComputedStyle 与可见 native sizer；没有 DOM mutation、style 注入、监听器或持久 helper。隐藏容器不算 visible width。控制台/UIA 有延迟，结果需同时核对完成的 class/mode 与截图。

保存键：`obsidian-fusion-theme@@oft-preset-prototype`（下称 selection），`obsidian-fusion-theme@@theme-reading-width`（下称 width）。实际消费者为 Reading `.markdown-preview-sizer` 或 editor `.cm-sizer`；width 是原生上限，窄 pane 下可见尺寸可以更小。

### PASS / FAIL matrix

| Case | Selection / saved key | Actual class / effective variables / visible width | Result |
| --- | --- | --- | --- |
| D — Default, no saved width | 初始 data `{}`；UI Default；width absent | `fusion-preset-default`；theme-reading-width / file-line-width = 700px；充足空间下 Live Preview cm-sizer = 700px | PASS |
| A — Default → Writer, no saved width | selection=writer；width absent | `fusion-writer-prototype`；两个变量 640px；Dark Reading sizer=640px。初次窄于上限的 LP 为604px、max-width640px；展开可用空间后Reading640px | PASS |
| B — Writer, user 500 | selection=writer；width=500 | Writer class 保留；两个变量500px；Reading sizer=500px，可见正文变窄 | PASS |
| C — Writer → Default, saved 500 | selection=default；width仍500 | Default class，Writer class移除；两个变量500px；Reading sizer=500px | PASS |
| Saved value equals metadata default | Writer；width=700（Reset 后实际留下） | Writer仍在；两个变量 / sizer=700px。不会把“等于700”误判为unset；此优先级正确不代表Reset正确 | PASS for precedence |
| Reset Content Width | 前：Writer / width500；后：Writer / width700，key未消失 | 实际700px，未回到640；Dark Reading与Light Source均采样确认 | **FAIL RESET-01** |
| Application restart | Writer / saved500；全部Obsidian窗口关闭且进程退出，再启动 | selection/width文件逐字一致；Writer class恢复；两个变量及Reading sizer500px | PASS |
| Disable Style Settings | 已保存Writer / 500；插件列表变空；data保留 | css-settings-manager和两种preset option class均无残留；两个变量和Reading sizer700px | PASS |
| Re-enable Style Settings | 插件列表恢复；Writer / 500仍保存 | Writer class恢复；两个变量和Reading sizer500px | PASS |
| Light / Dark | 两个模式内分别比较 Default500 与 Writer500；另查无override Writer | 同模式palette/border/typography样本一致；Light无override Writer的Source cm-sizer640px | PASS smoke |
| Reading / Live Preview / Source | 同一专用笔记；Writer500，另Source640 | native切换、内容可读；Source caret /真实空行导航/Enter/Backspace正常 | PASS smoke |
| Phase 2 regression | Typography、links/tags/highlight、quote/code/callout/table | Light Reading/LP与Dark已查看区域无新增污染；原生语义/表面/分组保留 | PASS smoke |
| Phase 3 regression | Tabs/Sidebar/Ribbon/Status Bar/View Header/Focus | 多Tab Ctrl+Tab、左右split、active header边界移动、搜索、Ribbon quick switcher、窄pane独立scroll正常 | PASS smoke |

### RESET-01 — reproducible acceptance blocker

Expected：Reset删除width保存键，Writer推荐640重新生效；实际key保存为700，持续压过640。Prototype帮助文案写“Reset removes your saved override, exposing the recommendation”，与实际不符。

复现：

1. 独立Vault启用Fusion及Style Settings1.0.9，选择Writer。
2. Content Width保存500，确认data中width=500、运行时500。
3. 使用Content Width旁原生Reset。
4. 等待后读取data：selection仍writer，width键存在且=700。
5. body仍Writer；computed theme-reading-width / file-line-width及Reading sizer均700px。

Dark设置窗口中重复两次，均为700。为排除鼠标定位/自动化setter误判，另在**Light / 插件自带Style Settings View**复测：点击原生slider聚焦，Home到480，Right到500；Tab使Reset出现焦点框；Enter触发Reset。结果仍保存700，回Source查询cm-sizer width/max-width/file-line-width均700px。此复核没有调用UIA set_value。

实际Reset后保存内容：

```json
{
  "obsidian-fusion-theme@@oft-preset-prototype": "fusion-writer-prototype",
  "obsidian-fusion-theme@@theme-reading-width": 700
}
```

只读查看安装的插件代码可见slider Reset调用setValue(default)及clearSetting，clearSetting定义含delete；这说明**不能仅凭源码意图认定runtime已清除**。未诊断到足以确定的调用/事件根因，不把具体上游缺陷归因当成已证事实。

后半段无override Light样本通过**应用关闭时恢复已备份初始data `{}`**建立，然后正常UI重新选择Writer。这是测试基线恢复，不是Reset成功、用户可用修复或新产品机制。

### Mode / typography protection samples

| Body computed value | Dark Default / Writer（同为saved500） | Light Default / Writer（同为saved500） |
| --- | --- | --- |
| background-primary | #202024 / #202024 | #ffffff / #ffffff |
| background-secondary | #17171a / #17171a | #f1f1f4 / #f1f1f4 |
| text-normal | #e9e7ed / #e9e7ed | #242329 / #242329 |
| background-modifier-border | #39383f / #39383f | #dedce3 / #dedce3 |
| line-height-normal | 1.7 / 1.7 | 1.7 / 1.7 |
| font-text-size | 16px / 16px | 16px / 16px |
| p-spacing / heading-spacing | 0.5rem / 1.5rem，两选择相同 | 0.5rem / 1.5rem，两选择相同 |

这些为实际只读样本与视觉smoke，不声称穷举全部palette/排版computed属性。

### Editing / layout observations

- 专用笔记含中文/英文长段落、长标题、连续H2/H3/H4、nested list、resolved/unresolved/external links、tag、highlight、inline/fenced code、Note Callout、Table。
- Light Reading与LP逐区滚动查看特殊块；Dark初始LP中亦检查标题、段落、Code、Callout表面。未重开Source与Reading视觉parity。
- Source：首部A与B之间两条真实空行；Down/Down分别进入、Up返回，caret可见。第二空行输入x后Backspace撤销；Enter增加空行、Backspace恢复，B位置随之下移/回归。无修改Source CSS。
- Writer recommendation直接生效的Light Source640px另做caret/空行smoke；完整Enter/Backspace在Writer saved500下执行。
- 左右split的窄pane内长标题/段落与Table正常换行，Code/Callout有独立表面，滚动一pane不移动另一pane。尝试divider drag未取得可确认比例变化，**不声称resize独立验收**。
- 多Tab通过Quick Switcher Ctrl+Enter新开QA Target，Ctrl+Tab切回；active tab/selected file正常。点击两个pane，原有active header Accent边界随之移动。
- Sidebar Search查询semantic返回两处匹配，恢复File Explorer；Ribbon quick switcher可打开/关闭。Status Bar词/字符数可见且随Source临时输入更新；header按钮保留。没有运行完整P2/P3历史QA清单。

### Validation / restoration / disposition

- `npm run check`：首次因新clone的CRLF生成文件freshness检查退出并重建；normalized CSS与已安装版本完全一致。第二次PASS（21source files）；随后恢复安装时的原始artifact字节，Git implementation diff为空。此换行观察不作为产品缺陷，也未提交重建输出。
- `git diff --check`：提交前通过；commit只允许CURRENT_STATUS /必要AI_HANDOFF文档。
- 没有CSS/theme/settings/token/runtime/依赖实现变化；DECISIONS未修改。本轮不修复RESET-01、不新增preset、不开始下一功能。
- 日常Vault app.json、appearance.json、workspace.json、community-plugins.json与Style Settings data的结束hash均与任务前备份一致；没有在日常Vault安装Prototype。
- 测试结束关闭Obsidian后恢复测试Vault的初始app/appearance/community/data配置。保留专用fixture及本地备份以便复测，不入Git。恢复原Vault注册/窗口配置并重新打开原日常Vault。
- **不建议进入正式Phase 4。** 返回Chat Design Review评估Reset行为与静态UX承诺冲突，任何修订须另行授权和复测；本报告不作新的架构决策。
- Remaining risks：一个已了解UX Contract的维护者样本，不代表新手理解；单一width轴不能推广到全Preset体系。section/all reset、selection reset的完整recovery、native readable-line-length off/on、pop-outs、所有社区view/其他平台及accessibility未完整认证。User instruction的核心用例已执行，Reset失败仍是blocker。
