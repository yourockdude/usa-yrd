import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WorkComponent } from './work.component';
import { WorkRoutingModule } from './work-routing.module';
import * as Hammer from 'hammerjs';
export class MyHammerConfig extends HammerGestureConfig {
    overrides =
    {
        'swipe': { velocity: 0.4, threshold: 20, direction: Hammer.DIRECTION_ALL }
    }
}

@NgModule({
    imports: [
        WorkRoutingModule,
        NgbModule,
        CommonModule,
        BrowserModule
    ],
    exports: [],
    declarations: [WorkComponent],
    providers: [{
        provide: HAMMER_GESTURE_CONFIG,
        useClass: MyHammerConfig
    }],
})
export class WorkModule { }
