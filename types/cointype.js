import { gql } from "apollo-server-core";

const cointype = gql`
  extend type Query {
    getCoinData: [coin]
  }
  type coin {
    symbol: String
    priceChange: String
    priceChangePercent: String
  }
`;
export default cointype;