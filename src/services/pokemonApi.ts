import { GEN_1_POKEMON_COUNT } from '@/constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ListPokemon, PokemonListResponse, Pokemon } from '@/services/types';
import { getPokemonId } from '@/services/utils';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonList: builder.query<ListPokemon[], void>({
      query: () => `/pokemon/?limit=${GEN_1_POKEMON_COUNT}`,
      transformResponse: (response: PokemonListResponse) =>
        response.results.map(pokemon => ({
          name: pokemon.name,
          id: getPokemonId(pokemon.url),
        })),
    }),
    getPokemonDetails: builder.query<Pokemon, number>({
      query: id => `/pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailsQuery } = pokemonApi;
