import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IPokedex } from 'src/app/interfaces';

/** Services */
import { PokeApiService } from './../../services/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

    private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon';
    private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species';

    public pokemon: IPokedex.Pokemon[] | any = [];
    public isLoading: boolean = false;
    public apiError: boolean = false;

    constructor( private activatedRoute: ActivatedRoute, private pokeApiService: PokeApiService) { }

    ngOnInit(): void {
        this.getPokemon;
    }

    get getPokemon() {
        const id: string = this.activatedRoute.snapshot.params['id'];
        const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`);
        const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`);

        return forkJoin<[IPokedex.Pokemon, any]>([pokemon, name]).subscribe({
            next: (response) => {
                this.pokemon = response;
                this.isLoading = true;
            },
            error: (error: any) => this.apiError = error
        });
    }

}
