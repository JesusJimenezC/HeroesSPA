import type { Context } from "react";
import { createContext } from "react";

import type { User } from "./authReducer.ts";

export interface AuthContextValue {
  login: (name: string) => void;
  logout: () => void;
  user: User;
  logged: boolean;
}

export const AuthContext: Context<AuthContextValue> = createContext(
  {} as AuthContextValue,
);
