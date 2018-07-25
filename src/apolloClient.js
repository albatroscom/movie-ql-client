import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://movieql-osezlvyqsg.now.sh/"
    // uri: "https://movie-ql-drbrwtmlrr.now.sh"
});

export default client;