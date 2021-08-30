import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule, MdbIconComponent } from 'angular-bootstrap-md';
import { RegisterRoutingModule } from './register-routing.module';
import { FormComponent } from './form/form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RegisterRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class RegisterModule { }
