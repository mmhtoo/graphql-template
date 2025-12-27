import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client/react";
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Book = {
  __typename?: "Book";
  author?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
};

export type CreateBookInput = {
  author: Scalars["String"]["input"];
  title: Scalars["String"]["input"];
};

export type Mutation = {
  __typename?: "Mutation";
  createBook?: Maybe<Book>;
  deleteBook?: Maybe<Book>;
};

export type MutationCreateBookArgs = {
  input: CreateBookInput;
};

export type MutationDeleteBookArgs = {
  input: Scalars["ID"]["input"];
};

export type Query = {
  __typename?: "Query";
  book?: Maybe<Book>;
  books: Array<Book>;
};

export type QueryBookArgs = {
  id: Scalars["ID"]["input"];
};

export type Subscription = {
  __typename?: "Subscription";
  bookCreated: Book;
  bookDeleted: Book;
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never }>;

export type GetBooksQuery = {
  __typename?: "Query";
  books: Array<{
    __typename?: "Book";
    id: string;
    title?: string | null;
    author?: string | null;
  }>;
};

export type CreateBookMutationVariables = Exact<{
  input: CreateBookInput;
}>;

export type CreateBookMutation = {
  __typename?: "Mutation";
  createBook?: {
    __typename?: "Book";
    id: string;
    title?: string | null;
    author?: string | null;
  } | null;
};

export type OnCreatedBookSubscriptionVariables = Exact<{
  [key: string]: never;
}>;

export type OnCreatedBookSubscription = {
  __typename?: "Subscription";
  bookCreated: {
    __typename?: "Book";
    title?: string | null;
    author?: string | null;
    id: string;
  };
};

export const GetBooksDocument = gql`
  query getBooks {
    books {
      id
      title
      author
    }
  }
`;

/**
 * __useGetBooksQuery__
 *
 * To run a query within a React component, call `useGetBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBooksQuery(
  baseOptions?: Apollo.QueryHookOptions<GetBooksQuery, GetBooksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetBooksQuery, GetBooksQueryVariables>(
    GetBooksDocument,
    options
  );
}
export function useGetBooksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetBooksQuery,
    GetBooksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetBooksQuery, GetBooksQueryVariables>(
    GetBooksDocument,
    options
  );
}
// @ts-ignore
export function useGetBooksSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetBooksQuery,
    GetBooksQueryVariables
  >
): Apollo.UseSuspenseQueryResult<GetBooksQuery, GetBooksQueryVariables>;
export function useGetBooksSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>
): Apollo.UseSuspenseQueryResult<
  GetBooksQuery | undefined,
  GetBooksQueryVariables
>;
export function useGetBooksSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetBooksQuery, GetBooksQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetBooksQuery, GetBooksQueryVariables>(
    GetBooksDocument,
    options
  );
}
export type GetBooksQueryHookResult = ReturnType<typeof useGetBooksQuery>;
export type GetBooksLazyQueryHookResult = ReturnType<
  typeof useGetBooksLazyQuery
>;
export type GetBooksSuspenseQueryHookResult = ReturnType<
  typeof useGetBooksSuspenseQuery
>;
export type GetBooksQueryResult = Apollo.QueryResult<
  GetBooksQuery,
  GetBooksQueryVariables
>;
export const CreateBookDocument = gql`
  mutation createBook($input: CreateBookInput!) {
    createBook(input: $input) {
      id
      title
      author
    }
  }
`;
export type CreateBookMutationFn = Apollo.MutationFunction<
  CreateBookMutation,
  CreateBookMutationVariables
>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBookMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateBookMutation,
    CreateBookMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(
    CreateBookDocument,
    options
  );
}
export type CreateBookMutationHookResult = ReturnType<
  typeof useCreateBookMutation
>;
export type CreateBookMutationResult =
  Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<
  CreateBookMutation,
  CreateBookMutationVariables
>;
export const OnCreatedBookDocument = gql`
  subscription onCreatedBook {
    bookCreated {
      title
      author
      id
    }
  }
`;

/**
 * __useOnCreatedBookSubscription__
 *
 * To run a query within a React component, call `useOnCreatedBookSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreatedBookSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreatedBookSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreatedBookSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    OnCreatedBookSubscription,
    OnCreatedBookSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<
    OnCreatedBookSubscription,
    OnCreatedBookSubscriptionVariables
  >(OnCreatedBookDocument, options);
}
export type OnCreatedBookSubscriptionHookResult = ReturnType<
  typeof useOnCreatedBookSubscription
>;
export type OnCreatedBookSubscriptionResult =
  Apollo.SubscriptionResult<OnCreatedBookSubscription>;
