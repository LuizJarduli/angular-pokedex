import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Components */
import { HomeComponent } from './home/home.component';

/** Routes */
import { PagesRoutingModule } from './pages-routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
    declarations: [
        HomeComponent,
        DetailsComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
    ]
})
export class PagesModule { }
