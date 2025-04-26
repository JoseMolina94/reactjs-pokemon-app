import { PokemonListItem } from "@/types/Pokemon"
import PokemonItemList from "../PokemonItemList"

type PokemonListProps = {
  list: PokemonListItem[]
  isLoading?: boolean
}

export default function PokemonList (props: PokemonListProps) {
  const { list, isLoading = false } = props

  return ( !isLoading &&
    <div>
      <table className="w-full border-1 rounded-md bg-white" >
        <thead className="table-header">
          <tr>
            <th className="table-header-item border-r">Order</th>
            <th className="table-header-item border-r">Name</th>
            <th className="table-header-item border-r">Image</th>
          </tr>
        </thead>
        <tbody>
          {
            list.map((item, index) => (
              <PokemonItemList 
                {...item} 
                key={`pokemon-item-list-${index}`}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}