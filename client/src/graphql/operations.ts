import { gql } from "@apollo/client";

export const getBooks = gql`
  query getBooks {
    books {
      id
      title
      author
    }
  }
`;

export const createBook = gql`
  mutation createBook($input: CreateBookInput!) {
    createBook(input: $input) {
      id
      title
      author
    }
  }
`;

export const onCreatedBook = gql`
  subscription onCreatedBook {
    bookCreated {
      title
      author
      id
    }
  }
`;
