# Gulp Task 撰寫
Gulp 是一個 task runner。
Gulpfile 內將包含:


## 前情提要 - 準備環境

參考筆記: [讓專案使用 Gulp 自動化編譯](https://hoyis-note.coderbridge.io/2021/07/19/gulp-github/)

## 支援的任務(需要載入的Plugin)

| pluging | purpose |
| -------- | -------- |
|gulp-sass | 編譯sass |
|gulp-postcss cssnano| postcss 處理CSS prefix<br>cssnano 優化程式碼|
|gulp-terser |壓縮 JS |
|browser-sync | 瀏覽器同步檢視|

延伸:
`gulp-postcss` : 以往都是使用 Sass 的 Compass 來加入 prefix，這種增加方式就是無差別的加入，但其實現在的 CSS 有 9 成以上的 prefix 都沒有加入的必要，所以就可以使用 `postcss`。PostCSS 類似 Sass，但是他是直接編譯 `.css` 檔案，另外他的套件都是用插件的方式載入(所以像這次的練習，也另外載入了cssnano)，並不是像 Sass 已經有固定的寫法。

## gulpfile 內到底要寫什麼?

[我的gulpfile.js要怎麼撰寫](https://hoyis-note.coderbridge.io/2021/08/15/%E6%88%91%E7%9A%84gulpfilejs%E8%A6%81%E6%80%8E%E9%BA%BC%E6%92%B0%E5%AF%AB/)

## 關於 gitignore

參考筆記: [關於 gitignore](https://hoyis-note.coderbridge.io/2021/08/14/gitignore/)
```
public
node_modules
.publish
dist
.vscode
.DS_Store
```