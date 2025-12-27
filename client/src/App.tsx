import { Fragment } from "react/jsx-runtime";
import {
  useCreateBookMutation,
  useGetBooksQuery,
  useOnCreatedBookSubscription,
} from "./generated/graphql";
import { getBooks } from "./graphql/operations";
import { useEffect } from "react";

let total = 0;
const max = 2;

export default function App() {
  const { data: booksRes, loading, refetch } = useGetBooksQuery();
  const [createBook, { loading: isLoadingCreateBook }] = useCreateBookMutation({
    refetchQueries: [
      {
        query: getBooks,
      },
    ],
  });

  useEffect(() => {
    // const interval = setInterval(async () => {
    //   if (total < max) {
    //     await createBook({
    //       variables: {
    //         input: {
    //           title: `Book ${total + 1}`,
    //           author: `Author ${total + 1}`,
    //         },
    //       },
    //     });
    //     total++;
    //   } else {
    //     clearInterval(interval);
    //   }
    // }, 3000);
    // return () => clearInterval(interval);
  }, []);

  useOnCreatedBookSubscription({
    onData: ({ data: { data: resPayload } }) => {
      console.log(resPayload);
      if (resPayload) {
        refetch();
        alert(JSON.stringify(resPayload, null, 2));
      }
    },
  });

  return (
    <Fragment>
      <button
        onClick={() => {
          createBook({
            variables: {
              input: {
                title: `Book ${++total}`,
                author: `Author ${++total}`,
              },
            },
          });
        }}
        disabled={isLoadingCreateBook}
      >
        {isLoadingCreateBook ? "Loading..." : "Create book"}
      </button>
      {loading ? (
        "Loading books..."
      ) : (
        <pre>{JSON.stringify(booksRes?.books || [], null, 2)}</pre>
      )}
    </Fragment>
  );
}
