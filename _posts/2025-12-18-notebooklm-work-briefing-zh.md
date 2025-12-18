---
title: "NotebookLM职场用法：用内部文档与会议纪要生成「1页简报」"
permalink: /zh/notebooklm-work-briefing/
translations:
  ja: /ja/notebooklm-work-briefing/
  en: /notebooklm-work-briefing/
date: 2025-12-18 09:00:00 +0900
categories: ["AI Tools", "Productivity", "Workflows"]
lang: zh
description: "用Google NotebookLM把会议纪要、PRD、报告和链接等内部资料，基于证据（引用）进行整理，快速生成可用于决策的一页简报，并讲解与Google Workspace的整合流程。"
og_title: "NotebookLM职场用法：会议纪要10分钟生成一页简报"
og_description: "用NotebookLM把决策点、未决事项、风险与下一步行动按引用证据自动整理，并提供Workspace协同与幻灯片交付的实用工作流。"
---

会议越多，“负责整理的人”越容易吃亏——因为时间都被写纪要、补上下文、追行动项占走了。  
[Google NotebookLM](https://notebooklm.google/) 能基于你提供的资料（会议纪要、企划/PRD、报告、链接等），以 **证据（引用）为依据** 进行总结、结构化整理与问答，因此在职场实务里特别强。

本文聚焦 **“工作：用内部文档/会议资料做简报（Briefing）”**：先解释NotebookLM是什么 → 再给出可直接套用的简报工作流 → 最后说明如何在 [Google Workspace](https://workspace.google.com/) 生态里把它串起来，从资料收集到共享/汇报一次搞定。

![Notebook LM logo](/assets/img/post/notebookLM.png)

---

## 1) NotebookLM是什么？

[NotebookLM](https://notebooklm.google/) 常被称作“AI笔记/研究伙伴”，但从职场角度看更简单：  
它是一个把多份内部资料放进同一个“笔记本（notebook）”，然后在其中生成 **总结、结构化笔记、Q&A、以及可直接用于汇报的一页简报** 的工具。

它最关键的价值在于：回答基于 **你提供的来源资料（sources）**，并且便于核对“为什么这么说”。  
对于会议纪要、报告等“不能随便改口”的文档工作，这一点非常重要。

### 适合做简报的资料类型（建议放入）

简报的质量=资料的质量。常见组合如下：

- 会议纪要（手写记录/录音转写摘要）、议程、会前共享资料
- 企划书/PRD/政策文档/规范与指南
- 周报/月报/OKR/业绩与数据报告
- 参考链接（内部Wiki/外部文章/官方文档）

相关帮助文档： [NotebookLM Help](https://support.google.com/notebooklm/?hl=en)

---

## 2) 为什么它特别适合做“简报（Briefing）”？

简报本质上是在一堆资料里提炼“现在最需要的东西”。NotebookLM能把下面4件事做得更快。

### ① 不只是“缩短文字”，而是“决策型整理”

不是简单摘要，而是把内容整理成会议后真正会用到的结构：  
**决策点 / 未决事项 / 风险 / 下一步行动（Action）**。

### ② 提问就是工作（追问能快速提升质量）

你可以反复追问：  
“为什么这么决定？”、“证据在哪一句？”、“A方案 vs B方案成本差多少？”  
这种迭代会把简报从“泛泛总结”变成“可落地的决策文档”。

### ③ 输出形态多样

通过NotebookLM的Studio功能，可以生成报告式整理或“幻灯片式”的输出。  
示例： [Generate a Slide Deck in NotebookLM](https://support.google.com/notebooklm/answer/16757456?hl=en)

### ④ 减少“整理负责人”的负担

会后最难的是把“只有少数人懂的上下文”写进文档。  
NotebookLM能从来源资料组合里提取上下文，让整理时间明显缩短。

---

## 3) 实务简报工作流（可直接照做）

### Step 1. 按“会议系列/项目”拆分笔记本

简报往往需要持续更新、不断累积。建议这样分：

- **项目笔记本**：持续加入PRD/政策/周报/问题日志
- **会议系列笔记本**：周会/月会等重复会议的资料集中管理
- **管理层简报笔记本**：只存放对上汇报的精简材料

### Step 2. 按“简报需要的顺序”放入资料

推荐顺序（实际体验会更稳定）：

**(1) 目标/背景文档 → (2) 最新会议纪要 → (3) 数据/现状报告 → (4) 相关政策/规范**

如果要做数据型汇报，把关键指标的来源报告也放进来，之后就能要求：  
_“把核心KPI用表格总结出来。”_

### Step 3. 第一句就固定“简报格式”

先把输出结构钉住，后续迭代会很省心：

```text
你是一名（角色：PM/团队负责人/执行人员）。
仅基于本笔记本中的来源资料，写一份「1页简报」。

[简报格式]
1) 结论（3行）
2) 背景/上下文（5行）
3) 决策事项（表格）
4) 未决/风险（表格：风险、影响、应对、负责人）
5) 下一步行动（表格：To-do、负责人、截止日期）
6) 仍需确认的问题（5个）

规则：禁止猜测；每个关键点请同时标注对应的证据句/章节。
```

### Step 4. 运行“简报更新循环”

简报很少一次就完美。实务上这套循环最快：

1. 生成第一版简报
2. 追问“是否遗漏了风险/决策点？”并补全
3. 需要时追加资料（邮件摘要、补充文档、政策更新）
4. 输出最终版：**团队共享版 / 管理层汇报版**（两套精简程度不同）

---

## 4) 可复制粘贴的提示词包（管理层/团队/项目）

### ① 管理层汇报：5分钟简报

```text
仅基于来源资料，生成一份「管理层5分钟简报」。
- 句子要短；数字与结论优先
- 争议点明确标注为“需要决策”

[输出]
1) 3行结论
2) 本周变化（Top 5）
3) 需要决策的事项（各方案优缺点 + 推荐方案）
4) 风险Top 3（影响/应对/需要的支持）
5) 下周计划（5行）
```

### ② 团队共享：以决策与行动项为核心的会议总结

```text
仅基于来源资料，写一份团队共享的会议总结。

[输出]
- 决策事项（编号列表）
- 变更点（聚焦对工作的影响）
- 行动项（表格：任务/负责人/截止日期/优先级）
- 风险与问题（表格：现象/原因/下一步）
- 链接清单（从来源里挑5个关键文档）
```

### ③ 项目运营：自动生成“问题日志（Issue Log）”

```text
从来源资料中提取所有项目问题，整理为“问题日志（Issue Log）”。
表格字段：问题、发现日期、影响范围、原因（禁止猜测）、当前状态、下一步、负责人。
再选出“最可能近期升级的3个问题”，并给出理由（仅基于来源资料）。
```

---

## 5) 在Google生态里更顺滑的连接方式

NotebookLM单独用已经不错，但在 [Google Workspace](https://workspace.google.com/) 里配合使用，
“资料收集 → 写简报 → 共享/汇报”会更顺畅。

### Drive → NotebookLM：集中收集资料

把会议/项目资料整理到 [Google Drive](https://workspace.google.com/products/drive/)，
再把 [Docs](https://workspace.google.com/products/docs/) / [Slides](https://workspace.google.com/products/slides/) 作为来源加入NotebookLM，能有效减少“资料丢失/版本混乱”。

### Docs：把简报沉淀为“最终文档”

很多简报最终都会变成团队共识文档。把最终版粘贴到Google Docs，并套用团队模板（格式），周周复用会更轻松。

### Gmail/Chat：需要上下文的团队更有用

如果团队沟通主要在邮件/聊天里，把关键消息的摘要作为来源加入，可以把“为什么这么决定”留在简报里。
（注意权限与组织政策。）

管理员参考（组织内启用/停用）：
[NotebookLM on/off for Workspace admins](https://support.google.com/a/answer/15239506?hl=en)

---

## 6) PPT（幻灯片）能自动化到什么程度？

结论：**NotebookLM可以生成“幻灯片式的Slide Deck”**。
但如果你期待“100%套用公司模板并直接输出完美.pptx”，可能会有落差。
NotebookLM更擅长生成“可用于演示的内容结构”，最终的设计/模板规范通常还需要一点点编辑。

### NotebookLM：生成Slide Deck（内容）

在Studio里选择 **Slide Deck**，就能基于来源生成演示文稿，并提供展示/下载（常见为PDF）的流程说明。
指南： [Generate a Slide Deck in NotebookLM](https://support.google.com/notebooklm/answer/16757456?hl=en)

### Google Slides（+Gemini）：想保留公司模板/主题时

如果公司模板必须严格遵守，[Gemini in Google Slides](https://support.google.com/docs/answer/14207419?hl=en) 往往更稳。
帮助文档说明，新生成的幻灯片会以 **当前应用的主题（theme）** 为基础。
所以做法是：先打开已经套好公司主题的Slides，再用“Ask Gemini”生成/编辑内容，风格一致性更好。

推荐组合（实务里最省心）：
**NotebookLM确定简报/大纲（内容） → Google Slides套模板并做最后排版**

---

## 7) 安全与共享检查点

处理内部资料时，“共享到哪里”最重要。
从Workspace角度，NotebookLM有官方的管理与使用说明。

* 产品页面（概览）：[NotebookLM for Workspace](https://workspace.google.com/products/notebooklm/)
* 管理/政策（管理员）：[NotebookLM settings for admins](https://support.google.com/a/answer/15239506?hl=en)

**实务建议**：涉及客户信息/敏感信息的文档，务必遵循组织安全策略；生成共享链接前一定要复核权限。

---

## FAQ

### Q1. 简报质量不稳定，先改什么？

通常是 **来源资料组合** 的问题。只有会议纪要，没有目标/背景文档，简报容易变浅。
建议按 **(1) 目标文档 → (2) 最新纪要 → (3) 数据报告** 重新组织。

### Q2. 可以把周报固定成同一种格式自动生成吗？

可以。第一条提示词里把格式固定住，每周只追加新纪要/新报告，然后问“与上周相比有什么变化？”就是最有效的循环。

### Q3. 我想一次就把幻灯片做完。

NotebookLM强在“内容生成”。如果模板规范很严格，先在Slides套好主题，再用 [Gemini in Slides](https://support.google.com/docs/answer/14207419?hl=en) 生成/编辑会更稳。

---

## 总结

把NotebookLM当成 **“职场简报工具”** 来用，关键就三件事：

**资料收集要干净（Drive） → 简报格式要固定 → 用循环持续更新**

只要这三步跑顺，会议整理与报告撰写的时间会明显下降。

开始： [NotebookLM](https://notebooklm.google/)
帮助： [NotebookLM Help](https://support.google.com/notebooklm/?hl=en)
