import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './Auth/auth.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes),
  AuthModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
