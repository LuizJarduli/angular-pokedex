import { LoadingService } from './../../services/loading.service';
import { IPokeListModel } from './../../interfaces/poke-list.interface';
import { PokeApiService } from './../../services/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { IPokeListItemModel } from 'src/app/interfaces';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

    public getAllPokemons: IPokeListItemModel[] = [];
    private setAllPokemons: IPokeListItemModel[] = [];

    constructor(private pokeApiService: PokeApiService, private loadingService: LoadingService) {}

    ngOnInit(): void {
        this.pokeApiService.apiListAllPokemons.subscribe({
            next: (response: IPokeListModel) => {
                this.setAllPokemons = response.results
                this.getAllPokemons = [...this.setAllPokemons];
            },
        });
    }

    public getSearch(valueEmitted: string): void {
        this.getAllPokemons = [
            ...this.setAllPokemons.filter((pokemon: IPokeListItemModel) => {
                return !pokemon.name.indexOf(valueEmitted.toLocaleLowerCase());
            })
        ];
    }

    public isRenderingImage(value: boolean): void {
        value ? this.loadingService.hide() : this.loadingService.show();
    }
}
