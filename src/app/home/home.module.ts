import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [HomeRoutingModule, FormsModule, ReactiveFormsModule],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
