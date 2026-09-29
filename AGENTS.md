# Repository Agent Instructions

## Source of truth

- 开始工作前完整阅读 `README.md`、`docs/AI_HANDOFF.md`、`docs/CURRENT_STATUS.md`、`docs/DECISIONS.md`、`docs/TASKS.md`。
- 执行 `git status`、`git branch --show-current`，必要时检查近期提交和 diff。
- 不把聊天历史当作唯一或最高优先级的项目状态；Git、仓库文件和可复现命令的证据优先。

## Editing and validation

- 不直接修改生成文件 `theme.css`。编辑 `src/**/*.css` 或 `settings/**/*.css` 后运行 `npm run build`。
- CSS 源码按 `base → workspace → editor → navigation → components → layout → effects → apps` 构建；设置元数据在这些源码前输出。
- 完成改动前至少运行 `npm run check`，并如实记录无法通过的验证。
- 保持任务 scope，除非当前任务要求，不提前实现后续 Milestone 或引入 JavaScript runtime / 前端框架。

## Project continuity

- 只在项目状态真实变化时更新相关文档：稳定入口写入 README，架构决策写入 DECISIONS，当前状态写入 CURRENT_STATUS，计划写入 TASKS，精简交接写入 AI_HANDOFF。
- 提交前确认没有 `node_modules`、构建缓存、临时文件或用户环境文件进入版本控制。
- 未获得明确授权时，不创建远程仓库、不推送、不发布、不假设 GitHub 状态。
