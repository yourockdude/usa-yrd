import {
    Component,
    OnInit,
    ViewChild,
    ElementRef,
} from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { UsaYrdService } from '../shared/services/usa-yrd.service';
declare var $;

@Component({
    selector: 'yrd-work',
    templateUrl: 'work.component.html',
    styleUrls: ['work.component.scss'],
})

export class WorkComponent implements OnInit {
    @ViewChild('carousel') carousel;

    slides = [];
    filteredSlides = [];
    type = 'all';

    constructor(
        private elementRef: ElementRef,
        private usaYrdService: UsaYrdService
    ) {
        this.usaYrdService.getSlides().subscribe(res => {
            if (res.success) {
                this.slides = res.data;
                this.filteredSlides = res.data;
            } else {
                console.log(res.error);
            }
        })
    }

    ngOnInit() {
        this.runCarousel();
    }

    runCarousel() {
        setTimeout(() => {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 0,
                nav: true,
                items: 1
            });
        }, 1000);
    }

    filter(type) {
        this.type = type;
        switch (type) {
            case 'desktop':
                this.runCarousel();
                this.filteredSlides = this.slides.filter(s => s.type === 0);
                break;
            case 'mobile':
                this.runCarousel();
                this.filteredSlides = this.slides.filter(s => s.type === 1);
                break;
            case 'all':
                this.runCarousel();
                this.filteredSlides = this.slides;
                break;
        }
        console.log(this.filteredSlides);
    }
}
