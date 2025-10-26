# Repository Guidelines

## 项目结构与模块组织
仓库基于 MkDocs 构建新疆大学飞跃手册。根目录的 `mkdocs.yml` 管理站点主题、导航与额外资源，其中 `extra_css`、`extra_javascript` 负责注入静态文件。全部内容位于 `docs/`，例如首页 `docs/index.md`、经验合集 `docs/experiences/2025/`、系列辅导 `docs/series-pilots/`，专题文章可放在 `docs/tutorials/`。公共图片、脚本、样式请放入 `docs/assets/` 的对应子目录并使用相对路径引用，避免引用外部非白名单 CDN。`site/` 目录保存构建产物，每次执行 `mkdocs build` 会被覆盖，请不要在其中直接编辑或提交。若新增课程页，可仿照 `docs/series-pilots/senior-1.md` 的结构；若需要发布公告，请查看 `docs/advertise.md` 的内容格式。新增长文档时应放在同类目录，并及时在 `mkdocs.yml` 的 `nav` 中补充导航，以保持结构一致。

## 构建、测试与开发命令
- `pip install mkdocs mkdocs-material pymdown-extensions`：安装本地开发所需依赖，推荐使用 `pipx` 或 `venv` 隔离环境。
- `mkdocs serve`：启动本地预览，访问 `http://127.0.0.1:8000/`，编辑后自动刷新页面。
- `mkdocs serve --dirtyreload`：增量模式，适合频繁修改大篇幅内容，可加快重建速度。
- `mkdocs build`：生成最新静态站点到 `site/`，用于核对部署结果。
- `mkdocs build --strict`：将警告视为错误，提交或发布前务必执行一次，防止线上出现 404 或渲染异常。
- `mkdocs gh-deploy --force`：如需手动部署至 gh-pages 分支，可使用该命令；执行前请确认 GitHub Actions 未启用自动部署。

## 编码风格与命名规范
全部内容使用 Markdown 撰写，标题层级逐级递进，正文保持简洁直接。文件命名采用全小写加连字符（示例：`series-pilots`、`senior-1.md`），新文件请沿用此规则，并在命名中加入年份或主题关键词以便检索。代码块使用围栏语法并注明语言，表格请使用 Markdown 原生语法，避免 HTML `<table>`。复杂说明优先使用 Material 主题的提示块（如 `!!! note`、`!!! warning`），必要时可在同一页面引入多个提示区块。若需新增脚本或样式，请放入 `docs/assets/js/`、`docs/assets/css/` 并在 `mkdocs.yml` 的 `extra_javascript`、`extra_css` 中登记；公共字体或图标仅能添加至 `docs/assets` 并注明来源。

## 测试指南
提交前必须运行 `mkdocs build --strict`，检查死链、缺图或语法错误。大规模改动建议先通过 `mkdocs serve` 或 `mkdocs serve --dirtyreload` 进行快速浏览，确认导航项、锚点、脚注与交叉链接渲染正常。新增外链、附件或多媒体时，应在预览中逐项点击验证可访问性，以避免部署后出现 404。必要时可使用 `mkdocs build --strict --site-dir tmp-site` 在临时目录验证输出，确保默认的 `site/` 不被污染。

## 提交与合并请求规范
当前提交历史使用简洁的中文标题（如 `填充关键样式框架`），请继续沿用并将相关改动集中在同一次提交中，避免 “Fix typo” 类碎片化提交。发起 PR 时需说明影响的页面或模块、关联的 Issue 或讨论，并在涉及视觉改动时附上截图或 GIF；若新增命令或配置，建议补充示例输出。若重新生成了 `site/`，请在描述中注明并确认已通过 `mkdocs build --strict`，必要时附上命令输出摘要，帮助审阅者快速验证与合并。对重要内容变动（如增加高校经验、修改招生流程）请 @ 核心维护者确认。
