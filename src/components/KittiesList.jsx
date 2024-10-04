import { cacheExchange, createClient, fetchExchange, Provider, useQuery } from 'urql';
import './KittiesList.css';

const client = createClient({
  url: 'https://gateway.thegraph.com/api/a1f8194a9b36a7bc1703a8fe48b62343/subgraphs/id/Esag956C6WUQwfP8SstPAXCmd2QhApYprrGxcvfydE7c',
  exchanges: [cacheExchange, fetchExchange],
});

const QUERY = `{
  contracts(first: 9) {
    id
    asERC721 {
      id
    }
  }
  accounts(first: 9) {
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

  if (fetching) return <p className="message">Loading...</p>;
  if (error) return <p className="message error-message">Error: {error.message}</p>;

  return (
    <div className="component-container">
      <div className="card">
        <h1>Fetched Accounts</h1>
        {data?.accounts?.map((account, index) => (
          <div key={index} className="account-container">
            <h2 className="account-title">Account ID: {account.id}</h2>
            <div className="token-info">
              <strong>Tokens:</strong> {account.tokens.map(token => token.id).join(', ')}
            </div>
            <div className="token-info">
              <strong>Delegations Owner:</strong> {account.delegationsOwner?.map(owner => owner.id).join(', ') || 'None'}
            </div>
            <div className="token-info">
              <strong>Delegations Operator:</strong> {account.delegationsOperator?.map(operator => operator.id).join(', ') || 'None'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const WrappedExampleComponent = () => (
  <Provider value={client}>
    <ExampleComponent />
  </Provider>
);

export default WrappedExampleComponent;
