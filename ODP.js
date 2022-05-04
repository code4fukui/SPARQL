import { SPARQL } from "./SPARQL.js";

class ODP extends SPARQL {
  constructor() {
    super("https://sparql.odp.jig.jp/api/v1/sparql");
  }
}

export { ODP };
