import { RESTDataSource } from "apollo-datasource-rest";
import { HTTPCache } from "apollo-datasource-rest";
export default class RandomUserDataSource extends RESTDataSource {
  constructor(config) {
    super();
    this.httpCache = new HTTPCache();
    this.baseURL = "https://api.randomuser.me/";
  }
  async getPerson() {
    const { results } = await this.get("");
    return results;
  }
}
