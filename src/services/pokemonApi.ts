import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ListPokemon, Pokemon, PokemonListResponse } from './types';
import { GEN_1_POKEMON_COUNT } from '../constants/api';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: builder => ({
    getPokemonList: builder.query<ListPokemon[], void>({
      query: () => `/pokemon/?limit=${GEN_1_POKEMON_COUNT}`,
      transformResponse: (response: PokemonListResponse) => response.results,
    }),
    getPokemonDetails: builder.query<Pokemon, number>({
      query: id => `/pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailsQuery } = pokemonApi;
