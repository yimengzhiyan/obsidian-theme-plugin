# Obsidian Fusion Theme

> Working Title：`Obsidian Fusion Theme`，不是最终正式名称。

这是一个面向 Obsidian 的模块化主题项目，目标是逐步建立可维护、可配置的 Design System，而不是拼接现有主题。项目采用纯 CSS 主题 + 可选 Style Settings 插件的技术路线，不是 Obsidian Community Plugin。

## 当前状态

**Phase 5 已完成并合并至 `main`（PR #13）；尚未发布正式版本。** 当前项目已有 Foundation、Phase 2–3 的核心外观/工作区基础，以及 Phase 5 的 35 项 Style Settings 控件与 PKM/Focus/排版增强。下一阶段 Phase 6 的具体实施仍需从候选清单中确认批次。

新接手者请先阅读 [项目总规划与接手指南](docs/PROJECT_MASTER_PLAN.md)。该文档汇总最终目标、架构边界、功能全集、完成状态、未完成项、关键决策和 Chat/CLI 协作规则；具体当前状态仍以 Git、最新 QA 和 `docs/CURRENT_STATUS.md` 为准。

## 安装

将以下两个文件复制到 Vault 的 `.obsidian/themes/Obsidian Fusion Theme/`：

- `manifest.json`
- `theme.css`

重启 Obsidian，在“设置 → 外观 → 主题”中选择本主题。主题目录名应与 manifest 的 `name` 一致。

## 开发与构建

要求 Node.js 18 或更高版本。

```bash
npm install
npm run build
npm run check
```

修改 `src/` 或 `settings/` 下的源码，然后执行 Build。`theme.css` 是生成文件，不应直接修改。当前 Build 无运行时依赖；`npm install` 主要用于建立一致的 npm 项目状态和 lockfile。

## 目录架构

```text
src/base/        Design Token、Obsidian 变量映射、明暗主题、排版基础
src/workspace/   Tabs、Sidebar、Ribbon、Status Bar、Scrollbar
settings/        Style Settings 的 CSS 元数据源码
scripts/         确定性 Build 与轻量 Check
docs/            决策、状态、任务和 AI handoff
theme.css        生成后的 Obsidian 安装文件
manifest.json    Obsidian Theme manifest
```

源码目录现已包含 `src/editor`、`src/navigation`、`src/layout`、`src/effects`、`src/apps` 等模块；未来模块应在有批准的真实需求时创建，避免无意义空文件占位。

## Style Settings

[Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 是可选的 Community Plugin。主题不依赖它才能加载；安装后可通过主题 CSS 中的 `@settings` 元数据调整 35 项设置。设置范围包括 Appearance、Workspace、Reading & Writing、PKM 等。具体控件和默认值以 `settings/style-settings.css` 为准。

## 参考边界

Composer、Border 等成熟主题只用于研究设计、selector 和实现思路，不直接复制整份 CSS 或工程结构。若未来复用第三方 MIT 代码，必须保留对应许可和 attribution。
