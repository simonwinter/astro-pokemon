import { defineCollection, z } from "astro:content";
import { PokemonClient } from "pokenode-ts";
import { pokemonLoader } from "./pokemonLoader";

const pokemon = defineCollection({
  loader: pokemonLoader(async () => {
    const api = new PokemonClient();
    console.log('loading pokemon')
    const response = await api
      .listPokemons(0, import.meta.env.POKEMON_LIMIT)
      .then((data) => {
        return data.results.map((pokemon) => {
          return pokemon.name
        })
      })
      .catch((error) => console.error(error))

    return response ?? []
  })
})

export const collections = {
  pokemon
}