# AI Handoff

Last Updated: 2026-10-21 (America/Los_Angeles)

- **最新执行结果**：P4.2d实际Desktop gates完成；Light/Dark、Radius0/8/20、single/split/nested/narrow、3组Card/f25 geometry equality、stacked横滚退出恢复、header on/off、Graph、NN Sidebar及main host、Focus/P2-P3 smoke见新报告。No compatibility CSS required for tested scope；NN drag/drop仍UNVERIFIED，不虚构PASS。
- **清理/验证**：独立Vault关闭；备份配置恢复（仅保留当前批准Card theme.css）、74fixture清理并归档、2原笔记hash不变；NN测试安装随恢复移除。root/installed SHA256同2C87962A15A04DBBC75744F28CCA43432644619193F4E9CDF3EA3E14BFB70357。副本npmcheck PASS，26构建输入与repo逐字一致，normalized output相同；最终diff-check/commit/push由Git核实。
- **边界**：无CSS/theme/token/metadata/build/DECISIONS修改；header-hidden既有限制、NN drag/drop与未测平台范围保留。历史pending/NOT INSTALLED条目只描述旧checkpoint，由P4.2d报告更新；不重开Preset。

- **项目**：个人长期使用的模块化 Obsidian CSS Theme，融合 Composer 读写体验与 Border workspace 思路，独立实现；Working Title 尚未定稿。
- **当前阶段**：P4.2d bounded Card Desktop QA PASS（2026-10-21）；详见 [QA report](P4_2D_CARD_SHELL_DESKTOP_QA.md)。不是自动promotion/release acceptance，下一步返回Chat。
- **分支**：`codex/p4-card-shell-prototype`，baseline71363e7；isolation f25a03ece0dd165151f360d672a9fcc5c23d1cf6；最终hash用git获取。旧Preset分支保留，无rewrite/delete。
- **实现提交**：Tokens/Tabs 初始 `144e5e3`；Tabs verified QA fix `62789ef45bda6167eea7ae672eae3596aca9205d`；Sidebar `c69bdcf23cc1f756c9a03faee959518a48b98345`；Ribbon `22e47efb06e6e3451807ad71a1d6990297e440fd`；Status Bar `3953aabe934f5cc35a13ff6ae4273231c546c031`。Checkpoint hash 用 `git rev-parse HEAD` 获取。
- **QA 来源**：[Tabs Desktop report](P3_1A_TABS_DESKTOP_QA.md) 为详细证据；Sidebar/Ribbon/Status Bar final PASS 由维护者 checkpoint 指令报告，不补造环境/hash/逐项数据。历史 pending 记录不再是当前待办。
- **Remaining N/A / limits**：native Tab/close tabindex=-1，独立 sequential focus N/A，close focus-visible 不声称独立验证；Tabs drag/reorder、screen-reader audit 未执行。P2.6 drag/drop、Foundation Checkbox 既有 N/A 不重开。不声称全部插件或平台认证。
- **立即下一步**：Chat依据P4.2d报告作后续acceptance/promotion决策；没有自动implementation/PR/merge任务。
- **本轮范围**：新Card分支隔离失败Preset活动runtime；恢复abab4f5四项settings，移除preset源码/生成section；新增唯一A2 layout/card-shell.css。完整合同见 P4_2C_CARD_SHELL_PROTOTYPE.md。
- **Token contract**：仅既有 Foundation + 两项 body-scoped workspace geometry aliases；Style Settings → semantic tokens → Obsidian public variables → 有证据才 scoped selectors；无新 palette/设置，workspace Build 顺序不变。
- **已保留合同**：Phase 2 selectors/contracts、native Source caret/真实空行 navigation、用户字体、Callout semantic colors 与 yellow Highlight、P2.6 hierarchy/wrapping；ISSUE-01 fix `0068eab` 已验证合并，不重做。Tabs QA 的 mod-root scope、curve cap 与 active Accent outline 保留。
- **延期**：Auto Hide、Focus Mode、Card Layout、正式Preset System（当前Card分支无Preset runtime）、Advanced Rainbow Folder、Canvas/Graph、Advanced Animation、Seamless Embed、Companion Plugin；不引入 JS/runtime/DOM patch。未来规划来源与执行合同见 [Design Spec](THEME_DESIGN_SPEC.md)、[Matrix](FUSION_FEATURE_MATRIX.md)、[Source Analysis](SOURCE_THEME_ANALYSIS.md)、[P3.1 plan](P3_1_WORKSPACE_FUSION_PLAN.md)。旧矩阵/计划过程状态以 CURRENT_STATUS checkpoint 和 TASKS 为准，旧阶段过程记录不代表当前未授权状态。
- **验证**：P4.1.5 npm run check第二次PASS（首次CRLF freshness），git diff --check PASS，最终root/installed artifact hash一致、implementation无变化。Desktop整体FAIL；RESET-01阻塞，不能以自动检查替代运行时验收。
- **兼容 / 发布**：当前Card分支仅四项正式设置，失败Preset selector/runtime已在f25隔离；旧实验历史保留，不是正式Preset System。Accent文本输入workaround保留；发布命名/署名待确认。

- **Focus contract**：CSS only，based on native `.workspace-leaf.mod-active`，no runtime behavior；不用 body.is-focused，无 content opacity/blur/animation/geometry 变化。[DOM evidence](P3_2C_FOCUS_DOM_EVIDENCE.md) f31119b 支持 main leaf/header chain。
- **Phase 3.2 limits**：header 隐藏时无额外cue；community custom views/pop-out/全平台兼容不作整体认证；无 WCAG/screen-reader audit claim。历史 QA pending 是过程记录，当前以 checkpoint ALL PASS 为准。complete 不表示已合并 main。

- **Reading contract**：Decision 012 有效、011 superseded；既有 `--theme-reading-width → --file-line-width` 足够，Reading / Live Preview / Source 保留 native width behavior。Phase 2 typography/spacing 足够；Source native rhythm difference 已接受，caret/keyboard 优先。不得创建 reading-width/reading-spacing CSS、Reading Boundary/Focus enhancement；只有新的可复现且 public variable/token 无法表达的真实 gap 才重开 implementation review。embed/community contexts 未认证。证据：[Width DOM](P3_3A_READING_DOM_EVIDENCE.md)、[Rhythm Audit](P3_3B_READING_RHYTHM_AUDIT.md)。

- **P4.1.5 blocker RESET-01**：Style Settings1.0.9 / Obsidian1.14.4，Writer+saved500点击Content Width Reset，保存键变700而非删除；computed/native width700而非640。Dark两次、Light插件View的原生Home→Right(500)→Tab Reset→Enter均复现；帮助文案承诺不成立。源码clearSetting的delete不能替代runtime证据；P4.1.5当时根因未定；P4.1.6已通过实际1.14.4 setter/debounce与离线重放确认删除后写回机制，详见新报告；未作新architecture decision。
- **P4.1.5 PASS边界**：维护者测试前正确预测优先级/Default/Reset；A-D、saved=700优先级、真实进程重启Writer+500、插件off回700且无stale class/on恢复Writer+500、Light/Dark同模式保护变量、三种Markdown视图和P2/P3 smoke通过。不是完整新手研究/全平台/全插件认证。
- **P4.1.5 recovery**：独立Vault与备份保留本地；日常五项配置hash不变，测试配置恢复，原Vault重新打开。npmcheck第二次PASS（首次仅CRLF freshness），最终CSS字节恢复且implementation无diff；diff-check通过。详细证据以CURRENT_STATUS最新checkpoint为准；上方旧Phase3 handoff的“暂不开始P4”等为历史阶段范围。

- **P4.1.6 confirmed mechanism**：Slider Reset先setValue(metadata default700)，实际1.14.4 setter在值变化时触发onChange；插件250ms trailing callback在clearSetting删除后setSetting700。旧机制研究“删除即稳定回退”缺少SDK callback/timer证据，已在新报告纠正；原UX Contract不擅自降级。
- **Options / next authority**：A二次Reset/全主题Reset不等于可靠单项Reset；B无合法metadata hook；C数值文本存在pending-input写回，select有旧数值/px兼容成本，均未实施或Desktop认证；旧调查提出的D Documentation-only已于本轮获用户确认并记录Decision013；不继续C/修复循环，不改Typography/Reading或宣布PASS。
- **P4.1.6 validation**：离线五断言/四场景PASS；独立副本npmcheck第二次PASS，repo implementation/theme/metadata完全不变，diff-check PASS。原QA历史保留，按本轮授权核实远端后正常推送两次文档提交；最终hash/远端以git为准。

- **产品决策边界**：不要将旧“Style Settings assisted / Proceed to prototype”当成当前验收成功；也不要将实验 FAIL 写成所有 Theme-first preset 不可行。Documentation-only方向已正式确认，Decision013有效；历史UX/QA报告保留，实验代码后续分支/发布处置未授权，不在本轮删除或改写。
- **后续候选**：shell-level Card Layout独立P4.2a evidence已执行，Needs more research；Focus Enhancement / Auto Hide / Effects继续Defer，没有下一实现授权。
- **Closeout validation**：npm run check / diff-check PASS；src/settings/theme/scripts/manifest 及历史 evidence 与14c5bc9不变，无文件删除；本轮未操作 Vault或重跑Desktop。正常 commit/push，不创建PR或合并。

- **P4.2a evidence**：[Card Shell](P4_2_CARD_SHELL_EVIDENCE.md)。Source/LP/Reading、左右/上下nested、ordinary hidden/stacked、native header hidden与core Graph完成真实只读采样；优先研究main非stacked原生组下leaf直属leaf-content，避开divider sibling。inactive不是hidden；stacked两个leaf均非零尺寸，首个候选应排除stacked。
- **Card contract**：无需新token/geometry；现有gap4px/Radius/surface/border足够表达语义。圆角会影响native overflow-hidden裁切，物理border会消耗内部空间，背景可被opaque children盖住；边界绘制仍未验证，因此Needs more research。Focus保持Decision010 header-only Accent/neutral，Card只提出neutral shell；不能补造header隐藏cue。
- **Notebook Navigator**：后续重点社区兼容样本；独立Vault未安装/未测，版本与布局N/A；官方source667ece2/source manifest3.4.3不是已安装版本。公开nn-theme变量和host/内部双栏scroll边界已静态审查，不实施映射、不安装插件、不写Desktop PASS、不扩大Card范围。
- **P4.2a validation/recovery**：独立副本npmcheck第二次PASS、diff-check PASS；src/settings/theme/scripts不变，五份docs同一checkpoint。header开关恢复并读取show-view-header=true，关闭隔离Vault/DevTools后备份配置hash恢复一致。无PR/main合并/Prototype；commit/hash/push以Git最终核对为准。

- **P4.2b最新证据**：[Boundary Spike](P4_2B_CARD_BOUNDARY_SPIKE.md)。A1/A2 offset -1px neutral outline为可信薄框候选；A0 edge clipping，B1/B2 inset被children遮盖不推荐。17非baseline精确geometry比较全部相同，native gap/overflow/scroll owner保持；真实A2 divider resize成功。Radius0/8/20 single geometry保持，20px实际有曲线但角部clip/overlay未全认证，不新增overflow。
- **P4.2b状态/交互**：A2真实ordinary→stacked→ordinary，stacked outline/radius完全退出，横滚329→79，恢复无stale；header隐藏neutral frame仍在，恢复show-view-header/display flex，Focus既有限制保留。Source/LP selection/Reading scroll/pane与tab切换/Graph pan smoke无明显副作用。Dark样本，不是完整QA；Notebook Navigator仍NOT TESTED，Light/community/pop-out/RTL/DPI等待后续。
- **P4.2b disposition/recovery**：建议Proceed to bounded prototype，尚未实施/批准，不新增DECISION。下一步Chat审定ordinary main direct leaf-content + outline/existing radius + stacked off-state范围，之后才能做真实NN host兼容。临时snippet删除，测试窗口关闭后配置及笔记hash恢复一致，repo/installed theme hash不变；npmcheck独立副本第二次PASS（首次freshness），diff-check PASS，四份docs checkpoint正常commit/push，无PR/main合并。

- **P4.2c current contract**：exact spike envelope、ordinary main direct leaf-content、neutral outline1px/offset-1px/existing radius；stacked完全退出。Focus/Layout/View Header/build script字节不变，无新token/setting/geometry/runtime。Build/Check/diff-check及静态section比较PASS。历史“无Card prototype/仍有Preset runtime”仅描述旧checkpoint，以当前Card分支为准。
- **Evidence preservation**：Decision013未变，Preset失败报告/Desktop QA/RESET-01/closeout及P4.2a/b保留；不重开修复。Card Desktop风险：Light/Dark/极值radius/角部clip/stacked往返/resize/scroll/caret/community/pop-out等待验收。
