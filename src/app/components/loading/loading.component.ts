import { LoadingService } from './../../services/loading.service';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'loading-component',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

    public isLoading: Subject<boolean> = this.loadingService.isLoading;

    constructor(private loadingService: LoadingService) { }


}
