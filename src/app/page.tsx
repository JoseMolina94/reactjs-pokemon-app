'use client'

import PokemonList from "@/components/PokemonList";
import usePokemonList from "@/hooks/usePokemonList";

export default function Home() {
  const { data, isLoading, error, refetch } = usePokemonList();

  console.log("DDAAAA", data)

  return (
    <div className="w-full gap-2 px-80 py-12">
      <PokemonList isLoading={isLoading} list={data?.results || []} />
    </div>
  );
}
