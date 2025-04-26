import { CommonData } from "."

export type PokemonListItem = {
  name: string
  url: string
}

export type PokemonType = {
  slot: number
  type: CommonData
}

export type PokemonStat = {
  base_stat: number | string
  effort?: number
  stat: CommonData
}