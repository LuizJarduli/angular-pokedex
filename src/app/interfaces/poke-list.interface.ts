import { IPokeListItemModel } from "./poke-list-item.interface";

export interface IPokeListModel {
    count: number;
    next: string;
    previous: string;
    results: IPokeListItemModel[];
}
