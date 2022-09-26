import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Components */
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
    declarations: [
        PokeHeaderComponent,
        PokeSearchComponent,
        PokeListComponent,
        LoadingComponent,
    ],
    exports: [
        PokeHeaderComponent,
        PokeSearchComponent,
        PokeListComponent,
        LoadingComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
})
export class ComponentsModule { }