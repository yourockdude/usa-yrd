import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgencyComponent } from './agency.component';

const routes: Routes = [
    { path: 'agency', component: AgencyComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AgencyRoutingModule { }

export const routedComponents = [AgencyComponent];
