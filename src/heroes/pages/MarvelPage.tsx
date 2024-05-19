import type { ReactElement } from "react";

import { HeroList } from "../components";

export const MarvelPage = (): ReactElement => (
  <div>
    <h1>Marvel Comics</h1>
    <hr />

    <HeroList publisher="Marvel Comics" />
  </div>
);
