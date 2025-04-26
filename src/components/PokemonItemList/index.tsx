'use client'

import { useContext, useState, useEffect } from "react"
import useGetPokemonByUrl from "@/hooks/useGetPokemonByUrl"
import { PokemonListItem, PokemonType } from "@/types/Pokemon"
import { PokemonSelectedContext } from "@/contexts/PokemonSelectedContext"
import PokemonStats from "../PokemonStats"

export default function PokemonItemList(props: PokemonListItem) {
  const { url } = props
  const { data: pokemonData, isLoading: loadingPokemon, error: pokemonError } = useGetPokemonByUrl(url)
  const [isExpanded, setIsExpanded] = useState(false)
  const { pokemonSelected, setPokemonSelected } = useContext(PokemonSelectedContext)

  const handleDoubleClick = () => {
    setIsExpanded(!isExpanded)
    setPokemonSelected(pokemonData.id)

    if (!!isExpanded) {
      setPokemonSelected('')
    }
  };

  useEffect(() => {
    if (pokemonSelected !== pokemonData?.id) {
      setIsExpanded(false)
    }
  }, [pokemonSelected])

  return (!loadingPokemon &&
    <>
      <tr
        className={`border-b table-item ${pokemonSelected === pokemonData.id && 'bg-gray-200 text-black border-b-0'} `}
        onDoubleClick={handleDoubleClick}
      >
        <td className="table-item-cell w-20 text-center">
          {pokemonData?.id}
        </td>

        <td className="table-item-cell capitalize ">
          {pokemonData?.name}
        </td>

        <td className="table-item-cell flex gap-2">
          <img
            src={pokemonData?.sprites?.front_default}
            alt={pokemonData?.name}
            className="w-24 h-24 object-contain"
            draggable="false"
          />
        </td>
      </tr>

      {isExpanded && (
        <tr className="bg-gray-200 text-black">
          <td colSpan={4} className="px-2 py-2">
            <div className="bg-white rounded-lg shadow-inner">

              <div>
                <h3 className="font-bold text-center" >Types:</h3>
                <div className="flex flex-wrap gap-1 w-full p-2 justify-center" >

                  {
                    (pokemonData?.types || []).map((type: PokemonType, tIndex: number) => (
                      <span
                        className={`pokemon-type-tag type-${type.type.name}`}
                        key={`${pokemonData?.name}-type-${tIndex}`}
                      >
                        {type.type.name}
                      </span>
                    ))
                  }
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 ">

                <PokemonStats 
                  stats={[
                    ...pokemonData?.stats,
                    {
                      base_stat: `${pokemonData.weight} Kg`,
                      stat: {
                        name: "weight"
                      }
                    }
                  ]}
                />

                <div>
                  <h3 className="font-bold col-span-2 mb-2">Abilities</h3>
                  <ul>
                    {pokemonData?.abilities.map((ability: any, index: number) => (
                      <li key={index} className="capitalize">{ability.ability.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
          </td>
        </tr>
      )}

    </>
  )
}