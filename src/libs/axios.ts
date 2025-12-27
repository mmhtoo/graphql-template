import axios from "axios";

export const jsonServerApi = axios.create({
  baseURL: process.env.JSON_SERVER_API,
});
