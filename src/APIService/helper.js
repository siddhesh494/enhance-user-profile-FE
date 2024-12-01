import axios from "axios"
import { getCookie } from "../utils/utils";

export const instance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
  headers: {
    authorization: `Bearer ${getCookie("auth")}`
  }
});

