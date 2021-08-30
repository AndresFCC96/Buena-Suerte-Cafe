import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './Auth/auth.module';
import { LandingModule } from './landing/landing.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AuthModule,
  LandingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
