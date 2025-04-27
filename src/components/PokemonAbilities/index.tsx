'use client'

import { useState } from "react"
import { AbilityData, EffectEntry, AbilityItem as TAbilityItem } from "@/types/abilities"
import AbilityItem from "./AbilityItem"

type PokemonAbilitiesProps = {
  abilities: TAbilityItem[]
}

export default function PokemonAbilities(props: PokemonAbilitiesProps) {
  const { abilities } = props
  const [abilitySelected, setAbilitySelected] = useState<AbilityData | null>(null)

  const showEffect = (language = 'en') => {
    const effect = abilitySelected?.effect_entries.find((effect: EffectEntry) => effect?.language?.name === language)

    return effect?.effect
  }

  return (
    <div className="w-full">
      <h3 className="font-bold col-span-2 mb-2">Abilities</h3>
      <div className="grid w-full gap-4 xs:grid-cols-1 md:grid-cols-6">

        <ul className="col-span-2">
          {abilities.map((ability: TAbilityItem, index: number) => (
            <AbilityItem 
              ability={{...ability}}
              key={`ability-${index}`}
              setAbilitySelected={setAbilitySelected}
            />
          ))}
        </ul>

        {
          abilitySelected &&
            <div className="col-span-4 border rounded-sm py-1.5 px-2 ">
              <h3 className="font-bold text-2xl mb-2 capitalize" >{abilitySelected?.name}</h3>
              <p className="text-sm">
                {showEffect()}
              </p>
            </div>
        }
        
      </div>

    </div>
  )
}