import api from './api';

export async function searchPokemon(pokemon?: string | number, limit:number = 10) {
  let url: string;

  if (typeof pokemon === 'string' && (pokemon.startsWith('https://') || pokemon.startsWith('http://'))) {
    url = pokemon;
  } else {
    url = `/pokemon/`;

    if (pokemon !== undefined) {
      url += `${pokemon?.toString().toLowerCase()}`;
    }

    if (limit) {
      url += `?limit=${limit}`;
    }
  }

  const response = await api.get(url);
  return response.data;
}
