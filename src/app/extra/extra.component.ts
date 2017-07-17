import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ExtraService } from '../shared/services/extra.service';
import { UsaYrdService } from '../shared/services/usa-yrd.service'
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'yrd-extra',
    templateUrl: 'extra.component.html'
})

export class ExtraComponent implements OnInit {
    @Input() page: string;
    constructor(
        private extraService: ExtraService,
        private usaYrdService: UsaYrdService,
        private elementRef: ElementRef,
        private router: Router,
    ) {
        this.router.events.subscribe(res => {
            if (res instanceof NavigationEnd) {
                this.clear();
                switch (res.url.replace('/', '')) {
                    case 'agency':
                        console.log('agency')
                        this.addScripts([
                            'assets/3rd-scripts/agency.js',
                        ]);
                        break;
                    case 'contacts':
                        console.log('contact')
                        break;
                    case 'work':
                        console.log('work');
                        setTimeout(() => {
                            this.addScripts([
                                'assets/3rd-scripts/title.js',
                            ]);
                        }, 1000);
                        break;
                    case '':
                        console.log('home')
                        this.addScripts([
                            'assets/3rd-scripts/anime.min.js',
                            'assets/3rd-scripts/hire-us.js',
                        ])
                        break;
                }
            }
        })
    }

    ngOnInit() { }

    clear() {
        const children = this.elementRef.nativeElement.children;
        console.log(children.length);
        for (const c of children) {
            this.elementRef.nativeElement.removeChild(c);
        }
        console.log(children.length);
    }

    addScripts(scripts) {
        for (const script of scripts) {
            const s = document.createElement('script');
            s.type = 'text/javascript';
            s.src = script;

            this.elementRef.nativeElement.insertAdjacentElement('afterbegin', s);
        }
    }
}
