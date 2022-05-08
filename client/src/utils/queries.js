import { gql } from "@apollo/client";

//export const QUERY_THOUGHTS = gql`
  //query thoughts($username: String) {
    //thoughts(username: $username) {
     // _id
      //thoughtText
      //createdAt
      //username
      //reactionCount
      //reactions {
        //_id
       // createdAt
       // username
        //reactionBody
      //}
    //}
  //}
//`;
//export const QUERY_THOUGHT = gql`
  //query thought($id: ID!) {
    //thought(_id: $id) {
     // _id
      //thoughtText
      //createdAt
      //username
      //reactionCount
      //reactions {
       // _id
        //createdAt
        //username
        //reactionBody
      //}
    //}
  //}
//`;

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
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