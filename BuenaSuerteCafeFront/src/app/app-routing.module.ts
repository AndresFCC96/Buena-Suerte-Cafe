import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './Auth/auth.module';
import { LandingModule } from './landing/landing.module';
import { SharedModule } from './shared/shared.module';
import { RegisterModule } from './register/register.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  LandingModule,
  SharedModule,
  AuthModule,
  RegisterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
