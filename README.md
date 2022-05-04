# SPARQL.js

A class to access via SPARQL in JavaScript (ES Module)

```js
import { SPARQL } from "https://code4fukui.github.io/SPARQL/SPARQL.js";

const sparql = new SPARQL("https://sparql.odp.jig.jp/api/v1/sparql");
const data = sparql.query("select * { ?s ?p ?o. } limit 10");
```
