import { cacheExchange, createClient, fetchExchange, Provider, useQuery } from 'urql';

const client = createClient({
  url: 'https://gateway.thegraph.com/api/a1f8194a9b36a7bc1703a8fe48b62343/subgraphs/id/Esag956C6WUQwfP8SstPAXCmd2QhApYprrGxcvfydE7c',
  exchanges: [cacheExchange, fetchExchange],
});

const QUERY = `{
  contracts(first: 5) {
    id
    asERC721 {
      id
    }
  }
  accounts(first: 5) {
    id
    tokens {
      id
    }
    delegationsOwner {
      id
    }
    delegationsOperator {
      id
    }
  }
}`;

const ExampleComponent = () => {
  const [result] = useQuery({ query: QUERY });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>
}

const WrappedExampleComponent = () => (
  <Provider value={client}>
    <ExampleComponent />
  </Provider>
);

export default WrappedExampleComponent;
