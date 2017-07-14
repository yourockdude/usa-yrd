import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdditionComponent } from './addition.component';
import { AdditionRoutingModule } from './addition-routing.module';

@NgModule({
    imports: [AdditionRoutingModule, ReactiveFormsModule, CommonModule],
    exports: [],
    declarations: [AdditionComponent],
    providers: [],
})
export class AdditionModule { }
