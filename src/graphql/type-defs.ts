export const typeDefs = `
  type Book {
    id: ID!
    title: String
    author: String
  }

  type Query {
    books: [Book!]!
    book(id: ID!): Book
  }

  type Mutation {
    createBook(input: CreateBookInput!): Book
    deleteBook(input: ID!): Book
  }

  input CreateBookInput {
    title: String!
    author: String!
  }

  type Subscription {
    bookCreated: Book!
    bookDeleted: Book!
  }
`;
