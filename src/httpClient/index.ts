import axios from "axios";
import { config } from "../config";

const httpClient = axios.create({
  baseURL: config.api.baseUrl,
  headers: config.api.headers,
});

export default httpClient;
