class SPARQL {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }
  async query(q) {
    const endpoint = "https://sparql.odp.jig.jp/api/v1/sparql";
    const url = endpoint + "?output=json&query=" + encodeURIComponent(q);
    return await (await fetch(url)).json();
  }
}

export { SPARQL };
