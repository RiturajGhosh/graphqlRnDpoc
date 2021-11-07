import CoinDataSource from "../datasources/CoinDataSource";

const CoinResolver= {
    Query:{
        getCoinData:(_, __, { dataSources })=>{
            return dataSources.coinApi.getCoin();
        }
    }
}
export default CoinResolver;