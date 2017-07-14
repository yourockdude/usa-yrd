import {
    Component,
    OnInit,
    ElementRef,
    ViewChild
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsaYrdService } from '../shared/services/usa-yrd.service';

@Component({
    selector: 'yrd-addition',
    templateUrl: 'addition.component.html',
    styleUrls: ['addition.component.scss'],
    providers: [UsaYrdService],
})

export class AdditionComponent implements OnInit {
    @ViewChild('image') image: ElementRef;
    additionForm: FormGroup;
    slides = [];
    src: string;

    constructor(
        private formBuilder: FormBuilder,
        private usaYrdService: UsaYrdService,
    ) {
        this.usaYrdService.getSlides().subscribe(res => {
            if (res.success) {
                this.slides = res.data;
            } else {
                console.log(res.error);
            }
        })
        this.buildForm();
    }

    ngOnInit() { }

    buildForm() {
        this.additionForm = this.formBuilder.group({
            'title': [''],
            'site': [''],
            'type': [''],
            'image': [''],
        })
    }

    chooseImg() {
        this.image.nativeElement.value = null;
        this.image.nativeElement.click();
    }

    onFileChange(file) {
        const data = new FormData();
        data.append('slide', file);
        this.usaYrdService.uploadImage(data).subscribe(res => {
            if (res.success) {
                console.log(res);
                this.src = res.data;
            } else {
                console.log(res.error);
            }
        })
    }

    send() {
        this.additionForm.value.image = this.src;
        this.usaYrdService.addSlide(this.additionForm.value).subscribe(res => {
            if (res.success) {
                this.slides.push(res.data);
                delete this.src;
                this.buildForm();
            } else {
                console.log(res.error);
            }
        })
    }

    delete(id) {
        this.usaYrdService.deleteSlide(id).subscribe(res => {
            if (res.success) {
                console.log(res);
                console.log(this.slides.map(s => s.id));
                this.slides.splice(this.slides.map(s => s.id).indexOf(id), 1);
            } else {
                console.log(res.error);
            }
        })
    }
}
