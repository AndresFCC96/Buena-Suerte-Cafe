import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ShoppingModule } from '../shopping/shopping.module';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    TopbarComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [
    TopbarComponent,
    FooterComponent,
    HeaderComponent
    ]
})
export class SharedModule { }
