import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UsaYrdService {
    constructor(private http: Http) { }

    uploadImage(data) {
        return this.http.post(`${environment.api}/slider_image`, data)
            .map(res => res.json());
    }

    getSlides() {
        return this.http.get(`${environment.api}/slider`)
            .map(res => res.json());
    }

    addSlide(data) {
        return this.http.post(`${environment.api}/slider`, data)
            .map(res => res.json());
    }

    deleteSlide(id) {
        return this.http.delete(`${environment.api}/slider/${id}`)
            .map(res => res.json());
    }

    readHtml(name?) {
        return this.http.get(`assets/addition/home.html`).map((res: any) => {
            return res._body;
        });
    }
}
