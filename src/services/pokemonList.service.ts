
type PokemonListServiceProps = {
  offset: number
  limit: number
}

export const pokemonListService = async (props: PokemonListServiceProps) => {
  const {
    offset = 0,
    limit = 10
  } = props
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
  return res.json();
};