import { useEffect, useState } from "react"
import type { PokemonData } from "../types"
import { pokemonDetails } from "../store"
import { PokemonClient } from "pokenode-ts"

const initialState = {
  name: '',
  image: null
}

export const useSinglePokemon = (name: string, inView: boolean) => {
  const [state, setState] = useState<PokemonData>(initialState)

  useEffect(() => {
    const fetchData = async () => {
      let pokemonData = pokemonDetails.get()[name]

      if (!pokemonData) {
        const api = new PokemonClient();
        const pokemon = await api
          .getPokemonByName(name)
          .then((data) => data)
          .catch((error) => console.error(error))

        pokemonData = {
          name: '',
          image: null
        }
        if (pokemon) {
          pokemonData = {
            name: pokemon.name,
            image: pokemon.sprites?.other?.['official-artwork']?.front_default || null
          }
        }
      }

      setState((data) => ({
        ...data,
        ...pokemonData,
      }))
      pokemonDetails.setKey(name, pokemonData)
    }

    if (inView) {
      fetchData()
    }
  }, [inView])

  return state
}