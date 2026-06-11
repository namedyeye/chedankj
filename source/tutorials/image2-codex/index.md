---
title: 如何在 Codex 使用 Image2
layout: page
date: 2026-06-11 00:30:00
cover: true
home_latest: true
home_label: 方法教程
home_excerpt: 通过 chedan-image2 skill 在 Codex 中调用 Image2，完成安装、指定技能、提供 image 分组 Key 和出图验证。
---

<div class="codex-guide-hero image2-guide-hero">
  <p class="codex-guide-eyebrow">技巧 / 方法教程</p>
  <h2>在 Codex 里使用 Image2，把生成图片和编辑图片接入同一条对话流程。</h2>
  <p>Image2 是 OpenAI 的图像生成与编辑模型，支持 <code>generation</code> 文字生图和 <code>edit</code> 参考图编辑。在网页端使用它通常比较直接，但如果你在 Codex 中使用中转，可能会遇到模型、接口或生图链路没有打通的问题。这篇教程介绍一种稳定做法：通过专用 skill 把 Image2 调用流程交给 Codex 执行。</p>
  <div class="codex-route-line">下载 skill - 安装 skill - 指定 skill - 提供 image 分组 Key - 等待出图</div>
  <div class="codex-guide-tags">
    <span>Image2</span>
    <span>Codex Skill</span>
    <span>文字生图</span>
    <span>参考图编辑</span>
  </div>
</div>

<script src="/js/codex-image-preview.js" defer></script>

<div class="codex-note">
  <strong>适用范围</strong>
  <p>这篇文章面向已经可以正常打开 Codex、并且希望在 Codex 对话中生成或编辑图片的用户。你只需要掌握使用流程，不需要自己写接口代码。</p>
</div>

## 开始前

<div class="codex-prereq-grid image2-prereq-grid">
  <section>
    <strong>准备专用 skill</strong>
    <p>本文以 <code>chedan-image2</code> skill 为例。TechChedan 提供的 <code>chedankj-image2-skill</code> 可以在技术分享交流群的群文件中获取。</p>
  </section>
  <section>
    <strong>准备中转账户</strong>
    <p>进入 <a href="https://www.chedankj.com/" target="_blank" rel="noopener noreferrer">chedankj.com</a> 登录账户，后续需要新建一个 <code>image</code> 分组的 Key。</p>
  </section>
  <section>
    <strong>准备图片需求</strong>
    <p>先写清楚图片用途、画面主体、风格、尺寸、质量和是否需要参考图。提示词越具体，返工越少。</p>
  </section>
</div>

<div class="image2-flow">
  <section>
    <span>01</span>
    <strong>下载</strong>
    <p>获取 Image2 专用 skill 压缩包。</p>
  </section>
  <section>
    <span>02</span>
    <strong>安装</strong>
    <p>让 Codex 安装到本机 skills 目录。</p>
  </section>
  <section>
    <span>03</span>
    <strong>指定</strong>
    <p>用 <code>@</code> 或 <code>/</code> 选择技能并输入提示词。</p>
  </section>
  <section>
    <span>04</span>
    <strong>授权</strong>
    <p>提供 image 分组 Key，仅在当前对话中使用。</p>
  </section>
  <section>
    <span>05</span>
    <strong>生成</strong>
    <p>等待图片生成并检查输出文件。</p>
  </section>
</div>

<div class="codex-note">
  <strong>Key 安全提醒</strong>
  <p>Image2 分组 Key 只应该发送给你自己的 Codex 对话，不要公开到网页、群聊或截图中。每个需要使用 Image2 的新对话都需要提供一次 Key；同一个对话已经提供过后，后续无需重复发送。</p>
</div>

## 1. 下载 Image2 专用 Skill

<div class="codex-step-card image2-step-card">
  <div class="codex-step-copy">
    <span>Step 01</span>
    <h3>获取 chedan-image2 skill</h3>
    <p>先准备可安装的 Image2 专用 skill。以 TechChedan 提供的版本为例，你会拿到一个类似 <code>chedan-image2-skill.zip</code> 的压缩包。</p>
    <p>如果你使用的是其他来源的 skill，也要确认它至少包含 <code>SKILL.md</code>、脚本文件和必要的 agent 配置。缺少这些文件时，Codex 无法识别或调用该技能。</p>
  </div>
  <figure class="codex-shot">
    <img src="/images/image2-codex/image2-skill-package.png" alt="chedan-image2-skill 压缩包">
    <figcaption>准备 Image2 专用 skill 压缩包</figcaption>
  </figure>
</div>

## 2. 安装 Skill 并重启 Codex

<div class="codex-step-card image2-step-card">
  <div class="codex-step-copy">
    <span>Step 02</span>
    <h3>把 skill 交给 Codex 安装</h3>
    <p>在 Codex 对话中告诉它 skill 所在目录，并让它安装。例如：<code>请你安装目录 E:\Documents\codex\image2 下的 chedan-image2 skill</code>。</p>
    <p>安装完成后，重点看两件事：一是安装位置是否在 <code>C:\Users\你的用户名\.codex\skills\chedan-image2</code>；二是 Codex 是否提示 <code>Restart Codex to pick up new skills.</code>。看到这个提示后，需要完全退出并重新打开 Codex。</p>
  </div>
  <figure class="codex-shot">
    <img src="/images/image2-codex/image2-install-skill.png" alt="Codex 安装 chedan-image2 skill 并提示重启">
    <figcaption>安装成功后重启 Codex，让新 skill 生效</figcaption>
  </figure>
</div>

<div class="codex-check-panel">
  <h3>为什么必须重启</h3>
  <p>Codex 通常在启动时读取可用 skills。刚安装完如果不重启，对话框里可能还看不到 <code>chedan-image2</code>，或者调用时仍然按旧技能列表执行。</p>
</div>

## 3. 在对话中指定 Chedan Image2

<div class="codex-step-card image2-step-card">
  <div class="codex-step-copy">
    <span>Step 03</span>
    <h3>用 @ 或 / 选择 Image2 skill</h3>
    <p>重启 Codex 后，在输入框使用 <code>@</code> 或 <code>/</code> 打开技能列表，选择 <code>Chedan Image2</code>。然后直接写你的图片需求。</p>
    <p>如果是从文字生成图片，说明主体、构图、风格、尺寸和用途即可。如果是编辑图片，先上传参考图，再说明要保留什么、修改什么、输出成什么风格。</p>
  </div>
  <figure class="codex-shot">
    <img src="/images/image2-codex/image2-select-skill.png" alt="在 Codex 输入框中选择 Chedan Image2 skill">
    <figcaption>在技能列表中选择 Chedan Image2</figcaption>
  </figure>
</div>

<div class="codex-code-block">
  <span>提示词示例</span>
  <pre><code>@Chedan Image2 请生成一张用于论文的线粒体靶向治疗科研机制示意图。画面展示治疗纳米平台进入肿瘤细胞后，选择性定位到线粒体，并引发 ROS 升高、线粒体膜电位下降、ATP 下降和细胞凋亡。整体风格简洁、专业，适合论文发表，浅色背景，蓝色和青绿色为主色，红色用于强调关键变化。</code></pre>
</div>

## 4. 创建并提供 Image2 分组 Key

<div class="codex-step-card image2-step-card">
  <div class="codex-step-copy">
    <span>Step 04</span>
    <h3>按提示发送 image 分组 Key</h3>
    <p>当 Codex 提示当前对话还没有可用的 <code>image</code> 分组 API Key 时，打开 <a href="https://www.chedankj.com/" target="_blank" rel="noopener noreferrer">chedankj.com</a>，新建一个分组为 <code>image</code> 的 Key。</p>
    <p>把新建的 Key 发送回当前 Codex 对话即可。这个 Key 会用于当前命令的环境变量，不会写入你的项目文件。后续同一个对话继续使用 Image2 时，不需要重复提供。</p>
  </div>
  <figure class="codex-shot">
    <img src="/images/image2-codex/image2-send-key.png" alt="Codex 提示创建 image 分组 Key 并发送脱敏密钥">
    <figcaption>创建 image 分组 Key 后发回当前对话</figcaption>
  </figure>
</div>

<div class="codex-note">
  <strong>常见误区</strong>
  <p>不要拿普通文本模型分组的 Key 直接调用 Image2。本文流程需要的是 <code>image</code> 分组 Key，否则可能出现认证通过但无法生成图片、模型不可用或接口不匹配的问题。</p>
</div>

## 5. 等待图片生成并检查结果

<div class="codex-step-card image2-step-card image2-result-card">
  <div class="codex-step-copy">
    <span>Step 05</span>
    <h3>确认输出文件和预览效果</h3>
    <p>发送 Key 后，Codex 会继续执行生成任务。完成后它会返回图片保存路径，并在对话中展示预览。你可以打开图片检查画面是否符合用途，再继续要求它修改提示词、重生成或基于结果做二次编辑。</p>
    <p>下面示例是一张靶向药机制图，画面包含纳米颗粒进入肿瘤细胞、定位线粒体、ROS 升高、膜电位下降、ATP 下降和凋亡激活等关键过程。</p>
  </div>
  <figure class="codex-shot">
    <img src="/images/image2-codex/image2-result-example.png" alt="Image2 生成的线粒体靶向治疗机制图示例">
    <figcaption>Image2 生成结果示例：线粒体靶向治疗机制图</figcaption>
  </figure>
</div>

## 使用建议

<div class="codex-check-grid image2-advice-grid">
  <section>
    <strong>先说明用途</strong>
    <p>例如论文机制图、公众号封面、课程插图或产品示意图。用途会影响构图、文字密度和风格。</p>
  </section>
  <section>
    <strong>明确输出规格</strong>
    <p>需要横图、竖图、方图、透明背景或高分辨率时，直接写进提示词，不要等出图后再猜。</p>
  </section>
  <section>
    <strong>分清生成和编辑</strong>
    <p>没有参考图时走 generation；需要保留人物、产品、版式或局部元素时，上传参考图后走 edit。</p>
  </section>
  <section>
    <strong>不要公开 Key</strong>
    <p>截图发给别人前，先检查是否露出 <code>sk-</code> 开头的密钥、后台余额或其他账号信息。</p>
  </section>
</div>

## 常见问题

<div class="codex-faq">
  <details open>
    <summary>安装后在技能列表里找不到 Chedan Image2 怎么办？</summary>
    <p>先完全退出 Codex 再重新打开。如果仍然没有，检查 skill 是否安装在 <code>C:\Users\你的用户名\.codex\skills\chedan-image2</code>，并确认目录下存在 <code>SKILL.md</code>。</p>
  </details>
  <details>
    <summary>为什么每个新对话都要重新发一次 Key？</summary>
    <p>Image2 skill 会在当前对话中临时读取 Key。这样可以避免把密钥写入项目文件或公开文档，但新对话没有上一条对话的临时环境，所以需要重新提供。</p>
  </details>
  <details>
    <summary>图片生成失败应该先检查什么？</summary>
    <p>优先检查 Key 是否属于 <code>image</code> 分组、账户余额是否充足、提示词是否被误识别为普通聊天、以及当前对话是否已经明确指定 <code>Chedan Image2</code> skill。</p>
  </details>
  <details>
    <summary>想基于图片继续修改怎么做？</summary>
    <p>把生成结果或参考图上传到 Codex 对话里，再指定 <code>Chedan Image2</code>，说明需要保留的部分和需要修改的部分，例如“保留主体构图，只把背景换成白色，并减少文字元素”。</p>
  </details>
</div>

<p><a href="/tutorials/">返回技巧 / 方法教程</a></p>
