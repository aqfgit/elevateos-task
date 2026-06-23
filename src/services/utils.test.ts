import { getPokemonId } from '@/services/utils';

describe('getPokemonId', () => {
  it('should extract the ID from a standard URL with a trailing slash', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/25/';
    expect(getPokemonId(url)).toBe(25);
  });

  it('should extract the ID from a URL without a trailing slash', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/151';
    expect(getPokemonId(url)).toBe(151);
  });

  it('should return null if the URL is missing the ID segment', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    expect(getPokemonId(url)).toBeNull();
  });

  it('should return null if the ID segment is not a valid number', () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur/';
    expect(getPokemonId(url)).toBeNull();
  });

  it('should return null if the the url is an empty string', () => {
    const url = '';
    expect(getPokemonId(url)).toBeNull();
  });
});
