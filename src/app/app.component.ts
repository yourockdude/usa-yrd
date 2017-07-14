import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UsaYrdService } from './shared/services/usa-yrd.service';
import { ExtraService } from './shared/services/extra.service';

@Component({
    selector: 'yrd-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [UsaYrdService, ExtraService],
})
export class AppComponent {

    constructor(
        private router: Router,
        private usaYrdService: UsaYrdService,
        private extraService: ExtraService,
    ) {
        this.router.events.subscribe(res => {
            if (res instanceof NavigationEnd) {
                this.extraService.emit(res.url)
            }
        })
    }
}
