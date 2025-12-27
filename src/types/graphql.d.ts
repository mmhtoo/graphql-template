import type { BaseContext } from "@apollo/server";
import type { IBookService } from "../services/book.service";

export interface AppContext extends BaseContext {
  dataSources: {
    jsonServerApi: import("axios").AxiosInstance;
  };
  services: {
    bookService: IBookService;
  };
}
