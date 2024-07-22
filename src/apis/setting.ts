import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://assignment-todolist-api.vercel.app",
  withCredentials: true,
});
