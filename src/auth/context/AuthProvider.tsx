import type { ReactElement, ReactNode } from "react";
import { useCallback, useMemo } from "react";
import { useImmerReducer } from "use-immer";

import { types } from "../types/types.ts";
import type { AuthContextValue, State } from "./";
import { AuthContext, authReducer } from "./";

const init = (): State => {
  const userItem = localStorage.getItem("user");
  const user =
    userItem !== null && userItem !== "" ? JSON.parse(userItem) : null;
  return {
    logged: Boolean(user),
    user,
  };
};

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [authState, dispatch] = useImmerReducer(authReducer, {}, init);

  const login = useCallback(
    (name: string): void => {
      const action = {
        type: types.login,
        payload: {
          id: "1",
          name,
        },
      };

      localStorage.setItem("user", JSON.stringify(action.payload));

      dispatch(action);
    },
    [dispatch],
  );

  const logout = useCallback((): void => {
    const action = {
      type: types.logout,
      payload: {
        id: "",
        name: "",
      },
    };

    localStorage.removeItem("user");

    dispatch(action);
  }, [dispatch]);

  const value = useMemo<AuthContextValue>(
    () => ({ login, user: authState.user, logout, logged: authState.logged }),
    [login, logout, authState],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
