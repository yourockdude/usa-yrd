import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'yrd-work',
    templateUrl: 'work.component.html',
    styleUrls: ['work.component.scss'],
})

export class WorkComponent implements OnInit {
    slides = [
        {
            id: 1,
            type: 0,
            title: 'project 1',
            site: 'yourockdude.com',
            image: 'https://lorempixel.com/900/500?r=1',
        },
        {
            id: 2,
            type: 0,
            title: 'project 2',
            site: 'yourockdude.com',
            image: 'https://lorempixel.com/900/500?r=2',
        },
        {
            id: 3,
            type: 0,
            title: 'project 3',
            site: 'yourockdude.com',
            image: 'https://lorempixel.com/900/500?r=3',
        },
        {
            id: 4,
            type: 0,
            title: 'project 4',
            site: 'yourockdude.com',
            image: 'https://lorempixel.com/900/500?r=4',
        },
        {
            id: 5,
            type: 1,
            title: 'project 5',
            site: 'yourockdude.com',
            image: 'https://lorempixel.com/900/500?r=5',
        },
        {
            id: 6,
            type: 1,
            title: 'project 6',
            site: 'yourockdude.com',
            image: 'https://lorempixel.com/900/500?r=6',
        },
    ]

    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

    filteredSlides = [];
    constructor() {
        this.filteredSlides = this.slides;
    }

    ngOnInit() { }

    swipe(currentIndex: any, action = this.SWIPE_ACTION.RIGHT) {
        if (action === this.SWIPE_ACTION.RIGHT) {
            console.log('swipe right');
            currentIndex.next();
            console.log(currentIndex)
        }

        if (action === this.SWIPE_ACTION.LEFT) {
            console.log('swipe left');
            currentIndex.prev();
            console.log(currentIndex)
        }
    }

    filter(type?) {
        switch (type) {
            case 0:
                this.filteredSlides = this.slides.filter(s => s.type === 0);
                break;
            case 1:
                this.filteredSlides = this.slides.filter(s => s.type === 1);
                break;
            default:
                this.filteredSlides = this.slides;
                break;
        }
    }
}
