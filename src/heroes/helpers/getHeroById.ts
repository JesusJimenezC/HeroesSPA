import type { IHero } from "../data/heroes.ts";
import { heroes } from "../data/heroes.ts";

export const getHeroById = (id: string): IHero =>
  heroes.find((hero) => hero.id === id) ?? ({} as IHero);
