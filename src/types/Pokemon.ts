export type PokemonListItem = {
  name: string
  url: string
}

export type PokemonType = {
  slot: number
  type: {
    name: string
    url: string
  }
}

export type PokemonStat = {
  base_stat: number | string
  effort?: number
  stat: {
    name: string
    url?: string
  }
}