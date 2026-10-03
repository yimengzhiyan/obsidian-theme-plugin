# Obsidian Fusion Theme

> Working Title：`Obsidian Fusion Theme`，不是最终正式名称。

这是一个面向 Obsidian 的模块化主题项目，目标是逐步建立可维护、可配置的 Design System，而不是拼接现有主题。项目采用纯 CSS 主题 + 可选 Style Settings 插件的技术路线，不是 Obsidian Community Plugin。

## 当前状态

**V0.1 Theme Foundation 已完成并通过真实 Obsidian Desktop QA，当前等待从 `codex/theme-foundation` 合并到 `main`。** 仓库已提供语义色彩 Token、浅色/深色合同、Obsidian 公共变量映射、基础工作区样式、四项 Style Settings，以及可重复执行的 CSS Build / Check。高级功能尚未实现。

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

后续需要时再创建 `src/editor`、`src/navigation`、`src/components`、`src/layout`、`src/effects`、`src/apps` 和 `presets`，避免用无意义空文件占位。

## Style Settings

[Style Settings](https://github.com/mgmeyers/obsidian-style-settings) 是可选的 Community Plugin。主题不依赖它才能加载；安装后可通过主题 CSS 中的 `@settings` 元数据调整当前的 Accent Color、Border Radius、Content Width 和 Line Height。未来设置分组规划为 Appearance、Workspace、Typography、Editor、Navigation、Components、Layout、Effects。

## 参考边界

Composer、Border 等成熟主题只用于研究设计、selector 和实现思路，不直接复制整份 CSS 或工程结构。若未来复用第三方 MIT 代码，必须保留对应许可和 attribution。
