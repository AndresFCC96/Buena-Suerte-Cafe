import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './Auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { LandingModule } from './landing/landing.module';
import { ShoppingModule } from './shopping/shopping.module';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    LandingModule,
    ShoppingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
