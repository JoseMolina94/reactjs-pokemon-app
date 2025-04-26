'use client'
import { useQuery } from '@tanstack/react-query';
import { pokemonListService } from '@/services/pokemonList.service';

type Props = {
  offset: number
  limit: number
}

export default function usePokemonList({offset = 0, limit = 0}: Props) {
  return useQuery({
    queryKey: ['pokemon-list', offset, limit], 
    queryFn: () => pokemonListService({offset, limit}),
    //staleTime: 1000 * 60 * 5,
  });
}