import { ApplicationConfig } from "../types";

const dev: ApplicationConfig = {
  api: {
    baseUrl: "http://localhost:8080",
    headers: { "Content-type": "application/json" },
  },
};
// TODO: add production environment variables
const prod: ApplicationConfig = {
  api: {
    baseUrl: "http://localhost:8080",

    headers: { "Content-type": "application/json" },
  },
};

export const config: ApplicationConfig =
  process.env.NODE_ENV === "production" ? prod : dev;
