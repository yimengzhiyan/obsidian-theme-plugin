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
