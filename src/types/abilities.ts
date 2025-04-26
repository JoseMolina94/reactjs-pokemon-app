import { CommonData } from "."

export type AbilityItem = {
  ability: CommonData,
  is_hidden: boolean,
  slot: number
}

export type AbilityData = {
  id: number
  name: string
  is_main_series: boolean
  effect_entries: EffectEntry[]
  flavor_text_entries: FlavorText[]
}

export type FlavorText = {
  flavor_text: string
  language: CommonData
  version_group: CommonData
}

export type EffectEntry = {
  effect: string
  language: CommonData
  short_effect: string
}