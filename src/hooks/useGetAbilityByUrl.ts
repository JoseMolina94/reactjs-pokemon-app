'use client'
import { useQuery } from '@tanstack/react-query';
import { getAbilityByUrlService } from '@/services/getAbilityByUrl.service';

export default function useGetAbilityByUrl(url: string) {
  return useQuery({
    queryKey: [`fetch-pokemon-${url}`], 
    queryFn: () => getAbilityByUrlService(url),
    enabled: !!url,
  });
}