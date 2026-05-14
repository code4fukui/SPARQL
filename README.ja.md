# SPARQL.js

JavaScript (ES Module) で SPARQL にアクセスするためのクラス。

## 特徴
- JavaScript で SPARQL エンドポイントにアクセス
- SPARQL クエリ結果を取得して解析

## 使い方
```js
import { SPARQL } from "https://code4fukui.github.io/SPARQL/SPARQL.js";

const sparql = new SPARQL("https://sparql.odp.jig.jp/api/v1/sparql");
const data = await sparql.query("select * { ?s ?p ?o. } limit 10");
```

## データ / API
このライブラリは `https://sparql.odp.jig.jp/api/v1/sparql` の SPARQL エンドポイントを使用します。

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
