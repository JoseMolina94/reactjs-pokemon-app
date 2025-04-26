
export const getPokemonByUrlService = async (pokemonUrl: string) => {
  const res = await fetch(pokemonUrl);
  if (!res.ok) throw new Error('Error fetching Pokémon');
  return res.json();
};