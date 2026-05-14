# SPARQL.js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A class to access SPARQL in JavaScript (ES Module).

## Features
- Access SPARQL endpoints in JavaScript
- Fetch and parse SPARQL query results

## Usage
```js
import { SPARQL } from "https://code4fukui.github.io/SPARQL/SPARQL.js";

const sparql = new SPARQL("https://sparql.odp.jig.jp/api/v1/sparql");
const data = await sparql.query("select * { ?s ?p ?o. } limit 10");
```

## Data / API
This library uses the SPARQL endpoint at `https://sparql.odp.jig.jp/api/v1/sparql`.

## License
MIT License — see [LICENSE](LICENSE).