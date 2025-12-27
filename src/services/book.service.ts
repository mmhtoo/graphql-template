// book service
export abstract class IBookService {
  abstract getBooks(): Promise<any>;
  abstract getBookById(id: string): Promise<any>;
  abstract createBook(input: any): Promise<any>;
  abstract deleteBookById(id: string): Promise<any>;
}
