import axios from "axios";

const clientInstance = axios.create({
  baseURL: "/",
  timeout: 3000,
  headers: {},
});
export default clientInstance;
