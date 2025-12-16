---
title: "プロンプトを変えるだけで結果が変わる：ChatGPT Photoshop プロンプトレシピ20選"
permalink: /ja/chatgpt-photoshop-prompt-recipes/
date: 2025-12-17 12:00:00 +0900
categories: ["AI Tools", "Creative Tools"]
lang: ja-JP
description: "ChatGPTでPhotoshopを使うためのコピペ用プロンプトレシピ20選。背景整理、トーン調整、レタッチ、サムネ最適化までを実用的にまとめ、接続設定の要点と“効き直し”の修正フレーズも掲載します。"

# Open Graph / SEO
og_title: "ChatGPT Photoshop プロンプトレシピ20選（コピペOK）"
og_description: "プロンプト次第で編集はもっと良くなる。ChatGPTでPhotoshopを使うためのコピペ用レシピ20選＋即効の修正フレーズとワークフローのコツ。"
---

「ChatGPTの中でPhotoshopが使えるらしい」と言われるようになってから、伸びている検索は“機能まとめ”ではありません。実は一番増えているのは **「どう言えば欲しい結果が出るの？」** というニーズです。同じ写真でも、きれいに整った仕上がりになる人がいる一方で、過度にぼやけたり不自然な“AIっぽさ”が出たりする人もいます。理由はシンプルで、**品質を左右するのは“ツール”より“指示の書き方（プロンプト）”だから**です。

最近Adobeは、ChatGPT内で **Photoshop・Adobe Express・Acrobat** を使える形を公開し、特にPhotoshopは「やりたい編集を自然言語で説明し、調整や効果を適用する」という流れを強調しています。（公式ガイド：[Adobe Help – Photoshop for ChatGPT](https://helpx.adobe.com/photoshop/web/app-integrations/use-chatgpt-to-edit-images.html)、発表：[Adobe Newsroom](https://news.adobe.com/news/2025/12/adobe-photoshop-express-acrobat-chatgpt)、報道：[Reuters](https://www.reuters.com/technology/adobe-plugs-photoshop-acrobat-tools-into-chatgpt-2025-12-10/)、[The Verge](https://www.theverge.com/news/841369/chatgpt-apps-adobe-photoshop-acrobat-express)）

この記事は「できる／できない」を語るニュース的まとめではなく、**今すぐコピペして使えるプロンプトレシピ20個**を中心に構成しました。レシピは **自然さ（AI感を最小化）／スピード（反復作業を短縮）／再現性（似た結果を安定して出す）** の3点を重視しています。

![ChatGPT Photoshop prompt recipes](/assets/img/post/prompt.png)

---

## 1) まず1分：ChatGPT Photoshopでプロンプトが効く仕組み

ChatGPT経由でPhotoshopを使うときに重要なのは、“機能名”ではなく **仕上がりを「検収基準」込みで伝えること**です。たとえば「背景をぼかして」とだけ書くと、ぼかしが強すぎたり、被写体の輪郭（特に髪の毛の縁）が不自然になったりしがちです。逆に「輪郭はきれいに保つ」「髪のエッジは自然に残す」「背景は20〜30%だけ柔らかく」といった **強度・優先順位・禁止事項** をセットで書くと、結果が安定します。

もう一つのポイントは、「一発で完璧」を期待しないことです。このワークフローは **1回目で方向→2回目で微調整** が得意です。最初のプロンプトで方向性を決め、次のプロンプトで「もう少し／控えめに」を正確に当てるほうが効率的です。（OpenAIは [Apps in ChatGPT](https://openai.com/index/introducing-apps-in-chatgpt/) や [Connectors](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt)、[Apps SDK](https://help.openai.com/en/articles/12503483-apps-in-chatgpt-and-the-apps-sdk) などを通じて、会話内でアプリを実行する方向を拡張しています。）

---

## 2) 準備：Apps & Connectorsの接続 + 基本設定のコツ

準備は基本的にシンプルです。ChatGPT側で **Settings → Apps & Connectors → Adobe Photoshop** を接続し、公式ドキュメントでは入力欄の **「+」アイコンからAdobe Photoshopを選択**する流れも説明されています。（経路：[Adobe Help – Photoshop for ChatGPT](https://helpx.adobe.com/photoshop/web/app-integrations/use-chatgpt-to-edit-images.html)、導入：[Adobe Blog](https://blog.adobe.com/en/publish/2025/12/10/edit-photoshop-chatgpt)）

プロンプトを安定させるために、覚えておくべきルールは2つです。

1つ目は、「何を変えるか」より先に **「何を守るか」** を書くこと。  
例：「肌の質感は残す」「製品ラベルの文字は絶対に変えない」「顔の骨格は変えない」。

2つ目は、強度をできるだけ **数字・割合・範囲** で表現すること。  
例：「ぼかし20〜30%」「露出+0.2」「彩度は10%だけ下げる」。

では、実戦レシピに入ります。

---

## 3) ChatGPT Photoshop プロンプトレシピ20選

以下のプロンプトは意図的に **“Adobe Photoshop,”** から始めています。多くの環境ではアプリを選んで貼り付ければ動きますが、アプリ名を明示すると会話内の流れが途切れにくくなります。呼び出し方の例は [The Verge](https://www.theverge.com/news/841369/chatgpt-apps-adobe-photoshop-acrobat-express) や [TechCrunch](https://techcrunch.com/2025/12/10/adobe-brings-photoshop-express-and-acrobat-features-to-chatgpt/) の報道でも触れられています。

### A. 背景・構図の整理（レシピ01〜05）

**レシピ01｜背景だけ自然にぼかす（強すぎない）**  
- 強度と禁止事項（光輪・偽ボケ）をセットで書くと失敗が減ります。

> Adobe Photoshop, keep the subject sharp and blur only the background naturally (20–30% strength). Preserve hair edges and avoid artificial bokeh halos.

**レシピ02｜背景のゴチャつきを消しつつ、雰囲気は維持**  
- “keep the original atmosphere” の一文で“作り直した感”が出にくくなります。

> Adobe Photoshop, remove distracting background elements while keeping the original atmosphere. Do not change the subject’s shape or facial features.

**レシピ03｜切り抜き＋スタジオ背景（サムネ/商品向け）**  
- 背景色と影（soft shadow）を明示するのがコツです。

> Adobe Photoshop, remove the background cleanly and replace it with a soft light-gray studio backdrop with subtle shadow. Keep edges crisp.

**レシピ04｜水平・パースを“控えめに”補正（やりすぎ防止）**  
- “subtly” と “no distortion” が効きます。

> Adobe Photoshop, straighten the image and correct perspective subtly. Keep it natural—no “wide-angle” distortion.

**レシピ05｜サムネ用に余白を足す（方向指定）**  
- どちら側に余白を増やすかを書くと意図が伝わります。

> Adobe Photoshop, extend the canvas to create more negative space on the left side for a thumbnail layout. Match background texture seamlessly.

---

### B. トーン・色味調整（レシピ06〜10）

**レシピ06｜明るくクリーンな“白トーン”**  
- ハイライトが飛びやすいので、飛ばさない指定が必須です。

> Adobe Photoshop, brighten the image slightly, reduce yellow cast, and make whites look clean without blowing highlights.

**レシピ07｜暖色だけどオレンジに寄せない**  
- 肌がオレンジに転ぶ事故を防ぎます。

> Adobe Photoshop, warm up the color temperature a bit, but keep skin tones natural (no orange). Lower saturation by ~10% if needed.

**レシピ08｜落ち着いたクールトーン（テック/レポート向き）**  
- 黒つぶれを防ぐ指定がディテールを守ります。

> Adobe Photoshop, shift the overall tone slightly cooler and add a clean, modern look. Keep contrast moderate and blacks not crushed.

**レシピ09｜コントラストは上げるが質感は残す**  
- “plastic skin” を禁止すると過度なスムージングが減ります。

> Adobe Photoshop, increase contrast subtly while preserving fine textures. Avoid over-sharpening and avoid plastic skin.

**レシピ10｜被写体だけ光を整える（背景はそのまま）**  
- 背景をいじらず主役だけ整える用途に。

> Adobe Photoshop, even out lighting on the subject only. Keep the background unchanged. Preserve natural shadows.

---

### C. 人物・商品レタッチ（レシピ11〜15）

**レシピ11｜自然な肌の修正（初心者向け）**  
- “real skin texture” が自然さの鍵です。

> Adobe Photoshop, reduce blemishes and redness gently while keeping real skin texture. No heavy smoothing.

**レシピ12｜目の下の影だけ軽く（骨格は変えない）**  
- “facial structure” を守る指定で“整形感”を防げます。

> Adobe Photoshop, soften under-eye shadows slightly without changing facial structure. Keep it subtle and realistic.

**レシピ13｜アホ毛・はみ出し毛を整理（自然に）**  
- 消しすぎると合成っぽくなるので “Preserve hair detail”。

> Adobe Photoshop, clean up stray hair around the edges while keeping the hairstyle natural. Preserve hair detail.

**レシピ14｜商品写真：ラベル文字/ロゴを絶対に変えない**  
- ブランド要素を守る強い制約が安全です。

> Adobe Photoshop, enhance the product clarity and lighting, but do NOT alter any label text or logo. Keep edges sharp and true to the original.

**レシピ15｜反射だけ抑える（ツヤは残す）**  
- 光沢アイテムの“ギラつき”対策に。

> Adobe Photoshop, reduce harsh reflections on the product surface while keeping it glossy and realistic.

---

### D. スタイル・出力最適化（レシピ16〜20）

**レシピ16｜ミニマルなイラスト風（ただし強い変換は避ける）**  
- “Avoid heavy stylization” で別物になるのを防ぎます。

> Adobe Photoshop, give the image a clean, minimalist illustration-like finish while keeping key details recognizable. Avoid heavy stylization.

**レシピ17｜“プレミアム広告感”（過加工はしない）**  
- “not over-processed” がリアルさを守ります。

> Adobe Photoshop, create a premium commercial look: slightly richer contrast, clean whites, subtle vignette. Keep it realistic and not over-processed.

**レシピ18｜16:9サムネ用に最適化（小さくても読める）**  
- “small sizeでも見える”という検収条件が効きます。

> Adobe Photoshop, optimize for a 16:9 thumbnail: make the subject pop, reduce background clutter, keep fine details readable at small size.

**レシピ19｜1:1 / 9:16 のクロップ案まで提案**  
- 人が最終判断しやすいので “suggest” が実用的です。

> Adobe Photoshop, suggest the best crop for 1:1 and 9:16 while keeping the main subject centered and balanced. Keep composition natural.

**レシピ20｜デザイン＋PDFまで続く“三段ワークフロー”**  
- Photoshop＋Express＋Acrobatを会話内でつなげるのが強み（発表：[Adobe Newsroom](https://news.adobe.com/news/2025/12/adobe-photoshop-express-acrobat-chatgpt)）。

> Adobe Photoshop, clean up this image for a blog header (minimal, bright, clean). Then use Adobe Express to generate a matching 16:9 thumbnail background (no text). Finally, use Acrobat to export a compressed PDF summary of the visuals.

---

## 4) 仕上がりが微妙なとき：修正フレーズ1行で立て直す

現場で一番効くのは、新しいプロンプトより **“修正の一文”** だったりします。「やり直して」ではなく、**何を弱める／強める** そして **何は絶対に変えない** を明確にします。

背景ボケが強すぎるなら：  
“Blur strength down to ~15% and restore edge detail around hair.”

肌がツルツルなら：  
“Restore natural skin texture; reduce smoothing by half.”

色が濃すぎるなら：  
“Keep the current tone but reduce saturation by 10%.”

最後に、これは **外部アプリを接続して実行する体験** でもあります。全体像は [OpenAI – Apps in ChatGPT](https://openai.com/index/introducing-apps-in-chatgpt/) と [OpenAI Help – Connectors](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt) が参考になります。

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
