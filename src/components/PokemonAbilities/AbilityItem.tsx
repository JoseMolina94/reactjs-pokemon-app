'use client'

import { Dispatch, SetStateAction } from "react"
import useGetAbilityByUrl from "@/hooks/useGetAbilityByUrl"
import { AbilityData, AbilityItem as TAbilityItem } from "@/types/abilities"

type AbilityItemProps = {
  ability: TAbilityItem
  setAbilitySelected: Dispatch<SetStateAction<AbilityData | null>>
}

export default function AbilityItem (props: AbilityItemProps) {
  const { ability, setAbilitySelected } = props
  const { data: abilityData, isLoading: loadingAbility, error: abilityError } = useGetAbilityByUrl(ability?.ability?.url || '')

  const onClick = () => {
    setAbilitySelected(abilityData)
  }

  return ((!loadingAbility && !abilityError) &&
    <li 
      className="capitalize font-medium cursor-pointer"
      onClick={onClick}
    >
      {abilityData?.name}
    </li>
  )
}