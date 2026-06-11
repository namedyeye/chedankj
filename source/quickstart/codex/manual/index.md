---
title: 第一次安装使用 Codex
layout: page
date: 2026-06-08 10:00:00
cover: true
home_latest: true
home_label: 安装配置
home_excerpt: 从安装 Codex、创建中转密钥，到写入 auth.json 和 config.toml，完成首次接入和重启验证。
---

<div class="codex-guide-hero">
  <p class="codex-guide-eyebrow">首次安装 · 手动配置</p>
  <h2>把 Codex 装好，并接入你的中转 API 密钥。</h2>
  <p>这条路径面向第一次安装 Codex 的用户，按下面的顺序完成初始化：</p>
  <div class="codex-route-line">安装 Codex - 创建中转密钥 - 写入本地配置 - 重启验证</div>
  <p>配置完成后，Codex 会通过本机 <code>.codex</code> 目录下的配置文件读取请求地址和认证密钥。</p>
  <div class="codex-guide-tags">
    <span>Windows</span>
    <span>CD 中转</span>
    <span>auth.json</span>
    <span>config.toml</span>
  </div>
</div>

<script src="/chedankj/js/codex-image-preview.js" defer></script>

<div class="codex-note">
  <strong>适用范围</strong>
  <p>这是第一次安装使用 Codex 的手动配置路径。已经使用过 Codex、准备更换 Token 源的用户，请返回上一页选择 CC Switch 路径，避免因为 provider 名称变化或账号切换把历史对话拆到另一套配置里。</p>
</div>

## 开始前

<div class="codex-prereq-grid">
  <section>
    <strong>准备 Codex</strong>
    <p>可以从 Microsoft Store 搜索并安装 Codex。若已经安装，先确认它能正常启动。</p>
  </section>
  <section>
    <strong>准备中转账户</strong>
    <p>进入 <a href="https://www.chedankj.com/" target="_blank" rel="noopener noreferrer">www.chedankj.com</a> 注册或登录账户，用于创建 API 密钥。</p>
  </section>
  <section>
    <strong>准备本地配置目录</strong>
    <p>配置文件位于 <code>C:\Users\你的用户名\.codex</code>。如果看不到 <code>.codex</code>，需要先开启隐藏项目显示。</p>
  </section>
</div>

<div class="codex-note">
  <strong>注意</strong>
  <p>API Key 只应该保存到你自己的本机配置文件中，不要发给别人，也不要截图公开。本文截图里的密钥内容已做脱敏处理。</p>
  <p>图片看不清可以按住 Ctrl + 滑轮放大。</p>
</div>

## 1. 安装 Codex

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 01</span>
    <h3>从 Microsoft Store 安装</h3>
    <p>在 Windows 搜索框输入 <code>store</code> 打开 Microsoft Store，搜索 <code>codex</code>，找到 Codex 后点击安装或获取。</p>
  </div>
  <figure class="codex-shot">
    <img src="/chedankj/images/codex-install/codex-step-01.png" alt="在 Microsoft Store 中搜索并安装 Codex">
    <figcaption>Microsoft Store 搜索 Codex 并安装</figcaption>
  </figure>
</div>

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 02</span>
    <h3>首次启动后退出后台</h3>
    <p>安装完成后启动 Codex。若它提示需要登录 OpenAI 账号，可以先关闭窗口，并在系统托盘里退出后台进程，后续改用本地配置接入中转密钥。</p>
  </div>
  <figure class="codex-shot">
    <img src="/chedankj/images/codex-install/codex-step-02.png" alt="从系统托盘退出 Codex 后台">
    <figcaption>从系统托盘退出 Codex</figcaption>
  </figure>
</div>

## 2. 创建中转 API 密钥

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 03</span>
    <h3>在 CD 中转创建密钥</h3>
    <p>登录 <a href="https://www.chedankj.com/" target="_blank" rel="noopener noreferrer">CD 中转</a> 后，进入左侧的“API 密钥”页面，点击“创建密钥”。密钥名称可以按用途填写，例如 <code>codex</code>。</p>
    <p>创建时需要选择模型分组。不同模型组的能力和计价不同，建议先按页面中的说明选择适合自己的分组，再完成创建。</p>
  </div>
  <figure class="codex-shot">
    <img src="/chedankj/images/codex-install/codex-step-03.png" alt="在 CD 中转控制台创建 API 密钥">
    <figcaption>创建 API 密钥并选择模型分组</figcaption>
  </figure>
</div>

## 3. 打开本机 .codex 目录

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 04</span>
    <h3>进入配置文件所在目录</h3>
    <p>打开“此电脑”，进入 <code>C:\Users\你的用户名\.codex</code>。如果系统语言显示为“用户”，路径也可能显示为 <code>C:\用户\你的用户名\.codex</code>。</p>
    <p>如果看不到 <code>.codex</code> 文件夹，先在资源管理器中打开“查看 - 显示 - 隐藏的项目”。后续创建 <code>auth.json</code> 和 <code>config.toml</code> 时，也建议打开“文件扩展名”显示，避免把文件保存成 <code>auth.json.txt</code>。</p>
  </div>
  <figure class="codex-shot">
    <img src="/chedankj/images/codex-install/codex-step-04.png" alt="打开 Windows 用户目录下的 .codex 文件夹">
    <figcaption>显示隐藏项目并进入 .codex 目录</figcaption>
  </figure>
</div>

## 4. 写入 auth.json

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 05</span>
    <h3>新建或编辑 auth.json</h3>
    <p><code>auth.json</code> 用来保存请求认证信息。若 <code>.codex</code> 目录中没有这个文件，可以新建文本文件后重命名为 <code>auth.json</code>。</p>
    <p>重命名时务必确认扩展名是 <code>.json</code>，不是 <code>.txt</code>。Windows 弹出“修改扩展名可能导致文件不可用”的提示时，确认即可。</p>
  </div>
  <figure class="codex-shot">
    <img src="/chedankj/images/codex-install/codex-step-05.png" alt="在 .codex 目录中新建 auth.json 文件">
    <figcaption>新建 auth.json 并确认文件扩展名</figcaption>
  </figure>
</div>

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 06</span>
    <h3>复制中转平台生成的 auth.json 内容</h3>
    <p>回到 CD 中转控制台，在刚创建的密钥右侧点击“使用密钥”，复制页面生成的 <code>auth.json</code> 内容。随后用记事本或代码编辑器打开本机 <code>.codex/auth.json</code>，粘贴后务必保存，可以直接按 <code>Ctrl + S</code> 快捷保存。</p>
    <div class="codex-code-block">
      <span>auth.json 示例</span>
      <pre><code>{
  "OPENAI_API_KEY": "sk-************************"
}</code></pre>
    </div>
  </div>
  <figure class="codex-shot">
    <img src="/chedankj/images/codex-install/codex-step-06.png" alt="复制并保存 auth.json 配置内容">
    <figcaption>把平台生成的 auth.json 内容粘贴到本机文件</figcaption>
  </figure>
</div>

## 5. 写入 config.toml

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 07</span>
    <h3>复制中转平台生成的 config.toml 内容</h3>
    <p><code>config.toml</code> 用来告诉 Codex 请求哪个接口、使用哪个模型和供应商配置。在 CD 中转控制台点击“使用密钥”，复制页面生成的 <code>config.toml</code> 内容，粘贴到本机 <code>.codex/config.toml</code> 后务必保存，可以直接按 <code>Ctrl + S</code> 快捷保存。</p>
    <div class="codex-code-block">
      <span>config.toml 示例</span>
      <pre><code>model_provider = "OpenAI"
model = "gpt-5.5"
[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://www.chedankj.com"
wire_api = "responses"
requires_openai_auth = true</code></pre>
    </div>
  </div>
  <figure class="codex-shot">
    <img src="/chedankj/images/codex-install/codex-step-07.png" alt="复制并保存 config.toml 配置内容">
    <figcaption>把平台生成的 config.toml 内容粘贴到本机文件</figcaption>
  </figure>
</div>

## 6. 重启并验证

<div class="codex-check-panel">
  <h3>重启 Codex</h3>
  <p>保存 <code>auth.json</code> 和 <code>config.toml</code> 后，重新启动 Codex。桌面没有快捷方式时，可以在 Windows 搜索框中搜索 <code>Codex</code> 启动。</p>
  <div class="codex-check-grid">
    <section>
      <strong>能正常打开</strong>
      <p>启动后不再卡在登录或配置错误页面。</p>
    </section>
    <section>
      <strong>能发起任务</strong>
      <p>输入一个简单问题或让 Codex 读取当前项目，确认它能返回结果。</p>
    </section>
    <section>
      <strong>能看到消耗</strong>
      <p>回到中转控制台查看调用记录或余额变化，确认请求已经走到对应密钥。</p>
    </section>
  </div>
</div>

## 常见问题

<div class="codex-faq">
  <details open>
    <summary>找不到 .codex 文件夹怎么办？</summary>
    <p>先确认 Codex 至少启动过一次。然后在资源管理器里开启“隐藏的项目”。如果仍然没有，查看其余盘符，如 D 盘、E 盘，部分电脑可能会出现在其他盘符。</p>
  </details>
  <details>
    <summary>auth.json 变成 auth.json.txt 怎么办？</summary>
    <p>打开资源管理器的“查看 - 显示 - 文件扩展名”，把文件名改回 <code>auth.json</code>。同理，<code>config.toml</code> 也不能保存成 <code>config.toml.txt</code>。</p>
  </details>
  <details>
    <summary>重启后仍然提示认证失败怎么办？</summary>
    <p>优先检查 <code>auth.json</code> 是否完整复制、API Key 是否仍然有效、密钥是否选择了可用模型分组，以及 <code>config.toml</code> 中的接口地址是否与中转平台生成内容一致。</p>
  </details>
</div>
