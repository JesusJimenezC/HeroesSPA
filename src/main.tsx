// eslint-disable-next-line filename-rules/match
import "./styles.css";

// eslint-disable-next-line @typescript-eslint/naming-convention
import React from "react";
// eslint-disable-next-line import/no-unresolved,@typescript-eslint/naming-convention
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { HeroesApp } from "./HeroesApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>,
);
