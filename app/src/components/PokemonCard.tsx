import { PokemonClient } from 'pokenode-ts'
import clsx from 'clsx'
import React, { useEffect, useState } from 'react'
import { useStore } from '@nanostores/react'
import { pokemonDetails } from '../store'

type Props = {
  name: string
  size?: 'normal' | 'large'
  key?: React.Key
} & React.HTMLAttributes<HTMLDivElement>

export type PokemonData = {
  name: string
  image: string | null
}

const PokemonCard = ({ name, size = 'normal', ...props }: Props) => {
  const [pokemon, setPokemon] = useState<PokemonData>({
    name: '',
    image: null
  })

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

      setPokemon((data) => ({
        ...data,
        ...pokemonData
      }))
      pokemonDetails.setKey(name, pokemonData)
    }

    fetchData()
  }, [])
  
 return (
 <div className={clsx([
    "transition-all",
    "ease-in-out",
    size === 'normal' && "hover:scale-125 hover:opacity-100",
    size === 'normal' && "group-has-[:hover]:blur-md group-has-[:hover]:opacity-50 hover:!blur-none hover:!opacity-100",
    size === 'large' && 'w-96'])} {...props}>
    {pokemon ? (
      <>
        {pokemon.image ? <img src={pokemon.image} alt={`Image of ${pokemon.name}`} loading='lazy' /> : null}
        <span className="block text-xl font-bold text-center capitalize pt-2 pb-4">{pokemon.name}</span>
      </>
    ) : null}
  </div>)
}

export default PokemonCard