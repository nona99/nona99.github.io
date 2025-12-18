---
title: "Gemini in Sheets マルチステップ作業ガイド：自然言語で表・ピボット・グラフ・数式を作る"
permalink: /ja/gemini-in-sheets-multi-step/
translations:
  en: /gemini-in-sheets-multi-step/
  zh: /zh/gemini-in-sheets-multi-step/
date: 2025-12-18 12:00:00 +0900
categories: ["AI Tools", "Productivity", "Google Workspace"]
lang: ja-JP
description: "Google Sheets の Gemini（Ask Gemini）を実務で使うためのマルチステップ実践ガイド。表作成、数式生成、ピボット、条件付き書式、ダッシュボード用グラフまでを一連の流れで作り、週次レポート向けのコピペ用プロンプトも掲載。"
image: "/assets/img/post/gemini-sheets-workflow.png"
og_title: "Gemini in Sheets：実務向けマルチステップ運用（表→ピボット→グラフ）"
og_description: "生データを意思決定できるレポートへ。表・数式・ピボット・条件付き書式・ダッシュボード・3行要約まで、Google Sheets の Ask Gemini で整える方法。"
og_image: "/assets/img/post/gemini-sheets-workflow.png"
---

# Gemini in Sheets マルチステップ作業ガイド：自然言語で表・ピボット・グラフ・数式を作る

スプレッドシートは今でもチームの「仕事の言語」です。売上集計、広告成果、在庫状況、顧客リスト、人員管理、プロジェクト計画――結局のところ、最後にまとまる場所は Google Sheets というケースが多いはずです。

問題はその直後です。生データ（行）を「共有できる成果物」にするには、毎週だいたい同じ作業を繰り返します。

**データ整形 → 数式作成 → ピボット集計 → 重要箇所の強調 → グラフ化 → 3行の結論作成**

ここで本当に効いてくるのが **[Gemini in Google Sheets](https://workspace.google.com/resources/spreadsheet-ai/)** です。  
「Ask Gemini」に自然言語で指示すると、説明だけではなく、実務で必要な作業そのもの――**表の作成、数式生成、分析、グラフ作成**――を進められます。さらに **ピボットテーブル、条件付き書式、並べ替え/フィルタ、書式設定** など、時間を食う“表計算の手作業”もまとめて支援してくれるため、作業が「毎回しんどい」から「再現可能なルーティン」に変わります。

本記事は機能紹介ではなく、チームで回せる **マルチステップ（multi-step）運用** の実践ガイドです。  
「1プロンプトで完璧」を期待すると肩透かしになることもあります。勝ち筋はこれです。

**(1) 大きい指示で骨格（スケルトン）を作り、(2) 短い追問で精度を上げる。**

これでスピードと信頼性を両立できます。

---

## 1) Gemini in Sheets とは（ざっくり言うと）

**[Gemini in Google Sheets](https://workspace.google.com/resources/spreadsheet-ai/)** は、Google Sheets 内に組み込まれたAI支援機能です。  
「Ask Gemini」で自然言語の指示を出し、その結果をシートに反映できます。

ポイントは、単にデータについて答えるだけではなく、シート自体を **編集・構築** する作業も支援することです。

Google の公式ドキュメントでは、Gemini in Sheets は主に以下を支援するとされています。

- **表の作成**
- **数式の生成**
- **データ分析とインサイト抽出**
- **グラフの作成**

（利用可否やUIはプラン、地域、管理者設定によって変わる場合があります。）

公式ヘルプ：**[Collaborate with Gemini in Google Sheets](https://support.google.com/docs/answer/14218565?hl=en)**

---

## 2) なぜ「マルチステップ作業」で真価が出るのか

実務では「1つだけ」欲しいことはほとんどありません。  
例えば「週次の売上まとめ」と言っても、実際はこういう連鎖です。

**データ整形（型/欠損） → 集計（ピボット/集約） → 強調（条件付き書式） → 可視化（グラフ） → 意思決定用の結論（3行）**

Gemini が効くのは、この一連の流れ――特に時間を吸う“機械作業”――を短縮できる点です。  
**ピボット作成、条件付き書式適用、並べ替え/フィルタ、書式設定、範囲の埋め込み** などが積み重なると、結局ここがボトルネックになります。

もう一つの現実は、ワークブックが必ずしも「きれいな1枚の表」ではないこと。  
「プラットフォームA」「プラットフォームB」「メモ」など、1つのタブに複数テーブルが並ぶことも多いです。Gemini in Sheets が複雑なレイアウトに強くなるほど、整理し直さずに反復質問で仕上げやすくなります。

更新参考：**[Gemini in Sheets can analyze data across multiple tables](https://workspaceupdates.googleblog.com/2025/10/gemini-in-google-sheets-analyze-data.html)**

---

## 3) 実用ワークフロー：20分の初期設定 → 週10分ルーティン

### Step 0. まずシート構造を整える（読みやすいほど安定する）

成果が出るチームは、プロンプトより先に構造を整えます。  
AIが弱いのではなく、データが散らかっていると人間でも読めないからです。最低限これだけで安定します。

- **1行目にヘッダーを固定**（日付、チャネル、指標、金額など明確に）
- **データ型を統一**（日付は日付、金額は数値/通貨、率は%）
- **目的別にタブ分割**：`Raw / Summary / Dashboard`

### Step 1. 「大きい指示」で骨格を作る

最初から「小さい数式1本」より、SummaryタブとKPI表、主要ピボットなど“骨格”を先に作る方が速いです。骨格さえできれば、追問で仕上げるのは簡単です。

### Step 2. 短い追問で精度を上げる（ここがマルチステップの本番）

一発で完璧は稀です。代わりに短い追問で詰めます。

- 「地域別にも分けて」
- 「上位5つを強調して」
- 「WoW差分も追加して」
- 「グラフを積み上げ棒に変更して」
- 「異常値を表示して」

この反復で、やり直しなしに“最終版”へ近づけます。

### Step 3. 最後は「報告文（結論）」まで出す

シートの目的は意思決定です。最後はグラフではなく“言語化”です。締めはこれがおすすめです。

**「このシートに基づき、主要インサイト3行 + リスク2つ + 次アクション3つを書いて」**

---

## 4) コピペ用プロンプトテンプレ（表/数式/ピボット/グラフ/要約）

以下は「Ask Gemini」にそのまま貼れます。**[ ]** を置き換えて使ってください。  
品質を上げる最大のコツは **範囲（range）** と **出力形式（output format）** を明確にすることです。

### Template A：データ整形 + 表作成

```text
[Sheet/Tab Name] のデータを使って作業してください。
1) 表構造を整形・正規化（必要なら空白/重複を処理）し、
2) [Summary Tab Name] にKPIサマリー表を作成してください。
列： [KPI1], [KPI2], [KPI3], [Time Period], [Notes]
ルール：日付は YYYY-MM-DD、金額は通貨形式にしてください。
```

### Template B：数式生成（実務向け）

```text
[Tab Name] で、[Condition] を満たす行の [Value] を計算する数式を作ってください。
- 使用列： [Column1], [Column2], [Column3]
- 結果は [Cell Location] に入れてください
- 必要に応じて IFERROR などのエラー処理も含めてください。
```

### Template C：ピボット + 並べ替え/フィルタ（自動サマリー）

```text
[Tab Name] のデータからピボットテーブルを作成してください。
- 行： [Category/Region/Channel]
- 列： [Week/Month/Quarter]
- 値： [Revenue/Conversions/Cost] の合計
その後、上位10件のみ残すように並べ替え、残りはフィルタで除外してください。
```

### Template D：条件付き書式（報告用に強調）

```text
[Summary Tab Name] に条件付き書式を適用してください。
- WoW変化が +10% 以上：強調
- -10% 以下：警告表示
- 上位5件：太字
適用範囲： [例：B2:F200]
```

### Template E：グラフ作成（ダッシュボード）

```text
[Summary Tab Name] の [Range] からグラフを作成してください。
- 目的：週次変化が一目で分かるように
- 適切なグラフ種類を提案してから作成（例：積み上げ棒/折れ線/複合）
- タイトル： [Chart Title]
- Dashboard タブ（[Dashboard]）に配置してください。
```

### Template F：最終「3行まとめ」（報告文）

```text
このシートの Summary と Dashboard を基に、以下を作成してください：
1) 主要インサイト3つ（短く）
2) 異常/リスク2つ
3) 次アクション3つ（担当者と期限も提案）
ルール：誇張しない。各主張に数値根拠を含める。
```

---

## 5) 実戦シナリオ3つ：KPI週報 / マーケダッシュボード / 運用・照合

### シナリオ1）KPI週報：Raw → Summary → 結論

最も一般的です。リードが欲しいのは「データ」ではなく「変化と次の打ち手」です。

安定するマルチステップ運用はこうです。

1. **Summary タブ作成**
   Raw からKPI表（総売上、注文数、AOV、CVR、広告費など）を作る。
2. **ピボットで“理由”を掘る**
   地域/チャネル/商品カテゴリで分解し、上位10件だけ残す。
3. **条件付き書式で“報告ポイント”を可視化**
   +10% / -10% WoW の閾値で一目で分かるようにする。
4. **グラフは2〜3個に絞る**
   Dashboardに必要最低限。多いほど伝わらない。
5. **3行の結論を生成**
   インサイト + リスク + 次アクション（数値根拠付き）。

ここは正確性が命です。文章が良くても数字が違えば終わります。「数値根拠を含める」は常に入れてください。

### シナリオ2）マーケ：1タブに複数プラットフォーム表

広告/マーケは1タブに複数テーブルが並びがちです（Google Ads、Metaなど）。この場合は範囲指定でスコープを絞るのがコツです。

**マルチステップ例：**

```text
このタブには複数のプラットフォーム表があります。
次の2範囲だけを分析してください：[Google Ads table range], [Meta table range]。

1) プラットフォーム別に CPA と ROAS のサマリー表を作成
2) WoW変化が大きいキャンペーンTop 5を抽出
3) ROASが閾値（例：2.0）未満のものを条件付き書式で警告
4) Dashboard にプラットフォーム別 ROAS 推移グラフを作成
5) 予算調整案を5行で提示（誇張なし、数値根拠）
```

「サマリー → 強調 → 可視化 → 提案」までつなぐと、ダッシュボードが“意思決定ツール”になります。

### シナリオ3）運用/照合：手作業が一番つらい

運用は数式より、フィルタ・並べ替え・固定・通貨書式・ドロップダウン状態などの“手作業”がつらいケースが多いです。

この種のマルチステップ指示が効きます。

```text
[Reconciliation Tab] で次を実行してください：
1) Status列にドロップダウン：Pending / In progress / Done / On hold
2) Status が “On hold” の行だけを別ビュー/セクションに整理
3) Amount が0または欠損の行を条件付き書式で強調
4) 先頭行と先頭列を固定
5) On hold 理由のための Notes 列を追加
```

派手な分析ではなく、日々の“微作業”を減らすのが価値です。

---

## 6) うまくいく指示 / うまくいかない指示（品質アップのコツ）

### うまくいく：範囲を明確にする

「分析して」は曖昧です。「`Raw!A1:H200` を使って」は明確です。可能ならタブ名＋範囲を必ず書きます。

### うまくいく：出力形式を固定する

仕事は成果物です。表、ピボット、条件付き書式、Dashboard配置など、ほしい“形”を指定すると迷いが減ります。

### うまくいく：ルールを決める

日付形式、通貨形式、閾値、Top N はあなたが決めるべきです。言わないと推測が入って危険です。

### うまくいかない：データが崩れているのに精度だけ要求する

日付が文字/数値混在、ヘッダー重複、型がバラバラだと結果が揺れます。まず整形から指示してください。

---

## 7) 管理者・権限・言語・料金のチェックポイント

### 1) なぜ Sheets に “Ask Gemini” が表示されないの？

Gemini 機能は **Google Workspace のプラン** と **管理者設定** に依存する場合があります。組織で無効化されているとUIに出ません。

管理者向け：
[https://support.google.com/a/answer/15239506?hl=en](https://support.google.com/a/answer/15239506?hl=en)

### 2) 日本語または他の言語でも使えますか？

言語対応は随時更新されます。最新の対応言語リストは以下で確認してください。
[https://support.google.com/a/answer/16024599?hl=en](https://support.google.com/a/answer/16024599?hl=en)

### 3) 料金をブログでどう扱うべき？

料金は契約や時期で変わるため、更新頻度が低い記事で「月額いくら」と固定で書くのはおすすめしません。公式ページへ誘導する方が安全です。

* [https://workspace.google.com/pricing](https://workspace.google.com/pricing)
* [https://workspace.google.com/blog/product-announcements/empowering-businesses-with-AI](https://workspace.google.com/blog/product-announcements/empowering-businesses-with-AI)

### 4) データ安全性と共有

チームで広く使う前に、アクセス設計を先に決めてください。

* 共有権限（閲覧/コメント/編集）とリンク共有範囲
* 機微情報（顧客、決済、人事）はタブ分離＋アクセス制限
* Raw と Dashboard を分離（Raw は最小人数）

製品概要：
[https://workspace.google.com/resources/spreadsheet-ai/](https://workspace.google.com/resources/spreadsheet-ai/)

---

## FAQ

### Q1. マルチステップは1つのプロンプトで完結させるべき？

必ずしもそうではありません。最速パターンは
**大きい指示（骨格） → 2〜4回の短い追問（精修）** です。

### Q2. 数式が間違っていたら？

3ステップで検証してください：
(1) 数式生成 → (2) 数式の意味を日本語で説明させる → (3) サンプル3行で検算。
“静かなミス”が激減します。

### Q3. ダッシュボードがごちゃごちゃします

足すより引く。
**KPI表1つ + グラフ2〜3個 + 3行結論** だけに絞ると一気に見やすくなります。

### Q4. チーム導入で最初に決めるべきことは？

まずシート構造と共有ルール。次に標準プロンプトテンプレです。テンプレを揃えると品質が揃います。

---

## まとめ：Gemini in Sheets を“実務自動化”として使う3原則

Gemini in Sheets の価値は「すごい分析」より、反復作業をルーティン化することです。

1. **構造を先に整える（ヘッダー/型/タブ）**
2. **大きい指示で骨格を作る**
3. **短い追問で報告できる形に仕上げる**

一度テンプレを作って保存すれば、KPI週報、ダッシュボード、照合作業は「手作業の苦行」から「10分ルーティン」に変わります。

**公式リンク（参考）：**

* [https://workspace.google.com/resources/spreadsheet-ai/](https://workspace.google.com/resources/spreadsheet-ai/)
* [https://support.google.com/docs/answer/14218565?hl=en](https://support.google.com/docs/answer/14218565?hl=en)
* [https://workspaceupdates.googleblog.com/2025/10/gemini-in-google-sheets-analyze-data.html](https://workspaceupdates.googleblog.com/2025/10/gemini-in-google-sheets-analyze-data.html)
* [https://workspace.google.com/pricing](https://workspace.google.com/pricing)
* [https://workspace.google.com/blog/product-announcements/empowering-businesses-with-AI](https://workspace.google.com/blog/product-announcements/empowering-businesses-with-AI)
* [https://support.google.com/a/answer/16024599?hl=en](https://support.google.com/a/answer/16024599?hl=en)
