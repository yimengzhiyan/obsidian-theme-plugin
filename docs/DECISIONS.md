# Architecture Decisions

## Decision 001 — Theme + Style Settings

采用 **Obsidian Theme + 可选 Style Settings**，而不是优先开发 Community Plugin。当前需求可以由 CSS 和 Design Token 完成，不引入 TypeScript、Plugin API、DOM patch 或复杂 JavaScript runtime。

## Decision 002 — Semantic Design Token

以 `--theme-*` Semantic Design Token 作为视觉系统基础，再映射到 Obsidian 公共 CSS 变量。组件优先消费语义变量，避免散落硬编码颜色。

## Decision 003 — Modular source and generated artifact

长期维护 `src/*` 模块，通过 Build 生成根目录 `theme.css`。禁止把生成后的巨型单文件作为主要源码直接维护。Build 顺序固定为 `base → workspace → editor → navigation → components → layout → effects → apps`，Style Settings 元数据先于这些模块输出。

## Decision 004 — Reference, not wholesale copying

Composer、Border 等主题仅作为设计、selector 和实现思路参考，不直接复制完整 CSS、Build System 或目录结构。未来如果实际复用 MIT 授权代码，必须保留对应许可证文本和 attribution，并记录来源及复用范围。

## Decision 005 — Current metadata formats

Theme manifest 使用 Obsidian 当前要求的 `name`、`author`、`version`、`minAppVersion` 字段。Style Settings 使用其插件解析的 `/* @settings ... */` YAML 注释，并通过变量型设置覆盖 `--theme-*` Token。

参考：

- [Obsidian Manifest documentation](https://docs.obsidian.md/Reference/Manifest)
- [Official Obsidian sample theme](https://github.com/obsidianmd/obsidian-sample-theme)
- [Style Settings documentation](https://github.com/mgmeyers/obsidian-style-settings)

当前 Working Title 保留在本地 manifest 中，但其名称不满足 Obsidian 社区目录关于不得包含 “Obsidian” 或 “Theme” 的规则；发布命名是后续明确决策，不在 Bootstrap 内擅自决定。

## Decision 006 — Prefer documented Obsidian variables

Foundation 层优先把 Theme Semantic Token 映射到 Obsidian 当前公开的 CSS Variables；只有官方变量不能表达必要状态时，才使用范围受限的 selector。这样可以减少对 DOM 结构和 class 细节的依赖。

当前映射依据包括官方的 Colors、Typography、Radiuses、Tabs、Navigation、Ribbon、Status Bar、Scrollbar、File、Link 和 Code 变量文档。未加入已标记废弃的 RGB/HSL 派生变量；Accent 派生色使用 `color-mix(in oklch, ...)`。

- [Obsidian CSS variables reference](https://docs.obsidian.md/Reference/CSS%20variables/CSS%20variables)
- [Obsidian Colors reference](https://docs.obsidian.md/Reference/CSS%20variables/Foundations/Colors)

## Decision 007 — Style Settings color compatibility workaround

Accent 继续直接覆盖 `--theme-accent`，但暂时使用 `variable-text` 接收 hex 或其他 CSS color 值，不使用 `variable-color` 的颜色选择器。原因是 Style Settings 1.0.9 在 Obsidian 1.13.1 上存在已确认的 Pickr `null.clone` 兼容问题；官方最小复现使用合法的 `variable-color`、`format: hex` 和带引号的 hex 默认值仍会报错。

这是主题侧的最小兼容措施，不改变 Token 链路，也不增加设置。上游问题修复并经真实 Desktop 验证后，可以重新评估恢复颜色选择器。

用于确认问题归属的最小复现如下；将它单独作为 Obsidian CSS snippet 加载即可，不依赖本主题：

```css
/* @settings
name: Variable color reproduction
id: variable-color-reproduction
settings:
  -
    id: accent-color
    title: Accent color
    type: variable-color
    format: hex
    default: '#ff0000'
*/
```

- [Style Settings Issue #216](https://github.com/community-archive/obsidian-style-settings/issues/216)

## Decision 008 — Phase 2 remains token-first

Phase 2 必须建立在已经合并的 V0.1 Foundation 上。新增视觉能力时，先判断是否需要扩展 Semantic Token，再优先映射到 Obsidian public CSS variables；只有公共变量无法表达必要状态时，才使用范围受限的 selector。

不允许在多个组件中复制散落的 hardcoded color。Component-specific token 只有在存在明确、可复用的组件语义时才增加，避免提前制造庞大 Token 系统。Auto Hide、Card Layout、Focus Mode、Advanced Rainbow Folder、Canvas、Graph、Advanced Animation、Preset System、Seamless Embed 和 Companion Plugin 继续 deferred。

本决策只确定 Phase 2 的实现顺序与边界，不预先确定具体颜色值或最终 UI 设计。

## Decision 009 — Workspace geometry aliases at consumer scope

P3.1 首个 milestone 添加 body-scoped `--theme-workspace-control-radius` / `--theme-workspace-control-gap`，派生自既有 Radius / xs spacing。Tabs radius、active radius、curve 与普通 tab gap/padding 是实际消费者；不创建完整 workspace token 家族或设置。

Aliases 与公共消费者变量同在 body，保留 body Radius 覆盖；不使用 :root 提前计算 aliases，不改 Build 顺序/脚本。Phase 2 与既有 Accent 状态规则不变。后续复用须 Chat review，本决定不授权 Sidebar/Ribbon 实现。Desktop/browser QA pending。

## Decision 010 — Native active leaf boundary only

P3.2c-1 基于已同步的 Focus DOM evidence：pane signal 是 `.workspace-leaf.mod-active`，而非 body.is-focused、tab-group active 或 header 自有状态。仅 main root leaf 直属公共 header 的既有 1px border：active Accent，inactive neutral border。Inactive shell 相对退强调，内容/标题/控件不降 opacity 或文字对比，不修改几何，不创建行为。

复用现有 Accent/border，无 focus token/setting/runtime。窗口失焦仍保留 active pane；native header 隐藏时不强制 cue。Markdown/Core Graph shell 有真实证据，任意 community view/pop-out 兼容待 QA。Build/Check/diff-check PASS；Focus Desktop QA pending。

## Decision 011 — Reading width contract and build extension (SUPERSEDED by Decision 012)

**Historical / no longer effective.** Its scoped selectors and reading Build group are withdrawn by Decision 012; retain this entry only for traceability.

P3.3a 使用实际 DOM evidence 的两个主 Markdown 直属 sizer chain。复用现有 `--theme-reading-width → --file-line-width` 与 Content Width；仅 max-width / margin-inline:auto，Reading/LP都要求原生 readable-line-width开关，LP额外 is-live-preview 排除 Source。不给 cm-content 叠加宽度，不改现有 renderer/typography/spacing；不新增token。

原生宽度已实测正常，因此这是一份明确局部合同，而非强制改变默认宽度或声称修复。源码放 src/reading；Build在所有既有groups末尾注册reading，保留旧groups相对顺序与输出内容，metadata仍优先。只有构建期现有脚本最小变更，无JavaScript runtime/dependency/DOM行为。旧AGENTS的base→…→apps顺序继续保留为完整前缀，reading为新增末尾扩展。Desktop QA pending。

## Decision 012 — Preserve native Reading Width contract (supersedes Decision 011)

P3.3a Reading Width evidence / architecture review COMPLETE；无需新增 CSS implementation。DOM evidence 证明 Foundation 既有 `--theme-reading-width → --file-line-width` 已完整表达 Content Width，Obsidian native Reading / Live Preview / Source 都消费它；原生 readable-line-width 开关、居中与窄 pane响应正常，不存在 selector gap。

撤回 Decision 011 的两条冗余 high-specificity selectors及src/reading Build group，删除对应source并Build清除生成section，恢复原metadata/base→workspace→editor→navigation→components→layout→effects→apps组合同。52d06ea 保留在历史，用新 corrective commit，不rewrite/force-push。

不新增token/settings/其他Reading CSS，不改Typography/Content Width。保留 DOM evidence；embed/community contexts未认证。未来只有真实public-variable gap证据才能重新review scoped exception；Reading Spacing不属本任务。Decision 011不再是有效实施方向。

## Decision 013 — End assisted Preset experiment; Documentation-only direction

2026-10-17：用户正式确认结束 P4.1 Style Settings assisted Preset 路线；不再进入 RESET-01 修复、换控件或重试循环。后续 Preset 仅保留 Documentation-only 推荐配置方向。这不表示立即需要编写 recipes，也不自动批准任何新的实现任务。

P4.1 Prototype 是失败实验：Desktop Acceptance FAIL、RESET-01 root cause CONFIRMED、promotion blocked。保留 implementation f50040a、QA 7d89f34、调查14c5bc9与closeout694ff8c及原有报告；不改写历史结论，不删除实验代码/证据，不将收尾写为验收成功，也不推论所有 Theme-first preset 都不可行。当前任务不改变已有 theme/settings artifact；保留实验的后续分支/发布处置须另行授权。

P4.2 shell-level Card Layout 是独立候选，不继承 Preset Prototype 的 class-select、状态或实现；本次仅 P4.2a Evidence / Design Review。没有 Card CSS、兼容 CSS、Prototype、PR、main 合并或 release acceptance 授权。Phase 2/3、Reading Decision012和Focus Decision010保持有效。

## Decision 014 — Accept bounded neutral main-workspace Card shell

P4.2 bounded Card shell **COMPLETE / accepted for integration**，依据维护者本轮正式产品决定、P4.2c implementation review PASS 与 P4.2d Desktop QA review PASS。[P4.2a DOM evidence](P4_2_CARD_SHELL_EVIDENCE.md) → [P4.2b A2 painter spike](P4_2B_CARD_BOUNDARY_SPIKE.md)（71363e7）→ [P4.2c implementation](P4_2C_CARD_SHELL_PROTOTYPE.md)（935c8ed5b3cc24e74ad90c0134eb20e7f02b0bfe）→ [P4.2d Desktop acceptance PASS](P4_2D_CARD_SHELL_DESKTOP_QA.md)（99b7845a66990664d82eef9a75a151968ce67b10）构成证据链。

Exact accepted contract:

```css
.workspace-split.mod-root
  .workspace-tabs:not(.mod-stacked):not(.workspace-leaf-content *)
  > .workspace-tab-container
  > .workspace-leaf
  > .workspace-leaf-content {
  outline: 1px solid var(--theme-border);
  outline-offset: -1px;
  border-radius: var(--theme-workspace-control-radius);
}
```

仅 ordinary main direct host 的 neutral inward outline 和 existing workspace radius；stacked groups intentional exclusion，无 fallback。No new token/setting、zero geometry/overflow change、no JS/runtime；无Sidebar Card、Markdown/content或plugin-internal cardification。Focus active header Accent / inactive neutral完全不变，outer Card始终neutral；header-hidden没有新增active cue。

Desktop测试范围包括Light/Dark、Markdown Source/Live Preview/Reading、Core Graph、Radius0/8/20、split/nested/narrow、stacked off-state。Notebook Navigator3.4.3 Sidebar/main-host compatibility PASS，仅测试范围；无需compatibility CSS。NN drag/drop **UNVERIFIED**；Radius20为bounded覆盖，native现有overflow下角部曲率不等于全部overlay/selection位置认证。Pop-outs / RTL / other DPI/platforms / 全插件 / accessibility与screen-reader未认证；既有Phase2/3 N/A保留。

**Accept bounded Card shell ≠ accept full Card Layout system.** Floating panels、content cards、stacked cards、layout engine不获批准；Focus Enhancement / Auto Hide / Effects继续Defer。Preset继续Decision013 Documentation-only；失败实验只保留历史证据，活动runtime已在f25a03e隔离。Decision013不变。Accepted for integration不等于已合并main或正式发布。

## Log

### P3.1a — Tabs implementation refinement

按本轮 Chat review 后指令细化 Fusion Tab Shell，保留 Foundation state/indicator rules。普通（非 stacked）Tabs 的 inner 用既有 primary / hover / active surfaces 和 workspace radius；gap 派生横纵 padding / column gap，未设固定宽高或 density setting。title 使用 min-width:0 + ellipsis/nowrap，icon/close 不 shrink；关闭按钮增加 muted/hover/pressed/focus-visible 反馈，不改 native visibility、事件或 DOM。

没有新增 token，workspace-tokens 延续首个 milestone 的两项 aliases；没有复制 Border CSS、添加设置、runtime 或后续模块。只从 source Build theme.css。Build / Check / diff-check PASS，Phase 2 与其他生成 sections baseline 比较不变。Desktop QA 尚未执行；重点风险是实际 tab flex/title inheritance、vertical padding/curve clipping、close keyboard focusability 与窄窗 stacked/split-pane regression。记录不代表新架构方向或 QA PASS。

### P3.1a — Desktop geometry and state cascade correction

真实 Desktop QA 证实 Radius 20 的原生 curve 伪元素及 inner overflow 会裁切标题/close；curve 与 inner radius 以已有 space-sm 为上限，public outer/active Radius 联动保留。普通 refinement selectors 限 mod-root，防止 Sidebar header 被附带细化。

原生 active outline specificity 覆盖 Foundation inset indicator。增加 ordinary root active selector，组合已有 indicator 与原生 outline width；仅 active header 的 outline color 映射既有 theme-border-active，container 保持中性。无新 Token/Setting/运行时，Phase 2 合同不变。六种 Light/Dark x red/blue/green 与窄窗/keyboard retest PASS。独立 Tab/close tabindex=-1 为原生 N/A，不添加 DOM/ARIA/focus hacks。详见 P3_1A_TABS_DESKTOP_QA.md；final implementation review 仍独立。

### P3.1b — Sidebar shell boundary

基于已验证 Tabs 修复 62789ef，扩展既有 sidebar.css，不重建或删除原七项 Foundation navigation 映射。追加左右 split 直属 workspace-tabs 的 secondary background / gap，以及直属 tab-header-container 的 primary background / gap-derived horizontal padding / neutral inset divider。没有修改 File Explorer/tree/Search/Backlinks/plugin internals、字体/颜色继承、content padding、尺寸/overflow/定位、resize handle 或 editor selectors。

divider 使用内阴影而非新增 border width，避免改变 header/resize 几何。全部消费现有 tokens，无 Sidebar token 或 workspace contract 扩展；Tabs QA fixes / P2.6 源码与其他生成 sections 保持字节不变。Build / Check / diff-check PASS；Desktop QA pending，需实测 native DOM 层级、row-gap 是否由布局消费、header 狭窄控件裁切及拖拽/scroll。无新的整体架构决策，无 push / PR。

### P3.1c-1 — Ribbon shell implementation record

只扩展既有 ribbon.css。expanded background 消费 secondary；collapsed primary 与 icon/hover/active 合同保留。左右 inset divider 不加宽 Ribbon，标准 action shell 复用 workspace gap/radius，无新增 token/settings 或整体架构变化。command/plugin buttons 保持事件、顺序、可见性、icon/SVG 和 native 尺寸；未增加 plugin-specific selector。

Build / Check / diff-check PASS，非 Ribbon source/generated sections baseline 比较字节不变；Desktop QA 尚未运行。Sidebar PASS 依据本轮维护者报告。提交后 push 为持续授权，不创建 PR，不实现后续模块。

### P3.1c-2 — Status Bar shell compatibility record

保留 native background/divider/text 合同；radius 仅改为等价 workspace alias。原 divider border-color 已消费 theme-border，不追加第二条 separator 或覆盖 border width，避免改变 native 几何。Status Bar root column-gap 派生 workspace gap；仅直属标准 item 圆角与 mod-clickable hover shell，无 plugin-specific/内部节点/定位/尺寸/可见性修改。

无新架构方向、token/settings/runtime。Build / Check / diff-check PASS，非 Status Bar source/generated sections 字节不变。Desktop QA pending：多/长状态项、窄窗、plugin hover、editor 底部遮挡与 native wrap/scroll 尚需实测。Ribbon PASS 依据维护者报告；提交后 push，无 PR。

### P3.1 — Final milestone close (2026-10-13)

Workspace Fusion COMPLETE，完成范围为 Workspace Tokens、Tabs、Sidebar、Ribbon、Status Bar。Tabs/Sidebar/Ribbon/Status Bar Desktop QA ALL PASS，最终结论依据维护者 checkpoint 指令；Tabs 的独立键盘 focus N/A、未执行 drag/reorder/screen-reader audit 与既有 Phase 2 N/A 继续保留，不扩大验证范围。

记录代码链：Tabs fix 62789ef → Sidebar c69bdcf → Ribbon 22e47ef → Status Bar 3953aab。仅文档 closeout，无新增源码/token/settings/架构方向。View header 不包含在本次完成范围；下一阶段 pending architecture review，其他 deferred features 未实现。历史 implementation/QA pending 条目是过程记录，以 CURRENT_STATUS final checkpoint 为当前状态；尚未宣称 P3.1 已合并 main。

### P3.2a — Public View Header scope

最新 scoped instruction 授权 P3.2a。独立 workspace/view-header.css，root 限 main workspace leaf-content 直属 view-header；不匹配 Sidebar/Tabs、editor contents 或 plugin internals。不用全局 file-header variables：只在 header scope 设置官方 border/weight，减少对其他 header 的传播；现有 primary 背景匹配 native title fade，不修改其伪元素/path/breadcrumb。

共享 gap/radius 复用，action radius cap 沿用既有 space-sm 控制极值；native action dimensions/visibility/events 不改，disabled shell 不覆盖。无新 tokens/settings/JS/DOM/定位机制。Build 排序自动收集新增模块，不改脚本，所有既有生成 sections 字节不变。Build / Check / diff-check PASS；Desktop QA pending，详见 CURRENT_STATUS。

### P3.2b-1 — Layout token audit and native split boundary

现有 workspace-control-gap（Foundation xs）和 border 足够，无新 layout semantics/token/settings。新增 layout/layout.css 只给 main root/native nested horizontal/vertical splits 统一 gap；nested selector 排除 leaf-content 内部，divider-color 保持既有 neutral contract。无全局 workspace-leaf 几何规则，不设 pane ratio/direction/margin/radius/dimensions 或 divider hit-area 宽度。

这是 native split spacing foundation，不是 Layout Engine/Card system。原生 flex、resize 与持久化继续由 Obsidian 控制。Build / Check / diff-check PASS，全部原 source/generated sections 字节不变。Desktop QA pending，需验证 gap 对 native sizing/resize offsets、nested/stacked/窄窗与 editor regression 的影响。P3.2a PASS 依据维护者本轮报告。

### Phase 3.2 — Final documentation close

Phase 3.2 COMPLETE；View Header 0a60fa0 / Layout Foundation 3cf65ad / Focus Foundation 7827734 全部 complete / Desktop QA PASS，最终结论由维护者 checkpoint 指令提供。历史 pending 为过程记录，不补造测试环境/hash/log，不改变既有代码或架构。

Focus System 明确 CSS only、based on native `.workspace-leaf.mod-active`、no runtime behavior。header hidden 无额外cue、community views/pop-out/全平台以及 WCAG/screen-reader audit 不作扩大认证；既有 N/A 保留。无新 token/settings/source，下一阶段 pending architecture review；本轮文档 commit/push，不创建 PR或合并。

### Phase 3.3 — Final Reading review close (2026-10-14)

Phase 3.3 COMPLETE。P3.3a Width evidence / architecture review 与 P3.3b Rhythm audit（A=5、B=3、C=0）均 NO NEW CSS REQUIRED；这不是新增 Reading 模块。Decision 012 仍是有效 Width decision，011 保留为已撤回历史。

既有 `--theme-reading-width → --file-line-width` 与 Phase 2 typography/spacing 足够；Reading / Live Preview / Source 保留 native width behavior。Source native visual rhythm difference 是已接受产品决策，优先 caret/keyboard navigation。不得创建 src/reading、reading-width.css、reading-spacing.css、Reading Boundary 或 Reading Focus enhancement。只有新的、可复现且现有 public variable/token 无法表达的真实 gap 才重开独立 implementation review；embed/community contexts 未认证。

本轮仅 documentation checkpoint / integration validation，不改源码、token 或 Style Setting，不开始 P4。Width DOM evidence 与 Rhythm audit 原文保留，Desktop/平台/插件认证范围不扩大。
