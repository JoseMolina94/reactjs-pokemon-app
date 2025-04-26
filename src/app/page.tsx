'use client'

import { useState } from "react"
import PokemonList from "@/components/PokemonList"
import usePokemonList from "@/hooks/usePokemonList"
import Pagination from "@/components/Pagination"


export default function Home() {
  const [page, setPage] = useState(0)
  const limit = 10
  const offset = page * limit
  
  const { data, isLoading } = usePokemonList({
    offset, limit
  })

  return (
    <div className="w-full gap-2 px-80 py-12">
      <h1 className="text-center text-5xl font-bold mb-2" >
        Pokemón List
      </h1>

      {
        !isLoading && 
          (
            <>
              <p className="text-sm text-center mb-6" >
                You can double click to see the details of the Pokemón
              </p>
              <PokemonList 
                isLoading={isLoading} 
                list={data?.results || []} 
              />
              <Pagination
                page={page}
                setPage={setPage}
                next={data?.next}
                previous={data?.previous}
              />
            </>
          )
      }
      
    </div>
  );
}
