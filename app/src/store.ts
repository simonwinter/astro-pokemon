import { atom, map } from 'nanostores';
import type { NamedAPIResource } from 'pokenode-ts';
import type { PokemonData } from './types';

type Pokemon = {
  imageLoaded?: boolean
} & PokemonData

export const pokemonList = atom<NamedAPIResource[]>([])
export const pokemonDetails = map<Record<string, Pokemon>>({})