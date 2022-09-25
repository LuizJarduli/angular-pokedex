import { IPokedex } from "./pokemon.interface";

export interface IPokeListItemModel {
    name: string;
    url: string;
    status?: IPokedex.Pokemon
}
