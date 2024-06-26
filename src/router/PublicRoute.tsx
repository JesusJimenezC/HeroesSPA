import type { ReactElement } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../auth";

export const PublicRoute = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const { logged } = useContext(AuthContext);

  return !logged ? children : <Navigate to="/marvel" />;
};
