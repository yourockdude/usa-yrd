import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'yrd-contact',
    templateUrl: 'contact.component.html'
})

export class ContactComponent implements OnInit, OnDestroy {
    constructor() {
        document.body.className = 'animated bounceInRight';
        setTimeout(function () {
            document.body.className = ''
        }, 1000);
    }

    ngOnInit() { }

    ngOnDestroy(): void { }
}
