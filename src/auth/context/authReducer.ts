import { types } from "../types/types.ts";

export interface State {
  logged: boolean;
  user: User;
}

interface Action {
  type: string;
  payload: {
    id: string;
    name: string;
  };
}

export interface User {
  id: string;
  name: string;
}

export const authReducer = (state: State, action: Action): void => {
  switch (action.type) {
    case types.login:
      state.logged = true;
      state.user = action.payload;
      break;

    case types.logout:
      state.logged = false;
      state.user.name = "";
      state.user.id = "";
      break;

    default:
      break;
  }
};
