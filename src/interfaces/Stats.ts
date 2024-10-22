import { NamedAPIResource } from "./NamedAPIResource";

export interface Stat {
    base_stat: number;
    effort: number;
    stat: NamedAPIResource;
}