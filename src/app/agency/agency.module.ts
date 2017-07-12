import { NgModule } from '@angular/core';
import { AgencyComponent } from './agency.component';
import { AgencyRoutingModule } from './agency-routing.module';

@NgModule({
    imports: [AgencyRoutingModule],
    exports: [],
    declarations: [AgencyComponent],
    providers: [],
})
export class AgencyModule { }
