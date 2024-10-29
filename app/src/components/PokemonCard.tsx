import clsx from 'clsx'
import React, { useRef } from 'react'
import { useStore } from '@nanostores/react'
import PokemonImage from './PokemonImage'
import { useIntersection } from '../hooks/useIntersection'
import { useSinglePokemon } from '../hooks/useSinglePokemon'
import { pokemonDetails } from "../store"
type Props = {
  name: string
  size?: 'normal' | 'large'
  key?: React.Key
} & React.HTMLAttributes<HTMLDivElement>

const PokemonCard = ({ name, size = 'normal', ...props }: Props) => {

  const cardRef = useRef(null)

  // IntersectionObserver to detect when the image is in view
  const inView = useIntersection(cardRef, {
    rootMargin: '0px 0px 400px 0px', 
    threshold: 0.00001
  })

  // fetch the named pokemon if the card is in view.
  const pokemon = useSinglePokemon(name, inView)
  const stored = useStore(pokemonDetails)
  const loaded = stored[name]?.imageLoaded ?? false
  
 return (
 <div className={clsx([
    "transition-all",
    'transform-gpu',
    "ease-in-out",
    'bg-gradient-to-b from-black/50 to-transparent',
    'p-1',
    'rounded-md',
    'relative',
    loaded && 'pointer-events-auto',
    !loaded && 'pointer-events-none',
    loaded && size === 'normal' && "hover:scale-125 hover:opacity-100",
    loaded && size === 'normal' && "group-has-[:hover]:blur-md group-has-[:hover]:opacity-50 hover:!blur-none hover:!opacity-100",
    size === 'large' && 'w-96'])}
    ref={cardRef} 
    {...props}>
    {pokemon ? (
      <div className={clsx([
        'bg-gray-200 rounded-[4px] p-10 h-full flex flex-col justify-between items-stretch',
        !loaded && 'min-h-96',
        loaded && 'min-h-fit'
      ])}>
        <div className={clsx([
          "transition-opacity duration-500 absolute inset-0 font-mono m-auto flex justify-center items-center",
          loaded && 'opacity-0 pointer-events-none'
        ])}>loading</div>
        {pokemon.image ? <PokemonImage storeKey={pokemon.name} src={pokemon.image} alt={`${pokemon.name}`} /> : null}
        <span className="block mt-auto text-xl font-bold text-center capitalize pt-2 pb-4">{name}</span>
      </div>
    ) : null}
  </div>)
}

export default PokemonCard