# P3.3a-0 Reading DOM Evidence

# Environment

- 采集日期：2026-10-13（Asia/Shanghai）。
- Obsidian 1.14.4 / Installer 1.10.6（原生 About 界面核对）。
- Windows 25H2 / 26200.8737；Style Settings 1.0.9。
- 分支：`codex/p3-1-workspace-fusion`；采集基线：`7827734ba95c837bf45b9516616142d408149da9`。
- 已安装 Obsidian Fusion Theme，Dark；无启用的 CSS snippets。唯一启用的社区插件为 Style Settings。
- 同一 Markdown 文件：已有 `Typography QA P2.2.md`。原生堆叠组中另有 `P2.3 Existing Target`。
- 主要数值在同一 1068.5px leaf 宽度下读取。窗口截图曾为 2560 × 1439 和 2560 × 1384，纵向尺寸不同；表格比较的是相同 leaf 横向宽度。
- 使用原生独立 DevTools Console，执行一次性 DOM 属性 / `getComputedStyle` 查询；未改写 DOM、CSS、主题、token、笔记或 Canvas。
- 用户明确授权临时切换 Readable line length 与 Content Width，结束后恢复原值。此文档不是 Reading Width 实现或 Desktop QA PASS 认证。

# Reading View

## DOM hierarchy

实际可见 Reading 分支，所有下列节点均为 `DIV`：

```text
.workspace-leaf.mod-active
└─ .workspace-leaf-content[data-type="markdown"][data-mode="preview"]
   └─ .view-content
      └─ .markdown-reading-view
         └─ .markdown-preview-view.markdown-rendered…
            └─ .markdown-preview-sizer.markdown-preview-section
               ├─ .markdown-preview-pusher
               └─ 原生 Markdown 渲染块（本采集不读取正文）
```

实际承载限宽的是直属 `.markdown-preview-sizer`；外层 preview view 承担左右 padding。不是 leaf、view header 或整个 view-content 的宽度。

同一 `.view-content` 还保留 `.markdown-source-view` 及 CodeMirror 子树；Reading 时该 source-view 的 computed `display: none`。隐藏子树仍能被 querySelector 匹配，不能把其宽度当作可见编辑区测量结果。

## Classes/data attributes

完整已采集 wrapper 属性见文末“Wrapper 属性记录”。Reading 可见分支的 `data-*` 仅在 leaf-content 出现：

- `data-type="markdown"`
- `data-mode="preview"`

leaf、view-content、reading-view、preview-view、preview-sizer 均未观察到 data 属性。开启原生行长限制时，`is-readable-line-width` 位于 preview-view 上，不在 preview-sizer 或 leaf-content 上。

## Computed styles

500/700 对照表见 Content Width。Reading 可见容器：

- leaf-content / view-content / reading-view / preview-view 的 width 均为 1068.5px。
- reading-view：display flex；preview-view：display block。
- preview-view：max-width none，margin-left/right 0px，padding-left/right 32px。
- preview-sizer：display block，padding-left/right 0px。
- Reading 时隐藏的 CodeMirror 容器有 auto / 百分比等 computed 值，未用于可见布局结论。

# Live Preview

## DOM hierarchy

同一文件切换至 Live Preview，所有下列节点均为 `DIV`：

```text
.workspace-leaf.mod-active
└─ .workspace-leaf-content[data-type="markdown"][data-mode="source"]
   └─ .view-content
      └─ .markdown-source-view.cm-s-obsidian.mod-cm6….is-live-preview
         └─ .cm-editor
            └─ .cm-scroller
               └─ .cm-sizer
                  ├─ .inline-title
                  └─ .cm-contentContainer
                     └─ .cm-content.cm-lineWrapping[data-language="hypermd"]
```

cm-editor 另含 cm-announced；cm-scroller 另有 cursor/selection layer。它们不是 reading width 消费者。标题和内容共享 cm-sizer 的宽度。

## Classes/data attributes

- leaf-content：`data-type="markdown"`、`data-mode="source"`。
- source-view 有 `is-live-preview`；开启行长限制时还有 `is-readable-line-width`。
- cm-content：`data-language="hypermd"`。
- 中间 wrapper 未观察到 data 属性；其完整 class 见文末。
- CodeMirror 生成类如 `ͼ1` / `ͼ2` 已记录，不能视为稳定设计 selector。

Reading 与 Live Preview **共用 leaf-content / view-content shell，但不共用实际内容容器**。Live Preview 可见 source-view 的 display flex；reading-view 此时 display none。不能用 reading-view 来控制 Live Preview。

## Computed styles

开启限制时：

- source-view / cm-editor / cm-scroller 的 width 为 1068.5px。
- cm-scroller：padding-left/right 32px，margin-left/right 0px，max-width none。
- cm-sizer：display flex，padding-left/right 0px；宽度及居中 margin 见下表。
- cm-contentContainer、inline-title、cm-content 的 width 随 cm-sizer 为 500px 或 700px。
- cm-content 的 max-width 也随设置为 500px / 700px，不应重复新增相互竞争的限宽规则。

# Readable Line Length

原生设置的当前中文名称为 **“限制行宽”**，位置在 Editor 设置。初始为 enabled。

## enabled

- preview-view 与 source-view 都有 `is-readable-line-width`。
- Reading preview-sizer / Live Preview cm-sizer 及 cm-content 消费当前限宽。
- 700 状态：width/max-width 700px，sizer 的左右 margin 为 146.25px。
- leaf-content 的 data-mode 由视图模式决定，开关不改变其值。
- `--theme-reading-width` / `--file-line-width` 的 computed 值均为 700px。

## disabled

- preview-view 与 source-view 同时移除 `is-readable-line-width`；未观察到新增或改变的 data 属性。
- Reading preview-sizer：width 992.5px，max-width none，margin-left/right 0px，padding-left/right 0px。
- Live Preview cm-sizer / cm-content：width 992.5px，max-width none，margin-left/right 0px，padding-left/right 0px。
- 外层 preview-view / cm-scroller 仍有左右 32px padding。
- `--theme-reading-width` / `--file-line-width` **仍为 700px**，开关没有清除变量；是否限宽由原生 class 控制。
- shell 宽度 1068.5px 与实际可用内容宽度 992.5px 不相同。本采集未单独测量滚动条等剩余空间组成，不据差值猜测额外 padding。

# Content Width

以下均为原生限制行宽 **enabled**、相同 1068.5px leaf 下的 getComputedStyle 实读值，单位 px。ML/MR 为左右 margin，PL/PR 为左右 padding。

| State | 容器 | width | max-width | ML | MR | PL | PR |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 500 | Reading preview-sizer | 500 | 500 | 246.25 | 246.25 | 0 | 0 |
| 700 | Reading preview-sizer | 700 | 700 | 146.25 | 146.25 | 0 | 0 |
| 500 | Live Preview cm-sizer | 500 | 500 | 246.25 | 246.25 | 0 | 0 |
| 700 | Live Preview cm-sizer | 700 | 700 | 146.25 | 146.25 | 0 | 0 |
| 500 | Live Preview cm-content | 500 | 500 | 0 | 0 | 0 | 0 |
| 700 | Live Preview cm-content | 700 | 700 | 0 | 0 | 0 | 0 |

## 500

Style Settings 中 Content Width 为 500；各 wrapper computed `--theme-reading-width` 与 `--file-line-width` 为 500px。Reading 与 Live Preview 均遵循原生限宽。

## 700

Style Settings 原生 slider Value 确认为 700；对应变量为 700px。Reading 与 Live Preview 的 sizer 同步扩大，shell 宽度保持不变。

另有原生普通窗口的实际采样：leaf-content 300px，Reading preview-sizer / Live Preview cm-sizer / cm-content width 224px、max-width 700px、margin/padding 0px。说明 max-width 是上限，受可用 pane 宽度约束，不应实现固定 width:700px。

# Source Mode Boundary

通过原生命令 **“切换实时预览/源码模式”** 切换同一 Markdown 文件；实际源码标记显示后读取：

```text
DIV.workspace-leaf-content[data-type="markdown"][data-mode="source"]
└─ DIV.view-content
   └─ DIV.markdown-source-view.cm-s-obsidian.mod-cm6.node-insert-event
      .is-folding.show-properties.is-readable-line-width
      └─ DIV.cm-editor
         └─ DIV.cm-scroller
            └─ DIV.cm-sizer
               └─ DIV.cm-contentContainer
                  └─ DIV.cm-content.cm-lineWrapping[data-language="hypermd"]
```

- Source 与 Live Preview 共享 leaf-content、data-mode="source"、CodeMirror wrapper 和 cm-content。
- Source 的 source-view **没有 is-live-preview**。这是本次观察到的模式区分。
- Source 自身也有原生 is-readable-line-width。开启限制、Content Width 700 时，cm-sizer width/max-width 700px，margin-left/right 146.25px。
- 因此“Source 不限宽”不符合当前 runtime；现有全局公开变量已被 Source 消费。
- **建议新的 Reading Enhancement 局部规则排除 Source，保留已有原生限宽及 Phase 2 caret/导航合同**。这是由共享容器风险得出的设计边界建议，不是改写已有设置。
- 单用 [data-mode="source"]、.markdown-source-view、.cm-sizer 或 .cm-content 无法排除 Source；Live Preview 需明确加入 .is-live-preview。

# Plugin / Embed Boundary

## Graph

通过原生 Ctrl+G 打开已有 core Graph：

```text
DIV.workspace-leaf.mod-active
└─ DIV.workspace-leaf-content[data-type="graph"]
   ├─ DIV.view-header
   └─ DIV.view-content
      ├─ CANVAS（无 class）
      ├─ IFRAME（无 class）
      └─ DIV.graph-controls
```

data-mode absent。该 leaf-content 内实际查询 markdown-preview-view 数量 **0**，markdown-source-view 数量 **0**。Graph 共用 shell，不共用阅读容器；不要对其 view-content 加阅读限宽。

## Canvas

打开已有空白 `未命名.canvas`，未加入节点或编辑内容：

```text
DIV.workspace-leaf.mod-active
└─ DIV.workspace-leaf-content[data-type="canvas"]
   ├─ DIV.view-header
   └─ DIV.view-content
      └─ DIV.canvas-wrapper.node-insert-event
```

data-mode absent。preview-view / source-view 数量均 **0**。这只验证当前空白 Canvas shell，不证明有 Markdown 卡片时的内部结构；不得为卡片内部推测 selector。

## Embed / community view

- Markdown embed：**N/A**。现有测试 Markdown 中没有 wiki embed 语法；未创建笔记或加入 embed。未建立 embed 内部 DOM selector 证据。
- 社区插件主视图：**N/A**。唯一启用的社区插件 Style Settings 没有主工作区文档 view，未安装其他插件。
- 对尚未采集的 embed、Canvas Markdown 卡片、hover preview 或社区渲染器，不声称共用或不共用内部 Markdown classes。
- 推荐使用下述 **直属完整链**，避免普通 descendant selector 递归匹配未来出现的嵌入阅读容器。不要以泛化 .markdown-rendered / .markdown-preview-view 覆盖所有渲染上下文。

# Findings

## 1. Reading Width 推荐 selector

先保留已实测的 `--theme-reading-width → --file-line-width` 消费链和 Obsidian 原生开关。若下一阶段确有公共变量不能表达的局部需求，以下是本版本证据支持的匹配范围，**未添加 CSS**：

Reading：

```css
.workspace-split.mod-root .workspace-leaf
> .workspace-leaf-content[data-type="markdown"][data-mode="preview"]
> .view-content
> .markdown-reading-view
> .markdown-preview-view.is-readable-line-width
> .markdown-preview-sizer
```

Live Preview（如果后续明确授权其属于 Reading Enhancement 范围）：

```css
.workspace-split.mod-root .workspace-leaf
> .workspace-leaf-content[data-type="markdown"][data-mode="source"]
> .view-content
> .markdown-source-view.is-live-preview.is-readable-line-width
> .cm-editor
> .cm-scroller
> .cm-sizer
```

这些链匹配实际 wrapper；不建议再给各后代重复设固定宽度。mod-active 是当前选择状态，阅读限宽不应随 pane activation 开关，因此候选 selector 不依赖它。

## 2. 必须避免匹配的 selector

- 全局 .workspace-leaf、.workspace-leaf-content 或 .view-content：会命中 Graph / Canvas / 其他 shell。
- 全局 .markdown-rendered / .markdown-preview-view / .markdown-preview-sizer：无法表达主文档和嵌入边界。
- 仅 [data-type="markdown"]：Reading、Live Preview、Source 都共享。
- 仅 [data-mode="source"]、.markdown-source-view、.cm-sizer / .cm-content：会命中 Source。
- 不检查 is-readable-line-width 的强制 max-width：会覆盖用户关闭原生限制的选择。
- CodeMirror 生成类、文件名、内联几何样式、隐藏 wrapper 的宽度：不能作为稳定模式 selector。
- body.is-focused、leaf mod-active、header state：不属于 Reading 模式或限宽开关信号。

# Collection / Validation / Restoration

- 只读查询枚举 tagName / className / data-* 与 width、max-width、margin-left/right、padding-left/right、display、两个 width 变量。不读取 DOM 正文，不注册监听器，不注入样式或持久 helper。
- DevTools / UI Automation 有延迟：首次结果仍是上一模式时继续等待，并核对完成结果的 data-mode、is-live-preview、display。未将隐藏 source-view 的 0px/auto 值当作 Live Preview 可见值。
- Console 的两类查询：一类沿主 leaf 的实际 wrapper 读取属性与 computed style；一类精确读取 active leaf 直属 leaf-content 的 shell 子节点，并计数该 leaf 内 preview/source 容器。未使用 firstElementChild 猜测 leaf-content（叶子另有原生 resize 子节点）。
- 桌面锁定期间停止 UI 输入，解锁后继续；被其他应用遮挡的截图不作为 Obsidian 视觉证据。
- `npm run check`：PASS，运行于 tracked working files 的隔离副本。该命令会 rebuild，因此未在原仓库执行，以遵守不修改 theme 的限制。
- `git diff --check`：提交前核对。
- 仓库与安装 theme.css 的 SHA256 在采集前后均为 `1637DE6141E683DF4970A1A273C519961FEB1BFFBC85045D624B40C84DDC5294`。
- 已退出 Obsidian 后恢复原 workspace / appearance / app / Style Settings 配置。Content Width 恢复 500，Readable line length 恢复 enabled（原 app.json 为 {}，使用原生默认值）。
- 八个既有 Markdown 哈希一致；空白 Canvas 哈希保持 `44136FA355B3678A1146AD16F7E8649E94FB4FC21FE77E8310C060F61CAAFF8A`。
- 此提交只包含本 evidence 文档。已有 CURRENT_STATUS 未提交 QA 记录保持不变且不纳入本提交。
- 兼容边界限本机版本/主题/设置；不是其他平台、任意插件、嵌入或 CSS 修改后的证明。

# Wrapper 属性记录

以下完整 class/data 记录从实际查询结果整理；tag 均为 DIV。Class 顺序不是合同。只记录通往内容容器的 wrapper，不展开笔记正文。


## Reading 500

| 深度 | 完整 class | data-* | computed display |
| --- | --- | --- | --- |
| 0 | `workspace-leaf mod-active` | `{}` | flex |
| 1 | `workspace-leaf-content` | `{"data-type":"markdown","data-mode":"preview"}` | flex |
| 2 | `view-content` | `{}` | block |
| 3 | `markdown-source-view cm-s-obsidian mod-cm6 node-insert-event is-readable-line-width is-live-preview is-folding show-properties` | `{}` | none |
| 4 | `cm-editor ͼ1 ͼ2` | `{}` | flex |
| 5 | `cm-scroller` | `{}` | flex |
| 6 | `cm-sizer` | `{}` | flex |
| 7 | `cm-contentContainer` | `{}` | flex |
| 3 | `markdown-reading-view` | `{}` | flex |
| 4 | `markdown-preview-view markdown-rendered node-insert-event is-readable-line-width allow-fold-headings allow-fold-lists show-indentation-guide show-properties` | `{}` | block |
| 5 | `markdown-preview-sizer markdown-preview-section` | `{}` | block |

## Live Preview 500

| 深度 | 完整 class | data-* | computed display |
| --- | --- | --- | --- |
| 0 | `workspace-leaf mod-active` | `{}` | flex |
| 1 | `workspace-leaf-content` | `{"data-type":"markdown","data-mode":"source"}` | flex |
| 2 | `view-content` | `{}` | block |
| 3 | `markdown-source-view cm-s-obsidian mod-cm6 node-insert-event is-readable-line-width is-live-preview is-folding show-properties` | `{}` | flex |
| 4 | `cm-editor ͼ1 ͼ2` | `{}` | flex |
| 5 | `cm-scroller` | `{}` | flex |
| 6 | `cm-sizer` | `{}` | flex |
| 7 | `inline-title` | `{}` | block |
| 7 | `cm-contentContainer` | `{}` | flex |
| 8 | `cm-content cm-lineWrapping` | `{"data-language":"hypermd"}` | block |
| 3 | `markdown-reading-view` | `{}` | none |
| 4 | `markdown-preview-view markdown-rendered node-insert-event is-readable-line-width allow-fold-headings allow-fold-lists show-indentation-guide show-properties` | `{}` | block |
| 5 | `markdown-preview-sizer markdown-preview-section` | `{}` | block |

## Source 700

| 深度 | 完整 class | data-* | computed display |
| --- | --- | --- | --- |
| 0 | `workspace-leaf mod-active` | `{}` | flex |
| 1 | `workspace-leaf-content` | `{"data-type":"markdown","data-mode":"source"}` | flex |
| 2 | `view-content` | `{}` | block |
| 3 | `markdown-source-view cm-s-obsidian mod-cm6 node-insert-event is-folding show-properties is-readable-line-width` | `{}` | flex |
| 4 | `cm-editor ͼ1 ͼ2` | `{}` | flex |
| 5 | `cm-scroller` | `{}` | flex |
| 6 | `cm-sizer` | `{}` | flex |
| 7 | `inline-title` | `{}` | block |
| 7 | `cm-contentContainer` | `{}` | flex |
| 8 | `cm-content cm-lineWrapping` | `{"data-language":"hypermd"}` | block |
| 3 | `markdown-reading-view` | `{}` | none |
| 4 | `markdown-preview-view markdown-rendered node-insert-event allow-fold-headings allow-fold-lists show-indentation-guide show-properties is-readable-line-width` | `{}` | block |
| 5 | `markdown-preview-sizer markdown-preview-section` | `{}` | block |

## 可复现只读查询

主文档 wrapper / computed style 查询（枚举两个模式的现存容器，须检查可见祖先）：

```js
JSON.stringify((()=>{let r=[];let w=(e,d)=>{let s=getComputedStyle(e);r.push({d,tag:e.tagName,c:e.className,data:Object.fromEntries([...e.attributes].filter(a=>a.name.startsWith('data-')).map(a=>[a.name,a.value])),css:Object.fromEntries(['width','max-width','margin-left','margin-right','padding-left','padding-right','display','--file-line-width','--theme-reading-width'].map(k=>[k,s.getPropertyValue(k)]))});if(d<8)[...e.children].filter(x=>/workspace-leaf-content|view-content|markdown-|cm-|inline-title/.test(x.className)).forEach(x=>w(x,d+1))};document.querySelectorAll('.workspace-split.mod-root .workspace-leaf.mod-active').forEach(e=>w(e,0));return r})())
```

Graph / Canvas 直属 shell 与 Markdown 容器计数（data 字段为 dataset，type 对应 data-type）：

```js
JSON.stringify([...document.querySelectorAll('.workspace-split.mod-root .workspace-leaf.mod-active > .workspace-leaf-content')].map(e=>({d:0,tag:e.tagName,c:e.className,data:{...e.dataset},children:[...e.children].map(x=>({tag:x.tagName,c:x.className,children:[...x.children].map(y=>({tag:y.tagName,c:y.className}))})),reading:e.querySelectorAll('.markdown-preview-view').length,editor:e.querySelectorAll('.markdown-source-view').length})))
```
