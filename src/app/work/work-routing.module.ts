import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkComponent } from './work.component';

const routes: Routes = [
    { path: 'work', component: WorkComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WorkRoutingModule { }

export const routedComponents = [WorkComponent];
