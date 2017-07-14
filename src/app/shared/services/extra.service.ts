import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ExtraService {
    private subject = new Subject<any>();

    observable$ = this.subject.asObservable();

    emit(value) {
        this.subject.next(value);
    }
}
