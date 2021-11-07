import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import person from "./types/person";
import cointype from "./types/cointype";
import personresolver from "./resolvers/personresolver";
import RandomUserDataSource from "./datasources/RandomUserDataSource";
import CoinDataSource from "./datasources/CoinDataSource";
import coinresolver from "./resolvers/coinresolver";
import _ from "lodash";
//import RandomUserDataSource from "./datasources/RandomUserDataSource";
// const typeDefs=gql`
//     type Query{
//         hello:String
//     }
// `;

// const resolvers={
//     Query:{
//         hello: ()=>{
//             return "using apollo server"
//         },
//     },
// };
const Query = gql`
  type Query {
    _empty: String
  }
`;
const dataSources = () => ({
  personApi: new RandomUserDataSource(),
  coinApi: new CoinDataSource(),
});
async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs: [Query,person, cointype],
    resolvers: _.merge(personresolver,coinresolver),
    dataSources,
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app });
  app.use((req, res) => {
    res.send("Voila");
  });
  app.listen(4000, () => console.log(" server started at 4000"));
}
startServer();
