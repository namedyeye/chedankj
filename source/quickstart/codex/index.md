---
title: Codex 安装配置教程
layout: page
date: 2026-06-08 10:00:00
cover: true
---

<div class="codex-guide-hero">
  <p class="codex-guide-eyebrow">先选路径，再开始配置</p>
  <h2>Codex 安装配置分成两条路：<span>第一次安装走手动配置，已经用过则走 CC Switch。</span></h2>
  <p>如果你是第一次安装 Codex，就直接进入手动配置教程；如果你已经用过 Codex，又想更换 Token 源，建议走 CC Switch 路径。这样可以尽量减少因为 provider 名称变化、账号切换或中转变化，导致历史对话看起来被拆到另一套配置里的情况。</p>
  <div class="codex-guide-tags">
    <span>首次安装</span>
    <span>手动配置</span>
    <span>CC Switch</span>
    <span>历史对话保留</span>
  </div>
</div>

<div class="codex-note">
  <strong>为什么要分成两条路</strong>
  <p>Codex 的历史对话会和本地配置强相关。若直接改掉 provider 名称，或者切换不同账号、不同中转，历史记录可能看起来“消失”或被分到另一套配置。第一次安装适合从头手动写入配置；已经用过 Codex 的用户，更适合先走 CC Switch 再切换 Token 源。</p>
</div>

## 选择你的路径

<div class="codex-path-cards">
  <a class="codex-path-card" href="/quickstart/codex/manual/">
    <span>第一次安装使用 Codex</span>
    <h3>手动配置路径</h3>
    <p>适合第一次安装 Codex 的用户。按现有教程完成安装、创建中转密钥、写入本地 auth.json 和 config.toml，并在最后重启验证。</p>
    <strong>进入手动教程</strong>
  </a>
  <a class="codex-path-card" href="/quickstart/codex/ccswitch/">
    <span>使用过并想更换 Token 源</span>
    <h3>CC Switch 配置路径</h3>
    <p>适合已经使用过 Codex 的用户。通过 CD 中转创建 Key，再导入到 CC Switch，由 CC Switch 接管供应商配置和 Token 源切换。</p>
    <strong>进入 CCS 教程</strong>
  </a>
</div>

<div class="codex-branch-hint">
  <strong>怎么选</strong>
  <p>第一次装 Codex 走左边，想保留已有使用习惯、准备切换 Token 源就走右边。入口先分开，后续内容也会分别维护。</p>
</div>

## 使用建议

<div class="codex-prereq-grid">
  <section>
    <strong>第一次装</strong>
    <p>直接看左侧的手动配置路径，沿着原教程完成初始接入。</p>
  </section>
  <section>
    <strong>已经用过</strong>
    <p>优先看右侧的 CC Switch 路径，避免因为配置命名变化把历史对话拆开。</p>
  </section>
  <section>
    <strong>不确定选哪个</strong>
    <p>如果你是第一次在这台机器上装 Codex，就走手动配置；如果以前已经正常用过，就走 CC Switch。</p>
  </section>
</div>
