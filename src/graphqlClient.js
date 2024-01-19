import { GraphQLClient } from 'graphql-request';

const url = 'https://oneonta.stepzen.net/api/soft-manatee/__graphql';

const apiKey = process.env.EXPO_PUBLIC_GRAPHQL_API_KEY;

const client = new GraphQLClient(url, {
  headers: {
    Authorization: `apikey ${apiKey}`,
  },
});

export default client;
