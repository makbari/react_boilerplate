import React, { Fragment } from "react";
import { useRoutes } from "react-router-dom";
import appRoutes from "./routes";

function App() {
  const element = useRoutes(appRoutes);
  return <Fragment>{element}</Fragment>;
}

export default App;
