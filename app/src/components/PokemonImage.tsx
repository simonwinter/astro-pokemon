import React, { useState } from 'react'

import { pokemonDetails } from "../store"

type Props = {
  storeKey: string
} & React.ImgHTMLAttributes<HTMLImageElement>

const PokemonImage = ({ src, alt, storeKey, ...props }: Props) => {
  const [loaded, setLoaded] = useState(false)

  return <>
    <img
        src={src}
        alt={alt}
        onLoad={() => {
          setLoaded(true)
          const storedData = pokemonDetails.get()[storeKey]

          if (storedData) {
            pokemonDetails.setKey(storeKey, {
              ...storedData,
              imageLoaded: true
            })
          }
        }}
        className={`w-auto h-full max-h-60 transition-opacity ease-in-out duration-500 object-contain ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        {...props}
    />
  </>
}
export default PokemonImage
