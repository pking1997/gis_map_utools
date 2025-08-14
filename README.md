# GIS Map UTools

收集与托管常用 GIS 地图小工具的静态站点，支持 GitHub Pages 自动部署。

## 在线访问
- 打开首页：`https://pking1997.github.io/gis_map_utools/`
- 现有工具：`GIS Data Collection` → `https://pking1997.github.io/gis_map_utools/gisDataCollection.html`
- 新增工具：`坐标系转换` → `https://pking1997.github.io/gis_map_utools/coordConverter.html`

## 本地开发
1. 克隆仓库并进入目录。
2. 直接用浏览器打开 `index.html` 或通过本地静态服务启动：
   - Python 3: `python3 -m http.server 8000`
   - Node: `npx serve .`
3. 访问 `http://localhost:8000`。

## 自动部署
已配置 GitHub Actions 工作流，推送到 `main` 分支即会部署到 Pages：
- 工作流文件：`.github/workflows/pages.yml`
- 资源：纯静态，无需构建；包含 `index.html`、`404.html`、`.nojekyll`。

首次启用步骤：
1. 在仓库的 Settings → Pages 启用 GitHub Pages，Source 选择 `GitHub Actions`。
2. 合并或推送到 `main`，等待工作流完成。

## 目录结构
```
index.html                 # 首页（工具索引 + 搜索）
gisDataCollection.html     # 地图数据采集工具（现有）
coordConverter.html        # 坐标系转换（WGS84/GCJ-02/BD-09）
404.html                   # 404 友好页（支持深链接）
assets/
  css/styles.css           # 基础样式（深浅色适配）
  js/main.js               # 首页交互逻辑
  js/layout.js             # 统一页头页脚注入脚本
.nojekyll                  # 禁用 Jekyll 以便静态资源无障碍访问
.github/workflows/pages.yml# GitHub Pages 自动部署
```

## 后续规划
- 坐标转换：WGS84 / GCJ-02 / BD-09 互转 ✅
- WKT / GeoJSON 转换与校验
- 瓦片编号（XYZ / TMS）与范围可视化
- 量算工具（长度、面积）

