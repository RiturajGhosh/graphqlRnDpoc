import { gql } from "apollo-server-core";
const personType = gql`
  type Person {
    gender: String
    email: String
    phone: String
  }
  extend type Query {
    randomPerson: [Person],
    hello: String
  }
`;
export default personType;
