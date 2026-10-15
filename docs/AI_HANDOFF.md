# AI Handoff

- **项目**：个人长期使用的模块化 Obsidian CSS Theme，融合 Composer 读写体验与 Border workspace 思路，独立实现；Working Title 尚未定稿。
- **当前阶段**：P4.1 实验记录已收尾；assisted Prototype 验收 FAIL / promotion blocked。RESET-01 根因 CONFIRMED、未修复；不是正式 Preset System，不自动继续修复。
- **分支**：`codex/p4-preset-prototype`；implementation `f50040a`、Desktop QA `7d89f34108beffea8ac4f30842e1f44c37ea6273`、调查 `14c5bc9` 全部保留；当前文档 hash 用 git 获取。
- **实现提交**：Tokens/Tabs 初始 `144e5e3`；Tabs verified QA fix `62789ef45bda6167eea7ae672eae3596aca9205d`；Sidebar `c69bdcf23cc1f756c9a03faee959518a48b98345`；Ribbon `22e47efb06e6e3451807ad71a1d6990297e440fd`；Status Bar `3953aabe934f5cc35a13ff6ae4273231c546c031`。Checkpoint hash 用 `git rev-parse HEAD` 获取。
- **QA 来源**：[Tabs Desktop report](P3_1A_TABS_DESKTOP_QA.md) 为详细证据；Sidebar/Ribbon/Status Bar final PASS 由维护者 checkpoint 指令报告，不补造环境/hash/逐项数据。历史 pending 记录不再是当前待办。
- **Remaining N/A / limits**：native Tab/close tabindex=-1，独立 sequential focus N/A，close focus-visible 不声称独立验证；Tabs drag/reorder、screen-reader audit 未执行。P2.6 drag/drop、Foundation Checkbox 既有 N/A 不重开。不声称全部插件或平台认证。
- **立即下一步**：等待用户确认产品方向。Documentation-only 是 Chat 推荐、待用户确认，尚非批准的最终决定；不自动修复 RESET-01、换控件或重试。其他 Phase 4 候选须独立选择/授权，不启动 Card 开发。
- **本轮范围**：仅实验 closeout 文档；完整证据链与 disposition 见 CURRENT_STATUS 的 P4.1 Preset Prototype Closeout。历史机制研究的 Reset 推断由调查纠正，原 contract/证据不删改，不新增正式架构决策。
- **Token contract**：仅既有 Foundation + 两项 body-scoped workspace geometry aliases；Style Settings → semantic tokens → Obsidian public variables → 有证据才 scoped selectors；无新 palette/设置，workspace Build 顺序不变。
- **已保留合同**：Phase 2 selectors/contracts、native Source caret/真实空行 navigation、用户字体、Callout semantic colors 与 yellow Highlight、P2.6 hierarchy/wrapping；ISSUE-01 fix `0068eab` 已验证合并，不重做。Tabs QA 的 mod-root scope、curve cap 与 active Accent outline 保留。
- **延期**：Auto Hide、Focus Mode、Card Layout、正式Preset System（当前仅实验性Writer）、Advanced Rainbow Folder、Canvas/Graph、Advanced Animation、Seamless Embed、Companion Plugin；不引入 JS/runtime/DOM patch。未来规划来源与执行合同见 [Design Spec](THEME_DESIGN_SPEC.md)、[Matrix](FUSION_FEATURE_MATRIX.md)、[Source Analysis](SOURCE_THEME_ANALYSIS.md)、[P3.1 plan](P3_1_WORKSPACE_FUSION_PLAN.md)。旧矩阵/计划过程状态以 CURRENT_STATUS checkpoint 和 TASKS 为准，旧阶段过程记录不代表当前未授权状态。
- **验证**：P4.1.5 npm run check第二次PASS（首次CRLF freshness），git diff --check PASS，最终root/installed artifact hash一致、implementation无变化。Desktop整体FAIL；RESET-01阻塞，不能以自动检查替代运行时验收。
- **兼容 / 发布**：四项原有独立设置加一个实验性class-select；只实现Writer640px recommendation与neutral Default，不是正式Preset System。Accent文本输入workaround保留；发布命名/署名待确认。

- **Focus contract**：CSS only，based on native `.workspace-leaf.mod-active`，no runtime behavior；不用 body.is-focused，无 content opacity/blur/animation/geometry 变化。[DOM evidence](P3_2C_FOCUS_DOM_EVIDENCE.md) f31119b 支持 main leaf/header chain。
- **Phase 3.2 limits**：header 隐藏时无额外cue；community custom views/pop-out/全平台兼容不作整体认证；无 WCAG/screen-reader audit claim。历史 QA pending 是过程记录，当前以 checkpoint ALL PASS 为准。complete 不表示已合并 main。

- **Reading contract**：Decision 012 有效、011 superseded；既有 `--theme-reading-width → --file-line-width` 足够，Reading / Live Preview / Source 保留 native width behavior。Phase 2 typography/spacing 足够；Source native rhythm difference 已接受，caret/keyboard 优先。不得创建 reading-width/reading-spacing CSS、Reading Boundary/Focus enhancement；只有新的可复现且 public variable/token 无法表达的真实 gap 才重开 implementation review。embed/community contexts 未认证。证据：[Width DOM](P3_3A_READING_DOM_EVIDENCE.md)、[Rhythm Audit](P3_3B_READING_RHYTHM_AUDIT.md)。

- **P4.1.5 blocker RESET-01**：Style Settings1.0.9 / Obsidian1.14.4，Writer+saved500点击Content Width Reset，保存键变700而非删除；computed/native width700而非640。Dark两次、Light插件View的原生Home→Right(500)→Tab Reset→Enter均复现；帮助文案承诺不成立。源码clearSetting的delete不能替代runtime证据；P4.1.5当时根因未定；P4.1.6已通过实际1.14.4 setter/debounce与离线重放确认删除后写回机制，详见新报告；未作新architecture decision。
- **P4.1.5 PASS边界**：维护者测试前正确预测优先级/Default/Reset；A-D、saved=700优先级、真实进程重启Writer+500、插件off回700且无stale class/on恢复Writer+500、Light/Dark同模式保护变量、三种Markdown视图和P2/P3 smoke通过。不是完整新手研究/全平台/全插件认证。
- **P4.1.5 recovery**：独立Vault与备份保留本地；日常五项配置hash不变，测试配置恢复，原Vault重新打开。npmcheck第二次PASS（首次仅CRLF freshness），最终CSS字节恢复且implementation无diff；diff-check通过。详细证据以CURRENT_STATUS最新checkpoint为准；上方旧Phase3 handoff的“暂不开始P4”等为历史阶段范围。

- **P4.1.6 confirmed mechanism**：Slider Reset先setValue(metadata default700)，实际1.14.4 setter在值变化时触发onChange；插件250ms trailing callback在clearSetting删除后setSetting700。旧机制研究“删除即稳定回退”缺少SDK callback/timer证据，已在新报告纠正；原UX Contract不擅自降级。
- **Options / next authority**：A二次Reset/全主题Reset不等于可靠单项Reset；B无合法metadata hook；C数值文本存在pending-input写回，select有旧数值/px兼容成本，均未实施或Desktop认证；Chat推荐D Documentation-only；最终产品方向待用户确认，尚未批准。不要自行修复、换控件、改Typography/Reading、更新DECISIONS或宣布PASS。
- **P4.1.6 validation**：离线五断言/四场景PASS；独立副本npmcheck第二次PASS，repo implementation/theme/metadata完全不变，diff-check PASS。原QA历史保留，按本轮授权核实远端后正常推送两次文档提交；最终hash/远端以git为准。

- **产品决策边界**：不要将旧“Style Settings assisted / Proceed to prototype”当成当前验收成功；也不要将实验 FAIL 写成所有 Theme-first preset 不可行。Documentation-only、UX contract 正式修订和实验最终处置仍待用户确认，DECISIONS 本轮不改。
- **后续候选**：shell-level Card Layout 仅可作为待选择的独立 design/DOM review；Focus Enhancement / Auto Hide / Effects 继续 Defer。没有被本 checkpoint 自动授权的下一实现任务。
- **Closeout validation**：npm run check / diff-check PASS；src/settings/theme/scripts/manifest 及历史 evidence 与14c5bc9不变，无文件删除；本轮未操作 Vault或重跑Desktop。正常 commit/push，不创建PR或合并。
