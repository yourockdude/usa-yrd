import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkComponent } from './work.component';
import { WorkRoutingModule } from './work-routing.module';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
    imports: [
        WorkRoutingModule,
        NgbModule,
        CommonModule,
        BrowserModule,
        OwlModule,
    ],
    exports: [],
    declarations: [WorkComponent],
})
export class WorkModule { }
