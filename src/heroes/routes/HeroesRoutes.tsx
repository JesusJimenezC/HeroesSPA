import type { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

/* eslint-disable react-perf/jsx-no-jsx-as-prop */
export const HeroesRoutes = (): ReactElement => (
  <div>
    <Navbar />

    <div className="container">
      <Routes>
        <Route element={<MarvelPage />} path="marvel" />
        <Route element={<DcPage />} path="dc" />

        <Route element={<SearchPage />} path="search" />
        <Route element={<HeroPage />} path="hero/:id" />

        <Route element={<Navigate to="/marvel" />} path="/" />
      </Routes>
    </div>
  </div>
);
