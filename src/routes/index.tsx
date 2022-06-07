import React from "react";
import { RouteObject } from "react-router";
import home from "./routes-definitions/home.route";
import {
  productItemRoute,
  productRoute,
} from "./routes-definitions/products.route";

import { Loadable } from "./Loadable";
import { RouteDefinition } from "../types";

const generateRoutes = (routes: RouteDefinition[]): RouteObject[] => {
  return routes.map(({ path, componentName, folder, children }) => ({
    element: <Loadable folder={folder} componentName={componentName} />,
    children: children && generateRoutes(children),
    path,
  }));
};

const routes = generateRoutes([home, productRoute, productItemRoute]);

export default routes;
