# 我的 Hexo 博客

这是一个 Hexo 静态博客项目，已配置为通过 GitHub Actions 自动部署到 GitHub Pages。

## 本地使用

```powershell
npm install
npm run server
```

本地预览地址通常是 `http://localhost:4000/`。

## 写文章

```powershell
npx hexo new post "文章标题"
npm run server
```

文章文件会生成在 `source/_posts/` 下。

## 发布到 GitHub Pages

1. 当前配置使用 GitHub 项目仓库 `namedyeye/chedankj`。
2. 当前公网访问地址应为 `https://blog.chedankj.com/`。
3. `_config.yml` 已按自定义域名根路径配置：

```yml
url: https://blog.chedankj.com
root: /
```

4. 推送到 GitHub：

```powershell
git remote add origin https://github.com/namedyeye/chedankj.git
git push -u origin main
```

5. 在 GitHub 仓库的 `Settings > Pages` 中，将 `Build and deployment` 的 `Source` 设置为 `GitHub Actions`，并在 `Custom domain` 中保存 `blog.chedankj.com`。

后续每次向 `main` 分支推送代码，`.github/workflows/pages.yml` 都会自动构建并发布 `public/` 目录。
