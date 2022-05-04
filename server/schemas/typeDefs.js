// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    email: String
    orders: [Order]
  }

  type Product {
    _id: ID
    name: String
    image: String
    price: Float
    quantity: Int
    Category: Category
  }

  type Category {
    _id: ID
    name: String
  }

  type Checkout {
    session: ID
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String, password: String): User
    addOrder(products: [ID]!): Order
    updateProduct(_id: ID!, quantity: Int!): Product
  }

  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
