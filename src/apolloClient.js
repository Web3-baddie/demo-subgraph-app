import { ApolloClient, InMemoryCache } from '@apollo/client';

// Create an instance of Apollo Client
const client = new ApolloClient({
  uri: 'https://gateway.thegraph.com/api/a1f8194a9b36a7bc1703a8fe48b62343/subgraphs/id/6bR1oVsRUUs6czNiB6W7NNenTXtVfNd5iSiwvS4QbRPB', // Ensure this line ends with a quotation mark
  cache: new InMemoryCache(),
});

// Export the client instance
export default client;
