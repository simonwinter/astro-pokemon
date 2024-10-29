import type { Loader } from "astro/loaders"
import { PokemonSchema } from "./pokemonAPIZodSchema"
export type PokemonLoaderOptions = () => Promise<string[]>

export const pokemonLoader = (pokemonNames: PokemonLoaderOptions): Loader => {
  return {
    name: 'pokemon-loader',
    load: async ({ store, logger, parseData, meta, generateDigest }) => {
      const names = await pokemonNames()
      for (const name of names) {
        logger.info(`loading pokemon: ${name}`)

        // The meta store is used to store metadata, such as sync tokens
        // etags or last-modified times. It is persisted between builds.
        // In this case, we store the last-modified time of the feed, so we
        // can make a conditional request for the data.
        const lastModified = meta.get("last-modified");

        // Make a conditional request for the feed
        const headers = lastModified ? { "If-Modified-Since": lastModified } : undefined;

        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, { headers })

        if (result.status === 304) {
          logger.info(`${name} not modified, skipping`);
          return;
        }

        if (!result.ok || !result.body) {
          throw new Error(`Failed to fetch ${name}: ${result.statusText}`);
        }

        // Store the last-modified header in the meta store so we can
        // send it with the next request
        const modified = result.headers.get("last-modified")
        if (modified != null) {
          meta.set("last-modified", modified)
        }

        // const body = result.body
        let parsePokemon = PokemonSchema.safeParse(await result.json())

        if (!parsePokemon.success) {
          console.log('error', parsePokemon.error.issues)
          continue
        }

        const pokemon = parsePokemon.data

        const data = await parseData({
            id: `${pokemon.id}`,
            data: pokemon,
          })
        
        const digest = generateDigest(data)

        store.set({
            id: pokemon.name,
            data,
            digest,
          })
        }
    },
    schema: PokemonSchema
  }
}