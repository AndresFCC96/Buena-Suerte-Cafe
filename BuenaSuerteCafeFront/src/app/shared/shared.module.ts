import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ShoppingModule } from '../shopping/shopping.module';


@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    TopbarComponent,
    FooterComponent,
    HeaderComponent
    ]
})
export class SharedModule { }
