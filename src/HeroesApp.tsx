import type { ReactElement } from "react";

import { AuthProvider } from "./auth";
import { AppRouter } from "./router/AppRouter.tsx";

export const HeroesApp = (): ReactElement => (
  <AuthProvider>
    <AppRouter />
  </AuthProvider>
);
