---
title: "Just Changing the Prompt Changes the Result: 20 ChatGPT Photoshop Prompt Recipes"
slug: "chatgpt-photoshop-prompt-recipes"
date: 2025-12-17 12:00:00 +0900
categories: ["AI Tools", "Creative Tools"]
tags: ["ChatGPT","Photoshop","Adobe","Adobe Express","Adobe Acrobat","AI image editing","prompting","prompt recipes","image retouching","background removal","thumbnail design","Apps in ChatGPT","Connectors","creator workflow","content creation"]
lang: en
description: "Copy-and-paste prompt recipes for using Photoshop in ChatGPT: 20 practical prompts for background cleanup, tone grading, retouching, and thumbnail optimization—plus setup tips and fast revision lines."

# Open Graph / SEO
og_title: "20 ChatGPT Photoshop Prompt Recipes (Copy & Paste)"
og_description: "Get better edits by writing better prompts: 20 copy-and-paste recipes for Photoshop in ChatGPT, plus quick revision lines and workflow tips."
---

Since people started saying “Photoshop works inside ChatGPT,” the fastest-growing searches haven’t been “feature overviews.” They’ve been **“What should I say to get the result I want?”** With the same photo, some users get a clean, polished edit—while others end up with something overly smudged or obviously artificial. The reason is simple: **the quality is driven less by the ‘tool’ and more by the ‘instruction style’ (your prompt).**

Recently, Adobe announced a way to use **Photoshop, Adobe Express, and Acrobat** inside ChatGPT, and Photoshop in particular emphasizes a workflow where you **describe the edit in plain language and then apply adjustments/effects**. (Official guide: [Adobe Help – Photoshop for ChatGPT](https://helpx.adobe.com/photoshop/web/app-integrations/use-chatgpt-to-edit-images.html), announcement: [Adobe Newsroom](https://news.adobe.com/news/2025/12/adobe-photoshop-express-acrobat-chatgpt), coverage: [Reuters](https://www.reuters.com/technology/adobe-plugs-photoshop-acrobat-tools-into-chatgpt-2025-12-10/), [The Verge](https://www.theverge.com/news/841369/chatgpt-apps-adobe-photoshop-acrobat-express))

This post isn’t a news-style “It works / it doesn’t work” roundup. Instead, it’s built around **20 prompt recipes you can copy and paste immediately**. Each recipe is designed with three priorities: **natural results (minimal “AI look”), speed (shorter repetitive work), and repeatability (re-creating similar outputs reliably).**


![ChatGPT Photoshop prompt recipes](/assets/img/post/prompt.png)

---

## 1) One-minute setup: how prompts “stick” in ChatGPT Photoshop

When using Photoshop through ChatGPT, the most important thing isn’t the **name of a feature**—it’s describing the outcome **with review criteria included**. For example, if you only write “blur the background,” the model may blur too aggressively or create awkward edges around the subject. But if you add constraints like **strength, priorities, and don’ts**—for example: “Keep the subject outline clean, preserve hair edges naturally, soften the background by about 20–30%”—the results become noticeably more stable.

Another key is not expecting “perfect in one shot.” This workflow is built for **first pass → refinement**. The first prompt sets direction; the second prompt adjusts the intensity (“more/leading/less”) precisely. (OpenAI is expanding this overall “apps/connectors/execution inside chat” direction through concepts like [Apps in ChatGPT](https://openai.com/index/introducing-apps-in-chatgpt/), [Connectors](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt), and the [Apps SDK](https://help.openai.com/en/articles/12503483-apps-in-chatgpt-and-the-apps-sdk).)

---

## 2) Prep: connecting “Apps & Connectors” + basic configuration tips

Getting ready is typically straightforward. In ChatGPT, you’ll connect via **Settings → Apps & Connectors → Adobe Photoshop**, and official documentation also describes selecting **Adobe Photoshop via the “+” icon** in the chat input. (Path: [Adobe Help – Photoshop for ChatGPT](https://helpx.adobe.com/photoshop/web/app-integrations/use-chatgpt-to-edit-images.html), getting started: [Adobe Blog](https://blog.adobe.com/en/publish/2025/12/10/edit-photoshop-chatgpt))

To make prompts behave consistently, remember two rules:

First, before describing what to change, describe what must be preserved.  
Examples: “Preserve skin texture,” “Do NOT alter product label text,” “Do NOT change facial structure.”

Second, express intensity in numbers, ratios, or ranges whenever possible.  
Examples: “Blur 20–30%,” “Exposure +0.2,” “Lower saturation by ~10%.”

With that, let’s move into the practical recipes.

---

## 3) 20 ChatGPT Photoshop prompt recipes

All prompts below start with **“Adobe Photoshop,”** on purpose. In many setups you can simply select the app and paste the prompt, but naming the app helps keep the editing flow consistent. Example invocation patterns are also mentioned in coverage from [The Verge](https://www.theverge.com/news/841369/chatgpt-apps-adobe-photoshop-acrobat-express) and [TechCrunch](https://techcrunch.com/2025/12/10/adobe-brings-photoshop-express-and-acrobat-features-to-chatgpt/).

### A. Background & composition cleanup (Recipes 01–05)

**Recipe 01 | Natural background blur (not too strong)**  
- Background blur fails less often when you include both intensity **and** “don’t” constraints (halo / fake bokeh).

> Adobe Photoshop, keep the subject sharp and blur only the background naturally (20–30% strength). Preserve hair edges and avoid artificial bokeh halos.

**Recipe 02 | Remove clutter, keep the original mood**  
- A single line like “keep the original atmosphere” reduces the chance the background looks “re-generated.”

> Adobe Photoshop, remove distracting background elements while keeping the original atmosphere. Do not change the subject’s shape or facial features.

**Recipe 03 | Clean cutout + studio-style background**  
- Great for blog thumbnails and product shots. Specify background tone and shadow type (soft shadow).

> Adobe Photoshop, remove the background cleanly and replace it with a soft light-gray studio backdrop with subtle shadow. Keep edges crisp.

**Recipe 04 | Fix perspective/level subtly (no overcorrection)**  
- Adding “subtly” and “no distortion” prevents aggressive correction.

> Adobe Photoshop, straighten the image and correct perspective subtly. Keep it natural—no “wide-angle” distortion.

**Recipe 05 | Add negative space for thumbnails**  
- Specify the direction where you want extra space to make the layout intent obvious.

> Adobe Photoshop, extend the canvas to create more negative space on the left side for a thumbnail layout. Match background texture seamlessly.

---

### B. Tone & color grading (Recipes 06–10)

**Recipe 06 | Bright, clean “white tone”**  
- Whites can blow out easily, so explicitly protect highlights.

> Adobe Photoshop, brighten the image slightly, reduce yellow cast, and make whites look clean without blowing highlights.

**Recipe 07 | Warm tone—without turning orange**  
- Prevents the most common warm-tone failure (too much orange).

> Adobe Photoshop, warm up the color temperature a bit, but keep skin tones natural (no orange). Lower saturation by ~10% if needed.

**Recipe 08 | Calm cool tone (tech/report vibe)**  
- “Blacks not crushed” helps preserve detail.

> Adobe Photoshop, shift the overall tone slightly cooler and add a clean, modern look. Keep contrast moderate and blacks not crushed.

**Recipe 09 | More contrast, keep texture**  
- “No plastic skin” helps avoid over-smoothing.

> Adobe Photoshop, increase contrast subtly while preserving fine textures. Avoid over-sharpening and avoid plastic skin.

**Recipe 10 | Fix lighting on subject only**  
- Good when you want the background unchanged.

> Adobe Photoshop, even out lighting on the subject only. Keep the background unchanged. Preserve natural shadows.

---

### C. Portrait & product retouch (Recipes 11–15)

**Recipe 11 | Natural skin cleanup (beginner-friendly)**  
- Always include “preserve real skin texture.”

> Adobe Photoshop, reduce blemishes and redness gently while keeping real skin texture. No heavy smoothing.

**Recipe 12 | Soften under-eye shadows (no “plastic surgery” look)**  
- “Do not change facial structure” prevents unintended face reshaping.

> Adobe Photoshop, soften under-eye shadows slightly without changing facial structure. Keep it subtle and realistic.

**Recipe 13 | Clean flyaway hair (keep realism)**  
- Over-removing hair looks composited; “preserve detail” is key.

> Adobe Photoshop, clean up stray hair around the edges while keeping the hairstyle natural. Preserve hair detail.

**Recipe 14 | Product photo: protect label text/logo**  
- Strong constraints keep branding from being altered.

> Adobe Photoshop, enhance the product clarity and lighting, but do NOT alter any label text or logo. Keep edges sharp and true to the original.

**Recipe 15 | Reduce harsh reflections (keep it glossy)**  
- Useful for shiny products with blown highlights.

> Adobe Photoshop, reduce harsh reflections on the product surface while keeping it glossy and realistic.

---

### D. Styling & output optimization (Recipes 16–20)

**Recipe 16 | Minimal illustration-like finish (avoid extreme stylization)**  
- “Avoid heavy stylization” prevents full transformation into a different artwork.

> Adobe Photoshop, give the image a clean, minimalist illustration-like finish while keeping key details recognizable. Avoid heavy stylization.

**Recipe 17 | “Premium ad” look (no overprocessing)**  
- The line “not over-processed” protects realism.

> Adobe Photoshop, create a premium commercial look: slightly richer contrast, clean whites, subtle vignette. Keep it realistic and not over-processed.

**Recipe 18 | Optimize for 16:9 thumbnails (readable at small size)**  
- Include the review criterion: “readable when small.”

> Adobe Photoshop, optimize for a 16:9 thumbnail: make the subject pop, reduce background clutter, keep fine details readable at small size.

**Recipe 19 | Suggest crops for 1:1 and 9:16 (composition stays natural)**  
- Asking for “suggest the best crop” is practical because cropping is often a human decision.

> Adobe Photoshop, suggest the best crop for 1:1 and 9:16 while keeping the main subject centered and balanced. Keep composition natural.

**Recipe 20 | A “3-step workflow” that continues into design + PDF**  
- The advantage of Photoshop + Express + Acrobat is the ability to keep work in one flow (announcement: [Adobe Newsroom](https://news.adobe.com/news/2025/12/adobe-photoshop-express-acrobat-chatgpt)).

> Adobe Photoshop, clean up this image for a blog header (minimal, bright, clean). Then use Adobe Express to generate a matching 16:9 thumbnail background (no text). Finally, use Acrobat to export a compressed PDF summary of the visuals.

---

## 4) When results feel “off”: one revision sentence can fix everything

In real workflows, the most powerful move often isn’t a brand-new prompt—it’s **one clean revision line**. Instead of “Do it again,” specify what should be **less/more** and what must **never** be changed.

If the background blur is too strong, say:  
“Blur strength down to ~15% and restore edge detail around hair.”

If skin looks too smooth, say:  
“Restore natural skin texture; reduce smoothing by half.”

If color grading feels too intense, say:  
“Keep the current tone but reduce saturation by 10%.”

Finally, it helps to remember this is a **connected app/connector** experience. ChatGPT can run tasks through external tools in a way that aligns with OpenAI’s broader platform direction. You can read more in [OpenAI – Apps in ChatGPT](https://openai.com/index/introducing-apps-in-chatgpt/) and [OpenAI Help – Connectors](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt).

---

## References

- Adobe Photoshop → https://www.adobe.com/products/photoshop.html  
- Adobe Help: Photoshop for ChatGPT → https://helpx.adobe.com/photoshop/web/app-integrations/use-chatgpt-to-edit-images.html  
- Adobe Newsroom announcement → https://news.adobe.com/news/2025/12/adobe-photoshop-express-acrobat-chatgpt  
- OpenAI: Apps in ChatGPT → https://openai.com/index/introducing-apps-in-chatgpt/  
- OpenAI Help: Connectors → https://help.openai.com/en/articles/11487775-connectors-in-chatgpt  
- Reuters coverage → https://www.reuters.com/technology/adobe-plugs-photoshop-acrobat-tools-into-chatgpt-2025-12-10/  
- The Verge coverage → https://www.theverge.com/news/841369/chatgpt-apps-adobe-photoshop-acrobat-express  
- TechCrunch coverage → https://techcrunch.com/2025/12/10/adobe-brings-photoshop-express-and-acrobat-features-to-chatgpt/  
