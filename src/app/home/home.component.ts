import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { UsaYrdService } from '../shared/services/usa-yrd.service';

@Component({
    selector: 'yrd-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
    providers: [UsaYrdService]
})

export class HomeComponent implements OnInit {

    hireUsForm: FormGroup;
    test = '222222';

    constructor(
        private elementRef: ElementRef,
        private usaYrdService: UsaYrdService,
        private formBuilder: FormBuilder,
    ) {
        this.buildForm();
    }

    ngOnInit() { }

    buildForm() {
        this.hireUsForm = this.formBuilder.group({
            'name': [''],
            'email': [''],
            'phone': [''],
            'message': [''],
            'services': [''],
        })
    }

    submit() {
        console.log('send');
        console.log(this.hireUsForm.value)
    }
}
