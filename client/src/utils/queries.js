import { gql } from "@apollo/client";

export const QUERY_PRODUCT = gql`
  query product($_id: ID!) {
    product(_id: $_id) {
      _id
      name
      image
      price
      quantity
      Category {
        _id
        name
      }
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;


export const QUERY_USER = gql`
  {
    user {
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          price
          quantity
          image
        }
      }
    }
  }
`;