# AI Handoff

- **项目**：个人长期使用的模块化 Obsidian CSS Theme，融合 Composer 读写体验与 Border workspace 思路，独立实现；Working Title 尚未定稿。
- **当前阶段**：P4.1.5 Desktop Preset Acceptance QA已执行，整体FAIL / promotion blocked。f50040a的override/Default/persistence与smoke通过，RESET-01失败；Phase 2/3完成状态保留。
- **分支**：`codex/p4-preset-prototype`；tested implementation `f50040a45c456693b603dc148445b33ea8eca2c1`。本次QA文档提交hash用git获取；独立checkout，原QA工作区未改。
- **实现提交**：Tokens/Tabs 初始 `144e5e3`；Tabs verified QA fix `62789ef45bda6167eea7ae672eae3596aca9205d`；Sidebar `c69bdcf23cc1f756c9a03faee959518a48b98345`；Ribbon `22e47efb06e6e3451807ad71a1d6990297e440fd`；Status Bar `3953aabe934f5cc35a13ff6ae4273231c546c031`。Checkpoint hash 用 `git rev-parse HEAD` 获取。
- **QA 来源**：[Tabs Desktop report](P3_1A_TABS_DESKTOP_QA.md) 为详细证据；Sidebar/Ribbon/Status Bar final PASS 由维护者 checkpoint 指令报告，不补造环境/hash/逐项数据。历史 pending 记录不再是当前待办。
- **Remaining N/A / limits**：native Tab/close tabindex=-1，独立 sequential focus N/A，close focus-visible 不声称独立验证；Tabs drag/reorder、screen-reader audit 未执行。P2.6 drag/drop、Foundation Checkbox 既有 N/A 不重开。不声称全部插件或平台认证。
- **立即下一步**：返回Chat Design Review处理RESET-01，未建议进入正式Phase 4。不要擅自改Preset架构/增加preset/JS/plugin/token或修改Reading、P2/P3。
- **本轮范围**：仅独立Vault Desktop acceptance与两份QA状态文档；环境/实际回答/矩阵/恢复见CURRENT_STATUS的P4.1.5 checkpoint。DECISIONS与implementation不改。
- **Token contract**：仅既有 Foundation + 两项 body-scoped workspace geometry aliases；Style Settings → semantic tokens → Obsidian public variables → 有证据才 scoped selectors；无新 palette/设置，workspace Build 顺序不变。
- **已保留合同**：Phase 2 selectors/contracts、native Source caret/真实空行 navigation、用户字体、Callout semantic colors 与 yellow Highlight、P2.6 hierarchy/wrapping；ISSUE-01 fix `0068eab` 已验证合并，不重做。Tabs QA 的 mod-root scope、curve cap 与 active Accent outline 保留。
- **延期**：Auto Hide、Focus Mode、Card Layout、正式Preset System（当前仅实验性Writer）、Advanced Rainbow Folder、Canvas/Graph、Advanced Animation、Seamless Embed、Companion Plugin；不引入 JS/runtime/DOM patch。未来规划来源与执行合同见 [Design Spec](THEME_DESIGN_SPEC.md)、[Matrix](FUSION_FEATURE_MATRIX.md)、[Source Analysis](SOURCE_THEME_ANALYSIS.md)、[P3.1 plan](P3_1_WORKSPACE_FUSION_PLAN.md)。旧矩阵/计划过程状态以 CURRENT_STATUS checkpoint 和 TASKS 为准，旧阶段过程记录不代表当前未授权状态。
- **验证**：P4.1.5 npm run check第二次PASS（首次CRLF freshness），git diff --check PASS，最终root/installed artifact hash一致、implementation无变化。Desktop整体FAIL；RESET-01阻塞，不能以自动检查替代运行时验收。
- **兼容 / 发布**：四项原有独立设置加一个实验性class-select；只实现Writer640px recommendation与neutral Default，不是正式Preset System。Accent文本输入workaround保留；发布命名/署名待确认。

- **Focus contract**：CSS only，based on native `.workspace-leaf.mod-active`，no runtime behavior；不用 body.is-focused，无 content opacity/blur/animation/geometry 变化。[DOM evidence](P3_2C_FOCUS_DOM_EVIDENCE.md) f31119b 支持 main leaf/header chain。
- **Phase 3.2 limits**：header 隐藏时无额外cue；community custom views/pop-out/全平台兼容不作整体认证；无 WCAG/screen-reader audit claim。历史 QA pending 是过程记录，当前以 checkpoint ALL PASS 为准。complete 不表示已合并 main。

- **Reading contract**：Decision 012 有效、011 superseded；既有 `--theme-reading-width → --file-line-width` 足够，Reading / Live Preview / Source 保留 native width behavior。Phase 2 typography/spacing 足够；Source native rhythm difference 已接受，caret/keyboard 优先。不得创建 reading-width/reading-spacing CSS、Reading Boundary/Focus enhancement；只有新的可复现且 public variable/token 无法表达的真实 gap 才重开 implementation review。embed/community contexts 未认证。证据：[Width DOM](P3_3A_READING_DOM_EVIDENCE.md)、[Rhythm Audit](P3_3B_READING_RHYTHM_AUDIT.md)。

- **P4.1.5 blocker RESET-01**：Style Settings1.0.9 / Obsidian1.14.4，Writer+saved500点击Content Width Reset，保存键变700而非删除；computed/native width700而非640。Dark两次、Light插件View的原生Home→Right(500)→Tab Reset→Enter均复现；帮助文案承诺不成立。源码clearSetting的delete不能替代runtime证据；根因未定，不写入新architecture decision。
- **P4.1.5 PASS边界**：维护者测试前正确预测优先级/Default/Reset；A-D、saved=700优先级、真实进程重启Writer+500、插件off回700且无stale class/on恢复Writer+500、Light/Dark同模式保护变量、三种Markdown视图和P2/P3 smoke通过。不是完整新手研究/全平台/全插件认证。
- **P4.1.5 recovery**：独立Vault与备份保留本地；日常五项配置hash不变，测试配置恢复，原Vault重新打开。npmcheck第二次PASS（首次仅CRLF freshness），最终CSS字节恢复且implementation无diff；diff-check通过。详细证据以CURRENT_STATUS最新checkpoint为准；上方旧Phase3 handoff的“暂不开始P4”等为历史阶段范围。
