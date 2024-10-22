import { NamedAPIResource } from "./NamedAPIResource";

export interface Ability {
    ability: NamedAPIResource;
    is_hidden: boolean;
    slot: number;
}