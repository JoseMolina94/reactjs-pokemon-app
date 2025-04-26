'use client'
import { useQuery } from '@tanstack/react-query';
import { pokemonListService } from '@/services/pokemonList.service';

export default function usePokemonList() {
  return useQuery({
    queryKey: ['pokemon-list'], 
    queryFn: pokemonListService,
    //staleTime: 1000 * 60 * 5,
  });
}