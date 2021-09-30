import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './Auth/auth.module';
import { LandingModule } from './landing/landing.module';
import { SharedModule } from './shared/shared.module';
import { RegisterModule } from './register/register.module';
import { ShoppingModule } from './shopping/shopping.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  LandingModule,
  SharedModule,
  AuthModule,
  RegisterModule,
  ShoppingModule,
  DashboardModule,
  AdminModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
