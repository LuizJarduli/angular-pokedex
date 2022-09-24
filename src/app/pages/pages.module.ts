import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Components */
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

/** Routes  */
import { PagesRoutingModule } from './pages-routing.module';

/** Modules */
import { ComponentsModule } from './../components/components.module';

@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        ComponentsModule
    ]
})
export class PagesModule { }
