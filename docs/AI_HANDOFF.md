# AI Handoff

- **项目**：个人长期使用的模块化 Obsidian CSS Theme，融合 Composer 读写体验与 Border workspace 思路，独立实现；Working Title 尚未定稿。
- **当前阶段**：Phase 3.2 COMPLETE：View Header / Layout Foundation / Focus Foundation 全部 complete，Desktop QA ALL PASS（维护者 final checkpoint 报告）。Phase 2/P3.1 COMPLETE。
- **分支**：`codex/p3-1-workspace-fusion`；main baseline `fbc971d8d034906d1bfd911df5d86e3688cffeaf`，PR #10 已 squash merged。P3.1 完成不表示已合并 main；使用 git 获取实际 remote 状态。
- **实现提交**：Tokens/Tabs 初始 `144e5e3`；Tabs verified QA fix `62789ef45bda6167eea7ae672eae3596aca9205d`；Sidebar `c69bdcf23cc1f756c9a03faee959518a48b98345`；Ribbon `22e47efb06e6e3451807ad71a1d6990297e440fd`；Status Bar `3953aabe934f5cc35a13ff6ae4273231c546c031`。Checkpoint hash 用 `git rev-parse HEAD` 获取。
- **QA 来源**：[Tabs Desktop report](P3_1A_TABS_DESKTOP_QA.md) 为详细证据；Sidebar/Ribbon/Status Bar final PASS 由维护者 checkpoint 指令报告，不补造环境/hash/逐项数据。历史 pending 记录不再是当前待办。
- **Remaining N/A / limits**：native Tab/close tabindex=-1，独立 sequential focus N/A，close focus-visible 不声称独立验证；Tabs drag/reorder、screen-reader audit 未执行。P2.6 drag/drop、Foundation Checkbox 既有 N/A 不重开。不声称全部插件或平台认证。
- **立即下一步**：下一阶段 pending architecture review，确定 bounded scope、native evidence、token/selector 路线与 QA gate 后才另行授权实现；本轮只文档 checkpoint commit/push，不创建 PR或合并。
- **本轮范围**：仅 CURRENT_STATUS / AI_HANDOFF / TASKS / DECISIONS 四份文档；源码、theme.css、settings 不变，无新 token。Phase 3.2 commits：View Header `0a60fa0985c5c7dc3fb6e1951535b5d19fe171ae`；Layout `3cf65addc96a3356eee91861ae485db19b6fd97b`；Focus `7827734ba95c837bf45b9516616142d408149da9`。
- **Token contract**：仅既有 Foundation + 两项 body-scoped workspace geometry aliases；Style Settings → semantic tokens → Obsidian public variables → 有证据才 scoped selectors；无新 palette/设置，workspace Build 顺序不变。
- **已保留合同**：Phase 2 selectors/contracts、native Source caret/真实空行 navigation、用户字体、Callout semantic colors 与 yellow Highlight、P2.6 hierarchy/wrapping；ISSUE-01 fix `0068eab` 已验证合并，不重做。Tabs QA 的 mod-root scope、curve cap 与 active Accent outline 保留。
- **延期**：Auto Hide、Focus Mode、Card Layout、Presets、Advanced Rainbow Folder、Canvas/Graph、Advanced Animation、Seamless Embed、Companion Plugin；不引入 JS/runtime/DOM patch。未来规划来源与执行合同见 [Design Spec](THEME_DESIGN_SPEC.md)、[Matrix](FUSION_FEATURE_MATRIX.md)、[Source Analysis](SOURCE_THEME_ANALYSIS.md)、[P3.1 plan](P3_1_WORKSPACE_FUSION_PLAN.md)。旧矩阵/计划过程状态以 CURRENT_STATUS checkpoint 和 TASKS 为准，旧阶段过程记录不代表当前未授权状态。
- **验证**：既有 Build / Check / diff-check PASS；本 checkpoint Check / diff-check PASS，无实施文件变化。三项 Desktop PASS 为维护者最终结论；未重新测试或补造测试日志。
- **兼容 / 发布**：仍只有 Accent、Radius、Content Width、Line Height 四项设置；Accent variable-text workaround 保留。最终名称/署名待确认；README 的旧阶段描述未在本轮 scope 修改。

- **Focus contract**：CSS only，based on native `.workspace-leaf.mod-active`，no runtime behavior；不用 body.is-focused，无 content opacity/blur/animation/geometry 变化。[DOM evidence](P3_2C_FOCUS_DOM_EVIDENCE.md) f31119b 支持 main leaf/header chain。
- **Phase 3.2 limits**：header 隐藏时无额外cue；community custom views/pop-out/全平台兼容不作整体认证；无 WCAG/screen-reader audit claim。历史 QA pending 是过程记录，当前以 checkpoint ALL PASS 为准。complete 不表示已合并 main。
