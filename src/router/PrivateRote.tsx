import type { ReactElement } from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "../auth";

export const PrivateRote = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const { search, pathname } = useLocation();
  const { logged } = useContext(AuthContext);

  const lastPath = `${pathname}${search}`;
  localStorage.setItem("lastPath", lastPath);

  return logged ? children : <Navigate to="/login" />;
};
