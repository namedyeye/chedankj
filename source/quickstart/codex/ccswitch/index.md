---
title: 使用 CC Switch 接入 Codex
layout: page
date: 2026-06-08 21:56:00
cover: true
---

<div class="codex-guide-hero">
  <p class="codex-guide-eyebrow">CC Switch 配置路径</p>
  <h2>已经使用过 Codex 时，优先用 CC Switch 切换新的 Token 源。</h2>
  <p>CC Switch 可以集中管理多个平台、多个 API 和多组 Key。对已经配置过 Codex 的用户来说，通过 CD 中转把供应商配置导入 CC Switch，再由 CC Switch 接管切换，比反复手动改本地配置更稳妥。</p>
  <div class="codex-route-line">创建 CD 中转 Key - 导入到 CC Switch - 测试延迟 - 启动 Codex 验证</div>
  <div class="codex-guide-tags">
    <span>已使用过 Codex</span>
    <span>CC Switch</span>
    <span>CD 中转</span>
    <span>切换 Token 源</span>
  </div>
</div>

<script src="/chedankj/js/codex-image-preview.js" defer></script>

<div class="codex-note">
  <strong>适用范围</strong>
  <p>这条路径适合已经安装并使用过 Codex、现在准备更换 API 或 Token 源的用户。如果你是第一次安装 Codex，请返回上一页选择“第一次安装使用 Codex”，按手动配置路径完成初始化。</p>
</div>

## 开始前

<div class="codex-prereq-grid">
  <section>
    <strong>准备 CC Switch</strong>
    <p>先确保本机已经安装并能打开 CC Switch。后续点击“导入到 CCS”时，浏览器会尝试拉起这个应用。</p>
  </section>
  <section>
    <strong>准备 CD 中转账户</strong>
    <p>进入 <a href="https://www.chedankj.com/" target="_blank" rel="noopener noreferrer">www.chedankj.com</a> 登录账户，用于创建 Codex 要使用的 API 密钥。</p>
  </section>
  <section>
    <strong>确认 Codex 可启动</strong>
    <p>这篇教程默认你已经使用过 Codex。配置完成后，需要重新打开 Codex，并用一条简单消息确认请求是否走通。</p>
  </section>
</div>

<div class="codex-note">
  <strong>注意</strong>
  <p>API Key 只应保存在你自己的本机环境中，不要公开发送或截图。本文截图中的密钥已做脱敏处理。</p>
  <p>图片看不清可以按住 Ctrl + 滑轮放大。</p>
</div>

## 1. 在 CD 中转新建 Key

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 01</span>
    <h3>进入 API 密钥页面并创建密钥</h3>
    <p>登录 CD 中转后，进入左侧“API 密钥”页面，点击右上角“创建密钥”。密钥名称可以按用途填写，例如 <code>codex</code>，方便后续区分。</p>
    <p>创建时需要选择模型分组。不同分组的模型能力和计价倍率不同，可以先查看页面右上角的“怎么使用”说明，再根据自己的使用需求选择分组。其余开关保持默认即可，最后点击“创建”。</p>
  </div>
  <figure class="codex-shot">
    <img src="/chedankj/images/ccswitch/ccswitch-step-01.png" alt="在 CD 中转创建用于 Codex 的 API 密钥">
    <figcaption>在 CD 中转创建 Codex 使用的 API 密钥</figcaption>
  </figure>
</div>

## 2. 导入到 CC Switch

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 02</span>
    <h3>从 CD 中转拉起 CC Switch</h3>
    <p>密钥创建完成后，在密钥列表右侧找到对应记录，点击“导入到 CCS”。浏览器会弹出打开应用的确认窗口，点击“打开”。如果第一次点击后 CC Switch 没有反应，可以回到页面再点击一次“导入到 CCS”。</p>
    <p>CC Switch 被拉起后，会显示“确认导入供应商配置”。核对应用类型为 <code>Codex</code>、供应商为 <code>CD中转</code>，并确认 API 端点、脱敏后的 API 密钥和模型信息无误，然后点击“导入”。</p>
  </div>
  <figure class="codex-shot">
    <img src="/chedankj/images/ccswitch/ccswitch-step-02.png" alt="把 CD 中转密钥导入到 CC Switch">
    <figcaption>点击“导入到 CCS”后，在 CC Switch 中确认导入</figcaption>
  </figure>
</div>

<div class="codex-check-panel">
  <h3>没有自动拉起怎么办</h3>
  <p>先确认 CC Switch 已经安装并能正常打开；再回到 CD 中转页面重新点击“导入到 CCS”。浏览器若提示是否允许关联应用打开链接，需要选择允许或打开。</p>
</div>

## 3. 测试延迟

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 03</span>
    <h3>在 CC Switch 中测试当前配置</h3>
    <p>导入完成后，回到 CC Switch 的供应商列表。找到刚导入的配置，点击测试按钮，确认当前 API 端点和 Key 能正常响应。</p>
    <p>如果测试失败，优先检查密钥是否仍然有效、模型分组是否可用、当前网络是否能访问 CD 中转，以及导入时的 API 端点是否被改动。</p>
  </div>
  <figure class="codex-shot">
    <img src="/chedankj/images/ccswitch/ccswitch-step-03.png" alt="在 CC Switch 中点击测试按钮">
    <figcaption>点击测试按钮，检查供应商配置是否可用</figcaption>
  </figure>
</div>

## 4. 启动 Codex 验证

<div class="codex-step-card">
  <div class="codex-step-copy">
    <span>Step 04</span>
    <h3>重新打开 Codex 并发送测试消息</h3>
    <p>确认 CC Switch 中的配置可用后，重新启动 Codex。可以先发送一条简单消息，例如“你在正常工作吗”，观察 Codex 是否能正常回复。</p>
    <p>如果 Codex 能返回结果，再回到 CD 中转控制台查看使用记录或余额变化，确认请求已经走到刚创建的 Key。</p>
  </div>
  <figure class="codex-shot">
    <img src="/chedankj/images/ccswitch/ccswitch-step-04.png" alt="Codex 返回测试消息，表示配置可用">
    <figcaption>Codex 能正常回复，说明当前 Token 源已接入成功</figcaption>
  </figure>
</div>

## 常见问题

<div class="codex-faq">
  <details open>
    <summary>点击“导入到 CCS”后没有反应怎么办？</summary>
    <p>先手动打开 CC Switch，确认软件本身可以启动；再回到 CD 中转页面重新点击“导入到 CCS”。如果浏览器弹出打开外部应用的确认框，需要点击“打开”或允许该站点打开关联应用。</p>
  </details>
  <details>
    <summary>导入后测试失败怎么办？</summary>
    <p>优先检查 API Key 是否创建成功、模型分组是否可用、CD 中转账户余额是否充足，以及导入后的 API 端点是否仍为平台生成的地址。</p>
  </details>
  <details>
    <summary>Codex 仍然不能回复怎么办？</summary>
    <p>先确认 CC Switch 中当前配置处于启用状态，再完全退出并重新打开 Codex。若仍然失败，可以把现象和截图反馈到<a href="/chedankj/groups/">群组页面</a>，方便继续排查。</p>
  </details>
</div>

<p><a href="/chedankj/quickstart/codex/">返回 Codex 路径选择</a></p>
