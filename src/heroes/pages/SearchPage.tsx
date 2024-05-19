import queryString from "query-string";
import type { FormEvent, ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "../../hooks/useForm.ts";
import { HeroCard } from "../components";
import type { IHero } from "../data/heroes.ts";
import { getHeroesByName } from "../helpers";

export const SearchPage = (): ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: String(q),
  });

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(`?q=${searchText}`);
  };

  const heroes = getHeroesByName(q as string);

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={handleSearchSubmit}>
            <input
              autoComplete="off"
              className="form-control"
              name="searchText"
              onChange={onInputChange}
              placeholder="Search a hero"
              type="text"
              value={searchText}
            />

            <button className="btn btn-outline-primary mt-1" type="button">
              Search
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div className="animate__animated animate__fadeIn">
            <Messages heroes={heroes} q={q as string} />

            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

interface MessagesProps {
  q: string;
  heroes: IHero[];
}

const Messages = ({ q, heroes }: MessagesProps): ReactElement | null => {
  if (q.trim().length >= 2 && heroes.length === 0) {
    return (
      <div className="alert alert-danger">
        No hero with: <b>{q}</b>
      </div>
    );
  } else if (q.trim().length === 0) {
    return <div className="alert alert-info">Search a hero</div>;
  } else {
    return null;
  }
};
