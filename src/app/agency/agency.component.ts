import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'yrd-agency',
    templateUrl: 'agency.component.html',
    styleUrls: ['agency.component.scss']
})

export class AgencyComponent implements OnInit, OnDestroy {
    constructor() {
        document.body.className = 'animated bounceInRight';
        setTimeout(function () {
            document.body.className = ''
        }, 1000);
    }

    ngOnInit() { }

    ngOnDestroy(): void { }
}
