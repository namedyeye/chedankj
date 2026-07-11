---
title: Codex GPT-5.6 模型列表缺失修复
layout: page
date: 2026-07-11 14:00:00
cover: true
home_latest: true
home_label: 模型列表修复
home_excerpt: 通过备份并替换本地 models_cache.json，恢复缺失的 GPT-5.6-Sol、Terra 和 Luna 模型选项。
---

<div class="codex-guide-hero">
  <p class="codex-guide-eyebrow">配置问题 / 模型列表</p>
  <h2>通过替换本地模型缓存，恢复缺失的 GPT-5.6 模型选项。</h2>
  <p>北京时间 2026 年 7 月 9 日，GPT-5.6 系列公开后，部分使用中转 API 的用户更新 Codex 客户端，模型列表里仍然只有 GPT-5.5、GPT-5.4 等旧选项。这种情况不一定是账号或 API 配置错误，更常见的原因是本机 <code>models_cache.json</code> 仍保存着旧模型目录。</p>
  <div class="codex-route-line">确认症状 - 退出客户端 - 备份旧缓存 - 替换 models_cache.json - 重启验证</div>
  <div class="codex-guide-tags">
    <span>Windows</span>
    <span>GPT-5.6</span>
    <span>模型列表</span>
    <span>models_cache.json</span>
  </div>
</div>

<script src="/js/codex-image-preview.js" defer></script>

<div class="codex-note">
  <strong>适用范围</strong>
  <p>本文适用于 Windows 上已经安装 Codex，但更新客户端后在模型选择菜单中看不到 <code>GPT-5.6-Sol</code>、<code>GPT-5.6-Terra</code> 或 <code>GPT-5.6-Luna</code> 的情况。</p>
</div>

<div class="codex-note">
  <strong>文件说明</strong>
  <p>下载本文使用的 <a href="/downloads/codex/models_cache.json" download><code>models_cache.json</code></a>。该文件对应客户端版本 <code>0.144.0</code>，缓存获取时间为 2026-07-11，用于恢复本地模型目录；客户端版本明显更新后，应优先使用与新版本匹配的缓存文件。</p>
</div>

## 先判断是不是同一个问题

<div class="codex-prereq-grid">
  <section>
    <strong>客户端能够正常启动</strong>
    <p>Codex 可以打开并进入对话页面，只是模型菜单里缺少 GPT-5.6 系列。</p>
  </section>
  <section>
    <strong>旧模型仍然可见</strong>
    <p>模型列表中还能看到 GPT-5.5、GPT-5.4、GPT-5.4 Mini 等选项，说明界面和基础配置仍然有效。</p>
  </section>
  <section>
    <strong>问题出现在更新后</strong>
    <p>客户端已经更新，但本机模型目录没有刷新，导致新模型没有进入选择列表。</p>
  </section>
</div>

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>现象</span>
    <h3>模型菜单里没有 GPT-5.6</h3>
    <p>如果模型菜单仍停留在 GPT-5.5、GPT-5.4、GPT-5.4 Mini 和 GPT-5.2，可以继续按本文步骤处理。</p>
    <p>如果模型选项已经存在，但选择后请求失败，则应检查中转服务、模型权限、API Key 或余额，不属于本文处理的缓存问题。</p>
  </div>
  <figure class="codex-shot">
    <img src="/images/config-issues/gpt-5-6-model-missing/model-list-missing.png" alt="Codex 模型列表缺少 GPT-5.6 系列">
    <figcaption>更新后模型列表仍然只有 GPT-5.5、GPT-5.4 等旧模型</figcaption>
  </figure>
</div>

## 1. 完全退出 Codex

在替换缓存文件前，先关闭 Codex 窗口，并检查系统托盘或任务管理器，确认客户端后台进程已经退出。否则正在运行的客户端可能继续使用内存里的旧缓存，或者在退出时把旧内容重新写回文件。

## 2. 打开本机 .codex 目录

按下 <code>Win + R</code>，输入下面的路径并回车：

```text
%USERPROFILE%\.codex
```

它通常对应：

```text
C:\Users\你的用户名\.codex
```

部分中文 Windows 界面会把 <code>Users</code> 显示为“用户”，但实际路径仍然可以直接使用 <code>%USERPROFILE%</code> 打开。

## 3. 备份旧的模型缓存

在 <code>.codex</code> 目录中找到原有的 <code>models_cache.json</code>，先复制一份并重命名，例如：

```text
models_cache.before-gpt-5.6.json
```

只需要备份和替换 <code>models_cache.json</code>。不要删除或修改同目录下的 <code>auth.json</code>、<code>config.toml</code>、SQLite 数据库和其他状态文件。

## 4. 替换 models_cache.json

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 04</span>
    <h3>把新模型缓存复制到 .codex 目录</h3>
    <p>下载本文配套的 <code>models_cache.json</code> 后，将它复制或拖入 <code>.codex</code> 目录。Windows 提示目标位置已有同名文件时，选择“替换目标中的文件”。</p>
    <p>替换完成后，确认文件名仍然是 <code>models_cache.json</code>。如果系统隐藏了扩展名，要避免文件变成 <code>models_cache.json.json</code>。</p>
  </div>
  <figure class="codex-shot">
    <img src="/images/config-issues/gpt-5-6-model-missing/replace-models-cache.png" alt="在 .codex 目录替换 models_cache.json">
    <figcaption>将新文件复制到 .codex 目录，并选择替换目标中的文件</figcaption>
  </figure>
</div>

## 5. 重新打开并验证模型列表

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 05</span>
    <h3>重启客户端并检查 GPT-5.6 系列</h3>
    <p>重新启动 Codex，打开模型选择菜单。正常情况下，列表中会出现 <code>5.6 Sol</code>、<code>5.6 Terra</code> 和 <code>5.6 Luna</code>。</p>
    <p>先选择其中一个模型发送简单测试消息。如果模型可以选择但请求报错，说明本地模型列表已经恢复，后续需要检查中转平台是否开放该模型，以及当前 API Key 是否具备调用权限。</p>
  </div>
  <figure class="codex-shot">
    <img src="/images/config-issues/gpt-5-6-model-missing/model-list-restored.png" alt="Codex 模型列表恢复 GPT-5.6 Sol Terra Luna">
    <figcaption>替换缓存并重启后，GPT-5.6 Sol、Terra 和 Luna 已进入模型列表</figcaption>
  </figure>
</div>

## 常见问题

<div class="codex-faq">
  <details open>
    <summary>替换后仍然看不到 GPT-5.6 怎么办？</summary>
    <p>先确认 Codex 在替换文件前已经完全退出，再检查文件是否放在当前 Windows 登录用户的 <code>.codex</code> 目录中。最后确认文件名没有变成 <code>models_cache.json.json</code>，然后重新启动客户端。</p>
  </details>
  <details>
    <summary>出现模型选项，但发送消息失败怎么办？</summary>
    <p><code>models_cache.json</code> 只负责本地模型目录和界面选项。实际调用仍取决于中转服务是否支持该模型、API Key 所属分组、账户余额以及当前网络。此时不要反复替换缓存，应转向检查 API 配置和平台模型权限。</p>
  </details>
  <details>
    <summary>客户端更新后模型又消失了怎么办？</summary>
    <p>客户端可能自动刷新或重建模型缓存。先确认新版本是否已经原生包含 GPT-5.6；如果仍缺失，可以重新替换与当前客户端版本匹配的缓存文件。不要长期使用明显旧于客户端版本的模型缓存。</p>
  </details>
  <details>
    <summary>替换失败后如何恢复？</summary>
    <p>完全退出 Codex，删除刚替换的文件，再把之前备份的 <code>models_cache.before-gpt-5.6.json</code> 改回 <code>models_cache.json</code>，然后重新启动客户端。</p>
  </details>
</div>

<p><a href="/config-issues/">返回配置问题</a></p>
