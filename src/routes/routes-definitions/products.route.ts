import { RouteDefinition } from "../../types";

export const productRoute: RouteDefinition = {
  path: "/products",
  folder: "pages",
  componentName: "products",
  isProtected: false,
};

export const productItemRoute: RouteDefinition = {
  path: "/products/:id",
  folder: "pages",
  componentName: "products/product.item",
  isProtected: false,
};
