import type { ReactElement } from "react";
import { Link } from "react-router-dom";

import type { IHero } from "../data/heroes.ts";

const CharactersByHero = ({
  characters,
  alter_ego,
}: {
  characters: string;
  alter_ego: string;
}): ReactElement => {
  if (characters === alter_ego) return <> </>;
  return <p className="card-text">{characters}</p>;
};

export const HeroCard = ({
  id,
  superhero,
  first_appearance,
  characters,
  alter_ego,
}: IHero): ReactElement => {
  const heroImageUrl = `./assets/heroes/${id}.jpg`;

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img alt={superhero} className="card-img" src={heroImageUrl} />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>

              <CharactersByHero alter_ego={alter_ego} characters={characters} />

              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
