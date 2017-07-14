import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { UsaYrdService } from '../shared/services/usa-yrd.service';

@Component({
    selector: 'yrd-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss'],
    providers: [UsaYrdService]
})

export class HomeComponent implements OnInit {
    @ViewChild('section') section: ElementRef;

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
            'name': ['11'],
            'email': [''],
            'phone': [''],
            'message': [''],
            'services': [''],
        })
    }

    send(e) {
        if (e.target.className.includes('send')) {
            const inputs = [].slice
                .call(this.section.nativeElement.getElementsByTagName('input'))
                .map(i => {
                    return {
                        name: i.name,
                        value: i.value,
                    }
                });
            const select = this.section.nativeElement.getElementsByTagName('select');
            const data = {
                name: inputs.find(f => f.name === 'name').value,
                email: inputs.find(f => f.name === 'email').value,
                phone: inputs.find(f => f.name === 'phone').value,
                message: inputs.find(f => f.name === 'message').value,
                services: select[0].value
            }
            this.usaYrdService.hireUs(data).subscribe(res => {
                if (res.success) {
                    console.log(res);
                } else {
                    console.log(res.error);
                }
                this.section.nativeElement.getElementsByClassName('form__close')[0].click()
            })
        }
    }
}
