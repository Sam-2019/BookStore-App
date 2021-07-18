import * as React from "react";
import * as SecureStore from "expo-secure-store";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Main from "./Main";

const httpLink = createHttpLink({
  uri: "https://new-ecommerce-be.herokuapp.com/graphql",
});

const authLink = setContext((_, { headers }) => {
  const result = JSON.parse(SecureStore.getItemAsync(key));

  return {
    headers: {
      ...headers,
      authorization: result ? `Bearer ${result}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({}),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}
