import RandomUserDataSource from "../datasources/RandomUserDataSource";

const PersonResolver = {
  Query: {
    randomPerson: (_, __, { dataSources }) => {
        return dataSources.personApi.getPerson()
    },
  },
};
export default PersonResolver;
