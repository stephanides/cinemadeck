import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { getCookie } from '../lib/auth/session';
import resolvers from './resolvers';
import data from './state';
import typeDefs from './typeDefs';

const domain = process.env.NODE_ENV === 'production' ? 'cinemadeck.codebrothers.sk' : 'localhost';
const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
const port = 3004;

const customFetch = (uri, options) => {
  const token = getCookie('jwt', options);

  return fetch(uri, {
    ...options,
    headers: {
      ...options.headers,
      'x-access-token': token || '',
    },
  });
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: process.env.NODE_ENV === 'production' ? `${protocol}://${domain}/api` : `${protocol}://${domain}:${port}/api`,
  fetch: customFetch,
  resolvers,
  typeDefs,
});

client.cache.writeData({ data });
client.onResetStore(() => client.cache.writeData({ data }));

export default withApollo(
  () => client, { getDataFromTree: 'never' }, // 'always', 'never', 'ssr'
);
