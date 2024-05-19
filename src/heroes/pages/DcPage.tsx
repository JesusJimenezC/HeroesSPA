import type { ReactElement } from "react";

import { HeroList } from "../components";

export const DcPage = (): ReactElement => (
  <div>
    <h1>DC Comics</h1>
    <hr />

    <HeroList publisher="DC Comics" />
  </div>
);
