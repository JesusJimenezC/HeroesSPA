import type { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";

import { LoginPage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRote } from "./PrivateRote.tsx";
import { PublicRoute } from "./PublicRoute.tsx";

/* eslint-disable react-perf/jsx-no-jsx-as-prop */
export const AppRouter = (): ReactElement => (
  <Routes>
    <Route
      element={
        <PublicRoute>
          <LoginPage />
        </PublicRoute>
      }
      path="login"
    />

    <Route
      element={
        <PrivateRote>
          <HeroesRoutes />
        </PrivateRote>
      }
      path="/*"
    />
  </Routes>
);
