type NamedApiResource = {
  name: string;
  url: string;
};

type PokemonType = {
  slot: number;
  type: NamedApiResource;
};

type PokemonStat = {
  stat: NamedApiResource;
  effort: number;
  base_stat: number;
};

export type Pokemon = {
  id: number;
  name: string;
  types: PokemonType[];
  height: number;
  weight: number;
  base_experience: number;
  stats: PokemonStat[];
};

export type ListPokemon = {
  name: string;
  url: string;
};

export type PokemonListResponse = {
  results: ListPokemon[];
};
