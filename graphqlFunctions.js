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

export const GET_CART = gql`
  query Carts($id: ID!) {
    carts(id: $id) {
      cartID
      productID
      sku
      name
      author
      price
      imageURL
      quantity
    }
  }
`;

export const DELETE_CART = gql`
  mutation DeleteCart($id: ID!, $user: ID!) {
    deleteCart(id: $id, user: $user) {
      id
    }
  }
`;

export const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user
      token
      tokenexpiration
    }
  }
`;

export const SIGNUP = gql`
  mutation Signup(
    $password: String!
    $first_name: String!
    $last_name: String!
    $email: String!
  ) {
    signup(
      password: $password
      first_name: $first_name
      last_name: $last_name
      email: $email
    ) {
      id
      password
      first_name
      last_name
      email
    }
  }
`;
