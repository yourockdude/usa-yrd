import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { AgencyModule } from './agency/agency.module';
import { WorkModule } from './work/work.module';
import { AdditionModule } from './addition/addition.module';
import { HeaderModule } from './header/header.module';
import { ExtraModule } from './extra/extra.module';

const routes: Routes = []

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    HeaderModule,
    HomeModule,
    ContactModule,
    AgencyModule,
    WorkModule,
    AdditionModule,
    ExtraModule,
    RouterModule.forRoot(routes),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
