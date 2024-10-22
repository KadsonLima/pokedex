import useAsync from '../useAsync';

import * as pokedexApi from '../../services/searchPokemon';

export default function useSearchPokemon() {
  const {
    data: pokemon,
    loading: pokemonLoading,
    error: pokemonError,
    act: getPokemon,
  } = useAsync(pokedexApi.searchPokemon, false);

  return {
    pokemon,
    pokemonLoading,
    pokemonError,
    getPokemon,
  };
}