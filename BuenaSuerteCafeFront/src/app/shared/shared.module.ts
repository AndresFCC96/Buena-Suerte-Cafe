import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class SharedModule { }
