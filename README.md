# React TypeScript in Webpack5 の最小構成

目標: 脱フレームワーク依存。

## このテンプレでできること

- React×TypeScript
- スタイリングは Scss
- 画像等の Base64 化
- プレーンな HTML も使用可能、SEO 問題なし

## Memo

- 画像等は全て Base64 化, webpack.config.js にて設定。
- Scss 内にて読み込んでいる背景画像等も Base64 化して一括で読み込む。
- リクエスト数が大きく削減されるため、高速。
- 100kB 以上の画像は Base64 にすると寧ろ処理コストが増すので Base64 化せずに読み込む。

### 参考

- [ICS: 最新版 TypeScript+webpack 5 の環境構築まとめ](https://ics.media/entry/16329/)
- [ICS: 最新版で学ぶ webpack 5 入門 スタイルシート(CSS/Sass)を取り込む方法](https://ics.media/entry/17376/)
- [WebPack + Sass + file-loader のサンプル](https://github.com/ics-creative/170330_webpack/tree/master/tutorial-sass-image-file)
- [WebPack + Sass + url-loader + file-loader のサンプル](https://github.com/ics-creative/170330_webpack/tree/master/tutorial-sass-image-url-limit)
