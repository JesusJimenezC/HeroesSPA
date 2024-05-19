import type { ReactElement } from "react";
import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import type { IHero } from "../data/heroes.ts";
import { getHeroById } from "../helpers";

const isEmpty = (value: IHero): boolean => Object.keys(value).length === 0;

export const HeroPage = (): ReactElement => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id ?? ""), [id]);
  const navigate = useNavigate();
  const onNavigateBack = (): void => navigate(-1);

  if (isEmpty(hero)) return <Navigate to="/marvel" />;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          alt={hero.superhero}
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={`/heroes/${id}.jpg`}
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego: </b> {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher: </b> {hero.publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance: </b> {hero.first_appearance}
          </li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button
          className="btn btn-outline-primary"
          onClick={onNavigateBack}
          type="button"
        >
          Return
        </button>
      </div>
    </div>
  );
};
