import { RESTDataSource, HTTPCache } from "apollo-datasource-rest";

export default class CoinDataSource extends RESTDataSource {
  constructor() {
    super();
    this.httpCache = new HTTPCache();
    this.baseURL = "https://api2.binance.com/api/v3/ticker/";
  }
  async getCoin() {
    const  data  = await this.get("24hr");
    return data;
  }
}
