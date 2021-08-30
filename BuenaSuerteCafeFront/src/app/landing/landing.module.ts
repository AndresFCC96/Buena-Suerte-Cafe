import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { CarcarouselComponent } from './carcarousel/carcarousel.component';
import { MDBBootstrapModule, MdbIconComponent } from 'angular-bootstrap-md';
import { BlogsComponent } from './blogs/blogs.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    CarcarouselComponent,
    BlogsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class LandingModule { }
