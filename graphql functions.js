import { gql } from "@apollo/client";


export const GET_PRODUCTS = gql`
  query Data($limit: Int!, $offset: Int!) {
    products(limit: $limit, offset: $offset) {
      data {
        id
        name
        sku
        price
        imageURL
      }
    }
  }
`;

export const GET_PRODUCT = gql`
  query Product($sku: String!) {
    product(sku: $sku) {
      id
      name
      sku
      author
      price
      imageURL
      quantity
      rating
      detail
      review {
        id
        rating
        text
        created_at
        user {
          first_name
          last_name
          photoURL
        }
      }
    }
  }
`;