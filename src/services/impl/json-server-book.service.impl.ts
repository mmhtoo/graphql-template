import type { AxiosInstance } from "axios";
import type { IBookService } from "../book.service";

export class JsonServerBookServiceImpl implements IBookService {
  constructor(private readonly api: AxiosInstance) {}

  async deleteBookById(id: string): Promise<any> {
    try {
      const res = await this.api.delete(`/books/${id}`);
      return res.data;
    } catch (e) {
      return null;
    }
  }

  async createBook(input: any): Promise<any> {
    try {
      const res = await this.api.post("/books", input);
      return res.data;
    } catch (e) {
      return null;
    }
  }

  async getBookById(id: string): Promise<any> {
    try {
      const res = await this.api.get(`/books/${id}`);
      return res.data;
    } catch (e) {
      return null;
    }
  }

  async getBooks() {
    try {
      const res = await this.api.get("/books");
      return res.data;
    } catch (e) {
      return [];
    }
  }
}
