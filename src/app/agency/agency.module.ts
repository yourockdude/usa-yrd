import { NgModule } from '@angular/core';
import { AgencyComponent } from './agency.component';
import { AgencyRoutingModule } from './agency-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [AgencyRoutingModule, CommonModule],
    exports: [],
    declarations: [AgencyComponent],
    providers: [],
})
export class AgencyModule { }
