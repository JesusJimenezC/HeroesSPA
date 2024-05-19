import type { IHero } from "../data/heroes.ts";
import { heroes } from "../data/heroes.ts";

type Publisher = "DC Comics" | "Marvel Comics";

export const getHeroesByPublisher = (publisher: string): IHero[] => {
  const validPublishers: Publisher[] = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher as Publisher)) {
    throw new Error(`Publisher "${publisher}" is not valid`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
