import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IPokedex, IPokeListItemModel, IPokeListModel } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class PokeApiService {

    /** URL base para busca na API */
    private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0';

    constructor(private http: HttpClient, private loadingService: LoadingService) { }

    /**
     * Recupera todos os pokemons e seus devidos stat's
     */
    get apiListAllPokemons(): Observable<IPokeListModel> {
        this.loadingService.show();
        return this.http.get<IPokeListModel>(this.baseUrl)
            .pipe(
                tap((response: IPokeListModel) => response),
                tap((response: IPokeListModel) => {
                    /** Passa por cada item da lista para pegar o getbyId do pokemon que está sendo iterado no momento */
                    response.results.map((pokemon: IPokeListItemModel) => this.apiGetPokemons(pokemon.url)
                        .subscribe({
                            next: (pokemonSpecificData: IPokedex.Pokemon) => pokemon.status = pokemonSpecificData,
                            error: (error: any) => console.log(error),
                            complete: () => this.loadingService.hide(),
                        }));
                })
            );
    }

    /**
     * Recupera os dados específicos de um pokemon.
     *
     * @param url Endpoint informado para recuperação dos dados do pokemon
     */
    public apiGetPokemons(url: string): Observable<any> {
        return this.http.get<IPokedex.Pokemon>(url)
            .pipe(map((pokemonSpecificData: IPokedex.Pokemon) => pokemonSpecificData))
    }
}
