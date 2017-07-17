import { Component } from '@angular/core';
import { UsaYrdService } from './shared/services/usa-yrd.service';
import { ExtraService } from './shared/services/extra.service';

@Component({
    selector: 'yrd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [UsaYrdService, ExtraService],
})
export class AppComponent {

    constructor() { }
}
