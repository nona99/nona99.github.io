---
title: "如何在本地运行 Z-Image Turbo：面向 ComfyUI 用户的完整指南"
permalink: /zh/z-image-local-guide/
date: 2025-12-14 09:00:00 +0900
categories: ["AI Tools", "Image Generation"]
tags: ["Z-Image", "Z-Image Turbo", "ComfyUI", "Local AI", "Diffusion Models", "AI Image Generation", "Tutorial"]
lang: zh
description: "一步一步教你如何在本地通过 ComfyUI 安装并运行 Z-Image Turbo，涵盖模型文件、环境配置、工作流加载以及图片生成流程。"

# Open Graph / SEO
og_title: "Z-Image Turbo 本地环境搭建指南 —— 在你自己的电脑上进行快速、私密的 AI 图像生成"
og_description: "学习如何在本地运行 Z-Image Turbo，而不依赖任何云端服务。本指南介绍 ComfyUI 安装、所需模型文件、工作流加载方法，以及创作者实用技巧。"
---

到了 2025 年，**Z-Image Turbo** 在 AI 社区迅速走红。  
由于它可以完全在本地电脑上运行——不需要云端计费，也不需要账号登录——所以能够实现**快速、高画质、同时保护隐私的图像生成**。

Z-Image 是由阿里巴巴系研究团队发布的 **60 亿参数图像生成基础模型（foundation model）**，可以根据文本提示（prompt）生成高质量图片，并支持编辑、润色等工作流程。  
([Hugging Face](https://huggingface.co/papers/2511.22699))

本指南将带你了解**如何在本地安装并使用 Z-Image，而无需注册任何网站账户**，重点介绍目前最常用的组合：**ComfyUI + Z-Image Turbo**。  
([Comfy Anonymous](https://comfyanonymous.github.io/ComfyUI_examples/z_image/))

![z-image](/assets/img/post/z-image-tutorial.png)

---

## 为什么选择 Z-Image？—— 核心优势概览

下面是 Z-Image / Z-Image Turbo 系列的几个关键优点：

- **60 亿参数的单流扩散 Transformer 结构（Single-Stream Diffusion Transformer，S3-DiT）**  
  → 采用统一架构，将文本、图像条件和噪声整合到同一序列中进行处理，因此在 **模型规模相对较小的前提下，仍能提供高性能和快速推理速度**。  
  ([Tongyi Mai](https://tongyi-mai.github.io/Z-Image-blog/))

- **Z-Image Turbo = Z-Image 的蒸馏版本**  
  → 在保持画质的同时压缩 NFE（步数），实现 **大约 8 步就能生成效果不错的图像**。  
  ([Hugging Face](https://huggingface.co/docs/diffusers/main/api/pipelines/z_image))

- **对消费级 GPU 友好**  
  → 官方设计目标是在约 16GB VRAM 的显卡上流畅运行；结合优化引擎（如 stable-diffusion.cpp），**甚至 4GB 显存的环境也能找到可用实现**。  
  ([Hugging Face](https://huggingface.co/docs/diffusers/main/api/pipelines/z_image))

- **写实效果与文字渲染能力强**  
  → 在海报、横幅、产品 Mockup 等场景中表现出色，尤其擅长英语 / 中文文字的绘制。  
  ([Hugging Face](https://huggingface.co/docs/diffusers/main/api/pipelines/z_image))

简单来说：**在本地图像生成模型中，Z-Image 在速度、画质与显存占用之间提供了极佳的平衡。**  
([Stable Diffusion Art](https://stable-diffusion-art.com/z-image-wan-2-2/))

---

## 在本地运行 Z-Image 的两种主流方式

Z-Image 是一个 *模型*，而不是云服务，因此你需要选择一个前端 UI / 推理引擎来运行它。最常见的两种方式是：

1. **ComfyUI + Z-Image Turbo（最适合多数用户的节点式界面）**  
   ([Comfy Anonymous](https://comfyanonymous.github.io/ComfyUI_examples/z_image/))

2. **stable-diffusion.cpp + Z-Image（C++ 后端，支持 GGUF，适合低显存环境）**  
   ([GitHub](https://github.com/leejet/stable-diffusion.cpp))

对大部分读者来说，**ComfyUI** 是最容易上手的方案，所以下面的详细步骤都会基于 ComfyUI 工作流来讲解。

---

## 1. 系统要求 —— 你的电脑带得动吗？

以现代扩散模型来说，Z-Image 已经算比较“轻量”，但本地运行仍然需要一些基础配置。

### 最低推荐配置（ComfyUI 环境）

- **GPU：** NVIDIA 8GB 显存或以上（12GB+ 体验更好）  
- **操作系统：** Windows 10/11 或 Linux  
- **存储空间：** 预留数 GB，用于存放模型文件  
- **驱动 / CUDA：** 建议保持为较新版本  
- **Python / Git：** 安装 ComfyUI 时需要（Windows 也可以使用官方脚本）  
  ([Next Diffusion](https://www.nextdiffusion.ai/tutorials/z-image-turbo-fast-uncensored-image-generation-comfyui))

如果显卡性能较弱，或者本地部署有困难，  
也可以选择 **“云端 GPU + ComfyUI”** 的方案（例如 RunPod 等）。  
([Next Diffusion](https://www.nextdiffusion.ai/tutorials/z-image-turbo-fast-uncensored-image-generation-comfyui))

---

## 2. 安装 ComfyUI（快速版本）

ComfyUI 是一个 **基于节点的 Stable Diffusion / 现代图像模型前端界面**，以灵活、性能好而被广泛使用。  
([Next Diffusion](https://www.nextdiffusion.ai/tutorials/z-image-turbo-fast-uncensored-image-generation-comfyui))

### 基本安装流程

1. 从 GitHub 克隆 ComfyUI 仓库  
2. 使用 `python -m venv venv` 创建虚拟环境（或使用官方脚本）  
3. 通过 `requirements.txt` 安装依赖  
4. 使用 `python main.py` 启动服务  
5. 在浏览器中访问 `http://localhost:8188` 打开 UI

（你也可以单独写一篇 ComfyUI 安装教程，然后在这里放链接。）

---

## 3. 下载 Z-Image Turbo 模型文件并放到正确目录

接下来，需要把 **Z-Image Turbo 模型** 加载进 ComfyUI。  
官方的 ComfyUI 示例文档详细说明了每个文件应该放在什么位置：  
([Comfy Anonymous](https://comfyanonymous.github.io/ComfyUI_examples/z_image/))

### 必需文件（以 ComfyUI_examples 为准）

根据示例，Z-Image Turbo 通常需要以下几个部分：

1. **文本编码器（Text Encoder）**  
   - 示例：`qwen_3_4b.safetensors`  
   - 路径：`ComfyUI/models/text_encoders/`

2. **扩散模型（主模型）**  
   - 示例：`z_image_turbo_bf16.safetensors`  
   - 路径：`ComfyUI/models/diffusion_models/`

3. **VAE（推荐使用 Flux 1 系列 VAE）**  
   - 示例：`ae.safetensors`  
   - 路径：`ComfyUI/models/vae/`

大多数文件都可以在 ComfyUI 示例页面或 Hugging Face 上找到下载链接。  
([Comfy Anonymous](https://comfyanonymous.github.io/ComfyUI_examples/z_image/))

在博客中，你可以整理一张表，把 **下载链接 + 目标文件夹** 列出来，读者会非常好跟。

---

## 4. 在 ComfyUI 中加载 Z-Image Turbo 工作流

只有模型文件还不够，你还需要加载一个 **工作流 JSON 文件**，其中包含了合适的节点和连接方式。

教程和官方示例仓库一般会提供类似：  
`z_image_turbo_workflow.json` 的文件。  
在 ComfyUI 中通过 **Load → 选择 JSON 文件** 就能打开。  
([Next Diffusion](https://www.nextdiffusion.ai/tutorials/z-image-turbo-fast-uncensored-image-generation-comfyui))

### 工作流加载步骤

1. 下载 Z-Image Turbo 工作流 JSON  
2. 将其保存到 `ComfyUI/custom_nodes/` 或 `ComfyUI/workflows/` 目录下  
3. 在浏览器中打开 ComfyUI  
4. 点击 **Load → 选择对应的 JSON**  
5. 看到一整张包含 Z-Image Turbo 节点的图形工作流后，即表示已就绪

在 NextDiffusion 的教程中，该工作流已经预先配置好了采样器、VAE 连接以及推荐设置，所以**你只需要填好 prompt 然后点击运行即可**。  
([Next Diffusion](https://www.nextdiffusion.ai/tutorials/z-image-turbo-fast-uncensored-image-generation-comfyui))

---

## 5. 生成第一张图片 —— 实战流程

加载好工作流之后，就可以真正开始出图了。

### 1）输入 Prompt

在 Z-Image Turbo 节点或对应的文本输入节点中输入提示词：  
([Next Diffusion](https://www.nextdiffusion.ai/tutorials/z-image-turbo-fast-uncensored-image-generation-comfyui))

```text
minimalist flat illustration, bright pastel colors, a humanoid robot and a human engineer working together in a clean futuristic office, soft lighting, 16:9
````

### 2）检查关键参数

默认设置通常包括：
([Next Diffusion](https://www.nextdiffusion.ai/tutorials/z-image-turbo-fast-uncensored-image-generation-comfyui))

* **Steps：** 约 6–10
* **分辨率：** 768×768 或 1024×576（16:9）
* **CFG Scale：** 4–7
* **Sampler：** 按教程推荐的采样器选择

在博客中，你可以额外做一张 **“推荐参数表”**，读者会更直观。

### 3）点击 Queue / Generate

使用 *Queue Prompt* 或工作流中的运行按钮即可开始推理。
([Next Diffusion](https://www.nextdiffusion.ai/tutorials/z-image-turbo-fast-uncensored-image-generation-comfyui))

Z-Image Turbo 的目标就是 **极快的推理速度**，通常在合适的 GPU 上 **几秒内就能出图**。
([Hugging Face](https://huggingface.co/docs/diffusers/main/api/pipelines/z_image))

### 4）查看并保存结果

* 生成的图片会显示在右侧结果面板
* 可以右键 → Save，或通过节点设置自动保存
* 适用于博客封面、正文插图、社交媒体配图等场景

---

## 6. 面向博主 / 创作者的 Z-Image 使用技巧

本地 Z-Image 的最大优势是 **“实验成本极低”**。
对于内容创作者，可以参考以下几种实践方式：

1. **统一缩略图比例为 16:9**

   * 常用分辨率：1280×720、1920×1080
   * 在 prompt 中加上 `16:9, clean background, minimal composition` 等关键词

2. **文字尽量后期用设计工具添加**

   * 虽然 Z-Image 的文字渲染不错，
   * 但标题 / 文案放在 Canva、Figma 等工具中更方便维护。

3. **把 Prompt 当成“风格预设”复用**

   * 例如 “AI 分析系列封面 Prompt”
   * 或 “教程类文章封面 Prompt”
     只要改中间的主题词，就可以快速批量生成视觉风格统一的素材。

4. **本地模式几乎没有内容审查限制**
   → 适合研究和创作自由度高的场景
   → 但对外发布时仍需遵守 **版权、当地法律以及平台政策**，尤其是面向多国家受众的博客。

---

## 7. 使用 stable-diffusion.cpp 运行 Z-Image（低显存方案）

简单总结一下这一方案的特点：

* **stable-diffusion.cpp** 是一个 C++ 实现的扩散模型推理引擎
* 内置对 Z-Image 的支持代码与配置
* 让 **约 4GB 显存的设备也有机会跑起 Z-Image**
  ([GitHub](https://github.com/leejet/stable-diffusion.cpp))

这类环境通常以命令行 / 轻量 GUI 为主，更适合**硬件配置非常有限**的用户。

---

## 总结 —— “真正意义上的本地图像模型，无需注册登录”

最后再回顾一下重点：

* Z-Image 是一个 **开源的图像生成基础模型**
* Z-Image Turbo 在 **速度、画质和显存占用** 之间做到了非常好的平衡
* 结合 ComfyUI，你可以在本地搭建一套 **快速、私密的 AI 图像生成工作流**，为博客封面、社交媒体内容以及各种创意项目提供高质量素材
  ([Comfy Anonymous](https://comfyanonymous.github.io/ComfyUI_examples/z_image/))
