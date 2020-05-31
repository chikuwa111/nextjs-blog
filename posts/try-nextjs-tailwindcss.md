---
title: 'Next.jsとTailwind CSSに入門しました'
date: '2020-05-31'
---

今週末に Next.js と Tailwind CSS に入門しました。せっかくブログサイトが出来上がったのでテストがてらその記録を残しておきます。

- [Next.js のチュートリアル](https://nextjs.org/learn/basics/create-nextjs-app)
- [Tailwind CSS](https://tailwindcss.com/)

# Next.js のチュートリアル + α

EXCEL の TypeScript まで全部やって 3h くらいかかりました。基本コピペで、ときどき必要だと思った箇所は写経しました。

Vercel でデプロイするところまでチュートリアルでやるのですが、Vercel の体験が良すぎたのが印象に残っています。

チュートリアルが終わってから、プラスアルファで以下のことをやってました (プルリクは[ここ](https://github.com/chikuwa111/nextjs-blog/pull/2)):

- prettier の導入
- eslint の導入
- import の path の alias の設定

大したことやってないんですが、alias の設定で手間取ってしまったので詳細を残しておきます。

[Advanced Features: Absolute Imports and Module Path Aliases | Next.js](https://nextjs.org/docs/advanced-features/module-path-aliases)

これを読んで、`tsconfig.json` の paths を設定するだけでいけるんだー簡単だーってなったんですが、設定しても動かない、、

苦戦した挙句、next を最新版にしたらうまく動きました。（そもそも最新版じゃないことにしばらく気づかなかったです）

どうやらチュートリアルのテンプレートの `9.3.5` 時点では入ってなかった機能っぽいです。盲点でした。。

皆さんもチュートリアルからそのまま next で遊ぶときはバージョンに気をつけてください。

# Tailwind CSS

そんなに触ってないので、なるほどなー、くらいの感想しかないですが、一点、style を DRY にする選択肢として className の文字列を定数に切り出す、というやり方ができるのが面白いなーと思いました。（diff は[ここ](https://github.com/chikuwa111/nextjs-blog/pull/2/commits/34d58b01a03680cfb24709ad3e6e53216d3c00d3#diff-26b42df59033fd57b663d14ea013370b)）

Tailwind CSS については、purge のやり方を軽く説明することにします。

Tailwind CSS はたくさん style を持ってるので、不要な style を含めないようにする処理（purge）は必須と言えます。

調べたところ、自分で `@fullhuman/postcss-purgecss` を落としてきて `postcss.config.js` に設定を書くパターンをちらほら見かけましたが、Tailwind CSS だけ使う場合は Tailwind CSS の purge オプションを使った方が良さそうでした。

詳しくは [Controlling File Size - Tailwind CSS](https://tailwindcss.com/docs/controlling-file-size/#app) を読んでください。

また、

- クラス名は変数展開など使わず完全な状態で書く
- className を定数として別ファイルに切り出したらそのファイルも purge のチェック対象に加える

のような注意ポイントがありました。今回はちゃんと説明を読んだので引っかかりませんでしたが、忘れたころにやらかしそうです。

# おわり

とにかく Next.js と Vercel 最高でした！Tailwind CSS はもう少し使ってみて勘所を探りたいです。

リポジトリは[ここ](https://github.com/chikuwa111/nextjs-blog)です。よかったら参考にしてください。
