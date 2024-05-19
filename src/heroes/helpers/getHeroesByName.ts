import type { IHero } from "../data/heroes.ts";
import { heroes } from "../data/heroes.ts";

export const getHeroesByName = (name: string): IHero[] => {
  name = name.trim().toLowerCase();
  if (!name) return [];
  return heroes.filter((hero) => hero.superhero.toLowerCase().includes(name));
};
