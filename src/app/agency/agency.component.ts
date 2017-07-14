import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'yrd-agency',
    templateUrl: 'agency.component.html',
    styleUrls: ['agency.component.scss']
})

export class AgencyComponent implements OnInit {
    slides = [
        {
            id: 1,
            type: 0,
            title: 'project 1',
            site: 'yourockdude.com',
            image: 'https://unsplash.it/800/500/?random=1',
        },
        {
            id: 2,
            type: 0,
            title: 'project 2',
            site: 'yourockdude.com',
            image: 'https://unsplash.it/800/500/?random=2',
        },
        {
            id: 3,
            type: 0,
            title: 'project 3',
            site: 'yourockdude.com',
            image: 'https://unsplash.it/800/500/?random=3',
        },
        {
            id: 4,
            type: 0,
            title: 'project 4',
            site: 'yourockdude.com',
            image: 'https://unsplash.it/800/500/?random=4',
        },
        {
            id: 5,
            type: 1,
            title: 'project 5',
            site: 'yourockdude.com',
            image: 'https://unsplash.it/800/500/?random=5',
        },
        {
            id: 6,
            type: 1,
            title: 'project 6',
            site: 'yourockdude.com',
            image: 'https://unsplash.it/800/500/?random',
        },
    ]
    constructor() { }

    ngOnInit() { }
}
