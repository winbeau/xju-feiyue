# 新疆大学「飞跃手册」

面向新疆大学在校生与校友的开放知识库，聚焦保研辅导、申请经验与学习资源的系统整理。项目采用 MkDocs + Material 主题构建静态站点，力求打造沉稳、可靠、可持续协作的公共平台。

## 项目定位
- **服务对象**：准备保研、考研、出国的在校本科生，以及希望回馈母校的上岸校友。
- **核心使命**：降低信息差、沉淀经验资产、搭建可持续迭代的经验分享社区。
- **协作方式**：内容与代码完全开源，欢迎投稿、修订与技术协同。

## 平台亮点
- **分层导航结构**：首页提供体验式板块切换，「历届保研」「经验文档」「系列辅导」等栏目一目了然。
- **经验沉淀体系**：2025 届多篇保研复盘、专题辅导课程笔记以及学业助力资源正在持续补全。
- **富媒体支持**：内置 KaTeX 数学公式、Mermaid 流程图、可折叠提示等 Markdown 增强能力。
- **个性化前端增强**：自定义 `assets/js` 与 `assets/css`，引入 GSAP 动画、字体与交互效果，兼顾观感与可维护性。
- **纯静态部署**：可直接产出 GitHub Pages 站点，部署流程透明、易于复用。

## 内容导航
| 模块 | 说明 | 文档入口 |
| --- | --- | --- |
| 首页 | 平台简介与核心板块展示 | `docs/index.md` |
| 关于我们 | 项目初心、受众、联系方式 | `docs/about.md` |
| 历届保研 | 2025 届上岸同学全流程经验 | `docs/experiences/2025/` |
| 系列辅导 | 学长学姐专题辅导内容 | `docs/series-pilots/` |
| 学业助力 | 学习与资料工具整理 | `docs/advertise.md` |
| 投稿指南 | 投稿规则与协作方式 | `docs/contribute.md` |
| 讨论区 | Issue 列表与互动说明 | `docs/issue.md` |

## 快速开始
开始之前请确保本地已安装 Python 3.9+ 以及 `pip`。

```bash
# 1. 克隆仓库
git clone https://github.com/winbeau/xju-feiyue.git
cd xju-feiyue

# 2. 安装依赖
pip install mkdocs mkdocs-material pymdown-extensions

# 3. 本地预览
mkdocs serve
# 服务默认开启在 http://127.0.0.1:8000

# 4. 构建静态站点
mkdocs build
# 生成文件位于 ./site
```

如需固化依赖，可在本地创建虚拟环境并生成 `requirements.txt`，提交前记得与团队确认。

## 常用命令速览
```bash
# 清理本地构建产物
rm -rf site

# 使用 Material 主题内置部署（需配置 GitHub Pages 权限）
mkdocs gh-deploy

# 检查配置文件
mkdocs build --config-file mkdocs.yml --strict
```

## 目录结构
```
.
├── docs/                # Markdown 内容主体
│   ├── assets/          # 自定义 JS/CSS 等静态资源
│   ├── experiences/     # 历届经验文档
│   ├── series-pilots/   # 系列辅导专题
│   └── tutorials/       # 技术与经验综述
├── mkdocs.yml           # 站点配置与导航定义
├── site/                # `mkdocs build` 输出目录
└── README.md
```

## 贡献与协作
- 内容提交：可通过 Issue/PR、邮件或投稿渠道提供 Markdown、Word、PDF 等原稿，我们会协助格式化。
- 版式约定：正文使用 Markdown，必要时结合提示框、表格、Mermaid 图等增强组件；图片建议存放于 `docs/assets`。
- 协作建议：提交前本地预览，确保导航链接、引用资源与元数据（Front Matter）正确无误。

## 部署建议
- 默认输出目录为 `site`，可直接绑定到任意静态托管平台。
- 如需 GitHub Pages 自动化，请在仓库中补充 CI 工作流（参考 MkDocs 官方示例）并将 `mkdocs.yml` 与内容纳入版本控制。
- 生产环境推荐配合自定义域名与 CDN 缓存，提升访问体验。

## 联系方式
- 投稿 / 合作邮箱：`winbeau2381@gmail.com`
- GitHub Issues：欢迎反馈内容、技术与协作建议
- 站内作者联系方式：详见各篇经验文档页尾

## 许可证
当前仓库尚未注明开源许可证，默认保留所有权利。若需复用或二次分发内容，请先与维护团队沟通，后续我们将视情况补充正式 License。
