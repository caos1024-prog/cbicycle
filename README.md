# CBicycle

一个用 [Astro](https://astro.build/) 搭的中英双语个人博客,部署在 Cloudflare Pages 上。

## 本地预览(可选)

```bash
npm install      # 第一次需要
npm run dev      # 启动本地预览,浏览器打开 http://localhost:4321
```

## 怎么写一篇新文章

1. 在 `src/content/blog/` 里新建一个 `.md` 文件。文件名就是网址(用英文 / 数字,例如 `my-new-ride.md` → `/blog/my-new-ride/`)。
2. 文件开头粘贴这段「信息头」,按需修改:

   ```markdown
   ---
   title: '文章标题'
   description: '一句话摘要(可留空)'
   pubDate: 2026-06-21
   lang: zh # zh = 中文,en = 英文
   draft: false # 设成 true 就是草稿,不会公开
   ---

   正文从这里开始,用 Markdown 写。
   ```

3. 保存。推送到 GitHub 后,Cloudflare 会自动重新发布(约 1 分钟)。

## 常见小改动

- **首页大图上的文字**:改 `src/pages/index.astro` 里的标题、标语和那几个小标签。
- **换首页背景图**:替换 `public/hero-bike.jpg`(保持同名即可)。
- **全站配色 / 字体**:改 `src/styles/global.css` 顶部的颜色变量。
- **站点网址**:在 `astro.config.mjs` 里的 `site` 字段。

## 目录速览

| 位置                    | 是什么            |
| ----------------------- | ----------------- |
| `src/content/blog/`     | 你的文章          |
| `src/pages/`            | 首页、博客列表、关于页 |
| `src/components/`       | 页头、页尾等零件  |
| `src/styles/global.css` | 全站配色和字体    |
| `public/`               | 图片等静态文件    |

## 部署

GitHub 仓库 → Cloudflare Pages 自动构建。构建命令 `npm run build`,输出目录 `dist`。
