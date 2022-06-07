import React from "react";
import { Navigate } from "react-router-dom";
import { Loadable } from "./Loadable";

const getElement = ({
  folder,
  componentName,
}: {
  folder: string;
  componentName: string;
}): React.ReactNode => {
  const isAuth = true;
  if (isAuth) {
    return <Loadable folder={folder} componentName={componentName} />;
  }
  return (
    <Navigate
      to={{
        pathname: "/",
      }}
      state={{ from: "/" }}
    />
  );
};

export default getElement;
