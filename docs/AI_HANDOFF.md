# AI Handoff

- **项目 / 愿景**：个人长期使用的模块化 Obsidian CSS Theme，结合 Composer 的读写体验方向与 Border 的可配置工作区/布局思路；独立设计，不拼接整份主题。`Obsidian Fusion Theme` 是 Working Title。
- **当前阶段**：P3.1c-2 Status Bar 源码完成，Desktop QA pending；Tabs / Sidebar / Ribbon Desktop QA PASS（Ribbon 按本轮维护者报告）。
- **分支 / 基线**：`codex/p3-1-workspace-fusion`，main `fbc971d8d034906d1bfd911df5d86e3688cffeaf`；PR #10 已 squash merged，本地与远程 main 已更新。
- **规划入口**：[Design Spec](THEME_DESIGN_SPEC.md) 定义产品合同；[Feature Matrix](FUSION_FEATURE_MATRIX.md) 定义候选来源/优先级/状态；[Source Analysis](SOURCE_THEME_ANALYSIS.md) 定义上游 README 证据与 Fusion 解读。来源未完成固定 revision 的代码级分析，不声称已验证 selector 兼容性。
- **P3.1a refinement**：普通 Tabs default/active/hover surface、close hover/pressed/focus-visible、gap-derived density、title ellipsis 与 icon/close 不 shrink；无新 token/设置，native DOM/visibility 不变。
- **本轮改动**：仅 statusbar.css，保留 background/divider/text 映射，radius 使用既有 workspace alias，column-gap 与直属 mod-clickable hover shell；Build theme.css。无 token/settings/runtime，提交后 push，无 PR。
- **已完成基线**：V0.1 Foundation、P2.1 audit、P2.2 Typography、P2.3 Links/Tags/Highlight、P2.4 Code/Quote/Table、P2.5 Callout、P2.6 Navigation/File Explorer；P2.7 integrated Desktop Exit Verification PASS，Phase 2 exit gate satisfied。详见 [Final QA](PHASE2_REGRESSION_TEST.md)。
- **ISSUE-01**：Live Preview ordinary quote-tag foreground fix verified，commit `0068eabc4a8177c8b26afdd8ab72579eafd80fc1`；normal/hover 两条 foreground-only selectors，消费既有 Tag variables。已进入 main，不重做修复。
- **P3.1 范围**：Tabs/Sidebar/Ribbon PASS，现实现 Status Bar shell；View header 保持不变。保留 scrollbar 与 P2.6 Navigation；token 模块已实现，header 尚未创建；body-scoped aliases 沿用 Build 顺序。Full Auto Hide、Focus、Card Layout、Presets、Animations、Rainbow folders、Canvas/Graph、Companion Plugin 均延期。
- **未来模块**：Workspace、Layout、Focus System、Reading Enhancement、Presets、Effects 都仍是未获实现批准、未实现的规划候选。Auto Hide / Card Layout / Focus / Presets 的历史 deferral 不因列入规划而自动解除；Canvas/Graph、Advanced Rainbow Folder、Advanced Animation、Seamless Embed、Companion Plugin 继续 deferred。
- **立即下一步**：Status Bar Chat review / Desktop QA；Core/plugin items、clickable hover/click、长内容/多项/窄窗、editor 底部与 split panes。保持 native sizing/anchoring，不继续 View header。
- **架构合同**：Token-first，Style Settings → `--theme-*` semantic tokens → Obsidian public variables → 有证据才用 scoped selectors。P2.1 无新 global Tokens；新增 token 必须有独立可复用语义与实际消费者。纯 CSS + 可选 Style Settings，不引入 JS runtime / framework / DOM patch。
- **源码与 Build**：编辑 `src/**/*.css` / `settings/**/*.css`，生成 theme.css；metadata-first、base → workspace → editor → navigation → components → layout → effects → apps。本轮只编辑 statusbar.css 源码并 Build。
- **native behavior**：保留用户字体、Source caret / keyboard / 每个真实空行、selection、rename、folding 与 resizing。P2.2 Source normalization 已撤回，勿重加。接受原生 unresolved-link / syntax palette / table controls 差异；Callout semantic colors 与 yellow Highlight 独立于 Accent，Navigation guide/chevrons 保持中性。
- **现有设置 / workaround**：仅 Accent、Radius、Content Width、Line Height 四项。Accent 使用 `variable-text` 规避 Style Settings 1.0.9 / Pickr `null.clone`；未经 Desktop 复测不恢复 picker。Slider thumb 中性，Checkbox 无独立测试入口 N/A；不扩大 QA claim。
- **验证**：Status Bar Build / Check / diff-check PASS；无 token/settings，非 Status Bar source/generated sections 与 baseline `22e47efb06e6e3451807ad71a1d6990297e440fd` 字节不变；Desktop QA 未运行。此前 Ribbon PASS 为维护者报告。
- **发布前事项**：最终名称与维护者署名待确认；README 状态段仍是旧 Foundation/Phase 2 规划描述，当前阶段维护规划文档，当前执行状态以 CURRENT_STATUS / TASKS / 本文件为准。

- **Desktop QA correction**：仅 tabs.css / generated theme.css；curve/inner radius cap at existing space-sm、ordinary root scope、active header indicator + Accent outline。Light/Dark x three Accents、Radius 0/20、close/long title/keyboard/split/stacked/narrow 与 Phase 2 smoke PASS；native independent Tab/close focus N/A。四份临时笔记 hash 已还原并清理，原笔记/设置/stacked/window 已恢复。最终 root == installed SHA `EAE47A40D0C00E36409421779C3A84540DD7DD78702447FCE862F277484EA0C0`。
