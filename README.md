# GIS Map UTools

收集与托管常用 GIS 地图小工具的静态站点，支持 GitHub Pages 自动部署。

## 在线访问
- 打开首页：`https://pking1997.github.io/gis_map_utools/`
- 坐标系转换（增强版）：`https://pking1997.github.io/gis_map_utools/coordConverterEnhanced.html`
- 围栏数据转换：`https://pking1997.github.io/gis_map_utools/fenceConverter.html`
- 坐标系转换：`https://pking1997.github.io/gis_map_utools/coordConverter.html`
- 数据采集工具：`https://pking1997.github.io/gis_map_utools/gisDataCollection.html`

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

## 工具列表

### 坐标系转换（增强版）
- **功能**：支持 WKT、GeoJSON 格式的批量坐标系转换
- **坐标系**：BD-09、GCJ-02、WGS84 互转
- **特色**：左右分栏布局，双向转换，支持多种格式

### 围栏数据转换
- **功能**：lnglat 对象数组、WKT、GeoJSON 之间的格式转换
- **支持格式**：
  - 对象数组：`[{lng: 116.397, lat: 39.916}, ...]`
  - 数组格式：`[[116.397, 39.916], ...]`
  - 字符串格式：`116.397,39.916;121.473,31.230`
- **特色**：智能格式识别，快速围栏数据处理

### 坐标系转换（基础版）
- **功能**：WGS84、GCJ-02、BD-09 互转
- **特色**：支持批量经纬度转换与格式化

### GIS Data Collection
- **功能**：交互式采集与查看地图要素属性
- **特色**：支持百度地图底图与可视化扩展

## 优秀 GIS 网站导航
首页还提供了优秀 GIS 网站导航模块，包括：
- **WKT to GeoJSON**：格式转换工具
- **EPSG.io**：坐标系数据库
- **geojson.io**：GeoJSON 在线编辑器
- **OpenStreetMap**：开源地图数据平台
- **Leaflet**：轻量级地图库
- **QGIS**：开源桌面 GIS 软件

## 目录结构
```
index.html                 # 首页（工具索引 + 搜索 + 导航）
coordConverterEnhanced.html# 坐标系转换（增强版）
fenceConverter.html        # 围栏数据转换
coordConverter.html        # 坐标系转换（基础版）
gisDataCollection.html     # 地图数据采集工具
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
- 围栏数据转换：lnglat / WKT / GeoJSON 互转 ✅
- WKT / GeoJSON 转换与校验 ✅
- 瓦片编号（XYZ / TMS）与范围可视化
- 量算工具（长度、面积）
- 坐标拾取器

