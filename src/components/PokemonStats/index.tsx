import { PokemonStat } from "@/types/Pokemon"

type PokemonStatsProps = {
  stats: PokemonStat[]
}

export default function PokemonStats(props: PokemonStatsProps) {
  const { stats } = props

  return (
    <div className="border p-2 rounded-sm">
      <h3 className="font-bold mb-2">Stats</h3>
      <ul>
        {stats.map((stat: PokemonStat, index: number) => (
          <li key={index} className="flex justify-between">
            <span className="capitalize font-medium ">{stat.stat.name}:</span>
            <span>{stat.base_stat}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}