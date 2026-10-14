# P3.3b Reading Rhythm / Spacing Gap Audit

# Environment

- 日期：2026-10-14（Asia/Shanghai）；真实 Obsidian Desktop 执行。
- Obsidian **1.14.4** / Installer **1.10.6**：原生 About 界面确认。
- Windows **25H2 / 26200.8737**：本机版本注册表确认；Style Settings **1.0.9**：安装 manifest 确认。
- Branch：`codex/p3-1-workspace-fusion`；audit baseline：`865dcfda7b84ddb37606b3868808949e5d6bd692`。
- Fusion Theme；原生字体大小 16、空字体覆盖、Radius 20、Accent #dc2626、无启用 CSS snippets。唯一社区插件为 Style Settings。
- Readable line length 保持原生开启。仅临时切换已存在的 Line Height / Content Width 和 Light/Dark；结束后恢复原设置。
- 主要窗口截图约 **1707 × 1067**；先单 pane，后原生左右 split 至三个 pane。较窄 pane 约 **450px**，可见内容约 **375px**（截图近似值，非 computed-style 测量）。
- 没有修改 CSS、theme、token、设置定义、Typography、margin 或特殊块规则。没有 Reading Boundary / Focus Enhancement 实现。

# Existing Contract

已核对 `src/base/typography.css` 和 `src/base/variables.css`：

```css
--heading-spacing: var(--theme-space-lg);
--p-spacing: var(--theme-space-sm);
/* existing token values */
--theme-space-lg: 1.5rem;
--theme-space-sm: 0.5rem;
--line-height-normal: var(--theme-line-height);
--file-line-width: var(--theme-reading-width);
```

P2.2 已有三条 **Live Preview-only** 规则：普通真实空行使用 sm；heading 前空行使用 lg；连续 headings 间空行回退 sm。特殊 HyperMD 块排除在普通空行 normalization 之外；Source 不匹配这些 normalization selectors。

这些是本次核对的源码声明，**不冒充本轮 getComputedStyle 数值**。本轮未采集新的 DOM/computed margin 全量快照，也不从截图反推 CSS margin。没有 C 类问题，因此没有为新增 selector 搜集候选实现。

既有证据 / 决策：

- [Typography Test](TYPOGRAPHY_TEST.md)：P2.2 Final Exit PASS，撤回 Source normalization 以保留 caret / blank-line navigation。
- [Reading DOM Evidence](P3_3A_READING_DOM_EVIDENCE.md)：Reading / LP / Source 的真实容器及原生 width 消费链。
- DECISIONS Decision 012：P3.3a evidence / architecture review COMPLETE；原生 theme-reading-width → file-line-width 已足够，不追加 width CSS。
- Source 的视觉节奏可不同于 Reading，是已接受产品决策，不能重新作为 parity blocker。

# Test Document / Scenarios

使用独立临时笔记 **P3.3b Rhythm Audit TEMP 20261014.md**；未修改既有 QA 笔记。

- UTF-8 / LF；8 个连续章节，581 个 split lines、17,573 个字符。
- 第一章覆盖全部过渡；后续章节重复同一组场景，加 Chapter 2–8 长标题。
- 中文、英文、中英混排、长段落、长标题；嵌套列表、两段 Blockquote、3 行 JavaScript code、两段 Note Callout、3 行 Table。
- Source 前置两条真实空行，末尾 sentinel `RHYTHM_AUDIT_LAST_LINE`。
- 创建 SHA256：`BCF960CDD03B2DC94DB268F66A123748D654D4FBDE89BC1185C0F69B1C4878F8`；Source smoke 后再次一致，清理前核对。

过渡清单：

1. paragraph → paragraph。
2. paragraph → H1 / H2 / H3。
3. heading → paragraph。
4. H2 → H3 → H4。
5. paragraph ↔ list / blockquote / code / callout / table。
6. wrapped paragraph、wrapped long heading、章节结束 → 下一章节。
7. 第八章末尾 Reading 和 Source 长文导航。

第一章可复现内容见文末。追加 Chapter 2–8 标题后，重复第一章从 Paragraph A 起的正文；最后添加 sentinel。首部双空行仅用于 Source smoke，不用它要求 Reading/LP 的多空行折叠行为一致。

# Reading View Findings

| 场景 | 实际观察 | 分类 |
| --- | --- | --- |
| 相邻普通段落 | 中文、英文、混排均能识别为独立段落；长段落的内部行距与块间停顿区分清楚。没有旧的过大段落空洞重现。 | A |
| paragraph → H1/H2/H3 | 标题前停顿足以引入新层级；长标题换行后仍与前段分开。没有粘连或额外空白页式断裂。 | A |
| heading → paragraph | 正文属于其标题，未被过大间距拆成无关内容；H1、H2、H3 均观察。 | A |
| 连续 H2/H3/H4 | 层级可读，连续标题聚为一组，没有重复完整 section spacing 把它们分散。 | A |
| paragraph ↔ list | 前导/后续正文与列表分开，nested item 仍属于其列表。未发现误用普通段落间距破坏列表分组。 | A |
| paragraph ↔ blockquote | 引用有原生独立表面/边界，前后正文不混入引用；两段内容仍属于同一引用。 | A |
| paragraph ↔ code | Code 表面和前后停顿清楚；没有代码块与正文重叠或重复空白。 | A |
| paragraph ↔ callout | title/content 保持同一语义块，前后正文独立，换行后亦清楚。 | A |
| paragraph ↔ table | 500/700 和窄 pane 下单元格换行增加行高，但表格前后正文仍分离。 | A |
| 连续长文 | 第一章及后续章节过渡正常；通过长文末尾再切 Reading，最后一章的 Callout/Table/末尾 sentinel 分组仍正常。 | A |

观察到的距离并非每个对象完全相等；本 audit 判断的是密度、分组和理解是否受损，而非人为统一所有 block 的几何。没有因为“还能更漂亮”创建 gap。

# Live Preview Findings

同一文档通过原生 Ctrl+E 切换；第一章 ordinary paragraphs、heading transitions、连续 headings 和特殊块前后都实测。

- 普通单空行段落仍有清楚停顿；未重现 P2.2 旧的约 64px/40px 异常节奏问题。此处不是新的精确像素比值测量。
- heading 前停顿及连续 headings 聚合仍合理；未发现 P2.2 已修复问题的可复现 UX regression。
- 特殊块前后关系保留。可编辑 code 的语言标签/行结构、Blockquote 的显式空行及编辑渲染细节，使内部高度/余白可能与 Reading 不完全一样。
- 部分英文段落的 wrapping 与 Reading 不逐字逐行一致；段落意义和 block 分离保持。
- 窄 pane 下 Code / Callout / Table 后的正文仍明确，Table cells 继续原生换行。
- 因此：ordinary/heading/外部 block grouping 为 **A**；不妨碍理解的编辑渲染差异为 **B**。不宣称 Reading/LP pixel parity，也不建议追加“统一” margin selectors。

# Source Smoke

Light、Line Height 2.0、Width 700，在较窄的第三个 pane 执行。原生命令 **“切换实时预览/源码模式”**；原始 Markdown syntax 可见。

| 操作 | 实际验证 |
| --- | --- |
| caret | 点击 Source 编辑区，Ctrl+Home 到首行；Down 后空行 caret 可见。 |
| 第一真实空行 | Down 进入第 2 行，输入 x，再 Backspace；字符出现在 P3R_SOURCE_A 与 P3R_SOURCE_B 之间第一条空行。 |
| 第二真实空行 | 再 Down 到第 3 行，输入 x，再 Backspace；字符确实位于第二条空行，没有跳到 B。 |
| Up | 从第 3 行返回第 2 行，caret 回到上一个真实空行。 |
| Enter / Backspace | 在第 2 行 Enter 增加一条真实空行，B 下移；Backspace 删除新增空行并恢复。 |
| 长文滚动 | Ctrl+End 到第八章末尾，sentinel 与末尾 caret 区域可见；切 Reading 后同一长文末尾仍正常。 |
| 恢复 | 两次 x 和新增空行均用原生 Backspace 撤销；最终 fixture SHA 与创建 SHA 一致。 |

首次字符测试遇到 IME composition，已 Escape 取消，切英文直接输入后重新验证；取消的 composition 不作为已写入字符证据。结束恢复原 IME 模式。

Source 的 blank-line 高度、Markdown syntax、raw table presentation 与 Reading 不同是 **B**；本轮没有改变 Source spacing。导航/可编辑性 smoke 通过是 A 的保护合同证据，绝非 Source rhythm parity PASS。

# Line Height / Width / Narrow Pane

## 参数矩阵

四组均在 **Dark** 实际切换既有 Style Settings slider，读取了 native Value；每组均查看 Reading 和 Live Preview 的 ordinary、heading、连续 headings、特殊块前后关系。

| Line Height | Content Width | Reading | Live Preview | 结论 |
| --- | --- | --- | --- | --- |
| 2.0 | 500 | inspected | inspected | A；局部编辑差异 B |
| 1.5 | 500 | inspected | inspected | A；局部编辑差异 B |
| 1.5 | 700 | inspected | inspected | A；局部编辑差异 B |
| 2.0 | 700 | inspected | inspected | A；局部编辑差异 B |

Line Height 改变正文高度、Content Width 改变行数，是设置本身应有的效果。标题独立行高与 body 行高不同也符合既有 Typography 合同；没有自动归入 gap。未重新评估或实现 Reading Width。

## Narrow pane

Light / 2.0 / 700：从单 pane 通过原生左右 split 创建三个约 450px pane；第三个可见内容约 375px。上述尺寸是截图估计，不是 computed width。

- Reading 的 Paragraph A/B/C、长 H1 多行 wrapping 后，block separation 仍清楚。
- Live Preview 的长段落、H3 及连续 H2/H3/H4、嵌套列表亦可区分。
- Code、Callout、Table 及其前后正文有独立位置；Table cells 增高后不吞并后续段落或章节标题。
- 多 pane 各自滚动，另两个 Reading pane 保持原位置；无 spacing-specific overlap。
- 没有测试任意极端窗口下所有内容都无需滚动；native responsive/layout 限制不作为新节奏问题。

## Light / Dark smoke

Dark 完成全矩阵；Light 在 2.0/700 完成 Reading 的 ordinary/headings/special blocks，以及窄 pane Reading/LP smoke。Light/Dark 没有观察到结构性 spacing 差异。

本任务不声称全平台、全字体或完整无障碍认证，也没有重新做 Phase 2 的所有独立组件功能测试。

# Gap Classification

## A — Existing Contract Sufficient

- **A1 Ordinary / wrapped paragraphs**：段落间关系清楚，既有 p-spacing 与 LP 普通空行合同足够。
- **A2 Paragraph / heading / following content**：层级引入与内容归属正常，既有 heading-spacing 与标题行高合同足够。
- **A3 Consecutive headings**：没有重复 section spacing，LP 既有 sm 回退保持分组。
- **A4 Special-block outer grouping**：List、Quote、Code、Callout、Table 前后无需新增统一 spacing selector；现有 Phase 2/native 行为满足当前场景。
- **A5 Parameter / narrow / mode stability**：1.5/2.0 × 500/700 与 Light/Dark smoke 未暴露新的 rhythm gap；Source 导航保护保持。

## B — Accepted Native Differences

- **B1 Editable rendering**：LP code language label、特殊 HyperMD 行/空行、部分 wrapping 与 Reading 的高度/余白不逐像素一致；均仍能理解语义分组。
- **B2 Source decision**：Source 原生真实空行、syntax/raw table 和视觉距离与 Reading 不同；这是已接受产品决策，不能重新作为 blocker。
- **B3 Content-driven height**：长标题、长段落、Table cell 在不同 width/line-height 下增加行数/块高度；用户设置效果和 native wrapping 不是新增 spacing gap。

B 不意味着每个差异均相同程度或已做定量测量；只记录本轮实际观察且不损害阅读/编辑理解的差异。

## C — Actionable Gaps

**EMPTY — 0 actionable gaps。**

没有一个观察满足全部 C 条件：可复现 UX 影响、非旧问题/Source parity/个人审美，以及既有 public variable/token 无法表达。因此没有提出新 selector scope，也没有构造未测试的 DOM/computed-style 根因。

# Architecture Conclusion

**NO NEW CSS REQUIRED**

P3.3b 以 evidence / architecture conclusion 完成。当前长文场景没有证明 Phase 2 spacing contract 之外的真实 public-variable gap。

- 保持现有 Typography / heading / paragraph / List / Quote / Code / Callout / Table 合同。
- 不创建 reading-spacing.css，不追加 token / Style Setting，也不实施 Reading Boundary / Focus Enhancement。
- 将来只有新场景通过全部 C gate，才进入单独 Chat Design Review；本报告不授权后续实现。
- 结论限本次版本、fixture、字体与参数范围，不等于所有可能 Markdown/插件/平台场景都不存在 gap。

# Validation / Restoration

- `npm run check`：**PASS**，在当前 tracked working files 的隔离副本运行，重建 20 个 source files。
- `git diff --check`：提交前执行；暂存差异亦检查。
- 原仓库与 installed theme.css SHA256 采集前后均为 `1637DE6141E683DF4970A1A273C519961FEB1BFFBC85045D624B40C84DDC5294`。
- src / settings / scripts / theme.css 不修改；没有 build cache、fixture 或用户环境配置进入提交。
- Source edits 原生撤销后 fixture SHA 精确恢复，再仅删除该已验证临时文件；八个既有 QA 笔记 hashes 无 mismatch。
- 退出 Obsidian 后恢复 workspace.json / appearance.json / app.json / Style Settings 数据，再打开原 workspace。原 Dark、Line Height 2、Width 500、两叶 stacked 状态恢复。
- Audit 与本次最小 CURRENT_STATUS 更新属于提交；此前未提交的 Desktop QA 执行记录保留，不混入本次提交。

# Reproducible Fixture

第一章内容如下。Source smoke 的两条真实空行保留；其余过渡均使用正常 Markdown 单空行。重复正文至八章，不加入 HTML spacer 或 CSS。


````markdown
P3R_SOURCE_A


P3R_SOURCE_B

Paragraph A — 这是中文普通段落，用于观察相邻段落之间的分组与停顿。这里没有额外 HTML，也没有人工空格制造视觉距离。

Paragraph B — This ordinary English paragraph checks whether adjacent paragraphs remain separate without becoming isolated. The meaning should flow naturally across the block boundary.

Paragraph C — 中英混排 mixed language reading keeps the same semantic spacing. 这是一段较长的正文，用于观察换行之后的阅读节奏。The line may wrap several times at width 500 or inside a narrow pane, but its following block must still be identifiable. 内容宽度变化只改变换行，不应该被误判为新的 spacing 缺陷。

# H1 — 第一层级 Long Mixed Heading for Continuous Reading Environment Audit

H1 后的正文。This paragraph belongs to the heading directly above, and should not look like a detached section.

段落到 H2 的过渡。Paragraph before the next heading.

## H2 — 第二层级 Heading / Paragraph Group

H2 后的正文。The hierarchy must remain visible while the paragraph stays connected with its heading.

段落到 H3 的过渡。Paragraph before H3.

### H3 — 第三层级 Heading / Paragraph Group

H3 后的正文，检查标题与内容之间的关系。

## H2 Consecutive — 连续标题

### H3 Consecutive — 连续标题

#### H4 Consecutive — 连续标题

连续标题之后的正文。No extra spacer or invisible decoration is added.

列表之前的正文。Paragraph before list.

- List item one — 中文条目
- List item two — English item
  - Nested mixed item — 层级仍应清楚
- List item three

列表之后的正文。Paragraph after list, before blockquote.

> 引用内容第一段。Quoted English text.
>
> 引用内容第二段。A second quoted paragraph keeps its native internal spacing.

引用之后的正文。Paragraph after quote, before code.

```js
const rhythm = "native-contract";
const line = 2;
console.log(rhythm, line);
```

代码之后的正文。Paragraph after code, before callout.

> [!note] Callout — 中英混排标题
> 第一段 callout content，保持原生内部节奏。
>
> 第二段 English callout paragraph remains part of the same semantic block.

Callout 之后的正文。Paragraph after callout, before table.

| 中文列 | English column | Mixed 长内容 |
| --- | --- | --- |
| 第一行 | Row one | 这段单元格文字会在较窄的阅读区域中换行，检查表格与前后正文的关系。 |
| 第二行 | Row two | Narrow pane wrapping should not erase surrounding block separation. |
| 第三行 | Row three | Native table layout remains unchanged. |

表格之后的正文。Paragraph after table closes this chapter and introduces the next section.


````
