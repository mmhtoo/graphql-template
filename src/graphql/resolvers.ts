import { subscribe } from "graphql";
import { EVENTS, pubSub } from "../libs/pubsub";
import type { AppContext } from "../types/graphql";

export const resolvers = {
  Query: {
    books: async (_: any, __: any, context: AppContext) => {
      const res = await context.services.bookService.getBooks();
      return res;
    },
    book: async (_: any, { id }: any, context: AppContext) => {
      const res = await context.services.bookService.getBookById(id);
      return res || null;
    },
  },
  Mutation: {
    createBook: async (_: any, { input }: any, context: AppContext) => {
      const res = await context.services.bookService.createBook(input);
      pubSub.publish(EVENTS.BOOK_CREATED, {
        bookCreated: res,
      });
      return res;
    },
    deleteBook: async (_: any, { input }: any, context: AppContext) => {
      const res = await context.services.bookService.deleteBookById(input);
      pubSub.publish(
        EVENTS.BOOK_DELETED,
        pubSub.publish(EVENTS.BOOK_DELETED, {
          bookDeleted: res,
        })
      );
      return res;
    },
  },
  Subscription: {
    bookCreated: {
      subscribe: () => pubSub.asyncIterator([EVENTS.BOOK_CREATED]),
    },
    bookDeleted: {
      subscribe: () => pubSub.asyncIterator([EVENTS.BOOK_DELETED]),
    },
  },
};
