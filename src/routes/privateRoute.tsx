import React from "react";
import { Navigate, useLocation } from "react-router-dom";

// import { useAuth } from '@context';

export const PrivateRoute = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  // const { isAuth } = useAuth();
  const isAuth = false;
  const location = useLocation();

  return isAuth ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: "/",
      }}
      state={{ from: location }}
    />
  );
};
