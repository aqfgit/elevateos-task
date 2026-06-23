/**
 * Extracts the Pokemon ID from a PokeAPI URL.
 * * @example
 * // returns "25"
 * getPokemonId("https://pokeapi.co/api/v2/pokemon/25/")
 * * @note PokeAPI URLs often end with a trailing slash.
 * The `.filter(Boolean)` ensures we don't accidentally pop an empty string.
 */
export const getPokemonId = (url: string): number | null => {
  const id = url.split('/').filter(Boolean).pop();

  return id ? Number(id) : null;
};
