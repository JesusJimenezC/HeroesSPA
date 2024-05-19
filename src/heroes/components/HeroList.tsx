import type { ReactElement } from "react";
import { useMemo } from "react";

import { getHeroesByPublisher } from "../helpers";
import { HeroCard } from "./";

interface HeroListProps {
  publisher: string;
}

export const HeroList = ({ publisher }: HeroListProps): ReactElement => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
