import ApolloClient from 'apollo-boost';
import fetch from 'node-fetch';

const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  fetch,
});

export default client;
