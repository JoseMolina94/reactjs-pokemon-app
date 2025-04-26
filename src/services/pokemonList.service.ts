
export const pokemonListService = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10');
  return res.json();
};