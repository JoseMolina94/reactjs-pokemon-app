'use client'
import { useQuery } from '@tanstack/react-query';
import { getPokemonByUrlService } from '@/services/getPokemonByUrl.service';

export default function useGetPokemonByUrl(pokemonUrl: string) {
  return useQuery({
    queryKey: [`fetch-pokemon-${pokemonUrl}`], 
    queryFn: () => getPokemonByUrlService(pokemonUrl),
    enabled: !!pokemonUrl,
  });
}