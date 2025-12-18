---
title: "AIとの会話は学習に使われる？個人情報を入力していい境界線"
permalink: /ja/ai-chat-training-privacy-boundary/
translations:
  en: /ai-chat-training-privacy-boundary/
  zh: /zh/ai-chat-training-privacy-boundary/
date: 2025-12-20 09:00:00 +0900
categories: ["AI基礎", "AIプライバシー", "生成AI"]
lang: ja-JP
description: "AIとの会話は学習に使われるのか？ChatGPT・Gemini・Claude・Copilotのデータ利用方針を整理し、個人情報を入力してよい現実的な境界線を解説します。"
image: "/assets/img/post/ai-privacy-chat.png"

# Open Graph / SEO
og_title: "AIとの会話は学習に使われる？個人情報の安全な境界線"
og_description: "生成AIは会話データをどう扱うのか。学習・保存・人によるレビューの違いと、安全に使うための判断基準をまとめました。"
og_image: "/assets/img/post/ai-privacy-chat.png"
---


## 1) みんなが一番気になる疑問：「この会話、学習に使われてる？」

AIチャットボットを使っていると、ふと不安になる瞬間があります。

「今入力した内容って、モデルの学習データになるの？」  
「名前や電話番号、仕事の資料を入れても大丈夫？」

これは過剰な心配ではありません。  
むしろ **正常なリスク感知** に近い反応です。  
多くの生成AIサービスは、**会話内容（プロンプト・回答・アップロードファイル）** を何らかの形で処理し、その一部を製品改善に使う可能性があるからです。

ただし、ここで最も多い誤解があります。  
それは「学習に使われる」という言葉を **ひとつの意味** で捉えてしまうことです。

実際には、次の3つが混ざっています。

**(A) モデル学習・改善（Training / Improvement）**  
モデルの性能向上のためにデータを利用すること。多くのサービスでは設定やオプトアウトが可能です。

**(B) 保存・ログ（Retention / Logging）**  
セキュリティ、障害対応、品質管理、規約違反調査などの目的で一定期間保存されること。

**(C) 人によるレビュー（Human Review）**  
安全性や品質確認のため、一部の会話が人（または委託スタッフ）によって確認されること。

この3つを分けて考えると、「なんとなく不安」から  
**「どのリスクを、どの設定で減らせるか」** が見えてきます。

---

## 2) サービス別の現実：ChatGPT・Gemini・Claude・Copilot

以下は **2025年12月時点の公式情報** をもとに整理しています。  
ポリシーは変更される可能性があるため、リンクを本文中に掲載しています。

### 2-1. ChatGPT（OpenAI）  
**「個人利用はオプトアウト可、ビジネスは原則学習なし」**

OpenAIは、ChatGPTなどの個人向けサービスにおいて  
**ユーザーの入力内容がモデル改善に使われる可能性がある** と説明しています。

ただし、**Data Controls** から  
「Improve the model for everyone（モデル改善への貢献）」をオフにすることで、  
**新しい会話が学習に使われない** よう設定できます。

- 公式資料  
  - [Data Controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq)  
  - [How your data is used to improve model performance](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance)

また **Temporary Chats（一時チャット）** は学習に使用されないと明記されています。  
- [OpenAI Consumer Privacy](https://openai.com/consumer-privacy/)

一方、Enterprise / Business / Edu / API などの組織向けプランでは、  
**顧客データを学習に使用しないのがデフォルト** と説明されています。

- [Enterprise privacy](https://openai.com/enterprise-privacy/)  
- [Business data at OpenAI](https://openai.com/business-data/)  
- [OpenAI API data controls](https://platform.openai.com/docs/guides/your-data)

要点はシンプルです。  
**個人利用は「自分で止める」方式、ビジネス利用は「最初から学習されない」方式**。

契約書や顧客情報などを、個人アカウントにそのまま貼り付けると、  
リスクは一気に高まります。

なお「削除すれば完全に消える？」という疑問もありますが、  
法的手続き（裁判所命令など）が関わる場合、一時的に保持される可能性があるという報道もあります。

- 参考：  
  [The Verge – OpenAI retaining deleted chats](https://www.theverge.com/news/681280/openai-storing-deleted-chats-nyt-lawsuit)

---

### 2-2. Gemini（Google）  
**「人によるレビューあり。Keep Activity が分岐点」**

Gemini Apps について、Googleは  
**一部の会話が人（および委託業者）によってレビューされる可能性がある** と明確に説明しています。  
レビューされたチャットは **最大3年間保存** されるとされています。

- [Gemini Apps Privacy Notice](https://support.google.com/gemini/answer/13594961?hl=en)

また Google は、  
「レビュー対象にしたくない場合は **Keep Activity をオフにする**」と案内すると同時に、  
**機密情報・個人情報は入力しないように** 明確な注意喚起も行っています。

一方、Google Workspace 環境では、  
ドメイン外での無断学習を行わない方針が示されています。

- [Google Workspace AI privacy](https://workspace.google.com/intl/en_au/security/ai-privacy/)

Geminiの特徴は、**人によるレビューをはっきり明示している点**と、  
**活動保存設定が重要な分岐点になる点**です。

---

### 2-3. Claude（Anthropic）  
**「ユーザーの選択を重視する設計」**

Anthropicは、Claudeのプライバシーセンターで **どの条件下で会話やコードが学習に使われるか** を説明し、ユーザーの選択（オプトアウト）や安全審査を重視しています。

- [Is my data used for model training?](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)

2025年後半には、個人ユーザーデータの扱いについて オプトアウトを巡る議論もありました。

- 関連報道  
  - [WIRED](https://www.wired.com/story/anthropic-using-claude-chats-for-training-how-to-opt-out/)  
  - [The Verge](https://www.theverge.com/anthropic/767507/anthropic-user-data-consumers-ai-models-training-privacy)  
  - [Anthropic公式発表](https://www.anthropic.com/news/updates-to-our-consumer-terms)

重要なのは「どの会社が良いか」ではなく、**初期設定と選択肢がどう設計されているか** を理解することです。

---

### 2-4. Copilot（Microsoft）  
**「学習オプトアウトと個人化は別」**

Microsoft Copilotでは、  
**モデル学習をオプトアウトしても、個人化（最近の会話を反映した応答）は維持できる** と説明されています。

- 公式資料  
  - [Microsoft Copilot privacy controls](https://support.microsoft.com/en-us/topic/microsoft-copilot-privacy-controls-8e479f27-6eb6-48c5-8d6a-c134062e2be6)  
  - [Privacy FAQ for Copilot](https://support.microsoft.com/en-us/topic/privacy-faq-for-microsoft-copilot-27b3a435-8dc9-4b55-9a4b-58eeb9647a7f)

Microsoft 365 Copilot（企業向け）では、プロンプトや応答、Microsoft Graph経由のデータは **基盤モデルの学習に使われない** と明記されています。

- [Microsoft 365 Copilot privacy](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy)

---

## 3) 結局どこまで入力していい？「3段階の現実基準」

ここがこの記事の核心です。  
正解はありませんが、**事故を減らす境界線**は引けます。

### レベル1：絶対に入力しない（原則NG）

入力するメリットがほぼなく、リスクだけが大きい情報です。

例：  
パスワード、認証コード、マイナンバー・パスポート番号、クレジットカード番号、ネットバンキング情報、2FAバックアップキー、APIキー、Cookie、正確な自宅住所など。

---

### レベル2：匿名化・加工が必須（要注意）

業務や相談で使いたくなるゾーンです。  
ただし **原文をそのまま貼るのは危険**。

例：  
医療記録、税務書類、取引履歴、給与明細、顧客リスト、契約書、社内資料、非公開コード、NDA対象資料、個人を特定できる相談内容。

安全に使うための4原則：

1) 固有名詞を置き換える（実名 → A社 / プロジェクトX）  
2) 数値を幅で表現する（正確な金額 → 約◯◯）  
3) サンプルを減らす（全件 → 一部例）  
4) 原文ではなく「要件」だけを書く

---

### レベル3：比較的安全（基本OK）

個人が特定されず、影響も限定的な内容です。

例：  
公開記事の要約、一般的な技術解説、匿名シナリオ、習慣改善、個人情報を除いた履歴書、レシピや学習計画など。

---

## 4) どうしても入力が必要なときの8つの習慣

1) 個人用と業務用を分ける  
2) 学習オプトアウト設定を確認  
3) 人によるレビューを前提に考える  
4) 原文ではなく要点を書く  
5) 匿名化ルールを固定する  
6) ファイルアップロードは最小限  
7) 一時チャットなど非学習モードを使う  
8) 「削除＝安全」と思わない  

---

## 5) よくある質問（FAQ）

### Q1. 学習をオフにすると、保存もされませんか？
いいえ。学習と保存は別です。

### Q2. AIは個人情報を「覚える」？
サービスの個人化とモデル学習は別物です。

### Q3. 業務資料を使うなら？
企業向け環境 → API → 匿名化テキストの順が安全です。

---

## 6) 結論：AIは便利。でも「入力」は習慣になる

AIを使いこなす力は、もはやプロンプトだけではありません。

**「何を入力しないか」を判断する力**が重要です。

覚えておく一文はこれです。

**入力しない → 加工する → 安心して使う**

この3段階を守るだけで、多くのトラブルは未然に防げます。
