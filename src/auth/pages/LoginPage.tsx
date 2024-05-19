import type { ReactElement } from "react";
import { useContext } from "react";
import { type NavigateFunction, useNavigate } from "react-router-dom";

import { AuthContext } from "../context";

export const LoginPage = (): ReactElement => {
  const { login } = useContext(AuthContext);
  const navigate: NavigateFunction = useNavigate();
  const onLogin = (): void => {
    const lastPath: string = localStorage.getItem("lastPath") ?? "/";

    login("Jesus");
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={onLogin} type="button">
        Login
      </button>
    </div>
  );
};
