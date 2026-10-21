# AI Handoff

- **Current**：Phase5A+5B implemented / integrated QA pending；W02/F01/F02/E01/E02/R01/R02。No Desktop PASS。
- **Branch**：codex/p5-feature-completion from main4cb19c4c90a870cbcab3fc145c204d25a2b5266d；后续5B默认同分支，commit/hash从git获取。
- **Mode**：maintainer改为batched feature completion → integrated Desktop QA → concentrated fixes；不再逐视觉feature跑gate循环。真正runtime/DOM不可表达或稳定合同冲突才停对应子功能。
- **5A**：ordinary pane inactive title dim；header actions default dim/active muted、hover/focus/active reveal；ordinary close、Ribbon actions、Status items soft reveal；Sidebar直属header chrome，内容不dim。workspace-effects含scoped transition/press/reduced-motion。active-line模块窄CM6普通行state fallback，Accent6%，特殊HyperMD排除。两项chrome opacity tokens .55/.72；四项settings不变。
- **Preserve**：Card Decision014 source/neutral shell/stacked exclusion、既有Focus header边界、Phase2 typography/caret/public width、Decision013 Preset Documentation-only。无JS/DOM patch/plugin/geometry autohide、editor text opacity或Preset runtime。
- **Validation**：Build/Check/diff-check和静态合同比较PASS；真实视觉/keyboard/reveal/active-line state和selection layering等待集成QA。不声称浏览器/Desktop通过。
- **Next**：Phase5A+5B Mid-cycle Integrated Desktop QA，需后续任务；本轮未启动QA/PR/merge。
- **Limits**：未对Sidebar内容内部/插件controls增加selector，inactive tab titles保留既有颜色清晰度；旧NN拖拽/Radius20/header-hidden/pop-out/RTL/platform/accessibility限制仍有效。无新正式Decision。

- **5B**：20body-scoped typography controls；legacy defaults保持。public mapping及三条LP空行消费新spacingtokens，selector完全不变。reading-writing.css含Reading main section paragraphs/LP普通行(indent/letter/word)、headings、code/math reset、opt-in fusion-cjk-autospace、pretty/balance。所有CM消费者要求is-live-preview，Source/width不新增selector。Inline Title/native-equivalent CJK断行跳过。
- **5B validation**：Build/Check/diff-check PASS；check脚本适配新映射并检查默认值，build/settings/5A/Card/Decision013/014保持。P3.3 C=0是无corrective rhythm需求，本次为可配置能力/渐进polish。实际DOM/非零值/selection/caret/浏览器支持等待mid-cycleQA。
