import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <loading-component></loading-component>
        <router-outlet></router-outlet>
    `,
})
export class AppComponent { }
