# MkDocs Wiki 测试

这是一个用于测试MkDocs自动部署的仓库。

## 🚀 在线访问

网站地址：https://winbeau.github.io/mkdocs-wiki/

## 📁 项目结构

```
.
├── .github/
│   └── workflows/
│       └── deploy.yml          # 自动部署配置
├── docs/
│   ├── index.md               # 首页
│   ├── javascripts/
│   │   └── katex.js           # 数学公式支持
│   └── test-course/           # 测试课程
│       ├── intro/
│       │   └── main.md
│       └── note/
│           └── main.md
├── mkdocs.yml                 # MkDocs配置文件
└── README.md
```

## 🛠️ 本地开发

```bash
# 安装依赖
pip install mkdocs mkdocs-material pymdown-extensions

# 本地预览
mkdocs serve

# 构建静态文件
mkdocs build
```

## 📝 功能测试

- [x] 基本页面渲染
- [x] Material主题
- [x] 代码高亮
- [x] 数学公式 (KaTeX)
- [x] Mermaid图表
- [x] 警告框
- [x] 自动部署

## 🔄 部署流程

1. 推送代码到main分支
2. GitHub Actions自动构建
3. 部署到GitHub Pages
4. 访问在线网站

---

*测试完成后，可以将这个配置应用到实际项目*
