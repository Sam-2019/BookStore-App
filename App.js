import * as React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import Main from "./Main";

const client = new ApolloClient({
  uri: "https://new-ecommerce-be.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query {
        products {
          count
          data {
            imageURL
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Main />
    </ApolloProvider>
  );
}
