import { Ability } from "./Ability";
import { NamedAPIResource } from "./NamedAPIResource";
import { PokemonType } from "./PokemonType";
import { Sprites } from "./Sprites";
import { Stat } from "./Stats";

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    abilities: Ability[];
    forms: NamedAPIResource[];
    species: NamedAPIResource;
    stats: Stat[];
    types: PokemonType[];
    sprites: Sprites;
}